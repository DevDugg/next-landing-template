"use client";

import { type PropsWithChildren, useEffect } from "react";
import validateConfig from "@/lib/validate-config";

export default function CheckConfig({ children }: PropsWithChildren) {
  useEffect(() => {
    validateConfig();
  }, []);

  return <>{children}</>;
}
