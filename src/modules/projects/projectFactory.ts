import { createDefaultWorkflowSteps, deriveProjectStatus } from "./workflow";
import { projectSelectOptions } from "./projectOptions";
import type { Project, ProjectFormValues } from "./types";

export const emptyProjectFormValues: ProjectFormValues = {
  title: "",
  bookType: "Kinderbuch",
  topic: projectSelectOptions.topic[0],
  targetAudience: "Erwachsene",
  ageRange: "18+",
  language: projectSelectOptions.language[0],
  bookFormat: "6 x 9 Zoll / 152,4 x 228,6 mm",
  interiorBleed: "Nein - ohne Beschnitt",
  pageCount: "120",
  narrativePerspective: "Nicht erzählend / strukturierter Inhalt",
  styleAndTone: "Professionell und sachlich"
};

export function createProject(values: ProjectFormValues, now = new Date()): Project {
  const workflowSteps = createDefaultWorkflowSteps();
  const timestamp = now.toISOString();

  return {
    id: crypto.randomUUID(),
    title: values.title.trim(),
    bookType: values.bookType,
    topic: values.topic.trim(),
    targetAudience: values.targetAudience.trim(),
    ageRange: values.ageRange.trim(),
    language: values.language.trim(),
    bookFormat: values.bookFormat.trim(),
    interiorBleed: values.interiorBleed.trim(),
    pageCount: Number(values.pageCount),
    narrativePerspective: values.narrativePerspective.trim(),
    styleAndTone: values.styleAndTone.trim(),
    status: deriveProjectStatus(workflowSteps),
    workflowSteps,
    createdAt: timestamp,
    updatedAt: timestamp
  };
}

export function projectToFormValues(project: Project): ProjectFormValues {
  return {
    title: project.title,
    bookType: project.bookType,
    topic: project.topic,
    targetAudience: project.targetAudience,
    ageRange: project.ageRange,
    language: project.language,
    bookFormat: project.bookFormat,
    interiorBleed: project.interiorBleed ?? "Nein - ohne Beschnitt",
    pageCount: String(project.pageCount),
    narrativePerspective: project.narrativePerspective,
    styleAndTone: project.styleAndTone
  };
}

export function updateProjectFromForm(project: Project, values: ProjectFormValues, now = new Date()): Project {
  return {
    ...project,
    title: values.title.trim(),
    bookType: values.bookType,
    topic: values.topic.trim(),
    targetAudience: values.targetAudience.trim(),
    ageRange: values.ageRange.trim(),
    language: values.language.trim(),
    bookFormat: values.bookFormat.trim(),
    interiorBleed: values.interiorBleed.trim(),
    pageCount: Number(values.pageCount),
    narrativePerspective: values.narrativePerspective.trim(),
    styleAndTone: values.styleAndTone.trim(),
    updatedAt: now.toISOString()
  };
}
