/**
 * Search, for people and for AI answer engines.
 *
 * Structured data (schema.org, as JSON-LD) states the plain facts of the
 * practice — who Joan is, what Ma Somatrix offers, where, at what price, how
 * to reach her — in a form search engines and AI assistants read directly,
 * so an answer about her can quote the facts rather than guess them.
 *
 * Every description here is Joan's own wording, taken from the site.
 */
import { site, booking, contact, kit, withBase } from './site';

const BASE_URL = 'https://joangutz.github.io';

/** An absolute URL for a site path. */
export const abs = (path: string) => new URL(withBase(path), BASE_URL).href;

const ORG_ID = abs('/#organization');
const PERSON_ID = abs('/about/#joan');

export const organization = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: site.name,
  url: abs('/'),
  description: site.tagline,
  slogan: site.tagline,
  logo: abs('/favicon-192.png'),
  image: abs('/share.png'),
  email: contact.email,
  telephone: '+1-931-277-8555',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    addressCountry: 'US',
  },
  // Joan's WHERE list.
  areaServed: [
    { '@type': 'City', name: 'Chicago, IL' },
    { '@type': 'Place', name: 'Internationally — online' },
  ],
  founder: { '@id': PERSON_ID },
  sameAs: [contact.substack, contact.art],
  potentialAction: {
    '@type': 'ReserveAction',
    name: booking.label,
    target: booking.url,
  },
};

export const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Joan Gutiérrez',
  jobTitle: 'Somatic educator, artist, and founder of Ma Somatrix',
  url: abs('/about/'),
  image: abs('/share.png'),
  worksFor: { '@id': ORG_ID },
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Pacific Center of Somatic Sexology' },
    { '@type': 'EducationalOrganization', name: 'Zen Shiatsu Chicago' },
  ],
  // The Lineage of Modalities, by Joan's own headings.
  knowsAbout: [
    'Seki Method',
    'Somatic Sexology – Certified Sexological Bodywork',
    'Holistic Pelvic Care™',
    'Zen Shiatsu Bodywork',
    'Butoh',
    'Somatic education',
  ],
  sameAs: [contact.art, contact.substack],
};

export const website = {
  '@type': 'WebSite',
  '@id': abs('/#website'),
  name: site.name,
  url: abs('/'),
  description: site.tagline,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
};

/** The gift, as a creative work. */
export const gift = {
  '@type': 'CreativeWork',
  name: kit.freebie,
  alternativeHeadline: kit.freebieSub,
  description: kit.freebieBody,
  url: abs('/resources/#gift'),
  creator: { '@id': PERSON_ID },
  contributor: { '@type': 'Person', name: 'Stu Pender' },
  isAccessibleForFree: true,
};

/** Breadcrumbs for an inner page. */
export const crumbs = (name: string, path: string) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: site.name, item: abs('/') },
    { '@type': 'ListItem', position: 2, name, item: abs(path) },
  ],
});

/** Wrap nodes as one JSON-LD graph. */
export const graph = (...nodes: object[]) =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
