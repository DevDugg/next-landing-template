/**
 * Toggle interactive features on/off.
 *
 * - useEntryAnimation: full-screen loader on first visit
 * - useProgressBar: scroll progress indicator at top of page
 */
export type InteractionType = {
  useEntryAnimation: boolean;
  useProgressBar: boolean;
};

export const interactions: InteractionType = {
  useEntryAnimation: true,
  useProgressBar: true,
};
