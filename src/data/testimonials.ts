export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
};

export const testimonials: {
  badge: string;
  title: string;
  description: string;
  items: Testimonial[];
} = {
  badge: "Testimonials",
  title: "Loved by developers and founders",
  description: "See what people are saying about their experience with our template.",
  items: [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow",
      quote:
        "We launched our marketing site in under a day. The config-driven architecture meant our designer could tweak colors without touching React code.",
      avatar: "SC",
    },
    {
      name: "Marcus Johnson",
      role: "Indie Hacker",
      company: "ShipItFast",
      quote:
        "I've tried dozens of templates. This is the first one where I didn't have to fight the codebase. Clean, typed, and actually well-architected.",
      avatar: "MJ",
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Developer",
      company: "Nexus AI",
      quote:
        "The SEO setup alone saved us hours. OpenGraph, Twitter Cards, and structured data — all preconfigured and working out of the box.",
      avatar: "ER",
    },
  ],
};
