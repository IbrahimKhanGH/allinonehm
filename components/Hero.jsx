"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { media, site, trustRow } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      {/* Real project photo — grayscale, high-contrast, cinematic. Slow scale-in. */}
      <motion.div
        aria-hidden="true"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={media.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: media.heroPosition }}
          className="object-cover grayscale contrast-[1.15] brightness-[0.55]"
        />
        <div className="grain absolute inset-0" />
      </motion.div>

      {/* Dark gradient overlays for legibility + drama */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/50 via-ink/65 to-ink"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-r from-ink/90 via-ink/40 to-transparent"
      />

      <div className="container-x relative z-10 flex min-h-[92vh] flex-col justify-center pb-16 pt-[calc(var(--header-h)+3rem)]">
        <motion.span {...rise(0.05)} className="eyebrow mb-6">
          <span className="h-px w-8 bg-bronze" />
          Commercial Renovation & Buildouts · DFW
        </motion.span>

        <motion.h1
          {...rise(0.12)}
          className="max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tightest text-bone sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          From Empty Shell <br className="hidden sm:block" />
          to <span className="text-bronze">Finished Space</span>
        </motion.h1>

        <motion.p
          {...rise(0.2)}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-concrete-light sm:text-xl"
        >
          Commercial buildouts, investor remodels, concrete, roofing, and
          turnkey renovation projects across Dallas–Fort Worth.
        </motion.p>

        <motion.div {...rise(0.28)} className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">
            Request a Quote
          </a>
          <a href={site.phoneHref} className="btn-outline">
            Call {site.phone}
          </a>
        </motion.div>

        {/* Trust row */}
        <motion.ul
          {...rise(0.4)}
          className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-7 text-[12px] font-medium uppercase tracking-[0.16em] text-concrete-light"
        >
          {trustRow.map((item, i) => (
            <li key={item} className="flex items-center gap-7">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="hidden h-3 w-px bg-white/15 sm:block"
                />
              )}
              <span className={item.includes("5.0") ? "text-bronze" : undefined}>
                {item}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Bottom hairline into next section */}
      <div className="absolute inset-x-0 bottom-0 z-[2] h-px bg-white/10" />
    </section>
  );
}
