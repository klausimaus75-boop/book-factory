import { Link } from "react-router-dom";
import { useState } from "react";

export function AuthPage({ mode }: { mode: "login" | "register" }) {
  const isLogin = mode === "login";
  const [resetMessage, setResetMessage] = useState("");

  return (
    <section className="auth-card">
      <h1>{isLogin ? "Anmelden" : "Registrieren"}</h1>
      <p>Demo-Benutzermodus: Die echte Authentifizierung ist vorbereitet und kann später ersetzt werden.</p>
      <label className="field"><span>E-Mail</span><input type="email" /></label>
      <label className="field"><span>Passwort</span><input type="password" /></label>
      <Link className="button primary" to="/dashboard">{isLogin ? "Demo-Login starten" : "Demo-Konto erstellen"}</Link>
      {isLogin ? <Link className="text-button" to="/registrieren">Noch kein Konto?</Link> : <Link className="text-button" to="/login">Schon registriert?</Link>}
      <button className="text-button" onClick={() => setResetMessage("Im Demo-Modus wird kein Passwort-Reset versendet. Die Route ist vorbereitet, damit spaeter Supabase Auth oder ein anderer Anbieter angeschlossen werden kann.")} type="button">Passwort vergessen</button>
      {resetMessage ? <p className="helper-message">{resetMessage}</p> : null}
    </section>
  );
}
