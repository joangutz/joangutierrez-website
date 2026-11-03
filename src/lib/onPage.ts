/**
 * Run a page's setup at the right moment.
 *
 * With smooth page changes switched on (Astro's ClientRouter, used so the
 * soundscape plays on uninterrupted from page to page), scripts load once
 * and each new page is swapped in without a reload, so setup has to run
 * again on every page, and anything left running (animation loops,
 * listeners on the window) has to stop when the page is swapped out.
 *
 * `fn` may return a cleanup function; it runs just before the next swap.
 * Without the router this is simply "run once".
 */
type Setup = () => void | (() => void);

const routed = () => Boolean(document.querySelector('meta[name="astro-view-transitions-enabled"]'));

export const onPage = (fn: Setup) => {
  if (!routed()) {
    fn();
    return;
  }
  let cleanup: void | (() => void);
  document.addEventListener('astro:page-load', () => {
    cleanup = fn();
  });
  document.addEventListener('astro:before-swap', () => {
    if (typeof cleanup === 'function') cleanup();
    cleanup = undefined;
  });
};
