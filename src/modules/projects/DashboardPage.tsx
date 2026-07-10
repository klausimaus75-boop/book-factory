import { Link } from "react-router-dom";
import { formatDateTime } from "./formatters";
import { useProjects } from "./useProjects";
import { calculateProgress } from "./workflow";

export function DashboardPage() {
  const { projects } = useProjects();

  return (
    <section className="stack">
      <div className="page-header">
        <div>
          <h1>Book Factory</h1>
          <p>
            Deine lokale Produktionszentrale für strukturierte Buchprojekte, Workflows und
            Fortschritt.
          </p>
        </div>
        <Link className="button primary" to="/projects/new">
          Neues Projekt
        </Link>
      </div>

      <div className="metrics-row">
        <article className="metric-panel">
          <span className="metric-label">Vorhandene Projekte</span>
          <strong>{projects.length}</strong>
        </article>
      </div>

      {projects.length === 0 ? (
        <div className="empty-state">
          <h2>Noch keine Projekte vorhanden</h2>
          <p>
            Lege dein erstes Kinderbuchprojekt an. Danach erscheint es hier mit Status,
            Fortschritt und letztem Bearbeitungszeitpunkt.
          </p>
          <Link className="button primary" to="/projects/new">
            Erstes Projekt erstellen
          </Link>
        </div>
      ) : (
        <div className="project-list" aria-label="Projektliste">
          {projects.map((project) => {
            const progress = calculateProgress(project.workflowSteps);

            return (
              <Link className="project-row" key={project.id} to={`/projects/${project.id}`}>
                <div>
                  <strong>{project.title}</strong>
                  <span>{project.bookType}</span>
                </div>
                <div>
                  <span className="status-chip">{project.status}</span>
                </div>
                <div className="progress-cell">
                  <span>{progress} %</span>
                  <div className="progress-track" aria-hidden="true">
                    <div style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <time dateTime={project.updatedAt}>{formatDateTime(project.updatedAt)}</time>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
