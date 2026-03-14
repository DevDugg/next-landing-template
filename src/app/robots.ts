import type { MetadataRoute } from "next";
import { general } from "@/config/general";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://${general.domainName}/sitemap.xml`,
  };
}
