import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Copy lives in /content/ so it can be edited without touching components.
 * /content/_source/ holds the two verbatim source documents and is never rendered —
 * the underscore keeps Astro's loader out of it.
 */

const offerings = defineCollection({
  loader: glob({ base: './content/offerings', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    container: z.string(),
    order: z.number(),
    /** The kind of offering, which sets its colour: one (1:1), program,
        gathering (Happenings). Older red registers still accepted. */
    register: z.enum(['one', 'program', 'gathering', 'plumstone', 'cochineal', 'brick', 'clay']),
    /** Filename in /assets/collage/. Renders a tinted placeholder until the file exists. */
    collage: z.string(),
    alt: z.string(),
    /**
     * True for the offering that combines the others. It is a different kind of
     * thing from the single-focus offerings, so it gets its own hierarchy in
     * the price grid rather than sitting in the row as a fourth peer.
     */
    combined: z.boolean().default(false),
    prices: z.array(
      z.object({
        label: z.string(),
        amount: z.number(),
        note: z.string().optional(),
      })
    ),
    /** Left panel — what you get. */
    includes: z.array(z.string()),
    /** Left panel, second block — only Erotic Embodiment has this. */
    entails: z
      .array(z.object({ lead: z.string(), text: z.string() }))
      .optional(),
    /** Right panel — why the approach works. */
    why: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()),
    }),
    /** Scar Tissue Care states its own limits; they belong with the offering. */
    boundaries: z
      .object({ title: z.string(), paragraphs: z.array(z.string()) })
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
      label: z.string(),
      title: z.string(),
      groups: z.array(z.object({ title: z.string(), items: z.array(z.string()) })),
      closing: z.array(z.string()),
    }),
    expect: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()),
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

export const collections = {
  offerings,
  testimonials,
  territories,
  pages,
  home,
  sessionsPage,
};
