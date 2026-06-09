import { useState, useEffect, useCallback } from "react";

// ─── Image data ────────────────────────────────────────────────────────────────
const BASE_URL = "https://www.marinapizzeria.hu/img/gallery/";

const GALLERY_IMAGES = [
  { src: "galeria--2022-03-18-15-27-54.jpg",                                alt: "Árváltozás – aktuális árak a honlapon" },
  { src: "galeria-calzone-nutella-2023-06-28-21-25-47.jpg",                  alt: "Calzone nutellával" },
  { src: "galeria-marinatal-2-fore-2022-03-18-15-27-28.jpg",                 alt: "Marinatál 2 főre" },
  { src: "galeria-dinsztelt-hagymas-steak-2022-03-18-15-25-50.jpg",          alt: "Dinsztelt hagymás steak" },
  { src: "galeria-hagymasrostelyos-2022-03-18-15-24-19.jpg",                 alt: "Hagymásrostélyos" },
  { src: "galeria-polpetti-2022-03-18-15-17-18.jpg",                         alt: "Polpetti" },
  { src: "galeria-souvlaki-2022-03-18-15-18-05.jpg",                         alt: "Souvlaki" },
  { src: "galeria-kep-2021-01-13-22-01-10.jpg",                              alt: "Marina étterem" },
  { src: "galeria-novembee-2020-11-01-09-11-49.jpg",                         alt: "November – havi ajánlat" },
  { src: "galeria-oktober-2020-10-27-16-26-09.jpg",                          alt: "Október – havi ajánlat" },
  { src: "galeria-julius-2020-06-28-16-51-01.jpg",                           alt: "Július – havi ajánlat" },
  { src: "1.jpg",                                                             alt: "Marina étterem – ételfotó" },
  { src: "2.jpg",                                                             alt: "Marina étterem – ételfotó" },
  { src: "galeria-ajandekutalvany-2018-03-05-09-07-28.jpg",                  alt: "Ajándékutalvány" },
  { src: "5.jpg",                                                             alt: "Marina étterem – ételfotó" },
  { src: "6.jpg",                                                             alt: "Marina étterem – ételfotó" },
  { src: "8.jpg",                                                             alt: "Marina étterem – ételfotó" },
  { src: "13.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "19.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "33.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "35.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "36.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "37.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "38.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "40.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "41.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "43.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "45.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "46.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "49.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "50.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "51.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "52.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "53.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "54.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "56.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "58.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "60.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "61.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "64.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "65.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "66.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "67.jpg",                                                            alt: "Marina étterem – ételfotó" },
  { src: "68.jpg",                                                            alt: "Vegyes sajttál" },
  { src: "galeria-steak-chili-con-carne-2018-03-05-09-12-23.jpg",            alt: "Steak & chili con carne" },
  { src: "galeria-marina-2019-02-26-13-33-33.jpg",                           alt: "Marina étterem" },
  { src: "galeria-kep-2019-04-14-16-37-28.jpg",                              alt: "Marina étterem belső" },
  { src: "galeria-terasz-2020-06-23-18-58-16.jpg",                           alt: "Terasz" },
  { src: "galeria-tatar-2022-03-18-14-52-34.jpg",                            alt: "Tatár bifsztek" },
  { src: "galeria-bruscetta-2022-03-18-14-52-57.jpg",                        alt: "Bruschetta" },
  { src: "galeria-marina-salata-2022-03-18-14-53-57.jpg",                    alt: "Marina saláta" },
  { src: "galeria-thai-sultteszta-2022-03-18-14-54-33.jpg",                  alt: "Thai sülttészta" },
  { src: "galeria-vitamin-salata-2022-03-18-15-05-29.jpg",                   alt: "Vitamin saláta" },
  { src: "galeria-thai-sult-teszta-kiralyrakkal-2022-03-18-15-11-35.jpg",    alt: "Thai sült tészta királyrákkal" },
  { src: "galeria-vitorlasok-kedvence-2022-03-18-15-11-58.jpg",              alt: "Vitorlások kedvence" },
  { src: "galeria-cezar-salata-2022-03-18-15-12-22.jpg",                     alt: "Cézár saláta" },
  { src: "galeria-forro-malna-vaniliaval-2022-03-18-15-12-53.jpg",           alt: "Forró málna vaníliával" },
  { src: "galeria-csokis-muffin-2022-03-18-15-13-19.jpg",                    alt: "Csokis muffin" },
  { src: "galeria-gundel-palacsinta-2022-03-18-15-13-54.jpg",                alt: "Gundel palacsinta" },
  { src: "galeria-lekvaros-palacsinta-2022-03-18-15-14-19.jpg",              alt: "Lekváros palacsinta" },
  { src: "galeria-kakaos-palacsinta-2022-03-18-15-14-45.jpg",                alt: "Kakaós palacsinta" },
  { src: "galeria-nyariwok-2022-03-18-15-15-06.jpg",                         alt: "Nyári wok" },
  { src: "galeria-csirknyars-2022-03-18-15-16-10.jpg",                       alt: "Csirkenyárs" },
  { src: "galeria-rantott-serteskaraj-2022-03-18-15-16-56.jpg",              alt: "Rántott sertéskaraj" },
  { src: "galeria-csirkewok-2022-03-18-15-17-43.jpg",                        alt: "Csirkewok" },
  { src: "galeria-csirkenyars-hazi-2022-03-18-15-18-33.jpg",                 alt: "Csirkenyárs házi" },
  { src: "galeria-parizszi-szelet-2022-03-18-15-19-01.jpg",                  alt: "Párizszi szelet" },
  { src: "galeria-rantott-csirkecombfile-2022-03-18-15-19-38.jpg",           alt: "Rántott csirkecombfilé" },
  { src: "galeria-grillezett-fogasfile-2022-03-18-15-20-09.jpg",             alt: "Grillezett fogasfilé" },
  { src: "galeria-grillezett-lazacfile-2022-03-18-15-20-33.jpg",             alt: "Grillezett lazacfilé" },
  { src: "galeria-penne-carbonara-2022-03-18-15-21-00.jpg",                  alt: "Penne carbonara" },
  { src: "galeria-bolognai-spagetti-2022-03-18-15-21-26.jpg",                alt: "Bolognai spagetti" },
  { src: "galeria-currys-csirkewok-2022-03-18-15-21-51.jpg",                 alt: "Currys csirkewok" },
  { src: "galeria-gyros-tzatziki-hasabbal-es-vitaminsalival-2022-03-18-15-22-52.jpg",
                                                                              alt: "Gyros tzatzikivel, hasábbal és vitaminsalátával" },
  { src: "galeria-grillsteak-2022-03-18-15-23-38.jpg",                       alt: "Grillsteak" },
  { src: "galeria-fokhagymas-steak-2022-03-18-15-24-44.jpg",                 alt: "Fokhagymás steak" },
  { src: "galeria-csirkemell-classico-2022-03-18-15-25-16.jpg",              alt: "Csirkemell Classico" },
  { src: "galeria-gombas-steak-2022-03-18-15-26-30.jpg",                     alt: "Gombás steak" },
  { src: "galeria-antipasti-itali-2022-03-18-15-27-01.jpg",                  alt: "Antipasti Itali" },
];

// ─── Lightbox component ────────────────────────────────────────────────────────
function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const image = images[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Touch swipe
  let touchStartX = 0;
  const onTouchStart = (e) => { touchStartX = e.changedTouches[0].clientX; };
  const onTouchEnd   = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) dx < 0 ? onNext() : onPrev();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Képnézegető"
      style={styles.lightboxOverlay}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Backdrop */}
      <div style={styles.lightboxBackdrop} onClick={onClose} />

      {/* Image */}
      <div style={styles.lightboxInner}>
        <img
          src={BASE_URL + image.src}
          alt={image.alt}
          style={styles.lightboxImg}
        />
        {image.alt && (
          <p style={styles.lightboxCaption}>{image.alt}</p>
        )}
      </div>

      {/* Controls */}
      <button style={styles.lightboxClose} onClick={onClose} aria-label="Bezárás">✕</button>
      <button style={{ ...styles.lightboxNav, left: "0.5rem" }} onClick={onPrev} aria-label="Előző kép">‹</button>
      <button style={{ ...styles.lightboxNav, right: "0.5rem" }} onClick={onNext} aria-label="Következő kép">›</button>
      <div style={styles.lightboxCounter} aria-live="polite">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

