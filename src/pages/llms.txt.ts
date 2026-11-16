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
  const about = await getEntry('aboutPage', 'about');
  const money = (n: number) => `$${n.toLocaleString('en-US')}`;
  const firstPara = about?.data.letter[0] ?? '';

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.tagline}.`,
    '',
    `${site.name} is the practice of Joan Gutiérrez: somatic educator, artist, and founder of Ma Somatrix. ${firstPara}`,
    '',
    'Where: Chicago, IL — in-person. Internationally — online. Available to Travel.',
    '',
    '## Services',
    '',
    ...(sessions
      ? [
          `- [${sessions.data.oneToOne.title}](${abs('/services/#services')}): ` +
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
          ...offerings.map((o) => `- [${o.data.title}](${abs(`/services/#${o.id}`)})${o.data.line ? `: ${o.data.line}` : o.data.includes ? `: ${o.data.includes[0]}` : ''}`),
          ...beginHere
            .filter((b) => !offerings.some((o) => b.href.endsWith(`#${o.id}`)))
            .map((b) => `- [${b.title}](${abs(b.href)})${b.note ? `: ${b.note}` : ''}`),
          '',
          sessions.data.expect.where.replaceAll('**', ''),
        ]
      : []),
    '',
    '## Pages',
    '',
    `- [Services](${abs('/services/')}): who the work is for, what to expect, 1:1 session prices, and every offering.`,
    `- [Discovery Form](${abs('/discovery-form/')}): a short form to Joan, about any of the services.`,
    `- [About](${abs('/about/')}): ${about ? `${about.data.name} — ${about.data.roles}. ${about.data.line}` : ''}`,
    `- [Resources](${abs('/resources/')}): ${kit.freebie} — ${kit.freebieBody}`,
    `- [Book a Session](${abs('/begin/')}): ${booking.label}.`,
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
