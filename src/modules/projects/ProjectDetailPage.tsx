import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { formatDateTime } from "./formatters";
import { useProjects } from "./useProjects";
import { calculateProgress, deriveProjectStatus, workflowStatusOptions, WORKFLOW_STATUS_LABELS } from "./workflow";
import type { WorkflowStatus } from "./types";
import { bookConceptStepId, canCompleteBookConcept, getBookConceptWork } from "./bookConcept";

export function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { deleteProject, getProject, saveProject } = useProjects();
  const project = projectId ? getProject(projectId) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentProject = project;
  const progress = calculateProgress(currentProject.workflowSteps);
  const completedCount = currentProject.workflowSteps.filter((step) => step.status === "completed").length;

  function changeStepStatus(stepId: string, status: WorkflowStatus) {
    if (stepId === bookConceptStepId && status === "completed" && !canCompleteBookConcept(getBookConceptWork(currentProject))) {
      window.alert("Der Buchkonzept-Schritt kann erst abgeschlossen werden, wenn ein Ergebnis gespeichert und alle Prüfpunkte bestätigt wurden.");
      return;
    }

    const workflowSteps = currentProject.workflowSteps.map((step) =>
      step.id === stepId ? { ...step, status } : step
    );

    saveProject({
      ...currentProject,
      workflowSteps,
      status: deriveProjectStatus(workflowSteps),
      updatedAt: new Date().toISOString()
    });
  }

  function confirmDelete() {
    const confirmed = window.confirm(
      `Projekt "${currentProject.title}" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.`
    );

    if (!confirmed) {
      return;
    }

    deleteProject(currentProject.id);
    navigate("/");
  }

  return (
    <section className="stack">
      <div className="page-header">
        <div>
          <p className="section-label">Projektansicht</p>
          <h1>{currentProject.title}</h1>
          <p>
            {currentProject.bookType} · {currentProject.status} · {completedCount} von {currentProject.workflowSteps.length} Schritten
            abgeschlossen
          </p>
        </div>
        <div className="actions">
          <Link className="button secondary" to={`/projects/${currentProject.id}/edit`}>
            Bearbeiten
          </Link>
          <button className="button danger" onClick={confirmDelete} type="button">
            Löschen
          </button>
        </div>
      </div>

      <section className="detail-grid">
        <article className="detail-panel">
          <h2>Projektdaten</h2>
          <dl className="data-list">
            <DataItem label="Buchart" value={currentProject.bookType} />
            <DataItem label="Thema" value={currentProject.topic} />
            <DataItem label="Zielgruppe" value={currentProject.targetAudience} />
            <DataItem label="Altersspanne" value={currentProject.ageRange} />
            <DataItem label="Sprache" value={currentProject.language} />
            <DataItem label="Buchformat" value={currentProject.bookFormat} />
            <DataItem label="Seitenzahl" value={String(currentProject.pageCount)} />
            <DataItem label="Erzählperspektive" value={currentProject.narrativePerspective} />
            <DataItem label="Stil und Ton" value={currentProject.styleAndTone} />
            <DataItem label="Erstellt" value={formatDateTime(currentProject.createdAt)} />
            <DataItem label="Geändert" value={formatDateTime(currentProject.updatedAt)} />
          </dl>
        </article>

        <article className="detail-panel progress-panel">
          <h2>Fortschritt</h2>
          <strong>{progress} %</strong>
          <div className="progress-track large" aria-label={`Fortschritt ${progress} Prozent`}>
            <div style={{ width: `${progress}%` }} />
          </div>
          <p>
            {completedCount} von {currentProject.workflowSteps.length} Workflow-Schritten sind abgeschlossen.
          </p>
        </article>
      </section>

      <section className="workflow-section">
        <h2>Workflow-Schritte</h2>
        <div className="workflow-list">
          {currentProject.workflowSteps.map((step, index) => (
            <article className="workflow-step" key={step.id}>
              <div className="step-index">{index + 1}</div>
              <div className="step-body">
                <h3>
                  {step.id === "book-concept" ? (
                    <Link to={`/projects/${currentProject.id}/steps/book-concept`}>{step.title}</Link>
                  ) : (
                    step.title
                  )}
                </h3>
                <p>{step.description}</p>
                {step.id === "book-concept" ? (
                  <Link className="inline-step-link" to={`/projects/${currentProject.id}/steps/book-concept`}>
                    Arbeitsansicht öffnen
                  </Link>
                ) : null}
              </div>
              <label className="status-select">
                <span>Status</span>
                <select
                  value={step.status}
                  onChange={(event) => changeStepStatus(step.id, event.target.value as WorkflowStatus)}
                >
                  {workflowStatusOptions.map((status) => (
                    <option key={status} value={status}>
                      {WORKFLOW_STATUS_LABELS[status]}
                    </option>
                  ))}
                </select>
              </label>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

function DataItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
