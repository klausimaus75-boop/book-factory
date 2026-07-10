import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { formatDateTime } from "./formatters";
import { useProjects } from "./useProjects";
import { WORKFLOW_STATUS_LABELS } from "./workflow";
import { useSettings } from "../settings/useSettings";
import {
  bookConceptQualityItems,
  bookConceptStepId,
  canCompleteBookConcept,
  generateBookConceptPrompt,
  getBookConceptWork,
  getMissingBookConceptFields,
  saveBookConceptPrompt,
  saveBookConceptResult,
  updateBookConceptQuality,
  updateBookConceptStatus
} from "./bookConcept";
import { copyTextToClipboard } from "./clipboard";
import { canOpenGptProfile, getActiveConceptGptProfile } from "../settings/gptProfiles";

export function BookConceptStepPage() {
  const { projectId } = useParams();
  const { getProject, saveProject } = useProjects();
  const { settings } = useSettings();
  const project = projectId ? getProject(projectId) : undefined;
  const [copyMessage, setCopyMessage] = useState("");
  const [linkMessage, setLinkMessage] = useState("");

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentProject = project;
  const step = currentProject.workflowSteps.find((item) => item.id === bookConceptStepId);
  const work = getBookConceptWork(currentProject);
  const missingFields = getMissingBookConceptFields(currentProject);
  const conceptProfile = getActiveConceptGptProfile(settings.gptProfiles);
  const promptDraft = useMemo(() => generateBookConceptPrompt(currentProject), [currentProject]);
  const [promptText, setPromptText] = useState(work.prompt || promptDraft);
  const [resultText, setResultText] = useState(work.result ?? "");
  const canComplete = canCompleteBookConcept(work);

  useEffect(() => {
    if (step?.status === "not-started") {
      saveProject(updateBookConceptStatus(currentProject, "in-progress"));
    }
  }, [currentProject, saveProject, step?.status]);

  function generatePrompt() {
    const prompt = generateBookConceptPrompt(currentProject);
    setPromptText(prompt);
    saveProject(saveBookConceptPrompt(currentProject, prompt));
    setCopyMessage("Prompt wurde erzeugt und gespeichert.");
  }

  async function copyPrompt() {
    await copyTextToClipboard(promptText);
    setCopyMessage("Prompt wurde in die Zwischenablage kopiert.");
  }

  function openGpt() {
    setLinkMessage("");

    if (!canOpenGptProfile(conceptProfile)) {
      setLinkMessage("Für den Buchkonzept-GPT ist noch kein Link hinterlegt.");
      return;
    }

    window.open(conceptProfile.gptLink, "_blank", "noopener,noreferrer");
  }

  function savePromptEdit() {
    saveProject(saveBookConceptPrompt(currentProject, promptText));
    setCopyMessage("Prompt-Änderung wurde gespeichert.");
  }

  function saveResult() {
    saveProject(saveBookConceptResult(currentProject, resultText));
  }

  function toggleQuality(itemId: string, checked: boolean) {
    saveProject(updateBookConceptQuality(currentProject, itemId, checked));
  }

  function completeStep() {
    if (!canComplete) {
      return;
    }

    saveProject(updateBookConceptStatus(currentProject, "completed"));
  }

  return (
    <section className="stack">
      <div className="page-header">
        <div>
          <p className="section-label">Workflow-Schritt</p>
          <h1>Buchkonzept erstellen</h1>
          <p>
            Erzeuge den Arbeitsauftrag, öffne deinen spezialisierten GPT, füge das Ergebnis zurück ein
            und prüfe es manuell.
          </p>
        </div>
        <Link className="button secondary" to={`/projects/${currentProject.id}`}>
          Zurück zum Projekt
        </Link>
      </div>

      <section className="detail-grid">
        <article className="detail-panel">
          <h2>Schrittstatus</h2>
          <p>{step ? WORKFLOW_STATUS_LABELS[step.status] : "Nicht begonnen"}</p>
          <p>{step?.description}</p>
        </article>
        <article className="detail-panel">
          <h2>GPT-Auswahl</h2>
          <p>{conceptProfile?.name ?? "Kein aktiver GPT für Buchkonzept gefunden."}</p>
          <p>{conceptProfile?.description ?? "Bitte prüfe die Einstellungen."}</p>
        </article>
      </section>

      <section className="detail-panel">
        <h2>Benötigte Projektdaten</h2>
        {missingFields.length > 0 ? (
          <div className="warning-box">
            <p>Es fehlen noch Pflichtangaben: {missingFields.join(", ")}.</p>
            <Link className="button secondary" to={`/projects/${currentProject.id}/edit`}>
              Projektdaten ergänzen
            </Link>
          </div>
        ) : (
          <dl className="data-list">
            <DataItem label="Projekttitel" value={currentProject.title} />
            <DataItem label="Thema" value={currentProject.topic} />
            <DataItem label="Zielgruppe" value={currentProject.targetAudience} />
            <DataItem label="Altersspanne" value={currentProject.ageRange} />
            <DataItem label="Sprache" value={currentProject.language} />
            <DataItem label="Buchformat" value={currentProject.bookFormat} />
            <DataItem label="Beschnittzugabe Innenblock" value={currentProject.interiorBleed ?? "Nein - ohne Beschnitt"} />
            <DataItem label="Seitenzahl" value={String(currentProject.pageCount)} />
            <DataItem label="Erzählperspektive" value={currentProject.narrativePerspective} />
            <DataItem label="Stil und Ton" value={currentProject.styleAndTone} />
          </dl>
        )}
      </section>

      <section className="detail-panel">
        <div className="section-heading-row">
          <h2>Übergabe-Prompt</h2>
          <div className="actions">
            <button className="button primary" type="button" onClick={generatePrompt} disabled={missingFields.length > 0}>
              Prompt erzeugen
            </button>
            <button className="button secondary" type="button" onClick={savePromptEdit}>
              Prompt-Änderung speichern
            </button>
            <button className="button secondary" type="button" onClick={generatePrompt} disabled={missingFields.length > 0}>
              Prompt neu erzeugen
            </button>
            <button className="button secondary" type="button" onClick={copyPrompt}>
              Prompt kopieren
            </button>
            <button className="button secondary" type="button" onClick={openGpt}>
              GPT öffnen
            </button>
          </div>
        </div>
        {copyMessage ? <p className="success-message">{copyMessage}</p> : null}
        {linkMessage ? (
          <p className="warning-message">
            {linkMessage} <Link to="/settings">Jetzt in den Einstellungen eintragen.</Link>
          </p>
        ) : null}
        <textarea
          className="large-textarea"
          value={promptText}
          onChange={(event) => setPromptText(event.target.value)}
          rows={18}
        />
      </section>

      <section className="detail-panel">
        <h2>GPT-Ergebnis einfügen</h2>
        <p>Füge hier das vollständige Ergebnis aus ChatGPT ein. Beim Ersetzen bleibt die vorherige Version erhalten.</p>
        <textarea
          className="large-textarea"
          value={resultText}
          onChange={(event) => setResultText(event.target.value)}
          rows={14}
          placeholder="GPT-Ergebnis hier einfügen..."
        />
        <div className="form-actions">
          <button className="button primary" type="button" onClick={saveResult} disabled={!resultText.trim()}>
            Ergebnis speichern
          </button>
        </div>
        {work.resultUpdatedAt ? <p className="success-message">Gespeichert am {formatDateTime(work.resultUpdatedAt)}</p> : null}
      </section>

      <section className="detail-panel">
        <h2>Versionsliste</h2>
        {work.previousVersions.length === 0 ? (
          <p>Noch keine vorherigen Ergebnisversionen vorhanden.</p>
        ) : (
          <div className="version-list">
            {work.previousVersions.map((version) => (
              <details key={version.id}>
                <summary>Vorherige Version vom {formatDateTime(version.createdAt)}</summary>
                <pre>{version.content}</pre>
              </details>
            ))}
          </div>
        )}
      </section>

      <section className="detail-panel">
        <h2>Qualitätsprüfung</h2>
        <div className="checklist">
          {bookConceptQualityItems.map((item) => (
            <label key={item.id} className="toggle-field">
              <input
                type="checkbox"
                checked={Boolean(work.qualityChecks[item.id])}
                onChange={(event) => toggleQuality(item.id, event.target.checked)}
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
        {!canComplete ? (
          <p className="warning-message">
            Zum Abschließen brauchst du ein gespeichertes Ergebnis und alle bestätigten Prüfpunkte.
          </p>
        ) : null}
        <div className="form-actions">
          <button className="button primary" type="button" onClick={completeStep} disabled={!canComplete}>
            Schritt abschließen
          </button>
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
