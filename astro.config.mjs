// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

/**
 * Deploy target: GitHub Pages project site at
 * joangutz.github.io/joangutierrez-website
 *
 * `base` must match the repository name. Two things to change together if this
 * ever moves:
 *   - a custom domain (joangutierrez.com) or a user site (a repo named
 *     joangutz.github.io) both need base: '/'
 *   - every internal link already goes through withBase() in src/site.ts, so
 *     changing these two values is the whole job
 */
export default defineConfig({
  site: 'https://joangutz.github.io',
  base: '/joangutierrez-website',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Collage and portraits live in /assets/, per the repo layout in the brief.
    responsiveStyles: true,
  },
});
