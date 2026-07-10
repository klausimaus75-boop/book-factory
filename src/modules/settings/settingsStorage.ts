import type { GptProfile, UserSettings } from "./types";

export const SETTINGS_STORAGE_KEY = "book-factory.settings.v1";

export const defaultConceptGptProfile: GptProfile = {
  id: "children-book-concept-gpt",
  name: "Kinderbuch-Konzept-GPT",
  description: "Erstellt strukturierte Buchkonzepte für Kinderbuchprojekte.",
  taskArea: "Buchkonzept",
  gptLink: "",
  isActive: true
};

export interface SettingsRepository {
  get(): UserSettings;
  save(settings: UserSettings): void;
}

export function createLocalStorageSettingsRepository(storage: Storage): SettingsRepository {
  function normalize(settings: Partial<UserSettings> | null): UserSettings {
    const profiles = Array.isArray(settings?.gptProfiles) ? settings.gptProfiles : [];
    const hasDefaultProfile = profiles.some((profile) => profile.id === defaultConceptGptProfile.id);

    return {
      gptProfiles: hasDefaultProfile ? profiles : [defaultConceptGptProfile, ...profiles]
    };
  }

  return {
    get() {
      const rawValue = storage.getItem(SETTINGS_STORAGE_KEY);

      if (!rawValue) {
        return normalize(null);
      }

      try {
        return normalize(JSON.parse(rawValue) as Partial<UserSettings>);
      } catch {
        return normalize(null);
      }
    },
    save(settings) {
      storage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    }
  };
}

export const settingsRepository = createLocalStorageSettingsRepository(window.localStorage);
