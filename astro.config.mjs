// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

/**
 * Deploy target: GitHub Pages project site at
 * joangutz.github.io/joangutierrez-website
 *
 * TODO-DOMAIN: moving to masomatix.com is three steps, and they have to
 * happen in this order or the live site goes dark in between:
 *   1. point the DNS at GitHub Pages (four A records for the apex, or a
 *      CNAME to joangutz.github.io for www), and set the custom domain in
 *      the repository's Settings → Pages
 *   2. add a file `public/CNAME` containing exactly: masomatix.com
 *   3. change the two values below to site: 'https://masomatix.com' and
 *      base: '/'
 * Every internal link already goes through withBase() in src/site.ts, so
 * those two values are the whole of the code change. Doing step 3 before
 * steps 1 and 2 would break the current preview URL and serve nothing in its
 * place, which is why it is not done here.
 */
const BASE = '/joangutierrez-website';

/** Redirect targets are written to the page as-is, so they carry the base. */
const to = (path) => `${BASE.replace(/\/$/, '')}${path}`;

export default defineConfig({
  site: 'https://joangutz.github.io',
  base: BASE,
  integrations: [mdx()],
  /**
   * The pages that moved in the Ma Somatrix rebuild. Astro writes a
   * meta-refresh page at each old path on a static build, so links already
   * out in the world — and anything indexed — still land somewhere.
   */
  redirects: {
    // One entry each: Astro treats '/roots' and '/roots/' as the same route
    // and warns that listing both will become a hard error.
    '/sessions': to('/work-with-me/'),
    '/roots': to('/about/'),
    // The pages that used to sit under the dropdowns now live as sections.
    '/work-with-me/this-very-body': to('/work-with-me/#this-very-body'),
    '/work-with-me/happenings': to('/work-with-me/#relational-integrity-labs'),
    '/resource/gift': to('/resource/#gift'),
    '/resource/inspiration': to('/resource/#inspiration'),
    '/resource/library': to('/resource/#library'),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Collage and portraits live in /assets/, per the repo layout in the brief.
    responsiveStyles: true,
  },
});
