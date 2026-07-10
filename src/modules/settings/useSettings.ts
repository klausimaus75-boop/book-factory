import { useCallback, useSyncExternalStore } from "react";
import type { UserSettings } from "./types";
import { settingsRepository } from "./settingsStorage";

const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return JSON.stringify(settingsRepository.get());
}

export function useSettings() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => JSON.stringify({ gptProfiles: [] }));
  const settings = JSON.parse(snapshot) as UserSettings;

  const saveSettings = useCallback((nextSettings: UserSettings) => {
    settingsRepository.save(nextSettings);
    emitChange();
  }, []);

  return { settings, saveSettings };
}
