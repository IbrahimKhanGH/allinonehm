import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/10 bg-charcoal py-16 sm:py-20"
    >
      <div className="container-x">
        <SectionHeader
          eyebrow="Capabilities"
          title="One team. Every phase of the build."
          intro="From the demising wall to the final coat of paint — and the concrete and roof in between. Full-scope execution under one roof."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 4) * 0.06}
              className="group relative flex h-full flex-col bg-ink p-7 transition-colors duration-300 hover:bg-steel"
            >
              <span className="font-display text-xs font-medium uppercase tracking-[0.2em] text-concrete">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold uppercase leading-tight tracking-tight text-bone transition-colors group-hover:text-bronze">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-concrete-light">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
