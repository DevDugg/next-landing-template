"use client";

import { type PropsWithChildren } from "react";
import { motion, useScroll } from "framer-motion";
import { interactions } from "@/config/interactions";

export default function ScrollProgress({ children }: PropsWithChildren) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {interactions.useProgressBar && (
        <motion.div
          className="fixed top-0 right-0 left-0 z-[100] h-[3px] origin-left bg-primary"
          style={{ scaleX: scrollYProgress, mixBlendMode: "difference" }}
        />
      )}
      {children}
    </>
  );
}
