"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Sticky bottom Call / Quote bar — mobile only. Slides in after the hero
 * (so it doesn't duplicate the hero CTAs) and hides while the quote form
 * itself is on screen.
 */
export default function MobileCTABar() {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolledPast(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let io;
    const contact = document.querySelector("#contact");
    if (contact) {
      io = new IntersectionObserver(
        ([entry]) => setContactInView(entry.isIntersecting),
        { threshold: 0.12 }
      );
      io.observe(contact);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const show = scrolledPast && !contactInView;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-smooth md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2.5 border-t border-white/10 bg-ink/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.65rem)] pt-2.5 backdrop-blur-md">
        <a
          href={site.phoneHref}
          className="btn-outline flex-1 !px-3 !py-3.5 !text-[13px]"
        >
          Call Now
        </a>
        <a
          href="#contact"
          className="btn-bronze flex-1 !px-3 !py-3.5 !text-[13px]"
        >
          Request Quote
        </a>
      </div>
    </div>
  );
}
