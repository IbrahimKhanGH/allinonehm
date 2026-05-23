import { NextResponse } from "next/server";

/**
 * Quote-request endpoint.
 *
 * The front-end form (components/Contact.jsx) currently uses a client-side
 * placeholder handler. To deliver leads to management@allinonehm.com:
 *
 *   1. Point the form's submit at this route (see README).
 *   2. Add an email provider below — Resend is shown as an example:
 *
 *      npm install resend
 *      // set RESEND_API_KEY in your environment / Vercel project settings
 *
 *      import { Resend } from "resend";
 *      const resend = new Resend(process.env.RESEND_API_KEY);
 *      await resend.emails.send({
 *        from: "Quote Form <quotes@allinonehm.com>",
 *        to: "management@allinonehm.com",
 *        replyTo: email,
 *        subject: `New quote request — ${projectType || "General"} (${name})`,
 *        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n` +
 *              `Project: ${projectType}\n\n${message}`,
 *      });
 */
export async function POST(request) {
  try {
    const { name, phone, email, projectType, message } = await request.json();

    // Minimal server-side validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // --- Wire up email delivery here (see comment above). ---
    console.log("Quote request received:", {
      name,
      phone,
      email,
      projectType,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
