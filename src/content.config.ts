import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Copy lives in /content/ so it can be edited without touching components.
 * /content/_source/ holds the two verbatim source documents and is never rendered —
 * the underscore keeps Astro's loader out of it.
 */

/** A block of a card's turned side: a heading over paragraphs, a list of
    items (each with an optional lead), tiers, prices, or the waitlist form. */
const cardBlock = z.object({
  title: z.string().optional(),
  paragraphs: z.array(z.string()).optional(),
  items: z.array(z.object({ lead: z.string().optional(), text: z.string() })).optional(),
  tiers: z.array(z.object({ label: z.string(), title: z.string(), text: z.string() })).optional(),
  prices: z.array(z.object({ label: z.string(), amount: z.string() })).optional(),
  form: z.literal('waitlist').optional(),
});

const offerings = defineCollection({
  loader: glob({ base: './content/offerings', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    /** Small label over the name, front and back. */
    kicker: z.string().optional(),
    /** Joan's line under the name on the front. */
    line: z.string().optional(),
    /** The word on the button that turns the card. */
    turn: z.string().default('Includes'),
    order: z.number(),
    /** The kind of offering, which sets its colour: one (1:1), program,
        gathering (Happenings). Older red registers still accepted. */
    register: z.enum(['one', 'program', 'gathering', 'plumstone', 'cochineal', 'brick', 'clay']),
    /** Filename in /assets/collage/. Renders a tinted placeholder until the file exists. */
    collage: z.string(),
    alt: z.string(),
    combined: z.boolean().default(false),
    prices: z
      .array(z.object({ label: z.string(), amount: z.number(), note: z.string().optional() }))
      .optional(),
    /** The 1:1 card's turned side: Includes / Entails, and why. */
    includes: z.array(z.string()).optional(),
    entails: z.array(z.object({ lead: z.string(), text: z.string() })).optional(),
    why: z.object({ title: z.string(), paragraphs: z.array(z.string()) }).optional(),
    boundaries: z.object({ title: z.string(), paragraphs: z.array(z.string()) }).optional(),
    /** The other cards' turned side, as blocks in two columns. */
    left: z.array(cardBlock).optional(),
    right: z.array(cardBlock).optional(),
    /** The card's own way in, at the foot of its turned side. */
    action: z
      .object({ lead: z.string().optional(), label: z.string(), href: z.string(), subject: z.string().optional() })
      .optional(),
  }),
});

const territories = defineCollection({
  loader: glob({ base: './content/territories', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    /** Draws a torn-paper edge above this territory. */
    torn: z.boolean().default(true),
  }),
});

/**
 * What clients say. Empty by design until Joan has real quotes with real
 * permission — invented or placeholder praise on a page like this would be
 * worse than no section at all, and the component renders nothing while the
 * folder is empty.
 */
const testimonials = defineCollection({
  // The folder's own instructions live beside the entries, so they have to be
  // excluded by name or the loader tries to parse the README as a testimonial.
  loader: glob({
    base: './content/testimonials',
    pattern: ['**/*.md', '!**/README.md'],
  }),
  schema: z.object({
    quote: z.string(),
    /** How the client wants to be named. A first name and initial is plenty. */
    attribution: z.string(),
    /** Optional: which offering, or how long they worked together. */
    context: z.string().optional(),
    order: z.number().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    lede: z.string().optional(),
    /** A line of Joan's set apart in large type below the page's text. */
    quote: z.string().optional(),
    description: z.string(),
  }),
});

/**
 * Home is a sequence of teasers rather than one piece of prose, so its copy is
 * structured rather than a markdown body. Everything here is Joan's own
 * writing, carried across unaltered from /content/_source/.
 */
const home = defineCollection({
  loader: glob({ base: './content/home', pattern: '**/*.md' }),
  schema: z.object({
    hero: z.object({
      /** The wordmark splits in two, one half at each margin. */
      markLeft: z.string(),
      markRight: z.string(),
      tagline: z.string(),
      place: z.string(),
      collage: z.string(),
      alt: z.string(),
    }),
    /** Joan's welcome, beside her portrait. */
    welcome: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()),
      closing: z.string(),
      portrait: z.string(),
      alt: z.string(),
      link: z.string(),
    }),
    /** What is Ma Somatrix? — her text, then the triangle. */
    realms: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()),
      /** What the panel beside the triangle says before a word is chosen. */
      intro: z.array(z.string()),
      link: z.string(),
    }),
    /** Her land acknowledgment, closing the page. */
    land: z.object({ label: z.string(), text: z.string() }),
  }),
});

/** Sessions is part structured, part prose — the arc, consent, and the note. */
const sessionsPage = defineCollection({
  loader: glob({ base: './content/sessions', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    belong: z.object({
      label: z.string().optional(),
      title: z.string(),
      groups: z.array(z.object({ title: z.string(), items: z.array(z.string()) })),
      closing: z.array(z.string()),
    }),
    expect: z.object({
      title: z.string(),
      intro: z.string(),
      /** Her paragraphs grouped into boxes; **…** marks her words set bold. */
      boxes: z.array(z.object({ icon: z.string(), paragraphs: z.array(z.string()) })),
      where: z.string(),
      wish: z.string(),
      link: z.string(),
    }),
    /** Prices in US dollars, by session length; a missing price is not offered. */
    oneToOne: z.object({
      title: z.string(),
      rows: z.array(z.object({ minutes: z.number(), online: z.number().optional(), inPerson: z.number().optional() })),
    }),
    quote: z.object({ text: z.string(), by: z.string() }),
  }),
});

/** The About page — Joan's text of 11/16, structured by section. */
const aboutPage = defineCollection({
  loader: glob({ base: './content/about', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    roles: z.string(),
    line: z.string(),
    more: z.string(),
    portrait: z.string(),
    alt: z.string(),
    letter: z.array(z.string()),
    signoff: z.array(z.string()),
    background: z.object({
      title: z.string(),
      arts: z.array(z.string()),
      turn: z.string(),
      body: z.array(z.string()),
    }),
    work: z.object({ title: z.string(), paragraphs: z.array(z.string()) }),
    banner: z.object({ question: z.string(), button: z.string() }),
    memberships: z.array(z.string()),
  }),
});

export const collections = {
  aboutPage,
  offerings,
  testimonials,
  territories,
  pages,
  home,
  sessionsPage,
};
