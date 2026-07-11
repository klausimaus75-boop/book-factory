import { useCallback, useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function readLocalValue<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  const rawValue = window.localStorage.getItem(key);
  if (!rawValue) {
    return fallback;
  }

  try {
    return JSON.parse(rawValue) as T;
  } catch {
    return fallback;
  }
}

export function writeLocalValue<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
  notify();
}

export function useLocalValue<T>(key: string, fallback: T): [T, (value: T) => void] {
  const getSnapshot = useCallback(() => JSON.stringify(readLocalValue(key, fallback)), [fallback, key]);
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const value = JSON.parse(snapshot) as T;

  const setValue = useCallback(
    (nextValue: T) => {
      writeLocalValue(key, nextValue);
    },
    [key]
  );

  return [value, setValue];
}
