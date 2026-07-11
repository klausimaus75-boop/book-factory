import { Link, Navigate, useParams } from "react-router-dom";
import { courseModules } from "../data/courseData";
import { getModuleProgress } from "../lib/progress";
import { useCourseProgress } from "../hooks/useCourseState";

export function ModulePage() {
  const { moduleId } = useParams();
  const [progress] = useCourseProgress();
  const module = courseModules.find((item) => item.id === moduleId);

  if (!module) {
    return <Navigate to="/module" replace />;
  }

  return (
    <section className="module-detail">
      <div className="page-title-row">
        <div>
          <span className="eyebrow">Modul {module.moduleNumber}</span>
          <h1>{module.title}</h1>
          <p>{module.description}</p>
        </div>
        <strong className="progress-badge">{getModuleProgress(module.id, progress)}%</strong>
      </div>
      <section className="panel">
        <h2>Lernziel</h2>
        <p>{module.learningGoal}</p>
      </section>
      <div className="lesson-stack">
        {module.lessons.map((lesson) => (
          <Link className="lesson-row" key={lesson.id} to={`/lesson/${lesson.id}`}>
            <span>{lesson.lessonNumber}</span>
            <strong>{lesson.title}</strong>
            <small>{lesson.estimatedDuration}</small>
            <em>{progress.completedLessons.includes(lesson.id) ? "Abgeschlossen" : "Öffnen"}</em>
          </Link>
        ))}
      </div>
    </section>
  );
}
