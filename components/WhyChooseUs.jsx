import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { reasons, site } from "@/lib/site";

export default function WhyChooseUs() {
  return (
    <section id="why" className="border-t border-white/10 bg-charcoal py-24 sm:py-28">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left: heading + rating */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Why All In One"
            title="Reliable execution, start to finish"
          />
          <Reveal delay={0.15} className="mt-8 flex items-center gap-5">
            <span className="font-display text-6xl font-bold leading-none text-bone">
              {site.rating}
            </span>
            <div>
              <div className="flex gap-0.5 text-bronze" aria-hidden="true">
                ★★★★★
              </div>
              <p className="mt-1 text-sm text-concrete-light">
                Google rating across DFW projects
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right: borderless list, hairline-separated (no boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={(i % 2) * 0.06}
              className="group border-t border-white/10 py-6 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
            >
              <h3 className="flex items-baseline gap-3 font-display text-base font-semibold uppercase leading-tight tracking-tight text-bone">
                <span className="text-sm font-medium text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {r.title}
              </h3>
              <p className="mt-2 pl-8 text-sm leading-relaxed text-concrete-light">
                {r.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
