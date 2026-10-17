// Nav border on scroll, mobile menu, footer year, and the page's motion:
// hero tilt that flattens as you scroll, the Autofill status card, reveal on
// scroll, and counting numbers. Motion is skipped for reduced-motion visitors.
(function () {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');

  function onScrollNav() { nav.classList.toggle('scrolled', window.scrollY > 4); }
  window.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  function setOpen(open) {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  toggle.addEventListener('click', function () { setOpen(!links.classList.contains('open')); });
  links.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('motion');

  // ---- Hero tilt: starts angled, flattens over the first ~500px of scroll.
  var tilt = document.getElementById('tilt');
  if (tilt) {
    var ticking = false;
    var applyTilt = function () {
      ticking = false;
      var p = Math.min(1, window.scrollY / 500);
      var wide = window.innerWidth > 960;
      var ry = (wide ? -14 : -6) * (1 - p);
      var rx = (wide ? 6 : 4) * (1 - p);
      tilt.style.setProperty('--ry', ry.toFixed(2) + 'deg');
      tilt.style.setProperty('--rx', rx.toFixed(2) + 'deg');
      tilt.style.setProperty('--ty', (-24 * p).toFixed(1) + 'px');
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; tilt.classList.add('settle'); requestAnimationFrame(applyTilt); }
    }, { passive: true });
    window.addEventListener('resize', applyTilt);
  }

  // ---- Status card: "Filling answers" -> bar fills -> "8 of 8 questions filled", repeats.
  var status = document.getElementById('status');
  if (status) {
    var cycle = function () {
      status.classList.remove('run', 'done');
      if (tilt) tilt.classList.remove('filled');
      void status.offsetWidth; // restart the bar transition
      status.classList.add('run');
      setTimeout(function () { status.classList.add('done'); if (tilt) tilt.classList.add('filled'); }, 2700);
    };
    setTimeout(function () { status.classList.add('in'); cycle(); }, 700);
    setInterval(cycle, 7000);
  }

  // ---- Reveal on scroll, with a short stagger inside each group.
  var groups = new Map();
  document.querySelectorAll('[data-reveal][data-stagger]').forEach(function (el) {
    var parent = el.parentElement;
    var i = groups.get(parent) || 0;
    el.style.setProperty('--d', Math.min(i * 0.07, 0.5) + 's');
    groups.set(parent, i + 1);
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });

  // ---- Count the numbers up once they are on screen.
  var fmt = function (n) { return n.toLocaleString('en-US'); };
  var counter = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      counter.unobserve(entry.target);
      var el = entry.target;
      var text = el.textContent.trim();
      var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
      var target = el.hasAttribute('data-to') ? parseFloat(el.getAttribute('data-to')) : parseInt(text.replace(/[^0-9]/g, ''), 10);
      var suffix = el.hasAttribute('data-suffix') ? el.getAttribute('data-suffix') : text.replace(/[0-9,]/g, '');
      if (!target) return;
      var start = performance.now(), dur = 1400;
      var step = function (now) {
        var t = Math.min(1, (now - start) / dur);
        var eased = 1 - Math.pow(1 - t, 3);
        el.textContent = (dec ? (target * eased).toFixed(dec) : fmt(Math.round(target * eased))) + suffix;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stats dd').forEach(function (el) { counter.observe(el); });
})();
