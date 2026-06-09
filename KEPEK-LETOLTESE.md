# 📸 Képek letöltése és feltöltése a repóba

A képek a marinapizzeria.hu szerveren le vannak tiltva (403), ezért **manuálisan kell letölteni őket** a böngészőből, majd feltölteni a repóba.

## Szükséges mappastruktúra a repóban

```
assets/
  img/
    hero-etlap.jpg          ← étlap oldal hero háttér
    hero-rolunk.jpg         ← rólunk oldal hero háttér  
    hero-galeria.jpg        ← galéria oldal hero háttér
    hero-kapcsolat.jpg      ← kapcsolat oldal hero háttér
    hero-foglalas.jpg       ← foglalás oldal hero háttér
    hero-index.jpg          ← főoldal hero háttér
    menu/
      eloetel.jpg           ← előétel ikon
      tatar.jpg             ← tatár bifsztek
      bruscetta.jpg         ← bruschetta
      antipasti.jpg         ← antipasti
      leves.jpg             ← leves
      burger.jpg            ← burger
      pizza.jpg             ← pizza
      calzone.jpg           ← calzone
      pasta.jpg             ← tészta/pasta
      thai.jpg              ← thai tészta / wok
      steak.jpg             ← steak
      foetes.jpg            ← főétel / csirkemell
      nyars.jpg             ← nyárs / souvlaki
      bosegtal.jpg          ← bőségtál / marina tál
      hal.jpg               ← halfilé / lazac
      salata.jpg            ← saláta
      desszert.jpg          ← desszert
      palacsinta.jpg        ← palacsinta
      sor.jpg               ← sör
      bor.jpg               ← bor
      koktél.jpg            ← koktél / limonádé
      kave.jpg              ← kávé
    gallery/
      (a galériaképek — lásd alább)
```

## Galéria képek URL-jei (böngészőből mentsd el)

Nyisd meg ezeket az URL-eket böngészőben, majd Jobb klikk → Kép mentése másként → `assets/img/gallery/` mappába:

```
https://www.marinapizzeria.hu/img/gallery/galeria-marinatal-2-fore-2022-03-18-15-27-28.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-grillsteak-2022-03-18-15-23-38.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-fokhagymas-steak-2022-03-18-15-24-44.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-gombas-steak-2022-03-18-15-26-30.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-dinsztelt-hagymas-steak-2022-03-18-15-25-50.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-hagymasrostelyos-2022-03-18-15-24-19.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-csirkemell-classico-2022-03-18-15-25-16.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-penne-carbonara-2022-03-18-15-21-00.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-bolognai-spagetti-2022-03-18-15-21-26.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-currys-csirkewok-2022-03-18-15-21-51.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-thai-sultteszta-2022-03-18-14-54-33.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-thai-sult-teszta-kiralyrakkal-2022-03-18-15-11-35.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-gyros-tzatziki-hasabbal-es-vitaminsalival-2022-03-18-15-22-52.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-souvlaki-2022-03-18-15-18-05.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-polpetti-2022-03-18-15-17-18.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-antipasti-itali-2022-03-18-15-27-01.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-bruscetta-2022-03-18-14-52-57.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-tatar-2022-03-18-14-52-34.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-rantott-serteskaraj-2022-03-18-15-16-56.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-rantott-csirkecombfile-2022-03-18-15-19-38.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-csirknyars-2022-03-18-15-16-10.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-csirkenyars-hazi-2022-03-18-15-18-33.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-csirkewok-2022-03-18-15-17-43.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-nyariwok-2022-03-18-15-15-06.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-grillezett-fogasfile-2022-03-18-15-20-09.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-grillezett-lazacfile-2022-03-18-15-20-33.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-parizszi-szelet-2022-03-18-15-19-01.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-vitamin-salata-2022-03-18-15-05-29.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-marina-salata-2022-03-18-14-53-57.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-cezar-salata-2022-03-18-15-12-22.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-vitorlasok-kedvence-2022-03-18-15-11-58.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-gundel-palacsinta-2022-03-18-15-13-54.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-lekvaros-palacsinta-2022-03-18-15-14-19.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-kakaos-palacsinta-2022-03-18-15-14-45.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-csokis-muffin-2022-03-18-15-13-19.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-forro-malna-vaniliaval-2022-03-18-15-12-53.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-calzone-nutella-2023-06-28-21-25-47.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-terasz-2020-06-23-18-58-16.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-marina-2019-02-26-13-33-33.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-kep-2019-04-14-16-37-28.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-kep-2021-01-13-22-01-10.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-ajandekutalvany-2018-03-05-09-07-28.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-julius-2020-06-28-16-51-01.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-oktober-2020-10-27-16-26-09.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-novembee-2020-11-01-09-11-49.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-steak-chili-con-carne-2018-03-05-09-12-23.jpg
https://www.marinapizzeria.hu/img/gallery/galeria-csirkemell-classico-2022-03-18-15-25-16.jpg
```

## Gyors megoldás a HTML fájlokban

Ha nem akarod letölteni az összes képet egyszerre, a HTML fájlokban az
`assets/img/gallery/FÁJLNÉV.jpg` helyett használd tovább a teljes URL-t:
`https://www.marinapizzeria.hu/img/gallery/FÁJLNÉV.jpg`

A galeria.html és a hero képek már ezt a módszert használják.

## Menü ikonképek

Az `assets/img/menu/` mappában szükséges kis (80×80 px) ikonképeket
a galéria megfelelő képeiből tudod kivágni/átméretezni, vagy egyszerűen
ugyanazt a galéria URL-t használd placeholder helyett.
