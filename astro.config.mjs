// @ts-check
import { defineConfig } from 'astro/config';

// Served from the custom domain (see public/CNAME), so no `base` path is needed.
export default defineConfig({
  site: 'https://get-lila.com',
});
