"use client";

import { useState } from "react";
import editions from "./christmas-editions.json";

type Lang = "de" | "en" | "fr" | "es" | "bs";

export const holidayCopy = {
  de: {
    nav: "Weihnachten", eyebrow: "HUMANITY WINS · CHRISTMAS EDITION 2026", title: "Ein Licht für alle.",
    wish: "Wir wünschen allen Menschen dieser Erde ein ruhiges und friedliches Fest.",
    universal: "Wo immer ihr lebt. Was immer ihr glaubt. Mögen diese Tage euch Ruhe, Geborgenheit und Hoffnung schenken.",
    signature: "Bevor wir Nationen, Religionen oder Sprachen sind, sind wir Menschen.",
    badge: "JETZT VERÖFFENTLICHT", worldListen: "World Christmas Version anhören", all: "Alle Weihnachtsversionen", listen: "Jetzt anhören",
    originalKicker: "DIE URSPRÜNGLICHE WORLD EDITION", original: "Die gemeinsame Friedensbotschaft des Originalprojekts, vereint in der World Edition.", originalListen: "World Edition anhören", originals: "Alle 22 Originaleditionen",
    collectionKicker: "DIE WEIHNACHTSEDITION", collectionTitle: "35 Länder. Ein Licht für alle.", collectionIntro: "Entdecke alle 35 Länderversionen und die gemeinsame World Christmas Version. Viele Stimmen tragen einen Wunsch in die Welt: Frieden für alle.",
    search: "Land, Sprache oder Titel suchen", placeholder: "Zum Beispiel Deutsch, Bosanski, Argentina …", clear: "Suche zurücksetzen", results: "Versionen", noResults: "Keine passende Version gefunden. Versuche einen anderen Suchbegriff.", world: "Für die ganze Welt", worldLanguage: "World Christmas Version · English", catalogLink: "Zu den Originaleditionen", skip: "Zum Inhalt",
  },
  en: {
    nav: "Christmas", eyebrow: "HUMANITY WINS · CHRISTMAS EDITION 2026", title: "A light for everyone.",
    wish: "We wish every person on this Earth a calm and peaceful festive season.",
    universal: "Wherever you live. Whatever you believe. May these days bring you rest, a sense of belonging and hope.",
    signature: "Before we are nations, religions or languages, we are human.",
    badge: "OUT NOW", worldListen: "Listen to the World Christmas Version", all: "All Christmas versions", listen: "Listen now",
    originalKicker: "THE ORIGINAL WORLD EDITION", original: "The original project's shared message of peace, brought together in the World Edition.", originalListen: "Listen to the World Edition", originals: "All 22 original editions",
    collectionKicker: "THE CHRISTMAS EDITION", collectionTitle: "35 countries. A light for everyone.", collectionIntro: "Discover all 35 country versions and the shared World Christmas Version. Many voices carry one wish into the world: peace for everyone.",
    search: "Search by country, language or title", placeholder: "For example English, Bosanski, Argentina …", clear: "Clear search", results: "versions", noResults: "No matching version found. Try another search.", world: "For the whole world", worldLanguage: "World Christmas Version · English", catalogLink: "Explore the original editions", skip: "Skip to content",
  },
  fr: {
    nav: "Noël", eyebrow: "HUMANITY WINS · ÉDITION DE NOËL 2026", title: "Une lumière pour tous.",
    wish: "Nous souhaitons à chaque personne sur cette Terre des fêtes calmes et paisibles.",
    universal: "Où que vous viviez. Quelles que soient vos convictions. Que ces jours vous apportent du repos, de la chaleur et de l’espoir.",
    signature: "Avant les nations, les religions ou les langues, nous sommes des êtres humains.",
    badge: "DISPONIBLE", worldListen: "Écouter la World Christmas Version", all: "Toutes les versions de Noël", listen: "Écouter",
    originalKicker: "LA WORLD EDITION ORIGINALE", original: "Le message de paix du projet original, réuni dans la World Edition.", originalListen: "Écouter la World Edition", originals: "Les 22 éditions originales",
    collectionKicker: "L’ÉDITION DE NOËL", collectionTitle: "35 pays. Une lumière pour tous.", collectionIntro: "Découvrez les 35 versions nationales et la World Christmas Version. De nombreuses voix portent un même souhait : la paix pour tous.",
    search: "Rechercher un pays, une langue ou un titre", placeholder: "Par exemple Français, Bosanski, Argentina …", clear: "Effacer la recherche", results: "versions", noResults: "Aucune version trouvée. Essayez une autre recherche.", world: "Pour le monde entier", worldLanguage: "World Christmas Version · English", catalogLink: "Découvrir les éditions originales", skip: "Aller au contenu",
  },
  es: {
    nav: "Navidad", eyebrow: "HUMANITY WINS · EDICIÓN DE NAVIDAD 2026", title: "Una luz para todos.",
    wish: "Deseamos a todas las personas de esta Tierra unas fiestas tranquilas y en paz.",
    universal: "Dondequiera que viváis. Sean cuales sean vuestras creencias. Que estos días os traigan descanso, calidez y esperanza.",
    signature: "Antes que naciones, religiones o idiomas, somos seres humanos.",
    badge: "YA DISPONIBLE", worldListen: "Escuchar la World Christmas Version", all: "Todas las versiones de Navidad", listen: "Escuchar",
    originalKicker: "LA WORLD EDITION ORIGINAL", original: "El mensaje de paz del proyecto original, unido en la World Edition.", originalListen: "Escuchar la World Edition", originals: "Las 22 ediciones originales",
    collectionKicker: "LA EDICIÓN DE NAVIDAD", collectionTitle: "35 países. Una luz para todos.", collectionIntro: "Descubre las 35 versiones nacionales y la World Christmas Version. Muchas voces llevan un mismo deseo al mundo: paz para todos.",
    search: "Buscar por país, idioma o título", placeholder: "Por ejemplo Español, Bosanski, Argentina …", clear: "Borrar búsqueda", results: "versiones", noResults: "No se ha encontrado ninguna versión. Prueba otra búsqueda.", world: "Para todo el mundo", worldLanguage: "World Christmas Version · English", catalogLink: "Descubrir las ediciones originales", skip: "Ir al contenido",
  },
  bs: {
    nav: "Božić", eyebrow: "HUMANITY WINS · BOŽIĆNO IZDANJE 2026", title: "Svjetlo za sve.",
    wish: "Svim ljudima na ovoj Zemlji želimo mirne i spokojne praznike.",
    universal: "Gdje god da živite. U šta god da vjerujete. Neka vam ovi dani donesu spokoj, toplinu i nadu.",
    signature: "Prije nego što smo nacije, religije ili jezici, mi smo ljudi.",
    badge: "SADA DOSTUPNO", worldListen: "Slušaj World Christmas Version", all: "Sve božićne verzije", listen: "Slušaj sada",
    originalKicker: "ORIGINALNA WORLD EDITION", original: "Zajednička poruka mira originalnog projekta, ujedinjena u World Edition izdanju.", originalListen: "Slušaj World Edition", originals: "Sve 22 originalne edicije",
    collectionKicker: "BOŽIĆNO IZDANJE", collectionTitle: "35 zemalja. Svjetlo za sve.", collectionIntro: "Otkrij svih 35 nacionalnih verzija i zajedničku World Christmas Version. Mnogi glasovi nose jednu želju svijetu: mir za sve.",
    search: "Pretraži zemlju, jezik ili naslov", placeholder: "Naprimjer Bosanski, Deutsch, Argentina …", clear: "Obriši pretragu", results: "verzija", noResults: "Nema odgovarajuće verzije. Pokušaj drugi pojam.", world: "Za cijeli svijet", worldLanguage: "World Christmas Version · English", catalogLink: "Otkrij originalne edicije", skip: "Pređi na sadržaj",
  },
} satisfies Record<Lang, Record<string, string>>;

