import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
export default defineConfig({
   site: 'https://christopherlopes.com',
  integrations: [tailwind()]
});
