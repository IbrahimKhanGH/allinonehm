import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/10 bg-ink py-20 sm:py-24">
      {/* faint architectural grid backdrop */}
      <div
        aria-hidden="true"
        className="tex-base absolute inset-0 -z-10 opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-transparent to-ink"
      />

      <div className="container-x flex flex-col items-center text-center">
        <Reveal as="span" className="eyebrow mb-5">
          <span className="h-px w-8 bg-bronze" />
          Start the project
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl text-balance font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight text-bone sm:text-4xl md:text-5xl">
            Get a defined scope.
            <br className="hidden sm:block" /> Not a vague estimate.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-concrete-light sm:text-lg">
            Tell us about the space. We&apos;ll come back with a clear scope,
            timeline, and budget — so you can move.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-9 flex flex-wrap justify-center gap-4">
          <a href="#contact" className="btn-primary">
            Request a Quote
          </a>
          <a href={site.phoneHref} className="btn-outline">
            Call {site.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
