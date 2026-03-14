"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";
import { logos } from "@/data/logos";

export default function Logos() {
  return (
    <section className="border-y border-border bg-muted/50 py-12">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-sm font-medium text-muted-foreground"
        >
          {logos.heading}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
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
