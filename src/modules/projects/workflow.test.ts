import { describe, expect, it } from "vitest";
import { calculateProgress, createDefaultWorkflowSteps, deriveProjectStatus } from "./workflow";

describe("workflow progress", () => {
  it("calculates rounded progress from completed steps", () => {
    const steps = createDefaultWorkflowSteps();
    steps[0].status = "completed";
    steps[1].status = "completed";
    steps[2].status = "completed";
    steps[3].status = "completed";
    steps[4].status = "completed";

    expect(calculateProgress(steps)).toBe(45);
  });

  it("counts active workflow steps as partial progress", () => {
    const steps = createDefaultWorkflowSteps();
    steps[1].status = "in-progress";

    expect(calculateProgress(steps)).toBe(5);
  });

  it("derives in-progress project status from active workflow steps", () => {
    const steps = createDefaultWorkflowSteps();
    steps[0].status = "in-progress";

    expect(deriveProjectStatus(steps)).toBe("In Bearbeitung");
  });

  it("returns 100 percent when all steps are complete", () => {
    const steps = createDefaultWorkflowSteps().map((step) => ({ ...step, status: "completed" as const }));

    expect(calculateProgress(steps)).toBe(100);
    expect(deriveProjectStatus(steps)).toBe("Abgeschlossen");
  });
});
