export type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricing: {
  badge: string;
  title: string;
  description: string;
  tiers: PricingTier[];
} = {
  badge: "Pricing",
  title: "Simple, transparent pricing",
  description: "Choose the plan that fits your needs. No hidden fees, no surprises.",
  tiers: [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for side projects and experiments.",
      features: [
        "All template sections",
        "Tailwind CSS v4",
        "TypeScript strict mode",
        "Basic SEO setup",
        "Community support",
      ],
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "$49",
      period: "one-time",
      description: "Everything you need to launch a professional site.",
      features: [
        "Everything in Starter",
        "Premium components",
        "Advanced animations",
        "CMS integration guide",
        "Priority support",
        "Lifetime updates",
      ],
      cta: "Get Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "one-time",
      description: "For teams that need more power and customization.",
      features: [
        "Everything in Pro",
        "Multi-page templates",
        "Custom integrations",
        "White-label license",
        "Dedicated support",
        "Custom branding session",
      ],
      cta: "Contact Sales",
    },
  ],
};
