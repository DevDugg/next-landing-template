"use client";

import { useLenis } from "lenis/react";

export const useScrollToTarget = (target: string | HTMLElement | null) => {
  const lenis = useLenis();

  const handleOnClick = () => {
    if (target && lenis) {
      lenis.scrollTo(target, {
        lerp: 0.1,
        duration: 1.2,
        offset: -80,
      });
    }
  };

  return { handleOnClick };
};
