"use client";

import { type PropsWithChildren } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: PropsWithChildren) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
