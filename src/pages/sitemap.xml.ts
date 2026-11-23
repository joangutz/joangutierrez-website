import type { APIRoute } from 'astro';
import { abs } from '../seo';
import { ES_PAGES } from '../i18n';

/**
 * The site's pages, for search engines. Old addresses that forward
 * elsewhere are left out on purpose; they carry noindex.
 */
import { works } from '../data/portfolio';

const PAGES = [
  { path: '/', priority: '1.0' },
  { path: '/services/', priority: '0.9' },
  { path: '/about/', priority: '0.8' },
  { path: '/begin/', priority: '0.8' },
  { path: '/resources/', priority: '0.7' },
  { path: '/tending-the-root/', priority: '0.7' },
  { path: '/the-work/', priority: '0.6' },
  { path: '/discovery-form/', priority: '0.5' },
  { path: '/artistportfolio/', priority: '0.6' },
  ...works.map((w) => ({ path: `/artistportfolio/${w.slug}/`, priority: '0.5' })),
  { path: '/artistportfolio/about/', priority: '0.5' },
];

// The Spanish pages (11/20), a step below their English twins.
const ALL = [
  ...PAGES,
  ...PAGES.filter((p) => ES_PAGES.includes(p.path) || p.path.startsWith('/artistportfolio/')).map((p) => ({
    path: `/es${p.path}`,
    priority: (Number(p.priority) - 0.1).toFixed(1),
  })),
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ALL.map(
  (p) => `  <url>
    <loc>${abs(p.path)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority}</priority>
  </url>`
).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
