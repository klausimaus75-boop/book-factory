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
  phase: string;
  title: string;
  description: string;
  learningGoal: string;
  estimatedDuration: string;
  outcome: string;
  lessons: LessonBlueprint[];
};

export const coursePhases = [
  {
    title: "Start",
    modules: "01-04",
    description: "Orientierung, Spickzettel, ChatGPT und KreaMix-Bots verstehen."
  },
  {
    title: "Buch finden",
    modules: "05-06",
    description: "Nische, Buchart, Idee und Seitenplan festlegen."
  },
  {
    title: "Buch bauen",
    modules: "07-09",
    description: "Inhalte erstellen, Canva-Dateien bauen und Qualität prüfen."
  },
  {
    title: "Veröffentlichen",
    modules: "10-12",
    description: "KDP-Konto, Upload, Buchdaten, Pflichten und Ordnung."
  },
  {
    title: "Sichtbar machen",
    modules: "13-16",
    description: "Schaufenster, Marketing, Affiliate, Prompts und Hooks."
  },
  {
    title: "Wiederholen",
    modules: "17-18",
    description: "Fehler lösen, Tipps nutzen und das nächste Buch schneller bauen."
  }
];

const moduleBlueprints: ModuleBlueprint[] = [
  {
    moduleNumber: "01",
    phase: "Start",
    title: "Los geht's: Wir bauen dein erstes Buch",
    description: "Du richtest dein erstes Buchprojekt ein und verstehst, dass dieser Kurs ein Arbeitskurs ist.",
    learningGoal: "Du weißt, wie du den Kurs abarbeitest, welcher Ordner wohin gehört und welches erste Buchziel du verfolgst.",
    estimatedDuration: "5 Lektionen",
    outcome: "Kursordner steht, Ziel ist klar, die Teilnehmerin weiß, wie sie den Kurs abarbeitet.",
    lessons: [
      {
        title: "Kursversprechen verstehen",
        learningGoal: "Du verstehst, dass am Ende ein echtes Buchprojekt mit Upload-Plan stehen soll.",
        steps: ["Lies das Kursversprechen.", "Notiere, welches Ergebnis du am Ende wirklich haben willst.", "Streiche Erwartungen, die nicht zum ersten Buch gehören.", "Formuliere dein persönliches Kursziel in einem Satz."],
        tasks: ["Schreibe dein Kursziel auf.", "Notiere, welche Buchart dich gerade am meisten interessiert.", "Lege fest, wann du an deinem Kursprojekt arbeitest."],
        completionRequirement: "Dein Kursziel und dein Arbeitsrhythmus sind notiert."
      },
      {
        title: "So arbeitet der Kurs",
        learningGoal: "Du verstehst die Arbeitsweise: kurze Videos, klare PDFs, Aufgaben und Checklisten.",
        steps: ["Prüfe die Kursbereiche.", "Lege fest, wo du Aufgaben dokumentierst.", "Plane kurze Arbeitseinheiten statt langer Theorieblöcke.", "Starte mit dem nächsten sichtbaren Schritt."],
        tasks: ["Erstelle eine Kursnotiz.", "Notiere, wo Aufgaben gespeichert werden.", "Markiere die erste Lektion als Arbeitsstart."],
        completionRequirement: "Dein persönliches Kurssystem ist vorbereitet."
      },
      {
        title: "Kursordner anlegen",
        learningGoal: "Du legst eine Ordnerstruktur für Buchprojekt, Canva, Cover, Export, Marketing und Belege an.",
        steps: ["Erstelle den Hauptordner für dein Buchprojekt.", "Lege Unterordner für Canva, Cover, Export, Marketing und Belege an.", "Nutze klare Dateinamen.", "Speichere eine leere Projektübersicht."],
        tasks: ["Erstelle die Ordnerstruktur.", "Lege eine Projektübersicht an.", "Speichere den Pfad zu deinem Projektordner."],
        completionRequirement: "Die Kurs- und Projektordner stehen."
      },
      {
        title: "Erstes Ziel festlegen",
        learningGoal: "Du entscheidest, welche Art Buch am Ende entstehen soll.",
        steps: ["Sammle mögliche Bucharten.", "Vergleiche Aufwand und Machbarkeit.", "Wähle eine grobe Richtung.", "Halte offene Fragen fest."],
        tasks: ["Wähle eine erste Buchart.", "Notiere, warum sie für den Start machbar ist.", "Halte drei offene Fragen fest."],
        completionRequirement: "Eine erste Buchrichtung ist festgelegt."
      },
      {
        title: "Arbeitsregel anwenden",
        learningGoal: "Du arbeitest nur an dem, was für den nächsten Schritt gebraucht wird.",
        steps: ["Prüfe deine offenen Ideen.", "Markiere alles, was später kommt.", "Wähle eine konkrete Aufgabe.", "Schließe diese Aufgabe sichtbar ab."],
        tasks: ["Schreibe deine nächste Aufgabe auf.", "Verschiebe Nebenthemen in eine Später-Liste.", "Dokumentiere das erste fertige Ergebnis."],
        completionRequirement: "Du hast eine klare nächste Aufgabe statt vieler Baustellen."
      }
    ]
  },
  {
    moduleNumber: "02",
    phase: "Start",
    title: "Dein KreaMix-Spickzettel: Was ist was?",
    description: "Alle wichtigen Begriffe werden kurz und einfach erklärt, ohne trockene Theorie-Lektion.",
    learningGoal: "Du kannst zentrale KDP-, Buch- und Marketingbegriffe schnell einordnen.",
    estimatedDuration: "6 Lektionen",
    outcome: "Ein Nachschlagebereich, der später immer wieder genutzt werden kann.",
    lessons: [
      {
        title: "KDP und Buchformate verstehen",
        learningGoal: "Du ordnest KDP, Amazon, Taschenbuch, Hardcover, E-Book und Print-on-Demand ein.",
        steps: ["Lies die Kurzdefinitionen.", "Notiere, welche Formate für dein erstes Buch relevant sind.", "Trenne Druckbuch und E-Book.", "Halte fest, was Print-on-Demand für dich bedeutet."],
        tasks: ["Wähle dein wahrscheinliches Startformat.", "Notiere zwei Begriffe, die du noch prüfen willst.", "Speichere die Definitionen im Spickzettel."],
        completionRequirement: "Die wichtigsten KDP- und Formatbegriffe sind in deinem Spickzettel."
      },
      {
        title: "Marktbegriffe einordnen",
        learningGoal: "Du verstehst BSR, Keywords, Kategorien, Nische, Zielgruppe und Buchbeschreibung.",
        steps: ["Ordne jeden Begriff deinem späteren Upload zu.", "Notiere, wofür Keywords gebraucht werden.", "Trenne Nische und Zielgruppe.", "Prüfe, welcher Begriff für dich noch unklar ist."],
        tasks: ["Schreibe eine Kurzdefinition für Nische.", "Schreibe eine Kurzdefinition für Keyword.", "Notiere deine wichtigste offene Marktfrage."],
        completionRequirement: "Die Marktbegriffe sind kurz erklärt."
      },
      {
        title: "Buchdaten und Geldbegriffe klären",
        learningGoal: "Du verstehst ISBN, ASIN, Impressum, Royalty, Preis und Druckkosten auf Startniveau.",
        steps: ["Lies die Begriffe.", "Markiere, welche erst beim Upload wichtig werden.", "Notiere, was du aktuell noch nicht entscheiden musst.", "Speichere die Begriffe als Nachschlagepunkt."],
        tasks: ["Ergänze ISBN und ASIN im Spickzettel.", "Notiere, dass Steuer- und Rechtsfragen später geprüft werden.", "Markiere Druckkosten als Upload-Thema."],
        completionRequirement: "Buchdaten- und Geldbegriffe sind auffindbar dokumentiert."
      },
      {
        title: "Canva- und Präsentationsbegriffe sammeln",
        learningGoal: "Du ordnest A+ Content, Mockup, Fullcover, Beschnitt und PDF-Druckdatei ein.",
        steps: ["Lies die Begriffe.", "Verbinde jeden Begriff mit einer späteren Datei.", "Notiere, welche Datei in Canva entsteht.", "Markiere Beschnitt als Qualitätscheck."],
        tasks: ["Schreibe eine Kurzdefinition für Fullcover.", "Schreibe eine Kurzdefinition für Beschnitt.", "Notiere, was ein Mockup zeigen soll."],
        completionRequirement: "Die Gestaltungsbegriffe sind im Spickzettel."
      },
      {
        title: "Affiliate-Grundbegriffe verstehen",
        learningGoal: "Du verstehst Affiliate, Digistore24, Affiliate-Link, Kennzeichnung und Provision.",
        steps: ["Lies die Begriffe.", "Trenne Empfehlung von Werbung.", "Notiere, warum Kennzeichnung wichtig ist.", "Halte Affiliate als späteres Marketingthema fest."],
        tasks: ["Schreibe eine Kurzdefinition für Affiliate-Link.", "Notiere einen möglichen Zusatznutzen für Leser.", "Markiere Kennzeichnung als Pflichtcheck."],
        completionRequirement: "Affiliate-Grundbegriffe sind kurz erklärt."
      },
      {
        title: "Social-Media-Begriffe einordnen",
        learningGoal: "Du verstehst Amazon Ads, Reels, Stories, Pins, Hooks und CTA.",
        steps: ["Ordne die Begriffe den Marketingkanälen zu.", "Notiere, was ein Hook leisten muss.", "Trenne Mehrwert und Verkauf.", "Speichere CTA als Handlungsaufforderung."],
        tasks: ["Formuliere einen einfachen Hook.", "Formuliere einen einfachen CTA.", "Notiere, welcher Kanal dich zuerst interessiert."],
        completionRequirement: "Die wichtigsten Marketingbegriffe sind im Spickzettel."
      }
    ]
  },
  {
    moduleNumber: "03",
    phase: "Start",
    title: "Dein KI-Helfer: ChatGPT richtig nutzen",
    description: "ChatGPT wird als ruhiger Buchhelfer eingesetzt, ohne KI-Überforderung.",
    learningGoal: "Du kannst ChatGPT mit klaren Prompts für dein Buchprojekt nutzen und Antworten kritisch prüfen.",
    estimatedDuration: "5 Lektionen",
    outcome: "Die Teilnehmerin kann ChatGPT als ruhigen Buchhelfer nutzen.",
    lessons: [
      {
        title: "Mit ChatGPT brauchbar sprechen",
        learningGoal: "Du gibst ChatGPT genug Kontext, damit brauchbare Antworten entstehen.",
        steps: ["Beschreibe deine Rolle.", "Nenne dein Ziel.", "Gib relevanten Kontext.", "Fordere ein klares Ausgabeformat an."],
        tasks: ["Schreibe deinen ersten Buchprojekt-Prompt.", "Füge Zielgruppe und Buchart hinzu.", "Speichere die beste Antwort."],
        completionRequirement: "Ein brauchbarer Startprompt ist gespeichert."
      },
      {
        title: "Einfacher Prompt-Aufbau",
        learningGoal: "Du nutzt Rolle, Ziel, Kontext und Ausgabeformat als Grundstruktur.",
        steps: ["Baue einen Prompt aus vier Teilen.", "Prüfe, ob jeder Teil klar ist.", "Fordere eine Tabelle oder Liste an.", "Verbessere die Antwort mit einer Nachfrage."],
        tasks: ["Erstelle einen Prompt nach der Vier-Teile-Struktur.", "Lass dir ein strukturiertes Ergebnis ausgeben.", "Notiere eine Verbesserung."],
        completionRequirement: "Du hast einen wiederverwendbaren Prompt-Aufbau."
      },
      {
        title: "Antworten verbessern",
        learningGoal: "Du machst Antworten kürzer, einfacher, genauer und anfängerfreundlicher.",
        steps: ["Bitte um Kürzung.", "Bitte um einfachere Sprache.", "Bitte um konkretere Schritte.", "Vergleiche alte und neue Antwort."],
        tasks: ["Verbessere eine ChatGPT-Antwort.", "Markiere, was besser wurde.", "Speichere die finale Version."],
        completionRequirement: "Eine KI-Antwort wurde sichtbar verbessert."
      },
      {
        title: "KI-Fehler erkennen",
        learningGoal: "Du prüfst Fakten, Wiederholungen und Ton, bevor du KI-Inhalte verwendest.",
        steps: ["Markiere Behauptungen.", "Suche Wiederholungen.", "Prüfe, ob der Ton zu deiner Zielgruppe passt.", "Notiere offene Faktenchecks."],
        tasks: ["Prüfe einen KI-Text.", "Streiche eine Wiederholung.", "Notiere mindestens einen Faktencheck."],
        completionRequirement: "Ein KI-Text wurde kritisch geprüft."
      },
      {
        title: "Grenzen von ChatGPT beachten",
        learningGoal: "Du weißt, was ChatGPT nicht allein entscheiden soll.",
        steps: ["Markiere Rechts- und Steuerthemen.", "Markiere Marken- und sensible Aussagen.", "Lege Prüfhinweise an.", "Nutze ChatGPT nur zur Vorbereitung."],
        tasks: ["Erstelle eine Nicht-allein-entscheiden-Liste.", "Markiere sensible Themen in deinem Projekt.", "Notiere, wann externe Prüfung nötig ist."],
        completionRequirement: "Die Grenzen von ChatGPT sind für dein Projekt dokumentiert."
      }
    ]
  },
  {
    moduleNumber: "04",
    phase: "Start",
    title: "Deine KreaMix-Bots: Welcher Bot macht was?",
    description: "Die Bots werden als Werkzeugkasten erklärt, damit niemand raten muss, welcher Bot wann dran ist.",
    learningGoal: "Du weißt, welcher KreaMix-Bot bei welchem Schritt hilft und welches Ergebnis du erwarten kannst.",
    estimatedDuration: "6 Lektionen",
    outcome: "Die Teilnehmerin weiß, welcher Bot bei welchem Schritt hilft.",
    lessons: [
      {
        title: "Nischen-Bot einsetzen",
        learningGoal: "Du nutzt den Nischen-Bot für Buchideen, Konkurrenz und erste Einschätzung.",
        steps: ["Bereite deine Buchidee vor.", "Gib Zielgruppe und Buchart an.", "Lass Konkurrenz und Machbarkeit einschätzen.", "Notiere die Herzbewertung als Hinweis, nicht als Wahrheit."],
        tasks: ["Formuliere eine Eingabe für den Nischen-Bot.", "Notiere die wichtigsten Ergebnisse.", "Markiere offene Prüfungen."],
        completionRequirement: "Der Nischen-Bot ist für eine Buchidee genutzt."
      },
      {
        title: "Buch-Bot nutzen",
        learningGoal: "Du nutzt den Buch-Bot für Inhalte, Struktur, Seitenideen und Buchlogik.",
        steps: ["Gib Buchart und Zielgruppe ein.", "Fordere eine grobe Struktur an.", "Lass Seitentypen oder Kapitel vorschlagen.", "Prüfe, ob die Logik zum Leserproblem passt."],
        tasks: ["Erzeuge eine Strukturidee.", "Markiere brauchbare Seitentypen.", "Streiche unpassende Vorschläge."],
        completionRequirement: "Eine erste Buchstruktur aus dem Buch-Bot liegt vor."
      },
      {
        title: "Cover- und Fullcover-Bot verstehen",
        learningGoal: "Du nutzt den Bot für Covermaße, Frontcover, Rückseite und Buchrücken.",
        steps: ["Notiere Format und Seitenzahl.", "Frage nach benötigten Covermaßen.", "Plane Frontcover und Rückseite.", "Prüfe Buchrücken und Beschnitt später im Qualitätscheck."],
        tasks: ["Sammle Formatdaten.", "Erstelle eine Cover-Notiz.", "Notiere offene Maßfragen."],
        completionRequirement: "Die Cover-Bot-Nutzung ist vorbereitet."
      },
      {
        title: "A+ Content Bot nutzen",
        learningGoal: "Du planst Bannerkonzept, KDP-Modulauswahl und Go/No-Gos.",
        steps: ["Gib Buchnutzen und Zielgruppe ein.", "Fordere eine A+ Content Struktur an.", "Prüfe passende Module.", "Streiche verbotene oder übertriebene Aussagen."],
        tasks: ["Erstelle eine A+ Content Idee.", "Markiere ein passendes Modul.", "Notiere ein No-Go."],
        completionRequirement: "Ein A+ Content Ansatz ist vorbereitet."
      },
      {
        title: "Creamix Marketing Zauber einsetzen",
        learningGoal: "Du nutzt den Bot für Social Media, Reels, Hooks, Captions und 80/20.",
        steps: ["Beschreibe dein Buch in Alltagssprache.", "Fordere Hooks und Captions an.", "Prüfe den Mehrwertanteil.", "Wähle eine erste Content-Idee."],
        tasks: ["Erstelle drei Hook-Ideen.", "Wähle eine Caption aus.", "Prüfe die 80/20-Regel."],
        completionRequirement: "Eine erste Marketingidee liegt vor."
      },
      {
        title: "Affiliate- und Reels-Regeln beachten",
        learningGoal: "Du kennzeichnest Empfehlungen sauber und vermeidest Fake-Versprechen.",
        steps: ["Notiere Kennzeichnungspflichten als Checkpunkt.", "Prüfe, ob ein Reel echt und nachvollziehbar ist.", "Streiche übertriebene Versprechen.", "Dokumentiere die Regel im Spickzettel."],
        tasks: ["Schreibe eine Kennzeichnungsnotiz.", "Prüfe eine Reel-Idee.", "Entferne ein übertriebenes Versprechen."],
        completionRequirement: "Affiliate- und Reel-Regeln sind als Checkpunkt gespeichert."
      }
    ]
  },
  {
    moduleNumber: "05",
    phase: "Buch finden",
    title: "Die Buchidee: Nische, Buchart und klarer Plan",
    description: "Aus einer groben Idee wird ein machbares erstes Buchprojekt.",
    learningGoal: "Du entwickelst eine geprüfte Buchidee mit Zielgruppe, Nutzen und klarer Entscheidung.",
    estimatedDuration: "5 Lektionen",
    outcome: "Eine geprüfte Buchidee steht fest.",
    lessons: [
      {
        title: "Nische finden",
        learningGoal: "Du klärst, für wen dein Buch sein soll.",
        steps: ["Beschreibe mögliche Lesergruppen.", "Trenne Käufer und Nutzer.", "Notiere Alltagssituationen.", "Wähle eine Zielgruppe für den ersten Check."],
        tasks: ["Schreibe drei Zielgruppen auf.", "Wähle eine Hauptzielgruppe.", "Notiere, warum diese Gruppe dein Buch brauchen könnte."],
        completionRequirement: "Eine Hauptzielgruppe ist festgelegt."
      },
      {
        title: "Problem, Wunsch oder Anlass erkennen",
        learningGoal: "Du verstehst, warum jemand das Buch kaufen würde.",
        steps: ["Sammle Probleme.", "Sammle Wünsche.", "Sammle Anlässe.", "Verbinde einen Auslöser mit deiner Buchidee."],
        tasks: ["Notiere fünf Kaufgründe.", "Wähle den stärksten Auslöser.", "Formuliere das Leserproblem in einem Satz."],
        completionRequirement: "Ein klarer Kaufgrund ist dokumentiert."
      },
      {
        title: "Buchart auswählen",
        learningGoal: "Du wählst zwischen Malbuch, Journal, Lernbuch, Rätselbuch, Workbook oder Planer.",
        steps: ["Vergleiche Bucharten.", "Prüfe Aufwand und Wiederholbarkeit.", "Wähle eine Buchart.", "Notiere, was diese Buchart leisten soll."],
        tasks: ["Wähle eine Buchart.", "Begründe die Auswahl.", "Notiere typische Seitentypen."],
        completionRequirement: "Die Buchart ist entschieden."
      },
      {
        title: "Idee leicht prüfen",
        learningGoal: "Du prüfst Nachfrage, Konkurrenz, Machbarkeit und Anfängerfreundlichkeit.",
        steps: ["Suche erste Vergleichsbücher.", "Notiere Nachfrage-Hinweise.", "Prüfe Konkurrenzniveau.", "Prüfe, ob du das Projekt als Anfängerin bauen kannst."],
        tasks: ["Sammle fünf Vergleichsbücher.", "Notiere drei Nachfrage-Hinweise.", "Bewerte die Machbarkeit."],
        completionRequirement: "Die Idee ist grob geprüft."
      },
      {
        title: "Buchentscheidung treffen",
        learningGoal: "Du entscheidest dich für eine Idee, ein Ziel und ein Projekt.",
        steps: ["Vergleiche deine Optionen.", "Streiche Nebenideen.", "Formuliere das Buchziel.", "Lege die Entscheidung ab."],
        tasks: ["Wähle eine Buchidee.", "Formuliere das Buchziel.", "Lege Nebenideen in eine Später-Liste."],
        completionRequirement: "Eine Buchidee ist verbindlich ausgewählt."
      }
    ]
  },
  {
    moduleNumber: "06",
    phase: "Buch finden",
    title: "Der Buchplan: Struktur, Seiten und Inhaltssystem",
    description: "Das Buch bekommt eine klare innere Ordnung, bevor gestaltet wird.",
    learningGoal: "Du erstellst einen Bauplan mit Format, Seitenlogik, Materialliste und Machbarkeitscheck.",
    estimatedDuration: "5 Lektionen",
    outcome: "Ein sauberer Bauplan für das Buch ist fertig.",
    lessons: [
      {
        title: "Format und Umfang grob festlegen",
        learningGoal: "Du legst Format und groben Umfang deines Buches fest.",
        steps: ["Vergleiche sinnvolle Formate.", "Lege ein erstes Format fest.", "Schätze den Umfang.", "Notiere offene KDP-Prüfpunkte."],
        tasks: ["Wähle ein Format.", "Lege ein Seitenziel fest.", "Notiere, was später bei KDP geprüft wird."],
        completionRequirement: "Format und Seitenziel sind grob festgelegt."
      },
      {
        title: "Seitenplan erstellen",
        learningGoal: "Du bestimmst, was auf welche Seite kommt.",
        steps: ["Liste alle benötigten Seiten auf.", "Ordne sie in Reihenfolge.", "Markiere wiederkehrende Seiten.", "Prüfe den Lesefluss."],
        tasks: ["Erstelle einen Seitenplan.", "Markiere wiederkehrende Seitentypen.", "Prüfe Anfang und Ende des Buches."],
        completionRequirement: "Der Seitenplan liegt vor."
      },
      {
        title: "Kapitel und Seitentypen festlegen",
        learningGoal: "Du definierst Kapitel, Aufgaben, Vorlagen oder wiederkehrende Seitentypen.",
        steps: ["Sammle Kapitel oder Seitentypen.", "Ordne jedem Typ eine Funktion zu.", "Entferne Dopplungen.", "Lege eine Wiederholungslogik fest."],
        tasks: ["Definiere mindestens drei Seitentypen.", "Beschreibe die Funktion jedes Typs.", "Streiche unnötige Dopplungen."],
        completionRequirement: "Kapitel oder Seitentypen sind festgelegt."
      },
      {
        title: "Materialliste erstellen",
        learningGoal: "Du sammelst Texte, Bilder, Aufgaben, Illustrationen, Rätsel oder Tabellen.",
        steps: ["Liste benötigte Materialien.", "Trenne vorhandenes und fehlendes Material.", "Markiere Canva-relevante Elemente.", "Plane die Erstellung."],
        tasks: ["Erstelle eine Materialliste.", "Markiere fehlende Inhalte.", "Plane den ersten Materialblock."],
        completionRequirement: "Eine Materialliste ist erstellt."
      },
      {
        title: "Mini-Check für Anfängerfreundlichkeit",
        learningGoal: "Du prüfst, ob das Buch wirklich als Anfängerprojekt baubar ist.",
        steps: ["Prüfe Umfang.", "Prüfe Designaufwand.", "Prüfe Inhaltserstellung.", "Reduziere alles, was das erste Projekt unnötig schwer macht."],
        tasks: ["Bewerte die Machbarkeit.", "Reduziere einen zu großen Abschnitt.", "Bestätige deinen Bauplan."],
        completionRequirement: "Der Buchplan ist für den Start machbar."
      }
    ]
  },
  {
    moduleNumber: "07",
    phase: "Buch bauen",
    title: "Der Buchbau mit ChatGPT: Inhalte erstellen",
    description: "Die eigentlichen Buchinhalte entstehen Schritt für Schritt.",
    learningGoal: "Du erstellst, kürzt, sortierst und prüfst Inhalte, bevor sie in Canva gestaltet werden.",
    estimatedDuration: "5 Lektionen",
    outcome: "Die Inhalte liegen vor und können gestaltet werden.",
    lessons: [
      {
        title: "Prompts für Buchinhalte nutzen",
        learningGoal: "Du erstellst Texte, Aufgaben, Übungen, Rezepte, Rätsel oder Journalseiten mit klaren Prompts.",
        steps: ["Wähle einen Seitentyp.", "Schreibe den Prompt mit Zielgruppe und Ausgabeformat.", "Erzeuge einen ersten Inhaltsblock.", "Speichere die Rohfassung."],
        tasks: ["Erstelle einen Inhalts-Prompt.", "Erzeuge einen Beispielinhalt.", "Speichere die Rohfassung."],
        completionRequirement: "Ein erster Inhaltsblock liegt vor."
      },
      {
        title: "Inhalte kürzen und vereinfachen",
        learningGoal: "Du machst Inhalte kürzer, einfacher und passender für die Zielgruppe.",
        steps: ["Lies den Rohtext.", "Streiche Fülltext.", "Vereinfache schwierige Sätze.", "Prüfe, ob der Nutzen klar bleibt."],
        tasks: ["Kürze einen Inhaltsblock.", "Vereinfache drei Sätze.", "Speichere die überarbeitete Version."],
        completionRequirement: "Ein Inhaltsblock wurde zielgruppengerecht überarbeitet."
      },
      {
        title: "Wiederholungen entfernen",
        learningGoal: "Du entfernst doppelte Inhalte und langweilige Wiederholungen.",
        steps: ["Markiere ähnliche Abschnitte.", "Entscheide, was bleiben soll.", "Fasse Dopplungen zusammen.", "Prüfe den Lesefluss."],
        tasks: ["Finde mindestens eine Wiederholung.", "Entferne oder kombiniere sie.", "Dokumentiere die Änderung."],
        completionRequirement: "Wiederholungen wurden sichtbar reduziert."
      },
      {
        title: "Altersgruppe, Schwierigkeit und Ton prüfen",
        learningGoal: "Du passt Inhalte an Zielgruppe, Schwierigkeitsgrad und Ton an.",
        steps: ["Prüfe die Zielgruppe.", "Bewerte den Schwierigkeitsgrad.", "Passe Ton und Beispiele an.", "Notiere offene Qualitätsfragen."],
        tasks: ["Prüfe einen Inhalt gegen die Zielgruppe.", "Passe den Ton an.", "Notiere einen Qualitätscheck."],
        completionRequirement: "Der Inhalt passt besser zur Zielgruppe."
      },
      {
        title: "Export-Vorbereitung für Canva",
        learningGoal: "Du bereitest vor, was später in Canva eingefügt wird.",
        steps: ["Trenne Text, Überschriften und Seitentypen.", "Ordne Inhalte dem Seitenplan zu.", "Bereinige Dateinamen.", "Speichere die Canva-Vorlage für später."],
        tasks: ["Ordne Inhalte dem Seitenplan zu.", "Erstelle eine Canva-Übergabeliste.", "Markiere fertige Inhalte."],
        completionRequirement: "Die Inhalte sind für Canva vorbereitet."
      }
    ]
  },
  {
    moduleNumber: "08",
    phase: "Buch bauen",
    title: "Die Canva-Werkstatt: Innenseiten, Cover und Fullcover",
    description: "Canva wird praktisch erklärt: Datei anlegen, gestalten und exportieren.",
    learningGoal: "Du baust Innenseiten, Cover und Fullcover in einer geordneten Canva-Werkstatt.",
    estimatedDuration: "6 Lektionen",
    outcome: "Innenseiten und Cover sind als Dateien vorbereitet.",
    lessons: [
      {
        title: "Canva-Grundlagen anwenden",
        learningGoal: "Du findest dich in Oberfläche, Seiten, Raster, Vorlagen und Elementen zurecht.",
        steps: ["Öffne Canva.", "Lege eine Datei an.", "Teste Seiten, Raster und Elemente.", "Speichere die Datei im Kursordner."],
        tasks: ["Lege eine Canva-Datei an.", "Teste ein Raster.", "Speichere den Link oder Dateinamen."],
        completionRequirement: "Eine Canva-Arbeitsdatei ist angelegt."
      },
      {
        title: "KDP-Format anlegen",
        learningGoal: "Du legst Innenmaße, Beschnitt, Rand und Lesbarkeit passend an.",
        steps: ["Prüfe dein Format.", "Lege Maße an.", "Beachte Rand und Beschnitt.", "Teste Lesbarkeit."],
        tasks: ["Lege die Maße fest.", "Prüfe Rand und Beschnitt.", "Speichere eine Formatnotiz."],
        completionRequirement: "Das KDP-Format ist in Canva vorbereitet."
      },
      {
        title: "Innenseiten bauen",
        learningGoal: "Du baust Seitentypen, Wiederholungen, Ordnung und Exportlogik auf.",
        steps: ["Wähle einen Seitentyp.", "Erstelle eine Musterseite.", "Dupliziere wiederkehrende Seiten.", "Prüfe Reihenfolge und Einheitlichkeit."],
        tasks: ["Erstelle eine Musterseite.", "Baue mindestens drei Seiten.", "Prüfe die Reihenfolge."],
        completionRequirement: "Erste Innenseiten sind gestaltet."
      },
      {
        title: "Frontcover erstellen",
        learningGoal: "Du gestaltest Frontcover mit Titel, Untertitel, Blickfang und Zielgruppe.",
        steps: ["Prüfe deine Positionierung.", "Lege Titelhierarchie fest.", "Wähle einen visuellen Blickfang.", "Teste Lesbarkeit auf kleiner Größe."],
        tasks: ["Erstelle einen Cover-Entwurf.", "Prüfe Titel und Untertitel.", "Speichere eine kleine Vorschau."],
        completionRequirement: "Ein Frontcover-Entwurf liegt vor."
      },
      {
        title: "Fullcover vorbereiten",
        learningGoal: "Du planst Rückseite, Buchrücken, Maße und Proportionen.",
        steps: ["Sammle Formatdaten.", "Plane Rückseite und Buchrücken.", "Prüfe Maße später mit KDP-Vorgaben.", "Speichere offene Punkte."],
        tasks: ["Erstelle eine Fullcover-Notiz.", "Plane Rückseitentext.", "Notiere offene Maßprüfungen."],
        completionRequirement: "Das Fullcover ist vorbereitet."
      },
      {
        title: "PDF sauber exportieren",
        learningGoal: "Du exportierst Druck-PDFs mit Qualität und klarer Dateibenennung.",
        steps: ["Wähle den richtigen Export.", "Prüfe Qualität.", "Benutze klare Dateinamen.", "Speichere Export und Arbeitsdatei getrennt."],
        tasks: ["Exportiere eine Test-PDF.", "Prüfe den Dateinamen.", "Speichere Export im Export-Ordner."],
        completionRequirement: "Ein sauber benannter PDF-Export liegt vor."
      }
    ]
  },
  {
    moduleNumber: "09",
    phase: "Buch bauen",
    title: "Der Qualitätscheck: Bevor es zu Amazon geht",
    description: "Vor dem Upload wird geprüft, ob das Buch sauber, nutzbar und professionell genug ist.",
    learningGoal: "Du prüfst Text, Design, Bilder, Cover, Druckdatei und No-Gos vor dem Upload.",
    estimatedDuration: "6 Lektionen",
    outcome: "Das Buch ist bereit für den KDP-Upload oder einen Probedruck.",
    lessons: [
      {
        title: "Textcheck durchführen",
        learningGoal: "Du prüfst Rechtschreibung, Sinn, Wiederholungen und falsche Aussagen.",
        steps: ["Lies den Text langsam.", "Markiere Fehler.", "Entferne Wiederholungen.", "Prüfe Aussagen, die faktisch unsicher sind."],
        tasks: ["Prüfe einen Textabschnitt.", "Korrigiere Fehler.", "Notiere offene Faktenchecks."],
        completionRequirement: "Der Textcheck ist dokumentiert."
      },
      {
        title: "Designcheck durchführen",
        learningGoal: "Du prüfst Lesbarkeit, Abstände, Ränder und einheitlichen Look.",
        steps: ["Prüfe Schriftgrößen.", "Prüfe Abstände.", "Prüfe Ränder.", "Vergleiche mehrere Seiten auf Einheitlichkeit."],
        tasks: ["Prüfe drei Seiten.", "Notiere Layoutfehler.", "Korrigiere mindestens einen Fehler."],
        completionRequirement: "Der Designcheck ist abgeschlossen."
      },
      {
        title: "Bildcheck durchführen",
        learningGoal: "Du prüfst Bilder auf Artefakte, falsche Proportionen und kaputte Details.",
        steps: ["Zoome Bilder an.", "Prüfe Hände, Gesichter, Augen und Proportionen.", "Markiere kaputte Elemente.", "Ersetze problematische Bilder."],
        tasks: ["Prüfe alle Hauptbilder.", "Markiere problematische Bilder.", "Entscheide über Ersetzen oder Korrigieren."],
        completionRequirement: "Der Bildcheck ist dokumentiert."
      },
      {
        title: "Covercheck durchführen",
        learningGoal: "Du prüfst Titel, Zielgruppe und visuelle Klarheit des Covers.",
        steps: ["Prüfe Lesbarkeit in kleiner Ansicht.", "Prüfe Zielgruppen-Signal.", "Entferne Überladung.", "Vergleiche mit Konkurrenz."],
        tasks: ["Teste das Cover klein.", "Notiere eine Coverkorrektur.", "Prüfe Titel und Untertitel."],
        completionRequirement: "Das Cover ist uploadnah geprüft."
      },
      {
        title: "Druckcheck durchführen",
        learningGoal: "Du prüfst PDF, Seitenreihenfolge, leere Seiten, Beschnitt und Vorschau.",
        steps: ["Öffne die PDF.", "Prüfe Seitenreihenfolge.", "Prüfe leere Seiten.", "Prüfe Beschnitt und Vorschau."],
        tasks: ["Prüfe die Druck-PDF.", "Notiere Seitenfehler.", "Entscheide, ob ein Probedruck sinnvoll ist."],
        completionRequirement: "Der Druckcheck ist abgeschlossen."
      },
      {
        title: "No-Go-Liste prüfen",
        learningGoal: "Du vermeidest verbotene Versprechen, fremde Marken und irreführende Angaben.",
        steps: ["Prüfe Titel und Beschreibung.", "Markiere Markenbegriffe.", "Streiche übertriebene Claims.", "Notiere externe Prüfbedarfe."],
        tasks: ["Prüfe dein Buch gegen No-Gos.", "Entferne eine riskante Formulierung.", "Speichere die No-Go-Checkliste."],
        completionRequirement: "No-Gos sind geprüft und riskante Aussagen markiert."
      }
    ]
  },
  {
    moduleNumber: "10",
    phase: "Veröffentlichen",
    title: "KDP startklar machen: Konto, Steuerinfos und Zahlungsdaten",
    description: "Die technischen Hürden bei KDP werden ruhig und einfach abgearbeitet.",
    learningGoal: "Du bereitest Konto, Daten und Unterlagen für den Upload vor.",
    estimatedDuration: "6 Lektionen",
    outcome: "Das KDP-Konto ist grundsätzlich uploadbereit.",
    lessons: [
      {
        title: "KDP-Konto anlegen oder einloggen",
        learningGoal: "Du kommst sicher in dein KDP-Konto.",
        steps: ["Öffne KDP.", "Melde dich an oder lege ein Konto an.", "Prüfe Zugriff und Spracheinstellungen.", "Speichere keine Passwörter im Kursdokument."],
        tasks: ["Logge dich in KDP ein.", "Notiere, ob der Zugriff funktioniert.", "Markiere offene Konto-Probleme."],
        completionRequirement: "Der KDP-Zugang funktioniert."
      },
      {
        title: "Autoren- und Publisher-Daten verstehen",
        learningGoal: "Du ordnest ein, welche Daten in KDP sichtbar oder organisatorisch relevant sind.",
        steps: ["Prüfe Profilbereiche.", "Unterscheide Autorname und Kontodaten.", "Notiere offene Fragen.", "Ändere nichts, was du nicht verstehst."],
        tasks: ["Prüfe deine Profildaten.", "Notiere den geplanten Autorennamen.", "Markiere offene Datenfragen."],
        completionRequirement: "Autoren- und Publisher-Daten sind eingeordnet."
      },
      {
        title: "Steuerinformationen einordnen",
        learningGoal: "Du verstehst den Steuerbereich als Pflichtschritt, nicht als Kurs-Steuerberatung.",
        steps: ["Öffne den Steuerbereich.", "Lies die angeforderten Daten.", "Lege Unterlagen bereit.", "Hole externe Hilfe, wenn du unsicher bist."],
        tasks: ["Notiere benötigte Steuerdaten.", "Markiere Fragen für externe Prüfung.", "Speichere den Status im Steuerordner."],
        completionRequirement: "Der Steuerbereich ist vorbereitet oder als externe Prüfung markiert."
      },
      {
        title: "Zahlungsdaten hinterlegen",
        learningGoal: "Du bereitest Zahlungsdaten für Auszahlungen vor.",
        steps: ["Prüfe Zahlungsbereich.", "Lege Bankdaten bereit.", "Trage Daten vorsichtig ein.", "Kontrolliere die Eingabe."],
        tasks: ["Prüfe, welche Zahlungsdaten benötigt werden.", "Notiere den Status.", "Markiere offene Bankdaten-Fragen."],
        completionRequirement: "Zahlungsdaten sind vorbereitet oder hinterlegt."
      },
      {
        title: "Unterlagen bereitlegen",
        learningGoal: "Du legst Adresse, Bankdaten, Steuerdaten und Buchdateien bereit.",
        steps: ["Erstelle eine Unterlagenliste.", "Prüfe Adresse und Bankdaten.", "Prüfe Steuerdaten.", "Lege Buchdateien griffbereit ab."],
        tasks: ["Erstelle eine Upload-Unterlagenliste.", "Markiere vorhandene Unterlagen.", "Notiere fehlende Unterlagen."],
        completionRequirement: "Die KDP-Unterlagenliste ist vorbereitet."
      },
      {
        title: "Externe Hilfe richtig einordnen",
        learningGoal: "Du weißt, wann Steuerfragen nicht vom Kurs beantwortet werden.",
        steps: ["Markiere Steuer- und Rechtsfragen.", "Trenne technische Eingabe von fachlicher Bewertung.", "Notiere Ansprechpartner oder nächste Prüfung.", "Arbeite erst weiter, wenn Pflichtdaten klar sind."],
        tasks: ["Erstelle eine Frage-Liste.", "Markiere externe Prüfbedarfe.", "Plane den nächsten Schritt."],
        completionRequirement: "Unklare Steuerfragen sind als externe Prüfung markiert."
      }
    ]
  },
  {
    moduleNumber: "11",
    phase: "Veröffentlichen",
    title: "Ab zu Amazon: Upload, Buchdaten und Veröffentlichung",
    description: "Das Buch wird bei KDP angelegt, geprüft und veröffentlicht.",
    learningGoal: "Du legst das Buchprojekt an, füllst Buchdaten aus und prüfst Vorschau und Veröffentlichung.",
    estimatedDuration: "7 Lektionen",
    outcome: "Das Buch ist hochgeladen und bereit zur Veröffentlichung oder Prüfung.",
    lessons: [
      {
        title: "Neues Buchprojekt in KDP anlegen",
        learningGoal: "Du startest ein neues Buchprojekt in KDP.",
        steps: ["Wähle die passende Buchart.", "Lege das Projekt an.", "Speichere Zwischenschritte.", "Prüfe, ob du im richtigen Konto bist."],
        tasks: ["Lege ein Buchprojekt an.", "Notiere Projektstatus.", "Speichere den KDP-Arbeitsschritt."],
        completionRequirement: "Das KDP-Buchprojekt ist angelegt."
      },
      {
        title: "Titel, Untertitel und Autor eintragen",
        learningGoal: "Du trägst die wichtigsten sichtbaren Buchdaten ein.",
        steps: ["Übertrage Titel.", "Übertrage Untertitel.", "Trage Autor ein.", "Prüfe Schreibweise und Konsistenz."],
        tasks: ["Trage Titel ein.", "Trage Autor ein.", "Prüfe die Schreibweise."],
        completionRequirement: "Die Hauptbuchdaten sind eingetragen."
      },
      {
        title: "Beschreibung und Suchbegriffe eintragen",
        learningGoal: "Du füllst Beschreibung und Suchbegriffe verständlich aus.",
        steps: ["Übertrage die Buchbeschreibung.", "Prüfe Nutzen und Zielgruppe.", "Trage Suchbegriffe ein.", "Vermeide Keyword-Spam."],
        tasks: ["Füge die Beschreibung ein.", "Lege Suchbegriffe fest.", "Prüfe auf Übertreibungen."],
        completionRequirement: "Beschreibung und Suchbegriffe sind vorbereitet."
      },
      {
        title: "Keywords und Kategorien auswählen",
        learningGoal: "Du wählst Keywords und Kategorien einfach und passend.",
        steps: ["Prüfe deine Keyword-Liste.", "Wähle passende Kategorien.", "Streiche unpassende Begriffe.", "Dokumentiere deine Auswahl."],
        tasks: ["Wähle Kategorien.", "Prüfe Keywords.", "Speichere die Auswahl."],
        completionRequirement: "Keywords und Kategorien sind dokumentiert."
      },
      {
        title: "Preis, Märkte und Druckoptionen verstehen",
        learningGoal: "Du verstehst Preis, Märkte, Druckoptionen und Royalty auf Upload-Niveau.",
        steps: ["Prüfe Druckoptionen.", "Lege Preis grob fest.", "Prüfe Märkte.", "Notiere Royalty und Druckkosten."],
        tasks: ["Wähle Druckoptionen.", "Lege einen Startpreis fest.", "Notiere Druckkosten."],
        completionRequirement: "Preis- und Druckoptionen sind vorbereitet."
      },
      {
        title: "Manuskript und Cover hochladen",
        learningGoal: "Du lädst die fertigen Buchdateien hoch.",
        steps: ["Wähle die richtige Manuskriptdatei.", "Wähle die richtige Coverdatei.", "Starte den Upload.", "Warte auf Verarbeitung."],
        tasks: ["Lade Manuskript hoch.", "Lade Cover hoch.", "Notiere Fehlermeldungen falls vorhanden."],
        completionRequirement: "Manuskript und Cover sind hochgeladen oder Fehler sind dokumentiert."
      },
      {
        title: "Online-Vorschau und Veröffentlichung prüfen",
        learningGoal: "Du prüfst Vorschau, Fehler und entscheidest über Veröffentlichung oder Probedruck.",
        steps: ["Öffne die Online-Vorschau.", "Prüfe Seiten und Cover.", "Behebe Fehler.", "Entscheide: veröffentlichen oder zuerst Probedruck."],
        tasks: ["Prüfe die Vorschau.", "Notiere Fehler.", "Treffe die Veröffentlichungsentscheidung."],
        completionRequirement: "Das Buch ist bereit zur Veröffentlichung oder Prüfung."
      }
    ]
  },
  {
    moduleNumber: "12",
    phase: "Veröffentlichen",
    title: "Nach dem Upload: Pflichten, Belege und Ordnung",
    description: "Nach der Veröffentlichung wird Ordnung geschaffen, ohne Rechts- oder Steuer-Vorlesung.",
    learningGoal: "Du legst Pflicht-, Datenschutz-, Report- und Belegthemen als klare Checkpunkte ab.",
    estimatedDuration: "6 Lektionen",
    outcome: "Die Teilnehmerin weiß, was nach Veröffentlichung organisatorisch wichtig ist.",
    lessons: [
      {
        title: "Impressum und Pflichtangaben prüfen",
        learningGoal: "Du prüfst Impressum und Pflichtangaben als aktuellen Checkpunkt.",
        steps: ["Notiere, welche Pflichtangaben relevant sein könnten.", "Prüfe aktuelle Quellen.", "Markiere externe Rechtsprüfung.", "Speichere den Status."],
        tasks: ["Erstelle einen Pflichtangaben-Checkpunkt.", "Markiere offene Rechtsfragen.", "Speichere den Status."],
        completionRequirement: "Pflichtangaben sind als Prüfpunkt dokumentiert."
      },
      {
        title: "Pflichtexemplare und DNB einordnen",
        learningGoal: "Du nimmst Pflichtexemplare, DNB und ggf. Landesbibliothek als Checkpunkt auf.",
        steps: ["Notiere, dass Pflichten aktuell geprüft werden müssen.", "Prüfe, ob dein Buch betroffen ist.", "Speichere Fristen oder Hinweise.", "Hole Hilfe bei Unsicherheit."],
        tasks: ["Erstelle einen DNB-Checkpunkt.", "Notiere offene Fragen.", "Markiere den aktuellen Status."],
        completionRequirement: "Pflichtexemplar-Themen sind nicht vergessen."
      },
      {
        title: "Datenschutz praktisch prüfen",
        learningGoal: "Du prüfst Website, Linkliste, Newsletter, Tracking und Affiliate-Hinweise praktisch.",
        steps: ["Liste deine externen Links.", "Prüfe Newsletter oder Tracking.", "Markiere Affiliate-Hinweise.", "Notiere Datenschutz-Prüfbedarf."],
        tasks: ["Erstelle eine Datenschutz-Checkliste.", "Markiere Affiliate-Hinweise.", "Notiere externe Prüfbedarfe."],
        completionRequirement: "Datenschutz ist als praktischer Checkpunkt angelegt."
      },
      {
        title: "KDP-Reports und Belege ablegen",
        learningGoal: "Du legst Reports, Auszahlungen und Belege geordnet ab.",
        steps: ["Öffne KDP-Reports.", "Lege Belegordner an.", "Speichere Reports oder Hinweise.", "Notiere den monatlichen Ablauf."],
        tasks: ["Lege einen Belegordner an.", "Notiere, wo Reports liegen.", "Plane einen monatlichen Check."],
        completionRequirement: "Reports und Belege haben einen festen Ablageort."
      },
      {
        title: "Self-Billing und Rechnungen einordnen",
        learningGoal: "Du ordnest Rechnung, Gutschrift und Self-Billing als Buchhaltungsthema ein.",
        steps: ["Prüfe aktuelle KDP-Hilfe.", "Notiere, welche Dokumente verfügbar sind.", "Markiere steuerliche Fragen.", "Lege Belege ab."],
        tasks: ["Notiere Self-Billing als Prüfpunkt.", "Speichere Beleg-Hinweise.", "Markiere externe Steuerfragen."],
        completionRequirement: "Self-Billing und Rechnungen sind als Buchhaltungspunkt dokumentiert."
      },
      {
        title: "Steuerordner anlegen",
        learningGoal: "Du legst Ordnung für Einnahmen, Ausgaben, Belege, Tools und Werbung an.",
        steps: ["Erstelle Steuerordner.", "Lege Unterordner an.", "Sortiere Einnahmen und Ausgaben.", "Plane regelmäßige Ablage."],
        tasks: ["Lege den Steuerordner an.", "Erstelle Unterordner.", "Notiere den Ablagerhythmus."],
        completionRequirement: "Der Steuerordner ist eingerichtet."
      }
    ]
  },
  {
    moduleNumber: "13",
    phase: "Sichtbar machen",
    title: "Das Buch ins Schaufenster stellen: Beschreibung, Mockups und A+ Content",
    description: "Das Buch wird schöner, klarer und verkaufsfähiger präsentiert.",
    learningGoal: "Du verbesserst Buchbeschreibung, Positionierung, Mockups, A+ Content und Autorenauftritt.",
    estimatedDuration: "6 Lektionen",
    outcome: "Das Buch sieht nach außen professioneller und klarer aus.",
    lessons: [
      {
        title: "Buchbeschreibung verbessern",
        learningGoal: "Du schreibst Nutzen, Zielgruppe und klare Sprache in die Beschreibung.",
        steps: ["Lies die aktuelle Beschreibung.", "Markiere Nutzen und Zielgruppe.", "Streiche unklare Sätze.", "Formuliere eine klare Version."],
        tasks: ["Überarbeite die Beschreibung.", "Markiere Nutzenargumente.", "Speichere die finale Version."],
        completionRequirement: "Die Buchbeschreibung ist klarer und nutzerorientiert."
      },
      {
        title: "Positionierung schärfen",
        learningGoal: "Du klärst, warum dieses Buch, für wen und zu welchem Anlass passt.",
        steps: ["Prüfe Zielgruppe.", "Prüfe Anlass.", "Formuliere den Unterschied.", "Übertrage die Positionierung in Beschreibung und Mockups."],
        tasks: ["Schreibe eine Positionierung.", "Notiere Anlass und Zielgruppe.", "Prüfe die Verbindung zum Cover."],
        completionRequirement: "Die Außenpositionierung ist geschärft."
      },
      {
        title: "Mockups erstellen",
        learningGoal: "Du erstellst authentische Mockups ohne Übertreibung.",
        steps: ["Wähle passende Mockup-Art.", "Nutze das richtige Format.", "Vermeide unrealistische Darstellungen.", "Speichere Mockups klar benannt."],
        tasks: ["Erstelle ein Mockup.", "Prüfe Format und Echtheit.", "Speichere es im Marketingordner."],
        completionRequirement: "Mindestens ein sauberes Mockup liegt vor."
      },
      {
        title: "A+ Content planen",
        learningGoal: "Du wählst Module, verstehst Bannergrößen und ordnest die Reihenfolge.",
        steps: ["Sammle Nutzenargumente.", "Wähle A+ Module.", "Plane Reihenfolge.", "Notiere benötigte Bilder und Texte."],
        tasks: ["Skizziere A+ Content.", "Wähle Module aus.", "Notiere benötigte Assets."],
        completionRequirement: "Eine A+ Content Struktur ist geplant."
      },
      {
        title: "A+ Content Go/No-Gos beachten",
        learningGoal: "Du vermeidest Premium-Badges, übertriebene Claims und unzulässige Vergleiche.",
        steps: ["Prüfe Aussagen.", "Streiche übertriebene Claims.", "Vermeide Vergleichsbehauptungen.", "Speichere eine No-Go-Liste."],
        tasks: ["Prüfe deinen A+ Entwurf.", "Entferne riskante Aussagen.", "Speichere No-Gos."],
        completionRequirement: "A+ Content ist gegen No-Gos geprüft."
      },
      {
        title: "Autorenprofil vorbereiten",
        learningGoal: "Du bereitest Autorenprofil oder Markenauftritt einfach vor.",
        steps: ["Schreibe eine kurze Autorennotiz.", "Prüfe Ton und Glaubwürdigkeit.", "Verbinde Profil und Buchnutzen.", "Speichere die Profilversion."],
        tasks: ["Schreibe eine Autorenkurzbeschreibung.", "Prüfe, ob sie zum Buch passt.", "Speichere sie im Marketingordner."],
        completionRequirement: "Ein einfacher Autorenauftritt ist vorbereitet."
      }
    ]
  },
  {
    moduleNumber: "14",
    phase: "Sichtbar machen",
    title: "Marketing, das machbar bleibt",
    description: "Marketing wird schnell, natürlich und wiederholbar statt zeitfressend.",
    learningGoal: "Du baust einen einfachen Marketingstart mit Alltagssprache, 80/20-Regel und Wochenplan.",
    estimatedDuration: "7 Lektionen",
    outcome: "Ein einfacher Marketingstart steht.",
    lessons: [
      {
        title: "Zielgruppe in Alltagssprache beschreiben",
        learningGoal: "Du beschreibst deine Zielgruppe so, dass Content natürlich klingt.",
        steps: ["Übersetze Fachsprache in Alltagssprache.", "Beschreibe die Situation deiner Leser.", "Formuliere drei typische Sätze.", "Nutze diese Sprache für Posts."],
        tasks: ["Schreibe drei Alltagssätze.", "Prüfe, ob sie echt klingen.", "Speichere sie als Content-Basis."],
        completionRequirement: "Die Zielgruppe ist in Alltagssprache beschrieben."
      },
      {
        title: "80/20-Regel anwenden",
        learningGoal: "Du planst 80 Prozent Mehrwert und 20 Prozent Verkauf.",
        steps: ["Sammle Mehrwertideen.", "Sammle Verkaufsimpulse.", "Prüfe das Verhältnis.", "Plane sanfte Hinweise statt Dauerwerbung."],
        tasks: ["Notiere fünf Mehrwertideen.", "Notiere einen Verkaufsimpuls.", "Prüfe die 80/20-Regel."],
        completionRequirement: "Ein ausgewogener Content-Ansatz steht."
      },
      {
        title: "Kanäle einordnen",
        learningGoal: "Du verstehst Instagram, TikTok und Pinterest nach Zweck.",
        steps: ["Ordne jeden Kanal ein.", "Wähle einen Startkanal.", "Notiere, warum dieser Kanal passt.", "Plane nicht alle Kanäle gleichzeitig."],
        tasks: ["Wähle einen Startkanal.", "Begründe die Auswahl.", "Lege eine Später-Liste für andere Kanäle an."],
        completionRequirement: "Ein Startkanal ist festgelegt."
      },
      {
        title: "Richtige Reels planen",
        learningGoal: "Du planst Reels mit 9:16, Hook, Szenenplan, Voiceover und Caption.",
        steps: ["Wähle ein Reel-Thema.", "Schreibe einen Hook.", "Plane Szenen.", "Schreibe Voiceover und Caption."],
        tasks: ["Erstelle einen Reel-Plan.", "Schreibe einen Hook.", "Notiere Caption und Szenen."],
        completionRequirement: "Ein Reel ist geplant."
      },
      {
        title: "Stories, Pins und Posts entwickeln",
        learningGoal: "Du entwickelst schnelle Content-Ideen für einfache Formate.",
        steps: ["Sammle Fragen deiner Zielgruppe.", "Wandle sie in Posts um.", "Plane Stories oder Pins.", "Speichere die besten Ideen."],
        tasks: ["Sammle zehn Content-Ideen.", "Wähle drei schnelle Formate.", "Speichere die Ideenliste."],
        completionRequirement: "Eine kleine Content-Ideenliste steht."
      },
      {
        title: "Captions und Hashtags sauber nutzen",
        learningGoal: "Du nutzt Captions und vier relevante Hashtags statt Keyword-Spam.",
        steps: ["Schreibe eine kurze Caption.", "Füge Mehrwert ein.", "Wähle vier passende Hashtags.", "Streiche Spam-Hashtags."],
        tasks: ["Schreibe eine Caption.", "Wähle vier Hashtags.", "Prüfe, ob die Caption natürlich klingt."],
        completionRequirement: "Eine saubere Caption ist fertig."
      },
      {
        title: "Mini-Contentplan erstellen",
        learningGoal: "Du planst, was du diese Woche postest.",
        steps: ["Wähle drei Inhalte.", "Lege Tage fest.", "Notiere Format und Hook.", "Plane die Umsetzung realistisch."],
        tasks: ["Erstelle einen Wochenplan.", "Plane drei Posts.", "Notiere den ersten Umsetzungstermin."],
        completionRequirement: "Ein einfacher Wochen-Contentplan steht."
      }
    ]
  },
  {
    moduleNumber: "15",
    phase: "Sichtbar machen",
    title: "Affiliate und Empfehlungen: Digistore24, Links und Zusatzprodukte",
    description: "Affiliate wird sinnvoll mit Büchern und Kursen verbunden, ohne plump zu verkaufen.",
    learningGoal: "Du verstehst Affiliate als Empfehlungssystem mit Kennzeichnung, passenden Produkten und sauberer Linkliste.",
    estimatedDuration: "7 Lektionen",
    outcome: "Die Teilnehmerin versteht Affiliate als sinnvolles Empfehlungssystem.",
    lessons: [
      {
        title: "Affiliate einfach erklärt",
        learningGoal: "Du verstehst Empfehlung, Provision und Kennzeichnung.",
        steps: ["Lies die Grundlogik.", "Trenne Hilfe von Werbung.", "Notiere Provisionsprinzip.", "Markiere Kennzeichnung als Pflicht."],
        tasks: ["Schreibe eine Affiliate-Kurzdefinition.", "Notiere eine sinnvolle Empfehlungsidee.", "Speichere Kennzeichnung als Checkpunkt."],
        completionRequirement: "Affiliate ist als Empfehlungssystem verstanden."
      },
      {
        title: "Digistore24 verstehen",
        learningGoal: "Du ordnest Account, Marktplatz, Produkt, Promolink und Werbemittel ein.",
        steps: ["Prüfe Digistore24-Grundbegriffe.", "Notiere Account- und Marktplatzlogik.", "Verstehe Promolinks.", "Speichere offene Fragen."],
        tasks: ["Notiere die Digistore24-Begriffe.", "Markiere aktuelle Hilfe als Prüfquelle.", "Speichere offene Fragen."],
        completionRequirement: "Digistore24-Grundbegriffe sind eingeordnet."
      },
      {
        title: "KreaMix-Kurs weiterempfehlen",
        learningGoal: "Du verstehst, wie der eigene Kurs sinnvoll weiterempfohlen werden kann.",
        steps: ["Prüfe Nutzenargumente.", "Formuliere eine ehrliche Empfehlung.", "Kennzeichne Werbung klar.", "Vermeide Fake-Versprechen."],
        tasks: ["Schreibe eine Empfehlungsidee.", "Prüfe Kennzeichnung.", "Streiche übertriebene Aussagen."],
        completionRequirement: "Eine saubere Empfehlungsidee ist formuliert."
      },
      {
        title: "Buch plus Zusatzprodukte denken",
        learningGoal: "Du findest passende Empfehlungen je Buchart, ohne das Buch mit Werbung zu überladen.",
        steps: ["Wähle deine Buchart.", "Sammle passende Zusatzprodukte.", "Prüfe echten Nutzen.", "Streiche unpassende Produkte."],
        tasks: ["Sammle fünf Zusatzprodukte.", "Wähle zwei sinnvolle Empfehlungen.", "Begründe den Nutzen."],
        completionRequirement: "Passende Zusatzprodukte sind ausgewählt."
      },
      {
        title: "Ressourcen-Seite oder Linkliste aufbauen",
        learningGoal: "Du baust Links sauber aus, statt das Buch mit Werbung zu überladen.",
        steps: ["Entscheide Linkliste oder Ressourcenseite.", "Ordne Empfehlungen nach Nutzen.", "Formuliere klare Hinweise.", "Prüfe Datenschutz und Kennzeichnung."],
        tasks: ["Skizziere eine Linkliste.", "Ordne Empfehlungen.", "Notiere Kennzeichnungstext."],
        completionRequirement: "Eine saubere Ressourcenstruktur ist geplant."
      },
      {
        title: "Kennzeichnung sichtbar machen",
        learningGoal: "Du kennzeichnest Werbung, Affiliate-Link und Provision klar sichtbar.",
        steps: ["Formuliere Kennzeichnung.", "Platziere sie sichtbar.", "Prüfe Verständlichkeit.", "Markiere externe Rechtsprüfung."],
        tasks: ["Schreibe einen Kennzeichnungssatz.", "Prüfe Sichtbarkeit.", "Notiere externe Prüfbedarfe."],
        completionRequirement: "Kennzeichnung ist als Pflichtbaustein vorbereitet."
      },
      {
        title: "80/20-Regel für Affiliate nutzen",
        learningGoal: "Du gibst zuerst echten Nutzen und danach einen sanften Link-Hinweis.",
        steps: ["Sammle Mehrwert.", "Formuliere Empfehlung nach dem Nutzen.", "Prüfe Ton.", "Streiche aggressive Verkaufsformeln."],
        tasks: ["Schreibe einen Mehrwertabschnitt.", "Füge einen sanften Link-Hinweis hinzu.", "Prüfe die Balance."],
        completionRequirement: "Eine Affiliate-Empfehlung folgt der 80/20-Regel."
      }
    ]
  },
  {
    moduleNumber: "16",
    phase: "Sichtbar machen",
    title: "Prompt- und Hook-Bibliothek",
    description: "Copy-Paste-Hilfen liegen bereit, damit nicht jedes Mal neu überlegt werden muss.",
    learningGoal: "Du baust eine Bibliothek für Prompts, Hooks, Captions und Checklisten auf.",
    estimatedDuration: "6 Lektionen",
    outcome: "Ein Werkzeugkasten mit Vorlagen, Hooks, Prompts und Checklisten ist fertig.",
    lessons: [
      {
        title: "Prompts für Nische und Buchidee sammeln",
        learningGoal: "Du sammelst Prompts für Nische, Buchidee, Struktur, Inhalte, Titel und Beschreibung.",
        steps: ["Sammle wiederverwendbare Prompts.", "Ordne sie nach Kursphase.", "Teste einen Prompt.", "Speichere die beste Version."],
        tasks: ["Speichere drei Buchideen-Prompts.", "Teste einen Prompt.", "Markiere den besten Prompt."],
        completionRequirement: "Erste Buchideen-Prompts sind gespeichert."
      },
      {
        title: "Prompts für Canva und Cover sammeln",
        learningGoal: "Du sammelst Prompts für Canva, Cover, Mockups und A+ Content.",
        steps: ["Sammle Design-Prompts.", "Ordne sie nach Zweck.", "Prüfe, ob sie klare Ausgabeformate haben.", "Speichere Vorlagen."],
        tasks: ["Speichere drei Design-Prompts.", "Teste einen Cover-Prompt.", "Notiere Verbesserungen."],
        completionRequirement: "Design-Prompts sind in der Bibliothek."
      },
      {
        title: "Prompts für Qualitätscheck nutzen",
        learningGoal: "Du sammelst Prompts für Qualitätscheck und Fehlerkorrektur.",
        steps: ["Sammle Prüf-Prompts.", "Ordne sie nach Text, Design, Cover und Upload.", "Teste einen Prompt.", "Speichere die finale Version."],
        tasks: ["Speichere drei Prüf-Prompts.", "Teste einen Qualitätscheck.", "Notiere Fehlerfunde."],
        completionRequirement: "Qualitätscheck-Prompts sind gespeichert."
      },
      {
        title: "Hook-Karten erstellen",
        learningGoal: "Du erstellst Hook-Karten für Social Media, Reels, Pins und Stories.",
        steps: ["Sammle Hook-Formeln.", "Passe sie an dein Buch an.", "Ordne sie nach Kanal.", "Speichere schnelle Varianten."],
        tasks: ["Erstelle zehn Hooks.", "Ordne sie nach Kanal.", "Wähle drei Favoriten."],
        completionRequirement: "Eine erste Hook-Sammlung ist fertig."
      },
      {
        title: "Caption-Vorlagen aufbauen",
        learningGoal: "Du baust Caption-Vorlagen mit 80/20-Aufbau.",
        steps: ["Sammle Caption-Strukturen.", "Beginne mit Mehrwert.", "Füge sanften CTA hinzu.", "Speichere Beispiele."],
        tasks: ["Erstelle drei Caption-Vorlagen.", "Prüfe die 80/20-Regel.", "Speichere eine finale Vorlage."],
        completionRequirement: "Caption-Vorlagen sind angelegt."
      },
      {
        title: "Checklisten bündeln",
        learningGoal: "Du bündelst KDP-Upload, Canva-Export, Qualitätscheck und Marketingstart.",
        steps: ["Sammle Checklisten.", "Ordne sie nach Kursphase.", "Entferne Dopplungen.", "Speichere die Bibliothek."],
        tasks: ["Bündle vier Checklisten.", "Ordne sie nach Phase.", "Markiere deine wichtigste Checkliste."],
        completionRequirement: "Die Bibliothek ist als Werkzeugkasten nutzbar."
      }
    ]
  },
  {
    moduleNumber: "17",
    phase: "Wiederholen",
    title: "Tipps, Tricks und Fehlerretter",
    description: "Typische Anfängerprobleme werden abgefangen und entdramatisiert.",
    learningGoal: "Du hast einen Erste-Hilfe-Bereich für KDP-, Canva-, Cover-, Content- und Verkaufsprobleme.",
    estimatedDuration: "7 Lektionen",
    outcome: "Die Teilnehmerin hat einen Erste-Hilfe-Bereich für typische Stolperstellen.",
    lessons: [
      {
        title: "Wenn KDP meckert",
        learningGoal: "Du ordnest KDP-Fehlermeldungen ruhig ein.",
        steps: ["Lies die Fehlermeldung langsam.", "Prüfe Datei, Format und Metadaten.", "Notiere die Ursache.", "Behebe nur einen Fehler nach dem anderen."],
        tasks: ["Erstelle eine KDP-Fehlernotiz.", "Notiere mögliche Ursachen.", "Plane den nächsten Prüfpunkt."],
        completionRequirement: "KDP-Fehler werden strukturiert statt hektisch bearbeitet."
      },
      {
        title: "Cover passt nicht",
        learningGoal: "Du prüfst Maße, Rücken, Beschnitt und Export.",
        steps: ["Prüfe Formatdaten.", "Prüfe Buchrücken.", "Prüfe Beschnitt.", "Exportiere erneut, wenn nötig."],
        tasks: ["Prüfe Covermaße.", "Notiere Abweichungen.", "Plane die Korrektur."],
        completionRequirement: "Coverprobleme sind eingegrenzt."
      },
      {
        title: "Canva-Datei sieht komisch aus",
        learningGoal: "Du prüfst Ränder, Schriften und Auflösung.",
        steps: ["Prüfe Ränder.", "Prüfe Schriftgrößen.", "Prüfe Auflösung.", "Teste den Export erneut."],
        tasks: ["Prüfe eine Canva-Datei.", "Notiere sichtbare Fehler.", "Korrigiere einen Fehler."],
        completionRequirement: "Canva-Probleme sind geprüft."
      },
      {
        title: "Buchbeschreibung reparieren",
        learningGoal: "Du verbesserst langweilige Buchbeschreibungen mit einem einfachen Reparatur-Prompt.",
        steps: ["Lies die Beschreibung.", "Markiere langweilige Stellen.", "Nutze einen Reparatur-Prompt.", "Prüfe das Ergebnis gegen Zielgruppe und Nutzen."],
        tasks: ["Überarbeite eine Beschreibung.", "Markiere den stärksten Nutzen.", "Speichere die neue Version."],
        completionRequirement: "Die Buchbeschreibung wurde verbessert."
      },
      {
        title: "Wenn Content-Ideen fehlen",
        learningGoal: "Du nutzt schnelle Hook- und Post-Formeln.",
        steps: ["Wähle ein Leserproblem.", "Nutze eine Hook-Formel.", "Erstelle drei Postideen.", "Wähle die einfachste Umsetzung."],
        tasks: ["Erstelle drei Content-Ideen.", "Wähle eine aus.", "Plane die Umsetzung."],
        completionRequirement: "Du hast wieder eine konkrete Content-Idee."
      },
      {
        title: "Wenn das Buch nicht sofort verkauft",
        learningGoal: "Du reagierst realistisch und prüfst nächste Schritte.",
        steps: ["Prüfe Erwartung und Zeitraum.", "Prüfe Listing, Cover und Sichtbarkeit.", "Wähle eine kleine Optimierung.", "Plane eine erneute Auswertung."],
        tasks: ["Notiere Verkaufsstatus.", "Wähle einen Prüfbereich.", "Plane eine Optimierung."],
        completionRequirement: "Ein realistischer nächster Schritt ist geplant."
      },
      {
        title: "Wann neu prüfen statt weiterbasteln",
        learningGoal: "Du erkennst, wann saubere Prüfung besser ist als endloses Basteln.",
        steps: ["Prüfe, ob das Problem wiederkehrt.", "Vergleiche Zielgruppe, Produkt und Sichtbarkeit.", "Entscheide: korrigieren, pausieren oder neu prüfen.", "Dokumentiere die Entscheidung."],
        tasks: ["Treffe eine Weiterarbeitsentscheidung.", "Begründe sie.", "Notiere den nächsten sauberen Schritt."],
        completionRequirement: "Du hast eine klare Entscheidung statt Endlos-Bastelei."
      }
    ]
  },
  {
    moduleNumber: "18",
    phase: "Wiederholen",
    title: "Dein nächstes Buch: Aus einem Projekt wird ein System",
    description: "Nach dem ersten Buch wird gezeigt, wie man den Ablauf wiederholt und verbessert.",
    learningGoal: "Du sicherst Vorlagen, wertest das erste Projekt aus und startest das nächste Buch schneller.",
    estimatedDuration: "6 Lektionen",
    outcome: "Die Teilnehmerin kann den Prozess erneut anwenden.",
    lessons: [
      {
        title: "Wiederverwendbares erkennen",
        learningGoal: "Du erkennst, was vom ersten Buch wiederverwendet werden kann.",
        steps: ["Prüfe Ordner und Dateien.", "Markiere wiederverwendbare Vorlagen.", "Trenne Buch-spezifisches von Systembausteinen.", "Speichere die Systembausteine."],
        tasks: ["Liste wiederverwendbare Elemente auf.", "Markiere Systembausteine.", "Speichere sie separat."],
        completionRequirement: "Wiederverwendbare Bausteine sind gesichert."
      },
      {
        title: "Eigene Vorlagen sichern",
        learningGoal: "Du sicherst Canva, Prompts, Checklisten und Ordnerstruktur.",
        steps: ["Kopiere Canva-Vorlagen.", "Speichere Prompts.", "Bündle Checklisten.", "Sichere die Ordnerstruktur."],
        tasks: ["Sichere eine Canva-Vorlage.", "Sichere drei Prompts.", "Speichere die Ordnerstruktur."],
        completionRequirement: "Deine Vorlagen sind für das nächste Buch nutzbar."
      },
      {
        title: "Zweite Buchidee schneller prüfen",
        learningGoal: "Du nutzt den Prozess, um eine zweite Idee schneller zu prüfen.",
        steps: ["Wähle eine neue Idee.", "Nutze die Nischenprüfung.", "Prüfe Machbarkeit.", "Entscheide schneller als beim ersten Buch."],
        tasks: ["Wähle eine zweite Idee.", "Prüfe sie grob.", "Treffe eine erste Entscheidung."],
        completionRequirement: "Eine zweite Buchidee ist grob geprüft."
      },
      {
        title: "Serien und Buchfamilien planen",
        learningGoal: "Du denkst ähnliche Zielgruppe, ähnliche Optik und neuen Nutzen zusammen.",
        steps: ["Prüfe deine Zielgruppe.", "Sammle verwandte Buchideen.", "Plane wiedererkennbare Optik.", "Achte auf neuen Nutzen statt Kopie."],
        tasks: ["Sammle drei Serienideen.", "Notiere ein wiederkehrendes Designelement.", "Formuliere den neuen Nutzen."],
        completionRequirement: "Eine mögliche Buchfamilie ist skizziert."
      },
      {
        title: "Einfach auswerten",
        learningGoal: "Du erkennst, was gut lief und was verbessert werden muss.",
        steps: ["Prüfe Prozess und Ergebnis.", "Notiere gute Bausteine.", "Notiere Engstellen.", "Wähle eine Verbesserung für das nächste Projekt."],
        tasks: ["Schreibe eine kurze Auswertung.", "Markiere eine Stärke.", "Markiere eine Verbesserung."],
        completionRequirement: "Eine einfache Projektauswertung liegt vor."
      },
      {
        title: "Kleines KDP-System aufbauen",
        learningGoal: "Du baust langsam ein wiederholbares System statt einzelner Zufallsprojekte.",
        steps: ["Bündle Vorlagen.", "Plane Wiederholungsablauf.", "Setze realistische Veröffentlichungsziele.", "Arbeite Schritt für Schritt weiter."],
        tasks: ["Skizziere deinen Wiederholungsablauf.", "Lege ein realistisches nächstes Ziel fest.", "Speichere dein KDP-Systemdokument."],
        completionRequirement: "Dein wiederholbarer KDP-Ablauf ist skizziert."
      }
    ]
  }
];

