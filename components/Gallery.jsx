import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/lib/site";

export default function Gallery() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-charcoal py-24 sm:py-28"
    >
      <div className="container-x">
        <SectionHeader
          eyebrow="Capability Gallery"
          title="What a finished space looks like"
          intro="Real DFW jobs — interiors, concrete, roofing, and field work. Raw and outdated spaces turned into finished, functional environments."
        />

        {/* Editorial bento — object-cover crops tastefully, never stretches. */}
        <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[210px]">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 4) * 0.06}
              className={`group relative overflow-hidden border border-white/10 ${p.span}`}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                style={{ objectPosition: p.position }}
                className="object-cover grayscale contrast-[1.12] brightness-[0.82] transition-all duration-[800ms] ease-smooth group-hover:scale-[1.04] group-hover:grayscale-[0.35] group-hover:brightness-90"
              />

              {/* Consistent cinematic overlay across every tile */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent transition-opacity duration-300 group-hover:from-ink/95"
              />

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
                <div>
                  <span className="block font-display text-[10px] font-medium uppercase tracking-[0.22em] text-bronze sm:text-[11px]">
                    {p.tag}
                  </span>
                  <h3 className="mt-1 font-display text-sm font-semibold uppercase tracking-tight text-bone sm:text-lg">
                    {p.title}
                  </h3>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden translate-x-2 text-bone opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
                >
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <p className="text-sm text-concrete">
            Have a project in mind?{" "}
            <a
              href="#contact"
              className="text-bronze underline-offset-4 hover:underline"
            >
              Request a quote
            </a>{" "}
            and we&apos;ll scope it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
