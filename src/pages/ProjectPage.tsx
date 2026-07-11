import { useBookProject } from "../hooks/useCourseState";
import { getBookProjectProgress } from "../lib/progress";
import type { BookProject } from "../types/course";

const fields: Array<[keyof BookProject, string]> = [
  ["arbeitstitel", "Arbeitstitel"], ["untertitel", "Untertitel"], ["buchart", "Buchart"], ["zielgruppe", "Zielgruppe"], ["kaeufer", "Käufer"], ["hauptproblem", "Hauptproblem"], ["buchversprechen", "Buchversprechen"], ["hauptkeyword", "Hauptkeyword"], ["nebenkeywords", "Nebenkeywords"], ["kategorien", "Kategorien"], ["format", "Format"], ["seitenziel", "Seitenziel"], ["verkaufspreis", "Verkaufspreis"], ["buchstatus", "Buchstatus"]
];

export function ProjectPage() {
  const [project, setProject] = useBookProject();

  return (
    <section className="section-block">
      <div className="page-title-row">
        <div><h1>Mein Buchprojekt</h1><p>Dokumentiere dein reales KDP-Projekt. Diese Daten können später von Modulen genutzt werden.</p></div>
        <strong className="progress-badge">{getBookProjectProgress(project)}%</strong>
      </div>
      <form className="form-grid">
        {fields.map(([key, label]) => (
          <label className="field" key={key}>
            <span>{label}</span>
            <input value={project[key]} onChange={(event) => setProject({ ...project, [key]: event.target.value })} />
          </label>
        ))}
      </form>
    </section>
  );
}
