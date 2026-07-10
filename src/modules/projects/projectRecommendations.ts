import { projectSelectOptions } from "./projectOptions";
import type { ProjectFormValues } from "./types";

type OptionKey =
  | "topic"
  | "targetAudience"
  | "bookFormat"
  | "pageCount"
  | "narrativePerspective"
  | "styleAndTone";

type RecommendedOptions = Pick<typeof projectSelectOptions, OptionKey>;

const bookTypeRecommendations: Record<string, Partial<RecommendedOptions>> = {
  Kinderbuch: {
    topic: ["Abenteuer", "Freundschaft", "Mut", "Familie", "Magie", "Tiere", "Schule", "Einschlafen"],
    targetAudience: ["Kleinkinder", "Kindergartenkinder", "Vorschulkinder", "Erstleser", "Grundschulkinder"],
    bookFormat: ["Bilderbuch", "Vorlesebuch", "Erstlesebuch", "8,5 x 8,5 Zoll / 215,9 x 215,9 mm", "8,5 x 11 Zoll / 215,9 x 279,4 mm"],
    pageCount: ["24", "28", "32", "36", "40", "48"],
    narrativePerspective: ["Dritte Person", "Ich-Perspektive", "Direkte Ansprache des Lesers", "Reimform", "Märchenhafte Erzählweise"],
    styleAndTone: ["Warm, klar und altersgerecht", "Liebevoll und beruhigend", "Humorvoll und verspielt", "Magisch und fantasievoll", "Einfach und sehr verständlich"]
  },
  Bilderbuch: {
    topic: ["Abenteuer", "Freundschaft", "Familie", "Tiere", "Jahreszeiten", "Einschlafen", "Gefühle verstehen"],
    targetAudience: ["Kleinkinder", "Kindergartenkinder", "Vorschulkinder", "Eltern"],
    bookFormat: ["Bilderbuch", "Pappbilderbuch", "8,5 x 8,5 Zoll / 215,9 x 215,9 mm", "8,5 x 11 Zoll / 215,9 x 279,4 mm"],
    pageCount: ["16", "20", "24", "28", "32"],
    narrativePerspective: ["Dritte Person", "Direkte Ansprache des Lesers", "Reimform"],
    styleAndTone: ["Warm, klar und altersgerecht", "Liebevoll und beruhigend", "Poetisch und literarisch", "Einfach und sehr verständlich"]
  },
  Thriller: {
    topic: ["Mordfall", "Verschwörung", "Geheimnis", "Überleben", "Rache", "Kleinstadtgeheimnis", "Psychologie"],
    targetAudience: ["Erwachsene", "Thriller-Fans", "Nischenpublikum"],
    bookFormat: ["5 x 8 Zoll / 127 x 203,2 mm", "5,5 x 8,5 Zoll / 139,7 x 215,9 mm", "6 x 9 Zoll / 152,4 x 228,6 mm", "E-Book / flexibles digitales Format"],
    pageCount: ["180", "200", "240", "300"],
    narrativePerspective: ["Ich-Perspektive", "Dritte Person", "Personaler Erzähler", "Multiperspektivisch", "Wechselnde Perspektiven"],
    styleAndTone: ["Spannend und temporeich", "Düster und atmosphärisch", "Psychologisch intensiv", "Kompakt und direkt"]
  },
  Roman: {
    topic: ["Liebe", "Familie", "Selbstfindung", "Neuanfang", "Coming-of-Age", "Geschichte", "Reisen"],
    targetAudience: ["Erwachsene", "Young Adult", "Romance-Leser", "Sachbuch-Leser"],
    bookFormat: ["5 x 8 Zoll / 127 x 203,2 mm", "5,5 x 8,5 Zoll / 139,7 x 215,9 mm", "6 x 9 Zoll / 152,4 x 228,6 mm", "E-Book / flexibles digitales Format"],
    pageCount: ["180", "200", "240", "300"],
    narrativePerspective: ["Ich-Perspektive", "Dritte Person", "Personaler Erzähler", "Allwissender Erzähler", "Multiperspektivisch"],
    styleAndTone: ["Poetisch und literarisch", "Romantisch und emotional", "Ruhig und reflektierend", "Storytelling-orientiert"]
  },
  Fantasy: {
    topic: ["Magie", "Weltenbau", "Drachen", "Monster", "Abenteuer", "Dystopie"],
    targetAudience: ["Teenager", "Young Adult", "Erwachsene", "Fantasy-Fans"],
    bookFormat: ["5,5 x 8,5 Zoll / 139,7 x 215,9 mm", "6 x 9 Zoll / 152,4 x 228,6 mm", "E-Book / flexibles digitales Format"],
    pageCount: ["200", "240", "300"],
    narrativePerspective: ["Dritte Person", "Personaler Erzähler", "Allwissender Erzähler", "Multiperspektivisch"],
    styleAndTone: ["Episch und bildgewaltig", "Magisch und fantasievoll", "Spannend und temporeich", "Storytelling-orientiert"]
  },
  "Malbuch": {
    topic: ["Tiere", "Mandala", "Dinosaurier", "Einhörner", "Fahrzeuge", "Jahreszeiten", "Feiertage"],
    targetAudience: ["Kindergartenkinder", "Vorschulkinder", "Grundschulkinder", "Erwachsene", "Hobbyisten"],
    bookFormat: ["8,5 x 11 Zoll / 215,9 x 279,4 mm", "A4 / 210 x 297 mm", "Ausmalbuch mit einseitigem Druck"],
    pageCount: ["48", "64", "80", "96", "100"],
    narrativePerspective: ["Nicht erzählend / strukturierter Inhalt", "Minimaler Text"],
    styleAndTone: ["Visuell gedacht mit wenig Text", "Minimalistisch und klar", "Ruhig und reflektierend"]
  },
  "Ausmalbuch": {
    topic: ["Tiere", "Mandala", "Dinosaurier", "Einhörner", "Fahrzeuge", "Jahreszeiten", "Feiertage"],
    targetAudience: ["Kindergartenkinder", "Vorschulkinder", "Grundschulkinder", "Erwachsene", "Hobbyisten"],
    bookFormat: ["8,5 x 11 Zoll / 215,9 x 279,4 mm", "A4 / 210 x 297 mm", "Ausmalbuch mit einseitigem Druck"],
    pageCount: ["48", "64", "80", "96", "100"],
    narrativePerspective: ["Nicht erzählend / strukturierter Inhalt", "Minimaler Text"],
    styleAndTone: ["Visuell gedacht mit wenig Text", "Minimalistisch und klar", "Ruhig und reflektierend"]
  },
  "Activity-Buch": {
    topic: ["Lernen", "Konzentration", "Kreativität", "Schule", "Fahrzeuge", "Tiere", "Jahreszeiten"],
    targetAudience: ["Vorschulkinder", "Erstleser", "Grundschulkinder", "Lehrer und Pädagogen"],
    bookFormat: ["8,5 x 11 Zoll / 215,9 x 279,4 mm", "A4 / 210 x 297 mm", "Workbook-Format"],
    pageCount: ["48", "64", "80", "96", "100", "120"],
    narrativePerspective: ["Workbook-Anleitung", "Schritt-für-Schritt-Anleitung", "Direkte Ansprache des Lesers"],
    styleAndTone: ["Pädagogisch und strukturiert", "Motivierend und ermutigend", "Einfach und sehr verständlich"]
  },
  "Rätselbuch": {
    topic: ["Konzentration", "Detektivgeschichte", "Logik", "Schule", "Lernen", "Gedächtnistraining"],
    targetAudience: ["Grundschulkinder", "Teenager", "Erwachsene", "Senioren", "Hobbyisten"],
    bookFormat: ["8,5 x 11 Zoll / 215,9 x 279,4 mm", "A4 / 210 x 297 mm", "Rätselbuch mit Lösungen"],
    pageCount: ["80", "96", "100", "120", "150"],
    narrativePerspective: ["Nicht erzählend / strukturierter Inhalt", "Schritt-für-Schritt-Anleitung"],
    styleAndTone: ["Kompakt und direkt", "Praktisch und handlungsorientiert", "Motivierend und ermutigend"]
  },
  Ratgeber: {
    topic: ["Achtsamkeit", "Produktivität", "Gesundheit", "Fitness", "Business", "Finanzen", "Karriere", "Psychologie"],
    targetAudience: ["Erwachsene", "Berufstätige", "Selbstständige", "Unternehmer", "Anfänger", "Fortgeschrittene"],
    bookFormat: ["5,5 x 8,5 Zoll / 139,7 x 215,9 mm", "6 x 9 Zoll / 152,4 x 228,6 mm", "E-Book / flexibles digitales Format"],
    pageCount: ["120", "150", "180", "200"],
    narrativePerspective: ["Sachlich erklärend", "Direkte Ansprache des Lesers", "Schritt-für-Schritt-Anleitung"],
    styleAndTone: ["Professionell und sachlich", "Praktisch und handlungsorientiert", "Motivierend und ermutigend", "Kompakt und direkt"]
  },
  Sachbuch: {
    topic: ["Geschichte", "Wissenschaft", "Technologie", "Künstliche Intelligenz", "Business", "Psychologie", "Gesundheit"],
    targetAudience: ["Erwachsene", "Studierende", "Berufstätige", "Sachbuch-Leser", "Fortgeschrittene"],
    bookFormat: ["6 x 9 Zoll / 152,4 x 228,6 mm", "7 x 10 Zoll / 177,8 x 254 mm", "E-Book / flexibles digitales Format"],
    pageCount: ["150", "180", "200", "240", "300"],
    narrativePerspective: ["Sachlich erklärend", "Reportage-Stil", "Schritt-für-Schritt-Anleitung"],
    styleAndTone: ["Professionell und sachlich", "Wissenschaftlich fundiert", "Kompakt und direkt"]
  },
  Notizbuch: {
    topic: ["Notizen", "Projektplanung", "Gewohnheiten", "Dankbarkeit", "Ziele setzen"],
    targetAudience: ["Erwachsene", "Studierende", "Berufstätige", "Kreative", "Planer-Nutzer"],
    bookFormat: ["Notizbuch liniert", "Notizbuch kariert", "Notizbuch punktkariert", "Blanko-Notizbuch", "6 x 9 Zoll / 152,4 x 228,6 mm", "8,5 x 11 Zoll / 215,9 x 279,4 mm"],
    pageCount: ["100", "120", "150", "200"],
    narrativePerspective: ["Nicht erzählend / strukturierter Inhalt", "Minimaler Text"],
    styleAndTone: ["Minimalistisch und klar", "Luxuriös und hochwertig", "KDP-marktorientiert"]
  },
  Planer: {
    topic: ["Ziele setzen", "Projektplanung", "Budgetplanung", "Fitness-Tracking", "Gewohnheiten", "Produktivität"],
    targetAudience: ["Erwachsene", "Berufstätige", "Selbstständige", "Unternehmer", "Planer-Nutzer", "Menschen mit wenig Zeit"],
    bookFormat: ["Planer Tagesansicht", "Planer Wochenansicht", "Planer Monatsansicht", "8,5 x 11 Zoll / 215,9 x 279,4 mm", "A5 / 148 x 210 mm"],
    pageCount: ["120", "150", "180", "200", "240", "365"],
    narrativePerspective: ["Nicht erzählend / strukturierter Inhalt", "Workbook-Anleitung", "Direkte Ansprache des Lesers"],
    styleAndTone: ["Praktisch und handlungsorientiert", "Minimalistisch und klar", "Motivierend und ermutigend", "KDP-marktorientiert"]
  }
};

