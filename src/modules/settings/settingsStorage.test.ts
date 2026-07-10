import { describe, expect, it } from "vitest";
import {
  createLocalStorageSettingsRepository,
  defaultConceptGptProfile,
  SETTINGS_STORAGE_KEY
} from "./settingsStorage";

function createMemoryStorage(): Storage {
  const values = new Map<string, string>();

  return {
    get length() {
      return values.size;
    },
    clear() {
      values.clear();
    },
    getItem(key) {
      return values.get(key) ?? null;
    },
    key(index) {
      return Array.from(values.keys())[index] ?? null;
    },
    removeItem(key) {
      values.delete(key);
    },
    setItem(key, value) {
      values.set(key, value);
    }
  };
}

describe("settings storage", () => {
  it("uses a genre-neutral default concept GPT profile", () => {
    const repository = createLocalStorageSettingsRepository(createMemoryStorage());

    expect(repository.get().gptProfiles[0]).toMatchObject({
      name: "Buchkonzept-GPT",
      description: "Erstellt strukturierte Buchkonzepte fuer alle Bucharten und Genres."
    });
  });

  it("migrates the old children book default profile text", () => {
    const storage = createMemoryStorage();
    storage.setItem(
      SETTINGS_STORAGE_KEY,
      JSON.stringify({
        gptProfiles: [
          {
            ...defaultConceptGptProfile,
            name: "Kinderbuch-Konzept-GPT",
            description: "Erstellt strukturierte Buchkonzepte fÃ¼r Kinderbuchprojekte."
          }
        ]
      })
    );

    const repository = createLocalStorageSettingsRepository(storage);

    expect(repository.get().gptProfiles[0].name).toBe("Buchkonzept-GPT");
    expect(repository.get().gptProfiles[0].description).toBe(
      "Erstellt strukturierte Buchkonzepte fuer alle Bucharten und Genres."
    );
  });
});
