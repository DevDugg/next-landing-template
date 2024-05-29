import { colors } from "./colors";

type GeneralType = {
  appName: string;
  appDescription: string;
  domainName: string;
  colors: {
    theme: "light" | "dark";
    main: string;
  };
  creator: `@${string}`;
};

export const general: GeneralType = {
  appName: "Avium",
  appDescription: "Unlock your Trading Potential with Personalized Mentorship and High-Quality Resources",
  domainName: "avium.trade",
  colors: {
    theme: "light",
    main: colors.PRIMARY,
  },
  creator: "@website_dugg",
};
