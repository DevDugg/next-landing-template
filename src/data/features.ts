import {
  Zap,
  Shield,
  Palette,
  Code2,
  Gauge,
  Search,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: {
  badge: string;
  title: string;
  description: string;
  items: Feature[];
} = {
  badge: "Features",
  title: "Everything you need to ship fast",
  description:
    "Built on the latest web technologies with developer experience and performance in mind.",
  items: [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built on Next.js 15 with Turbopack for instant hot reloads and optimized production builds.",
    },
    {
      icon: Palette,
      title: "Design Tokens",
      description:
        "Change colors, spacing, and typography from a single CSS file. Your brand, instantly applied.",
    },
    {
      icon: Shield,
      title: "Type-Safe",
      description:
        "Full TypeScript strict mode with typed configs, props, and data layer. Catch bugs at compile time.",
    },
    {
      icon: Code2,
      title: "Clean Architecture",
      description:
        "Config-driven design with separated data, components, and styling layers. Easy to extend.",
    },
    {
      icon: Gauge,
      title: "Performance First",
      description:
        "Optimized images, code splitting, and smooth animations with Framer Motion. 100 Lighthouse score.",
    },
    {
      icon: Search,
      title: "SEO Ready",
      description:
        "Built-in OpenGraph, Twitter Cards, and JSON-LD structured data. Rank higher from day one.",
    },
  ],
};
