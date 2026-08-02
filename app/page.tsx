"use client";

import { useEffect, useMemo, useState } from "react";

type Lang = "de" | "en" | "fr" | "es" | "bs";

type Copy = {
  nav: string[];
  eyebrow: string;
  title: string;
  lead: string;
  releaseLabel: string;
  releaseDate: string;
  cta: string;
  units: string[];
  missionTitle: string;
  mission: string;
  releaseTitle: string;
  releaseCopy: string;
  languagesTitle: string;
  languagesIntro: string;
  coming: string;
  storyKicker: string;
  storyTitle: string;
  story: string;
  book: string;
  supportTitle: string;
  support: string;
  donation: string;
  contactTitle: string;
  contactCopy: string;
  footer: string;
};

const copy: Record<Lang, Copy> = {
  de: {
    nav: ["Mission", "Versionen", "Geschichte", "Kontakt"],
    eyebrow: "WELTWEITES FRIEDENSPROJEKT · 21 SPRACHEN · EINE BOTSCHAFT",
    title: "Stell dir vor, Menschlichkeit gewinnt.",
    lead: "Ein Lied gegen Krieg – in 21 Sprachen. Eine gemeinsame Veröffentlichung. Eine Botschaft, die keine Grenze braucht.",
    releaseLabel: "Weltweite Veröffentlichung",
    releaseDate: "31. August 2026",
    cta: "Die 21 Versionen entdecken",
    units: ["Tage", "Stunden", "Minuten", "Sekunden"],
    missionTitle: "Eine Menschheit. Eine Zukunft.",
    mission: "HUMANITY WINS ist mehr als ein Musikprojekt. Es macht eine einfache Wahrheit hörbar: Kein Mensch wird als Feind geboren. Sprachen, Kulturen und Grenzen unterscheiden uns – unsere Menschlichkeit verbindet uns.",
    releaseTitle: "Alle Stimmen. Ein gemeinsamer Start.",
    releaseCopy: "Alle 21 Sprachversionen wurden über DistroKid an die internationalen Musikplattformen ausgeliefert. Sie werden am 31. August 2026 gleichzeitig veröffentlicht. Bis dahin zeigt jede Version ihren Launch-Status; die direkten Streaminglinks werden zum Veröffentlichungstag aktiviert.",
    languagesTitle: "21 Sprachen. Eine Botschaft.",
    languagesIntro: "Jede Version bewahrt dieselbe Friedensbotschaft und trägt sie in eine andere Sprache und Kultur.",
    coming: "Verfügbar ab 31.08.2026",
    storyKicker: "EINE AUSSERGEWÖHNLICHE PARALLELE",
    storyTitle: "Zwei ähnliche Namen. Zwei Wege zum Frieden.",
    story: "Uzeir Huskic schuf HUMANITY WINS. Unabhängig davon veröffentlichte der Autor Uzeir Huskovic das Buch „In the Name of Peace“. Die fast identischen Namen führten zunächst zu einer Verwechslung – tatsächlich handelt es sich um zwei verschiedene Personen, verbunden durch dieselbe Überzeugung: Frieden ist möglich.",
    book: "Das Buch entdecken",
    supportTitle: "Mach die Botschaft größer.",
    support: "Höre. Teile. Sprich darüber. Jeder weitergetragene Ton ist eine Entscheidung für Menschlichkeit.",
    donation: "Von jedem Download zum Preis von 1,29 US-Dollar sind 0,30 US-Dollar für einen Friedenszweck vorgesehen. Empfänger und Abrechnung werden transparent veröffentlicht.",
    contactTitle: "Kontakt & Zusammenarbeit",
    contactCopy: "Für Presse, Partnerschaften, Unterstützung und allgemeine Anfragen stehen eigene Ansprechpartner bereit.",
    footer: "Musik kann keinen Frieden erzwingen. Aber sie kann Menschen daran erinnern, dass Frieden möglich ist.",
  },
  en: {
    nav: ["Mission", "Editions", "Story", "Contact"], eyebrow: "GLOBAL PEACE PROJECT · 21 LANGUAGES · ONE MESSAGE", title: "Imagine humanity wins.", lead: "One song against war – in 21 languages. One shared release. One message beyond borders.", releaseLabel: "Worldwide release", releaseDate: "31 August 2026", cta: "Discover all 21 editions", units: ["Days", "Hours", "Minutes", "Seconds"], missionTitle: "One humanity. One future.", mission: "HUMANITY WINS is more than a music project. It makes a simple truth audible: no human being is born an enemy. Languages, cultures and borders distinguish us – our humanity connects us.", releaseTitle: "Every voice. One shared beginning.", releaseCopy: "All 21 language editions have been delivered through DistroKid to international music platforms. They will be released simultaneously on 31 August 2026. Until then, each edition displays its launch status; direct streaming links will be activated on release day.", languagesTitle: "21 languages. One message.", languagesIntro: "Every edition carries the same message of peace into another language and culture.", coming: "Available 31 Aug 2026", storyKicker: "AN EXTRAORDINARY PARALLEL", storyTitle: "Two similar names. Two paths toward peace.", story: "Uzeir Huskic created HUMANITY WINS. Independently, author Uzeir Huskovic published the book ‘In the Name of Peace’. Their almost identical names initially caused confusion – they are two different people, connected by the same conviction: peace is possible.", book: "Discover the book", supportTitle: "Make the message greater.", support: "Listen. Share. Speak about it. Every note carried forward is a choice for humanity.", donation: "From every US$1.29 download, US$0.30 is intended for a peace-related cause. The recipient and accounting will be published transparently.", contactTitle: "Contact & collaboration", contactCopy: "Dedicated contacts are available for press, partnerships, support and general enquiries.", footer: "Music cannot force peace. But it can remind people that peace is possible.",
  },
  fr: {
    nav: ["Mission", "Versions", "Histoire", "Contact"], eyebrow: "PROJET MONDIAL POUR LA PAIX · 21 LANGUES · UN MESSAGE", title: "Imaginez que l’humanité gagne.", lead: "Une chanson contre la guerre – en 21 langues. Une sortie commune. Un message sans frontières.", releaseLabel: "Sortie mondiale", releaseDate: "31 août 2026", cta: "Découvrir les 21 versions", units: ["Jours", "Heures", "Minutes", "Secondes"], missionTitle: "Une humanité. Un avenir.", mission: "HUMANITY WINS est plus qu’un projet musical. Il rend audible une vérité simple : personne ne naît ennemi. Les langues, les cultures et les frontières nous distinguent – notre humanité nous unit.", releaseTitle: "Toutes les voix. Un même départ.", releaseCopy: "Les 21 versions linguistiques ont été livrées via DistroKid aux plateformes musicales internationales. Elles paraîtront simultanément le 31 août 2026. Les liens directs seront activés le jour de la sortie.", languagesTitle: "21 langues. Un message.", languagesIntro: "Chaque version porte le même message de paix dans une autre langue et une autre culture.", coming: "Disponible le 31.08.2026", storyKicker: "UN PARALLÈLE EXTRAORDINAIRE", storyTitle: "Deux noms proches. Deux chemins vers la paix.", story: "Uzeir Huskic a créé HUMANITY WINS. Indépendamment, l’auteur Uzeir Huskovic a publié « In the Name of Peace ». Leurs noms presque identiques ont d’abord créé une confusion : il s’agit bien de deux personnes différentes, unies par la même conviction.", book: "Découvrir le livre", supportTitle: "Faites grandir le message.", support: "Écoutez. Partagez. Parlez-en.", donation: "Pour chaque téléchargement à 1,29 USD, 0,30 USD sont destinés à une cause pour la paix. Le bénéficiaire et les comptes seront publiés en toute transparence.", contactTitle: "Contact & collaboration", contactCopy: "Des contacts dédiés sont disponibles pour la presse, les partenariats, le soutien et les demandes générales.", footer: "La musique ne peut imposer la paix. Elle peut rappeler qu’elle est possible.",
  },
  es: {
    nav: ["Misión", "Versiones", "Historia", "Contacto"], eyebrow: "PROYECTO MUNDIAL DE PAZ · 21 IDIOMAS · UN MENSAJE", title: "Imagina que gana la humanidad.", lead: "Una canción contra la guerra – en 21 idiomas. Un lanzamiento común. Un mensaje sin fronteras.", releaseLabel: "Lanzamiento mundial", releaseDate: "31 de agosto de 2026", cta: "Descubrir las 21 versiones", units: ["Días", "Horas", "Minutos", "Segundos"], missionTitle: "Una humanidad. Un futuro.", mission: "HUMANITY WINS es más que un proyecto musical. Hace audible una verdad sencilla: nadie nace enemigo. Los idiomas, las culturas y las fronteras nos distinguen; nuestra humanidad nos une.", releaseTitle: "Todas las voces. Un mismo comienzo.", releaseCopy: "Las 21 versiones lingüísticas han sido entregadas mediante DistroKid a las plataformas internacionales. Se publicarán simultáneamente el 31 de agosto de 2026. Los enlaces directos se activarán el día del lanzamiento.", languagesTitle: "21 idiomas. Un mensaje.", languagesIntro: "Cada versión lleva el mismo mensaje de paz a otra lengua y cultura.", coming: "Disponible el 31.08.2026", storyKicker: "UN PARALELO EXTRAORDINARIO", storyTitle: "Dos nombres parecidos. Dos caminos hacia la paz.", story: "Uzeir Huskic creó HUMANITY WINS. De forma independiente, el autor Uzeir Huskovic publicó ‘In the Name of Peace’. Sus nombres casi idénticos causaron inicialmente una confusión: son dos personas diferentes, unidas por la misma convicción.", book: "Descubrir el libro", supportTitle: "Haz crecer el mensaje.", support: "Escucha. Comparte. Habla de ello.", donation: "De cada descarga de 1,29 USD, 0,30 USD se destinarán a una causa por la paz. El destinatario y las cuentas se publicarán con transparencia.", contactTitle: "Contacto y colaboración", contactCopy: "Hay contactos específicos para prensa, alianzas, apoyo y consultas generales.", footer: "La música no puede imponer la paz. Puede recordarnos que es posible.",
  },
  bs: {
    nav: ["Misija", "Verzije", "Priča", "Kontakt"], eyebrow: "SVJETSKI PROJEKAT MIRA · 21 JEZIK · JEDNA PORUKA", title: "Zamisli da čovječnost pobijedi.", lead: "Jedna pjesma protiv rata – na 21 jeziku. Jedno zajedničko izdanje. Poruka bez granica.", releaseLabel: "Svjetsko izdanje", releaseDate: "31. august 2026.", cta: "Otkrij svih 21 verziju", units: ["Dana", "Sati", "Minuta", "Sekundi"], missionTitle: "Jedno čovječanstvo. Jedna budućnost.", mission: "HUMANITY WINS je više od muzičkog projekta. On daje glas jednostavnoj istini: nijedan čovjek nije rođen kao neprijatelj. Jezici, kulture i granice nas razlikuju – čovječnost nas povezuje.", releaseTitle: "Svi glasovi. Jedan zajednički početak.", releaseCopy: "Svih 21 jezičkih verzija dostavljeno je putem DistroKida međunarodnim muzičkim platformama. Bit će objavljene istovremeno 31. augusta 2026. Direktni linkovi bit će aktivirani na dan objave.", languagesTitle: "21 jezik. Jedna poruka.", languagesIntro: "Svaka verzija prenosi istu poruku mira u drugi jezik i kulturu.", coming: "Dostupno 31.08.2026.", storyKicker: "IZVANREDNA PARALELA", storyTitle: "Dva slična imena. Dva puta prema miru.", story: "Uzeir Huskic je stvorio HUMANITY WINS. Nezavisno od toga, autor Uzeir Huskovic objavio je knjigu ‘In the Name of Peace’. Njihova gotovo identična imena prvo su izazvala zabunu – riječ je o dvije različite osobe povezane istim uvjerenjem.", book: "Otkrij knjigu", supportTitle: "Učini poruku većom.", support: "Slušaj. Podijeli. Govori o tome.", donation: "Od svakog preuzimanja po cijeni od 1,29 USD, 0,30 USD namijenjeno je mirovnoj svrsi. Primalac i obračun bit će transparentno objavljeni.", contactTitle: "Kontakt i saradnja", contactCopy: "Posebni kontakti dostupni su za medije, partnerstva, podršku i opće upite.", footer: "Muzika ne može nametnuti mir. Ali može podsjetiti ljude da je mir moguć.",
  },
};

