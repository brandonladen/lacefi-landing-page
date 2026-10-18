// Page behaviour. The nav always works; motion is skipped for visitors who
// prefer reduced motion (and for browsers without IntersectionObserver).
import { initNav } from './nav';
import { initHero } from './hero';
import { initReveal } from './reveal';
import { initWall } from './wall';
import { initCountUp } from './countUp';

initNav();

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion');
  initHero();
  initReveal();
  initWall();
  initCountUp();
}
