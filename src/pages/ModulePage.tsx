import { Link, Navigate, useParams } from "react-router-dom";
import { courseModules, moduleOutcomes } from "../data/courseData";
import { getModuleProgress } from "../lib/progress";
import { useCourseProgress } from "../hooks/useCourseState";

export function ModulePage() {
  const { moduleId } = useParams();
  const [progress] = useCourseProgress();
  const module = courseModules.find((item) => item.id === moduleId);

  if (!module) {
    return <Navigate to="/module" replace />;
  }

  const firstOpenLesson = module.lessons.find((lesson) => !progress.completedLessons.includes(lesson.id)) ?? module.lessons[0];

  return (
    <section className="module-detail guided-module">
      <div className="page-title-row">
        <div>
          <span className="eyebrow">Modul {module.moduleNumber}</span>
          <h1>{module.title}</h1>
          <p>{module.description}</p>
        </div>
        <strong className="progress-badge">{getModuleProgress(module.id, progress)}%</strong>
      </div>

      <section className="panel next-step-panel module-outcome-panel">
        <div>
          <span className="eyebrow">{module.lessons.length} Lektionen</span>
          <h2>Ergebnis dieses Moduls</h2>
        </div>
        <p>{moduleOutcomes[module.id]}</p>
        <p>{module.learningGoal}</p>
        <Link className="button primary" to={`/lesson/${firstOpenLesson.id}`}>
          {progress.completedLessons.includes(firstOpenLesson.id) ? "Lektion öffnen" : "Weiterarbeiten"}
        </Link>
      </section>

      <div className="lesson-stack">
        {module.lessons.map((lesson, index) => {
          const done = progress.completedLessons.includes(lesson.id);
          return (
            <Link className={done ? "lesson-row done" : "lesson-row"} key={lesson.id} to={`/lesson/${lesson.id}`}>
              <span>{index + 1}</span>
              <strong>{lesson.title}</strong>
              <small>{lesson.estimatedDuration}</small>
              <em>{done ? "Abgeschlossen" : "Öffnen"}</em>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
