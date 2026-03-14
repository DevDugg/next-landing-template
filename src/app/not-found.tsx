import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Container className="text-center">
        <h1 className="mb-2 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </Container>
    </main>
  );
}
