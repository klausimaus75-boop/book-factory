import type { BookConceptWork, Project, StepResultVersion, WorkflowStatus } from "./types";
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
  { key: "narrativePerspective", label: "Erzählperspektive" },
  { key: "styleAndTone", label: "Stil und Ton" }
];

export const bookConceptQualityItems = [
  { id: "target-audience", label: "Zielgruppe wurde eingehalten" },
  { id: "age-appropriate", label: "Konzept ist altersgerecht" },
  { id: "main-character", label: "Hauptfigur ist klar definiert" },
  { id: "clear-plot", label: "Handlung ist verständlich" },
  { id: "logical-conflict", label: "Konflikt und Lösung sind logisch" },
  { id: "message", label: "Zentrale Botschaft ist erkennbar" },
  { id: "no-contradictions", label: "Keine Widersprüche vorhanden" },
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
  const trimmedThoughts = thoughts.trim();
  const thoughtsSection = trimmedThoughts
    ? `

Zusaetzliche Gedanken des Nutzers:
${trimmedThoughts}

Arbeite diese Gedanken sinnvoll in das Konzept ein. Wenn einzelne Gedanken den Projektdaten widersprechen, weise kurz darauf hin und orientiere dich an den verbindlichen Projektdaten.`
    : "";
  return `Du bist ein spezialisierter GPT für die Entwicklung professioneller Buchkonzepte.

Erstelle aus den folgenden Projektdaten ein vollständiges, logisches und zielgruppengerechtes Buchkonzept.

Projektinformationen:
- Projekttitel: ${project.title}
- Buchart: ${project.bookType}
- Thema: ${project.topic}
- Zielgruppe: ${project.targetAudience}
- Altersspanne: ${project.ageRange}
- Sprache: ${project.language}
- Buchformat: ${project.bookFormat}
- Beschnittzugabe Innenblock: ${project.interiorBleed ?? "Nein - ohne Beschnitt"}
- Seitenzahl: ${project.pageCount}
- Erzählperspektive: ${project.narrativePerspective}
- Stil und Ton: ${project.styleAndTone}${thoughtsSection}

Anforderungen:
- Sprache, Struktur und Idee müssen zur Zielgruppe, Buchart und Altersspanne passen.
- Bei erzählenden Büchern muss die Handlung verständlich, logisch und emotional nachvollziehbar sein.
- Bei Sach-, Planer-, Notiz-, Activity- oder Low-Content-Büchern muss die Struktur praktisch nutzbar und klar gegliedert sein.
- Figuren, Aufgaben, Kapitel oder Seitentypen müssen klare Rollen/Funktionen haben.
- Konflikt, Lösungsweg und Schluss dürfen keine logischen Widersprüche enthalten.
- Das Konzept muss zum geplanten Umfang und Buchformat passen.
- Die Tonalität muss dem Projekt entsprechen.
- Vermeide problematische, unpassende oder nicht zielgruppengerechte Inhalte.

Gib das Ergebnis exakt in dieser Struktur aus:

1. Arbeitstitel
2. Kernthema
3. Pädagogisches oder emotionales Ziel
4. Zielgruppe
5. Hauptfigur
6. Nebenfiguren
7. Ausgangssituation
8. Zentraler Konflikt
9. Lösungsweg
10. Schluss
11. Zentrale Botschaft
12. Kurze Gesamtzusammenfassung`;
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
