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

      <section className="welcome-copy-panel panel">
        <h2>Willkommen in deinem KDP-Kurs</h2>
        <div className="welcome-copy">
          <p>Du hast eine Buchidee. Vielleicht sogar mehrere. Aber wie wird daraus ein fertiges Buch, das professionell auf Amazon veröffentlicht und anschließend auch sichtbar gemacht wird?</p>
          <p>Genau dabei begleitet dich dieser Kurs.</p>
          <p>Du lernst den kompletten Weg von Anfang an kennen: von der Entwicklung und Prüfung deiner Buchidee über die Planung und Erstellung des Buches bis hin zu Cover, Buchsatz, Keywords und der Veröffentlichung über Amazon KDP.</p>
          <p>Doch mit dem Klick auf „Veröffentlichen“ ist dein Weg nicht beendet.</p>
          <p>Du erfährst auch, wie du dein Buch professionell präsentierst, einen sinnvollen Launch vorbereitest, Amazon-Werbung verstehst und deine Ergebnisse Schritt für Schritt auswertest und verbesserst.</p>
          <p>Dieser Kurs ist kein theoretisches Nachschlagewerk, das du einmal liest und danach wieder vergisst.</p>
          <p>Du arbeitest direkt an deinem eigenen Buchprojekt.</p>
          <p>Jedes Modul führt dich durch einen konkreten Abschnitt deines Weges. Du bekommst verständliche Erklärungen, praktische Anleitungen, Beispiele, Checklisten und Aufgaben, die du direkt umsetzen kannst.</p>
          <p>Du musst nicht schon wissen, wie Selfpublishing funktioniert.</p>
          <p>Du musst auch kein Designer, Marketingexperte oder Technikprofi sein.</p>
          <p>Du brauchst nur eine Sache: die Bereitschaft, dein Buch Schritt für Schritt wirklich umzusetzen.</p>
          <p>Am Ende dieses Kurses sollst du nicht einfach nur mehr über Amazon KDP wissen.</p>
          <p>Du sollst dein eigenes Buch geplant, erstellt, veröffentlicht und die Grundlagen dafür gelegt haben, es erfolgreich zu vermarkten.</p>
          <p><strong>Deine Buchidee ist der Anfang.</strong></p>
          <p><strong>Jetzt machen wir ein echtes Buch daraus.</strong></p>
        </div>
      </section>

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
