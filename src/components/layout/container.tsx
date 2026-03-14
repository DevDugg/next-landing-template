import { type PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { ui } from "@/config/ui";

interface ContainerProps extends PropsWithChildren {
  className?: string;
  as?: "div" | "section" | "article";
}

export default function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  const { maxWidth, mobilePadding, tabletPadding, desktopPadding } = ui.container;

  return (
    <Component
      className={cn("mx-auto w-full", ui.container.overflowHidden && "overflow-hidden", className)}
      style={
        {
          maxWidth,
          paddingLeft: mobilePadding,
          paddingRight: mobilePadding,
          "--container-tablet-px": `${tabletPadding}px`,
          "--container-desktop-px": `${desktopPadding}px`,
        } as React.CSSProperties
      }
    >
      <style>{`
        @media (min-width: 768px) {
          [style*="--container-tablet-px"] {
            padding-left: var(--container-tablet-px) !important;
            padding-right: var(--container-tablet-px) !important;
          }
        }
        @media (min-width: 1024px) {
          [style*="--container-desktop-px"] {
            padding-left: var(--container-desktop-px) !important;
            padding-right: var(--container-desktop-px) !important;
          }
        }
      `}</style>
      {children}
    </Component>
  );
}
