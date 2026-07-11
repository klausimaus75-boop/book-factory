import { courseModules } from "../data/courseData";
import { getBookProjectProgress, getChecklistProgress, getCourseProgress, getModuleProgress } from "../lib/progress";
import { useBookProject, useCourseProgress } from "../hooks/useCourseState";

export function ProgressPage() {
  const [progress] = useCourseProgress();
  const [project] = useBookProject();

  return (
    <section className="section-block">
      <h1>Fortschritt</h1>
      <div className="metric-grid">
        <article><strong>{getCourseProgress(progress)}%</strong><span>Gesamtkurs</span></article>
        <article><strong>{getBookProjectProgress(project)}%</strong><span>Buchprojekt</span></article>
        <article><strong>{getChecklistProgress(progress)}%</strong><span>Checklisten</span></article>
      </div>
      <div className="panel">
        <h2>Modulfortschritt</h2>
        {courseModules.map((module) => (
          <div className="progress-row" key={module.id}>
            <span>{module.moduleNumber} · {module.title}</span>
            <strong>{getModuleProgress(module.id, progress)}%</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
