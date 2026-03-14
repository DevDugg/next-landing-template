/**
 * Color references for use in JavaScript/TypeScript.
 *
 * The canonical color definitions live in globals.css @theme block.
 * This file provides references for places that need colors in JS
 * (e.g., viewport theme-color meta tag, Framer Motion inline styles).
 */

export const colors = {
  /** Used for the browser theme-color meta tag */
  themeColor: "#2563eb",
  /** CSS variable reference for primary color */
  primary: "var(--color-primary)",
  /** CSS variable reference for background color */
  background: "var(--color-background)",
  /** CSS variable reference for foreground color */
  foreground: "var(--color-foreground)",
} as const;
