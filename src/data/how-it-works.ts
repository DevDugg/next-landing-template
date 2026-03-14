export type Step = {
  step: number;
  title: string;
  description: string;
};

export const howItWorks: {
  badge: string;
  title: string;
  description: string;
  steps: Step[];
} = {
  badge: "How It Works",
  title: "Launch in three simple steps",
  description: "Get from zero to production in minutes with our streamlined workflow.",
  steps: [
    {
      step: 1,
      title: "Clone & Configure",
      description:
        "Clone the repository and customize the design tokens in globals.css and the config files to match your brand.",
    },
    {
      step: 2,
      title: "Add Your Content",
      description:
        "Update the data files in src/data/ with your copy, features, pricing, and testimonials.",
    },
    {
      step: 3,
      title: "Deploy & Launch",
      description:
        "Push to your repository and deploy to Vercel with a single click. Your site is live.",
    },
  ],
};
