// Nav border on scroll, the mobile menu, and the footer year.
export function initNav(): void {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!nav || !toggle || !links) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 4);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const setOpen = (open: boolean) => {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
  links.addEventListener('click', (e) => {
    if ((e.target as Element).closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
}
