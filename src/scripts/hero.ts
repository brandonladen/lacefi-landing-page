// Hero motion: the screenshot starts tilted and flattens over the first ~500px of
// scroll, and the status card loops "Filling answers" -> "8 of 8 questions filled".
export function initHero(): void {
  const tilt = document.getElementById('tilt');
  if (tilt) {
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

  const status = document.getElementById('status');
  if (status) {
    const cycle = () => {
      status.classList.remove('run', 'done');
      tilt?.classList.remove('filled');
      void status.offsetWidth; // restart the bar transition
      status.classList.add('run');
      setTimeout(() => {
        status.classList.add('done');
        tilt?.classList.add('filled');
      }, 2700);
    };
    setTimeout(() => {
      status.classList.add('in');
      cycle();
    }, 700);
    setInterval(cycle, 7000);
  }
}