const ageRecommendations: Record<string, Partial<Pick<RecommendedOptions, "targetAudience" | "styleAndTone" | "narrativePerspective">>> = {
  "0-2 Jahre": {
    targetAudience: ["Kleinkinder", "Eltern"],
    styleAndTone: ["Liebevoll und beruhigend", "Einfach und sehr verständlich", "Warm, klar und altersgerecht"],
    narrativePerspective: ["Direkte Ansprache des Lesers", "Reimform", "Dritte Person"]
  },
  "3-4 Jahre": {
    targetAudience: ["Kindergartenkinder"],
    styleAndTone: ["Warm, klar und altersgerecht", "Humorvoll und verspielt", "Liebevoll und beruhigend"],
    narrativePerspective: ["Dritte Person", "Direkte Ansprache des Lesers", "Reimform"]
  },
  "4-6 Jahre": {
    targetAudience: ["Vorschulkinder"],
    styleAndTone: ["Warm, klar und altersgerecht", "Humorvoll und verspielt", "Magisch und fantasievoll"],
    narrativePerspective: ["Dritte Person", "Direkte Ansprache des Lesers", "Märchenhafte Erzählweise"]
  },
  "5-7 Jahre": {
    targetAudience: ["Vorschulkinder", "Erstleser"],
    styleAndTone: ["Warm, klar und altersgerecht", "Abenteuerlich und spannend", "Einfach und sehr verständlich"],
    narrativePerspective: ["Dritte Person", "Ich-Perspektive", "Direkte Ansprache des Lesers"]
  },
  "6-8 Jahre": {
    targetAudience: ["Erstleser", "Grundschulkinder"],
    styleAndTone: ["Einfach und sehr verständlich", "Motivierend und ermutigend", "Humorvoll und verspielt"],
    narrativePerspective: ["Dritte Person", "Ich-Perspektive", "Dialogbetont"]
  },
  "9-12 Jahre": {
    targetAudience: ["Grundschulkinder"],
    styleAndTone: ["Spannend und temporeich", "Humorvoll und verspielt", "Motivierend und ermutigend"],
    narrativePerspective: ["Ich-Perspektive", "Dritte Person", "Personaler Erzähler"]
  },
  "12-14 Jahre": {
    targetAudience: ["Teenager"],
    styleAndTone: ["Locker und modern", "Spannend und temporeich", "Storytelling-orientiert"],
    narrativePerspective: ["Ich-Perspektive", "Personaler Erzähler", "Multiperspektivisch"]
  },
  "14-16 Jahre": {
    targetAudience: ["Teenager", "Young Adult"],
    styleAndTone: ["Locker und modern", "Psychologisch intensiv", "Spannend und temporeich"],
    narrativePerspective: ["Ich-Perspektive", "Personaler Erzähler", "Wechselnde Perspektiven"]
  },
  "18+": {
    targetAudience: ["Erwachsene"],
    styleAndTone: ["Professionell und sachlich", "Kompakt und direkt", "Praktisch und handlungsorientiert"],
    narrativePerspective: ["Nicht erzählend / strukturierter Inhalt", "Sachlich erklärend", "Direkte Ansprache des Lesers"]
  }
};

