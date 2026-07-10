import { beforeEach, describe, expect, it } from "vitest";
import { createProject, emptyProjectFormValues } from "./projectFactory";
import { createLocalStorageProjectRepository } from "./projectStorage";

describe("project storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("persists projects in localStorage", () => {
    const repository = createLocalStorageProjectRepository(localStorage);
    const project = createProject({
      ...emptyProjectFormValues,
      title: "Das leise Sternenzelt",
      topic: "Mut",
      targetAudience: "Kinder",
      ageRange: "5-7 Jahre"
    });

    repository.save(project);

    const nextRepository = createLocalStorageProjectRepository(localStorage);
    expect(nextRepository.getById(project.id)?.title).toBe("Das leise Sternenzelt");
  });

  it("deletes projects from localStorage", () => {
    const repository = createLocalStorageProjectRepository(localStorage);
    const project = createProject({
      ...emptyProjectFormValues,
      title: "Die blaue Tür",
      topic: "Neugier",
      targetAudience: "Kinder",
      ageRange: "4-6 Jahre"
    });

    repository.save(project);
    repository.remove(project.id);

    expect(repository.getAll()).toHaveLength(0);
  });
});
