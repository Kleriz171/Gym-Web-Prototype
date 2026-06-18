# PULSE — Premium Gym Marketing Site

A high-energy, award-style single-page marketing site for a premium gym (placeholder
brand **PULSE**). Dark charcoal canvas, one hot-orange accent (`#FF5C00`), oversized
display type, kinetic motion, and a 3D hero.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (theme tokens in `app/globals.css`)
- **shadcn-style UI primitives** (`components/ui/*`, built on Radix)
- **react-three-fiber + drei** — 3D dumbbell hero (`components/three/*`), lazy-loaded
  client-only with a static fallback for mobile / `prefers-reduced-motion`
- **Framer Motion** — scroll reveals, staggered entrances, parallax
- **Lenis** — smooth scroll
- **react-hook-form + zod** — lead form with Sonner toast

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Bilingual (EN / SQ)

All copy lives in `content/copy.ts` as two dictionaries (`en`, `sq`) sharing one
`SiteCopy` type. The navbar `[EN | SQ]` toggle switches language (persisted to
`localStorage`). Swap in real content by editing `content/copy.ts`.

## Structure

```
app/                  layout (fonts, SEO, providers, grain), page (section composition)
components/sections/  one file per page section (navbar → footer)
components/three/      r3f dumbbell scene + canvas wrapper
components/shared/     cursor, smooth scroll, reveal, count-up, magnetic, marquee, …
components/ui/         button, card, accordion, dialog, tabs, input, sonner, …
content/copy.ts        EN + SQ content dictionaries
lib/                   utils, hooks, language provider
public/                favicon, OG image, hero fallback art
docs/superpowers/specs design spec
```

## Verified

Responsive at 375 / 768 / 1280 · no console errors · Lighthouse A11y 100, Best
Practices 100, SEO 100 · LCP ~1.5s, CLS 0 · 3D swapped for a static image on mobile.

## Customising

- **Accent / theme:** tokens at the top of `app/globals.css`.
- **Content:** `content/copy.ts`.
- **Images:** replace the placeholder gradient treatments / SVGs in `public/` and the
  section components with `next/image` + real photography (alt text already in copy).
