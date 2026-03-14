"use client";

import { type PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { defaultTransition } from "@/config/transitions";
import { general } from "@/config/general";
import { interactions } from "@/config/interactions";

export default function Loader({ children }: PropsWithChildren) {
  if (!interactions.useEntryAnimation) {
    return <>{children}</>;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center gap-4 bg-foreground"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: "5%" }}
        transition={{ ...defaultTransition, delay: 0.8 }}
      >
        <span className="text-4xl font-bold text-background">{general.appName}</span>
      </motion.div>
      {children}
    </>
  );
}
