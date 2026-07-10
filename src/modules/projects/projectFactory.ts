import { createDefaultWorkflowSteps, deriveProjectStatus } from "./workflow";
import { projectSelectOptions } from "./projectOptions";
import type { Project, ProjectFormValues } from "./types";

export const emptyProjectFormValues: ProjectFormValues = {
  title: "",
  bookType: "Kinderbuch",
  topic: projectSelectOptions.topic[0],
  targetAudience: projectSelectOptions.targetAudience[2],
  ageRange: "4-6 Jahre",
  language: projectSelectOptions.language[0],
  bookFormat: projectSelectOptions.bookFormat[1],
  pageCount: "32",
  narrativePerspective: projectSelectOptions.narrativePerspective[0],
  styleAndTone: projectSelectOptions.styleAndTone[0]
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
    pageCount: Number(values.pageCount),
    narrativePerspective: values.narrativePerspective.trim(),
    styleAndTone: values.styleAndTone.trim(),
    updatedAt: now.toISOString()
  };
}
