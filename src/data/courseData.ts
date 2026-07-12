import type { ChecklistGroup, CourseModule, Lesson, ResourceTemplate } from "../types/course";
import { defaultReviewInfo } from "./kdpSources";

type LessonBlueprint = {
  title: string;
  learningGoal: string;
  steps: string[];
  tasks: string[];
  completionRequirement: string;
};

type ModuleBlueprint = {
  moduleNumber: string;
  title: string;
  description: string;
  learningGoal: string;
  estimatedDuration: string;
  outcome: string;
  lessons: LessonBlueprint[];
};

export const moduleOutcomes: Record<string, string> = {
  "module-01": "Du hast eine klare Buchidee.",
  "module-02": "Deine Zielgruppe und Positionierung sind klar.",
  "module-03": "Dein Konzept ist durch den Markt bestätigt.",
  "module-04": "Dein Buchinhalt und Design sind fertig.",
  "module-05": "Dein Buch ist auf Amazon live.",
  "module-06": "Dein Buch wird gesehen und verkauft."
};

const moduleBlueprints: ModuleBlueprint[] = [
  {
    moduleNumber: "01",
    title: "Start & Buchidee",
    description: "Du startest ohne Vorwissen, verstehst den KDP-Weg und entwickelst deine erste belastbare Buchrichtung.",
    learningGoal: "Du weißt, welches Buch du als erstes angehst und warum dieses Projekt realistisch ist.",
    estimatedDuration: "4 Lektionen",
    outcome: "Du hast eine klare Buchidee.",
    lessons: [
      {
        title: "Orientierung: So funktioniert dein KDP-Weg",
        learningGoal: "Du verstehst den Ablauf von Idee bis Veröffentlichung und weißt, was du als Nächstes tun musst.",
        steps: ["Kläre dein Ausgangsniveau.", "Lege dein Kursziel fest.", "Notiere, welche Art Buch du erstellen möchtest.", "Starte dein Buchprojekt mit einer ersten Entscheidung."],
        tasks: ["Notiere dein persönliches Kursziel.", "Wähle eine grobe Buchart aus.", "Lege deinen Arbeitstitel als Platzhalter an."],
        completionRequirement: "Kursziel, Buchart und Arbeitstitel sind notiert."
      },
      {
        title: "Buchideen ohne Bauchgefühl sammeln",
        learningGoal: "Du sammelst mehrere Buchideen, die aus Interessen, Problemen und Käuferbedarf entstehen.",
        steps: ["Sammle Themen, die du erklären oder strukturieren kannst.", "Notiere Probleme, die Käufer gelöst haben wollen.", "Verbinde Thema und Problem zu Buchideen.", "Streiche Ideen, die zu unklar sind."],
        tasks: ["Sammle mindestens 10 Buchideen.", "Markiere die 3 stärksten Ideen.", "Schreibe zu jeder Top-Idee den Nutzen auf."],
        completionRequirement: "Mindestens 3 prüfbare Buchideen stehen fest."
      },
      {
        title: "Eine erste Buchrichtung auswählen",
        learningGoal: "Du entscheidest dich für eine Buchrichtung, die du im Kurs weiter prüfst.",
        steps: ["Vergleiche deine Top-Ideen nach Interesse, Aufwand und Käuferproblem.", "Wähle eine Richtung aus.", "Formuliere das Buchversprechen in einem Satz.", "Halte offene Fragen fest."],
        tasks: ["Wähle eine Buchidee aus.", "Formuliere ein vorläufiges Buchversprechen.", "Notiere 3 offene Annahmen."],
        completionRequirement: "Eine Buchidee und ein Buchversprechen sind festgelegt."
      },
      {
        title: "Projektstart prüfen",
        learningGoal: "Du prüfst, ob dein Projekt klein genug ist, um es wirklich umzusetzen.",
        steps: ["Reduziere den Umfang.", "Definiere das erste Buch als Lernprojekt.", "Lege das Seitenziel fest.", "Plane den nächsten Arbeitsschritt."],
        tasks: ["Setze ein realistisches Seitenziel.", "Notiere den nächsten konkreten Schritt.", "Entferne unnötige Extras aus der Idee."],
        completionRequirement: "Das erste Buchprojekt ist klar begrenzt."
      }
    ]
  },
  {
    moduleNumber: "02",
    title: "Nische & Zielgruppe",
    description: "Du verstehst, für wen dein Buch ist, welches Problem es löst und warum genau diese Käufer danach suchen.",
    learningGoal: "Du kannst Zielgruppe, Käuferproblem und Positionierung konkret beschreiben.",
    estimatedDuration: "4 Lektionen",
    outcome: "Deine Zielgruppe und Positionierung sind klar.",
    lessons: [
      {
        title: "Zielgruppe definieren",
        learningGoal: "Du beschreibst, wer dein Buch kaufen soll und in welcher Situation diese Person ist.",
        steps: ["Beschreibe die Käufergruppe.", "Unterscheide Leser und Käufer.", "Notiere die Nutzungssituation.", "Formuliere eine klare Zielgruppenbeschreibung."],
        tasks: ["Schreibe deine Zielgruppe in einem Satz auf.", "Notiere Leser und Käufer.", "Beschreibe die Nutzungssituation."],
        completionRequirement: "Zielgruppe, Käufer und Nutzungssituation sind dokumentiert."
      },
      {
        title: "Leserprobleme sammeln",
        learningGoal: "Du sammelst die wichtigsten Probleme deiner Zielgruppe und wählst die zentralen aus.",
        steps: ["Recherchiere Fragen und Beschwerden.", "Notiere wiederkehrende Probleme.", "Cluster ähnliche Aussagen.", "Wähle die 3 wichtigsten Probleme aus."],
        tasks: ["Sammle mindestens 10 Probleme.", "Wähle die 3 wichtigsten aus.", "Begründe deine Auswahl."],
        completionRequirement: "Drei zentrale Leserprobleme sind identifiziert und begründet."
      },
      {
        title: "Nutzenversprechen formulieren",
        learningGoal: "Du formulierst, welchen konkreten Nutzen dein Buch liefert.",
        steps: ["Verbinde Zielgruppe und Problem.", "Beschreibe das Ergebnis nach dem Lesen.", "Formuliere ein klares Versprechen.", "Prüfe, ob es ehrlich und konkret ist."],
        tasks: ["Formuliere dein Nutzenversprechen.", "Streiche übertriebene Aussagen.", "Speichere die finale Version im Projekt."],
        completionRequirement: "Ein realistisches Nutzenversprechen ist festgelegt."
      },
      {
        title: "Positionierung festlegen",
        learningGoal: "Du entscheidest, wie dein Buch im Markt wahrgenommen werden soll.",
        steps: ["Definiere Ton und Anspruch.", "Bestimme, was dein Buch anders macht.", "Lege die Leser-Erwartung fest.", "Dokumentiere deine Positionierung."],
        tasks: ["Notiere deine Positionierung.", "Bestimme Ton und Anspruch.", "Lege ein klares Differenzierungsmerkmal fest."],
        completionRequirement: "Die Positionierung ist eindeutig beschrieben."
      }
    ]
  },
  {
    moduleNumber: "03",
    title: "Marktcheck & Konzept",
    description: "Du prüfst deine Idee am Markt und baust daraus ein klares Buchkonzept.",
    learningGoal: "Du kannst entscheiden, ob deine Idee tragfähig ist und wie dein Buch aufgebaut wird.",
    estimatedDuration: "4 Lektionen",
    outcome: "Dein Konzept ist durch den Markt bestätigt.",
    lessons: [
      {
        title: "Konkurrenzprodukte prüfen",
        learningGoal: "Du erkennst, welches Qualitätsniveau und welche Erwartungen im Markt bestehen.",
        steps: ["Sammle relevante Konkurrenzbücher.", "Prüfe Titel, Cover und Bewertungen.", "Notiere wiederkehrende Stärken.", "Notiere Lücken und Beschwerden."],
        tasks: ["Analysiere mindestens 5 Konkurrenzbücher.", "Notiere 5 Marktbeobachtungen.", "Markiere 2 Chancen für dein Buch."],
        completionRequirement: "Konkurrenz und Marktchancen sind dokumentiert."
      },
      {
        title: "Suchbegriffe verstehen",
        learningGoal: "Du findest erste Suchbegriffe, mit denen Käufer dein Buch finden könnten.",
        steps: ["Sammle natürliche Suchbegriffe.", "Prüfe verwandte Begriffe.", "Trenne Haupt- und Nebenbegriffe.", "Speichere deine erste Keyword-Liste."],
        tasks: ["Notiere ein Hauptkeyword.", "Sammle mindestens 8 Nebenkeywords.", "Streiche unpassende Begriffe."],
        completionRequirement: "Eine erste Keyword-Liste ist erstellt."
      },
      {
        title: "Buchstruktur entwickeln",
        learningGoal: "Du entwickelst eine Struktur, die das Leserproblem logisch löst.",
        steps: ["Leite Kapitel aus Leserproblemen ab.", "Ordne die Inhalte in eine sinnvolle Reihenfolge.", "Definiere das Ergebnis jedes Abschnitts.", "Kürze alles, was nicht zum Nutzen beiträgt."],
        tasks: ["Erstelle eine grobe Kapitelstruktur.", "Ordne jedem Kapitel ein Ziel zu.", "Entferne mindestens einen unnötigen Abschnitt."],
        completionRequirement: "Eine klare Buchstruktur liegt vor."
      },
      {
        title: "Konzeptentscheidung treffen",
        learningGoal: "Du entscheidest, ob die Idee weitergeführt, angepasst oder verworfen wird.",
        steps: ["Vergleiche Markt, Zielgruppe und Aufwand.", "Prüfe dein Nutzenversprechen.", "Entscheide bewusst.", "Dokumentiere die Begründung."],
        tasks: ["Treffe eine Konzeptentscheidung.", "Begründe deine Entscheidung.", "Aktualisiere dein Buchprojekt."],
        completionRequirement: "Das Buchkonzept ist bestätigt oder bewusst angepasst."
      }
    ]
  },
  {
    moduleNumber: "04",
    title: "Inhalt & Gestaltung",
    description: "Du erstellst den Inhalt und bringst Buchsatz, Innengestaltung und Cover in eine klare Verkaufsform.",
    learningGoal: "Du hast ein fertiges, prüfbares Buchpaket aus Inhalt, Innenlayout und Cover.",
    estimatedDuration: "5 Lektionen",
    outcome: "Dein Buchinhalt und Design sind fertig.",
    lessons: [
      {
        title: "Manuskript oder Inhalt planen",
        learningGoal: "Du planst die Erstellung deines Inhalts in machbaren Arbeitsschritten.",
        steps: ["Teile die Buchstruktur in Arbeitspakete.", "Lege Qualitätskriterien fest.", "Plane die Reihenfolge der Produktion.", "Starte mit dem einfachsten Abschnitt."],
        tasks: ["Erstelle einen Produktionsplan.", "Definiere 3 Qualitätskriterien.", "Wähle den ersten Abschnitt."],
        completionRequirement: "Der Produktionsplan steht."
      },
      {
        title: "Inhalt erstellen und prüfen",
        learningGoal: "Du produzierst Inhalt, der zur Zielgruppe und zum Nutzenversprechen passt.",
        steps: ["Erstelle Abschnitt für Abschnitt.", "Prüfe Verständlichkeit.", "Entferne Wiederholungen.", "Schließe offene Lücken."],
        tasks: ["Bearbeite den ersten Inhaltsblock.", "Prüfe ihn gegen das Nutzenversprechen.", "Notiere offene Lücken."],
        completionRequirement: "Ein prüfbarer Inhaltsstand liegt vor."
      },
      {
        title: "Buchsatz und Innenlayout",
        learningGoal: "Du machst den Innenbereich lesbar, konsistent und passend zum Format.",
        steps: ["Wähle Format und Seitenziel.", "Prüfe Abstände und Lesbarkeit.", "Kontrolliere wiederkehrende Elemente.", "Exportiere eine Prüffassung."],
        tasks: ["Lege Format und Seitenziel fest.", "Prüfe eine Probeseite.", "Notiere notwendige Layoutkorrekturen."],
        completionRequirement: "Eine Prüffassung des Innenlayouts ist vorhanden."
      },
      {
        title: "Cover-Briefing erstellen",
        learningGoal: "Du formulierst, was dein Cover leisten muss, bevor du es gestaltest oder beauftragst.",
        steps: ["Prüfe Cover im Markt.", "Definiere Hauptsignal und Stimmung.", "Lege Titelhierarchie fest.", "Schreibe ein kurzes Cover-Briefing."],
        tasks: ["Sammle 3 Coverbeispiele.", "Formuliere dein Cover-Briefing.", "Prüfe Lesbarkeit auf kleiner Größe."],
        completionRequirement: "Das Cover-Briefing ist erstellt."
      },
      {
        title: "Finale Buchdateien prüfen",
        learningGoal: "Du prüfst Innenlayout und Cover vor dem Upload auf offensichtliche Fehler.",
        steps: ["Kontrolliere Dateiformate.", "Prüfe Titel, Autor und Seiten.", "Vergleiche Cover mit Positionierung.", "Erstelle eine Upload-Checkliste."],
        tasks: ["Prüfe Innenlayout.", "Prüfe Cover.", "Markiere die Dateien als uploadbereit."],
        completionRequirement: "Innenlayout und Cover sind uploadbereit."
      }
    ]
  },
  {
    moduleNumber: "05",
    title: "Amazon Listing & Veröffentlichung",
    description: "Du baust deine Amazon-Produktseite und veröffentlichst dein Buch kontrolliert über KDP.",
    learningGoal: "Dein Buch ist mit sauberem Listing und geprüften Upload-Daten veröffentlicht.",
    estimatedDuration: "4 Lektionen",
    outcome: "Dein Buch ist auf Amazon live.",
    lessons: [
      {
        title: "Titel, Untertitel und Beschreibung",
        learningGoal: "Du formulierst eine Produktseite, die Nutzen und Zielgruppe klar verbindet.",
        steps: ["Prüfe Titel und Untertitel.", "Schreibe eine nutzenorientierte Beschreibung.", "Baue Vertrauen auf.", "Streiche unklare Versprechen."],
        tasks: ["Finalisiere Titel und Untertitel.", "Schreibe die Buchbeschreibung.", "Prüfe die Beschreibung auf Klarheit."],
        completionRequirement: "Titel, Untertitel und Beschreibung sind uploadbereit."
      },
      {
        title: "Keywords und Kategorien",
        learningGoal: "Du ordnest Suchbegriffe und Kategorien sinnvoll ein.",
        steps: ["Wähle Hauptkeyword und Nebenkeywords.", "Prüfe Kategorien.", "Dokumentiere die Auswahl.", "Vermeide unpassende Begriffe."],
        tasks: ["Lege Keywords fest.", "Lege Kategorien fest.", "Begründe deine Auswahl."],
        completionRequirement: "Keywords und Kategorien sind dokumentiert."
      },
      {
        title: "KDP Upload vorbereiten",
        learningGoal: "Du bereitest alle Upload-Felder und Dateien kontrolliert vor.",
        steps: ["Prüfe Metadaten.", "Prüfe Dateien.", "Lege Preis und Format fest.", "Gehe die Upload-Checkliste durch."],
        tasks: ["Prüfe alle Upload-Felder.", "Lege Preis und Format fest.", "Bestätige die Upload-Checkliste."],
        completionRequirement: "Der Upload ist vollständig vorbereitet."
      },
      {
        title: "Veröffentlichen und prüfen",
        learningGoal: "Du veröffentlichst dein Buch und kontrollierst die Produktseite nach der Freischaltung.",
        steps: ["Führe den Upload durch.", "Prüfe die Vorschau.", "Warte auf Freischaltung.", "Kontrolliere die Live-Seite."],
        tasks: ["Markiere den Upload als erledigt.", "Notiere das Veröffentlichungsdatum.", "Prüfe die Live-Produktseite."],
        completionRequirement: "Das Buch ist veröffentlicht oder der Upload ist abgeschlossen."
      }
    ]
  },
  {
    moduleNumber: "06",
    title: "Launch & Vermarktung",
    description: "Du machst dein Buch sichtbar, beobachtest Verkäufe und optimierst kontrolliert.",
    learningGoal: "Du hast einen einfachen Vermarktungsplan und weißt, welche Kennzahlen du beobachtest.",
    estimatedDuration: "4 Lektionen",
    outcome: "Dein Buch wird gesehen und verkauft.",
    lessons: [
      {
        title: "Launchplan erstellen",
        learningGoal: "Du planst die ersten Schritte nach Veröffentlichung ohne Aktionismus.",
        steps: ["Definiere die Launchphase.", "Lege einfache Sichtbarkeitsmaßnahmen fest.", "Plane Feedbackpunkte.", "Notiere Kontrolltermine."],
        tasks: ["Erstelle einen Launchplan.", "Lege 3 Sichtbarkeitsmaßnahmen fest.", "Plane den ersten Kontrolltermin."],
        completionRequirement: "Ein einfacher Launchplan steht."
      },
      {
        title: "A+ Content vorbereiten",
        learningGoal: "Du planst ergänzende Inhalte, die dein Buch verständlicher machen.",
        steps: ["Bestimme die wichtigsten Nutzenargumente.", "Ordne sie visuell.", "Prüfe, ob sie zur Produktseite passen.", "Notiere benötigte Bilder oder Texte."],
        tasks: ["Formuliere 3 Nutzenblöcke.", "Skizziere eine A+ Content Struktur.", "Prüfe die Verbindung zur Positionierung."],
        completionRequirement: "Das A+ Content Konzept ist vorbereitet."
      },
      {
        title: "Amazon Ads einfach starten",
        learningGoal: "Du verstehst Werbung als Testsystem und startest nicht blind.",
        steps: ["Definiere ein Testziel.", "Wähle erste Keywords oder Produkte.", "Setze ein kleines Budget.", "Plane die Auswertung."],
        tasks: ["Lege ein Ads-Testziel fest.", "Notiere erste Targeting-Ideen.", "Bestimme ein Testbudget."],
        completionRequirement: "Ein einfacher Ads-Test ist vorbereitet."
      },
      {
        title: "Auswerten und optimieren",
        learningGoal: "Du entscheidest anhand von Daten, was verbessert werden soll.",
        steps: ["Prüfe Verkäufe und Sichtbarkeit.", "Vergleiche Listing, Cover und Preis.", "Wähle eine Optimierung aus.", "Dokumentiere die Änderung."],
        tasks: ["Notiere die wichtigsten Kennzahlen.", "Wähle eine Optimierungsmaßnahme.", "Plane den nächsten Prüftermin."],
        completionRequirement: "Eine konkrete Optimierungsmaßnahme ist geplant."
      }
    ]
  }
];

