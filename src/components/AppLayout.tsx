import { Link, useLocation } from "react-router-dom";
import type { PropsWithChildren } from "react";

export function AppLayout({ children }: PropsWithChildren) {
  const location = useLocation();

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="brand" to="/" aria-label="Zur Projektübersicht">
          <span className="brand-mark">BF</span>
          <span>Book Factory</span>
        </Link>
        <nav aria-label="Hauptnavigation">
          <Link className={location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">
            Projekte
          </Link>
        </nav>
      </header>
      <main className="page">{children}</main>
    </div>
  );
}
