import { Link } from "react-router-dom";
import { courseModules } from "../data/courseData";

export function LandingPage() {
  const firstLesson = courseModules[0].lessons[0];

  return (
    <section className="landing guided-landing">
      <div className="concept-hero welcome-hero">
        <div className="hero-copy">
          <span className="welcome-kicker">Willkommen bei KREA MIX</span>
          <h1>Dein ruhiger Start ins eigene <strong>KDP-Buch</strong></h1>
          <p>Wir verwandeln vage Ideen in einen klaren, machbaren Buchplan. Schritt für Schritt, verständlich und ohne Überforderung.</p>
          <div className="actions">
            <Link className="button primary" to={`/lesson/${firstLesson.id}`}>
              Geführte Reise starten
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="button secondary" to="/module">
              Ablauf ansehen
            </Link>
          </div>
          <small>Für Anfänger gemacht. Klar, feminin und fokussiert.</small>
        </div>
      </div>

      <section className="journey-rail landing-journey" aria-label="KREA MIX Kursreise">
        {courseModules.map((module) => (
          <Link className="journey-node" key={module.id} to={`/module/${module.id}`}>
            <span>{module.moduleNumber}</span>
            <strong>{module.title}</strong>
          </Link>
        ))}
      </section>

      <section className="landing-dashboard">
        <div className="panel next-step-panel">
          <h2>Was dich erwartet</h2>
          <p>Du siehst immer nur den nächsten sinnvollen Schritt: Aufgabe öffnen, Ergebnis eintragen, Lektion abschließen, weitergehen.</p>
          <Link className="button primary" to="/dashboard">Zum Dashboard</Link>
        </div>
        <div className="panel current-module-panel">
          <h2>Dein Ziel</h2>
          <div className="check-orb">✓</div>
          <h3>Veröffentlichen und vermarkten</h3>
          <p>Am Ende steht kein loses Wissen, sondern ein geführter Veröffentlichungs- und Vermarktungsprozess.</p>
        </div>
      </section>
    </section>
  );
}
