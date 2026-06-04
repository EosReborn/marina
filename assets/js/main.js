'use strict';

function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), e.target.dataset.delay || 0);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      document.body.style.overflow = open ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', open);
    });
    mobileMenu.querySelectorAll('.nav__mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });
}

function initTabs() {
  const tabs = document.querySelectorAll('.popular__tab');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.cat;
      document.querySelectorAll('.dish-card').forEach(card => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

function initMenu() {
  const search = document.querySelector('#menuSearch');
  const cats   = document.querySelectorAll('.menu-cat');
  const items  = document.querySelectorAll('.menu-item');
  if (!search && !cats.length) return;
  function filterItems() {
    const q   = search ? search.value.toLowerCase() : '';
    const cat = document.querySelector('.menu-cat.active')?.dataset.cat || 'all';
    items.forEach(item => {
      const name = item.dataset.name?.toLowerCase() || '';
      const ic   = item.dataset.cat || '';
      const matchQ = !q || name.includes(q);
      const matchC = cat === 'all' || ic === cat;
      item.style.display = matchQ && matchC ? '' : 'none';
    });
    document.querySelectorAll('.menu-section').forEach(sec => {
      const visible = [...sec.querySelectorAll('.menu-item')].some(i => i.style.display !== 'none');
      sec.style.display = visible ? '' : 'none';
    });
  }
  if (search) search.addEventListener('input', filterItems);
  cats.forEach(btn => {
    btn.addEventListener('click', () => {
      cats.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterItems();
    });
  });
}

function initGallery() {
  const items = document.querySelectorAll('.masonry-item');
  if (!items.length) return;
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      items.forEach(item => {
        item.style.display = cat === 'all' || item.dataset.cat === cat ? '' : 'none';
      });
    });
  });
  const lightbox = document.querySelector('.lightbox');
  const lbImg    = document.querySelector('.lightbox__img');
  const lbClose  = document.querySelector('.lightbox__close');
  const lbPrev   = document.querySelector('.lightbox__prev');
  const lbNext   = document.querySelector('.lightbox__next');
  if (!lightbox) return;
  let currentIdx = 0;
  const visibleItems = () => [...items].filter(i => i.style.display !== 'none');
  function openLightbox(idx) {
    const vis = visibleItems();
    currentIdx = ((idx % vis.length) + vis.length) % vis.length;
    lbImg.src = vis[currentIdx].querySelector('img').src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  items.forEach(item => {
    item.addEventListener('click', () => openLightbox(visibleItems().indexOf(item)));
  });
  lbClose?.addEventListener('click', () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; });
  lbPrev?.addEventListener('click', () => openLightbox(currentIdx - 1));
  lbNext?.addEventListener('click', () => openLightbox(currentIdx + 1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) { lightbox.classList.remove('open'); document.body.style.overflow = ''; } });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
    if (e.key === 'ArrowLeft') openLightbox(currentIdx - 1);
    if (e.key === 'ArrowRight') openLightbox(currentIdx + 1);
  });
}

function initBooking() {
  const form = document.querySelector('#bookingForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const success = document.querySelector('.form-success');
    form.style.display = 'none';
    if (success) success.style.display = 'block';
  });
  const dateInput = form.querySelector('input[type="date"]');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
}

function initStaggerDelay() {
  document.querySelectorAll('.dish-card, .menu-item, .value-card, .team-card').forEach((el, i) => {
    el.dataset.delay = i * 80;
  });
}

function animateCounters() {
  document.querySelectorAll('.why__stat-num').forEach(el => {
    const target = parseFloat(el.textContent.replace(/[^0-9.]/g, ''));
    const suffix = el.textContent.replace(/[0-9.]/g, '');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        io.unobserve(el);
        const duration = 1500;
        const startTime = performance.now();
        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = (target % 1 === 0 ? Math.round(eased * target) : (eased * target).toFixed(1)) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    io.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initTabs();
  initMenu();
  initGallery();
  initBooking();
  initStaggerDelay();
  animateCounters();
});
