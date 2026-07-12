import { Link } from "react-router-dom";
import { courseModules, coursePhases, moduleOutcomes } from "../data/courseData";
import { getModuleProgress } from "../lib/progress";
import { useCourseProgress } from "../hooks/useCourseState";

function modulesForPhase(range: string) {
  const [start, end] = range.split("-").map((value) => Number(value));
  return courseModules.filter((module) => {
    const moduleNumber = Number(module.moduleNumber);
    return moduleNumber >= start && moduleNumber <= end;
  });
}

export function ModulesPage() {
  const [progress] = useCourseProgress();

  return (
    <section className="section-block module-journey-page">
      <div className="course-topline centered">
        <h1>Deine Reise in 18 Modulen</h1>
        <p>Vom ersten Kursordner bis zum wiederholbaren KDP-System. Linear, ruhig und Schritt für Schritt.</p>
      </div>

      <div className="phase-stack">
        {coursePhases.map((phase) => (
          <section className="phase-section panel" key={phase.title}>
            <div className="phase-heading">
              <span>Module {phase.modules}</span>
              <h2>{phase.title}</h2>
              <p>{phase.description}</p>
            </div>

            <div className="module-path phase-module-grid">
              {modulesForPhase(phase.modules).map((module) => {
                const moduleProgress = getModuleProgress(module.id, progress);
                const status = moduleProgress === 100 ? "Abgeschlossen" : moduleProgress > 0 ? "In Bearbeitung" : "Noch nicht gestartet";
                return (
                  <Link className={moduleProgress > 0 ? "module-stage active" : "module-stage"} key={module.id} to={`/module/${module.id}`}>
                    <span className="stage-number">{module.moduleNumber}</span>
                    <h2>{module.title}</h2>
                    <small>{status}</small>
                    <p>{moduleOutcomes[module.id]}</p>
                    <em>{module.lessons.length} Lektionen</em>
                    <strong>{moduleProgress > 0 ? "Weiterarbeiten" : "Starten"} <span aria-hidden="true">→</span></strong>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
