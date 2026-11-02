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
  name: 'Ma Somatrix',
  domain: 'masomatix.com',
  /** The practitioner, still named wherever the writing is hers. */
  person: 'Joan Gutiérrez',
  tagline: 'Somatic education delivered with artistry for vibrant health',
  place: 'Chicago and beyond',
  // Joan's own line, so the description search engines show is in her words.
  description: 'Somatic education delivered with artistry for vibrant health',
  // Exactly as Joan wrote her "WHERE" list.
  locations: [
    { place: 'Chicago, IL', mode: 'in-person' },
    { place: 'Internationally', mode: 'online' },
    { place: 'Open to travel', mode: '' },
  ],
} as const;

export const booking = {
  /** Existing Cal.com booking. Linked, never embedded — see /begin/. */
  calLink: 'joan.gutierrez/20min',
  url: 'https://cal.com/joan.gutierrez/20min',
  duration: '20 minutes',
  // Joan's wording, from her original site's navigation.
  label: 'Book a Complimentary Call',
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
  // Joan's Kit form for the Red Rose Visualization.
  formAction: 'https://app.kit.com/forms/10134888/subscriptions' as string | null,
  /**
   * TODO-AUDIO: the recording, revealed (a player and a download link) on
   * the gift card once someone has given their email. Upload the MP3 to
   * /public/audio/ on GitHub and set its file name here, e.g.
   * 'red-rose-visualization.mp3'. Note: the file is public at its address;
   * the email form is a gentle gate, not a lock. For a true gate, leave
   * this null and have Kit deliver the recording by email instead.
   */
  audio: 'red-rose-visualization.mp3' as string | null,
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
 *   2. New Form → name it "Ma Somatrix application"
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
  credit: 'Stu Pender',
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
 * The bar at the foot of every page: four tabs, each one page. Every
 * offering lives on Services and every resource on Resources, so a tab
 * never hides a list.
 */
export interface NavItem {
  href: string;
  label: string;
}

export const nav: readonly NavItem[] = [
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/resources/', label: 'Resources' },
  { href: '/begin/', label: 'Begin' },
];

/**
 * Ma. Soma. Matrix — Joan's text, exactly as she wrote it.
 *
 * Each realm carries its word, its one-line reading from her diagram, and
 * her definition in full. The figure shows the word and reading; the
 * definition opens in the panel beside it. The layout bends to fit the
 * words: an earlier version cut the definitions down to fit inside the
 * bubbles, which put words in her mouth.
 *
 * Order is the order of her diagram: source, then space, then body.
 */
export const realms = [
  {
    id: 'matrix',
    name: 'Matrix',
    gloss: 'The Source',
    paragraphs: [
      'Matrix matrīcis : of Latin origin, derived from mater, meaning mother.',
      'Speaks of the womb of potential / of the mother source. An origin point from which new life originates, develops or takes form.',
    ],
  },
  {
    id: 'ma',
    name: 'Ma',
    gloss: 'The Space',
    paragraphs: [
      'MA 間 : of Japanese origin, combines the character for gate 門 with the character for sun 日.',
      'Depicts the warm light of the sun pouring through the space between an open doorway.',
      'Ma is interpreted as pause, silence, stillness, breath, and fertile void; a generative openness that delves into space-time relationships. A force that opens up and allows for the creation of new relationships and meanings.',
    ],
  },
  {
    id: 'soma',
    name: 'Soma',
    gloss: 'The Body',
    paragraphs: [
      'Soma σῶμα : of ancient Greek origin, translates to body.',
      'Specifically the physical body of an organism as distinguished from the mind, the soul, or the spirit.',
    ],
  },
] as const;

/**
 * Begin Here — the five, in the order Joan listed them, with only the words
 * she wrote beside each name: "(waitlist)" and "(free monthly gathering)".
 */
export const beginHere = [
  {
    href: '/services/#one-to-one',
    title: '1:1 Sessions',
    note: '',
    collage: 'erotic-embodiment.jpg',
    register: 'one',
  },
  {
    href: '/services/#this-very-body',
    title: 'This Very Body Program',
    note: 'waitlist',
    collage: 'desire-mapping.jpg',
    register: 'program',
  },
  {
    href: '/services/#liberate-the-pelvis',
    title: 'Liberate the Pelvis',
    note: '',
    collage: 'scar-tissue.jpg',
    register: 'one',
  },
  {
    href: '/services/#relational-integrity-labs',
    title: 'Relational Integrity Labs',
    note: '',
    collage: 'all-in-one.jpg',
    register: 'gathering',
  },
  {
    href: '/services/#spine-society',
    title: 'Spine Society',
    note: 'free monthly gathering',
    collage: 'roots-territories.jpg',
    register: 'gathering',
  },
] as const;
