/**
 * Inline links inside a content string: [words](https://…) becomes a link,
 * everything else is escaped as plain text. Used where the client has asked
 * for a name in running prose to carry a link (About, 11/17). External
 * links open in a new tab.
 */
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** `newTab` is what a screen reader hears after the link, in the page's language. */
export function inline(text: string, newTab = '(opens in a new tab)'): string {
  let out = '';
  let last = 0;
  for (const m of text.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g)) {
    out += esc(text.slice(last, m.index));
    out += `<a class="name-link" href="${esc(m[2])}" target="_blank" rel="noopener">${esc(m[1])}<span class="visually-hidden"> ${esc(newTab)}</span></a>`;
    last = m.index! + m[0].length;
  }
  return out + esc(text.slice(last));
}
