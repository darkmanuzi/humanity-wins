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


type SupportCopy = {
  supportKicker: string; supportTitle: string; supportLead: string; supportUseTitle: string; supportUses: string[];
  amountTitle: string; ownAmount: string; wallOptIn: string; anonymous: string; publicName: string; country: string;
  checkout: string; checkoutNote: string; important: string;
  wallKicker: string; wallTitle: string; wallLead: string; foundingTitle: string; foundingLead: string; wallEmpty: string; equality: string;
  transparencyKicker: string; transparencyTitle: string; transparencyLead: string; sold: string; committed: string; generated: string; transferred: string; recipient: string; recipientTbd: string; reporting: string;
};

const STARTNEXT_URL = "https://www.startnext.com/humanity-wins?utm_source=copy_link&utm_medium=social&utm_campaign=project_share";
const GOFUNDME_URL = "https://www.gofundme.com/f/humanity-wins-21-languages-one-message-one-world";
const GERMAN_EDITION_URL = "https://distrokid.com/hyperfollow/unitedhumanity/imagine-humanity-wins-german-edition-2?ref=release";
const BOSNIAN_EDITION_URL = "https://distrokid.com/hyperfollow/unitedhumanity/imagine-humanity-wins-bosnian-edition-2?ref=release";
const UKRAINIAN_EDITION_URL = "https://distrokid.com/hyperfollow/unitedhumanity/imagine-humanity-wins-ukrainian-edition?ref=release";
const POLISH_EDITION_URL = "https://distrokid.com/hyperfollow/unitedhumanity/imagine-humanity-wins-polish-edition?ref=release";

const editionUrls: Record<string, string> = {
  DE: GERMAN_EDITION_URL,
  BA: BOSNIAN_EDITION_URL,
  UA: UKRAINIAN_EDITION_URL,
  PL: POLISH_EDITION_URL,
};

const liveCopy: Record<Lang, { badge: string; title: string; listen: string; next: string }> = {
  de: { badge: "JETZT VERÖFFENTLICHT", title: "Polish Edition ist live", listen: "Jetzt anhören", next: "Nächste Edition" },
  en: { badge: "OUT NOW", title: "Polish Edition is live", listen: "Listen now", next: "Next edition" },
  fr: { badge: "DISPONIBLE MAINTENANT", title: "La Polish Edition est en ligne", listen: "Écouter maintenant", next: "Prochaine édition" },
  es: { badge: "YA DISPONIBLE", title: "La Polish Edition ya está disponible", listen: "Escuchar ahora", next: "Próxima edición" },
  bs: { badge: "SADA DOSTUPNO", title: "Polish Edition je objavljena", listen: "Slušaj sada", next: "Sljedeće izdanje" },
};

const goFundMeCopy: Record<Lang, { badge: string; title: string; lead: string; cta: string; note: string }> = {
  de: { badge: "OFFIZIELLE GOFUNDME-KAMPAGNE", title: "Hilf uns, HUMANITY WINS in die Welt zu tragen.", lead: "Deine Unterstützung finanziert die unabhängige Weiterentwicklung, Produktion und internationale Sichtbarkeit des Friedensprojekts. Auf GoFundMe findest du die vollständige Kampagnengeschichte und alle aktuellen Informationen.", cta: "Jetzt auf GoFundMe unterstützen", note: "Sichere Abwicklung direkt über GoFundMe · Du entscheidest über deinen Beitrag" },
  en: { badge: "OFFICIAL GOFUNDME CAMPAIGN", title: "Help us carry HUMANITY WINS into the world.", lead: "Your support funds the independent development, production and international reach of this peace project. Visit GoFundMe for the full campaign story and the latest updates.", cta: "Support us on GoFundMe", note: "Securely handled by GoFundMe · You choose your contribution" },
  fr: { badge: "CAMPAGNE GOFUNDME OFFICIELLE", title: "Aidez-nous à faire voyager HUMANITY WINS dans le monde.", lead: "Votre soutien finance le développement indépendant, la production et la portée internationale de ce projet de paix. Retrouvez l’histoire complète et les dernières nouvelles sur GoFundMe.", cta: "Soutenir sur GoFundMe", note: "Paiement sécurisé via GoFundMe · Vous choisissez votre contribution" },
  es: { badge: "CAMPAÑA OFICIAL EN GOFUNDME", title: "Ayúdanos a llevar HUMANITY WINS al mundo.", lead: "Tu apoyo financia el desarrollo independiente, la producción y el alcance internacional de este proyecto de paz. En GoFundMe encontrarás la historia completa y las últimas novedades.", cta: "Apoyar en GoFundMe", note: "Gestión segura a través de GoFundMe · Tú eliges tu aportación" },
  bs: { badge: "ZVANIČNA GOFUNDME KAMPANJA", title: "Pomozite nam da HUMANITY WINS prenesemo u svijet.", lead: "Vaša podrška finansira nezavisan razvoj, produkciju i međunarodni domet ovog mirovnog projekta. Na GoFundMe stranici pronaći ćete cijelu priču kampanje i najnovije informacije.", cta: "Podrži na GoFundMe", note: "Sigurna obrada putem GoFundMe · Vi birate iznos podrške" },
};

