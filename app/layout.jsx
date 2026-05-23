import { Oswald, Inter } from "next/font/google";
import { site } from "@/lib/site";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "All In One Home Management | Commercial Buildouts & Renovation in DFW",
    template: "%s | All In One Home Management",
  },
  description:
    "All In One Home Management LLC turns empty shells into finished spaces across Dallas–Fort Worth. Commercial buildouts, tenant improvements, investor remodels, house flips, concrete, and roofing. Request a quote: (469) 996-6696.",
  keywords: [
    "commercial buildout DFW",
    "tenant improvement Dallas",
    "investor remodel Fort Worth",
    "house flip renovation Richardson TX",
    "concrete contractor DFW",
    "roofing Dallas",
    "turnkey renovation Dallas Fort Worth",
  ],
  authors: [{ name: site.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "All In One Home Management | From Empty Shell to Finished Space",
    description:
      "Commercial buildouts, investor remodels, concrete, roofing, and turnkey renovation projects across Dallas–Fort Worth.",
    images: [{ url: "/projects/exterior-home-evening.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All In One Home Management | From Empty Shell to Finished Space",
    description:
      "Commercial buildouts, investor remodels, concrete, roofing, and turnkey renovation across Dallas–Fort Worth.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0B0B0C",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.legalName,
  image: `${site.url}/projects/exterior-home-evening.png`,
  "@id": site.url,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "401 S Sherman St, Ste 219",
    addressLocality: "Richardson",
    addressRegion: "TX",
    postalCode: "75081",
    addressCountry: "US",
  },
  areaServed: "Dallas–Fort Worth, TX",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
