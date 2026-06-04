/* ============================================================
   MARINA PIZZERIA & STEAKHOUSE – main.js v3
   + i18n: Magyar / English / Deutsch
   + Facebook link
   + No booking form (phone only)
   ============================================================ */
'use strict';

/* ══════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════ */
const LANG = {
  hu: {
    // Nav
    nav_home:     'Főoldal',
    nav_menu:     'Étlap',
    nav_about:    'Rólunk',
    nav_gallery:  'Galéria',
    nav_contact:  'Kapcsolat',
    nav_book:     'Foglalás',
    // Hero
    hero_eyebrow: 'Prémium étterem – 2015 óta',
    hero_title:   'Az ízek <em>mesterkeze</em> asztalodnál',
    hero_sub:     'Autentikus olasz pizzák, tökéletes steakek és szenvedélyes konyhaművészet — ahol minden fogás egy élmény.',
    hero_btn1:    '📞 Asztalt foglalok',
    hero_btn2:    'Étlap megtekintése →',
    // Why
    why_label:    'Miért minket válasszon?',
    why_title:    'Ahol a minőség nem kompromisszum',
    why_text:     'A Marina Pizzeria & Steakhouse-ban hiszünk abban, hogy egy étkezés több, mint táplálkozás. Válogatott alapanyagaink, képzett séfjeink és meghitt légkörünk garantálják, hogy minden látogatás különleges legyen.',
    why_f1_t:     'Friss alapanyagok',
    why_f1_d:     'Naponta érkező helyi és importált olasz hozzávalók.',
    why_f2_t:     'Fatüzeléses kemence',
    why_f2_d:     'Tradicionális nápolyi pizza, 480°C-on sütve.',
    why_f3_t:     'Prémium steakek',
    why_f3_d:     'Válogatott érlelt marhahús, gondosan elkészítve.',
    why_f4_t:     'Borkínálat',
    why_f4_d:     '180 tételes olasz és hazai borlap sommelier-től.',
    stat1:        'Év tapasztalat',
    stat2:        'Menüpont',
    stat3:        'Értékelés',
    // Popular
    pop_label:    'Vendégeink kedvencei',
    pop_title:    'Legnépszerűbb fogásaink',
    pop_all:      'Összes',
    pop_pizza:    'Pizza',
    pop_steak:    'Steak',
    pop_pasta:    'Tészta',
    pop_more:     'Teljes étlap megtekintése →',
    // Chef
    chef_label:   'Séf ajánlata',
    chef_title:   'A hét különlegességei',
    chef_quote:   '"Minden fogásomba beleteszem a szívemet. A legjobb hozzávaló az a szenvedély, amit a tányérra teszünk."',
    chef_btn:     'Asztalt foglalok',
    // Reviews
    rev_label:    'Vendégeink mondják',
    rev_title:    'Amit rólunk gondolnak',
    // Gallery
    gal_label:    'Pillanatok',
    gal_title:    'Hangulat & Ételek',
    gal_btn:      'Galéria megtekintése →',
    // Booking (phone only)
    book_label:   'Foglaljon most',
    book_title:   'Asztalfoglalás',
    book_sub:     'Foglaljon asztalt telefonon vagy személyesen egy feledhetetlen estére.',
    book_phone_l: 'Telefonon',
    book_phone_v: '+36 20 123 456',
    book_visit_l: 'Személyesen',
    book_visit_v: '1051 Budapest, Október 6. utca 14.',
    book_hours_l: 'Nyitvatartás',
    book_note:    'Különleges alkalom, üzleti ebéd vagy romantikus vacsora — szívesen fogadjuk hívását!',
    book_btn:     '📞 Hívjon most',
    // Footer
    foot_about:   'Prémium olasz konyha és steakhouse élmény Budapest szívében. Friss alapanyagok, szenvedélyes séfek, feledhetetlen ízek.',
    foot_pages:   'Oldalak',
    foot_hours:   'Nyitvatartás',
    foot_contact: 'Elérhetőség',
    foot_copy:    '© 2025 Marina Pizzeria & Steakhouse. Minden jog fenntartva.',
    // Hours
    h_week:       'H–Cs: 11:00 – 22:00',
    h_fri:        'P–Szo: 11:00 – 23:30',
    h_sun:        'Vas: 12:00 – 22:00',
    // Cookie
    ck_title:     'Sütiket (cookie-kat) használunk',
    ck_desc:      'Weboldalunk alapvető működéshez szükséges és analitikai sütiket használ. Az „Elfogadom" gombra kattintva hozzájárul a sütik használatához.',
    ck_accept:    '✓ Elfogadom',
    ck_decline:   'Elutasítom',
    // Contact page
    con_title:    'Vegyük fel a kapcsolatot',
    con_sub:      'Bármilyen kérdése van, csapatunk készséggel áll rendelkezésére.',
    con_phone:    'Telefon',
    con_email:    'E-mail',
    con_addr:     'Cím',
    con_social:   'Kövessen minket',
    con_map:      'Megközelítés',
    con_msg:      'Írjon nekünk',
    con_send:     '✉️ Üzenet küldése',
    // About
    ab_story_l:   'Hogyan kezdődött',
    ab_story_t:   'Egy álomból valóság lett',
    ab_val_l:     'Ami számunkra fontos',
    ab_val_t:     'Értékeink és küldetésünk',
    ab_team_l:    'Csapatunk',
    ab_team_t:    'Az emberek mögött',
    // Gallery page
    gp_all:       'Összes',
    gp_food:      'Ételek',
    gp_rest:      'Étterem',
    gp_mood:      'Hangulat',
    // Menu page labels
    mp_search:    'Keresés az étlapon...',
    mp_all:       'Összes',
  },

  en: {
    nav_home:     'Home',
    nav_menu:     'Menu',
    nav_about:    'About',
    nav_gallery:  'Gallery',
    nav_contact:  'Contact',
    nav_book:     'Reserve',
    hero_eyebrow: 'Premium Restaurant – Since 2015',
    hero_title:   'The <em>master touch</em> of flavours at your table',
    hero_sub:     'Authentic Italian pizzas, perfect steaks and passionate culinary art — where every dish is an experience.',
    hero_btn1:    '📞 Reserve a Table',
    hero_btn2:    'View Menu →',
    why_label:    'Why choose us?',
    why_title:    'Where quality is never a compromise',
    why_text:     'At Marina Pizzeria & Steakhouse we believe dining is more than eating. Our carefully sourced ingredients, skilled chefs and intimate atmosphere guarantee every visit is special.',
    why_f1_t:     'Fresh Ingredients',
    why_f1_d:     'Local and imported Italian produce arriving daily.',
    why_f2_t:     'Wood-fired Oven',
    why_f2_d:     'Traditional Neapolitan pizza, baked at 480°C.',
    why_f3_t:     'Premium Steaks',
    why_f3_d:     'Carefully selected aged beef, prepared with passion.',
    why_f4_t:     'Wine Selection',
    why_f4_d:     '180-label Italian & Hungarian wine list by our sommelier.',
    stat1:        'Years Experience',
    stat2:        'Menu Items',
    stat3:        'Rating',
    pop_label:    'Guest Favourites',
    pop_title:    'Most Popular Dishes',
    pop_all:      'All',
    pop_pizza:    'Pizza',
    pop_steak:    'Steak',
    pop_pasta:    'Pasta',
    pop_more:     'View Full Menu →',
    chef_label:   "Chef's Recommendation",
    chef_title:   "This Week's Specials",
    chef_quote:   '"I put my heart into every dish. The best ingredient is the passion we place on the plate."',
    chef_btn:     'Reserve a Table',
    rev_label:    'Our Guests Say',
    rev_title:    'What They Think of Us',
    gal_label:    'Moments',
    gal_title:    'Atmosphere & Food',
    gal_btn:      'View Gallery →',
    book_label:   'Book Now',
    book_title:   'Table Reservation',
    book_sub:     'Reserve your table by phone or in person for an unforgettable evening.',
    book_phone_l: 'By Phone',
    book_phone_v: '+36 20 123 456',
    book_visit_l: 'In Person',
    book_visit_v: '14 Október 6. St, Budapest 1051',
    book_hours_l: 'Opening Hours',
    book_note:    'Special occasion, business lunch or romantic dinner — we look forward to your call!',
    book_btn:     '📞 Call Now',
    foot_about:   'Premium Italian cuisine and steakhouse experience in the heart of Budapest. Fresh ingredients, passionate chefs, unforgettable flavours.',
    foot_pages:   'Pages',
    foot_hours:   'Opening Hours',
    foot_contact: 'Contact',
    foot_copy:    '© 2025 Marina Pizzeria & Steakhouse. All rights reserved.',
    h_week:       'Mon–Thu: 11:00 – 22:00',
    h_fri:        'Fri–Sat: 11:00 – 23:30',
    h_sun:        'Sun: 12:00 – 22:00',
    ck_title:     'We use cookies',
    ck_desc:      'Our website uses essential and analytical cookies. By clicking "Accept" you consent to the use of cookies.',
    ck_accept:    '✓ Accept',
    ck_decline:   'Decline',
    con_title:    "Let's get in touch",
    con_sub:      'Any questions? Our team is happy to help.',
    con_phone:    'Phone',
    con_email:    'Email',
    con_addr:     'Address',
    con_social:   'Follow Us',
    con_map:      'How to Find Us',
    con_msg:      'Send a Message',
    con_send:     '✉️ Send Message',
    ab_story_l:   'How it all began',
    ab_story_t:   'From a Dream to Reality',
    ab_val_l:     'What matters to us',
    ab_val_t:     'Our Values & Mission',
    ab_team_l:    'Our Team',
    ab_team_t:    'The People Behind',
    gp_all:       'All',
    gp_food:      'Food',
    gp_rest:      'Restaurant',
    gp_mood:      'Atmosphere',
    mp_search:    'Search the menu...',
    mp_all:       'All',
  },

  de: {
    nav_home:     'Startseite',
    nav_menu:     'Speisekarte',
    nav_about:    'Über uns',
    nav_gallery:  'Galerie',
    nav_contact:  'Kontakt',
    nav_book:     'Reservierung',
    hero_eyebrow: 'Premium Restaurant – Seit 2015',
    hero_title:   'Die <em>Meisterhand</em> der Aromen an Ihrem Tisch',
    hero_sub:     'Authentische italienische Pizzen, perfekte Steaks und leidenschaftliche Kochkunst — wo jedes Gericht ein Erlebnis ist.',
    hero_btn1:    '📞 Tisch reservieren',
    hero_btn2:    'Speisekarte ansehen →',
    why_label:    'Warum uns wählen?',
    why_title:    'Wo Qualität kein Kompromiss ist',
    why_text:     'Im Marina Pizzeria & Steakhouse glauben wir, dass ein Essen mehr ist als Nahrungsaufnahme. Unsere sorgfältig ausgewählten Zutaten, qualifizierten Köche und gemütliche Atmosphäre garantieren, dass jeder Besuch etwas Besonderes ist.',
    why_f1_t:     'Frische Zutaten',
    why_f1_d:     'Täglich gelieferte lokale und importierte italienische Produkte.',
    why_f2_t:     'Holzfeuerofen',
    why_f2_d:     'Traditionelle neapolitanische Pizza, bei 480°C gebacken.',
    why_f3_t:     'Premium-Steaks',
    why_f3_d:     'Sorgfältig ausgewähltes gereiftes Rindfleisch, liebevoll zubereitet.',
    why_f4_t:     'Weinauswahl',
    why_f4_d:     '180 italienische & ungarische Weine, ausgewählt von unserem Sommelier.',
    stat1:        'Jahre Erfahrung',
    stat2:        'Menüpunkte',
    stat3:        'Bewertung',
    pop_label:    'Gästefavoriten',
    pop_title:    'Beliebteste Gerichte',
    pop_all:      'Alle',
    pop_pizza:    'Pizza',
    pop_steak:    'Steak',
    pop_pasta:    'Pasta',
    pop_more:     'Vollständige Speisekarte →',
    chef_label:   'Empfehlung des Chefs',
    chef_title:   'Wochenspezialitäten',
    chef_quote:   '"In jedes Gericht stecke ich mein Herz. Die beste Zutat ist die Leidenschaft, die wir auf den Teller legen."',
    chef_btn:     'Tisch reservieren',
    rev_label:    'Unsere Gäste sagen',
    rev_title:    'Was sie über uns denken',
    gal_label:    'Momente',
    gal_title:    'Atmosphäre & Speisen',
    gal_btn:      'Galerie ansehen →',
    book_label:   'Jetzt buchen',
    book_title:   'Tischreservierung',
    book_sub:     'Reservieren Sie Ihren Tisch telefonisch oder persönlich für einen unvergesslichen Abend.',
    book_phone_l: 'Telefonisch',
    book_phone_v: '+36 20 123 456',
    book_visit_l: 'Persönlich',
    book_visit_v: 'Budapest 1051, Október 6. Str. 14.',
    book_hours_l: 'Öffnungszeiten',
    book_note:    'Besonderer Anlass, Geschäftsessen oder romantisches Dinner — wir freuen uns auf Ihren Anruf!',
    book_btn:     '📞 Jetzt anrufen',
    foot_about:   'Premium italienische Küche und Steakhouse-Erlebnis im Herzen von Budapest. Frische Zutaten, leidenschaftliche Köche, unvergessliche Aromen.',
    foot_pages:   'Seiten',
    foot_hours:   'Öffnungszeiten',
    foot_contact: 'Kontakt',
    foot_copy:    '© 2025 Marina Pizzeria & Steakhouse. Alle Rechte vorbehalten.',
    h_week:       'Mo–Do: 11:00 – 22:00',
    h_fri:        'Fr–Sa: 11:00 – 23:30',
    h_sun:        'So: 12:00 – 22:00',
    ck_title:     'Wir verwenden Cookies',
    ck_desc:      'Unsere Website verwendet notwendige und analytische Cookies. Mit dem Klick auf "Akzeptieren" stimmen Sie der Verwendung zu.',
    ck_accept:    '✓ Akzeptieren',
    ck_decline:   'Ablehnen',
    con_title:    'Nehmen Sie Kontakt auf',
    con_sub:      'Bei Fragen steht Ihnen unser Team gerne zur Verfügung.',
    con_phone:    'Telefon',
    con_email:    'E-Mail',
    con_addr:     'Adresse',
    con_social:   'Folgen Sie uns',
    con_map:      'Anfahrt',
    con_msg:      'Nachricht senden',
    con_send:     '✉️ Nachricht senden',
    ab_story_l:   'Wie alles begann',
    ab_story_t:   'Aus einem Traum wurde Wirklichkeit',
    ab_val_l:     'Was uns wichtig ist',
    ab_val_t:     'Unsere Werte & Mission',
    ab_team_l:    'Unser Team',
    ab_team_t:    'Die Menschen dahinter',
    gp_all:       'Alle',
    gp_food:      'Speisen',
    gp_rest:      'Restaurant',
    gp_mood:      'Atmosphäre',
    mp_search:    'Speisekarte durchsuchen...',
    mp_all:       'Alle',
  }
};

