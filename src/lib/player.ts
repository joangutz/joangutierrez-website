/**
 * The site's one player.
 *
 * There is a single <audio> element, in the bar (Soundscape.astro), kept
 * alive across page changes by transition:persist. Everything that plays
 * sound — the bar's control, the Red Rose player on the gift card — plays
 * it through here, so only one thing ever sounds at once and whatever is
 * playing carries on as the reader moves around the site.
 *
 * All state lives on the element itself (its dataset), never in this
 * module, because the element outlives every page and its scripts.
 */

export interface Track {
  id: string;
  title: string;
  /** A shorter name for the bar. */
  short: string;
  src: string;
  /** Loops forever (the soundscape) or plays once (a meditation). */
  loop: boolean;
  /** Comfortable listening level: an ambient bed sits low, a voice does not. */
  level: number;
  /** Only offered once the reader has it — the gift, after signing up. */
  gift?: boolean;
}

export const GIFT_KEY = 'ms-gift-received';
const SOUND_KEY = 'ma-sound';
const FADE = 700;

export const audio = () => document.querySelector<HTMLAudioElement>('[data-sound-el]');

export const tracks = (): Track[] => {
  try {
    return JSON.parse(audio()?.dataset.tracks || '[]');
  } catch {
    return [];
  }
};

export const hasGift = () => {
  try {
    return localStorage.getItem(GIFT_KEY) === '1';
  } catch {
    return false;
  }
};

/** The tracks this reader can play now. */
export const available = () =>
  tracks().filter((t) => !t.gift || hasGift() || audio()?.dataset.track === t.id);

/** The loaded track, or the first one on offer. */
export const current = (): Track | undefined => {
  const el = audio();
  const all = tracks();
  return (
    all.find((t) => t.id === el?.dataset.track) ??
    all.find((t) => !t.gift) ??
    all.find(() => hasGift())
  );
};

export const isPlaying = (id?: string) => {
  const el = audio();
  if (!el || el.paused || el.dataset.fading === 'out') return false;
  return !id || el.dataset.track === id;
};

/** Tell every control on the page that something changed. */
const announce = () => document.dispatchEvent(new CustomEvent('ms-player'));
export const refresh = announce;

// Each fade carries a number on the element; the newest fade wins, so an old
// fade — even one begun on the previous page — never undoes a newer choice.
const ramp = (el: HTMLAudioElement, to: number, done?: () => void) => {
  const id = String(Number(el.dataset.fade || 0) + 1);
  el.dataset.fade = id;
  const from = el.volume;
  const t0 = performance.now();
  const step = (now: number) => {
    if (el.dataset.fade !== id) return;
    const k = Math.min(1, (now - t0) / FADE);
    el.volume = Math.max(0, Math.min(1, from + (to - from) * k));
    if (k < 1) requestAnimationFrame(step);
    else done?.();
  };
  requestAnimationFrame(step);
};

const load = (el: HTMLAudioElement, t: Track) => {
  if (el.dataset.track === t.id) return;
  el.dataset.track = t.id;
  el.loop = t.loop;
  el.src = t.src;
};

const remember = (t: Track, on: boolean) => {
  // Only the ambient bed is restored on a later visit; a meditation is
  // something to choose each time.
  try {
    if (on && t.loop) localStorage.setItem(SOUND_KEY, '1');
    else localStorage.removeItem(SOUND_KEY);
  } catch {}
};

export const pause = () => {
  const el = audio();
  if (!el || el.paused) return;
  const t = current();
  el.dataset.fading = 'out';
  ramp(el, 0, () => {
    el.pause();
    el.dataset.fading = '';
    announce();
  });
  if (t) remember(t, false);
  announce();
};

/** Play a track (the current one by default), from `at` seconds if given. */
export const play = (id?: string, at?: number) => {
  const el = audio();
  const t = id ? tracks().find((x) => x.id === id) : current();
  if (!el || !t) return;
  const start = () => {
    load(el, t);
    if (at !== undefined) el.currentTime = at;
    el.dataset.fading = '';
    if (el.paused) el.volume = 0;
    // A blocked play() is not worth an error message: the control simply
    // stays off, which is the honest state.
    el.play().then(
      () => {
        ramp(el, t.level);
        remember(t, true);
        announce();
      },
      () => announce()
    );
    announce();
  };
  // Changing track: let the one playing fade out first.
  if (!el.paused && el.dataset.track !== t.id) {
    el.dataset.fading = 'out';
    ramp(el, 0, () => {
      el.pause();
      start();
    });
  } else start();
};

export const toggle = (id?: string) => (isPlaying(id) ? pause() : play(id));

/** Move within the loaded track (or start the given one there). */
export const seek = (id: string, at: number) => {
  const el = audio();
  if (!el) return;
  if (el.dataset.track === id) {
    el.currentTime = at;
    announce();
  } else play(id, at);
};

/**
 * Once per element (it outlives pages, so once per visit): pass the
 * element's own events on as one page-level event that each page's
 * controls listen to, and put a finished meditation away.
 */
export const wire = () => {
  const el = audio();
  if (!el || el.dataset.wired) return;
  el.dataset.wired = '1';
  for (const type of ['play', 'pause', 'timeupdate', 'loadedmetadata', 'durationchange']) {
    el.addEventListener(type, announce);
  }
  el.addEventListener('ended', () => {
    if (el.loop) return;
    el.dataset.track = '';
    el.removeAttribute('src');
    el.load();
    announce();
  });
};

export const remembered = () => {
  try {
    return localStorage.getItem(SOUND_KEY) === '1';
  } catch {
    return false;
  }
};

export const clock = (t: number) => {
  if (!isFinite(t) || t < 0) return '0:00';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
};
