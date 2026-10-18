// Reveal [data-reveal] elements as they scroll into view, with a short stagger
// between [data-stagger] siblings.
export function initReveal(): void {
  const groups = new Map<Element | null, number>();
  document.querySelectorAll<HTMLElement>('[data-reveal][data-stagger]').forEach((el) => {
    const i = groups.get(el.parentElement) ?? 0;
    el.style.setProperty('--d', Math.min(i * 0.07, 0.5) + 's');
    groups.set(el.parentElement, i + 1);
  });

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
}
