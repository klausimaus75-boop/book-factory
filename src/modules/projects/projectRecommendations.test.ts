import { describe, expect, it } from "vitest";
import { emptyProjectFormValues } from "./projectFactory";
import {
  applyAgeRangeRecommendations,
  applyBookTypeRecommendations,
  getRecommendedProjectOptions
} from "./projectRecommendations";

describe("project recommendations", () => {
  it("filters options for thriller projects", () => {
    const values = applyBookTypeRecommendations(emptyProjectFormValues, "Thriller");
    const options = getRecommendedProjectOptions(values);

    expect(values.targetAudience).toBe("Erwachsene");
    expect(options.topic).toContain("Mordfall");
    expect(options.styleAndTone).toContain("Düster und atmosphärisch");
    expect(options.topic.length).toBeLessThan(12);
  });

  it("adapts audience and tone from the selected age range", () => {
    const values = applyAgeRangeRecommendations(
      { ...emptyProjectFormValues, bookType: "Kinderbuch" },
      "5-7 Jahre"
    );

    expect(values.targetAudience).toBe("Vorschulkinder");
    expect(values.styleAndTone).toBe("Warm, klar und altersgerecht");
  });
});
