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
