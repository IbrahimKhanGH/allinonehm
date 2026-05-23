import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { reasons, site } from "@/lib/site";

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="border-t border-white/10 bg-ink py-24 sm:py-28"
    >
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: heading + rating block */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Why All In One"
            title="Reliable execution, start to finish"
          />
          <Reveal delay={0.15} className="mt-8">
            <div className="flex items-center gap-5 border border-white/10 bg-charcoal p-6">
              <span className="font-display text-5xl font-bold leading-none text-bone">
                {site.rating}
              </span>
              <div>
                <div className="flex gap-0.5 text-bronze" aria-hidden="true">
                  {"★★★★★"}
                </div>
                <p className="mt-1 text-sm text-concrete-light">
                  Google rating across DFW projects
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: reasons list */}
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={(i % 2) * 0.06}
              className="flex h-full gap-4 bg-charcoal p-7"
            >
              <span
                aria-hidden="true"
                className="mt-1 h-2 w-2 shrink-0 bg-bronze"
              />
              <div>
                <h3 className="font-display text-base font-semibold uppercase leading-tight tracking-tight text-bone">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-concrete-light">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
