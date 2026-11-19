// Frames of the course's own tools (same origin): each frame takes the height of its document, so the page
// has a single scrollbar. The height only grows while the width stays the same (no jump from one step to the
// next) and is measured again when the width changes. Without this script, or from another origin, the height
// written in styles.css stays and the frame scrolls on its own.
(() => {
  const setUp = (frame) => {
    let width = 0;
    let height = 0;
    const fit = () => {
      try {
        const root = frame.contentDocument?.documentElement;
        if (!root || frame.contentWindow.location.href === 'about:blank') return;
        if (frame.clientWidth !== width) { width = frame.clientWidth; height = 0; }
        // The frame's own borders are part of its height (box-sizing: border-box).
        const needed = Math.ceil(root.getBoundingClientRect().height) + frame.offsetHeight - frame.clientHeight;
        if (needed > height) { height = needed; frame.style.height = `${height}px`; }
      } catch {
        // Not readable (other origin, page opened as a file): the CSS height stays.
      }
    };
    const watch = () => {
      fit();
      try {
        const Observer = frame.contentWindow.ResizeObserver;
        new Observer(fit).observe(frame.contentDocument.documentElement);
      } catch {
        // Same fallback as above.
      }
    };
    frame.addEventListener('load', watch);
    if (frame.contentDocument?.readyState === 'complete') watch();
    window.addEventListener('resize', fit);
  };
  const start = () => document.querySelectorAll('iframe.cadre-outil-cadre').forEach(setUp);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
