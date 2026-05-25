export const shadows = {
  none: 'none',
  sm: '0 1px 0 rgba(27, 31, 35, 0.04), 0 0 0 1px rgba(27, 31, 35, 0.04)',
  base: '0 3px 6px rgba(140, 149, 159, 0.15)',
  md: '0 8px 24px rgba(140, 149, 159, 0.2)',
  lg: '0 12px 28px rgba(140, 149, 159, 0.15), 0 2px 4px rgba(140, 149, 159, 0.1)',
  xl: '0 16px 32px rgba(140, 149, 159, 0.18), 0 2px 8px rgba(140, 149, 159, 0.08)',
  '2xl': '0 24px 48px rgba(140, 149, 159, 0.2), 0 4px 16px rgba(140, 149, 159, 0.1)',
  inner: 'inset 0 1px 0 rgba(208, 215, 222, 0.2)',
} as const;

export type Shadow = keyof typeof shadows;
