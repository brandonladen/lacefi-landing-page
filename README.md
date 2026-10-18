# lacefi.co.ke

The LaceFi product site, built with [Astro](https://astro.build). It builds to plain static HTML, CSS and a little JavaScript in `dist/`.

## Commands

```sh
npm install
npm run dev       # local server at http://localhost:4321 with live reload
npm run build     # type check (astro check), then build to dist/
npm run preview   # serve the built dist/
```

Node 22.12 or newer.

## Layout

```
src/
  data/         content and numbers: edit these, not the markup
    site.ts       links, page title, nav
    stats.ts      usage figures under the hero (update asOf with them)
    schools.ts    schools by country; every "N schools in M countries" is computed from it
    products.ts   product tiles, the Autofill section, Academy / Sleuthbox / Number Duel
  components/   one file per section, plus Icon (one icon set) and Frame (screenshot in a browser window)
  layouts/      Base.astro: <head>, fonts, the page script
  pages/        index.astro puts the sections in order
  scripts/      nav, hero motion, reveal on scroll, school wall, count-up (TypeScript)
  styles/       tokens.css (colours, fonts), base.css (shared), then one file per section
public/         served as-is: screenshots, favicon, the demo pages
```

## Common changes

- **Add a school**: add its name to its country in `src/data/schools.ts` (add the country if it's new). Counts, headings and the meta description update themselves.
- **Update the numbers**: edit `src/data/stats.ts` and set `asOf` to the date of the figures.
- **Add an icon**: add its SVG body to `src/components/icons.ts`, then use `<Icon name="..." />`.

## Deploy

Cloudflare Pages: build command `npm run build`, output directory `dist`.
