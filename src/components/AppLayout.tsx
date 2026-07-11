import { Link, useLocation } from "react-router-dom";
import type { PropsWithChildren } from "react";
import { courseModules } from "../modules/course/courseData";

export function AppLayout({ children }: PropsWithChildren) {
  const location = useLocation();
  const activeModule = courseModules.find((module) => location.pathname === `/module/${module.slug}`);

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="brand" to="/" aria-label="Zur KREA MIX Startseite">
          <span className="brand-mark">KM</span>
          <span>KREA MIX</span>
        </Link>
        <nav aria-label="Hauptnavigation">
          <Link className={location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">
            Kurs
          </Link>
          <Link className={location.pathname.startsWith("/module") ? "nav-link active" : "nav-link"} to="/module/nische">
            Module
          </Link>
          <a className="nav-link" href="#ressourcen">
            Ressourcen
          </a>
        </nav>
        <div className="account-menu" aria-label="Aktives Modul">
          <span className="account-initial">KM</span>
          <span>{activeModule ? activeModule.shortTitle : "KDP Kurs"}</span>
        </div>
      </header>

      <div className="module-strip" aria-label="Modulauswahl">
        {courseModules.map((module) => (
          <Link
            className={location.pathname === `/module/${module.slug}` ? "module-tab active" : "module-tab"}
            key={module.slug}
            to={`/module/${module.slug}`}
          >
            <span>{module.number}</span>
            {module.shortTitle}
          </Link>
        ))}
      </div>

      <main className="page">{children}</main>
    </div>
  );
}
