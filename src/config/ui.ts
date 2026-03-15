/**
 * Layout settings for the site-wide Container component.
 *
 * maxWidth: content max-width in px (default 1280 = Tailwind's max-w-7xl).
 * Padding values control horizontal gutter at each breakpoint (in px).
 */
export type UIType = {
  container: {
    maxWidth: number;
    desktopPadding: number;
    tabletPadding: number;
    mobilePadding: number;
    overflowHidden: boolean;
  };
};

export const ui: UIType = {
  container: {
    maxWidth: 1280,
    desktopPadding: 48,
    tabletPadding: 32,
    mobilePadding: 16,
    overflowHidden: true,
  },
};
