import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Container from "@/components/layout/container";
import { getSEOTags } from "@/lib/seo";

export const metadata: Metadata = getSEOTags({
  title: "About",
  description: "Learn more about our mission and the team behind the product.",
  canonicalUrlRelative: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground">About Us</h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This is a scaffold for your About page. Replace this content with your company
                story, mission statement, and team information.
              </p>
              <p>
                This page demonstrates how to create additional routes that share the same layout,
                navbar, and footer while having their own metadata for SEO.
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