function unique(values: string[]): string[] {
  return Array.from(new Set(values));
}

function withCurrent(options: string[], currentValue: string): string[] {
  if (!currentValue.trim() || options.includes(currentValue)) {
    return options;
  }

  return [currentValue, ...options];
}

function mergeOptions(base: string[], bookTypeOptions?: string[], ageOptions?: string[]) {
  if (!bookTypeOptions && !ageOptions) {
    return base;
  }

  return unique([...(ageOptions ?? []), ...(bookTypeOptions ?? [])]);
}

export function getRecommendedProjectOptions(values: ProjectFormValues): RecommendedOptions {
  const bookType = bookTypeRecommendations[values.bookType] ?? {};
  const age = ageRecommendations[values.ageRange] ?? {};

  return {
    topic: withCurrent(bookType.topic ?? projectSelectOptions.topic.slice(0, 12), values.topic),
    targetAudience: withCurrent(
      mergeOptions(projectSelectOptions.targetAudience, bookType.targetAudience, age.targetAudience),
      values.targetAudience
    ),
    bookFormat: withCurrent(bookType.bookFormat ?? projectSelectOptions.bookFormat.slice(0, 12), values.bookFormat),
    pageCount: withCurrent(bookType.pageCount ?? projectSelectOptions.pageCount, values.pageCount),
    narrativePerspective: withCurrent(
      mergeOptions(projectSelectOptions.narrativePerspective, bookType.narrativePerspective, age.narrativePerspective),
      values.narrativePerspective
    ),
    styleAndTone: withCurrent(
      mergeOptions(projectSelectOptions.styleAndTone, bookType.styleAndTone, age.styleAndTone),
      values.styleAndTone
    )
  };
}

