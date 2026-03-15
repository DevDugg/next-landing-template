# Next Landing Template

A production-ready landing page template built with Next.js 15, React 19, and Tailwind CSS v4. Config-driven — change a few files to get a fully branded site.

## Quick Start

```bash
git clone https://github.com/DevDugg/next-landing-template.git
cd next-landing-template
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the template.

## Customize in 5 Minutes

### Step 1: Brand Identity

Edit **`src/config/general.ts`** — set your app name, description, domain, and creator handle.

### Step 2: Colors & Theme

Edit **`src/app/globals.css`** — change the `@theme` block to set your brand colors. Every component updates automatically.

```css
@theme {
  --color-primary: #2563eb;      /* Your brand color */
  --color-secondary: #7c3aed;    /* Secondary accent */
  --color-background: #ffffff;   /* Page background */
  /* ... see file for all tokens */
}
```

Dark mode colors are in the `.dark` selector in the same file.

### Step 3: Content

Edit files in **`src/data/`** — each section has its own data file:

| File | Section |
|------|---------|
| `hero.ts` | Hero headline, subtext, CTA buttons |
| `features.ts` | Feature cards |
| `pricing.ts` | Pricing tiers |
| `faq.ts` | FAQ accordion items |
| `testimonials.ts` | Social proof quotes |
| `how-it-works.ts` | Step-by-step process |
| `navigation.ts` | Navbar links and CTA |
| `footer.ts` | Footer columns and links |
| `logos.ts` | Client/partner logos |
| `cta.ts` | Call-to-action section |

### Step 4: Logo & Assets

Replace files in **`public/images/`** (e.g., `logo.svg`).

### Step 5: Layout & Animations (optional)

- **`src/config/ui.ts`** — Container max-width and responsive padding
- **`src/config/interactions.ts`** — Toggle entry animation and scroll progress bar

## Features

- **Next.js 15** with App Router and Turbopack
- **React 19** with Server Components
- **Tailwind CSS v4** with CSS-first design tokens
- **Dark mode** via next-themes (automatic system detection)
- **Animations** with Framer Motion + Lenis smooth scroll
- **SEO** — OpenGraph, Twitter Cards, JSON-LD, sitemap, robots.txt
- **Accessible** — skip links, focus-visible, ARIA labels, reduced-motion support
- **Testing** — Vitest + React Testing Library
- **Code quality** — TypeScript strict mode, ESLint, Prettier

## Project Structure

```
src/
├── app/              # Pages, layout, SEO, server actions
├── components/
│   ├── sections/     # Landing page sections (hero, pricing, faq, etc.)
│   ├── ui/           # Reusable components (button, card, badge)
│   ├── layout/       # Container wrapper
│   └── animations/   # Smooth scroll provider
├── config/           # App settings (general, colors, ui, interactions)
├── data/             # Section content (decoupled from components)
├── lib/              # Utilities (cn, seo, analytics)
└── public/           # Static assets
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server with Turbopack |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier (write) |
| `npm run test` | Run tests |
| `npm run test:watch` | Watch mode tests |
| `npm run analyze` | Bundle analysis |

## Adding a New Section

1. Create a data file: `src/data/my-section.ts`
2. Create a component: `src/components/sections/my-section.tsx`
3. Import and place it in `src/app/page.tsx`

## Analytics

The template includes a pluggable analytics layer in `src/lib/analytics.ts`. It no-ops by default — uncomment the provider you want (Vercel Analytics, Plausible, or Google Analytics).

## Deployment

Works out of the box on [Vercel](https://vercel.com). For other platforms, run `npm run build` and serve the `.next` output.

## Contributing

Contributions are welcome! Open an issue or submit a pull request.

## License

MIT — see [LICENSE](./LICENSE).
