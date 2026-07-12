import { Link } from "react-router-dom";
import { courseModules, coursePhases } from "../data/courseData";

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

        <div className="hero-side-note" aria-hidden="true">
          <span>18</span>
          <strong>Module aus deinem Leitfaden</strong>
          <span>06</span>
          <strong>klare Kursphasen</strong>
          <span>01</span>
          <strong>echtes Buchprojekt</strong>
        </div>
      </div>

      <section className="welcome-copy-panel panel">
        <div className="welcome-copy-heading">
          <span>Startpunkt</span>
          <h2>Willkommen in deinem KDP-Kurs</h2>
          <p>Dieser Kurs ist als Arbeitsstrecke gebaut: Du schaust nicht nur zu, sondern baust dein eigenes Buchprojekt Schritt für Schritt auf.</p>
        </div>

        <div className="welcome-copy">
          <p>Du beginnst mit Orientierung, Begriffen und einem ruhigen Umgang mit ChatGPT und den KreaMix-Bots.</p>
          <p>Danach findest du deine Buchidee, prüfst Nische, Zielgruppe und Machbarkeit und formst daraus einen klaren Buchplan.</p>
          <p>Im mittleren Teil baust du Inhalte, Innenseiten, Cover und Fullcover, bevor du alles mit einem Qualitätscheck absicherst.</p>
          <p>Anschließend geht es kontrolliert zu Amazon KDP: Konto, Buchdaten, Upload, Vorschau, Pflichten, Belege und Ordnung.</p>
          <p>Nach der Veröffentlichung bleibt dein Buch nicht einfach liegen. Du bereitest Beschreibung, Mockups, A+ Content, Marketing, Hooks und sinnvolle Empfehlungen vor.</p>
          <p>Am Ende sicherst du Prompts, Checklisten und Vorlagen, damit aus einem einzelnen Buchprojekt ein wiederholbarer Ablauf für dein nächstes Buch wird.</p>
          <p className="welcome-emphasis"><strong>Deine Buchidee ist der Anfang.</strong><strong>Der Kurs macht daraus ein konkretes KDP-Projekt.</strong></p>
        </div>
      </section>

      <section className="phase-rail landing-journey" aria-label="KREA MIX Kursphasen">
        {coursePhases.map((phase) => (
          <Link className="phase-node" key={phase.title} to="/module">
            <span>Module {phase.modules}</span>
            <strong>{phase.title}</strong>
            <small>{phase.description}</small>
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
