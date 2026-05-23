import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Brand mark — the cream/bronze "All In One Home Management" logo.
 * Light-on-transparent, so it sits cleanly on the matte-black UI.
 */
export default function Brand({
  className = "",
  onClick,
  imgClassName = "h-10 sm:h-11",
  priority = false,
}) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className={`inline-flex items-center ${className}`}
      aria-label={`${site.name} — home`}
    >
      <Image
        src="/logo.png"
        alt={site.name}
        width={300}
        height={77}
        priority={priority}
        className={`${imgClassName} w-auto`}
      />
    </a>
  );
}
