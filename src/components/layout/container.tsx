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
  return (
    <Component
      className={cn("mx-auto w-full", ui.container.overflowHidden && "overflow-hidden", className)}
      style={{
        maxWidth: ui.container.maxWidth,
        paddingLeft: ui.container.mobilePadding,
        paddingRight: ui.container.mobilePadding,
      }}
    >
      {children}
    </Component>
  );
}