export const moduleOutcomes: Record<string, string> = Object.fromEntries(
  moduleBlueprints.map((module) => [`module-${module.moduleNumber}`, module.outcome])
);

function createLesson(moduleId: string, moduleNumber: string, lesson: LessonBlueprint, index: number): Lesson {
  const lessonNumber = `${moduleNumber}.${index}`;

  return {
    id: `${moduleId}-lesson-${index}`,
    moduleId,
    lessonNumber,
    title: lesson.title,
    learningGoal: lesson.learningGoal,
    estimatedDuration: "20-35 Minuten",
    contentSections: [
      {
        heading: "Was machen wir jetzt?",
        body: lesson.learningGoal,
        review: defaultReviewInfo
      },
      {
        heading: "Warum kurz?",
        body: "Dieser Schritt bringt dein Buchprojekt sichtbar weiter. Du lernst nur das, was du für das nächste konkrete Ergebnis brauchst."
      },
      {
        heading: "Was ist am Ende fertig?",
        body: lesson.completionRequirement
      }
    ],
    video: {
      title: `${lessonNumber} ${lesson.title}`,
      duration: "03:00",
      status: "planned"
    },
    steps: lesson.steps,
    examples: [
      "Beispiel: Du arbeitest erst weiter, wenn das Ergebnis dieser Lektion schriftlich in deinem Projektordner steht.",
      "Beispiel: Unklare Fragen werden als Prüfpunkt notiert, statt den gesamten Kursfortschritt zu blockieren."
    ],
    downloads: [
      { title: `${lesson.title} Arbeitsblatt`, type: "worksheet" },
      { title: `${lesson.title} Kurzcheck`, type: "checklist" }
    ],
    tasks: lesson.tasks,
    quiz: [
      {
        question: "Wann ist diese Lektion abgeschlossen?",
        options: ["Wenn das Video angesehen wurde", "Wenn das sichtbare Arbeitsergebnis dokumentiert ist", "Wenn alle späteren Module verstanden sind"],
        answer: "Wenn das sichtbare Arbeitsergebnis dokumentiert ist"
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

export const checklistGroups: ChecklistGroup[] = coursePhases.map((phase, index) => ({
  id: `checklist-${index + 1}`,
  title: `${phase.title}: Module ${phase.modules}`,
  items: [
    `${phase.title}: Ergebnis der Phase dokumentieren`,
    `${phase.title}: offene Prüf- oder Rechtsfragen markieren`,
    `${phase.title}: nächsten konkreten Kursschritt festlegen`
  ]
}));

export const resourceTemplates: ResourceTemplate[] = [
  {
    category: "Start",
    title: "Kursordner- und Projektstart-Vorlage",
    description: "Ordner, Ziel, Arbeitsrhythmus und erstes Buchprojekt sauber anlegen.",
    fields: ["Projektziel", "Buchart", "Ordnerpfad", "Nächster Schritt"]
  },
  {
    category: "Spickzettel",
    title: "KreaMix-Begriffe-Spickzettel",
    description: "KDP-, Canva-, Affiliate- und Marketingbegriffe kurz und anfängerfreundlich sammeln.",
    fields: ["Begriff", "Kurz erklärt", "Wofür brauche ich das?", "Später prüfen"]
  },
  {
    category: "Buchidee",
    title: "Nischen- und Buchideen-Prüfung",
    description: "Zielgruppe, Kaufgrund, Buchart, Nachfrage und Machbarkeit in eine Entscheidung bringen.",
    fields: ["Zielgruppe", "Kaufgrund", "Buchart", "Machbarkeitsbewertung"]
  },
  {
    category: "Buchbau",
    title: "Seitenplan- und Materialliste",
    description: "Format, Seitentypen, Material und Canva-Vorbereitung für den Buchbau bündeln.",
    fields: ["Format", "Seitentyp", "Benötigtes Material", "Canva-Status"]
  },
  {
    category: "Upload",
    title: "KDP-Upload- und Pflichtcheck",
    description: "Konto, Buchdaten, Dateien, Vorschau, Belege und Pflichtpunkte kontrolliert abarbeiten.",
    fields: ["KDP-Feld", "Status", "Fehler/Prüfpunkt", "Erledigt am"]
  },
  {
    category: "Marketing",
    title: "Schaufenster-, Hook- und Affiliate-Plan",
    description: "Beschreibung, Mockups, A+ Content, Contentplan und Empfehlungen ohne Überforderung planen.",
    fields: ["Mehrwert", "Hook", "Kanal", "Kennzeichnung"]
  },
  {
    category: "System",
    title: "Nächstes-Buch-System",
    description: "Vorlagen, Prompts, Checklisten und Auswertung für das nächste Buch sichern.",
    fields: ["Wiederverwendbar", "Verbesserung", "Nächste Idee", "Systembaustein"]
  }
].map((template, index) => ({
  id: `template-${index + 1}`,
  ...template
}));
