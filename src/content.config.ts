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

const pages = defineCollection({
  loader: glob({ base: './content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    lede: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = { offerings, territories, pages };
