import { Link, NavLink, useLocation } from "react-router-dom";
import type { PropsWithChildren } from "react";

export function AppLayout({ children }: PropsWithChildren) {
  const location = useLocation();
  const isCourseArea = !["/", "/kurs", "/login", "/registrieren", "/checkout"].includes(location.pathname);

  return (
    <div className={isCourseArea ? "app-frame" : "site-frame"}>
      <header className="topbar">
        <Link className="brand" to="/" aria-label="KreaMix Startseite">
          <span className="brand-mark">K</span>
          <span>KreaMix</span>
        </Link>
        <nav aria-label="Hauptnavigation">
          <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/kurs">
            Kurs
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/module">
            Module
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/vorlagen">
            Ressourcen
          </NavLink>
        </nav>
        <div className="top-actions">
          <Link className="text-button" to="/login">
            Anmelden
          </Link>
          <Link className="button primary compact" to="/dashboard">
            Kurs starten
          </Link>
        </div>
      </header>

      {isCourseArea ? (
        <div className="app-body">
          <main className="page app-page">{children}</main>
        </div>
      ) : (
        <main className="page">{children}</main>
      )}
    </div>
  );
}
