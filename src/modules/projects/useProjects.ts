import { useCallback, useSyncExternalStore } from "react";
import type { Project } from "./types";
import { projectRepository } from "./projectStorage";

const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return JSON.stringify(projectRepository.getAll());
}

export function useProjects() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => "[]");
  const projects = JSON.parse(snapshot) as Project[];

  const saveProject = useCallback((project: Project) => {
    projectRepository.save(project);
    emitChange();
  }, []);

  const deleteProject = useCallback((projectId: string) => {
    projectRepository.remove(projectId);
    emitChange();
  }, []);

  const getProject = useCallback((projectId: string) => projectRepository.getById(projectId), []);

  return {
    projects,
    saveProject,
    deleteProject,
    getProject
  };
}
