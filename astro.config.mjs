// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://akselira1.github.io',
  base: '/duovilli',
  vite: {
    plugins: [tailwindcss()]
  }
});