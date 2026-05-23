import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { audiences } from "@/lib/site";

export default function WhoWeBuildFor() {
  return (
    <section id="who" className="border-t border-white/10 bg-ink py-16 sm:py-20">
      <div className="container-x">
        <SectionHeader
          eyebrow="Who We Build For"
          title="Built for people who answer to a deadline"
          intro="Not random handyman work — structured project execution for owners and investors who need a space finished, on time and on budget."
        />

        {/* Airy typographic columns, separated by hairlines (no boxes) */}
        <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {audiences.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 0.08}
              className="group relative lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              {/* vertical divider between columns on desktop */}
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 hidden h-full w-px bg-white/10 lg:block"
                />
              )}
              <span className="font-display text-4xl font-bold leading-none text-bronze/80 transition-colors duration-300 group-hover:text-bronze">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold uppercase leading-tight tracking-tight text-bone">
                {a.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-concrete-light">
                {a.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