/* ══════════════════════════════════════════════
   LANGUAGE SWITCHER
══════════════════════════════════════════════ */
let currentLang = localStorage.getItem('marina_lang') || 'hu';

function applyLang(lang) {
  if (!LANG[lang]) return;
  currentLang = lang;
  localStorage.setItem('marina_lang', lang);
  document.documentElement.lang = lang;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = LANG[lang][key];
    if (val === undefined) return;
    if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  // Update lang switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  applyLang(currentLang);
}

/* ══════════════════════════════════════════════
   REVEAL ON SCROLL
══════════════════════════════════════════════ */
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const delay = parseInt(e.target.dataset.delay) || 0;
      setTimeout(() => e.target.classList.add('visible'), delay);
      io.unobserve(e.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  els.forEach(el => io.observe(el));
}

/* ══════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════ */
function initNav() {
  const nav       = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobile    = document.querySelector('.nav__mobile');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeMobile() {
    mobile?.classList.remove('open');
    hamburger?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger && mobile) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobile.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobile.querySelectorAll('.nav__mobile-link').forEach(l => l.addEventListener('click', closeMobile));
    document.addEventListener('click', e => {
      if (mobile.classList.contains('open') && !mobile.contains(e.target) && !hamburger.contains(e.target)) closeMobile();
    });
  }

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobile(); });

  // Active link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(l => {
    if (l.getAttribute('href') === page) l.classList.add('active');
  });
}

