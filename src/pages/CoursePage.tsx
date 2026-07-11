import { Link } from "react-router-dom";
import { courseModules } from "../data/courseData";

export function CoursePage() {
  return (
    <section className="section-block">
      <h1>KDP MASTERKURS</h1>
      <p className="lead">Ein interaktives Kurssystem für dein echtes Amazon-KDP-Buchprojekt.</p>
      <div className="module-roadmap">
        {courseModules.map((module) => (
          <Link className="roadmap-item" key={module.id} to={`/module/${module.id}`}>
            <span>{module.moduleNumber}</span>
            <strong>{module.title}</strong>
            <small>{module.description}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}
