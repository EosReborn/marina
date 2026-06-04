# Marina Pizzeria & Steakhouse – Weboldal

Prémium, többoldalas éttermi weboldal. Modern, reszponzív, GitHub Pages kompatibilis.

## Fájlstruktúra

```
/
├── index.html          ← Főoldal
├── etlap.html          ← Étlap (keresővel, szűrővel)
├── rolunk.html         ← Rólunk (történet, csapat, értékek)
├── galeria.html        ← Galéria (masonry, lightbox)
├── foglalas.html       ← Asztfoglalás (űrlap)
├── kapcsolat.html      ← Kapcsolat (térkép, elérhetőség)
│
├── assets/
│   ├── css/
│   │   └── style.css   ← Teljes CSS (design system, összes oldal)
│   └── js/
│       └── main.js     ← JavaScript (reveal, nav, filter, lightbox, form)
│
└── README.md
```

## Funkciók

- **Reszponzív**: Mobil-first, 480px / 768px / 1024px töréspontokkal
- **Scroll reveal animációk**: IntersectionObserver alapú
- **Smooth scrolling**: Natív CSS
- **Nav**: Sticky, scroll-on glassmorphism, hamburger mobil menü
- **Étlap**: Kategória szűrő + valós idejű keresés
- **Galéria**: Masonry layout + lightbox (keyboard navigation)
- **Foglalás**: Validált form, sikeres visszaigazolás
- **Statisztika számlálók**: Animált count-up
- **Reviews carousel**: Auto-scroll, hover pause

## Telepítés (GitHub Pages)

1. Hozzon létre egy új GitHub repository-t
2. Töltse fel az összes fájlt
3. Settings → Pages → Source: `main` branch, `/ (root)`
4. Pár perc után elérhető: `https://[username].github.io/[repo-name]/`

## Testreszabás

### Elérhetőségek frissítése
Keresse meg és cserélje le:
- `+36 20 123 456` → valódi telefonszám
- `info@marinapizzeria.hu` → valódi email
- `1051 Budapest, Október 6. utca 14.` → valódi cím

### Képek cseréje
Az Unsplash képek helyett adjon meg saját fotókat az `assets/images/` mappában
és frissítse a `src` attribútumokat.

### Színek
A `style.css` elején lévő `:root` blokkban módosíthatja:
- `--gold`: arany kiemelő szín
- `--terra`: terrakotta részletek
- `--black` / `--graphite`: háttérszínek

## Technológiák

- HTML5 (szemantikus)
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+, IntersectionObserver)
- Google Fonts (Cormorant Garamond, DM Sans)
- Unsplash (placeholder képek)

## SEO

- Szemantikus HTML struktúra
- Meta description minden oldalon
- Alt szövegek minden képnél
- Strukturált heading hierarchia (h1 → h2 → h3)
- ARIA labelek akadálymentesítéshez

---
© 2025 Marina Pizzeria & Steakhouse