// ─── Gallery item component ────────────────────────────────────────────────────
function GalleryItem({ image, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={image.alt || `Kép ${index + 1}`}
      style={{
        ...styles.galleryItem,
        ...(hovered ? styles.galleryItemHovered : {}),
      }}
      onClick={() => onClick(index)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(index); } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <img
        src={BASE_URL + image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        width={800}
        height={600}
        style={{
          ...styles.galleryImg,
          transform: hovered ? "scale(1.06)" : "scale(1)",
          filter: hovered ? "brightness(0.8)" : "brightness(1)",
        }}
      />
      {image.alt && (
        <span
          aria-hidden="true"
          style={{
            ...styles.galleryCaption,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(4px)",
          }}
        >
          {image.alt}
        </span>
      )}
    </div>
  );
}

// ─── Main Gallery component ────────────────────────────────────────────────────
export default function MarinaGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox  = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length), []);
  const showNext = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % GALLERY_IMAGES.length), []);

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Marina Pizzéria & Steakhouse Galéria",
            "description": "Éttermi képek: pizzák, steakek, pasták, saláták és desszertek",
            "url": "https://www.marinapizzeria.hu/galeria",
            "numberOfItems": GALLERY_IMAGES.length,
            "author": {
              "@type": "Restaurant",
              "name": "Marina Pizzéria & Steakhouse",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Királyhidai u. 50.",
                "addressLocality": "Mosonmagyaróvár",
                "addressCountry": "HU",
              },
            },
          }),
        }}
      />

      <section
        aria-label="Éttermi képek galériája"
        style={styles.section}
      >
        <div style={styles.grid} role="list">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryItem
              key={image.src}
              image={image}
              index={index}
              onClick={openLightbox}
            />
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </>
  );
}

