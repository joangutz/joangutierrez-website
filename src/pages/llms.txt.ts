import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { abs } from '../seo';
import { site, booking, contact, kit, beginHere } from '../site';

/**
 * llms.txt — a plain-text guide to the site for AI assistants, following
 * the llms.txt proposal (llmstxt.org): what Ma Somatrix is, what it offers,
 * where, and how to begin, each with its link. The descriptions are
 * Joan's own text; only the short notes on what each page holds are not.
 */
export const GET: APIRoute = async () => {
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
    '## Services',
    '',
    ...(sessions
      ? [
          `- [${sessions.data.oneToOne.title}](${abs('/services/#one-to-one')}): ` +
            sessions.data.oneToOne.rows
              .map((r) => {
                const modes = [
                  r.online !== undefined ? `${money(r.online)} online` : '',
                  r.inPerson !== undefined ? `${money(r.inPerson)} in-person` : '',
                ].filter(Boolean);
                return `${r.minutes} minutes ${modes.join(' / ')}`;
              })
              .join('; ') +
            '.',
          ...sessions.data.modalities.map(
            (m) =>
              `- [${m.title}](${abs(`/services/#${m.id}`)})${m.items ? `: ${m.intro ? `${m.intro} ` : ''}${m.items.join(', ')}` : ''}`
          ),
          ...beginHere
            .filter((b) => b.href.endsWith('#spine-society') || b.href.endsWith('#relational-integrity-labs'))
            .map((b) => `- [${b.title}](${abs(b.href)})${b.note ? `: ${b.note}` : ''}`),
          `- [${sessions.data.archive.title}](${abs('/services/#this-very-body')}): ${sessions.data.archive.note} — ${sessions.data.archive.bodies.join(', ')}.`,
          '',
          sessions.data.expect.paragraphs[sessions.data.expect.paragraphs.length - 1],
        ]
      : []),
    '',
    '## Pages',
    '',
    `- [Services](${abs('/services/')}): who the work is for, what to expect, 1:1 session prices, the modalities, events, and the Discovery Form.`,
    `- [About](${abs('/about/')}): Joan's biography and her Lineage of Modalities — Seki Method; Somatic Sexology – Certified Sexological Bodywork; Holistic Pelvic Care™; Zen Shiatsu Bodywork.`,
    `- [Resources](${abs('/resources/')}): ${kit.freebie} — ${kit.freebieBody}`,
    `- [Book a Call](${abs('/begin/')}): ${booking.label}.`,
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
