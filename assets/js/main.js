/* ============================================================
   MARINA PIZZERIA & STEAKHOUSE – main.js v2
   Fixes: hamburger animation, mobile nav, cookie banner,
          smooth reveal, counter, gallery, form
   ============================================================ */
'use strict';

/* ── Reveal on scroll ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const delay = parseInt(e.target.dataset.delay) || 0;
      setTimeout(() => e.target.classList.add('visible'), delay);
      io.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

/* ── Navigation ── */
function initNav() {
  const nav       = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobile    = document.querySelector('.nav__mobile');
  if (!nav) return;

  /* Scroll glass effect */
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Hamburger toggle */
  if (hamburger && mobile) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobile.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    /* Close on link click */
    mobile.querySelectorAll('.nav__mobile-link').forEach(link => {
      link.addEventListener('click', closeMobile);
    });
    /* Close on backdrop click (outside menu) */
    document.addEventListener('click', e => {
      if (mobile.classList.contains('open') && !mobile.contains(e.target) && !hamburger.contains(e.target)) {
        closeMobile();
      }
    });
  }

  function closeMobile() {
    mobile?.classList.remove('open');
    hamburger?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobile();
  });

  /* Active link */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });
}

/* ── Popular tabs ── */
function initTabs() {
  const tabs = document.querySelectorAll('.popular__tab');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.removeAttribute('aria-selected'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const cat = tab.dataset.cat;
      document.querySelectorAll('.dish-card').forEach(card => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.style.display = show ? '' : 'none';
        if (show) { card.style.animation = 'none'; requestAnimationFrame(() => { card.style.animation = ''; }); }
      });
    });
  });
}

/* ── Menu filter + search ── */
function initMenu() {
  const search = document.querySelector('#menuSearch');
  const cats   = document.querySelectorAll('.menu-cat');
  const items  = document.querySelectorAll('.menu-item');
  if (!items.length) return;

  function filter() {
    const q   = search ? search.value.toLowerCase().trim() : '';
    const cat = document.querySelector('.menu-cat.active')?.dataset.cat || 'all';
    items.forEach(item => {
      const nameOk = !q || (item.dataset.name || '').toLowerCase().includes(q);
      const catOk  = cat === 'all' || item.dataset.cat === cat;
      item.style.display = nameOk && catOk ? '' : 'none';
    });
    document.querySelectorAll('.menu-section').forEach(sec => {
      const anyVisible = [...sec.querySelectorAll('.menu-item')].some(i => i.style.display !== 'none');
      sec.style.display = anyVisible ? '' : 'none';
    });
  }

  if (search) search.addEventListener('input', filter);
  cats.forEach(btn => {
    btn.addEventListener('click', () => {
      cats.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filter();
    });
  });
}

/* ── Gallery lightbox ── */
function initGallery() {
  const items     = document.querySelectorAll('.masonry-item');
  const lightbox  = document.querySelector('.lightbox');
  const lbImg     = document.querySelector('.lightbox__img');
  const lbClose   = document.querySelector('.lightbox__close');
  const lbPrev    = document.querySelector('.lightbox__prev');
  const lbNext    = document.querySelector('.lightbox__next');
  if (!items.length) return;

  /* Filter */
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      items.forEach(item => { item.style.display = cat === 'all' || item.dataset.cat === cat ? '' : 'none'; });
    });
  });

  if (!lightbox) return;
  let idx = 0;
  const visible = () => [...items].filter(i => i.style.display !== 'none');

  function open(i) {
    const vis = visible();
    if (!vis.length) return;
    idx = ((i % vis.length) + vis.length) % vis.length;
    lbImg.src = vis[idx].querySelector('img').src;
    lbImg.alt = vis[idx].querySelector('img').alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }
  function close() { lightbox.classList.remove('open'); document.body.style.overflow = ''; }

  items.forEach(item => item.addEventListener('click', () => open(visible().indexOf(item))));
  lbClose?.addEventListener('click', close);
  lbPrev?.addEventListener('click', () => open(idx - 1));
  lbNext?.addEventListener('click', () => open(idx + 1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   open(idx - 1);
    if (e.key === 'ArrowRight')  open(idx + 1);
  });
}

/* ── Booking form ── */
function initBooking() {
  const form = document.querySelector('#bookingForm');
  if (!form) return;

  /* Min date = today */
  const dateEl = form.querySelector('input[type="date"]');
  if (dateEl) dateEl.min = new Date().toISOString().split('T')[0];

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    form.style.display = 'none';
    const ok = document.querySelector('.form-success');
    if (ok) ok.style.display = 'block';
  });
}

/* ── Counter animation ── */
function initCounters() {
  document.querySelectorAll('.why__stat-num').forEach(el => {
    const raw    = el.textContent.trim();
    const target = parseFloat(raw.replace(/[^0-9.]/g, ''));
    const suffix = raw.replace(/[0-9.]/g, '');
    if (isNaN(target)) return;

    const io = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const dur = 1400;
      const t0  = performance.now();
      function step(now) {
        const p = Math.min((now - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = (target % 1 === 0 ? Math.round(e * target) : (e * target).toFixed(1)) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
  });
}

/* ── Stagger delays on card grids ── */
function initStagger() {
  document.querySelectorAll('.popular__grid, .about-values__grid, .about-team__grid, .menu-grid').forEach(grid => {
    [...grid.children].forEach((el, i) => { el.dataset.delay = i * 75; });
  });
}

/* ══════════════════════════════════════════════
   COOKIE BANNER
══════════════════════════════════════════════ */
function initCookie() {
  const KEY    = 'marina_cookie_consent';
  const banner = document.querySelector('.cookie-banner');
  if (!banner) return;

  /* Already decided */
  if (localStorage.getItem(KEY)) return;

  /* Show after short delay */
  setTimeout(() => banner.classList.add('visible'), 1200);

  banner.querySelector('.cookie-btn-accept')?.addEventListener('click', () => {
    localStorage.setItem(KEY, 'accepted');
    hideBanner();
  });
  banner.querySelector('.cookie-btn-decline')?.addEventListener('click', () => {
    localStorage.setItem(KEY, 'declined');
    hideBanner();
  });

  function hideBanner() {
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 500);
  }
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initTabs();
  initMenu();
  initGallery();
  initBooking();
  initCounters();
  initStagger();
  initCookie();
});
