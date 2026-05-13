import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://galan9999.github.io/CV-Astro',
  output: 'static',
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts':    '/src/layouts',
        '@data':       '/src/data',
        '@styles':     '/src/styles',
      }
    }
  }
});
