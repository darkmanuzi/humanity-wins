"use client";

import { useEffect, useState } from "react";

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
  journeyTitle: string;
  journeyIntro: string;
  pressTitle: string;
  pressCopy: string;
  pressButton: string;
  streamSoon: string;
  streamLive: string;
};

const copy: Record<Lang, Copy> = {
  de: {
    nav: ["Mission", "Versionen", "Geschichte", "Kontakt"],
    eyebrow: "WELTWEITES FRIEDENSPROJEKT · 21 SPRACHEN · EINE BOTSCHAFT",
    title: "Stell dir vor, Menschlichkeit gewinnt.",
    lead: "Ein Lied gegen Krieg – in 21 Sprachen. Eine Veröffentlichung nach der anderen. Eine Botschaft, die keine Grenze braucht.",
    releaseLabel: "Weltweite Veröffentlichung",
    releaseDate: "31. August bis 21. September 2026",
    cta: "Die 22 Editionen entdecken",
    units: ["Tage", "Stunden", "Minuten", "Sekunden"],
    missionTitle: "Eine Menschheit. Eine Zukunft.",
    mission: "HUMANITY WINS ist mehr als ein Musikprojekt. Es macht eine einfache Wahrheit hörbar: Kein Mensch wird als Feind geboren. Sprachen, Kulturen und Grenzen unterscheiden uns – unsere Menschlichkeit verbindet uns.",
    releaseTitle: "Alle Stimmen. Ein gemeinsamer Start.",
    releaseCopy: "Alle 21 Sprachversionen wurden über DistroKid an die internationalen Musikplattformen ausgeliefert. Die Veröffentlichungsreise beginnt am 31. August 2026 mit der German Edition. Danach erscheint täglich eine weitere Edition – bis zur World Edition am Internationalen Tag des Friedens, dem 21. September 2026.",
    languagesTitle: "21 Sprachen. 22 Editionen. Eine Botschaft.",
    languagesIntro: "Jede Version bewahrt dieselbe Friedensbotschaft und trägt sie in eine andere Sprache und Kultur.",
    coming: "Geplanter Veröffentlichungstermin",
    storyKicker: "EINE AUSSERGEWÖHNLICHE PARALLELE",
    storyTitle: "Zwei identische Namen. Zwei Wege zum Frieden.",
    story: "Uzeir Huskic schuf HUMANITY WINS. Unabhängig davon veröffentlichte der Autor Uzeir Huskic das Buch „In the Name of Peace“. Die identischen Namen führten zunächst zu einer Verwechslung – tatsächlich handelt es sich um zwei verschiedene Personen, verbunden durch dieselbe Überzeugung: Frieden ist möglich.",
    book: "Das Buch entdecken",
    supportTitle: "Mach die Botschaft größer.",
    support: "Höre. Teile. Sprich darüber. Jeder weitergetragene Ton ist eine Entscheidung für Menschlichkeit.",
    donation: "Von jedem Download zum Preis von 1,29 US-Dollar sind 0,30 US-Dollar für einen Friedenszweck vorgesehen. Empfänger und Abrechnung werden transparent veröffentlicht.",
    contactTitle: "Kontakt & Zusammenarbeit",
    contactCopy: "Für Presse, Partnerschaften, Unterstützung und allgemeine Anfragen stehen eigene Ansprechpartner bereit.",
    journeyTitle: "22 Tage. Eine Welt.",
    journeyIntro: "Vom 31. August bis zum Internationalen Tag des Friedens wird jeden Tag eine weitere Edition freigeschaltet.",
    pressTitle: "Presse & Medien",
    pressCopy: "Für Interviews, Berichterstattung, Bildmaterial und Kooperationen steht unser Medienkontakt bereit.",
    pressButton: "Pressekontakt",
    streamSoon: "Streaming ab Veröffentlichung",
    streamLive: "Jetzt verfügbar",
    footer: "Musik kann keinen Frieden erzwingen. Aber sie kann Menschen daran erinnern, dass Frieden möglich ist.",
  },
  en: {
    nav: ["Mission", "Editions", "Story", "Contact"], eyebrow: "GLOBAL PEACE PROJECT · 21 LANGUAGES · ONE MESSAGE", title: "Imagine humanity wins.", lead: "One song against war – in 21 languages. One release after another. One message beyond borders.", releaseLabel: "Worldwide release", releaseDate: "31 August – 21 September 2026", cta: "Discover all 22 editions", units: ["Days", "Hours", "Minutes", "Seconds"], missionTitle: "One humanity. One future.", mission: "HUMANITY WINS is more than a music project. It makes a simple truth audible: no human being is born an enemy. Languages, cultures and borders distinguish us – our humanity connects us.", releaseTitle: "Every voice. One shared beginning.", releaseCopy: "All 21 language editions have been delivered through DistroKid to international music platforms. The release journey begins with the German Edition on 31 August 2026. A new edition follows every day, culminating in the World Edition on the International Day of Peace, 21 September 2026.", languagesTitle: "21 languages. 22 editions. One message.", languagesIntro: "Every edition carries the same message of peace into another language and culture.", coming: "Scheduled release", storyKicker: "AN EXTRAORDINARY PARALLEL", storyTitle: "Two identical names. Two paths toward peace.", story: "Uzeir Huskic created HUMANITY WINS. Independently, author Uzeir Huskic published the book ‘In the Name of Peace’. Their identical names initially caused confusion – they are two different people, connected by the same conviction: peace is possible.", book: "Discover the book", supportTitle: "Make the message greater.", support: "Listen. Share. Speak about it. Every note carried forward is a choice for humanity.", donation: "From every US$1.29 download, US$0.30 is intended for a peace-related cause. The recipient and accounting will be published transparently.", contactTitle: "Contact & collaboration", contactCopy: "Dedicated contacts are available for press, partnerships, support and general enquiries.", journeyTitle: "22 days. One world.", journeyIntro: "From 31 August to the International Day of Peace, another edition is unlocked every day.", pressTitle: "Press & media", pressCopy: "Our media contact is available for interviews, coverage, visual material and collaborations.", pressButton: "Press contact", streamSoon: "Streaming from release", streamLive: "Available now", footer: "Music cannot force peace. But it can remind people that peace is possible.",
  },
  fr: {
    nav: ["Mission", "Versions", "Histoire", "Contact"], eyebrow: "PROJET MONDIAL POUR LA PAIX · 21 LANGUES · UN MESSAGE", title: "Imaginez que l’humanité gagne.", lead: "Une chanson contre la guerre – en 21 langues. Une sortie après l’autre. Un message sans frontières.", releaseLabel: "Sortie mondiale", releaseDate: "31 août – 21 septembre 2026", cta: "Découvrir les 22 éditions", units: ["Jours", "Heures", "Minutes", "Secondes"], missionTitle: "Une humanité. Un avenir.", mission: "HUMANITY WINS est plus qu’un projet musical. Il rend audible une vérité simple : personne ne naît ennemi. Les langues, les cultures et les frontières nous distinguent – notre humanité nous unit.", releaseTitle: "Toutes les voix. Un même départ.", releaseCopy: "Les 21 versions linguistiques ont été livrées via DistroKid aux plateformes musicales internationales. Le parcours commence avec la German Edition le 31 août 2026. Une nouvelle édition paraît ensuite chaque jour, jusqu’à la World Edition le 21 septembre 2026, Journée internationale de la paix.", languagesTitle: "21 langues. 22 éditions. Un message.", languagesIntro: "Chaque version porte le même message de paix dans une autre langue et une autre culture.", coming: "Sortie prévue", storyKicker: "UN PARALLÈLE EXTRAORDINAIRE", storyTitle: "Deux noms identiques. Deux chemins vers la paix.", story: "Uzeir Huskic a créé HUMANITY WINS. Indépendamment, l’auteur Uzeir Huskic a publié « In the Name of Peace ». Leurs noms identiques ont d’abord créé une confusion : il s’agit bien de deux personnes différentes, unies par la même conviction.", book: "Découvrir le livre", supportTitle: "Faites grandir le message.", support: "Écoutez. Partagez. Parlez-en.", donation: "Pour chaque téléchargement à 1,29 USD, 0,30 USD sont destinés à une cause pour la paix. Le bénéficiaire et les comptes seront publiés en toute transparence.", contactTitle: "Contact & collaboration", contactCopy: "Des contacts dédiés sont disponibles pour la presse, les partenariats, le soutien et les demandes générales.", journeyTitle: "22 jours. Un monde.", journeyIntro: "Du 31 août à la Journée internationale de la paix, une nouvelle édition est dévoilée chaque jour.", pressTitle: "Presse & médias", pressCopy: "Notre contact média est disponible pour les interviews, reportages, visuels et collaborations.", pressButton: "Contact presse", streamSoon: "Streaming dès la sortie", streamLive: "Disponible maintenant", footer: "La musique ne peut imposer la paix. Elle peut rappeler qu’elle est possible.",
  },
  es: {
    nav: ["Misión", "Versiones", "Historia", "Contacto"], eyebrow: "PROYECTO MUNDIAL DE PAZ · 21 IDIOMAS · UN MENSAJE", title: "Imagina que gana la humanidad.", lead: "Una canción contra la guerra – en 21 idiomas. Un lanzamiento tras otro. Un mensaje sin fronteras.", releaseLabel: "Lanzamiento mundial", releaseDate: "31 de agosto – 21 de septiembre de 2026", cta: "Descubrir las 22 ediciones", units: ["Días", "Horas", "Minutos", "Segundos"], missionTitle: "Una humanidad. Un futuro.", mission: "HUMANITY WINS es más que un proyecto musical. Hace audible una verdad sencilla: nadie nace enemigo. Los idiomas, las culturas y las fronteras nos distinguen; nuestra humanidad nos une.", releaseTitle: "Todas las voces. Un mismo comienzo.", releaseCopy: "Las 21 versiones lingüísticas han sido entregadas mediante DistroKid a las plataformas internacionales. El recorrido comienza con la German Edition el 31 de agosto de 2026. Después se publica una nueva edición cada día, hasta la World Edition del 21 de septiembre de 2026, Día Internacional de la Paz.", languagesTitle: "21 idiomas. 22 ediciones. Un mensaje.", languagesIntro: "Cada versión lleva el mismo mensaje de paz a otra lengua y cultura.", coming: "Lanzamiento previsto", storyKicker: "UN PARALELO EXTRAORDINARIO", storyTitle: "Dos nombres idénticos. Dos caminos hacia la paz.", story: "Uzeir Huskic creó HUMANITY WINS. De forma independiente, el autor Uzeir Huskic publicó ‘In the Name of Peace’. Sus nombres idénticos causaron inicialmente una confusión: son dos personas diferentes, unidas por la misma convicción.", book: "Descubrir el libro", supportTitle: "Haz crecer el mensaje.", support: "Escucha. Comparte. Habla de ello.", donation: "De cada descarga de 1,29 USD, 0,30 USD se destinarán a una causa por la paz. El destinatario y las cuentas se publicarán con transparencia.", contactTitle: "Contacto y colaboración", contactCopy: "Hay contactos específicos para prensa, alianzas, apoyo y consultas generales.", journeyTitle: "22 días. Un mundo.", journeyIntro: "Del 31 de agosto al Día Internacional de la Paz se desbloquea una nueva edición cada día.", pressTitle: "Prensa y medios", pressCopy: "Nuestro contacto de medios está disponible para entrevistas, cobertura, material visual y colaboraciones.", pressButton: "Contacto de prensa", streamSoon: "Streaming desde el lanzamiento", streamLive: "Disponible ahora", footer: "La música no puede imponer la paz. Puede recordarnos que es posible.",
  },
  bs: {
    nav: ["Misija", "Verzije", "Priča", "Kontakt"], eyebrow: "SVJETSKI PROJEKAT MIRA · 21 JEZIK · JEDNA PORUKA", title: "Zamisli da čovječnost pobijedi.", lead: "Jedna pjesma protiv rata – na 21 jeziku. Jedno izdanje za drugim. Poruka bez granica.", releaseLabel: "Svjetsko izdanje", releaseDate: "31. august – 21. septembar 2026.", cta: "Otkrij sve 22 edicije", units: ["Dana", "Sati", "Minuta", "Sekundi"], missionTitle: "Jedno čovječanstvo. Jedna budućnost.", mission: "HUMANITY WINS je više od muzičkog projekta. On daje glas jednostavnoj istini: nijedan čovjek nije rođen kao neprijatelj. Jezici, kulture i granice nas razlikuju – čovječnost nas povezuje.", releaseTitle: "Svi glasovi. Jedan zajednički početak.", releaseCopy: "Svih 21 jezičkih verzija dostavljeno je putem DistroKida međunarodnim muzičkim platformama. Putovanje počinje German Edition izdanjem 31. augusta 2026. Nakon toga svakog dana izlazi nova edicija, sve do World Edition izdanja 21. septembra 2026, na Međunarodni dan mira.", languagesTitle: "21 jezik. 22 edicije. Jedna poruka.", languagesIntro: "Svaka verzija prenosi istu poruku mira u drugi jezik i kulturu.", coming: "Planirano izdanje", storyKicker: "IZVANREDNA PARALELA", storyTitle: "Dva identična imena. Dva puta prema miru.", story: "Uzeir Huskic je stvorio HUMANITY WINS. Nezavisno od toga, autor Uzeir Huskic objavio je knjigu ‘In the Name of Peace’. Njihova identična imena prvo su izazvala zabunu – riječ je o dvije različite osobe povezane istim uvjerenjem.", book: "Otkrij knjigu", supportTitle: "Učini poruku većom.", support: "Slušaj. Podijeli. Govori o tome.", donation: "Od svakog preuzimanja po cijeni od 1,29 USD, 0,30 USD namijenjeno je mirovnoj svrsi. Primalac i obračun bit će transparentno objavljeni.", contactTitle: "Kontakt i saradnja", contactCopy: "Posebni kontakti dostupni su za medije, partnerstva, podršku i opće upite.", journeyTitle: "22 dana. Jedan svijet.", journeyIntro: "Od 31. augusta do Međunarodnog dana mira svakog dana se otključava nova edicija.", pressTitle: "Mediji i štampa", pressCopy: "Naš medijski kontakt dostupan je za intervjue, izvještavanje, vizuale i saradnju.", pressButton: "Kontakt za medije", streamSoon: "Streaming od dana izdanja", streamLive: "Dostupno sada", footer: "Muzika ne može nametnuti mir. Ali može podsjetiti ljude da je mir moguć.",
  },
};

