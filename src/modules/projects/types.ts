export type WorkflowStatus = "not-started" | "in-progress" | "completed";

export type ProjectStatus = "Entwurf" | "In Bearbeitung" | "Abgeschlossen";

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  status: WorkflowStatus;
}

export interface Project {
  id: string;
  title: string;
  bookType: "Kinderbuch";
  topic: string;
  targetAudience: string;
  ageRange: string;
  language: string;
  bookFormat: string;
  pageCount: number;
  narrativePerspective: string;
  styleAndTone: string;
  status: ProjectStatus;
  workflowSteps: WorkflowStep[];
  createdAt: string;
  updatedAt: string;
}

export interface ProjectFormValues {
  title: string;
  bookType: "Kinderbuch";
  topic: string;
  targetAudience: string;
  ageRange: string;
  language: string;
  bookFormat: string;
  pageCount: string;
  narrativePerspective: string;
  styleAndTone: string;
}

export type ProjectValidationErrors = Partial<Record<keyof ProjectFormValues, string>>;
