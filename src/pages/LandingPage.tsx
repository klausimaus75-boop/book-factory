import { Link } from "react-router-dom";
import { courseModules, resourceTemplates } from "../data/courseData";

export function LandingPage() {
  const visibleModules = courseModules.slice(1, 6);
  const lessonCount = courseModules.reduce((sum, module) => sum + module.lessons.length, 0);

  return (
    <section className="landing">
      <div className="hero-section">
        <div className="hero-copy">
          <h1>KREA MIX</h1>
          <p className="hero-subtitle">Dein KDP Kurs von der Nische bis zur Veröffentlichung.</p>
          <p>Schritt für Schritt zum eigenen Buch auf Amazon KDP. Praxisnah, verständlich und auf den Punkt.</p>
          <div className="actions">
            <Link className="button primary" to="/kurs">
              <span aria-hidden="true">▶</span>
              Kurs starten
            </Link>
            <Link className="button secondary" to="/module">
              Module ansehen
            </Link>
          </div>
        </div>

        <div className="dashboard-preview overview-panel">
          <strong>Überblick</strong>
          <div className="overview-grid">
            <article>
              <span className="overview-icon">▱</span>
              <b>{courseModules.length}</b>
              <small>Module</small>
            </article>
            <article>
              <span className="overview-icon">⌁</span>
              <b>{lessonCount}</b>
              <small>Lektionen</small>
            </article>
            <article>
              <span className="overview-icon">□</span>
              <b>{resourceTemplates.length}</b>
              <small>Vorlagen</small>
            </article>
            <article>
              <span className="overview-icon">○</span>
              <b>0%</b>
              <small>Fortschritt</small>
            </article>
          </div>
        </div>
      </div>

      <section className="landing-dashboard">
        <div className="panel module-list-panel">
          <h2>KDP Module</h2>
          <div className="module-preview-list">
            {visibleModules.map((module) => (
              <Link className="module-preview-row" key={module.id} to={`/module/${module.id}`}>
                <span>{module.moduleNumber}</span>
                <div className="module-thumb" aria-hidden="true" />
                <strong>{module.title}</strong>
                <i />
                <small>0%</small>
              </Link>
            ))}
          </div>
        </div>

        <div className="panel current-module-panel">
          <h2>Aktuelles Modul</h2>
          <div className="check-orb">✓</div>
          <h3>Wähle ein Modul aus</h3>
          <p>Wähle ein Modul aus der Liste, um die Inhalte anzuzeigen und loszulegen.</p>
          <Link className="button primary" to="/module/module-01">
            Modul öffnen
          </Link>
        </div>
      </section>

      <section id="inhalte" className="section-block">
        <h2>Komplette Modulübersicht</h2>
        <div className="module-roadmap">
          {courseModules.map((module) => (
            <Link className="roadmap-item" key={module.id} to={`/module/${module.id}`}>
              <span>{module.moduleNumber}</span>
              <strong>{module.title}</strong>
              <small>{module.lessons.length} Lektionen · {module.estimatedDuration}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <h2>Vorlagen und Checklisten</h2>
          <p>Jede Ressource ist an eine echte Projektentscheidung gekoppelt, damit du nicht nur konsumierst, sondern dein Buch weiterbaust.</p>
        </div>
        <div className="resource-mini-grid">
          {resourceTemplates.slice(0, 6).map((template) => (
            <span key={template.id}>{template.category}</span>
          ))}
        </div>
      </section>

      <section className="section-block" id="faq">
        <h2>FAQ</h2>
        <details open>
          <summary>Ist das schon mit echter Zahlung verbunden?</summary>
          <p>Nein. Der Checkout ist vorbereitet und klar als Entwicklungsmodus gekennzeichnet.</p>
        </details>
        <details>
          <summary>Kann ich sofort mit einem Buchprojekt arbeiten?</summary>
          <p>Ja. Projektfelder, Checklisten, Aufgaben und abgeschlossene Lektionen werden lokal im Browser gespeichert.</p>
        </details>
      </section>

      <section className="cta-section">
        <h2>Starte deinen geführten KDP-Prozess</h2>
        <Link className="button primary" to="/dashboard">
          Kurs starten
        </Link>
      </section>
    </section>
  );
}
