import { Link } from "react-router-dom";
import { courseModules, journeySteps, resourceTemplates } from "../data/courseData";

export function LandingPage() {
  return (
    <section className="landing">
      <div className="hero-section">
        <div>
          <h1>Von der Buchidee zum veröffentlichten Buch</h1>
          <p>
            Der komplette KDP-Kurs, der dich Schritt für Schritt durch Buchidee, Erstellung, Veröffentlichung und
            Vermarktung führt.
          </p>
          <div className="actions">
            <Link className="button primary" to="/kurs">
              Kurs ansehen
            </Link>
            <Link className="button secondary" to="/module">
              Module entdecken
            </Link>
          </div>
        </div>
        <div className="dashboard-preview">
          <strong>Kursreise</strong>
          {journeySteps.map((step, index) => (
            <span className={index === 0 ? "journey-pill active" : "journey-pill"} key={step}>
              {step}
            </span>
          ))}
        </div>
      </div>

      <section className="split-section">
        <div>
          <h2>Vom chaotischen KDP-Start zum klaren Kursweg</h2>
          <p>
            Viele Anfänger springen zwischen Buchidee, YouTube-Videos, Keyword-Recherche, Cover-Entwürfen und
            widersprüchlichen Informationen. Der Masterkurs führt linear durch Entscheidungen, Aufgaben und Abschlüsse.
          </p>
        </div>
        <ol className="timeline-list">
          {["Idee klären", "Markt prüfen", "Buchkonzept bauen", "Veröffentlichen", "Optimieren"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
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
          <h2>Enthaltene Vorlagen und Checklisten</h2>
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
