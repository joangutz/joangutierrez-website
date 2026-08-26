// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://joangutierrez.com',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Collage and portraits live in /assets/, per the repo layout in the brief.
    responsiveStyles: true,
  },
});
