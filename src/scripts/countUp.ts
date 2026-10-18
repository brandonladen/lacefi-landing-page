// Count the stats up from zero once they are on screen ("204,000+" keeps its suffix).
export function initCountUp(): void {
  const counter = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      counter.unobserve(entry.target);
      const el = entry.target as HTMLElement;
      const text = (el.textContent ?? '').trim();
      const target = parseInt(text.replace(/[^0-9]/g, ''), 10);
      const suffix = text.replace(/[0-9,]/g, '');
      if (!target) continue;

      const start = performance.now();
      const dur = 1400;
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, { threshold: 0.6 });
  document.querySelectorAll('.stats dd').forEach((el) => counter.observe(el));
}
