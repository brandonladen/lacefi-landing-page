# lacefi.co.ke

The LaceFi product site, built with [Astro](https://astro.build). It builds to plain static HTML, CSS and a little JavaScript in `dist/`.

## Commands

```sh
npm install
npm run dev       # local server at http://localhost:4321 with live reload
npm run build     # type check (astro check), then build to dist/
npm run preview   # serve the built dist/
```

Node 24 (LTS); 22.12 is the minimum.

## Layout

```
src/
  data/         content and numbers: edit these, not the markup
    site.ts       links, page title, nav
    products.ts   hero screenshot, product tiles, Academy / Sleuthbox / Number Duel
  components/   one file per section, plus Icon (one icon set) and Frame (screenshot in a browser window)
  layouts/      Base.astro: <head>, fonts, the page script
  pages/        index.astro puts the sections in order
  scripts/      nav, hero motion, reveal on scroll (TypeScript)
  styles/       tokens.css (colours, fonts), base.css (shared), then one file per section
public/         served as-is: screenshots, favicon
```

## Common changes

- **Add an icon**: add its SVG body to `src/components/icons.ts`, then use `<Icon name="..." />`.

## Deploy

Render (static site): build command `npm run build`, publish directory `dist`. Node version comes from `.nvmrc` (24).
