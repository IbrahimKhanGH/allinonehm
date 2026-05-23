import { site } from "@/lib/site";

/**
 * Text-based brand treatment. Carries the identity instead of the weak logo.
 * `compact` shows the AIOHM monogram mark; the wordmark always renders.
 */
export default function Brand({ className = "", onClick }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className={`group flex items-center gap-3 ${className}`}
      aria-label={`${site.name} — home`}
    >
      <span className="grid h-9 w-9 place-items-center border border-white/25 font-display text-[11px] font-semibold uppercase tracking-[0.04em] text-bone transition-colors duration-300 group-hover:border-bronze group-hover:text-bronze">
        {site.short}
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold uppercase tracking-[0.06em] text-bone sm:text-base">
          All In One
        </span>
        <span className="font-display text-[10px] font-medium uppercase tracking-[0.32em] text-concrete-light">
          Home Management
        </span>
      </span>
    </a>
  );
}
