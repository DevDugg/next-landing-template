"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/layout/container";
import { howItWorks } from "@/data/how-it-works";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted/30 py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            {howItWorks.badge}
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="text-lg text-muted-foreground">{howItWorks.description}</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {step.step}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
