// ---------------------------------------------------------------------------
// Single source of truth for business info + page content.
// Edit anything here and it flows through the whole site.
// ---------------------------------------------------------------------------

export const site = {
  name: "All In One Home Management",
  legalName: "All In One Home Management LLC",
  short: "AIOHM",
  tagline: "From Empty Shell to Finished Space",

  phone: "(469) 996-6696",
  phoneHref: "tel:+14699966696",
  email: "management@allinonehm.com",
  emailHref: "mailto:management@allinonehm.com",

  address: {
    line1: "401 S Sherman St, Ste 219",
    line2: "Richardson, TX 75081",
    full: "401 S Sherman St, Ste 219, Richardson, TX 75081",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=401+S+Sherman+St+Ste+219+Richardson+TX+75081",
  },

  hours: [
    { days: "Monday – Friday", time: "8:00am – 5:00pm" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],

  serviceArea: "Richardson · Dallas–Fort Worth, TX",
  rating: "5.0",
  // Live site URL — drives canonical, OG/preview image, sitemap, robots, JSON-LD.
  // Change this to the custom domain (https://allinonehm.com) once connected.
  url: "https://allinonehm.vercel.app",
};

// Cities / metros covered across the DFW Metroplex.
export const serviceCities = [
  "Dallas",
  "Fort Worth",
  "Plano",
  "Richardson",
  "Garland",
  "Irving",
  "Arlington",
  "McKinney",
  "Frisco",
  "Denton",
  "Carrollton",
  "Allen",
  "Lewisville",
  "Grand Prairie",
  "Mesquite",
  "Rockwall",
  "Mansfield",
  "Grapevine",
  "Flower Mound",
  "The Colony",
];

// Static DFW map — stitched from OpenStreetMap tiles and served locally, so it
// always renders (no API key, no WebGL, no third-party runtime dependency).
// To regenerate, re-run scripts/build-map.py.
export const serviceMapImage = "/dfw-map.png";

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Section 3 — Who We Build For
export const audiences = [
  {
    title: "Commercial Property Owners",
    body: "We take vacant or outdated commercial space and deliver it finished — built to code, on schedule, and ready to lease.",
  },
  {
    title: "Real Estate Investors",
    body: "Investor-ready execution with clear scope and budgets. We protect your timeline so the numbers still work at the finish line.",
  },
  {
    title: "House Flippers",
    body: "Full renovation handled end to end. We turn tired properties into clean, sellable finished homes — fast and without the chaos.",
  },
  {
    title: "Tenant Improvement Projects",
    body: "Demising walls, finishes, MEP coordination, and buildouts that get a tenant moved in and operating without the runaround.",
  },
];

// Section 4 — Services
export const services = [
  {
    title: "Commercial Buildouts",
    body: "Raw shell to operating space — framing, finishes, and full coordination.",
  },
  {
    title: "Tenant Improvements",
    body: "Reconfigure and finish leased space to a tenant's exact spec.",
  },
  {
    title: "Investor Remodels",
    body: "Scope-driven remodels built to hit your return, not pad the invoice.",
  },
  {
    title: "House Flip Renovations",
    body: "Whole-home turnaround — kitchens, baths, flooring, paint, and curb.",
  },
  {
    title: "Concrete Work",
    body: "Driveways, slabs, walkways, and structural flatwork done right.",
  },
  {
    title: "Roofing",
    body: "Tear-off, replacement, and repair built to pass inspection.",
  },
  {
    title: "Residential Remodels",
    body: "Interior and full-property remodels for owners and landlords.",
  },
  {
    title: "Turnkey Project Management",
    body: "One team, one point of contact, from walkthrough to handoff.",
  },
];

// Section 5 — Process
export const process = [
  {
    step: "01",
    phase: "Shell",
    title: "Walkthrough & Scope",
    body: "We walk the space, define exactly what gets built, and put a clear scope and budget in writing — no vague estimates.",
  },
  {
    step: "02",
    phase: "Structure",
    title: "Buildout & Coordination",
    body: "Our team and trades execute on a managed schedule. You get one point of contact and straight answers the whole way.",
  },
  {
    step: "03",
    phase: "Finish",
    title: "Finished Space Delivery",
    body: "We deliver a clean, finished, inspection-ready space — built to use, lease, or sell the day we hand it over.",
  },
];

// Feature imagery used in the hero + process sections.
// Swap any path here to re-treat that section with a different photo.
export const media = {
  hero: "/projects/exterior-home-evening.png",
  heroPosition: "center 60%",
  process: "/projects/concrete-pour-1.png",
  processPosition: "center 55%",
};

// Section 6 — Project Gallery (editorial bento layout).
// `span` controls the tile footprint; `position` tunes the crop focal point.
// Photos are auto-treated grayscale + high contrast for a consistent look.
export const projects = [
  {
    title: "Bathroom Remodel",
    tag: "Transformation",
    image: "/projects/bathroom-remodel-1.png",
    span: "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2",
    position: "center",
  },
  {
    title: "Master Bedroom",
    tag: "Finished Space",
    image: "/projects/master-bedroom-remodel.png",
    span: "col-span-2 lg:col-span-2",
    position: "center 40%",
  },
  {
    title: "Interior Renovation",
    tag: "Remodel",
    image: "/projects/arched-window-room.png",
    span: "col-span-2 lg:col-span-2",
    position: "center 45%",
  },
  {
    title: "Roofing Work",
    tag: "Field Work",
    image: "/projects/roofing-ladder-work.png",
    span: "col-span-1 lg:col-span-1",
    position: "center",
  },
  {
    title: "Window Installation",
    tag: "Capability",
    image: "/projects/window-installation.png",
    span: "col-span-1 lg:col-span-1",
    position: "center",
  },
  {
    title: "Concrete Driveway",
    tag: "Concrete",
    image: "/projects/concrete-driveway-finished.png",
    span: "col-span-2 lg:col-span-2",
    position: "center 55%",
  },
  {
    title: "Flatwork & Pour",
    tag: "Concrete",
    image: "/projects/concrete-driveway-wide.png",
    span: "col-span-2 lg:col-span-2",
    position: "center 55%",
  },
  {
    title: "Tile & Fixtures",
    tag: "Transformation",
    image: "/projects/bathroom-remodel-2.png",
    span: "col-span-2 lg:col-span-2",
    position: "center",
  },
];

// Section 7 — Why Clients Choose Us
export const reasons = [
  {
    title: "Turnkey execution",
    body: "One team owns the whole job — demo to final walkthrough — so nothing falls through the cracks.",
  },
  {
    title: "Multi-service capability",
    body: "Buildouts, concrete, roofing, and full remodels under one roof. No juggling five contractors.",
  },
  {
    title: "Investor-friendly communication",
    body: "Clear scope, real timelines, and updates that respect your budget and your numbers.",
  },
  {
    title: "DFW-based team",
    body: "Local crews across Dallas–Fort Worth who show up and keep the schedule moving.",
  },
  {
    title: "Commercial & residential",
    body: "Built for tenant improvements and house flips alike — same standard of finish.",
  },
  {
    title: "Clear quote process",
    body: "Tell us the project, get a defined scope. No mystery line items, no surprises.",
  },
];

// Hero trust row
export const trustRow = [
  "Commercial Buildouts",
  "Investor Projects",
  "Concrete & Roofing",
  "DFW Service Area",
  "5.0 Google Rating",
];

// Quote form — project type options
export const projectTypes = [
  "Commercial Buildout",
  "Tenant Improvement",
  "Investor Remodel",
  "House Flip",
  "Concrete",
  "Roofing",
  "Residential Remodel",
  "Other",
];
