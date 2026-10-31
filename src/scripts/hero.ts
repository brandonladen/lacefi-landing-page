// Hero motion: the screenshot starts tilted and flattens over the first ~500px of scroll.
export function initHero(): void {
  const tilt = document.getElementById('tilt');
  if (!tilt) return;
  let ticking = false;
  const apply = () => {
    ticking = false;
    const p = Math.min(1, window.scrollY / 500);
    const wide = window.innerWidth > 960;
    tilt.style.setProperty('--ry', ((wide ? -14 : -6) * (1 - p)).toFixed(2) + 'deg');
    tilt.style.setProperty('--rx', ((wide ? 6 : 4) * (1 - p)).toFixed(2) + 'deg');
    tilt.style.setProperty('--ty', (-24 * p).toFixed(1) + 'px');
  };
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    tilt.classList.add('settle');
    requestAnimationFrame(apply);
  }, { passive: true });
  window.addEventListener('resize', apply);
}
