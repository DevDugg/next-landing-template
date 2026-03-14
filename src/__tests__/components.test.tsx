import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    useReducedMotion: () => true,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    motion: {
      div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props}>{children}</div>
      ),
      p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p {...props}>{children}</p>
      ),
      h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 {...props}>{children}</h1>
      ),
    },
  };
});

// Mock next-themes
vi.mock("next-themes", () => ({
  useTheme: () => ({ setTheme: vi.fn(), resolvedTheme: "light" }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock lenis
vi.mock("lenis/react", () => ({
  ReactLenis: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useLenis: () => null,
}));

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardContent } from "@/components/ui/card";

describe("UI Components", () => {
  it("Button renders with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("Button renders variants without crashing", () => {
    const { container } = render(
      <>
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </>,
    );
    expect(container.querySelectorAll("button")).toHaveLength(6);
  });

  it("Badge renders with text", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("Card renders with title and content", () => {
    render(
      <Card>
        <CardTitle>Test Title</CardTitle>
        <CardContent>Test content</CardContent>
      </Card>,
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });
});

describe("Section Components", () => {
  it("NotFound page renders", async () => {
    const NotFound = (await import("@/app/not-found")).default;
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Go Home")).toBeInTheDocument();
  });

  it("Loading page renders spinner", async () => {
    const Loading = (await import("@/app/loading")).default;
    const { container } = render(<Loading />);
    expect(container.querySelector(".animate-spin")).toBeInTheDocument();
  });
});
