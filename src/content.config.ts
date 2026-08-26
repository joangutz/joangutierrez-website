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
    /** Which register of red this offering's card face carries. */
    register: z.enum(['plumstone', 'cochineal', 'brick', 'clay']),
    /** Filename in /assets/collage/. Renders a tinted placeholder until the file exists. */
    collage: z.string(),
    alt: z.string(),
    /** One line, shown on the resting face of the card. */
    teaser: z.string(),
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
      eyebrow: z.string(),
      headline: z.string(),
      sub: z.string(),
      collage: z.string(),
      alt: z.string(),
    }),
    audience: z.object({
      title: z.string(),
      lines: z.array(z.string()),
      link: z.string(),
    }),
    realms: z.object({
      title: z.string(),
      body: z.string(),
      link: z.string(),
    }),
    sessions: z.object({ title: z.string(), body: z.string(), link: z.string() }),
    story: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()),
      portrait: z.string(),
      alt: z.string(),
      link: z.string(),
    }),
    freebie: z.object({ title: z.string(), body: z.string() }),
    close: z.object({ title: z.string(), body: z.string() }),
  }),
});

/** Sessions is part structured, part prose — the arc, consent, and the note. */
const sessionsPage = defineCollection({
  loader: glob({ base: './content/sessions', pattern: '**/*.md' }),
  schema: z.object({
    eyebrow: z.string(),
    title: z.string(),
    lede: z.string(),
    description: z.string(),
    cards: z.object({ title: z.string(), body: z.string() }),
    prices: z.object({ title: z.string(), body: z.string() }),
    arc: z.object({
      title: z.string(),
      intro: z.string(),
      steps: z.array(z.object({ lead: z.string(), rest: z.string() })),
      after: z.string(),
    }),
    consent: z.object({ title: z.string(), paragraphs: z.array(z.string()) }),
    /** Verbatim scope-of-practice text. A professional boundary, not fine print. */
    note: z.object({ title: z.string(), paragraphs: z.array(z.string()) }),
    /**
     * Answers assembled from Joan's existing copy only. Entries marked
     * todo: true are questions that still need her words — they are kept in
     * the content file as the visible gap list and never rendered.
     */
    faq: z.array(
      z.object({ q: z.string(), a: z.string(), todo: z.boolean().default(false) })
    ),
    close: z.object({ title: z.string(), body: z.string() }),
    clinicians: z.object({ body: z.string(), link: z.string() }),
  }),
});

/** Roots: the land, the epigraph, and the credentials kept complete but quiet. */
const rootsPage = defineCollection({
  loader: glob({ base: './content/roots', pattern: '**/*.md' }),
  schema: z.object({
    eyebrow: z.string(),
    title: z.string(),
    lede: z.string(),
    description: z.string(),
    portrait: z.object({ src: z.string(), alt: z.string() }),
    land: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()),
      image: z.string(),
      alt: z.string(),
    }),
    epigraph: z.object({ quote: z.string(), source: z.string() }),
    credentials: z.object({
      title: z.string(),
      note: z.string(),
      groups: z.array(
        z.object({
          heading: z.string(),
          items: z.array(
            z.object({
              name: z.string(),
              detail: z.string().optional(),
              where: z.string().optional(),
              when: z.string().optional(),
            })
          ),
        })
      ),
      ethics: z.string(),
    }),
  }),
});

export const collections = {
  offerings,
  testimonials,
  territories,
  pages,
  home,
  sessionsPage,
  rootsPage,
};
