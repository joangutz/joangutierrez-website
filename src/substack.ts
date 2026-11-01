/**
 * Joan's latest Substack posts, read from the publication's RSS feed when
 * the site is built. Each rebuild picks up new posts.
 *
 * If the feed cannot be reached (no network at build time, Substack down),
 * this returns an empty list and the Resources page simply shows its
 * Substack card without posts — the build never fails because of it.
 */
import { contact } from './site';

export interface Post {
  title: string;
  link: string;
  date: Date | null;
  summary: string;
}

const decode = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\s+/g, ' ')
    .trim();

const field = (item: string, tag: string) => {
  const m = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return m ? decode(m[1]) : '';
};

let cache: Promise<Post[]> | null = null;

export const latestPosts = (limit = 3): Promise<Post[]> => {
  cache ??= (async () => {
    try {
      const res = await fetch(`${contact.substack.replace(/\/$/, '')}/feed`, {
        signal: AbortSignal.timeout(8000),
        headers: { 'User-Agent': 'Ma Somatrix site build' },
      });
      if (!res.ok) return [];
      const xml = await res.text();
      return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
        .map(([, item]) => {
          const d = field(item, 'pubDate');
          return {
            title: field(item, 'title'),
            link: field(item, 'link'),
            date: d ? new Date(d) : null,
            summary: field(item, 'description'),
          };
        })
        .filter((p) => p.title && p.link.startsWith('https://'));
    } catch {
      return [];
    }
  })();
  return cache.then((posts) => posts.slice(0, limit));
};
