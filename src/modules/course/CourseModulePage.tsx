import { Link, Navigate, useParams } from "react-router-dom";
import { courseModules, getCourseModule } from "./courseData";

export function CourseModulePage() {
  const { moduleSlug } = useParams();
  const module = getCourseModule(moduleSlug);

  if (!module) {
    return <Navigate to="/module/nische" replace />;
  }

  return (
    <section className="course-shell">
      <div className="module-page-grid">
        <aside className="module-sidebar">
          <h2>Module</h2>
          {courseModules.map((item) => (
            <Link className={item.slug === module.slug ? "side-module active" : "side-module"} key={item.slug} to={`/module/${item.slug}`}>
              <span>{item.number}</span>
              {item.shortTitle}
            </Link>
          ))}
        </aside>

        <article className="module-detail-panel">
          <span className="section-label">Modul {module.number}</span>
          <h1>{module.title}</h1>
          <p>{module.description}</p>
          <div className="module-outcome">
            <strong>Ergebnis</strong>
            <span>{module.outcome}</span>
          </div>

          <div className="lesson-grid">
            <section>
              <h2>Lektionen</h2>
              <ol className="lesson-list">
                {module.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ol>
            </section>
            <section>
              <h2>Aufgaben</h2>
              <ul className="task-list">
                {module.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="form-actions">
            <Link className="button secondary" to="/">
              Zur Übersicht
            </Link>
            <button className="button primary" type="button">
              Als nächstes starten
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
