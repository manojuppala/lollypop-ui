import type { Config } from 'tailwindcss';
import {
  colors,
  spacing,
  fontSize,
  fontWeight,
  radius,
  shadows,
  zIndex,
} from '@lollypop-ui/tokens';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        neutral: colors.neutral,
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
        info: colors.info,
      },
      spacing,
      fontSize,
      fontWeight,
      borderRadius: radius,
      boxShadow: shadows,
      zIndex,
    },
  },
  plugins: [],
};

export default config;
