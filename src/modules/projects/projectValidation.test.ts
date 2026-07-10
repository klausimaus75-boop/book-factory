import { describe, expect, it } from "vitest";
import { emptyProjectFormValues } from "./projectFactory";
import { validateProjectForm } from "./projectValidation";

describe("validateProjectForm", () => {
  it("requires all mandatory fields", () => {
    const errors = validateProjectForm({
      ...emptyProjectFormValues,
      title: "",
      topic: "",
      targetAudience: "",
      ageRange: "",
      language: "",
      bookFormat: "",
      pageCount: "",
      narrativePerspective: "",
      styleAndTone: ""
    });

    expect(errors.title).toBe("Dieses Feld ist erforderlich.");
    expect(errors.topic).toBe("Dieses Feld ist erforderlich.");
    expect(errors.pageCount).toBe("Dieses Feld ist erforderlich.");
  });

  it("rejects invalid page counts", () => {
    const errors = validateProjectForm({
      ...emptyProjectFormValues,
      pageCount: "0"
    });

    expect(errors.pageCount).toBe("Die Seitenzahl muss eine ganze Zahl größer als 0 sein.");
  });
});
