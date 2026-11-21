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
    { place: 'Available to Travel', mode: '' },
  ],
} as const;

export const booking = {
  /** Existing Cal.com booking. Linked, never embedded — see /begin/. */
  calLink: 'joan.gutierrez/20min',
  url: 'https://cal.com/joan.gutierrez/20min',
  // TODO-JOAN: the discovery call is now 30 minutes with a $15 fee (her
  // text of 11/16); the link above is still her old 20-minute free call
  // until she sends the new Cal.com link.
  duration: '30 minutes',
  // Joan's wording, 11/16.
  label: 'Book a Discovery Call',
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
  /**
   * TODO-KIT-WAITLIST: a Kit form for the This Very Body Program waitlist.
   * Paste its action URL (from the form's HTML embed) here and the card's
   * Join the Waitlist becomes an email field that adds people to it. Until
   * then the card opens the application form.
   */
  waitlistAction: null as string | null,
  /**
   * TODO-KIT-NEWS: a Kit form for the general mailing list. Paste its
   * action URL here and a small "stay in touch" field appears in the
   * closing pane at the foot of every page.
   */
  newsletterAction: null as string | null,
  freebie: 'Red Rose Visualization',
  // 11/18: no line under the name, at the client's request ("blank and
  // simple"); was "A doorway for the inner eye", then "…softening and opening".
  freebieSub: '' as string,
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
 * The file is in /public/audio (see its README for how the loop was made). It never autoplays: browsers block that, and a
 * site that makes noise at a stranger uninvited is a worse welcome than
 * silence. The control sits in the bottom bar, off by default, and remembers
 * the reader's choice.
 *
 * It plays through the site's one player (lib/player.ts, its control in
 * Soundscape.astro), which also plays the Red Rose once a reader has it.
 * Pages change without a reload (Astro's ClientRouter, in Base.astro), so
 * whatever is playing plays on as the reader moves from page to page.
 */
export const sound = {
  // Stu Pender's Pacific Equinox, made to loop: its last fifteen seconds
  // are blended into its first, so the end flows on into the beginning.
  file: 'pacific-equinox.mp3' as string | null,
  credit: 'Stu Pender',
  /** His studio, linked from his name in the player. */
  creditUrl: 'https://beingsound.studio',
} as const;

export const contact = {
  // Phone number removed from the site 11/17 at the client's request.
  email: 'joankgutz@gmail.com',
  substack: 'https://eroticbecoming.substack.com',
  art: 'https://joangutz.com',
  ethics: 'https://www.sexologicalbodyworkers.org/ethics',
  /** Stu Pender, who composed the Red Rose soundscape. */
  stu: 'https://beingsound.studio',
} as const;

/**
 * The bar at the foot of every page: four tabs, each one page. Every
 * offering lives on Services and every resource on Resources, so a tab
 * never hides a list.
 */
export interface NavItem {
  href: string;
  label: string;
  /** Drawn as a boxed button, set apart from the other tabs. */
  action?: boolean;
}

export const nav: readonly NavItem[] = [
  { href: '/services/', label: 'Offerings' },
  { href: '/about/', label: 'About' },
  { href: '/resources/', label: 'Resources' },
  // Joan, 11/16: "BOOK A CALL", boxed like a button, linked to the
  // booking page.
  { href: '/begin/', label: 'Get In Touch', action: true },
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
  // The Offerings index, in the client's order of 11/17 (second revision).
  {
    href: '/services/#one-to-one',
    title: '1:1 Sessions',
    note: '',
    collage: 'erotic-embodiment.jpg',
    register: 'one',
  },
  {
    href: '/services/#liberate-your-pelvis',
    title: 'Liberate Your Pelvis',
    note: 'immersions', // 11/17
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
    href: '/services/#zen-shiatsu',
    title: 'Zen Shiatsu',
    note: '',
    collage: 'work-2.jpg',
    register: 'one',
  },
  {
    href: '/services/#spine-society',
    title: 'Spine Society',
    note: 'pay-from-the-heart monthly gathering', // 11/17: was free
    // 11/18: out of view for now, at the client's request; set false to
    // bring it back (its image and words are kept).
    hidden: true,
    collage: 'roots-territories.jpg',
    register: 'gathering',
  },
  {
    href: '/services/#this-very-body',
    title: 'This Very Body: Movement Archive',
    note: 'coming soon',
    collage: 'desire-mapping.jpg',
    register: 'program',
  },
] as const;

/**
 * The five cards on the homepage — Joan's own list and names (11/16),
 * apart from the Services page's list above so each page can name things
 * its own way.
 */
/** Whether an entry is shown (an entry can be kept but set out of view). */
export const shown = <T extends object>(o: T) => !('hidden' in o && (o as { hidden?: boolean }).hidden);

export const homeCards = [
  // Joan's five, in her order and her words, 11/16.
  {
    href: '/services/#one-to-one',
    title: '1:1',
    note: '',
    collage: 'erotic-embodiment.jpg',
    register: 'one',
  },
  {
    // Joan, 11/17: reads Liberate Your Pelvis, as on Services.
    href: '/services/#liberate-your-pelvis',
    title: 'Liberate Your Pelvis',
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
    note: '',
    collage: 'roots-territories.jpg',
    register: 'gathering',
    hidden: true, // 11/18: out of view for now (see beginHere)
  },
  {
    href: '/services/#zen-shiatsu',
    title: 'Zen Shiatsu',
    note: '',
    collage: 'work-2.jpg',
    register: 'one',
  },
  {
    // 11/21: added at the client's request; the same art as its Offerings card.
    href: '/services/#this-very-body',
    title: 'This Very Body: Movement Archive',
    note: '',
    collage: 'desire-mapping.jpg',
    register: 'program',
  },
] as const;
