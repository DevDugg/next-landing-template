export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: {
  badge: string;
  title: string;
  description: string;
  items: FaqItem[];
} = {
  badge: "FAQ",
  title: "Frequently asked questions",
  description: "Everything you need to know about the template and how to use it.",
  items: [
    {
      question: "What tech stack does this template use?",
      answer:
        "The template is built with Next.js 15, React 19, TypeScript 5, Tailwind CSS v4, Framer Motion, and Radix UI. It uses the latest App Router with server components by default.",
    },
    {
      question: "How do I customize the colors and branding?",
      answer:
        "All design tokens are defined in a single @theme block in src/app/globals.css. Change the CSS custom properties there and every component updates automatically — buttons, cards, badges, and all sections.",
    },
    {
      question: "Can I use this for commercial projects?",
      answer:
        "Yes! The template is MIT licensed. You can use it for personal projects, client work, SaaS products, or any commercial purpose without attribution.",
    },
    {
      question: "How do I add new sections or pages?",
      answer:
        "Create a new data file in src/data/ for your content, then create a section component in src/components/sections/. Import it in page.tsx. For new pages, add a folder in src/app/.",
    },
    {
      question: "Is the template SEO-friendly?",
      answer:
        "Absolutely. It includes pre-configured OpenGraph tags, Twitter Cards, JSON-LD structured data, sitemap support, and proper semantic HTML. The getSEOTags() helper makes per-page meta easy.",
    },
    {
      question: "What about performance?",
      answer:
        "The template is optimized for Core Web Vitals. It uses Next.js automatic code splitting, optimized fonts, Framer Motion with GPU-accelerated transforms, and ships minimal JavaScript.",
    },
  ],
};