const editions = [
  { code: "DE", name: "German Edition", title: "Imagine (Humanity Wins) (German Edition)", date: "2026-08-31" },
  { code: "BA", name: "Bosnian Edition", title: "Imagine (Humanity Wins) (Bosnian Edition)", date: "2026-09-01" },
  { code: "UA", name: "Ukrainian Edition", title: "Imagine (Humanity Wins) (Ukrainian Edition)", date: "2026-09-02" },
  { code: "PL", name: "Polish Edition", title: "Imagine (Humanity Wins) (Polish Edition)", date: "2026-09-03" },
  { code: "TR", name: "Turkish Edition", title: "Imagine (Humanity Wins) (Turkish Edition)", date: "2026-09-04" },
  { code: "GR", name: "Greek Edition", title: "Imagine (Humanity Wins) (Greek Edition)", date: "2026-09-05" },
  { code: "IT", name: "Italian Edition", title: "Imagine (Humanity Wins) (Italian Edition)", date: "2026-09-06" },
  { code: "FR", name: "French Edition", title: "Imagine (Humanity Wins) (French Edition)", date: "2026-09-07" },
  { code: "ES", name: "Spanish Edition", title: "Imagine (Humanity Wins) (Spanish Edition)", date: "2026-09-08" },
  { code: "BR", name: "Brazil Edition", title: "Imagine (Humanity Wins) (Brazil Edition)", date: "2026-09-09" },
  { code: "AR", name: "Arabic Edition", title: "Imagine (Humanity Wins) (Arabic Edition)", date: "2026-09-10" },
  { code: "US", name: "American Edition", title: "Imagine (Humanity Wins) (American Edition)", date: "2026-09-11" },
  { code: "IR", name: "Persian Edition", title: "Imagine (Humanity Wins) (Persian Edition)", date: "2026-09-12" },
  { code: "IL", name: "Hebrew Edition", title: "Imagine (Humanity Wins) (Hebrew Edition)", date: "2026-09-13" },
  { code: "IN", name: "Hindi Edition", title: "Imagine (Humanity Wins) (Hindi Edition)", date: "2026-09-14" },
  { code: "CN", name: "Chinese Edition", title: "Imagine (Humanity Wins) (Chinese Edition)", date: "2026-09-15" },
  { code: "JP", name: "Japanese Edition", title: "Imagine (Humanity Wins) (Japanese Edition)", date: "2026-09-16" },
  { code: "KR", name: "South Korean Edition", title: "Imagine (Humanity Wins) (South Korean Edition)", date: "2026-09-17" },
  { code: "RU", name: "Russian Edition", title: "Imagine (Humanity Wins) (Russian Edition)", date: "2026-09-18" },
  { code: "PT", name: "Portuguese Edition", title: "Imagine (Humanity Wins) (Portuguese Edition)", date: "2026-09-19" },
  { code: "UK", name: "UK Edition", title: "Imagine (Humanity Wins) (UK Edition)", date: "2026-09-20" },
  { code: "WORLD", name: "World Edition", title: "Imagine (Humanity Wins) (World Edition)", date: "2026-09-21" },
] as const;

