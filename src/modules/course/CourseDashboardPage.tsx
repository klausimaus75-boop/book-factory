import { Link } from "react-router-dom";
import { courseModules } from "./courseData";

const stats = [
  { value: courseModules.length, label: "Module", icon: "book" },
  { value: 21, label: "Lektionen", icon: "cap" },
  { value: 8, label: "Vorlagen", icon: "file" },
  { value: "0%", label: "Fortschritt", icon: "ring" }
];

export function CourseDashboardPage() {
  return (
    <section className="course-shell">
      <div className="hero-grid">
        <div className="course-hero">
          <h1>KREA MIX</h1>
          <p className="hero-subtitle">Dein KDP Kurs von der Nische bis zur Veröffentlichung.</p>
          <p>
            Schritt für Schritt zum eigenen Buch auf Amazon KDP. Praxisnah, verständlich und so aufgebaut, dass du
            jeden Abschnitt direkt umsetzen kannst.
          </p>
          <Link className="button primary" to="/module/nische">
            Kurs starten
          </Link>
        </div>

        <section className="overview-panel">
          <div className="section-heading-row">
            <h2>Überblick</h2>
            <span className="soft-select">KDP Kurs</span>
          </div>
          <div className="stat-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <span className={`stat-icon ${stat.icon}`} aria-hidden="true" />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="dashboard-grid">
        <section className="module-list-panel">
          <div className="section-heading-row">
            <h2>KDP Module</h2>
            <Link className="ghost-button" to="/module/nische">
              Alle anzeigen
            </Link>
          </div>
          <div className="course-module-list">
            {courseModules.map((module) => (
              <Link className="course-module-row" key={module.slug} to={`/module/${module.slug}`}>
                <span className="module-number">{module.number}</span>
                <span className={`module-thumb ${module.accent}`} aria-hidden="true" />
                <span className="module-row-main">
                  <strong>{module.title}</strong>
                  <span>{module.outcome}</span>
                </span>
                <span className="module-progress">
                  <span>{module.progress}%</span>
                  <span className="progress-track">
                    <span style={{ width: `${module.progress}%` }} />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="current-module-panel">
          <h2>Aktuelles Modul</h2>
          <div className="current-module-state">
            <span className="check-orb" aria-hidden="true" />
            <h3>Wähle ein Modul aus</h3>
            <p>Öffne ein Modul aus der Liste, um die Inhalte, Aufgaben und nächsten Schritte anzuzeigen.</p>
            <Link className="button primary" to="/module/nische">
              Modul öffnen
            </Link>
          </div>
        </section>
      </div>

      <section className="resource-panel" id="ressourcen">
        <h2>Ressourcen</h2>
        <div className="resource-grid">
          <article>
            <strong>Nischen-Checkliste</strong>
            <span>Prüfe Nachfrage, Wettbewerb und Zielgruppe, bevor du ein Buch startest.</span>
          </article>
          <article>
            <strong>Listing-Vorlage</strong>
            <span>Struktur für Titel, Untertitel, Beschreibung und Backend-Keywords.</span>
          </article>
          <article>
            <strong>Launch-Plan</strong>
            <span>Kontrollpunkte für Upload, Preview, Preis und erste Optimierung.</span>
          </article>
        </div>
      </section>
    </section>
  );
}
