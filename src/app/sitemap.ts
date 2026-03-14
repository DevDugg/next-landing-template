import type { MetadataRoute } from "next";
import { general } from "@/config/general";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${general.domainName}`;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
