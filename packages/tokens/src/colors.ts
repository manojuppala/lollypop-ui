export const colors = {
  // GitHub Primer-inspired brand colors
  primary: {
    50: '#f6f8fa',
    100: '#ddf4ff',
    200: '#b6e3ff',
    300: '#80ccff',
    400: '#54aeff',
    500: '#0969da', // GitHub blue
    600: '#1f6feb',
    700: '#0550ae',
    800: '#033d8b',
    900: '#0a3069',
    950: '#002155',
  },
  secondary: {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
    950: '#1b1f23',
  },
  // GitHub Primer neutral colors (cool grays)
  neutral: {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
    950: '#1b1f23',
  },
  // GitHub semantic colors
  success: {
    50: '#dafbe1',
    100: '#aceebb',
    200: '#6fdd8b',
    300: '#4ac26b',
    400: '#2da44e', // GitHub green
    500: '#1a7f37',
    600: '#116329',
    700: '#044f1e',
    800: '#003d16',
    900: '#002d11',
    950: '#001d0f',
  },
  warning: {
    50: '#fff8c5',
    100: '#fae17d',
    200: '#eac54f',
    300: '#d4a72c',
    400: '#bf8700',
    500: '#9a6700',
    600: '#7d4e00',
    700: '#633c01',
    800: '#4d2d00',
    900: '#3b2300',
    950: '#2e1800',
  },
  error: {
    50: '#ffebe9',
    100: '#ffd8d3',
    200: '#ffb8b0',
    300: '#ff8182',
    400: '#fa4549',
    500: '#cf222e', // GitHub red
    600: '#a40e26',
    700: '#82071e',
    800: '#660018',
    900: '#4c0014',
    950: '#34000d',
  },
  info: {
    50: '#ddf4ff',
    100: '#b6e3ff',
    200: '#80ccff',
    300: '#54aeff',
    400: '#218bff',
    500: '#0969da', // Same as primary
    600: '#0550ae',
    700: '#033d8b',
    800: '#0a3069',
    900: '#002155',
    950: '#001733',
  },
} as const;

export type ColorScale = keyof typeof colors;
export type ColorShade = keyof (typeof colors)[ColorScale];
