"use client";

import { useActionState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { subscribeToNewsletter, type NewsletterState } from "@/app/actions/newsletter";

export default function Newsletter() {
  const [state, action, isPending] = useActionState<NewsletterState, FormData>(
    subscribeToNewsletter,
    null,
  );

  return (
    <div className="mx-auto max-w-md">
      {state?.success ? (
        <p className="text-center text-sm font-medium text-primary">{state.message}</p>
      ) : (
        <form action={action} className="flex gap-2">
          <div className="relative flex-1">
            <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              aria-label="Email address"
              className="h-10 w-full rounded-md border border-border bg-background pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <Button type="submit" size="default" disabled={isPending}>
            {isPending ? "..." : "Subscribe"}
          </Button>
        </form>
      )}
      {state && !state.success && (
        <p className="mt-2 text-center text-sm text-destructive">{state.message}</p>
      )}
    </div>
  );
}
