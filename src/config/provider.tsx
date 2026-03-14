"use client";

import { type PropsWithChildren } from "react";
import { MotionConfig } from "framer-motion";
import ScrollProgress from "@/components/ui/scroll-progress";
import SmoothScroll from "@/components/animations/smooth-scroll";
import { defaultTransition } from "./transitions";

export default function Provider({ children }: PropsWithChildren) {
  return (
    <SmoothScroll>
      <MotionConfig transition={defaultTransition}>
        <ScrollProgress>{children}</ScrollProgress>
      </MotionConfig>
    </SmoothScroll>
  );
}
