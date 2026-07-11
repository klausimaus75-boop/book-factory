export interface CourseModule {
  slug: string;
  number: string;
  shortTitle: string;
  title: string;
  description: string;
  outcome: string;
  lessons: string[];
  tasks: string[];
  progress: number;
  accent: "violet" | "blue" | "cyan" | "pink";
}

export const courseModules: CourseModule[] = [
  {
    slug: "nische",
    number: "01",
    shortTitle: "Nische",
    title: "Nische finden",
    description: "Finde eine KDP-Nische, die Nachfrage, klare Zielgruppe und realistische Konkurrenz zusammenbringt.",
    outcome: "Am Ende hast du eine validierte Nischenidee mit Suchbegriffen, Zielgruppe und Positionierung.",
    lessons: ["Marktlogik verstehen", "Keywords sammeln", "Konkurrenz bewerten", "Nische eingrenzen"],
    tasks: ["10 Keyword-Ideen sammeln", "3 Konkurrenzprodukte analysieren", "eine klare Zielgruppe notieren"],
    progress: 0,
    accent: "violet"
  },
  {
    slug: "buchkonzept",
    number: "02",
    shortTitle: "Konzept",
    title: "Buchkonzept entwickeln",
    description: "Übersetze deine Nische in ein konkretes Buchversprechen, Seitenstruktur und Nutzenprofil.",
    outcome: "Du hast ein belastbares Konzept, bevor du Zeit in Inhalt, Design oder Listing investierst.",
    lessons: ["Buchversprechen formulieren", "Inhaltsstruktur planen", "Format und Umfang bestimmen", "Leserreise skizzieren"],
    tasks: ["Titelrichtung festlegen", "Kapitel- oder Seitenstruktur erstellen", "Nutzenversprechen prüfen"],
    progress: 0,
    accent: "blue"
  },
  {
    slug: "design",
    number: "03",
    shortTitle: "Design",
    title: "Cover und Innenlayout",
    description: "Baue ein visuelles System, das hochwertig wirkt und auf Amazon sofort verständlich ist.",
    outcome: "Du weißt, welche Designentscheidungen Vertrauen schaffen und welche dein Buch billig wirken lassen.",
    lessons: ["Cover-Hierarchie", "Farbwelt und Typografie", "Innenlayout", "Qualitätscheck"],
    tasks: ["3 Cover-Referenzen sammeln", "Farb- und Schriftstil festlegen", "Innenlayout testen"],
    progress: 0,
    accent: "pink"
  },
  {
    slug: "listing",
    number: "04",
    shortTitle: "Listing",
    title: "Amazon Listing optimieren",
    description: "Erstelle Titel, Untertitel, Beschreibung und Backend-Keywords, die gefunden und verstanden werden.",
    outcome: "Dein Listing erklärt den Nutzen schnell und nutzt die wichtigsten Suchsignale sauber aus.",
    lessons: ["Titel und Untertitel", "Beschreibung schreiben", "Keywords platzieren", "Kategorie wählen"],
    tasks: ["Listing-Text entwerfen", "7 Backend-Keywords prüfen", "Kategorien vergleichen"],
    progress: 0,
    accent: "cyan"
  },
  {
    slug: "launch",
    number: "05",
    shortTitle: "Launch",
    title: "Veröffentlichung und Launch",
    description: "Veröffentliche strukturiert, kontrolliere die wichtigsten Details und plane die ersten Optimierungen.",
    outcome: "Du gehst live mit Checkliste, Kontrollpunkten und einem klaren Plan für die ersten Verkäufe.",
    lessons: ["Upload vorbereiten", "Preview kontrollieren", "Launch-Checkliste", "Nach Launch optimieren"],
    tasks: ["Dateien final prüfen", "Preisstrategie festlegen", "erste Optimierungsrunde planen"],
    progress: 0,
    accent: "violet"
  }
];

export function getCourseModule(slug: string | undefined) {
  return courseModules.find((module) => module.slug === slug);
}
