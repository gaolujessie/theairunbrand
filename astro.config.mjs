import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://agentsofone.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
