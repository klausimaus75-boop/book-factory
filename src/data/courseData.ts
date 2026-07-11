import type { ChecklistGroup, CourseModule, Lesson, ResourceTemplate } from "../types/course";
import { defaultReviewInfo } from "./kdpSources";

const moduleBlueprints = [
  ["00", "Willkommen und Kursvorbereitung", "Richte deinen Kursarbeitsplatz ein und verstehe, wie du parallel an deinem echten Buchprojekt arbeitest.", "Du startest mit klarer Kursroutine, Projektordner und realistischem Veröffentlichungsziel."],
  ["01", "Amazon KDP verstehen", "Verstehe die Rolle von Amazon KDP, Selfpublishing und den wichtigsten Entscheidungen vor dem ersten Buch.", "Du kannst einschätzen, wie KDP in dein Buchprojekt passt und welche Entscheidungen später regelabhängig geprüft werden müssen."],
  ["02", "Die richtige Buchidee finden", "Entwickle Buchideen, die aus Zielgruppe, Nutzen und Nachfrage entstehen statt aus Bauchgefühl.", "Du hast mehrere prüfbare Buchideen und wählst eine belastbare Richtung aus."],
  ["03", "Zielgruppe und Käufer verstehen", "Beschreibe Leser, Käufer, Kaufmotiv und Nutzungssituation so konkret, dass dein Buch klarer wird.", "Du formulierst eine Zielgruppenlogik, die Titel, Inhalt, Cover und Listing steuert."],
  ["04", "Markt- und Konkurrenzanalyse", "Analysiere Konkurrenzprodukte strukturiert, ohne dich von Einzelbeispielen blenden zu lassen.", "Du erkennst Chancen, Qualitätsniveau und Positionierungslücken im Markt."],
  ["05", "Das Buchkonzept entwickeln", "Verbinde Idee, Zielgruppe, Nutzenversprechen und Struktur zu einem konkreten Buchplan.", "Du hast ein Buchkonzept, das vor Manuskript und Design als Entscheidungsgrundlage dient."],
  ["06", "Manuskript und Inhalt erstellen", "Plane und produziere Inhalt in Etappen, die zu deinem Buchtyp und Qualitätsanspruch passen.", "Du besitzt einen umsetzbaren Schreib- oder Produktionsplan mit Prüfstellen."],
  ["07", "Buchsatz und Innengestaltung", "Gestalte den Innenbereich lesbar, konsistent und passend zu Format und Nutzung.", "Du kannst Innenlayout und Buchsatz anhand klarer Qualitätskriterien prüfen."],
  ["08", "Das verkaufende Buchcover", "Entwickle ein Cover-Briefing, das Genre, Nutzen, Lesbarkeit und Kaufentscheidung berücksichtigt.", "Du kannst Cover-Entwürfe bewerten und gezielt verbessern."],
  ["09", "Keywords und Amazon-Suchoptimierung", "Sammle und ordne Suchbegriffe, ohne Keyword-Stuffing oder unklare Versprechen zu erzeugen.", "Du hast eine Keyword-Liste, die Listing und Positionierung unterstützt."],
  ["10", "Kategorien und Positionierung", "Wähle Kategorien und Positionierung bewusst, statt nur nach scheinbar leichter Konkurrenz zu suchen.", "Du kannst deine Kategorieentscheidungen dokumentieren und später überprüfen."],
  ["11", "Buchbeschreibung und Amazon-Produktseite", "Schreibe eine Produktseite, die Nutzen, Zielgruppe und Vertrauen klar verbindet.", "Du hast eine strukturierte Buchbeschreibung und Produktseiten-Checkliste."],
  ["12", "Buch auf KDP veröffentlichen", "Bereite Dateien, Metadaten und Upload-Schritte kontrolliert vor.", "Du kannst den Upload mit Checkliste durchführen und typische Flüchtigkeitsfehler vermeiden."],
  ["13", "Amazon A+ Content", "Plane ergänzende Produktinhalte, die visuell erklären, für wen das Buch geeignet ist.", "Du hast ein A+ Content Konzept, das zur Buchpositionierung passt."],
  ["14", "Buchlaunch", "Plane die erste Veröffentlichungsphase mit realistischen Maßnahmen und Kontrollpunkten.", "Du hast einen Launchplan, der Sichtbarkeit, Qualitätssicherung und Feedback verbindet."],
  ["15", "Amazon Werbung", "Verstehe Ads als kontrolliertes Testsystem statt als garantierten Verkaufshebel.", "Du kannst Kampagnenideen vorbereiten und Kennzahlen bewusst beobachten."],
  ["16", "Verkäufe analysieren und Buch optimieren", "Nutze Daten und Feedback, um Listing, Preis, Cover oder Inhalt gezielt zu verbessern.", "Du hast einen Optimierungsrhythmus statt zufälliger Änderungen."],
  ["17", "Vom einzelnen Buch zum Buchsystem", "Denke dein erstes Buch als Grundlage für Reihen, Varianten und wiederholbare Prozesse.", "Du erkennst, wie aus einem Projekt ein langfristiges Buchsystem entstehen kann."]
] as const;