export function applyBookTypeRecommendations(values: ProjectFormValues, bookType: string): ProjectFormValues {
  const bookTypeOptions = bookTypeRecommendations[bookType] ?? {};

  return {
    ...values,
    bookType,
    topic: bookTypeOptions.topic?.[0] ?? values.topic,
    targetAudience: bookTypeOptions.targetAudience?.[0] ?? values.targetAudience,
    bookFormat: bookTypeOptions.bookFormat?.[0] ?? values.bookFormat,
    pageCount: bookTypeOptions.pageCount?.[0] ?? values.pageCount,
    narrativePerspective: bookTypeOptions.narrativePerspective?.[0] ?? values.narrativePerspective,
    styleAndTone: bookTypeOptions.styleAndTone?.[0] ?? values.styleAndTone
  };
}

export function applyAgeRangeRecommendations(values: ProjectFormValues, ageRange: string): ProjectFormValues {
  const ageOptions = ageRecommendations[ageRange] ?? {};

  return {
    ...values,
    ageRange,
    targetAudience: ageOptions.targetAudience?.[0] ?? values.targetAudience,
    narrativePerspective: ageOptions.narrativePerspective?.[0] ?? values.narrativePerspective,
    styleAndTone: ageOptions.styleAndTone?.[0] ?? values.styleAndTone
  };
}
