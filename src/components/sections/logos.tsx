"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/container";
import { logos } from "@/data/logos";

export default function Logos() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-label="Trusted partners" className="border-y border-border bg-muted/50 py-12">
      <Container>
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-sm font-medium text-muted-foreground"
        >
          {logos.heading}
        </motion.p>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
        >
          {logos.items.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
