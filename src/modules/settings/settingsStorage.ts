import type { GptProfile, UserSettings } from "./types";

export const SETTINGS_STORAGE_KEY = "book-factory.settings.v1";

export const defaultConceptGptProfile: GptProfile = {
  id: "children-book-concept-gpt",
  name: "Buchkonzept-GPT",
  description: "Erstellt strukturierte Buchkonzepte fuer alle Bucharten und Genres.",
  taskArea: "Buchkonzept",
  gptLink: "",
  isActive: true
};

const legacyDefaultConceptNames = new Set(["Kinderbuch-Konzept-GPT"]);
const legacyDefaultConceptDescriptions = new Set(["Erstellt strukturierte Buchkonzepte fÃ¼r Kinderbuchprojekte."]);

export interface SettingsRepository {
  get(): UserSettings;
  save(settings: UserSettings): void;
}

export function createLocalStorageSettingsRepository(storage: Storage): SettingsRepository {
  function normalize(settings: Partial<UserSettings> | null): UserSettings {
    const profiles = Array.isArray(settings?.gptProfiles) ? settings.gptProfiles : [];
    const migratedProfiles = profiles.map((profile) => {
      if (profile.id !== defaultConceptGptProfile.id) {
        return profile;
      }

      return {
        ...profile,
        name: legacyDefaultConceptNames.has(profile.name) ? defaultConceptGptProfile.name : profile.name,
        description: legacyDefaultConceptDescriptions.has(profile.description)
          ? defaultConceptGptProfile.description
          : profile.description
      };
    });
    const hasDefaultProfile = migratedProfiles.some((profile) => profile.id === defaultConceptGptProfile.id);

    return {
      gptProfiles: hasDefaultProfile ? migratedProfiles : [defaultConceptGptProfile, ...migratedProfiles]
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
