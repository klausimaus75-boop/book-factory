import { Link } from "react-router-dom";
import { courseModules } from "../data/courseData";
import { getModuleProgress } from "../lib/progress";
import { useCourseProgress } from "../hooks/useCourseState";

export function ModulesPage() {
  const [progress] = useCourseProgress();

  return (
    <section className="section-block">
      <h1>Modulübersicht</h1>
      <p className="lead">Die Module sind als Kursreise aufgebaut und führen logisch von Idee bis Optimierung.</p>
      <div className="module-roadmap">
        {courseModules.map((module) => {
          const moduleProgress = getModuleProgress(module.id, progress);
          const status = moduleProgress === 100 ? "Abgeschlossen" : moduleProgress > 0 ? "In Bearbeitung" : "Nicht begonnen";
          return (
            <Link className="roadmap-item" key={module.id} to={`/module/${module.id}`}>
              <span>{module.moduleNumber}</span>
              <strong>{module.title}</strong>
              <small>{module.lessons.length} Lektionen · {module.estimatedDuration}</small>
              <em>{moduleProgress}% · {status}</em>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
