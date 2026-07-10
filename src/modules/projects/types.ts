export type WorkflowStatus = "not-started" | "in-progress" | "review" | "completed";

export type ProjectStatus = "Entwurf" | "In Bearbeitung" | "Abgeschlossen";

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  status: WorkflowStatus;
}

export interface StepResultVersion {
  id: string;
  content: string;
  createdAt: string;
}

export interface BookConceptWork {
  prompt: string;
  promptUpdatedAt?: string;
  result?: string;
  resultCreatedAt?: string;
  resultUpdatedAt?: string;
  previousVersions: StepResultVersion[];
  qualityChecks: Record<string, boolean>;
}

export interface Project {
  id: string;
  title: string;
  bookType: string;
  topic: string;
  targetAudience: string;
  ageRange: string;
  language: string;
  bookFormat: string;
  interiorBleed?: string;
  pageCount: number;
  narrativePerspective: string;
  styleAndTone: string;
  status: ProjectStatus;
  workflowSteps: WorkflowStep[];
  bookConcept?: BookConceptWork;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectFormValues {
  title: string;
  bookType: string;
  topic: string;
  targetAudience: string;
  ageRange: string;
  language: string;
  bookFormat: string;
  interiorBleed: string;
  pageCount: string;
  narrativePerspective: string;
  styleAndTone: string;
}

export type ProjectValidationErrors = Partial<Record<keyof ProjectFormValues, string>>;
