# PULSE — Premium Gym Marketing Site — Design Spec

Date: 2026-06-18
Status: Approved

## Goal

A stunning, high-energy single-page marketing website for a premium gym ("PULSE",
placeholder). Impress visitors and drive membership sign-ups and free-trial bookings.
Modern, bold, athletic — award-winning design quality.

## Stack & Tooling

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui primitives: button, card, accordion, dialog, tabs, carousel, input, form, sonner
  (via shadcn MCP if connected; otherwise hand-rolled equivalents)
- react-three-fiber + @react-three/drei for the 3D hero, loaded via
  `dynamic(() => ..., { ssr: false })`
- Framer Motion for scroll/entrance animations
- Lenis for smooth scroll
- react-hook-form + zod for the lead form

## Brand & Theme

- Background charcoal/black `#0A0A0A`; surfaces `#141414` / `#1A1A1A`
- Single accent: hot orange `#FF5C00` (committed)
- Text off-white `#F5F5F2`, muted `#A1A1A1`
- Display type: oversized, uppercase, tight tracking (Anton / Archivo Expanded);
  body: Inter
- Texture: grain/noise overlay; diagonal section dividers; kinetic motion
- Custom cursor (desktop only); Lenis smooth scroll; scroll-snap where it helps
- Accessibility note on contrast: orange is used for large display text, UI accents,
  borders, and CTAs — never for small body copy on dark (insufficient contrast).

## Bilingual (EN / SQ toggle — day one)

- `content/copy.ts` exports two typed dictionaries `en` and `sq` sharing one TypeScript
  shape (`SiteCopy`), guaranteeing parity.
- `LanguageProvider` (React context) + `useCopy()` hook. Default `en`; persisted to
  `localStorage` under `pulse-lang`.
- Navbar `[EN | SQ]` toggle. English authored fully; Albanian authored idiomatically
  (user will refine).

## 3D Hero (Showpiece)

- `components/three/DumbbellScene.tsx`: stylized dumbbell from built-in primitives
  (cylinders for the bar, spheres/cylinders for the plates), slow auto-rotation,
  accent-orange key + rim lighting, depth fog, subtle mouse parallax and scroll parallax.
- Lazy-loaded with `dynamic(ssr:false)`.
- Mobile **and** `prefers-reduced-motion` → static fallback image, canvas never mounts.
- Performance: cap DPR (`[1, 2]`, lower on mobile), lightweight geometry, no external
  models, `frameloop` paused when offscreen.

## Sections (single page, in order)

1. Navbar — sticky, glass/blur, logo, links, EN/SQ toggle, bold "JOIN NOW" CTA, mobile drawer
2. Hero — 3D scene background, massive headline ("BUILD YOUR BEST SELF" / "NDËRTO VETEN MË TË MIRË"), subhead, two CTAs (Join / Book free trial), scroll indicator
3. Marquee — kinetic ticker strip of class names / motivational words
4. Stats bar — animated count-up (members, trainers, classes/week, sq meters)
5. Programs — interactive tabs/cards (Strength, HIIT, Yoga, CrossFit, Boxing, Cardio) with hover reveals
6. Membership pricing — 3 tiers, middle "MOST POPULAR", monthly/annual toggle, feature lists, CTAs
7. Trainers — grid of cards with photo, specialty, hover bio + socials
8. Class schedule — weekly timetable, tabs by day, class/time/trainer
9. Facilities/Gallery — carousel + lightbox (dialog)
10. Transformations / Testimonials — testimonial carousel with quotes + star ratings
11. Why Us — animated icon feature grid (equipment, 24/7 access, app, nutrition)
12. App promo — phone mockup pushing the mobile app
13. Free trial / Lead form — name, email, phone, goal + success toast (client-only)
14. FAQ — shadcn accordion
15. Footer — logo, links, hours, location/map embed (static placeholder), socials, newsletter input

## Architecture

```
app/
  layout.tsx        # fonts, metadata, providers, grain overlay, cursor, Lenis
  page.tsx          # composes sections
components/
  sections/         # one file per section
  three/            # DumbbellScene + canvas wrapper
  ui/               # shadcn primitives
  shared/           # Cursor, SmoothScroll, GrainOverlay, MagneticButton, Reveal, CountUp, Marquee, SectionHeading
content/copy.ts     # en + sq dictionaries, SiteCopy type
lib/                # utils, hooks (useReducedMotion, useMediaQuery), language provider
public/             # placeholder images, og image, hero fallback
```

## Interactions & Polish

- Framer Motion scroll-reveal on every section, staggered children, parallax accents
- Animated count-ups, hover micro-interactions, magnetic buttons
- Custom cursor, smooth scroll, scroll-snap where helpful
- Marquee ticker
- Mobile-first; mobile swaps heavy 3D for fallback and simplifies animations

## Accessibility & SEO

- Keyboard nav, visible focus states, `prefers-reduced-motion` respected
- Alt text on all imagery, `next/image`
- Semantic landmarks (`header`/`nav`/`main`/`section`/`footer`), proper heading order
- Metadata, OpenGraph image, sufficient contrast on accent usage

## Verification Cadence (Chrome DevTools MCP, with manual fallback)

After the hero, then after every ~2 sections:
- Responsive at 375 / 768 / 1280
- No console errors
- Lighthouse pass
- 3D scene does not tank mobile performance (fallback / reduced quality confirmed)

If Chrome DevTools MCP is not connected, perform a manual checklist and report it.

## Out of Scope (v1)

- Real backend / auth / database (lead form is client-only → toast)
- Real CMS, payments
- Live map API key (static embed placeholder)
- Real photography (placeholders; alt text written for real content)
