import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { serviceCities, serviceMapImage, site } from "@/lib/site";

export default function ServiceArea() {
  return (
    <section
      id="service-area"
      className="border-t border-white/10 bg-ink py-16 sm:py-20"
    >
      <div className="container-x">
        <SectionHeader
          eyebrow="Service Area"
          title="Serving all of Dallas–Fort Worth"
          intro="Based in Richardson and working across the entire DFW Metroplex — from Fort Worth to McKinney, Denton to Rockwall. If your project is in the metroplex, we cover it."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Theme-matched dark DFW map (static local image, decorative) */}
          <Reveal className="relative min-h-[320px] overflow-hidden bg-charcoal sm:min-h-[460px]">
            <Image
              src={serviceMapImage}
              alt="Map of the Dallas–Fort Worth Metroplex service area"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="pointer-events-none object-cover [filter:grayscale(1)_invert(0.91)_contrast(0.86)_brightness(1.08)]"
            />
            {/* Subtle edge vignette so the map blends into the matte-black UI */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_30px_rgba(11,11,12,0.95)]"
            />
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 bg-ink/80 px-3 py-2 font-display text-[11px] font-medium uppercase tracking-[0.2em] text-bronze backdrop-blur-sm">
              <span className="h-1.5 w-1.5 bg-bronze" />
              DFW Coverage
            </span>
          </Reveal>

          {/* City coverage list */}
          <Reveal delay={0.08} className="flex flex-col bg-steel p-8 sm:p-10">
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.22em] text-bronze">
              Cities We Cover
            </h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {serviceCities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2.5 text-[15px] text-bone"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 shrink-0 bg-concrete"
                  />
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-white/10 pt-6 text-sm leading-relaxed text-concrete-light">
              Don&apos;t see your city? If it&apos;s in the metroplex, we likely
              cover it.{" "}
              <a href={site.phoneHref} className="text-bronze hover:underline">
                Call {site.phone}
              </a>{" "}
              to confirm.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
