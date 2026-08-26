/**
 * Site-wide facts. Kept out of components so they change in one place.
 */

/**
 * Prefix an internal path with the deploy base.
 *
 * Astro does NOT rewrite hardcoded absolute hrefs when `base` is set, so every
 * internal link has to go through this or the whole site 404s on a project
 * page like joangutz.github.io/joangutierrez-website. Returns the path
 * unchanged when the base is "/".
 */
export const withBase = (path: string): string => {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
};

export const site = {
  name: 'Joan Gutiérrez',
  tagline: 'Intimacy, embodiment, and nervous system education',
  description:
    'Somatic sex and embodiment education. In person in Chicago and Brooklyn, and online internationally.',
  locations: [
    { place: 'Chicago, IL', mode: 'In person' },
    { place: 'Brooklyn, NY', mode: 'In person' },
    { place: 'Internationally', mode: 'Online' },
  ],
} as const;

export const booking = {
  /** Existing Cal.com booking. Loaded lazily — it never touches first paint. */
  calLink: 'joan.gutierrez/20min',
  url: 'https://cal.com/joan.gutierrez/20min',
  duration: '20 minutes',
  label: 'Book a free consultation',
} as const;

export const contact = {
  sms: '9312778555',
  smsHref: 'sms:+19312778555',
  smsDisplay: '(931) 277-8555',
  /**
   * TODO-EMAIL: Joan's address is obfuscated on the current site via Cloudflare and
   * was not recoverable. Set it here and the mailto links across the site go live;
   * until then every contact route falls back to SMS and the consultation booking.
   */
  email: null as string | null,
  substack: 'https://eroticbecoming.substack.com',
  substackEmbed: 'https://eroticbecoming.substack.com/embed',
  art: 'https://joangutz.com',
  ethics: 'https://www.sexologicalbodyworkers.org/ethics',
} as const;

export const nav = [
  { href: '/the-work/', label: 'The Work' },
  { href: '/sessions/', label: 'Sessions' },
  { href: '/roots/', label: 'Roots' },
  { href: '/begin/', label: 'Begin' },
] as const;

/** The three realms, from Mosher. Feeds the triangle on Home and The Work. */
export const realms = [
  {
    name: 'Feel',
    gloss: 'trance',
    detail: 'Pure sensation and inner experience.',
  },
  {
    name: 'Connect',
    gloss: 'partner engagement',
    detail: 'Eyes, affection, mutuality.',
  },
  {
    name: 'Play',
    gloss: 'role and fantasy',
    detail: 'Scripts and scenes.',
  },
] as const;
