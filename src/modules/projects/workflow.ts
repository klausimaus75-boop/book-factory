import type { WorkflowStatus, WorkflowStep } from "./types";

export const WORKFLOW_STATUS_LABELS: Record<WorkflowStatus, string> = {
  "not-started": "Nicht begonnen",
  "in-progress": "In Bearbeitung",
  review: "Zur Prüfung",
  completed: "Abgeschlossen"
};

export const workflowStatusOptions: WorkflowStatus[] = ["not-started", "in-progress", "review", "completed"];

export const defaultWorkflowSteps: WorkflowStep[] = [
  {
    id: "basic-data",
    title: "Grunddaten",
    description: "Projekt, Zielgruppe, Format und Tonalität sind vollständig erfasst.",
    status: "not-started"
  },
  {
    id: "book-concept",
    title: "Buchkonzept",
    description: "Die Buchidee wird zu einem klaren Kinderbuchkonzept ausgearbeitet.",
    status: "not-started"
  },
  {
    id: "characters",
    title: "Figuren",
    description: "Haupt- und Nebenfiguren werden konsistent definiert.",
    status: "not-started"
  },
  {
    id: "plot",
    title: "Handlung",
    description: "Anfang, Mitte, Konflikt und Auflösung werden strukturiert.",
    status: "not-started"
  },
  {
    id: "page-plan",
    title: "Seitenplan",
    description: "Die Geschichte wird auf Seiten oder Doppelseiten verteilt.",
    status: "not-started"
  },
  {
    id: "manuscript",
    title: "Manuskript",
    description: "Der vollständige Text entsteht auf Basis des freigegebenen Plans.",
    status: "not-started"
  },
  {
    id: "quality-review",
    title: "Qualitätsprüfung",
    description: "Sprache, Logik, Zielgruppe und Konsistenz werden geprüft.",
    status: "not-started"
  },
  {
    id: "image-prompts",
    title: "Bildprompts",
    description: "Illustrationsprompts werden passend zu Text und Figuren vorbereitet.",
    status: "not-started"
  },
  {
    id: "cover",
    title: "Cover",
    description: "Ein Cover-Konzept wird passend zu Thema, Alter und Ton entwickelt.",
    status: "not-started"
  },
  {
    id: "kdp-metadata",
    title: "KDP-Metadaten",
    description: "Titel, Beschreibung, Keywords und Kategorien werden vorbereitet.",
    status: "not-started"
  },
  {
    id: "completion",
    title: "Abschluss",
    description: "Alle Pflichtschritte sind geprüft und das Projekt ist strukturiert abgeschlossen.",
    status: "not-started"
  }
];

export function createDefaultWorkflowSteps(): WorkflowStep[] {
  return defaultWorkflowSteps.map((step) => ({ ...step }));
}

export function calculateProgress(steps: WorkflowStep[]): number {
  if (steps.length === 0) {
    return 0;
  }

  const completedStepWeight = steps.reduce((total, step) => {
    if (step.status === "completed") {
      return total + 1;
    }

    if (step.status === "in-progress" || step.status === "review") {
      return total + 0.5;
    }

    return total;
  }, 0);

  return Math.round((completedStepWeight / steps.length) * 100);
}

export function deriveProjectStatus(steps: WorkflowStep[]) {
  const completedSteps = steps.filter((step) => step.status === "completed").length;
  const activeSteps = steps.filter((step) => step.status === "in-progress" || step.status === "review").length;

  if (completedSteps === 0 && activeSteps === 0) {
    return "Entwurf" as const;
  }

  if (completedSteps === steps.length) {
    return "Abgeschlossen" as const;
  }

  return "In Bearbeitung" as const;
}
