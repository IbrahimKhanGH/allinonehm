import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { audiences } from "@/lib/site";

export default function WhoWeBuildFor() {
  return (
    <section id="who" className="border-t border-white/10 bg-ink py-24 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Who We Build For"
          title="Built for people who need it done right"
          intro="Not random handyman work — structured project execution for owners and investors who answer to a timeline and a budget."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 0.07}
              className="group flex h-full flex-col bg-charcoal p-7 transition-colors duration-300 hover:bg-steel"
            >
              <span className="font-display text-sm font-medium text-bronze">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold uppercase leading-tight tracking-tight text-bone">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-concrete-light">
                {a.body}
              </p>
              <span className="mt-6 block h-px w-0 bg-bronze transition-all duration-500 ease-smooth group-hover:w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
