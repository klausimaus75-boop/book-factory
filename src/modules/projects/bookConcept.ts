import type { BookConceptWork, Project, StepResultVersion, WorkflowStatus } from "./types";
import { getConceptGptRecommendation } from "../settings/conceptGptAdvisor";
import { deriveProjectStatus } from "./workflow";

export const bookConceptStepId = "book-concept";

export const requiredBookConceptProjectFields: Array<{
  key: keyof Pick<
    Project,
    | "title"
    | "topic"
    | "targetAudience"
    | "ageRange"
    | "language"
    | "bookFormat"
    | "interiorBleed"
    | "pageCount"
    | "narrativePerspective"
    | "styleAndTone"
  >;
  label: string;
}> = [
  { key: "title", label: "Projekttitel" },
  { key: "topic", label: "Thema" },
  { key: "targetAudience", label: "Zielgruppe" },
  { key: "ageRange", label: "Altersspanne" },
  { key: "language", label: "Sprache" },
  { key: "bookFormat", label: "Buchformat" },
  { key: "interiorBleed", label: "Beschnittzugabe Innenblock" },
  { key: "pageCount", label: "Seitenzahl" },
  { key: "narrativePerspective", label: "Erzaehlperspektive" },
  { key: "styleAndTone", label: "Stil und Ton" }
];

export const bookConceptQualityItems = [
  { id: "target-audience", label: "Zielgruppe wurde eingehalten" },
  { id: "age-appropriate", label: "Konzept ist altersgerecht" },
  { id: "main-character", label: "Hauptfigur ist klar definiert" },
  { id: "clear-plot", label: "Handlung ist verstaendlich" },
  { id: "logical-conflict", label: "Konflikt und Loesung sind logisch" },
  { id: "message", label: "Zentrale Botschaft ist erkennbar" },
  { id: "no-contradictions", label: "Keine Widersprueche vorhanden" },
  { id: "scope-fit", label: "Umfang passt zum geplanten Buch" },
  { id: "tone-fit", label: "Sprache und Ton passen zum Projekt" }
];

export function createEmptyBookConceptWork(): BookConceptWork {
  return {
    thoughts: "",
    prompt: "",
    previousVersions: [],
    qualityChecks: Object.fromEntries(bookConceptQualityItems.map((item) => [item.id, false]))
  };
}

export function getBookConceptWork(project: Project): BookConceptWork {
  return {
    ...createEmptyBookConceptWork(),
    ...project.bookConcept,
    previousVersions: project.bookConcept?.previousVersions ?? [],
    qualityChecks: {
      ...createEmptyBookConceptWork().qualityChecks,
      ...(project.bookConcept?.qualityChecks ?? {})
    }
  };
}

export function getMissingBookConceptFields(project: Project): string[] {
  return requiredBookConceptProjectFields
    .filter(({ key }) => {
      const value = project[key];
      return value === undefined || value === null || String(value).trim() === "" || Number(value) <= 0;
    })
    .map((field) => field.label);
}

