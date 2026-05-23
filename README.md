# All In One Home Management — Website

Premium single-page lead-generation site for **All In One Home Management LLC**
(Richardson / Dallas–Fort Worth, TX). Commercial buildouts, tenant
improvements, investor remodels, house flips, concrete, roofing, and turnkey
renovation.

Built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build && npm start
```

## Deploy to Vercel

Push to a Git repo and import it at [vercel.com/new](https://vercel.com/new).
No environment variables are required for the base site. Framework preset:
**Next.js** (auto-detected).

## Editing content

Everything business-facing lives in **`lib/site.js`**:

- Contact info, address, hours, service area, rating
- Nav links
- Section copy: audiences, services, process steps, gallery items, reasons
- Quote-form project-type options

Change it there and it flows through the whole page.

## Project structure

```
app/
  layout.jsx     # fonts, SEO metadata, LocalBusiness JSON-LD
  page.jsx       # assembles the sections
  globals.css    # design tokens + grayscale placeholder textures
  robots.js      # SEO
  sitemap.js     # SEO
components/       # Header, Hero, Services, Process, Gallery, Contact, Footer, ...
lib/site.js       # single source of truth for all content
public/projects/  # drop real photos here (see that folder's README)
```

## Real photos

The gallery and hero use grayscale CSS placeholders out of the box. To use real
photos, drop them in `public/projects/` and set `image` paths in
`lib/site.js`. See `public/projects/README.md`.

## Wiring the quote form to email

The form currently uses a **placeholder submit handler** in
`components/Contact.jsx` that shows a success state and logs the structured
payload to the console.

To actually deliver leads to `management@allinonehm.com`, swap the placeholder
for a real call to the included API route stub (`app/api/quote/route.js`) and
add an email provider (e.g. [Resend](https://resend.com)). Instructions are in
both files.
```js
// in components/Contact.jsx, replace the placeholder block with:
const res = await fetch("/api/quote", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});
if (!res.ok) throw new Error("Request failed");
```
