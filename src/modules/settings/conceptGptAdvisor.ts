import type { Project } from "../projects/types";

export interface ConceptGptRecommendation {
  name: string;
  description: string;
  focus: string;
}

const lowContentTypes = new Set([
  "Malbuch",
  "Ausmalbuch",
  "Activity-Buch",
  "RÃ¤tselbuch",
  "Workbook",
  "Journal",
  "Notizbuch",
  "Tagebuch",
  "Planer",
  "Kalender",
  "Logbuch",
  "Low-Content-Buch",
  "No-Content-Buch"
]);

const fictionTypes = new Set([
  "Roman",
  "Thriller",
  "Krimi",
  "Fantasy",
  "Science-Fiction",
  "Romance",
  "Historischer Roman",
  "Young Adult"
]);

const childrenTypes = new Set(["Kinderbuch", "Bilderbuch", "Lernbuch", "Faktenbuch"]);
const nonfictionTypes = new Set(["Sachbuch", "Ratgeber", "Biografie", "Memoir", "Kochbuch", "Reisebuch"]);

const thrillerTopics = new Set(["True Crime", "Mordfall", "VerschwÃ¶rung", "Geheimnis", "Ãœberleben", "Rache"]);
const fantasyTopics = new Set(["Magie", "Weltenbau", "Drachen", "Monster", "Dystopie", "Zeitreise", "Weltraum"]);
const practicalTopics = new Set([
  "Achtsamkeit",
  "ProduktivitÃ¤t",
  "Gesundheit",
  "Fitness",
  "ErnÃ¤hrung",
  "Business",
  "Finanzen",
  "Karriere",
  "Projektplanung",
  "Budgetplanung",
  "Fitness-Tracking"
]);

export function getConceptGptRecommendation(project: Pick<Project, "bookType" | "topic">): ConceptGptRecommendation {
  if (lowContentTypes.has(project.bookType)) {
    return {
      name: `${project.bookType}-Konzept-GPT`,
      description: "Entwickelt strukturierte Layout-, Seiten- und Nutzungslogiken fuer Low-Content- und Arbeitsbuecher.",
      focus: "Layoutlogik, Seitenstruktur, Nutzwert und KDP-tauglicher Umfang"
    };
  }

  if (project.bookType === "Thriller" || project.bookType === "Krimi" || thrillerTopics.has(project.topic)) {
    return {
      name: "Spannungsroman-Konzept-GPT",
      description: "Entwickelt Konzepte fuer Thriller, Krimis, psychologische Spannung und Mystery-Stoffe.",
      focus: "Spannungsbogen, Konflikt, Wendepunkte, Plausibilitaet und Aufloesung"
    };
  }

  if (project.bookType === "Fantasy" || project.bookType === "Science-Fiction" || fantasyTopics.has(project.topic)) {
    return {
      name: "Worldbuilding-Konzept-GPT",
      description: "Entwickelt Konzepte fuer Fantasy, Science-Fiction und stark weltbasierte Buchideen.",
      focus: "Weltenbau, Regeln, Figurenmotivation, Konfliktlogik und Serienpotenzial"
    };
  }

  if (fictionTypes.has(project.bookType)) {
    return {
      name: `${project.bookType}-Konzept-GPT`,
      description: "Entwickelt erzaehlerische Buchkonzepte fuer Romane und fiktionale Genres.",
      focus: "Figuren, Erzaehlperspektive, Handlung, emotionale Entwicklung und Dramaturgie"
    };
  }

  if (childrenTypes.has(project.bookType)) {
    return {
      name: `${project.bookType}-Konzept-GPT`,
      description: "Entwickelt altersgerechte Buchkonzepte fuer Kinder-, Lern- und Faktenbuecher.",
      focus: "Altersangemessenheit, Verstaendlichkeit, Paedagogik, Tonalitaet und klare Botschaft"
    };
  }

  if (nonfictionTypes.has(project.bookType) || practicalTopics.has(project.topic)) {
    return {
      name: `${project.bookType}-Konzept-GPT`,
      description: "Entwickelt klare Konzepte fuer Sach-, Ratgeber- und praxisorientierte Buchprojekte.",
      focus: "Nutzenversprechen, Struktur, Zielgruppe, Kapitelaufbau und Umsetzbarkeit"
    };
  }

  return {
    name: "Buchkonzept-GPT",
    description: "Entwickelt strukturierte Buchkonzepte fuer alle Bucharten und Genres.",
    focus: "Buchart, Genre, Zielgruppe, Umfang, Struktur und naechster Produktionsschritt"
  };
}
