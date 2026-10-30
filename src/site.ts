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
  name: 'Ma Somatix',
  domain: 'masomatix.com',
  /** The practitioner, still named wherever the writing is hers. */
  person: 'Joan Gutiérrez',
  tagline: 'Somatic education delivered with artistry for vibrant health',
  place: 'Chicago and beyond',
  description:
    'Ma Somatix — somatic education delivered with artistry for vibrant health. In person in Chicago, online internationally, open to travel.',
  locations: [
    { place: 'Chicago, IL', mode: 'In person' },
    { place: 'Internationally', mode: 'Online' },
    { place: 'Open to travel', mode: '' },
  ],
} as const;

export const booking = {
  /** Existing Cal.com booking. Linked, never embedded — see /begin/. */
  calLink: 'joan.gutierrez/20min',
  url: 'https://cal.com/joan.gutierrez/20min',
  duration: '20 minutes',
  label: 'Book a free consultation',
} as const;

/**
 * The Kit list and the Red Rose Visualization gift.
 *
 * TODO-KIT: this one value turns on every signup block on the site at once.
 * In Kit: create a form for the Red Rose Visualization with an incentive email
 * that delivers the audio, then paste the form's action URL here (from the
 * form's HTML embed — it looks like
 * https://app.kit.com/forms/1234567/subscriptions).
 * While this is null, no signup block renders anywhere, so nothing on the
 * live site ever looks broken.
 */
export const kit = {
  formAction: null as string | null,
  freebie: 'Red Rose Visualization',
  freebieSub: 'A doorway for the inner eye',
  freebieBody:
    'A guided meditation, held within a custom soundscape composed by Stu Pender. A small ritual to settle into stillness and return softened and alive.',
} as const;

/**
 * Where the application form posts.
 *
 * TODO-FORM: a static site cannot send mail by itself — something has to
 * receive the submission and forward it. Formspree is the closest thing to
 * "a Google Form that lands in my inbox" and needs no code:
 *   1. formspree.io → sign up with joankgutz@gmail.com
 *   2. New Form → name it "Ma Somatix application"
 *   3. copy the endpoint it gives you (https://formspree.io/f/xxxxxxxx)
 *   4. paste it below
 * Until then the form falls back to opening a prefilled email to the address
 * below, which works everywhere but asks more of the applicant.
 */
export const form = {
  endpoint: null as string | null,
  to: 'joankgutz@gmail.com',
} as const;

/**
 * The ambient soundscape — warm water and oil over the bones.
 *
 * TODO-SOUND: drop a looping file at /public/audio/soundscape.mp3 (and
 * ideally soundscape.ogg beside it), then set `file` to its name. The player
 * renders nothing until then. It never autoplays: browsers block that, and a
 * site that makes noise at a stranger uninvited is a worse welcome than
 * silence. The control sits in the bottom bar, off by default, and remembers
 * the reader's choice.
 */
export const sound = {
  file: null as string | null,
  credit: 'Soundscape by Stu Pender',
} as const;

export const contact = {
  sms: '9312778555',
  smsHref: 'sms:+19312778555',
  smsDisplay: '(931) 277-8555',
  email: 'joankgutz@gmail.com',
  substack: 'https://eroticbecoming.substack.com',
  art: 'https://joangutz.com',
  ethics: 'https://www.sexologicalbodyworkers.org/ethics',
} as const;

/**
 * The bar at the foot of every page.
 *
 * Two of the four tabs open a short list rather than going somewhere on their
 * own — but each parent is still a real page, so the tab is a link first and
 * a disclosure second. Someone who taps straight through lands on a hub that
 * says the same thing the list does.
 */
export interface NavItem {
  href: string;
  label: string;
  children?: readonly { href: string; label: string }[];
}

export const nav: readonly NavItem[] = [
  {
    href: '/work-with-me/',
    label: 'Work with me',
    children: [
      { href: '/work-with-me/#one-to-one', label: '1:1 Sessions' },
      { href: '/work-with-me/this-very-body/', label: 'This Very Body Program — waitlist' },
      { href: '/work-with-me/happenings/', label: 'Happenings: Relational' },
    ],
  },
  { href: '/about/', label: 'About' },
  {
    href: '/resource/',
    label: 'Resource',
    children: [
      { href: '/resource/gift/', label: 'A Gift' },
      { href: '/resource/inspiration/', label: 'Inspiration' },
      { href: '/resource/library/', label: 'Library' },
    ],
  },
  { href: '/begin/', label: 'Begin' },
];

/**
 * Ma. Soma. Matrix — the sacred process of embodiment.
 *
 * Each one carries two faces: the word and its one-line reading, which is
 * what the figure shows at rest, and the etymology underneath, which is what
 * a bubble gives up when you hover, focus or tap it. Order is the order of
 * the process: source, then space, then body.
 */
export const realms = [
  {
    id: 'matrix',
    name: 'Matrix',
    gloss: 'The Source',
    origin: 'Latin · matrīcis, from mater',
    detail:
      'The womb of potential — an origin point from which new life develops and takes form.',
  },
  {
    id: 'ma',
    name: 'Ma',
    gloss: 'The Space',
    origin: 'Japanese · 間, the sun within a gate',
    detail:
      'Pause, silence, breath, fertile void — the openness in which new meaning can form.',
  },
  {
    id: 'soma',
    name: 'Soma',
    gloss: 'The Body',
    origin: 'Greek · σῶμα, the body',
    detail:
      'The physical body of a living organism, as distinct from mind, soul or spirit.',
  },
] as const;

/**
 * Begin Here — the five ways in, in the order Joan wants them met.
 *
 * Two of them have no written detail yet, so they carry `pending` and link to
 * a page that says plainly that it is coming rather than to an empty one.
 */
export const beginHere = [
  {
    href: '/work-with-me/#one-to-one',
    title: '1:1 Sessions',
    note: 'Three-month study',
    collage: 'erotic-embodiment.jpg',
    register: 'plumstone',
  },
  {
    href: '/work-with-me/this-very-body/',
    title: 'This Very Body Program',
    note: 'Waitlist open',
    collage: 'desire-mapping.jpg',
    register: 'cochineal',
  },
  {
    href: '/work-with-me/#liberate-the-pelvis',
    title: 'Liberate the Pelvis',
    note: 'Scar tissue care',
    collage: 'scar-tissue.jpg',
    register: 'brick',
  },
  {
    href: '/work-with-me/happenings/',
    title: 'Relational Integrity Labs',
    note: 'In a group',
    collage: 'all-in-one.jpg',
    register: 'clay',
  },
  {
    href: '/work-with-me/happenings/#spine-society',
    title: 'Spine Society',
    note: 'Free, monthly',
    collage: 'roots-territories.jpg',
    register: 'plumstone',
  },
] as const;