const WORLD_CHRISTMAS = editions[0];
const ORIGINAL_WORLD = "https://distrokid.com/hyperfollow/unitedhumanity/imagine-humanity-wins-world-edition?ref=release";

export function ChristmasHero({ lang }: { lang: Lang }) {
  const t = holidayCopy[lang];
  return <section className="hero christmasHero" id="top" aria-labelledby="christmas-title">
    <div className="stars" aria-hidden="true" />
    <div className="heroText">
      <p className="eyebrow">{t.eyebrow}</p>
      <p className="christmasLive"><span aria-hidden="true" />{t.badge} · WORLD CHRISTMAS VERSION</p>
      <h1 id="christmas-title">{t.title}</h1>
      <p className="seasonalWish">{t.wish}</p>
      <p className="seasonalUniversal">{t.universal}</p>
      <div className="heroActions"><a className="button liveButton" href={WORLD_CHRISTMAS.url} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">▶</span> {t.worldListen} ↗</a><a className="outlineButton" href="#christmas">{t.all} ↓</a></div>
      <p className="humanitySignature">{t.signature}</p>
    </div>
    <div className="coverWrap christmasCoverWrap">
      <a className="christmasCoverLink" href={WORLD_CHRISTMAS.url} target="_blank" rel="noopener noreferrer" aria-label={t.worldListen}><img className="cover" src="/world-christmas-cover.jpg" alt="Humanity Wins – A Light for Everyone · World Christmas Version" width="1200" height="1200" fetchPriority="high" /><span className="coverPlay" aria-hidden="true">▶</span></a>
      <div className="christmasCaption"><span>WORLD CHRISTMAS VERSION</span><strong>A Light for Everyone</strong><small>UNITED HUMANITY · 14.11.2026</small></div>
    </div>
  </section>;
}

