import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://diablovalleydrywall.com',
  integrations: [tailwind()],
  compressHTML: true,
  trailingSlash: 'always',
  build: {
    // Emit /locations/walnut-creek/index.html so URLs work on any static host
    format: 'directory',
  },
  vite: {
    logLevel: 'silent',
  },
});
