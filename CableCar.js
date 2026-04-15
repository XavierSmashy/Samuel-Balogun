/**
 * ============================================================
 *  ELEYELE SKYLINE RESORT & ADVENTURE PARK — Business Plan JS
 *  Paste this entire block inside the existing <script> tag
 *  (replacing what's currently there), just before </body>
 * ============================================================
 */

/* ─────────────────────────────────────────────
   1. SCROLL PROGRESS BAR
   A thin gold line that grows across the very top
   of the page as the user reads down.
───────────────────────────────────────────── */
(function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  Object.assign(bar.style, {
    position:   'fixed',
    top:        '0',
    left:       '0',
    height:     '3px',
    width:      '0%',
    background: 'linear-gradient(90deg, #C9A84C, #E8CC7A)',
    zIndex:     '10000',
    transition: 'width 0.1s linear',
    pointerEvents: 'none',
  });
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrollTop    = window.scrollY;
    const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    const progress     = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width    = progress + '%';
  }, { passive: true });
})();


/* ─────────────────────────────────────────────
   2. MOBILE NAV TOGGLE
   Injects a hamburger button and toggles the
   nav links on screens narrower than 768px.
───────────────────────────────────────────── */
(function initMobileNav() {
  const nav      = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');
  if (!nav || !navLinks) return;

  // Create hamburger button
  const burger = document.createElement('button');
  burger.id = 'nav-burger';
  burger.setAttribute('aria-label', 'Toggle navigation');
  burger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    #nav-burger {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 26px;
      height: 18px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 1001;
    }
    #nav-burger span {
      display: block;
      width: 100%;
      height: 2px;
      background: #C9A84C;
      border-radius: 2px;
      transition: all 0.3s ease;
      transform-origin: center;
    }
    #nav-burger.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    #nav-burger.open span:nth-child(2) { opacity: 0; }
    #nav-burger.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

    @media (max-width: 768px) {
      #nav-burger { display: flex; }
      .nav-links {
        position: fixed;
        top: 57px;
        left: 0; right: 0;
        background: rgba(8,15,10,0.98);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(201,168,76,0.25);
        flex-direction: column;
        align-items: center;
        gap: 0;
        padding: 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease, padding 0.4s ease;
      }
      .nav-links.open {
        max-height: 400px;
        padding: 20px 0 28px;
      }
      .nav-links li { width: 100%; text-align: center; }
      .nav-links a {
        display: block;
        padding: 14px 0;
        font-size: 11px !important;
        letter-spacing: 3px !important;
        border-bottom: 1px solid rgba(201,168,76,0.08);
      }
    }
  `;
  document.head.appendChild(style);
  nav.appendChild(burger);

  // Toggle on click
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
})();


/* ─────────────────────────────────────────────
   3. SCROLL SPY — Active Nav Link
   Highlights the nav link for whichever section
   is currently in the viewport.
───────────────────────────────────────────── */
(function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!navLinks.length) return;

  // Inject active style
  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active { color: #C9A84C !important; }
    .nav-links a.active::after {
      content: '';
      display: block;
      height: 1px;
      background: #C9A84C;
      margin-top: 2px;
      border-radius: 1px;
      animation: growLine 0.3s ease forwards;
    }
    @keyframes growLine {
      from { transform: scaleX(0); }
      to   { transform: scaleX(1); }
    }
  `;
  document.head.appendChild(style);

  const sectionIds = Array.from(navLinks).map(a => a.getAttribute('href').slice(1));

  const setActive = () => {
    let current = '';
    const scrollMid = window.scrollY + window.innerHeight * 0.4;

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollMid) current = id;
    });

    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive(); // run once on load
})();


/* ─────────────────────────────────────────────
   4. HERO STAT COUNTERS
   Counts up the numbers in .stat-num elements
   once the hero section loads.
───────────────────────────────────────────── */
(function initStatCounters() {
  const stats = [
    // { selector, prefix, suffix, target, decimals }
    { el: null, raw: '₦100B', prefix: '₦', suffix: 'B',  target: 100,  decimals: 0 },
    { el: null, raw: '7',     prefix: '', suffix: '',     target: 7,    decimals: 0 },
    { el: null, raw: '8km',   prefix: '', suffix: 'km',   target: 8,    decimals: 0 },
    { el: null, raw: '500K+', prefix: '', suffix: 'K+',   target: 500,  decimals: 0 },
  ];

  const statEls = document.querySelectorAll('.stat-num');
  statEls.forEach((el, i) => {
    if (stats[i]) stats[i].el = el;
  });

  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const DURATION = 2000; // ms

  function animateCounter(stat) {
    if (!stat.el) return;
    const start     = performance.now();
    const { prefix, suffix, target, decimals, el } = stat;

    const tick = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / DURATION, 1);
      const value    = easeOut(progress) * target;
      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + target + suffix; // ensure exact final value
    };

    requestAnimationFrame(tick);
  }

  // Trigger when hero stats enter the viewport
  const heroStats = document.querySelector('.hero-stats');
  if (!heroStats) return;

  let fired = false;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !fired) {
      fired = true;
      // Stagger each counter slightly
      stats.forEach((stat, i) => {
        setTimeout(() => animateCounter(stat), i * 150);
      });
      obs.disconnect();
    }
  }, { threshold: 0.5 });

  obs.observe(heroStats);
})();


/* ─────────────────────────────────────────────
   5. FEASIBILITY SCORE BAR ANIMATION
   `.score-fill` bars start at 0 and animate to
   their target width when scrolled into view.
───────────────────────────────────────────── */
(function initScoreBars() {
  const cards = document.querySelectorAll('.feasibility-card');
  if (!cards.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const fill = entry.target.querySelector('.score-fill');
      if (!fill) return;

      const targetWidth = fill.style.width; // e.g. "91%"
      fill.style.width      = '0%';
      fill.style.transition = 'width 1.4s cubic-bezier(0.22, 1, 0.36, 1)';

      // Small delay so the 0% renders first
      setTimeout(() => { fill.style.width = targetWidth; }, 80);

      obs.unobserve(entry.target);
    });
  }, { threshold: 0.3 });

  cards.forEach(card => obs.observe(card));
})();


/* ─────────────────────────────────────────────
   6. FADE-IN ON SCROLL (improved)
   Watches all .fade-in elements and adds the
   .visible class when they enter the viewport.
───────────────────────────────────────────── */
(function initFadeIns() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => obs.observe(el));
})();


/* ─────────────────────────────────────────────
   7. BAR CHART ANIMATION
   Animates revenue and revenue-mix chart bars
   from 0 to their target width on scroll.
───────────────────────────────────────────── */
(function initBarCharts() {
  const chartBoxes = document.querySelectorAll('.chart-box');
  if (!chartBoxes.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.querySelectorAll('.bar-fill').forEach((bar, i) => {
        const targetWidth = bar.style.width;
        bar.style.width       = '0%';
        bar.style.transition  = `width 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${i * 120}ms`;
        setTimeout(() => { bar.style.width = targetWidth; }, 60);
      });

      obs.unobserve(entry.target);
    });
  }, { threshold: 0.25 });

  chartBoxes.forEach(box => obs.observe(box));
})();


/* ─────────────────────────────────────────────
   8. SMOOTH ANCHOR SCROLL WITH NAV OFFSET
   Prevents the fixed nav from covering section
   headings when a nav link is clicked.
───────────────────────────────────────────── */
(function initSmoothScroll() {
  const NAV_HEIGHT = 70; // px — adjust if nav height changes

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target   = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();