"use server";

import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address.");

export type NewsletterState = {
  success: boolean;
  message: string;
} | null;

export async function subscribeToNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = formData.get("email");
  const result = emailSchema.safeParse(email);

  if (!result.success) {
    return { success: false, message: result.error.errors[0].message };
  }

  // --- Integrate your email service here ---
  // Examples:
  //   await resend.contacts.create({ email: result.data, audienceId: "..." });
  //   await fetch("https://api.buttondown.email/v1/subscribers", { ... });
  //   await mailchimp.lists.addListMember(listId, { email_address: result.data });

  // Simulate a short delay
  await new Promise((r) => setTimeout(r, 500));

  console.log(`[newsletter] New subscriber: ${result.data}`);

  return { success: true, message: "Thanks for subscribing!" };
}
