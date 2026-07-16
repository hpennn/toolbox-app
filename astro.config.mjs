import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://tool.hpennn.xyz',
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
