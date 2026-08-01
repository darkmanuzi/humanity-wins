"use client";

import { useEffect, useMemo, useState } from "react";

type Lang = "de" | "en" | "fr" | "es" | "bs";

const copy = {
  de: {
    nav: ["Mission", "Musik", "Geschichte", "Unterstützen"],
    eyebrow: "WORLD PEACE PROJECT · 21 SPRACHEN · EINE BOTSCHAFT",
    title: "Stell dir vor, Menschlichkeit gewinnt.",
    lead: "Ein Lied gegen Krieg – gesungen in 21 Sprachen und vereint in einer gemeinsamen World Edition.",
    release: "Weltpremiere am Internationalen Tag des Friedens",
    listen: "Die Reise entdecken",
    units: ["Tage", "Stunden", "Minuten", "Sekunden"],
    manifestoTitle: "Eine Menschheit. Eine Zukunft.",
    manifesto: "HUMANITY WINS ist mehr als ein Lied. Es ist der Versuch, eine einfache Wahrheit hörbar zu machen: Kein Mensch wird als Feind geboren. Grenzen trennen Staaten – nicht unsere Menschlichkeit.",
    numbers: [["21", "Sprachen"], ["21", "Ländereditionen"], ["1", "gemeinsame Botschaft"]],
    journeyTitle: "21 Tage. 21 Stimmen. Ein Ziel.",
    journey: "Vom 31. August bis zum 20. September erscheint täglich eine neue Sprachversion. Am 21. September vereinen sich alle Stimmen in der World Edition.",
    storyKicker: "EINE AUSSERGEWÖHNLICHE PARALLELE",
    storyTitle: "Ein seltener Name. Zwei Kontinente. Eine Überzeugung.",
    story: "Soweit uns bekannt ist, haben zwei Männer mit dem außergewöhnlich seltenen Namen Uzeir Huskic – unabhängig voneinander und auf verschiedenen Kontinenten – ihr Wirken demselben Ideal gewidmet: dem Frieden. Einer schuf HUMANITY WINS. Der andere veröffentlichte das Buch „In the Name of Peace“.",
    book: "Das Buch entdecken",
    supportTitle: "Mach die Botschaft größer.",
    support: "Höre. Teile. Sprich darüber. Jeder weitergetragene Ton ist eine Entscheidung für Menschlichkeit.",
    donation: "Von jedem Download zum Preis von 1,29 US-Dollar werden 0,30 US-Dollar für einen Friedenszweck vorgesehen. Empfänger und Abrechnung werden transparent veröffentlicht.",
    footer: "Musik kann keinen Frieden erzwingen. Aber sie kann Menschen daran erinnern, dass Frieden möglich ist.",
  },
  en: {
    nav: ["Mission", "Music", "Story", "Support"], eyebrow: "WORLD PEACE PROJECT · 21 LANGUAGES · ONE MESSAGE", title: "Imagine humanity wins.", lead: "One song against war – sung in 21 languages and united in one World Edition.", release: "World premiere on the International Day of Peace", listen: "Discover the journey", units: ["Days", "Hours", "Minutes", "Seconds"], manifestoTitle: "One humanity. One future.", manifesto: "HUMANITY WINS is more than a song. It makes a simple truth audible: no human being is born an enemy. Borders divide states – not our humanity.", numbers: [["21", "Languages"], ["21", "Country editions"], ["1", "Shared message"]], journeyTitle: "21 days. 21 voices. One purpose.", journey: "From 31 August to 20 September, a new language edition will be released every day. On 21 September, every voice joins the World Edition.", storyKicker: "AN EXTRAORDINARY PARALLEL", storyTitle: "One rare name. Two continents. One conviction.", story: "As far as we know, two men bearing the extraordinarily rare name Uzeir Huskic – on different continents and following independent paths – devoted their work to the same ideal: peace. One created HUMANITY WINS. The other published the book ‘In the Name of Peace’.", book: "Discover the book", supportTitle: "Make the message greater.", support: "Listen. Share. Speak about it. Every note carried forward is a choice for humanity.", donation: "From every US$1.29 download, US$0.30 is intended for a peace-related cause. The recipient and accounting will be published transparently.", footer: "Music cannot force peace. But it can remind people that peace is possible.",
  },
  fr: {
    nav: ["Mission", "Musique", "Histoire", "Soutenir"], eyebrow: "PROJET POUR LA PAIX · 21 LANGUES · UN MESSAGE", title: "Imaginez que l’humanité gagne.", lead: "Une chanson contre la guerre – chantée en 21 langues et réunie dans une édition mondiale.", release: "Première mondiale lors de la Journée internationale de la paix", listen: "Découvrir le voyage", units: ["Jours", "Heures", "Minutes", "Secondes"], manifestoTitle: "Une humanité. Un avenir.", manifesto: "HUMANITY WINS est plus qu’une chanson. Elle rend audible une vérité simple : personne ne naît ennemi. Les frontières séparent les États, pas notre humanité.", numbers: [["21", "Langues"], ["21", "Éditions"], ["1", "Message commun"]], journeyTitle: "21 jours. 21 voix. Un but.", journey: "Du 31 août au 20 septembre, une nouvelle version paraît chaque jour. Le 21 septembre, toutes les voix s’unissent.", storyKicker: "UN PARALLÈLE EXTRAORDINAIRE", storyTitle: "Un nom rare. Deux continents. Une conviction.", story: "À notre connaissance, deux hommes portant le nom exceptionnellement rare d’Uzeir Huskic ont consacré, indépendamment et sur deux continents, leur travail au même idéal : la paix.", book: "Découvrir le livre", supportTitle: "Faites grandir le message.", support: "Écoutez. Partagez. Parlez-en.", donation: "Pour chaque téléchargement à 1,29 USD, 0,30 USD sont destinés à une cause pour la paix. Le bénéficiaire et les comptes seront publiés en toute transparence.", footer: "La musique ne peut imposer la paix. Elle peut rappeler qu’elle est possible.",
  },
  es: {
    nav: ["Misión", "Música", "Historia", "Apoyar"], eyebrow: "PROYECTO DE PAZ · 21 IDIOMAS · UN MENSAJE", title: "Imagina que gana la humanidad.", lead: "Una canción contra la guerra, cantada en 21 idiomas y unida en una edición mundial.", release: "Estreno mundial en el Día Internacional de la Paz", listen: "Descubrir el viaje", units: ["Días", "Horas", "Minutos", "Segundos"], manifestoTitle: "Una humanidad. Un futuro.", manifesto: "HUMANITY WINS es más que una canción. Hace audible una verdad sencilla: nadie nace enemigo. Las fronteras separan Estados, no nuestra humanidad.", numbers: [["21", "Idiomas"], ["21", "Ediciones"], ["1", "Mensaje común"]], journeyTitle: "21 días. 21 voces. Un propósito.", journey: "Del 31 de agosto al 20 de septiembre se publica una nueva versión cada día. El 21 de septiembre todas las voces se unen.", storyKicker: "UN PARALELO EXTRAORDINARIO", storyTitle: "Un nombre poco común. Dos continentes. Una convicción.", story: "Hasta donde sabemos, dos hombres llamados Uzeir Huskic dedicaron, de forma independiente y en continentes distintos, su trabajo al mismo ideal: la paz.", book: "Descubrir el libro", supportTitle: "Haz crecer el mensaje.", support: "Escucha. Comparte. Habla de ello.", donation: "De cada descarga de 1,29 USD, 0,30 USD se destinarán a una causa por la paz. El destinatario y las cuentas se publicarán con transparencia.", footer: "La música no puede imponer la paz. Puede recordarnos que es posible.",
  },
  bs: {
    nav: ["Misija", "Muzika", "Priča", "Podrži"], eyebrow: "SVJETSKI PROJEKAT MIRA · 21 JEZIK · JEDNA PORUKA", title: "Zamisli da čovječnost pobijedi.", lead: "Jedna pjesma protiv rata – otpjevana na 21 jeziku i ujedinjena u svjetskom izdanju.", release: "Svjetska premijera na Međunarodni dan mira", listen: "Otkrij putovanje", units: ["Dana", "Sati", "Minuta", "Sekundi"], manifestoTitle: "Jedno čovječanstvo. Jedna budućnost.", manifesto: "HUMANITY WINS je više od pjesme. Ona daje glas jednostavnoj istini: nijedan čovjek nije rođen kao neprijatelj. Granice dijele države – ne našu čovječnost.", numbers: [["21", "Jezik"], ["21", "Izdanje"], ["1", "Zajednička poruka"]], journeyTitle: "21 dan. 21 glas. Jedan cilj.", journey: "Od 31. augusta do 20. septembra svakog dana izlazi nova jezička verzija. Dana 21. septembra svi glasovi se ujedinjuju.", storyKicker: "IZVANREDNA PARALELA", storyTitle: "Jedno rijetko ime. Dva kontinenta. Jedno uvjerenje.", story: "Koliko nam je poznato, dva čovjeka s izuzetno rijetkim imenom Uzeir Huskic, nezavisno i na različitim kontinentima, posvetila su svoj rad istom idealu: miru.", book: "Otkrij knjigu", supportTitle: "Učini poruku većom.", support: "Slušaj. Podijeli. Govori o tome.", donation: "Od svakog preuzimanja po cijeni od 1,29 USD, 0,30 USD namijenjeno je mirovnoj svrsi. Primalac i obračun bit će transparentno objavljeni.", footer: "Muzika ne može nametnuti mir. Ali može podsjetiti ljude da je mir moguć.",
  },
} as const;

