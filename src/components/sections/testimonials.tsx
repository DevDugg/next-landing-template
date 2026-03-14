"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/layout/container";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            {testimonials.badge}
          </Badge>
          <h2 id="testimonials-title" className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground">{testimonials.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.items.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <blockquote className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
                      aria-hidden="true"
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-card-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
