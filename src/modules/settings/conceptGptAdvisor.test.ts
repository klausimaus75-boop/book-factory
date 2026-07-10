import { describe, expect, it } from "vitest";
import { getConceptGptRecommendation } from "./conceptGptAdvisor";

describe("concept GPT advisor", () => {
  it("recommends a low-content concept GPT for planners", () => {
    const recommendation = getConceptGptRecommendation({ bookType: "Planer", topic: "Produktivitaet" });

    expect(recommendation.name).toBe("Planer-Konzept-GPT");
    expect(recommendation.focus).toContain("Layoutlogik");
  });

  it("recommends a suspense concept GPT for thriller topics", () => {
    const recommendation = getConceptGptRecommendation({ bookType: "Roman", topic: "Mordfall" });

    expect(recommendation.name).toBe("Spannungsroman-Konzept-GPT");
    expect(recommendation.focus).toContain("Spannungsbogen");
  });

  it("recommends a worldbuilding concept GPT for fantasy topics", () => {
    const recommendation = getConceptGptRecommendation({ bookType: "Roman", topic: "Magie" });

    expect(recommendation.name).toBe("Worldbuilding-Konzept-GPT");
    expect(recommendation.focus).toContain("Weltenbau");
  });
});
