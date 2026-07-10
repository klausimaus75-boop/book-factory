import { describe, expect, it, vi } from "vitest";
import { createProject, emptyProjectFormValues } from "./projectFactory";
import {
  bookConceptQualityItems,
  canCompleteBookConcept,
  generateBookConceptPrompt,
  getBookConceptWork,
  getMissingBookConceptFields,
  saveBookConceptPrompt,
  saveBookConceptResult,
  saveBookConceptThoughts,
  updateBookConceptQuality
} from "./bookConcept";
import { calculateProgress } from "./workflow";
import { copyTextToClipboard } from "./clipboard";
import { canOpenGptProfile } from "../settings/gptProfiles";
import { defaultConceptGptProfile } from "../settings/settingsStorage";

function makeProject() {
  return createProject({
    ...emptyProjectFormValues,
    title: "Der mutige Mond",
    topic: "Freundschaft im Zauberwald",
    targetAudience: "Vorschulkinder",
    ageRange: "4-6 Jahre"
  });
}

describe("book concept workflow", () => {
  it("generates a complete handover prompt from project data", () => {
    const prompt = generateBookConceptPrompt(makeProject());

    expect(prompt).toContain("Du bist der Kinderbuch-Konzept-GPT");
    expect(prompt).toContain("Aufgabenfokus");
    expect(prompt).toContain("Der mutige Mond");
    expect(prompt).toContain("Freundschaft im Zauberwald");
    expect(prompt).toContain("1. Arbeitstitel");
    expect(prompt).toContain("12. Kurze Gesamtzusammenfassung");
  });

  it("adds user thoughts to the handover prompt", () => {
    const prompt = generateBookConceptPrompt(makeProject(), "Der Mond soll Angst vor dem Dunkeln haben.");

    expect(prompt).toContain("Zusaetzliche Gedanken des Nutzers");
    expect(prompt).toContain("Der Mond soll Angst vor dem Dunkeln haben.");
    expect(prompt).toContain("verbindlichen Projektdaten");
  });

  it("saves book concept thoughts and starts the workflow step", () => {
    const project = saveBookConceptThoughts(makeProject(), "Meine Grundidee", new Date("2026-07-10T13:00:00.000Z"));
    const work = getBookConceptWork(project);

    expect(work.thoughts).toBe("Meine Grundidee");
    expect(work.thoughtsUpdatedAt).toBe("2026-07-10T13:00:00.000Z");
    expect(project.workflowSteps.find((step) => step.id === "book-concept")?.status).toBe("in-progress");
  });

  it("reports missing required project data", () => {
    const project = createProject({
      ...emptyProjectFormValues,
      title: "Unvollständig",
      topic: "",
      targetAudience: "",
      ageRange: ""
    });

    expect(getMissingBookConceptFields(project)).toEqual(["Thema", "Zielgruppe", "Altersspanne"]);
  });

  it("copies prompt text through the clipboard adapter", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);

    await copyTextToClipboard("Prompt", { writeText });

    expect(writeText).toHaveBeenCalledWith("Prompt");
  });

  it("detects whether a GPT profile can be opened", () => {
    expect(canOpenGptProfile(defaultConceptGptProfile)).toBe(false);
    expect(canOpenGptProfile({ ...defaultConceptGptProfile, gptLink: "https://chatgpt.com/g/example" })).toBe(true);
  });

  it("saves results, moves status to review and stores previous versions", () => {
    const project = saveBookConceptPrompt(makeProject(), "Prompt", new Date("2026-07-10T10:00:00.000Z"));
    const withResult = saveBookConceptResult(project, "Ergebnis 1", new Date("2026-07-10T11:00:00.000Z"));
    const replaced = saveBookConceptResult(withResult, "Ergebnis 2", new Date("2026-07-10T12:00:00.000Z"));

    expect(withResult.workflowSteps.find((step) => step.id === "book-concept")?.status).toBe("review");
    expect(getBookConceptWork(replaced).result).toBe("Ergebnis 2");
    expect(getBookConceptWork(replaced).previousVersions[0].content).toBe("Ergebnis 1");
  });

  it("requires saved result and all quality checks before completion", () => {
    let project = saveBookConceptResult(makeProject(), "Gespeichertes Ergebnis");

    expect(canCompleteBookConcept(getBookConceptWork(project))).toBe(false);

    for (const item of bookConceptQualityItems) {
      project = updateBookConceptQuality(project, item.id, true);
    }

    expect(canCompleteBookConcept(getBookConceptWork(project))).toBe(true);
  });

  it("updates total progress when the book concept step is completed", () => {
    let project = saveBookConceptResult(makeProject(), "Gespeichertes Ergebnis");
    for (const item of bookConceptQualityItems) {
      project = updateBookConceptQuality(project, item.id, true);
    }
    project.workflowSteps = project.workflowSteps.map((step) =>
      step.id === "book-concept" ? { ...step, status: "completed" } : step
    );

    expect(calculateProgress(project.workflowSteps)).toBe(14);
  });

  it("shows partial progress when the book concept step is in progress", () => {
    const project = saveBookConceptPrompt(makeProject(), "Prompt");

    expect(project.workflowSteps.find((step) => step.id === "book-concept")?.status).toBe("in-progress");
    expect(calculateProgress(project.workflowSteps)).toBe(9);
  });
});
