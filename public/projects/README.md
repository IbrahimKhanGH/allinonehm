# Project photos

Drop real project photos in this folder, then point to them from
`lib/site.js` → `projects[].image`.

Example:

```js
{ title: "Commercial Buildout", tag: "Commercial", image: "/projects/buildout-01.jpg" },
```

Tips for a consistent premium look:
- Landscape orientation, ~1600px wide.
- The gallery auto-applies grayscale + high contrast, so even average phone
  photos read as intentional, architectural shots.
- Keep file sizes reasonable (compress to ~200–400KB).

The same approach works for the hero: add a real image as a background on the
`.hero-photo` layer in `components/Hero.jsx`.
