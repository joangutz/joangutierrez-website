import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';
import { abs } from '../seo';
import { site, booking, contact, kit, beginHere } from '../site';

/**
 * llms.txt — a plain-text guide to the site for AI assistants, following
 * the llms.txt proposal (llmstxt.org): what Ma Somatrix is, what it offers,
 * where, and how to begin, each with its link. The descriptions are
 * Joan's own text; only the short notes on what each page holds are not.
 */
export const GET: APIRoute = async () => {
  const offerings = (await getCollection('offerings')).sort((a, b) => a.data.order - b.data.order);
  const sessions = await getEntry('sessionsPage', 'sessions');
  const about = await getEntry('pages', 'about');
  const money = (n: number) => `$${n.toLocaleString('en-US')}`;
  const firstPara = (about?.body ?? '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim()
    .split(/\n\s*\n/)[0]
    .trim();

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.tagline}.`,
    '',
    `${site.name} is the practice of Joan Gutiérrez: somatic educator, artist, and founder of Ma Somatrix. ${firstPara}`,
    '',
    'Where: Chicago, IL — in-person. Internationally — online. Open to travel.',
    '',
    '## Offerings',
    '',
    ...offerings.map((o) => {
      const p = o.data.prices[0];
      return `- [${o.data.title}](${abs(`/offerings/#${o.id}`)}): ${p.label}, ${money(p.amount)}${p.note ? ` (${p.note})` : ''}. ${o.data.includes[0]}`;
    }),
    ...beginHere
      .filter((b) => !offerings.some((o) => b.href.endsWith(`#${o.id}`)))
      .map((b) => `- [${b.title}](${abs(b.href)})${b.note ? `: ${b.note}` : ''}`),
    '',
    sessions ? `${sessions.data.lede}` : '',
    '',
    '## Pages',
    '',
    `- [Offerings](${abs('/offerings/')}): every offering, how a session goes, how consent works, prices, and the application form.`,
    `- [About](${abs('/about/')}): Joan's biography and her Lineage of Modalities — Seki Method; Somatic Sexology – Certified Sexological Bodywork; Holistic Pelvic Care™; Zen Shiatsu Bodywork.`,
    `- [Resources](${abs('/resources/')}): ${kit.freebie} — ${kit.freebieBody}`,
    `- [Begin](${abs('/begin/')}): ${booking.label}.`,
    `- [The Work](${abs('/the-work/')}): Erotic Embodiment is the practice of listening again.`,
    '',
    '## Contact',
    '',
    `- ${booking.label}: ${booking.url}`,
    `- Email: ${contact.email}`,
    `- Substack: ${contact.substack}`,
    `- Art: ${contact.art}`,
    '',
  ];
  return new Response(lines.filter((l, i, a) => !(l === '' && a[i - 1] === '')).join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
