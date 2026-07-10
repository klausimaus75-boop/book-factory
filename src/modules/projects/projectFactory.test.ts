import { describe, expect, it } from "vitest";
import { createProject, emptyProjectFormValues } from "./projectFactory";

describe("createProject", () => {
  it("creates a children's book project with default workflow steps", () => {
    const project = createProject(
      {
        ...emptyProjectFormValues,
        title: "Der mutige Mond",
        topic: "Freundschaft im Wald",
        targetAudience: "Vorschulkinder",
        ageRange: "4-6 Jahre"
      },
      new Date("2026-07-10T10:00:00.000Z")
    );

    expect(project.title).toBe("Der mutige Mond");
    expect(project.bookType).toBe("Kinderbuch");
    expect(project.workflowSteps).toHaveLength(11);
    expect(project.status).toBe("In Bearbeitung");
    expect(project.workflowSteps[0].status).toBe("in-progress");
    expect(project.createdAt).toBe("2026-07-10T10:00:00.000Z");
  });
});
