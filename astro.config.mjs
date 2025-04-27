import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import path from 'node:path';
import react from '@astrojs/react';

import { defineConfig, squooshImageService } from 'astro/config';

export default defineConfig({
  integrations: [react(), tailwind(), mdx(), icon({
    include: {
      mdi: ["*"]
    }
  })],
  image: {
    service: squooshImageService()
  },
  alias: { // 🛠 agrega esta parte
    '@assets': path.resolve('./src/assets'),
    '@components': path.resolve('./src/components'),
    '@layouts': path.resolve('./src/layouts'),
    '@pages': path.resolve('./src/pages'),
  },
});