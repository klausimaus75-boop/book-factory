import { Link, useLocation } from "react-router-dom";
import type { PropsWithChildren } from "react";
import { useAuth } from "../modules/auth/useAuth";

export function AppLayout({ children }: PropsWithChildren) {
  const location = useLocation();
  const { user, signOut } = useAuth();

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
          <Link className={location.pathname === "/settings" ? "nav-link active" : "nav-link"} to="/settings">
            Einstellungen
          </Link>
        </nav>
        {user ? (
          <div className="account-menu">
            {user.picture ? <img src={user.picture} alt="" /> : <span className="account-initial">{user.name.slice(0, 1)}</span>}
            <span>{user.name}</span>
            <button className="text-button" type="button" onClick={signOut}>
              Abmelden
            </button>
          </div>
        ) : null}
      </header>
      <main className="page">{children}</main>
    </div>
  );
}
