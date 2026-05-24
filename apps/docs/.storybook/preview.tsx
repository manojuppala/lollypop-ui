import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@lollypop-ui/core';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '@lollypop-ui/core/styles.css';
import '../styles/storybook.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
