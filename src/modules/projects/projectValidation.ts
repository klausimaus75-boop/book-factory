import type { ProjectFormValues, ProjectValidationErrors } from "./types";

const requiredFields: Array<keyof ProjectFormValues> = [
  "title",
  "topic",
  "targetAudience",
  "ageRange",
  "language",
  "bookFormat",
  "interiorBleed",
  "pageCount",
  "narrativePerspective",
  "styleAndTone"
];

export function validateProjectForm(values: ProjectFormValues): ProjectValidationErrors {
  const errors: ProjectValidationErrors = {};

  for (const field of requiredFields) {
    if (!String(values[field]).trim()) {
      errors[field] = "Dieses Feld ist erforderlich.";
    }
  }

  const pageCount = Number(values.pageCount);
  if (values.pageCount.trim() && (!Number.isInteger(pageCount) || pageCount < 1)) {
    errors.pageCount = "Die Seitenzahl muss eine ganze Zahl größer als 0 sein.";
  }

  return errors;
}

export function hasValidationErrors(errors: ProjectValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}
