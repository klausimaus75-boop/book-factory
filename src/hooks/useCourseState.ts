import { useLocalValue } from "../lib/storage";
import { emptyBookProject, emptyProgress } from "../lib/progress";
import type { BookProject, UserProgress } from "../types/course";

export function useCourseProgress() {
  return useLocalValue<UserProgress>("kdp-masterkurs-progress", emptyProgress);
}

export function useBookProject() {
  return useLocalValue<BookProject>("kdp-masterkurs-book-project", emptyBookProject);
}
