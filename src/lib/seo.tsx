import type { Metadata } from "next";
import { general } from "@/config/general";

type SEOTagsParams = {
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
  };
  canonicalUrlRelative?: string;
  extraTags?: Record<string, unknown>;
};

export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: SEOTagsParams = {}): Metadata => {
  return {
    title: title || general.appName,
    description: description || general.appDescription,
    keywords: keywords || [general.appName],
    applicationName: general.appName,
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${general.domainName}/`,
    ),

    openGraph: {
      title: openGraph?.title || general.appName,
      description: openGraph?.description || general.appDescription,
      url: openGraph?.url || `https://${general.domainName}/`,
      siteName: general.appName,
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title: openGraph?.title || general.appName,
      description: openGraph?.description || general.appDescription,
      card: "summary_large_image",
      creator: general.creator,
    },

    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    ...extraTags,
  };
};

export const renderSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: general.appName,
          description: general.appDescription,
          url: `https://${general.domainName}/`,
        }),
      }}
    />
  );
};
