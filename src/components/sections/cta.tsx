"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import { cta } from "@/data/cta";

export default function CTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="cta-title" className="bg-foreground py-24 text-background">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 id="cta-title" className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {cta.title}
          </h2>
          <p className="mb-8 text-lg opacity-80">{cta.description}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <a href={cta.primaryCta.href}>
                {cta.primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-background/20 text-background hover:bg-background/10"
            >
              <a href={cta.secondaryCta.href}>{cta.secondaryCta.label}</a>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