const fundingCopy: Record<Lang, { badge: string; title: string; lead: string; cta: string; note: string; alternative: string }> = {
  de: { badge: "FINANZIERUNG LÄUFT JETZT", title: "Jetzt gemeinsam HUMANITY WINS möglich machen.", lead: "Seit dem 3. September 2026 ist HUMANITY WINS offiziell in der Finanzierungsphase bei Startnext. Unterstütze das Friedensprojekt dort direkt und hilf, seine Botschaft in 21 Sprachen in die Welt zu tragen.", cta: "Jetzt auf Startnext unterstützen", note: "Offizielle Finanzierungsphase auf Startnext · Jeder Beitrag bewegt das Projekt", alternative: "Alternative Unterstützung" },
  en: { badge: "FUNDING IS NOW LIVE", title: "Together, we can make HUMANITY WINS possible.", lead: "Since 3 September 2026, HUMANITY WINS has officially been in its funding phase on Startnext. Support the peace project directly and help carry its message to the world in 21 languages.", cta: "Support HUMANITY WINS on Startnext", note: "Official funding phase on Startnext · Every contribution moves the project forward", alternative: "Alternative way to support" },
  fr: { badge: "LA CAMPAGNE EST OUVERTE", title: "Ensemble, rendons HUMANITY WINS possible.", lead: "Depuis le 3 septembre 2026, HUMANITY WINS est officiellement en phase de financement sur Startnext. Soutenez directement le projet de paix et aidez-nous à porter son message dans le monde en 21 langues.", cta: "Soutenir HUMANITY WINS sur Startnext", note: "Phase de financement officielle sur Startnext · Chaque contribution fait avancer le projet", alternative: "Autre possibilité de soutien" },
  es: { badge: "LA FINANCIACIÓN YA ESTÁ ACTIVA", title: "Juntos podemos hacer posible HUMANITY WINS.", lead: "Desde el 3 de septiembre de 2026, HUMANITY WINS está oficialmente en fase de financiación en Startnext. Apoya directamente el proyecto de paz y ayuda a llevar su mensaje al mundo en 21 idiomas.", cta: "Apoyar HUMANITY WINS en Startnext", note: "Fase oficial de financiación en Startnext · Cada contribución impulsa el proyecto", alternative: "Otra forma de apoyar" },
  bs: { badge: "FINANSIRANJE JE SADA AKTIVNO", title: "Zajedno možemo ostvariti HUMANITY WINS.", lead: "Od 3. septembra 2026. HUMANITY WINS je zvanično u fazi finansiranja na platformi Startnext. Podržite mirovni projekat direktno i pomozite da njegova poruka na 21 jeziku stigne u svijet.", cta: "Podrži HUMANITY WINS na Startnextu", note: "Zvanična faza finansiranja na Startnextu · Svaka podrška pokreće projekat naprijed", alternative: "Drugi način podrške" },
};

