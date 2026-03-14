import Container from "@/components/layout/container";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Container className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
      </Container>
    </main>
  );
}
