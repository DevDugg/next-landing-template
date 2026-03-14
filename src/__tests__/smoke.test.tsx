import { describe, it, expect } from "vitest";
import { general } from "@/config/general";
import { navigation } from "@/data/navigation";
import { hero } from "@/data/hero";
import { features } from "@/data/features";
import { pricing } from "@/data/pricing";
import { faq } from "@/data/faq";
import { testimonials } from "@/data/testimonials";
import { footer } from "@/data/footer";
import { track, identify } from "@/lib/analytics";

describe("Config", () => {
  it("has valid general config", () => {
    expect(general.appName).toBeTruthy();
    expect(general.appDescription).toBeTruthy();
    expect(general.domainName).toBeTruthy();
    expect(general.creator).toMatch(/^@/);
  });
});

describe("Data layer", () => {
  it("navigation has links and CTA", () => {
    expect(navigation.links.length).toBeGreaterThan(0);
    expect(navigation.cta.label).toBeTruthy();
    expect(navigation.cta.href).toBeTruthy();
  });

  it("hero has all required fields", () => {
    expect(hero.title).toBeTruthy();
    expect(hero.description).toBeTruthy();
    expect(hero.primaryCta.label).toBeTruthy();
    expect(hero.secondaryCta.label).toBeTruthy();
  });

  it("features has items with icons", () => {
    expect(features.items.length).toBeGreaterThan(0);
    features.items.forEach((feature) => {
      expect(feature.title).toBeTruthy();
      expect(feature.description).toBeTruthy();
      expect(feature.icon).toBeDefined();
    });
  });

  it("pricing tiers have features and one highlighted", () => {
    expect(pricing.tiers.length).toBeGreaterThan(0);
    pricing.tiers.forEach((tier) => {
      expect(tier.name).toBeTruthy();
      expect(tier.price).toBeTruthy();
      expect(tier.features.length).toBeGreaterThan(0);
    });
    expect(pricing.tiers.some((t) => t.highlighted)).toBe(true);
  });

  it("FAQ has questions and answers", () => {
    expect(faq.items.length).toBeGreaterThan(0);
    faq.items.forEach((item) => {
      expect(item.question).toBeTruthy();
      expect(item.answer).toBeTruthy();
    });
  });

  it("testimonials have all required fields", () => {
    expect(testimonials.items.length).toBeGreaterThan(0);
    testimonials.items.forEach((t) => {
      expect(t.name).toBeTruthy();
      expect(t.quote).toBeTruthy();
      expect(t.role).toBeTruthy();
      expect(t.company).toBeTruthy();
    });
  });

  it("footer has columns with links", () => {
    expect(footer.columns.length).toBeGreaterThan(0);
    footer.columns.forEach((col) => {
      expect(col.title).toBeTruthy();
      expect(col.links.length).toBeGreaterThan(0);
    });
  });
});

describe("Analytics", () => {
  it("track and identify do not throw", () => {
    expect(() => track("test_event", { key: "value" })).not.toThrow();
    expect(() => identify("user-123", { plan: "pro" })).not.toThrow();
  });
});