const supportCopy: Record<Lang, SupportCopy> = {
  de: {
    supportKicker: "SUPPORT THE PROJECT", supportTitle: "Wenn diese Idee existieren soll, kannst du helfen, sie aufzubauen.", supportLead: "HUMANITY WINS ist ein unabhängiges Projekt. Freiwillige Unterstützung hilft bei Schutz, Produktion, Technik, Kommunikation und internationaler Weiterentwicklung – ohne Ranglisten und ohne gekaufte Sichtbarkeit.",
    supportUseTitle: "Wofür Projektunterstützung eingesetzt werden kann", supportUses: ["Marken-, Namens-, Logo- und Designschutz", "Website, technische Infrastruktur und rechtliche Absicherung", "Musik-, Video- und Medienproduktion", "Professionelle Sänger:innen, Musiker:innen und Kreative", "PR, internationale Kommunikation und Präsentationsmaterial", "Projektbezogene Auftritte, Reisen, Veranstaltungen und visuelle Präsentation"],
    amountTitle: "Unterstützungsbetrag wählen", ownAmount: "Eigener Betrag", wallOptIn: "Ich möchte mit Name und Land auf der Wall of Humanity erscheinen.", anonymous: "Anonym unterstützen", publicName: "Öffentlicher Name", country: "Land", checkout: "Sicherer Support-Checkout folgt", checkoutNote: "Der Zahlungsanbieter wird erst nach abschließender rechtlicher und steuerlicher Prüfung aktiviert.", important: "Wichtig: Deine Unterstützung dient der unabhängigen Entwicklung von HUMANITY WINS und seinem Initiator. Sie ist keine gemeinnützige Spende; eine Spendenbescheinigung kann nicht ausgestellt werden. Mittel können für Entwicklung, Schutz, Produktion, Präsentation, Kommunikation und Bekanntmachung des Projekts eingesetzt werden.",
    wallKicker: "THE WALL OF HUMANITY", wallTitle: "Menschen. Nicht Beträge.", wallLead: "Menschen aus aller Welt, die sich hinter eine einfache Idee stellen: HUMANITY WINS. Auf dieser Wall ist eine Unterstützung von 5 € genauso sichtbar wie eine von 5.000 € – der Betrag selbst wird niemals veröffentlicht.", foundingTitle: "FOUNDING WALL OF HUMANITY · 2026", foundingLead: "Für die Menschen, die HUMANITY WINS bereits in seiner Entstehungs- und Aufbauphase unterstützen. Keine Rangfolge. Keine Kategorien. Nur Menschen, die am Anfang dabei waren.", wallEmpty: "Die ersten Founding Supporters erscheinen hier nach dem offiziellen Support-Start.", equality: "Landesflagge + Name + Land. Keine Beträge. Jeder Eintrag gleichwertig. Eine spätere Entfernung bleibt möglich.",
    transparencyKicker: "MUSIC GIVING · TRANSPARENCY", transparencyTitle: "$0.30 from every sold HUMANITY WINS track.", transparencyLead: "Dieser Geldstrom ist vollständig von der Projektunterstützung getrennt. Sobald Verkäufe abgerechnet und ein endgültiger humanitärer Empfänger feststeht, wird die Weitergabe hier nachvollziehbar dokumentiert.", sold: "Berücksichtigte Verkäufe", committed: "Pro verkauftem Titel", generated: "Für Weitergabe entstanden", transferred: "Weitergegeben", recipient: "Empfänger", recipientTbd: "Wird nach finaler Zusammenarbeit benannt", reporting: "Die öffentliche Abrechnung startet nach den ersten bestätigten Verkaufsabrechnungen. Don't just trust us. See it."
  },
  en: {
    supportKicker: "SUPPORT THE PROJECT", supportTitle: "If you believe this idea deserves to exist, you can help build it.", supportLead: "HUMANITY WINS is an independent project. Voluntary support helps fund protection, production, technology, communication and international development — without rankings and without paid visibility.",
    supportUseTitle: "What project support may help fund", supportUses: ["Trademark, name, logo and design protection", "Website, technical infrastructure and legal safeguarding", "Music, video and media production", "Professional singers, musicians and creatives", "PR, international communication and presentation material", "Project-related appearances, travel, events and visual presentation"],
    amountTitle: "Choose a support amount", ownAmount: "Custom amount", wallOptIn: "I would like my name and country to appear on the Wall of Humanity.", anonymous: "Support anonymously", publicName: "Public name", country: "Country", checkout: "Secure support checkout coming soon", checkoutNote: "The payment provider will be activated only after final legal and tax review.", important: "Important: Your contribution supports the independent development of HUMANITY WINS and its creator. It is not a charitable donation and no donation receipt can be issued. Funds may be used for the development, protection, production, presentation, communication and promotion of the project.",
    wallKicker: "THE WALL OF HUMANITY", wallTitle: "People. Not amounts.", wallLead: "People from around the world who choose to stand behind one simple idea: HUMANITY WINS. On this wall, €5 stands beside €5,000 — the amount itself is never published.", foundingTitle: "FOUNDING WALL OF HUMANITY · 2026", foundingLead: "For the people who supported HUMANITY WINS during its creation and early development. No ranking. No tiers. Just the people who were there at the beginning.", wallEmpty: "The first Founding Supporters will appear here after the official support launch.", equality: "Country flag + name + country. No amounts. Every entry equal. Removal remains possible at any time.",
    transparencyKicker: "MUSIC GIVING · TRANSPARENCY", transparencyTitle: "$0.30 from every sold HUMANITY WINS track.", transparencyLead: "This financial stream remains completely separate from project support. Once sales are accounted for and the final humanitarian recipient is confirmed, transfers will be documented here for everyone to see.", sold: "Eligible track sales", committed: "Committed per sold track", generated: "Generated for giving", transferred: "Transferred", recipient: "Recipient", recipientTbd: "To be named after final partnership", reporting: "Public reporting begins after the first confirmed sales statements. Don't just trust us. See it."
  },
  fr: {
    supportKicker: "SOUTENIR LE PROJET", supportTitle: "Si vous pensez que cette idée mérite d'exister, vous pouvez aider à la construire.", supportLead: "HUMANITY WINS est un projet indépendant. Le soutien volontaire contribue à sa protection, sa production, sa technologie, sa communication et son développement international — sans classement ni visibilité achetée.",
    supportUseTitle: "Ce que le soutien au projet peut financer", supportUses: ["Protection de la marque, du nom, du logo et des designs", "Site web, infrastructure technique et protection juridique", "Production musicale, vidéo et média", "Chanteurs, musiciens et créatifs professionnels", "Relations presse, communication internationale et supports", "Présentations, voyages, événements et identité visuelle du projet"],
    amountTitle: "Choisir un montant", ownAmount: "Montant libre", wallOptIn: "Je souhaite apparaître avec mon nom et mon pays sur la Wall of Humanity.", anonymous: "Soutenir anonymement", publicName: "Nom public", country: "Pays", checkout: "Paiement sécurisé bientôt disponible", checkoutNote: "Le prestataire de paiement sera activé après vérification juridique et fiscale finale.", important: "Important : votre contribution soutient le développement indépendant de HUMANITY WINS et de son créateur. Il ne s'agit pas d'un don caritatif et aucun reçu fiscal ne peut être émis. Les fonds peuvent servir au développement, à la protection, à la production, à la présentation, à la communication et à la promotion du projet.",
    wallKicker: "THE WALL OF HUMANITY", wallTitle: "Des personnes. Pas des montants.", wallLead: "Des personnes du monde entier réunies autour d'une idée simple : HUMANITY WINS. Sur ce mur, 5 € côtoient 5 000 € — le montant n'est jamais publié.", foundingTitle: "FOUNDING WALL OF HUMANITY · 2026", foundingLead: "Pour celles et ceux qui soutiennent HUMANITY WINS pendant sa création et sa phase de construction. Aucun classement, aucun niveau.", wallEmpty: "Les premiers Founding Supporters apparaîtront ici après le lancement officiel du soutien.", equality: "Drapeau + nom + pays. Aucun montant. Tous égaux. Suppression possible à tout moment.",
    transparencyKicker: "MUSIC GIVING · TRANSPARENCY", transparencyTitle: "0,30 $ pour chaque titre HUMANITY WINS vendu.", transparencyLead: "Ce flux financier reste entièrement séparé du soutien au projet. Une fois les ventes comptabilisées et le bénéficiaire humanitaire final confirmé, les transferts seront documentés ici.", sold: "Ventes prises en compte", committed: "Par titre vendu", generated: "Généré pour le don", transferred: "Transféré", recipient: "Bénéficiaire", recipientTbd: "Sera nommé après accord final", reporting: "La publication des comptes commencera après les premiers relevés de ventes confirmés. Don't just trust us. See it."
  },
  es: {
    supportKicker: "APOYA EL PROYECTO", supportTitle: "Si crees que esta idea merece existir, puedes ayudar a construirla.", supportLead: "HUMANITY WINS es un proyecto independiente. El apoyo voluntario ayuda a financiar protección, producción, tecnología, comunicación y desarrollo internacional — sin rangos ni visibilidad comprada.",
    supportUseTitle: "En qué puede utilizarse el apoyo", supportUses: ["Protección de marca, nombre, logotipo y diseños", "Web, infraestructura técnica y protección legal", "Producción musical, de vídeo y medios", "Cantantes, músicos y creativos profesionales", "PR, comunicación internacional y material de presentación", "Apariciones, viajes, eventos y presentación visual del proyecto"],
    amountTitle: "Elige un importe", ownAmount: "Importe libre", wallOptIn: "Quiero que mi nombre y país aparezcan en la Wall of Humanity.", anonymous: "Apoyar de forma anónima", publicName: "Nombre público", country: "País", checkout: "Pago seguro próximamente", checkoutNote: "El proveedor de pagos se activará después de la revisión legal y fiscal final.", important: "Importante: tu contribución apoya el desarrollo independiente de HUMANITY WINS y de su creador. No es una donación benéfica y no se puede emitir un recibo de donación. Los fondos pueden utilizarse para el desarrollo, protección, producción, presentación, comunicación y promoción del proyecto.",
    wallKicker: "THE WALL OF HUMANITY", wallTitle: "Personas. No cantidades.", wallLead: "Personas de todo el mundo unidas por una idea sencilla: HUMANITY WINS. En este muro, 5 € están junto a 5.000 € — el importe nunca se publica.", foundingTitle: "FOUNDING WALL OF HUMANITY · 2026", foundingLead: "Para quienes apoyan HUMANITY WINS durante su creación y construcción. Sin rangos. Sin niveles.", wallEmpty: "Los primeros Founding Supporters aparecerán aquí después del lanzamiento oficial del apoyo.", equality: "Bandera + nombre + país. Sin importes. Todos iguales. Se puede solicitar la eliminación en cualquier momento.",
    transparencyKicker: "MUSIC GIVING · TRANSPARENCY", transparencyTitle: "$0.30 por cada canción HUMANITY WINS vendida.", transparencyLead: "Este flujo financiero permanece completamente separado del apoyo al proyecto. Cuando las ventas estén contabilizadas y se confirme el destinatario humanitario, las transferencias se documentarán aquí.", sold: "Ventas contabilizadas", committed: "Por canción vendida", generated: "Generado para donar", transferred: "Transferido", recipient: "Destinatario", recipientTbd: "Se anunciará tras el acuerdo final", reporting: "La publicación comenzará tras los primeros informes de ventas confirmados. Don't just trust us. See it."
  },
  bs: {
    supportKicker: "PODRŽI PROJEKAT", supportTitle: "Ako vjeruješ da ova ideja zaslužuje da postoji, možeš pomoći da je izgradimo.", supportLead: "HUMANITY WINS je nezavisan projekat. Dobrovoljna podrška pomaže zaštiti, produkciji, tehnologiji, komunikaciji i međunarodnom razvoju — bez rangiranja i bez kupljene vidljivosti.",
    supportUseTitle: "Za šta se podrška projektu može koristiti", supportUses: ["Zaštita brenda, imena, logotipa i dizajna", "Web stranica, tehnička infrastruktura i pravna zaštita", "Muzička, video i medijska produkcija", "Profesionalni pjevači, muzičari i kreativci", "PR, međunarodna komunikacija i prezentacijski materijal", "Nastupi, putovanja, događaji i vizuelna prezentacija projekta"],
    amountTitle: "Izaberi iznos podrške", ownAmount: "Drugi iznos", wallOptIn: "Želim da se moje ime i država pojave na Wall of Humanity.", anonymous: "Podrži anonimno", publicName: "Javno ime", country: "Država", checkout: "Sigurno plaćanje uskoro", checkoutNote: "Sistem plaćanja će biti aktiviran nakon završne pravne i poreske provjere.", important: "Važno: Vaša podrška služi nezavisnom razvoju HUMANITY WINS i njegovog kreatora. To nije humanitarna donacija i potvrda o donaciji se ne može izdati. Sredstva se mogu koristiti za razvoj, zaštitu, produkciju, prezentaciju, komunikaciju i promociju projekta.",
    wallKicker: "THE WALL OF HUMANITY", wallTitle: "Ljudi. Ne iznosi.", wallLead: "Ljudi iz cijelog svijeta koji stoje iza jedne jednostavne ideje: HUMANITY WINS. Na ovom zidu 5 € stoji ravnopravno uz 5.000 € — iznos se nikada ne objavljuje.", foundingTitle: "FOUNDING WALL OF HUMANITY · 2026", foundingLead: "Za ljude koji podržavaju HUMANITY WINS tokom njegovog nastanka i izgradnje. Bez rangiranja. Bez nivoa.", wallEmpty: "Prvi Founding Supporters pojavit će se ovdje nakon zvaničnog pokretanja podrške.", equality: "Zastava + ime + država. Bez iznosa. Svi jednaki. Uklanjanje unosa ostaje moguće.",
    transparencyKicker: "MUSIC GIVING · TRANSPARENCY", transparencyTitle: "$0.30 od svake prodane HUMANITY WINS pjesme.", transparencyLead: "Ovaj tok novca je potpuno odvojen od podrške projektu. Nakon potvrđenih prodaja i izbora humanitarnog primaoca, prijenosi će ovdje biti javno dokumentovani.", sold: "Uvažene prodaje", committed: "Po prodanoj pjesmi", generated: "Nastalo za prosljeđivanje", transferred: "Proslijeđeno", recipient: "Primalac", recipientTbd: "Bit će objavljen nakon finalnog dogovora", reporting: "Javno izvještavanje počinje nakon prvih potvrđenih obračuna prodaje. Don't just trust us. See it."
  }
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
  const s = supportCopy[lang];
  const g = goFundMeCopy[lang];
  const f = fundingCopy[lang];
  const live = liveCopy[lang];
  const nextRelease = editions.find(edition => releaseTime(edition.date) > Date.now()) ?? editions[editions.length - 1];
  const nextReleaseTime = releaseTime(nextRelease.date);
  return <main>
    <header className="topbar">
      <a className="brand" href="#top">HUMANITY WINS</a>
      <nav><a href="#mission">{t.nav[0]}</a><a href="#versions">{t.nav[1]}</a><a href="#support">Support</a><a href="#wall">Wall</a><a href="#transparency">Transparency</a><a href="#contact">{t.nav[3]}</a></nav>
      <select aria-label="Language" value={lang} onChange={e => setLang(e.target.value as Lang)}><option value="de">DE</option><option value="en">EN</option><option value="fr">FR</option><option value="es">ES</option><option value="bs">BS</option></select>
    </header>

    <section className="hero" id="top"><div className="stars"/><div className="heroText"><p className="eyebrow">{t.eyebrow}</p><div className="liveAnnouncement"><span>{live.badge}</span><strong>{live.title}</strong></div><h1>{t.title}</h1><p className="lead">{t.lead}</p><div className="release"><span>{t.releaseLabel}</span><strong>{t.releaseDate}</strong></div><p className="nextRelease">{live.next} · {nextRelease.title} · {formatReleaseDate(nextRelease.date, lang)}</p><Countdown labels={t.units} target={nextReleaseTime}/><div className="heroActions"><a className="button liveButton" href={POLISH_EDITION_URL} target="_blank" rel="noopener noreferrer">{live.listen} ↗</a><a className="outlineButton" href="#versions">{t.cta}</a></div></div><div className="coverWrap"><img className="cover" src="/world-cover.png" alt="Imagine Humanity Wins World Edition cover"/><span className="preRelease isLive">{live.badge}</span></div></section>

    <section className="manifesto" id="mission"><p className="sectionNo">01 — THE MISSION</p><h2>{t.missionTitle}</h2><p>{t.mission}</p><div className="numbers"><div><strong>21</strong><span>Languages</span></div><div><strong>22</strong><span>Daily releases</span></div><div><strong>1</strong><span>Shared message</span></div></div></section>

    <section className="releaseStory"><div><p className="sectionNo">02 — THE RELEASE</p><h2>{t.releaseTitle}</h2><p>{t.releaseCopy}</p></div><div className="platforms" aria-label="Music platforms">{["Spotify", "Apple Music", "Amazon Music", "YouTube Music", "Deezer"].map(platform => <a href={POLISH_EDITION_URL} target="_blank" rel="noopener noreferrer" key={platform}>{platform}<small>{live.listen} ↗</small></a>)}</div></section>

    <section className="journey" aria-labelledby="journey-title"><div className="sectionHeading"><p className="sectionNo">03 — RELEASE JOURNEY</p><h2 id="journey-title">{t.journeyTitle}</h2><p>{t.journeyIntro}</p></div><div className="journeyTrack">{editions.map((edition, i) => { const released = Date.now() >= releaseTime(edition.date); const current = edition.code === nextRelease.code; return <div className={`journeyStop ${released ? "isReleased" : ""} ${current ? "isNext" : ""}`} key={edition.code}><span className="journeyDot"/><b>{String(i + 1).padStart(2, "0")}</b><strong>{edition.code}</strong><small>{new Intl.DateTimeFormat(dateLocales[lang], { day: "2-digit", month: "short" }).format(new Date(`${edition.date}T12:00:00+02:00`))}</small></div>; })}</div></section>

    <section className="versions" id="versions"><div className="sectionHeading"><p className="sectionNo">04 — THE EDITIONS</p><h2>{t.languagesTitle}</h2><p>{t.languagesIntro}</p></div><div className="editionGrid">{editions.map((edition, i) => {
      const released = Date.now() >= releaseTime(edition.date);
      const dateLabel = formatReleaseDate(edition.date, lang);
      const editionUrl = editionUrls[edition.code];
      return <article className={`edition ${released ? "editionReleased" : ""}`} key={edition.code}><div><span className="editionNo">{String(i + 1).padStart(2, "0")}</span><b>{edition.code}</b></div><h3>{edition.name}</h3><p className="editionTitle">{edition.title}</p><p>{t.coming}: <strong>{dateLabel}</strong></p>{editionUrl ? <a className="editionListen" href={editionUrl} target="_blank" rel="noopener noreferrer">{live.listen} ↗</a> : <button type="button" disabled aria-label={`${edition.title}: ${dateLabel}`}>{released ? t.streamLive : t.streamSoon}</button>}</article>;
    })}</div></section>

    <section className="namesake" id="story"><p className="sectionNo">05 — {t.storyKicker}</p><h2>{t.storyTitle}</h2><p>{t.story}</p><a href="https://www.amazon.de/NAME-PEACE-Way-World-Peace/dp/0595516149" target="_blank" rel="noreferrer">{t.book} ↗</a></section>

    <section className="supportProject" id="support">
      <div className="supportIntro"><p className="sectionNo">06 — {s.supportKicker}</p><h2>{s.supportTitle}</h2><p>{s.supportLead}</p><div className="supportUses"><strong>{s.supportUseTitle}</strong><ul>{s.supportUses.map(item => <li key={item}>{item}</li>)}</ul></div></div>
      <div className="supportPanel goFundMePanel fundingPanel" aria-label={f.badge}>
        <div className="goFundMeGlow" aria-hidden="true" />
        <p className="goFundMeBadge fundingBadge"><span aria-hidden="true">●</span>{f.badge}</p>
        <h3>{f.title}</h3>
        <p className="goFundMeLead">{f.lead}</p>
        <div className="goFundMeSignal" aria-hidden="true"><span>21</span><i/><span>1</span><i/><span>WORLD</span></div>
        <a className="checkoutButton goFundMeButton" href={STARTNEXT_URL} target="_blank" rel="noopener noreferrer">{f.cta}<span aria-hidden="true">↗</span></a>
        <p className="checkoutNote">{f.note}</p>
        <div className="alternativeFunding">
          <p className="alternativeLabel">{f.alternative}</p>
          <h4>{g.title}</h4>
          <p>{g.lead}</p>
          <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">{g.cta}<span aria-hidden="true">↗</span></a>
          <small>{g.note}</small>
        </div>
        <p className="supportLegal">{s.important}</p>
      </div>
    </section>

    <section className="wallSection" id="wall"><div className="sectionHeading"><p className="sectionNo">07 — {s.wallKicker}</p><h2>{s.wallTitle}</h2><p>{s.wallLead}</p></div><div className="foundingWall"><div className="foundingHeader"><span>2026</span><h3>{s.foundingTitle}</h3><p>{s.foundingLead}</p></div><div className="wallEmpty"><div className="flagRibbon" aria-hidden="true"><span>🇩🇪</span><span>🇧🇦</span><span>🇺🇦</span><span>🇵🇱</span><span>🇹🇷</span><span>🇬🇷</span><span>🇮🇹</span><span>🇫🇷</span><span>🇪🇸</span><span>🇧🇷</span><span>🇯🇵</span><span>🇺🇸</span></div><strong>{s.wallEmpty}</strong><p>{s.equality}</p></div></div></section>

    <section className="transparency" id="transparency"><div className="transparencyIntro"><p className="sectionNo">08 — {s.transparencyKicker}</p><h2>{s.transparencyTitle}</h2><p>{s.transparencyLead}</p></div><div className="transparencyGrid"><article><span>{s.sold}</span><strong>—</strong></article><article><span>{s.committed}</span><strong>$0.30</strong></article><article><span>{s.generated}</span><strong>—</strong></article><article><span>{s.transferred}</span><strong>—</strong></article><article className="recipientCard"><span>{s.recipient}</span><strong>{s.recipientTbd}</strong></article></div><p className="transparencyNote">{s.reporting}</p></section>

    <section className="press"><div><p className="sectionNo">09 — PRESS & MEDIA</p><h2>{t.pressTitle}</h2><p>{t.pressCopy}</p><a className="button" href="mailto:press@humanitywins.world?subject=Humanity%20Wins%20Press%20Inquiry">{t.pressButton}</a></div><div className="pressCards"><article><span>PRESS CONTACT</span><strong>press@humanitywins.world</strong><p>Interviews · editorial enquiries · media cooperation</p></article><article><span>MEDIA MATERIAL</span><strong>Humanity Wins</strong><p>Logo, covers and press kit will be published here before launch.</p></article></div></section>

    <section className="contact" id="contact"><div><p className="sectionNo">10 — CONTACT</p><h2>{t.contactTitle}</h2><p>{t.contactCopy}</p></div><div className="contactGrid"><a href="mailto:hello@humanitywins.world"><span>General</span>hello@humanitywins.world</a><a href="mailto:press@humanitywins.world"><span>Press</span>press@humanitywins.world</a><a href="mailto:partners@humanitywins.world"><span>Partners</span>partners@humanitywins.world</a><a href="mailto:legal@humanitywins.world"><span>Legal</span>legal@humanitywins.world</a></div></section>

    <footer><img src="/humanity-wins-logo.png" alt="Humanity Wins"/><p>{t.footer}</p><div className="footerContact"><a href="mailto:hello@humanitywins.world">hello@humanitywins.world</a><a href="mailto:press@humanitywins.world">press@humanitywins.world</a><a href="mailto:partners@humanitywins.world">partners@humanitywins.world</a></div><div className="footerLinks"><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><a href="mailto:support@humanitywins.world">Support</a><a href="mailto:join@unitedhumanity.world">Join United Humanity</a></div><small>© 2026 Humanity Wins · UNITED HUMANITY · Website V6 · Support · Wall · Transparency</small></footer>
  </main>;
}