/* ══════════════════════════════════════════════
   POPULAR TABS
══════════════════════════════════════════════ */
function initTabs() {
  const tabs = document.querySelectorAll('.popular__tab');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.removeAttribute('aria-selected'); });
      tab.classList.add('active'); tab.setAttribute('aria-selected', 'true');
      const cat = tab.dataset.cat;
      document.querySelectorAll('.dish-card').forEach(card => {
        card.style.display = cat === 'all' || card.dataset.cat === cat ? '' : 'none';
      });
    });
  });
}

/* ══════════════════════════════════════════════
   MENU FILTER
══════════════════════════════════════════════ */
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
      sec.style.display = [...sec.querySelectorAll('.menu-item')].some(i => i.style.display !== 'none') ? '' : 'none';
    });
  }
  if (search) search.addEventListener('input', filter);
  cats.forEach(btn => {
    btn.addEventListener('click', () => {
      cats.forEach(b => b.classList.remove('active'));
      btn.classList.add('active'); filter();
    });
  });
}

/* ══════════════════════════════════════════════
   GALLERY LIGHTBOX
══════════════════════════════════════════════ */
function initGallery() {
  const items    = document.querySelectorAll('.masonry-item');
  const lightbox = document.querySelector('.lightbox');
  const lbImg    = document.querySelector('.lightbox__img');
  const lbClose  = document.querySelector('.lightbox__close');
  const lbPrev   = document.querySelector('.lightbox__prev');
  const lbNext   = document.querySelector('.lightbox__next');
  if (!items.length) return;

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
    const vis = visible(); if (!vis.length) return;
    idx = ((i % vis.length) + vis.length) % vis.length;
    lbImg.src = vis[idx].querySelector('img').src;
    lbImg.alt = vis[idx].querySelector('img').alt;
    lightbox.classList.add('open'); document.body.style.overflow = 'hidden';
    lbClose?.focus();
  }
  function close() { lightbox.classList.remove('open'); document.body.style.overflow = ''; }

  items.forEach(item => item.addEventListener('click', () => open(visible().indexOf(item))));
  lbClose?.addEventListener('click', close);
  lbPrev?.addEventListener('click', () => open(idx - 1));
  lbNext?.addEventListener('click', () => open(idx + 1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft')  open(idx - 1);
    if (e.key === 'ArrowRight') open(idx + 1);
  });
}

