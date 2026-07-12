import { Link } from "react-router-dom";
import { courseModules, moduleOutcomes } from "../data/courseData";
import { getModuleProgress } from "../lib/progress";
import { useCourseProgress } from "../hooks/useCourseState";

export function ModulesPage() {
  const [progress] = useCourseProgress();

  return (
    <section className="section-block module-journey-page">
      <div className="course-topline centered">
        <h1>Deine Reise in 6 Modulen</h1>
        <p>Linear. Einfach. Schritt für Schritt.</p>
      </div>

      <div className="module-path">
        {courseModules.map((module) => {
          const moduleProgress = getModuleProgress(module.id, progress);
          const status = moduleProgress === 100 ? "Abgeschlossen" : moduleProgress > 0 ? "In Bearbeitung" : "Noch nicht gestartet";
          return (
            <Link className={moduleProgress > 0 ? "module-stage active" : "module-stage"} key={module.id} to={`/module/${module.id}`}>
              <span className="stage-number">{module.moduleNumber}</span>
              <h2>{module.title}</h2>
              <small>{status}</small>
              <p>{moduleOutcomes[module.id]}</p>
              <em>{module.lessons.length} Lektionen</em>
              <strong>{moduleProgress > 0 ? "Weiterarbeiten" : "Starten"} →</strong>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
