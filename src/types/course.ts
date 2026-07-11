export interface ReviewInfo {
  lastReviewed: string;
  sourceType: "official" | "course-method" | "internal";
  sourceReference: string;
  needsReview: boolean;
}

export interface ContentSection {
  heading: string;
  body: string;
  review?: ReviewInfo;
}

export interface LessonVideo {
  title: string;
  duration: string;
  status: "planned" | "available";
}

export interface LessonDownload {
  title: string;
  type: "worksheet" | "checklist" | "template";
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  lessonNumber: string;
  title: string;
  learningGoal: string;
  estimatedDuration: string;
  contentSections: ContentSection[];
  video: LessonVideo;
  steps: string[];
  examples: string[];
  downloads: LessonDownload[];
  tasks: string[];
  quiz: QuizQuestion[];
  completionRequirement: string;
}

export interface CourseModule {
  id: string;
  moduleNumber: string;
  title: string;
  description: string;
  learningGoal: string;
  estimatedDuration: string;
  lessons: Lesson[];
}

export interface BookProject {
  arbeitstitel: string;
  untertitel: string;
  buchart: string;
  zielgruppe: string;
  kaeufer: string;
  hauptproblem: string;
  buchversprechen: string;
  hauptkeyword: string;
  nebenkeywords: string;
  kategorien: string;
  format: string;
  seitenziel: string;
  verkaufspreis: string;
  buchstatus: string;
}

export interface ChecklistGroup {
  id: string;
  title: string;
  items: string[];
}

export interface ResourceTemplate {
  id: string;
  category: string;
  title: string;
  description: string;
  fields: string[];
}

export interface UserProgress {
  completedLessons: string[];
  completedTasks: string[];
  completedChecklistItems: string[];
}
