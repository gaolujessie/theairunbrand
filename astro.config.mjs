import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://jessiegao.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
