import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { media, process } from "@/lib/site";

export default function Process() {
  return (
    <section
      id="process"
      className="relative isolate overflow-hidden border-t border-white/10 bg-ink py-24 sm:py-28"
    >
      {/* faint architectural grid backdrop */}
      <div
        aria-hidden="true"
        className="tex-base absolute inset-0 -z-10 opacity-40"
      />

      <div className="container-x">
        <SectionHeader
          eyebrow="The Process"
          title="Shell → Structure → Finish"
          intro="A clear path from a raw or outdated space to one that's functional, clean, and ready to use, lease, or sell."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Feature image — execution / structure */}
          <Reveal className="relative min-h-[340px] overflow-hidden border border-white/10 sm:min-h-[440px] lg:min-h-full">
            <Image
              src={media.process}
              alt="Concrete pour in progress on an All In One Home Management job site"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              style={{ objectPosition: media.processPosition }}
              className="object-cover grayscale contrast-[1.15] brightness-[0.7]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <span className="eyebrow !text-bronze">In the field</span>
              <p className="mt-2 max-w-xs font-display text-lg font-medium uppercase leading-tight tracking-tight text-bone">
                Built on schedule, coordinated end to end
              </p>
            </div>
          </Reveal>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            {process.map((p, i) => (
              <Reveal
                key={p.step}
                delay={i * 0.1}
                className="group relative flex gap-6 border border-white/10 bg-charcoal p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-bronze/50 sm:p-8"
              >
                <span className="font-display text-5xl font-bold leading-none text-white/10 transition-colors duration-300 group-hover:text-bronze/30 sm:text-6xl">
                  {p.step}
                </span>
                <div>
                  <span className="eyebrow !text-concrete">{p.phase}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold uppercase leading-tight tracking-tight text-bone">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-concrete-light">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
