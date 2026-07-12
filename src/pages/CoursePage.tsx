import { Link } from "react-router-dom";
import { courseModules, coursePhases } from "../data/courseData";

function modulesForPhase(range: string) {
  const [start, end] = range.split("-").map((value) => Number(value));
  return courseModules.filter((module) => {
    const moduleNumber = Number(module.moduleNumber);
    return moduleNumber >= start && moduleNumber <= end;
  });
}

export function CoursePage() {
  return (
    <section className="section-block course-overview-page">
      <div className="course-topline">
        <div>
          <span className="eyebrow">KreaMix Kursstruktur 2.0</span>
          <h1>Dein geführter KDP-Kurs</h1>
          <p className="lead">18 Module führen dich von der ersten Buchidee bis zu Veröffentlichung, Vermarktung und deinem nächsten wiederholbaren Buchprozess.</p>
        </div>
        <Link className="button primary" to="/module">Alle Module öffnen</Link>
      </div>

      <div className="phase-overview-grid">
        {coursePhases.map((phase) => (
          <article className="panel phase-card" key={phase.title}>
            <span>Module {phase.modules}</span>
            <h2>{phase.title}</h2>
            <p>{phase.description}</p>
          </article>
        ))}
      </div>

      <div className="module-roadmap">
        {coursePhases.map((phase) => (
          <section className="roadmap-phase panel" key={phase.title}>
            <div className="phase-heading compact">
              <span>Module {phase.modules}</span>
              <h2>{phase.title}</h2>
            </div>
            <div className="roadmap-list">
              {modulesForPhase(phase.modules).map((module) => (
                <Link className="roadmap-item" key={module.id} to={`/module/${module.id}`}>
                  <span>{module.moduleNumber}</span>
                  <strong>{module.title}</strong>
                  <small>{module.description}</small>
                  <em>{module.lessons.length} Lektionen</em>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
