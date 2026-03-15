/**
 * General app config — START HERE when customizing the template.
 *
 * Change appName, appDescription, and domainName to match your project.
 * These values are used in SEO meta tags, the navbar, footer, and OG images.
 */

import { colors } from "./colors";

type GeneralType = {
  appName: string;
  appDescription: string;
  domainName: string;
  colors: {
    theme: "light" | "dark";
    themeColor: string;
  };
  creator: `@${string}`;
};

export const general: GeneralType = {
  appName: "Next Landing Template",
  appDescription:
    "A modern, production-ready landing page template built with Next.js 15, React 19, and Tailwind CSS v4.",
  domainName: "example.com",
  colors: {
    theme: "light",
    themeColor: colors.themeColor,
  },
  creator: "@website_dugg",
};
