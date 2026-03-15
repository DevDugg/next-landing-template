# CLAUDE.md — Project Guide

## What is this?

A production-ready Next.js 15 landing page template. Config-driven: change a few files, get a fully branded site.

## Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript 5
- **Styling**: Tailwind CSS v4 (CSS-first config via `@theme` in globals.css)
- **Animations**: Framer Motion 11 + Lenis (smooth scroll)
- **UI primitives**: Radix UI (accordion, separator) + CVA (button variants)
- **Theming**: next-themes (light/dark mode)

## Project Structure

```
src/
├── app/            # Next.js App Router (pages, layout, SEO, server actions)
├── components/
│   ├── sections/   # Full landing page sections (hero, pricing, faq, etc.)
│   ├── ui/         # Reusable primitives (button, card, badge, accordion)
│   ├── layout/     # Container wrapper
│   └── animations/ # Smooth scroll provider
├── config/         # All customizable settings (colors, general, ui, interactions)
├── data/           # Content for each section (separated from components)
├── lib/            # Utilities (cn, seo, analytics, hooks)
└── public/         # Static assets (logo, images)
```

## Key Customization Files (start here)

1. **`src/config/general.ts`** — App name, description, domain, creator
2. **`src/app/globals.css`** — Design tokens (`@theme` block): colors, radii, fonts
3. **`src/data/*.ts`** — All section content (hero text, features, pricing, FAQ, etc.)
4. **`src/config/ui.ts`** — Container max-width and responsive padding
5. **`src/config/interactions.ts`** — Toggle entry animation and scroll progress bar

## Commands

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm run lint         # ESLint
npm run format       # Prettier (write)
npm run format:check # Prettier (check)
npm run test         # Vitest (single run)
npm run test:watch   # Vitest (watch mode)
npm run analyze      # Bundle analyzer (ANALYZE=true)
```

## Architecture Notes

- **Data-view separation**: Content lives in `src/data/`, components in `src/components/sections/`. Edit copy without touching JSX.
- **Design tokens**: All colors/radii/fonts defined once in `globals.css` `@theme` block. Components use Tailwind classes (`bg-primary`, `text-foreground`) that reference these tokens. Dark mode overrides are in the `.dark` selector in the same file.
- **Colors in JS**: When you need colors in JavaScript (meta tags, Framer Motion), use `src/config/colors.ts` which references CSS variables.
- **Analytics**: `src/lib/analytics.ts` is a no-op by default. Uncomment the provider you want (Vercel, Plausible, GA).
- **SEO**: OpenGraph, Twitter Cards, JSON-LD, sitemap, and robots.txt are pre-configured. Edit `src/config/general.ts` for domain/name.
- **Path alias**: `@/*` maps to `./src/*`

## Adding a New Section

1. Create content in `src/data/my-section.ts`
2. Create component in `src/components/sections/my-section.tsx`
3. Import and add to `src/app/page.tsx`

## Testing

Tests live in `src/__tests__/`. Run with `npm test`. Uses Vitest + React Testing Library + jsdom.
