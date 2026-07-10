import type { Project } from "./types";

export const PROJECT_STORAGE_KEY = "book-factory.projects.v1";

export interface ProjectRepository {
  getAll(): Project[];
  getById(projectId: string): Project | undefined;
  save(project: Project): void;
  remove(projectId: string): void;
}

export function createLocalStorageProjectRepository(storage: Storage): ProjectRepository {
  function readProjects(): Project[] {
    const rawValue = storage.getItem(PROJECT_STORAGE_KEY);

    if (!rawValue) {
      return [];
    }

    try {
      const parsed = JSON.parse(rawValue);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function writeProjects(projects: Project[]) {
    storage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(projects));
  }

  return {
    getAll() {
      return readProjects().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    },
    getById(projectId) {
      return readProjects().find((project) => project.id === projectId);
    },
    save(project) {
      const projects = readProjects();
      const existingIndex = projects.findIndex((item) => item.id === project.id);

      if (existingIndex >= 0) {
        projects[existingIndex] = project;
      } else {
        projects.push(project);
      }

      writeProjects(projects);
    },
    remove(projectId) {
      writeProjects(readProjects().filter((project) => project.id !== projectId));
    }
  };
}

export const projectRepository = createLocalStorageProjectRepository(window.localStorage);
