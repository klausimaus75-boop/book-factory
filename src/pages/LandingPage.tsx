import { Link } from "react-router-dom";
import { courseModules } from "../data/courseData";

export function LandingPage() {
  const firstLesson = courseModules[0].lessons[0];

  return (
    <section className="landing guided-landing">
      <div className="concept-hero">
        <div className="hero-copy">
          <h1>Von keiner Buchidee zum veröffentlichten KDP-Buch</h1>
          <p>Dein klarer 6-Schritte-Plan. Von der ersten Idee bis zu deinem veröffentlichten Buch auf Amazon: einfach, strukturiert, machbar.</p>
          <div className="actions">
            <Link className="button primary" to={`/lesson/${firstLesson.id}`}>
              Geführte Reise starten
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="button secondary" to="/module">
              Ablauf ansehen
            </Link>
          </div>
          <small>Für Anfänger gemacht. Schritt für Schritt.</small>
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
