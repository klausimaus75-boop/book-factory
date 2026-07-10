# Google Login Setup

Book Factory nutzt Google Login nur zur Anmeldung in der Anwendung.

Wichtig: Der Google Login gibt Book Factory keinen direkten Zugriff auf ein ChatGPT-Abo. Nutzer verwenden ihr vorhandenes ChatGPT-Kontingent weiterhin in ChatGPT selbst, indem Book Factory den passenden GPT oeffnet und den Arbeitsauftrag vorbereitet.

## GitHub Pages Konfiguration

1. In der Google Cloud Console einen OAuth 2.0 Client fuer eine Webanwendung erstellen.
2. Als autorisierte JavaScript-Origin eintragen:
   - `https://klausimaus75-boop.github.io`
3. Die Client-ID in GitHub als Repository Variable speichern:
   - Name: `VITE_GOOGLE_CLIENT_ID`
   - Wert: die Google OAuth Client-ID
4. GitHub Pages Workflow erneut ausfuehren.

Ohne `VITE_GOOGLE_CLIENT_ID` zeigt Book Factory eine Konfigurationsmeldung statt des Google-Buttons.