const dateLocales: Record<Lang, string> = { de: "de-DE", en: "en-GB", fr: "fr-FR", es: "es-ES", bs: "bs-BA" };

function releaseTime(date: string) {
  return new Date(`${date}T00:00:00+02:00`).getTime();
}

function formatReleaseDate(date: string, lang: Lang) {
  return new Intl.DateTimeFormat(dateLocales[lang], { day: "2-digit", month: "long", year: "numeric" }).format(new Date(`${date}T12:00:00+02:00`));
}

function Countdown({ labels, target }: { labels: string[]; target: number }) {
  const [left, setLeft] = useState(() => Math.max(0, target - Date.now()));
  useEffect(() => { const id = window.setInterval(() => setLeft(Math.max(0, target - Date.now())), 1000); return () => window.clearInterval(id); }, [target]);
  const values = [Math.floor(left / 86400000), Math.floor(left / 3600000) % 24, Math.floor(left / 60000) % 60, Math.floor(left / 1000) % 60];
  return <div className="countdown" aria-label="Countdown to release">{values.map((v, i) => <div key={labels[i]}><strong>{String(v).padStart(2, "0")}</strong><span>{labels[i]}</span></div>)}</div>;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("de");
  const t = copy[lang];
  const nextRelease = editions.find(edition => releaseTime(edition.date) > Date.now()) ?? editions[editions.length - 1];
  const nextReleaseTime = releaseTime(nextRelease.date);
  return <main>
    <header className="topbar">
      <a className="brand" href="#top">HUMANITY WINS</a>
      <nav>{t.nav.map((n, i) => <a key={n} href={["#mission", "#versions", "#story", "#contact"][i]}>{n}</a>)}</nav>
      <select aria-label="Language" value={lang} onChange={e => setLang(e.target.value as Lang)}><option value="de">DE</option><option value="en">EN</option><option value="fr">FR</option><option value="es">ES</option><option value="bs">BS</option></select>
    </header>

    <section className="hero" id="top"><div className="stars"/><div className="heroText"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="lead">{t.lead}</p><div className="release"><span>{t.releaseLabel}</span><strong>{t.releaseDate}</strong></div><p className="nextRelease">NEXT RELEASE · {nextRelease.title} · {formatReleaseDate(nextRelease.date, lang)}</p><Countdown labels={t.units} target={nextReleaseTime}/><a className="button" href="#versions">{t.cta}</a></div><div className="coverWrap"><img className="cover" src="/world-cover.png" alt="Imagine Humanity Wins World Edition cover"/><span className="preRelease">PRE-RELEASE</span></div></section>

    <section className="manifesto" id="mission"><p className="sectionNo">01 — THE MISSION</p><h2>{t.missionTitle}</h2><p>{t.mission}</p><div className="numbers"><div><strong>21</strong><span>Languages</span></div><div><strong>22</strong><span>Daily releases</span></div><div><strong>1</strong><span>Shared message</span></div></div></section>

    <section className="releaseStory"><div><p className="sectionNo">02 — THE RELEASE</p><h2>{t.releaseTitle}</h2><p>{t.releaseCopy}</p></div><div className="platforms" aria-label="Planned music platforms">{["Spotify", "Apple Music", "Amazon Music", "YouTube Music", "Deezer"].map(platform => <span key={platform}>{platform}<small>{t.streamSoon}</small></span>)}</div></section>

    <section className="journey" aria-labelledby="journey-title"><div className="sectionHeading"><p className="sectionNo">03 — RELEASE JOURNEY</p><h2 id="journey-title">{t.journeyTitle}</h2><p>{t.journeyIntro}</p></div><div className="journeyTrack">{editions.map((edition, i) => { const released = Date.now() >= releaseTime(edition.date); const current = edition.code === nextRelease.code; return <div className={`journeyStop ${released ? "isReleased" : ""} ${current ? "isNext" : ""}`} key={edition.code}><span className="journeyDot"/><b>{String(i + 1).padStart(2, "0")}</b><strong>{edition.code}</strong><small>{new Intl.DateTimeFormat(dateLocales[lang], { day: "2-digit", month: "short" }).format(new Date(`${edition.date}T12:00:00+02:00`))}</small></div>; })}</div></section>

    <section className="versions" id="versions"><div className="sectionHeading"><p className="sectionNo">04 — THE EDITIONS</p><h2>{t.languagesTitle}</h2><p>{t.languagesIntro}</p></div><div className="editionGrid">{editions.map((edition, i) => {
      const released = Date.now() >= releaseTime(edition.date);
      const dateLabel = formatReleaseDate(edition.date, lang);
      return <article className="edition" key={edition.code}><div><span className="editionNo">{String(i + 1).padStart(2, "0")}</span><b>{edition.code}</b></div><h3>{edition.name}</h3><p className="editionTitle">{edition.title}</p><p>{t.coming}: <strong>{dateLabel}</strong></p><button type="button" disabled aria-label={`${edition.title}: ${dateLabel}`}>{released ? t.streamLive : t.streamSoon}</button></article>;
    })}</div></section>

    <section className="namesake" id="story"><p className="sectionNo">05 — {t.storyKicker}</p><h2>{t.storyTitle}</h2><p>{t.story}</p><a href="https://www.amazon.de/NAME-PEACE-Way-World-Peace/dp/0595516149" target="_blank" rel="noreferrer">{t.book} ↗</a></section>

    <section className="support"><p className="sectionNo">06 — UNITED HUMANITY</p><h2>{t.supportTitle}</h2><p>{t.support}</p><p className="donation">{t.donation}</p></section>

    <section className="press"><div><p className="sectionNo">07 — PRESS & MEDIA</p><h2>{t.pressTitle}</h2><p>{t.pressCopy}</p><a className="button" href="mailto:press@humanitywins.world?subject=Humanity%20Wins%20Press%20Inquiry">{t.pressButton}</a></div><div className="pressCards"><article><span>PRESS CONTACT</span><strong>press@humanitywins.world</strong><p>Interviews · editorial enquiries · media cooperation</p></article><article><span>MEDIA MATERIAL</span><strong>Humanity Wins</strong><p>Logo, covers and press kit will be published here before launch.</p></article></div></section>

    <section className="contact" id="contact"><div><p className="sectionNo">08 — CONTACT</p><h2>{t.contactTitle}</h2><p>{t.contactCopy}</p></div><div className="contactGrid"><a href="mailto:hello@humanitywins.world"><span>General</span>hello@humanitywins.world</a><a href="mailto:press@humanitywins.world"><span>Press</span>press@humanitywins.world</a><a href="mailto:partners@humanitywins.world"><span>Partners</span>partners@humanitywins.world</a><a href="mailto:legal@humanitywins.world"><span>Legal</span>legal@humanitywins.world</a></div></section>

    <footer><img src="/humanity-wins-logo.png" alt="Humanity Wins"/><p>{t.footer}</p><div className="footerContact"><a href="mailto:hello@humanitywins.world">hello@humanitywins.world</a><a href="mailto:press@humanitywins.world">press@humanitywins.world</a><a href="mailto:partners@humanitywins.world">partners@humanitywins.world</a></div><div className="footerLinks"><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><a href="mailto:support@humanitywins.world">Support</a><a href="mailto:join@unitedhumanity.world">Join United Humanity</a></div><small>© 2026 Humanity Wins · UNITED HUMANITY · Website V5</small></footer>
  </main>;
}