const editions = [
  ["DE", "Deutsch"], ["EN-US", "English (US)"], ["EN-UK", "English (UK)"], ["FR", "Français"], ["ES", "Español"], ["IT", "Italiano"], ["PT-BR", "Português (Brasil)"], ["EL", "Ελληνικά"], ["BS", "Bosanski"], ["TR", "Türkçe"], ["PL", "Polski"], ["ZH", "中文"], ["AR", "العربية"], ["FA", "فارسی"], ["HE", "עברית"], ["HI", "हिन्दी"], ["JA", "日本語"], ["KO", "한국어"], ["UK", "Українська"], ["TBA", "Additional Edition"], ["WORLD", "World Edition"],
] as const;

function Countdown({ labels }: { labels: string[] }) {
  const target = useMemo(() => new Date("2026-08-31T00:00:00+02:00").getTime(), []);
  const [left, setLeft] = useState(() => Math.max(0, target - Date.now()));
  useEffect(() => { const id = window.setInterval(() => setLeft(Math.max(0, target - Date.now())), 1000); return () => window.clearInterval(id); }, [target]);
  const values = [Math.floor(left / 86400000), Math.floor(left / 3600000) % 24, Math.floor(left / 60000) % 60, Math.floor(left / 1000) % 60];
  return <div className="countdown" aria-label="Countdown to release">{values.map((v, i) => <div key={labels[i]}><strong>{String(v).padStart(2, "0")}</strong><span>{labels[i]}</span></div>)}</div>;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("de");
  const t = copy[lang];
  return <main>
    <header className="topbar">
      <a className="brand" href="#top">HUMANITY WINS</a>
      <nav>{t.nav.map((n, i) => <a key={n} href={["#mission", "#versions", "#story", "#contact"][i]}>{n}</a>)}</nav>
      <select aria-label="Language" value={lang} onChange={e => setLang(e.target.value as Lang)}><option value="de">DE</option><option value="en">EN</option><option value="fr">FR</option><option value="es">ES</option><option value="bs">BS</option></select>
    </header>

    <section className="hero" id="top"><div className="stars"/><div className="heroText"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="lead">{t.lead}</p><div className="release"><span>{t.releaseLabel}</span><strong>{t.releaseDate}</strong></div><Countdown labels={t.units}/><a className="button" href="#versions">{t.cta}</a></div><div className="coverWrap"><img className="cover" src="/world-cover.png" alt="Imagine Humanity Wins World Edition cover"/><span className="preRelease">PRE-RELEASE</span></div></section>

    <section className="manifesto" id="mission"><p className="sectionNo">01 — THE MISSION</p><h2>{t.missionTitle}</h2><p>{t.mission}</p><div className="numbers"><div><strong>21</strong><span>Languages</span></div><div><strong>31·08</strong><span>Worldwide release</span></div><div><strong>1</strong><span>Shared message</span></div></div></section>

    <section className="releaseStory"><div><p className="sectionNo">02 — THE RELEASE</p><h2>{t.releaseTitle}</h2><p>{t.releaseCopy}</p></div><div className="platforms" aria-label="Planned music platforms"><span>Spotify</span><span>Apple Music</span><span>Amazon Music</span><span>YouTube Music</span><span>Deezer</span></div></section>

    <section className="versions" id="versions"><div className="sectionHeading"><p className="sectionNo">03 — THE EDITIONS</p><h2>{t.languagesTitle}</h2><p>{t.languagesIntro}</p></div><div className="editionGrid">{editions.map(([code, name], i) => <article className="edition" key={code}><div><span className="editionNo">{String(i + 1).padStart(2, "0")}</span><b>{code}</b></div><h3>{name}</h3><p>{t.coming}</p><button type="button" disabled aria-label={`${name}: ${t.coming}`}>COMING SOON</button></article>)}</div></section>

    <section className="namesake" id="story"><p className="sectionNo">04 — {t.storyKicker}</p><h2>{t.storyTitle}</h2><p>{t.story}</p><a href="https://www.amazon.de/NAME-PEACE-Way-World-Peace/dp/0595516149" target="_blank" rel="noreferrer">{t.book} ↗</a></section>

    <section className="support"><p className="sectionNo">05 — UNITED HUMANITY</p><h2>{t.supportTitle}</h2><p>{t.support}</p><p className="donation">{t.donation}</p></section>

    <section className="contact" id="contact"><div><p className="sectionNo">06 — CONTACT</p><h2>{t.contactTitle}</h2><p>{t.contactCopy}</p></div><div className="contactGrid"><a href="mailto:hello@humanitywins.world"><span>General</span>hello@humanitywins.world</a><a href="mailto:press@humanitywins.world"><span>Press</span>press@humanitywins.world</a><a href="mailto:partners@humanitywins.world"><span>Partners</span>partners@humanitywins.world</a><a href="mailto:legal@humanitywins.world"><span>Legal</span>legal@humanitywins.world</a></div></section>

    <footer><img src="/humanity-wins-logo.png" alt="Humanity Wins"/><p>{t.footer}</p><div className="footerContact"><a href="mailto:hello@humanitywins.world">hello@humanitywins.world</a><a href="mailto:press@humanitywins.world">press@humanitywins.world</a><a href="mailto:partners@humanitywins.world">partners@humanitywins.world</a></div><div className="footerLinks"><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><a href="mailto:support@humanitywins.world">Support</a><a href="mailto:join@unitedhumanity.world">Join United Humanity</a></div><small>© 2026 Humanity Wins · UNITED HUMANITY · Website V3</small></footer>
  </main>;
}