export function generateBookConceptPrompt(project: Project, thoughts = ""): string {
  const recommendation = getConceptGptRecommendation(project);
  const trimmedThoughts = thoughts.trim();
  const thoughtsSection = trimmedThoughts
    ? `

Gedanken des Nutzers aus dem Gedankenfenster:
${trimmedThoughts}

Verarbeite diese Gedanken aktiv:
- Extrahiere daraus Figuren, Konflikte, Schauplaetze, Ziel, Stimmung, besondere Wuensche und moegliche Szenen.
- Formuliere daraus ein klares Konzept, auch wenn die Gedanken roh, gesprochen, sprunghaft oder unvollstaendig sind.
- Triff sinnvolle fachliche Entscheidungen, wenn Details fehlen.
- Wenn Gedanken den verbindlichen Projektdaten widersprechen, nenne den Widerspruch kurz und priorisiere die Projektdaten.`
    : "";

  return `Du bist der ${recommendation.name}.

Aufgabenfokus:
${recommendation.focus}

Aufgabe:
Erstelle aus den Projektdaten und den Gedanken des Nutzers ein vollstaendiges, logisches, zielgruppengerechtes und direkt weiterverwendbares Buchkonzept.

Wichtig:
- Erzeuge nicht nur eine Ideensammlung.
- Erzeuge ein konkretes Buchkonzept, das als Grundlage fuer die naechsten Produktionsschritte dient.
- Die Vorgaben zu Seitenzahl, Altersspanne, Zielgruppe, Thema, Buchart, Sprache, Buchformat, Erzaehlperspektive sowie Stil und Ton sind verbindlich.
- Nutze die Nutzer-Gedanken als kreative Grundlage und bringe sie in eine professionelle Struktur.
- Stelle keine Rueckfragen. Gib klare Entscheidungen aus.

Verbindliche Projektdaten:
- Projekttitel: ${project.title}
- Buchart: ${project.bookType}
- Thema/Genre: ${project.topic}
- Zielgruppe: ${project.targetAudience}
- Altersspanne: ${project.ageRange}
- Sprache: ${project.language}
- Buchformat: ${project.bookFormat}
- Beschnittzugabe Innenblock: ${project.interiorBleed ?? "Nein - ohne Beschnitt"}
- Seitenzahl: ${project.pageCount}
- Erzaehlperspektive: ${project.narrativePerspective}
- Stil und Ton: ${project.styleAndTone}${thoughtsSection}

Konzeptanforderungen:
- Sprache, Struktur und Idee muessen zur Zielgruppe, Buchart und Altersspanne passen.
- Nutze die Seitenzahl als echte Umfangsvorgabe und erklaere, wie der geplante Inhalt auf ${project.pageCount} Seiten verteilt werden kann.
- Bei erzaehlenden Buechern muessen Handlung, Konflikt, Loesungsweg und Schluss verstaendlich, logisch und emotional nachvollziehbar sein.
- Bei Sach-, Planer-, Notiz-, Activity-, Mal-, Ausmal- oder Low-Content-Buechern muss die Struktur praktisch nutzbar, klar gegliedert und produktionstauglich sein.
- Figuren, Aufgaben, Kapitel, Module oder Seitentypen muessen klare Rollen und Funktionen haben.
- Das Konzept muss zum geplanten Umfang, Buchformat und zur spaeteren Produktion passen.
- Vermeide problematische, unpassende oder nicht zielgruppengerechte Inhalte.

Gib das Ergebnis exakt in dieser Struktur aus:

1. Arbeitstitel
2. Kernthema
3. Ziel des Buches
4. Zielgruppe und Altersangemessenheit
5. Buchart- und Genre-Einordnung
6. Umfangs- und Seitenlogik fuer ${project.pageCount} Seiten
7. Hauptfigur, Hauptnutzen oder Hauptstruktur
8. Nebenfiguren, Module, Aufgaben oder Seitentypen
9. Ausgangssituation oder Grundstruktur
10. Zentraler Konflikt, Kernproblem oder Nutzenversprechen
11. Loesungsweg, Dramaturgie oder Aufbau
12. Schluss, Ergebnis oder Abschlussnutzen
13. Zentrale Botschaft
14. Stil- und Tonvorgaben
15. Kurze Gesamtzusammenfassung
16. Naechste Produktionsschritte`;
}

export function canCompleteBookConcept(work: BookConceptWork): boolean {
  return Boolean(work.result?.trim()) && bookConceptQualityItems.every((item) => work.qualityChecks[item.id]);
}

export function updateBookConceptStatus(project: Project, status: WorkflowStatus): Project {
  const workflowSteps = project.workflowSteps.map((step) =>
    step.id === bookConceptStepId ? { ...step, status } : step
  );

  return {
    ...project,
    workflowSteps,
    status: deriveProjectStatus(workflowSteps),
    updatedAt: new Date().toISOString()
  };
}

export function saveBookConceptPrompt(project: Project, prompt: string, now = new Date()): Project {
  const work = getBookConceptWork(project);
  const withPrompt: Project = {
    ...project,
    bookConcept: {
      ...work,
      prompt,
      promptUpdatedAt: now.toISOString()
    },
    updatedAt: now.toISOString()
  };

  return updateBookConceptStatus(withPrompt, "in-progress");
}

export function saveBookConceptThoughts(project: Project, thoughts: string, now = new Date()): Project {
  const work = getBookConceptWork(project);
  const withThoughts: Project = {
    ...project,
    bookConcept: {
      ...work,
      thoughts,
      thoughtsUpdatedAt: now.toISOString()
    },
    updatedAt: now.toISOString()
  };

  return updateBookConceptStatus(withThoughts, "in-progress");
}

export function saveBookConceptResult(project: Project, result: string, now = new Date()): Project {
  const work = getBookConceptWork(project);
  const previousVersions: StepResultVersion[] = work.result?.trim()
    ? [
        {
          id: crypto.randomUUID(),
          content: work.result,
          createdAt: work.resultUpdatedAt ?? work.resultCreatedAt ?? now.toISOString()
        },
        ...work.previousVersions
      ]
    : work.previousVersions;

  const withResult: Project = {
    ...project,
    bookConcept: {
      ...work,
      result,
      resultCreatedAt: work.resultCreatedAt ?? now.toISOString(),
      resultUpdatedAt: now.toISOString(),
      previousVersions
    },
    updatedAt: now.toISOString()
  };

  return updateBookConceptStatus(withResult, "review");
}

export function updateBookConceptQuality(project: Project, itemId: string, checked: boolean): Project {
  const work = getBookConceptWork(project);

  return {
    ...project,
    bookConcept: {
      ...work,
      qualityChecks: {
        ...work.qualityChecks,
        [itemId]: checked
      }
    },
    updatedAt: new Date().toISOString()
  };
}