export function OriginalWorldFeature({ lang }: { lang: Lang }) {
  const t = holidayCopy[lang];
  return <section className="originalWorldFeature" id="world" aria-labelledby="original-world-title">
    <img src="/world-cover.png" alt="Imagine (Humanity Wins) · World Edition" width="1200" height="1200" loading="lazy" />
    <div><p className="sectionNo">{t.originalKicker}</p><h2 id="original-world-title">Imagine (Humanity Wins)</h2><p>{t.original}</p><div className="originalWorldActions"><a className="outlineButton" href={ORIGINAL_WORLD} target="_blank" rel="noopener noreferrer">{t.originalListen} ↗</a><a className="textLink" href="#versions">{t.originals} ↓</a></div></div>
  </section>;
}

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
}

function flag(region: string) {
  return region === "WORLD" ? "🌍" : String.fromCodePoint(...Array.from(region, letter => 127397 + letter.charCodeAt(0)));
}

export function ChristmasEditions({ lang }: { lang: Lang }) {
  const [query, setQuery] = useState("");
  const t = holidayCopy[lang];
  const regions = new Intl.DisplayNames([lang], { type: "region" });
  const languages = new Intl.DisplayNames([lang], { type: "language" });
  const englishRegions = new Intl.DisplayNames(["en"], { type: "region" });
  const englishLanguages = new Intl.DisplayNames(["en"], { type: "language" });
  const search = normalize(query.trim());
  const visible = editions.filter(edition => {
    const country = edition.region === "WORLD" ? t.world : regions.of(edition.region) ?? edition.region;
    const englishCountry = edition.region === "WORLD" ? "World" : englishRegions.of(edition.region);
    return normalize([country, englishCountry, edition.nativeLanguage, languages.of(edition.language), englishLanguages.of(edition.language), edition.title, edition.region].join(" ")).includes(search);
  });

  return <section className="christmasSection" id="christmas" aria-labelledby="christmas-editions-title">
    <div className="sectionHeading"><p className="sectionNo">{t.collectionKicker} · 2026</p><h2 id="christmas-editions-title">{t.collectionTitle}</h2><p>{t.collectionIntro}</p></div>
    <div className="christmasFilter"><div><label htmlFor="christmas-search">{t.search}</label><div className="christmasSearchField"><input id="christmas-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={t.placeholder} autoComplete="off" />{query ? <button type="button" onClick={() => setQuery("")} aria-label={t.clear}>×</button> : null}</div></div><p role="status" aria-live="polite">{visible.length} / {editions.length} {t.results}</p></div>
    <div className="christmasGrid">{visible.map(edition => {
      const isWorld = edition.region === "WORLD";
      const country = isWorld ? t.world : regions.of(edition.region) ?? edition.region;
      return <article className={`christmasEdition${isWorld ? " christmasEditionWorld" : ""}`} key={edition.region}>
        <div className="christmasEditionTop"><span className="editionFlag" aria-hidden="true">{flag(edition.region)}</span><span>{isWorld ? "WORLD" : edition.region}</span></div>
        <h3>{country}</h3><p className="editionNativeLanguage">{isWorld ? t.worldLanguage : edition.nativeLanguage}</p><p className="christmasEditionTitle" lang={edition.language} dir="auto">{edition.title.replace(/^Humanity Wins – /, "")}</p>
        <a className="editionListen" href={edition.url} target="_blank" rel="noopener noreferrer" aria-label={`${t.listen}: ${country} · ${edition.title}`}>{t.listen} ↗</a>
      </article>;
    })}</div>
    {visible.length === 0 ? <p className="christmasNoResults">{t.noResults}</p> : null}
    <a className="christmasOriginalLink textLink" href="#versions">{t.catalogLink} ↓</a>
  </section>;
}
