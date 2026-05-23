"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { projectTypes, site } from "@/lib/site";

const initial = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
  company: "", // honeypot — must stay empty
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Request failed");
      }

      setStatus("success");
      setForm(initial);
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-charcoal py-16 sm:py-20"
    >
      <div className="container-x">
        {/* Big final CTA */}
        <div className="max-w-3xl">
          <Reveal as="span" className="eyebrow mb-4">
            <span className="h-px w-8 bg-bronze" />
            Request a Quote
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight text-bone sm:text-4xl md:text-5xl">
              Ready to turn a space into something finished?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-concrete-light sm:text-lg">
              Tell us about the project and we&apos;ll come back with a clear
              scope. Or call and talk it through — we serve all of {site.serviceArea}.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <Reveal className="bg-ink p-8 sm:p-10">
            {status === "success" ? (
              <div className="flex h-full min-h-[420px] flex-col items-start justify-center">
                <span
                  aria-hidden="true"
                  className="grid h-14 w-14 place-items-center border border-bronze text-2xl text-bronze"
                >
                  ✓
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-tight text-bone">
                  Request received
                </h3>
                <p className="mt-3 max-w-md text-concrete-light">
                  Thanks — we&apos;ve got your project details and will reach out
                  shortly. Need a faster answer?{" "}
                  <a href={site.phoneHref} className="text-bronze hover:underline">
                    Call {site.phone}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-outline mt-8"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Honeypot — hidden from people, catches bots */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                  }}
                >
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={update("company")}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="Name"
                    id="name"
                    value={form.name}
                    onChange={update("name")}
                    autoComplete="name"
                    required
                  />
                  <Field
                    label="Phone"
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    autoComplete="tel"
                    required
                  />
                </div>

                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  autoComplete="email"
                  required
                />

                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="label">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      value={form.projectType}
                      onChange={update("projectType")}
                      required
                      className="input appearance-none pr-10"
                    >
                      <option value="" disabled>
                        Select a project type
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-ink text-bone">
                          {t}
                        </option>
                      ))}
                    </select>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-concrete"
                    >
                      ▾
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="label">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Address, scope, timeline, square footage — whatever you've got."
                    className="input resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-bronze">
                    {errorMsg || "Something went wrong."} Please call{" "}
                    <a href={site.phoneHref} className="underline">
                      {site.phone}
                    </a>{" "}
                    instead.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-bronze mt-1 w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Request a Quote"}
                </button>
                <p className="text-xs text-concrete">
                  We&apos;ll only use your info to follow up on this project.
                </p>
              </form>
            )}
          </Reveal>

          {/* Contact info panel */}
          <Reveal delay={0.08} className="bg-steel p-8 sm:p-10">
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.22em] text-bronze">
              Direct Contact
            </h3>

            <ul className="mt-6 flex flex-col divide-y divide-white/10">
              <InfoRow label="Call">
                <a
                  href={site.phoneHref}
                  className="text-lg text-bone transition-colors hover:text-bronze"
                >
                  {site.phone}
                </a>
              </InfoRow>
              <InfoRow label="Email">
                <a
                  href={site.emailHref}
                  className="break-all text-bone transition-colors hover:text-bronze"
                >
                  {site.email}
                </a>
              </InfoRow>
              <InfoRow label="Office">
                <a
                  href={site.address.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone transition-colors hover:text-bronze"
                >
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </a>
              </InfoRow>
              <InfoRow label="Hours">
                <ul className="space-y-1 text-bone">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-6">
                      <span className="text-concrete-light">{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </InfoRow>
              <InfoRow label="Service Area">
                <span className="text-bone">{site.serviceArea}</span>
              </InfoRow>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input id={id} name={id} type={type} className="input" {...props} />
    </div>
  );
}

function InfoRow({ label, children }) {
  return (
    <li className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-concrete">
        {label}
      </span>
      <div className="text-[15px] leading-relaxed">{children}</div>
    </li>
  );
}
