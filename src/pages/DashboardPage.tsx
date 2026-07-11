import { Link } from "react-router-dom";
import { allLessons, courseModules, journeySteps } from "../data/courseData";
import { getBookProjectProgress, getCourseProgress, getModuleProgress } from "../lib/progress";
import { useBookProject, useCourseProgress } from "../hooks/useCourseState";

export function DashboardPage() {
  const [progress] = useCourseProgress();
  const [project] = useBookProject();
  const currentLesson = allLessons.find((lesson) => !progress.completedLessons.includes(lesson.id)) ?? allLessons[0];
  const currentModule = courseModules.find((module) => module.id === currentLesson.moduleId) ?? courseModules[0];

  return (
    <section className="dashboard-page">
      <div className="page-title-row">
        <div>
          <h1>Willkommen bei KREA MIX</h1>
          <p>Arbeite Schritt für Schritt an deinem echten Buchprojekt.</p>
        </div>
        <Link className="button primary" to={`/lesson/${currentLesson.id}`}>
          Weiterlernen
        </Link>
      </div>

      <div className="metric-grid">
        <article><strong>{getCourseProgress(progress)}%</strong><span>Gesamtfortschritt</span></article>
        <article><strong>{getModuleProgress(currentModule.id, progress)}%</strong><span>Aktuelles Modul</span></article>
        <article><strong>{getBookProjectProgress(project)}%</strong><span>Buchprojekt</span></article>
      </div>

      <section className="panel">
        <h2>Aktuelle Lektion</h2>
        <p>{currentModule.moduleNumber} · {currentModule.title}</p>
        <Link className="lesson-callout" to={`/lesson/${currentLesson.id}`}>{currentLesson.title}</Link>
      </section>

      <section className="panel">
        <h2>Kursreise</h2>
        <div className="journey-line">
          {journeySteps.map((step, index) => (
            <span className={index === 0 ? "journey-step active" : "journey-step"} key={step}>{step}</span>
          ))}
        </div>
      </section>
    </section>
  );
}