function createLesson(moduleId: string, moduleNumber: string, lesson: LessonBlueprint, index: number): Lesson {
  const lessonNumber = `${moduleNumber}.${index}`;

  return {
    id: `${moduleId}-lesson-${index}`,
    moduleId,
    lessonNumber,
    title: lesson.title,
    learningGoal: lesson.learningGoal,
    estimatedDuration: index === 1 ? "25 Minuten" : "35 Minuten",
    contentSections: [
      {
        heading: "Lernziel",
        body: lesson.learningGoal,
        review: defaultReviewInfo
      },
      {
        heading: "Warum dieser Schritt wichtig ist",
        body: "Dieser Schritt hält dich auf der geführten Linie. Du erledigst nur das, was dein Buchprojekt jetzt wirklich weiterbringt."
      }
    ],
    video: {
      title: `${lessonNumber} ${lesson.title}`,
      duration: index === 1 ? "08:00" : "12:00",
      status: "planned"
    },
    steps: lesson.steps,
    examples: [
      "Beispiel: Eine unklare Idee wird erst weitergeführt, wenn Zielgruppe, Nutzen und nächster Arbeitsschritt schriftlich feststehen.",
      "Beispiel: Eine Aufgabe gilt erst als abgeschlossen, wenn das Ergebnis im Buchprojekt dokumentiert wurde."
    ],
    downloads: [
      { title: `${lesson.title} Arbeitsblatt`, type: "worksheet" },
      { title: `${lesson.title} Kurzcheck`, type: "checklist" }
    ],
    tasks: lesson.tasks,
    quiz: [
      {
        question: `Was ist das Ziel dieser Lektion?`,
        options: ["Nur Videos ansehen", "Eine konkrete Projektentscheidung treffen", "Neue Funktionen einrichten"],
        answer: "Eine konkrete Projektentscheidung treffen"
      }
    ],
    completionRequirement: lesson.completionRequirement
  };
}

