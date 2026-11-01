import type { APIRoute } from 'astro';
import { abs } from '../seo';

/**
 * The site's pages, for search engines. Old addresses that forward
 * elsewhere are left out on purpose; they carry noindex.
 */
const PAGES = [
  { path: '/', priority: '1.0' },
  { path: '/offerings/', priority: '0.9' },
  { path: '/about/', priority: '0.8' },
  { path: '/begin/', priority: '0.8' },
  { path: '/resources/', priority: '0.7' },
  { path: '/the-work/', priority: '0.6' },
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
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