// ─── Inline styles (no external CSS dependency) ───────────────────────────────
const styles = {
  section: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "2rem 1rem 4rem",
  },
  grid: {
    display: "grid",
    // Responsive columns via CSS custom property fallback trick is not
    // possible in inline styles; use a <style> tag or Tailwind instead.
    // Default desktop 4-col; override with responsive CSS below.
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "12px",
  },
  galleryItem: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "6px",
    background: "#e4ddd4",
    cursor: "pointer",
    aspectRatio: "4 / 3",
    outline: "none",
  },
  galleryItemHovered: {
    boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
  },
  galleryImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 350ms ease, filter 350ms ease",
  },
  galleryCaption: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "0.6rem 0.75rem",
    background: "linear-gradient(transparent, rgba(0,0,0,0.65))",
    color: "#fff",
    fontSize: "0.78rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    pointerEvents: "none",
    transition: "opacity 200ms ease, transform 200ms ease",
  },
  lightboxOverlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    background: "rgba(15,10,5,0.92)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  lightboxBackdrop: {
    position: "absolute",
    inset: 0,
    cursor: "zoom-out",
  },
  lightboxInner: {
    position: "relative",
    zIndex: 1,
    maxWidth: "min(90vw, 1100px)",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.75rem",
  },
  lightboxImg: {
    maxWidth: "100%",
    maxHeight: "calc(90vh - 80px)",
    objectFit: "contain",
    borderRadius: "6px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
    background: "#222",
  },
  lightboxCaption: {
    color: "rgba(255,255,255,0.85)",
    fontSize: "0.9rem",
    textAlign: "center",
    margin: 0,
  },
  lightboxClose: {
    position: "fixed",
    top: "1rem",
    right: "1.25rem",
    background: "rgba(255,255,255,0.12)",
    border: "none",
    color: "#fff",
    fontSize: "1.4rem",
    lineHeight: 1,
    cursor: "pointer",
    padding: "0.4rem 0.7rem",
    borderRadius: "4px",
    zIndex: 2,
  },
  lightboxNav: {
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.12)",
    border: "none",
    color: "#fff",
    fontSize: "2.2rem",
    lineHeight: 1,
    cursor: "pointer",
    padding: "0.5rem 0.8rem",
    borderRadius: "4px",
    zIndex: 2,
  },
  lightboxCounter: {
    position: "fixed",
    bottom: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.8rem",
    letterSpacing: "0.06em",
  },
};

/*
 * ─── Responsive grid CSS ────────────────────────────────────────────────────
 * Add this to your global CSS / Tailwind config:
 *
 *   @media (max-width: 639px) {
 *     #gallery-grid, [aria-label="Éttermi képek galériája"] .grid {
 *       grid-template-columns: repeat(2, 1fr);
 *     }
 *   }
 *   @media (min-width: 640px) and (max-width: 1023px) {
 *     #gallery-grid, [aria-label="Éttermi képek galériája"] .grid {
 *       grid-template-columns: repeat(3, 1fr);
 *     }
 *   }
 *   @media (min-width: 1024px) {
 *     #gallery-grid, [aria-label="Éttermi képek galériája"] .grid {
 *       grid-template-columns: repeat(4, 1fr);
 *     }
 *   }
 *
 * Or, if you use Tailwind, replace the inline grid style with:
 *   className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
 */