export const courseModules: CourseModule[] = moduleBlueprints.map((module) => {
  const id = `module-${module.moduleNumber}`;
  return {
    id,
    moduleNumber: module.moduleNumber,
    title: module.title,
    description: module.description,
    learningGoal: module.learningGoal,
    estimatedDuration: module.estimatedDuration,
    lessons: module.lessons.map((lesson, index) => createLesson(id, module.moduleNumber, lesson, index + 1))
  };
});

export const allLessons = courseModules.flatMap((module) => module.lessons);

export const journeySteps = courseModules.map((module) => module.title);

export const checklistGroups: ChecklistGroup[] = [
  "Start & Buchidee",
  "Nische & Zielgruppe",
  "Marktcheck & Konzept",
  "Inhalt & Gestaltung",
  "Amazon Listing & Veröffentlichung",
  "Launch & Vermarktung"
].map((title, index) => ({
  id: `checklist-${index + 1}`,
  title,
  items: [
    `${title}: Ergebnis dokumentieren`,
    `${title}: offene Annahmen prüfen`,
    `${title}: nächster Schritt festlegen`
  ]
}));

export const resourceTemplates: ResourceTemplate[] = [
  "Buchidee",
  "Zielgruppe",
  "Marktcheck",
  "Buchkonzept",
  "Upload-Check",
  "Launchplan"
].map((category, index) => ({
  id: `template-${index + 1}`,
  category,
  title: `${category} Vorlage`,
  description: `Geführte Vorlage für ${category.toLowerCase()}, damit du den nächsten Schritt sauber abschließt.`,
  fields: ["Ziel", "Eingaben", "Entscheidung", "Nächster Schritt"]
}));
