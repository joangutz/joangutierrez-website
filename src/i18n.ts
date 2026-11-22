/**
 * English and Spanish (11/20).
 *
 * The English site lives where it always has; the Spanish one is the same
 * pages under /es/. A page or component reads its language from its own
 * address (`langOf(Astro.url)`), so the same component serves both.
 *
 * The Spanish is a DRAFT, written for Joan to review and correct in her own
 * words: the page copy is in /content/…/es/, the short interface words in
 * src/i18n/es.ts.
 */
import { withBase } from './site';
import { es } from './i18n/es';

export type Lang = 'en' | 'es';

const base = () => import.meta.env.BASE_URL.replace(/\/$/, '');

/** The page's path without the deploy base, always starting with '/'. */
const bare = (url: URL) => {
  const p = url.pathname.startsWith(base()) ? url.pathname.slice(base().length) : url.pathname;
  return p.startsWith('/') ? p : `/${p}`;
};

export const langOf = (url: URL): Lang => (/^\/es(\/|$)/.test(bare(url)) ? 'es' : 'en');

/** A site path in the given language, with the deploy base: '/about/' → '/es/about/'. */
export const pathIn = (path: string, lang: Lang): string => {
  if (!path.startsWith('/')) return path;
  return withBase(lang === 'es' ? `/es${path === '/' ? '/' : path}` : path);
};

/** A link-maker bound to the page's language. */
export const linker = (url: URL) => {
  const lang = langOf(url);
  return (path: string) => pathIn(path, lang);
};

/** The pages that have a Spanish version (English paths). */
export const ES_PAGES = ['/', '/services/', '/about/', '/resources/', '/begin/', '/discovery-form/', '/tending-the-root/'];
export const hasEs = (path: string) => ES_PAGES.includes(path);

/** The same page in the other language (with the base); a page with no
    Spanish version switches to the Spanish home. */
export const otherLang = (url: URL): { lang: Lang; href: string } => {
  const lang = langOf(url);
  const p = bare(url);
  if (lang === 'es') return { lang: 'en', href: withBase(p.replace(/^\/es(?=\/|$)/, '') || '/') };
  return { lang: 'es', href: withBase(hasEs(p) ? `/es${p}` : '/es/') };
};

/** The page's English path (no base), whichever language it is in. */
export const enPath = (url: URL) => bare(url).replace(/^\/es(?=\/|$)/, '') || '/';

/**
 * A short interface string in the page's language. English is the key; a
 * Spanish string missing from the dictionary falls back to the English, so
 * nothing ever renders empty.
 */
export const t = (lang: Lang, s: string): string => (lang === 'es' ? es[s] ?? s : s);

/** Bound to a page: `const tr = translator(Astro.url); tr('About')`. */
export const translator = (url: URL) => {
  const lang = langOf(url);
  return (s: string) => t(lang, s);
};

/** The id of a content entry in the page's language: 'home' → 'es/home'. */
export const entryId = (id: string, lang: Lang) => (lang === 'es' ? `es/${id}` : id);

/** Whether a collection entry belongs to the language (Spanish ones sit in es/). */
export const inLang = (id: string, lang: Lang) => (lang === 'es' ? id.startsWith('es/') : !id.startsWith('es/'));

/** An entry's id without its language folder, for anchors shared by both. */
export const plainId = (id: string) => id.replace(/^es\//, '');
