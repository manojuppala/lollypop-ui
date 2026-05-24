import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  splitting: false,
  minify: false,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