function createLesson(moduleId: string, moduleNumber: string, moduleTitle: string, index: number, title: string): Lesson {
  const lessonNumber = `${moduleNumber}.${index}`;
  const focus = index === 1 ? "verstehen und einordnen" : index === 2 ? "am eigenen Projekt anwenden" : "prüfen und abschließen";
  return {
    id: `${moduleId}-lesson-${index}`,
    moduleId,
    lessonNumber,
    title,
    learningGoal: `Du kannst ${moduleTitle} praktisch ${focus} und eine konkrete Entscheidung für dein Buchprojekt dokumentieren.`,
    estimatedDuration: index === 1 ? "25 Minuten" : index === 2 ? "35 Minuten" : "20 Minuten",
    contentSections: [
      {
        heading: "Einführung",
        body: `Diese Lektion ordnet ${moduleTitle} in den gesamten KDP-Prozess ein. Du lernst nicht nur Theorie, sondern triffst eine Entscheidung, die dein echtes Buchprojekt weiterbringt.`,
        review: defaultReviewInfo
      },
      {
        heading: "Warum dieser Schritt wichtig ist",
        body: `Viele Anfänger springen zu früh zum nächsten sichtbaren Ergebnis. In dieser Lektion reduzierst du Unsicherheit, indem du den aktuellen Schritt bewusst mit Zielgruppe, Markt und Veröffentlichungsziel verbindest.`
      }
    ],
    video: {
      title: `${lessonNumber} ${title}`,
      duration: index === 2 ? "12:00" : "08:00",
      status: "planned"
    },
    steps: [
      `Lies die Einführung zu ${moduleTitle}.`,
      "Übertrage die Leitfragen auf dein eigenes Buchprojekt.",
      "Notiere eine konkrete Entscheidung und eine offene Frage.",
      "Prüfe deine Notizen anhand der Checkliste."
    ],
    examples: [
      `Beispiel: Ein Anfängerprojekt entscheidet bei "${moduleTitle}" nicht aus Bauchgefühl, sondern dokumentiert Ziel, Annahme und nächsten Prüfschritt.`,
      "Beispiel: Eine unklare Idee wird erst weitergeführt, wenn Zielgruppe, Nutzen und nächster Arbeitsschritt schriftlich feststehen."
    ],
    downloads: [
      { title: `${moduleTitle} Arbeitsblatt`, type: "worksheet" },
      { title: `${moduleTitle} Kurzcheck`, type: "checklist" }
    ],
    tasks: [
      `Bearbeite das Arbeitsblatt zu ${moduleTitle}.`,
      "Speichere die wichtigste Entscheidung in deinem Buchprojekt.",
      "Hake die passende Checkliste ab."
    ],
    quiz: [
      {
        question: `Was ist das Ziel dieser Lektion zu ${moduleTitle}?`,
        options: ["Schnell veröffentlichen", "Eine belastbare Projektentscheidung treffen", "Nur Videos ansehen"],
        answer: "Eine belastbare Projektentscheidung treffen"
      }
    ],
    completionRequirement: "Alle Pflichtaufgaben dieser Lektion müssen abgehakt sein."
  };
}

export const courseModules: CourseModule[] = moduleBlueprints.map(([moduleNumber, title, description, learningGoal]) => {
  const id = `module-${moduleNumber}`;
  const lessonTitles = [
    `${title}: Orientierung`,
    `${title}: Umsetzung am Buchprojekt`,
    `${title}: Qualitätscheck`
  ];
  return {
    id,
    moduleNumber,
    title,
    description,
    learningGoal,
    estimatedDuration: moduleNumber === "00" ? "1 Stunde" : "2-3 Stunden",
    lessons: lessonTitles.map((lessonTitle, index) => createLesson(id, moduleNumber, title, index + 1, lessonTitle))
  };
});

export const allLessons = courseModules.flatMap((module) => module.lessons);

export const journeySteps = ["Idee", "Marktanalyse", "Buchkonzept", "Manuskript", "Cover", "KDP", "Launch", "Werbung", "Optimierung"];

export const checklistGroups: ChecklistGroup[] = [
  "Projektstart", "Buchidee", "Marktanalyse", "Manuskript", "Buchsatz", "Cover", "Keywords", "Kategorien", "KDP Upload", "Veröffentlichung", "A+ Content", "Launch", "Amazon Ads", "Optimierung"
].map((title, index) => ({
  id: `checklist-${index + 1}`,
  title,
  items: [
    `${title}: Ziel und Entscheidung dokumentieren`,
    `${title}: wichtigste Risiken prüfen`,
    `${title}: Ergebnis im Buchprojekt festhalten`
  ]
}));

export const resourceTemplates: ResourceTemplate[] = [
  "Buchplanung", "Zielgruppenanalyse", "Konkurrenzanalyse", "Keyword-Recherche", "Buchkonzept", "Manuskriptprüfung", "Coverprüfung", "KDP Upload", "A+ Content", "Launchplanung", "Amazon Ads"
].map((category, index) => ({
  id: `template-${index + 1}`,
  category,
  title: `${category} Vorlage`,
  description: `Strukturierte Vorlage für ${category.toLowerCase()}, damit Entscheidungen nachvollziehbar bleiben.`,
  fields: ["Ziel", "Eingaben", "Entscheidung", "Nächster Schritt"]
}));
