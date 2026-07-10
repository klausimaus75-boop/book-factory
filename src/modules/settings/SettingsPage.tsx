import type { ChangeEvent } from "react";
import { useSettings } from "./useSettings";

export function SettingsPage() {
  const { settings, saveSettings } = useSettings();

  function updateProfile(profileId: string, field: "name" | "description" | "taskArea" | "gptLink", value: string) {
    saveSettings({
      gptProfiles: settings.gptProfiles.map((profile) =>
        profile.id === profileId ? { ...profile, [field]: value } : profile
      )
    });
  }

  function updateActive(profileId: string, event: ChangeEvent<HTMLInputElement>) {
    saveSettings({
      gptProfiles: settings.gptProfiles.map((profile) =>
        profile.id === profileId ? { ...profile, isActive: event.target.checked } : profile
      )
    });
  }

  return (
    <section className="stack">
      <div className="page-header">
        <div>
          <p className="section-label">Einstellungen</p>
          <h1>GPT-Verwaltung</h1>
          <p>Hier hinterlegst du die GPT-Links, die Book Factory in den Arbeitsschritten öffnet.</p>
        </div>
      </div>

      <div className="settings-list">
        {settings.gptProfiles.map((profile) => (
          <article className="detail-panel" key={profile.id}>
            <h2>{profile.name}</h2>
            <div className="form-grid flat">
              <label className="field">
                <span>Name</span>
                <input value={profile.name} onChange={(event) => updateProfile(profile.id, "name", event.target.value)} />
              </label>
              <label className="field">
                <span>Aufgabenbereich</span>
                <input
                  value={profile.taskArea}
                  onChange={(event) => updateProfile(profile.id, "taskArea", event.target.value)}
                />
              </label>
              <label className="field wide">
                <span>Beschreibung</span>
                <textarea
                  value={profile.description}
                  rows={3}
                  onChange={(event) => updateProfile(profile.id, "description", event.target.value)}
                />
              </label>
              <label className="field wide">
                <span>GPT-Link</span>
                <input
                  value={profile.gptLink}
                  placeholder="https://chatgpt.com/g/..."
                  onChange={(event) => updateProfile(profile.id, "gptLink", event.target.value)}
                />
              </label>
              <label className="toggle-field wide">
                <input checked={profile.isActive} type="checkbox" onChange={(event) => updateActive(profile.id, event)} />
                <span>Aktiv</span>
              </label>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
