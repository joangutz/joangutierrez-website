// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

/**
 * Deploy target: GitHub Pages at its own domain, masomatrix.com (11/24),
 * set in the repository's Settings → Pages, with public/CNAME. The old
 * joangutz.github.io/joangutierrez-website address forwards here.
 */
const BASE = '/';

/** Redirect targets are written to the page as-is, so they carry the base. */
const to = (path) => `${BASE.replace(/\/$/, '')}${path}`;

/**
 * The portfolio's earlier addresses (/portfolio/, then /artistportfolio/)
 * forward to where it lives now, /joangutierrez/artistportfolio/ (11/24).
 */
const PF = '/joangutierrez/artistportfolio';
const pfPages = ['', 'about', '28-day-cycle', 'empty-chairs', 'a-cicadas-cycle', 'librito-del-viaje', 'brush-n-scroll', 'handmade', 'haircut-piece-part-ii', 'wild-thing'];
const oldPortfolio = Object.fromEntries(
  pfPages.flatMap((p) => {
    const tail = p ? `/${p}` : '';
    const dest = `${PF}${tail}/`;
    return [
      [`/portfolio${tail}`, to(dest)],
      [`/artistportfolio${tail}`, to(dest)],
      [`/es/portfolio${tail}`, to(`/es${dest}`)],
      [`/es/artistportfolio${tail}`, to(`/es${dest}`)],
    ];
  }),
);

export default defineConfig({
  site: 'https://masomatrix.com',
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
    '/sessions': to('/services/'),
    '/roots': to('/about/'),
    // The pages that used to sit under the dropdowns now live as sections.
    '/work-with-me/this-very-body': to('/services/#this-very-body'),
    '/work-with-me/happenings': to('/services/#relational-integrity-labs'),
    // Renamed from Work with me, then Offerings, to Services.
    '/work-with-me': to('/services/'),
    '/offerings': to('/services/'),
    '/resource/gift': to('/resources/#gift'),
    // 11/23: the portfolio's address, renamed at the client's request.
    ...oldPortfolio,
    '/joangutierrez': to(`${PF}/`),
    '/es/joangutierrez': to(`/es${PF}/`),
    // Inspiration and Library show on Resources once written.
    '/resource/inspiration': to('/resources/'),
    '/resource/library': to('/resources/'),
    // Renamed from Resource to Resources.
    '/resource': to('/resources/'),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Collage and portraits live in /assets/, per the repo layout in the brief.
    responsiveStyles: true,
  },
});
