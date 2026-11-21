/**
 * Land on the part of the page a link names (11/21).
 *
 * A link such as /services/#zen-shiatsu should open with that card at the
 * top of the window. The browser does jump there, but it measures the page
 * before the cards fold their turned sides away; once they fold, the page
 * keeps travelling to where the card used to be, often all the way to the
 * bottom. So, once the page has settled, set it down on the card again —
 * and once more when the images have arrived — unless the reader has
 * already started scrolling on their own.
 */
export const landOnHash = () => {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;

  let touched = false;
  const stop = () => {
    touched = true;
  };
  const events = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const;
  events.forEach((e) => window.addEventListener(e, stop, { passive: true, once: true }));

  // 'instant' also cancels the browser's own smooth travel, still under way.
  const land = () => {
    if (!touched && target.isConnected) target.scrollIntoView({ behavior: 'instant', block: 'start' });
  };
  // After every page script has run (two frames), then again once settled.
  requestAnimationFrame(() => requestAnimationFrame(land));
  const later = setTimeout(land, 600);
  const onLoad = () => land();
  if (document.readyState !== 'complete') window.addEventListener('load', onLoad, { once: true });

  return () => {
    clearTimeout(later);
    window.removeEventListener('load', onLoad);
    events.forEach((e) => window.removeEventListener(e, stop));
  };
};
