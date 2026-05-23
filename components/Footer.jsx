import Brand from "@/components/Brand";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="container-x pt-16 pb-28 md:pb-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + positioning */}
          <div>
            <Brand imgClassName="h-16 sm:h-20" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-concrete-light">
              Commercial buildouts, investor remodels, concrete, roofing, and
              turnkey renovation across Dallas–Fort Worth. From empty shell to
              finished space.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn-bronze !px-5 !py-3 !text-[12px]">
                Request a Quote
              </a>
              <a
                href={site.phoneHref}
                className="btn-outline !px-5 !py-3 !text-[12px]"
              >
                {site.phone}
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-display text-xs font-medium uppercase tracking-[0.22em] text-concrete">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-concrete-light transition-colors hover:text-bone"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xs font-medium uppercase tracking-[0.22em] text-concrete">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-concrete-light">
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-bone"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="break-all transition-colors hover:text-bone"
                >
                  {site.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {site.address.line1}
                <br />
                {site.address.line2}
              </li>
              <li className="pt-2 text-concrete">
                Mon–Fri 8am–5pm · Sat–Sun closed
              </li>
              <li className="text-concrete">{site.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-concrete sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.18em]">
            Commercial · Investor · Residential — DFW
          </p>
        </div>
      </div>
    </footer>
  );
}
