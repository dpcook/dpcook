// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update this to your deployed URL
  site: 'https://davidcook.ca',
  vite: {
    plugins: [tailwindcss()]
  }
});