import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import { useAuth } from "./useAuth";
import {
  decodeGoogleCredential,
  getGoogleClientId,
  mapGooglePayloadToAuthUser,
  type GoogleCredentialResponse
} from "./googleIdentity";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize(options: {
            client_id: string;
            callback: (response: GoogleCredentialResponse) => void;
          }): void;
          renderButton(
            element: HTMLElement,
            options: {
              theme: "outline" | "filled_blue" | "filled_black";
              size: "large" | "medium" | "small";
              text: "signin_with" | "signup_with" | "continue_with" | "signin";
              shape: "rectangular" | "pill" | "circle" | "square";
            }
          ): void;
        };
      };
    };
  }
}

const googleScriptId = "google-identity-services";

export function AuthGate({ children }: PropsWithChildren) {
  const { isAuthenticated, signIn } = useAuth();
  const buttonRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  const googleClientId = getGoogleClientId();

  function explainMissingGoogleSetup() {
    setMessage(
      "Damit der Google-Button echt funktioniert, brauche ich einmalig die Google OAuth Client-ID fuer diese Webseite. Sobald sie in GitHub hinterlegt ist, erscheint hier automatisch der echte Google-Login."
    );
  }

  useEffect(() => {
    if (isAuthenticated || !googleClientId || !buttonRef.current) {
      return;
    }

    function initializeGoogleButton() {
      if (!window.google || !buttonRef.current) {
        return;
      }

      window.google.accounts.id.initialize({
        client_id: googleClientId,
        callback(response) {
          if (!response.credential) {
            setMessage("Google hat keine gueltige Anmeldung zurueckgegeben.");
            return;
          }

          try {
            signIn(mapGooglePayloadToAuthUser(decodeGoogleCredential(response.credential)));
          } catch {
            setMessage("Die Google-Anmeldung konnte nicht verarbeitet werden.");
          }
        }
      });

      buttonRef.current.innerHTML = "";
      window.google.accounts.id.renderButton(buttonRef.current, {
        theme: "outline",
        size: "large",
        text: "signin_with",
        shape: "rectangular"
      });
    }

    if (window.google) {
      initializeGoogleButton();
      return;
    }

    const existingScript = document.getElementById(googleScriptId) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener("load", initializeGoogleButton, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = googleScriptId;
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initializeGoogleButton;
    script.onerror = () => setMessage("Google Login konnte nicht geladen werden.");
    document.head.appendChild(script);
  }, [googleClientId, isAuthenticated, signIn]);

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <main className="auth-page">
      <section className="auth-panel">
        <span className="brand-mark">BF</span>
        <p className="section-label">Book Factory Login</p>
        <h1>Mit Google anmelden</h1>
        <p>
          Melde dich an, damit Book Factory deine Projekte einem Nutzerkonto zuordnen kann. Die GPT-Arbeit laeuft
          weiterhin ueber dein eigenes ChatGPT-Konto und dessen verfuegbares Preismodell.
        </p>
        {googleClientId ? (
          <div className="google-login-slot" ref={buttonRef} />
        ) : (
          <button className="google-login-button" type="button" onClick={explainMissingGoogleSetup}>
            <span className="google-mark">G</span>
            <span>Mit Google anmelden</span>
          </button>
        )}
        {message ? <p className="warning-message">{message}</p> : null}
        <p className="auth-note">
          Hinweis: Ein Google-Login gibt Book Factory keinen direkten Zugriff auf ein ChatGPT-Abo. Die App erstellt
          Prompts und oeffnet den passenden GPT; der Nutzer verwendet sein eigenes ChatGPT-Kontingent dort.
        </p>
      </section>
    </main>
  );
}