/* ══════════════════════════════════════════════
   COUNTER ANIMATION
══════════════════════════════════════════════ */
function initCounters() {
  document.querySelectorAll('.why__stat-num').forEach(el => {
    const raw    = el.textContent.trim();
    const target = parseFloat(raw.replace(/[^0-9.]/g, ''));
    const suffix = raw.replace(/[0-9.]/g, '');
    if (isNaN(target)) return;
    const io = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const dur = 1400, t0 = performance.now();
      function step(now) {
        const p = Math.min((now - t0) / dur, 1), e2 = 1 - Math.pow(1 - p, 3);
        el.textContent = (target % 1 === 0 ? Math.round(e2 * target) : (e2 * target).toFixed(1)) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
  });
}

/* ══════════════════════════════════════════════
   STAGGER DELAYS
══════════════════════════════════════════════ */
function initStagger() {
  document.querySelectorAll('.popular__grid, .about-values__grid, .about-team__grid').forEach(grid => {
    [...grid.children].forEach((el, i) => { el.dataset.delay = i * 75; });
  });
}

/* ══════════════════════════════════════════════
   COOKIE BANNER
══════════════════════════════════════════════ */
function initCookie() {
  const KEY    = 'marina_cookie_consent';
  const banner = document.querySelector('.cookie-banner');
  if (!banner || localStorage.getItem(KEY)) return;
  setTimeout(() => banner.classList.add('visible'), 1400);
  banner.querySelector('.cookie-btn-accept')?.addEventListener('click', () => {
    localStorage.setItem(KEY, 'accepted'); hide();
  });
  banner.querySelector('.cookie-btn-decline')?.addEventListener('click', () => {
    localStorage.setItem(KEY, 'declined'); hide();
  });
  function hide() { banner.classList.remove('visible'); setTimeout(() => banner.remove(), 500); }
}

/* ══════════════════════════════════════════════
   CONTACT FORM (send message)
══════════════════════════════════════════════ */
function initContactForm() {
  const form = document.querySelector('#contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    form.innerHTML = '<div style="text-align:center;padding:32px;"><div style="font-size:2.5rem;margin-bottom:12px;">✅</div><div style="font-family:var(--font-display);font-size:1.5rem;color:var(--white);margin-bottom:8px;">Köszönjük!</div><p style="color:var(--white-dim);">Hamarosan visszajelzünk.</p></div>';
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
  initNav();
  initReveal();
  initTabs();
  initMenu();
  initGallery();
  initCounters();
  initStagger();
  initCookie();
  initContactForm();
});
