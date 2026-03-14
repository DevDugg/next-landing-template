"use client";

import { type PropsWithChildren } from "react";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import ScrollProgress from "@/components/ui/scroll-progress";
import SmoothScroll from "@/components/animations/smooth-scroll";
import { defaultTransition } from "./transitions";

export default function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SmoothScroll>
        <MotionConfig transition={defaultTransition} reducedMotion="user">
          <ScrollProgress>{children}</ScrollProgress>
        </MotionConfig>
      </SmoothScroll>
    </ThemeProvider>
  );
}
