import { Link, NavLink, useLocation } from "react-router-dom";
import type { PropsWithChildren } from "react";

const appLinks = [
  ["/dashboard", "Dashboard"],
  ["/projekt", "Mein Buchprojekt"],
  ["/module", "Module"],
  ["/vorlagen", "Vorlagen"],
  ["/checklisten", "Checklisten"],
  ["/fortschritt", "Fortschritt"]
] as const;

export function AppLayout({ children }: PropsWithChildren) {
  const location = useLocation();
  const isCourseArea = !["/", "/kurs", "/login", "/registrieren", "/checkout"].includes(location.pathname);

  return (
    <div className={isCourseArea ? "app-frame" : "site-frame"}>
      <header className="topbar">
        <Link className="brand" to="/" aria-label="KREA MIX Startseite">
          <span className="brand-mark">KM</span>
          <span>KREA MIX</span>
        </Link>
        <nav aria-label="Hauptnavigation">
          <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/kurs">
            Kurs
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/module">
            Module
          </NavLink>
          <a className="nav-link" href="/#faq">
            Ressourcen
          </a>
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
          <aside className="side-nav" aria-label="Kursbereiche">
            {appLinks.map(([href, label]) => (
              <NavLink className={({ isActive }) => (isActive ? "side-link active" : "side-link")} key={href} to={href}>
                {label}
              </NavLink>
            ))}
          </aside>
          <main className="page app-page">{children}</main>
        </div>
      ) : (
        <main className="page">{children}</main>
      )}
    </div>
  );
}