function Countdown({ labels }: { labels: readonly string[] }) {
  const target = useMemo(() => new Date("2026-09-21T00:00:00+02:00").getTime(), []);
  const [left, setLeft] = useState(Math.max(0, target - Date.now()));
  useEffect(() => { const id = setInterval(() => setLeft(Math.max(0, target - Date.now())), 1000); return () => clearInterval(id); }, [target]);
  const values = [Math.floor(left / 86400000), Math.floor(left / 3600000) % 24, Math.floor(left / 60000) % 60, Math.floor(left / 1000) % 60];
  return <div className="countdown">{values.map((v, i) => <div key={labels[i]}><strong>{String(v).padStart(2, "0")}</strong><span>{labels[i]}</span></div>)}</div>;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("de");
  const t = copy[lang];
  return <main>
    <header className="topbar"><a className="brand" href="#top">HUMANITY WINS</a><nav>{t.nav.map((n, i) => <a key={n} href={["#mission", "#music", "#story", "#support"][i]}>{n}</a>)}</nav><select aria-label="Language" value={lang} onChange={e => setLang(e.target.value as Lang)}><option value="de">DE</option><option value="en">EN</option><option value="fr">FR</option><option value="es">ES</option><option value="bs">BS</option></select></header>
    <section className="hero" id="top"><div className="stars"/><div className="heroText"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="lead">{t.lead}</p><p className="release">21 · 09 · 2026<br/><span>{t.release}</span></p><Countdown labels={t.units}/><a className="button" href="#music">{t.listen}</a></div><img className="cover" src="./world-cover.png" alt="Imagine Humanity Wins World Edition cover"/></section>
    <section className="manifesto" id="mission"><p className="sectionNo">01 — THE MISSION</p><h2>{t.manifestoTitle}</h2><p>{t.manifesto}</p><div className="numbers">{t.numbers.map(([a,b]) => <div key={b}><strong>{a}</strong><span>{b}</span></div>)}</div></section>
    <section className="journey" id="music"><div><p className="sectionNo">02 — THE RELEASE JOURNEY</p><h2>{t.journeyTitle}</h2><p>{t.journey}</p><div className="line"><span>31.08</span><i/><span>21.09</span></div></div><img src="./world-cover.png" alt="World Edition"/></section>
    <section className="namesake" id="story"><p className="sectionNo">03 — {t.storyKicker}</p><h2>{t.storyTitle}</h2><p>{t.story}</p><a href="https://www.amazon.de/NAME-PEACE-Way-World-Peace/dp/0595516149" target="_blank" rel="noreferrer">{t.book} ↗</a><p className="verify">* “As far as we know” — based on publicly available research. The story will be updated after personal confirmation.</p></section>
    <section className="support" id="support"><p className="sectionNo">04 — UNITED HUMANITY</p><h2>{t.supportTitle}</h2><p>{t.support}</p><p className="donation">{t.donation}</p><div className="actions"><a className="button" href="#top">HUMANITY WINS</a><a className="outline" href="mailto:press@humanitywins.world">PRESS & PARTNERS</a></div></section>
    <footer><img src="./humanity-wins-logo.png" alt="Humanity Wins"/><p>{t.footer}</p><small>© 2026 Humanity Wins · UNITED HUMANITY</small></footer>
  </main>;
}
