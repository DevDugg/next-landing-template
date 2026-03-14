"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Container className="text-center">
        <h1 className="mb-2 text-4xl font-bold text-foreground">Something went wrong</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          An unexpected error occurred. Please try again.
        </p>
        <Button onClick={reset}>Try Again</Button>
      </Container>
    </main>
  );
}
