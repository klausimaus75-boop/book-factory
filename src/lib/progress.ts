import { allLessons, checklistGroups, courseModules } from "../data/courseData";
import type { BookProject, UserProgress } from "../types/course";

export const emptyProgress: UserProgress = {
  completedLessons: [],
  completedTasks: [],
  completedChecklistItems: []
};

export const emptyBookProject: BookProject = {
  arbeitstitel: "",
  untertitel: "",
  buchart: "",
  zielgruppe: "",
  kaeufer: "",
  hauptproblem: "",
  buchversprechen: "",
  hauptkeyword: "",
  nebenkeywords: "",
  kategorien: "",
  format: "",
  seitenziel: "",
  verkaufspreis: "",
  buchstatus: "",
};

export function percent(done: number, total: number) {
  if (total === 0) {
    return 0;
  }
  return Math.round((done / total) * 100);
}

export function getCourseProgress(progress: UserProgress) {
  return percent(progress.completedLessons.length, allLessons.length);
}

export function getModuleProgress(moduleId: string, progress: UserProgress) {
  const lessons = courseModules.find((module) => module.id === moduleId)?.lessons ?? [];
  return percent(lessons.filter((lesson) => progress.completedLessons.includes(lesson.id)).length, lessons.length);
}

export function getChecklistProgress(progress: UserProgress) {
  const total = checklistGroups.reduce((sum, group) => sum + group.items.length, 0);
  return percent(progress.completedChecklistItems.length, total);
}

export function getBookProjectProgress(project: BookProject) {
  const values = Object.values(project);
  return percent(values.filter((value) => value.trim().length > 0).length, values.length);
}

export function getLessonTasks(lessonId: string) {
  const lesson = allLessons.find((item) => item.id === lessonId);
  return lesson?.tasks.map((_, index) => `${lessonId}-task-${index}`) ?? [];
}

export function canCompleteLesson(lessonId: string, progress: UserProgress) {
  const requiredTasks = getLessonTasks(lessonId);
  return requiredTasks.every((taskId) => progress.completedTasks.includes(taskId));
}

export function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}
