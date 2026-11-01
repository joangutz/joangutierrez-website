import type { APIRoute } from 'astro';
import { abs } from '../seo';

/**
 * Everyone may read the site — search engines and AI assistants alike, so
 * that people asking an assistant about somatic education in Chicago can be
 * pointed here. The AI crawlers are named only to make that choice
 * explicit; to keep the site out of AI training while staying in AI search,
 * change GPTBot, ClaudeBot, Google-Extended and Applebot-Extended to
 * "Disallow: /" and leave the search agents as they are.
 *
 * Note: while the site lives at joangutz.github.io/joangutierrez-website,
 * search engines read robots.txt only at the domain's root, which this
 * file is not. It takes effect once the site moves to its own domain.
 */
export const GET: APIRoute = () => {
  const agents = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
  ];
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    ...agents.flatMap((a) => [`User-agent: ${a}`, 'Allow: /', '']),
    `Sitemap: ${abs('/sitemap.xml')}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
