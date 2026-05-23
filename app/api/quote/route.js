import { NextResponse } from "next/server";

/**
 * Quote-request endpoint — emails submissions to the business via Resend (free).
 *
 * Setup (one time):
 *   1. Sign up at https://resend.com — IMPORTANT: use management@allinonehm.com
 *      as the account email. On the free tier, the shared sender below can
 *      deliver to your own account email with NO domain verification needed.
 *   2. Create an API key (Resend → API Keys) and set it as an env var, in
 *      .env.local for local dev and in your Vercel project settings:
 *        RESEND_API_KEY   = re_xxxxxxxx               (required)
 *        QUOTE_TO_EMAIL   = management@allinonehm.com (optional override)
 *        QUOTE_FROM_EMAIL = All In One Home Management <onboarding@resend.dev>
 *
 *   Optional polish: verify the allinonehm.com domain in Resend, then change
 *   QUOTE_FROM_EMAIL to your own address (e.g. quotes@allinonehm.com) so it can
 *   also send to addresses other than the account owner.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email, projectType, message, company } = body || {};

  // Honeypot — bots fill the hidden "company" field; humans never see it.
  if (company) return NextResponse.json({ ok: true });

  if (!name || !phone || !email) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, phone, and email." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not set — quote NOT delivered:", {
      name,
      phone,
      email,
      projectType,
    });
    return NextResponse.json(
      { ok: false, error: "Email isn't configured yet." },
      { status: 503 }
    );
  }

  const to = process.env.QUOTE_TO_EMAIL || "management@allinonehm.com";
  const from =
    process.env.QUOTE_FROM_EMAIL ||
    "All In One Home Management <onboarding@resend.dev>";

  const safe = (v) => String(v || "—").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const text =
    `New quote request\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email}\n` +
    `Project type: ${projectType || "—"}\n\n` +
    `Details:\n${message || "—"}\n`;
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#111;line-height:1.6">
      <h2 style="margin:0 0 12px">New quote request</h2>
      <p style="margin:0 0 4px"><strong>Name:</strong> ${safe(name)}</p>
      <p style="margin:0 0 4px"><strong>Phone:</strong> <a href="tel:${safe(phone)}">${safe(phone)}</a></p>
      <p style="margin:0 0 4px"><strong>Email:</strong> <a href="mailto:${safe(email)}">${safe(email)}</a></p>
      <p style="margin:0 0 12px"><strong>Project type:</strong> ${safe(projectType)}</p>
      <p style="margin:0 0 4px"><strong>Details:</strong></p>
      <p style="margin:0;white-space:pre-wrap">${safe(message)}</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New quote request — ${projectType || "General"} (${name})`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", res.status, await res.text());
      return NextResponse.json(
        { ok: false, error: "Could not send right now. Please call us." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send right now. Please call us." },
      { status: 502 }
    );
  }
}
