import type { AuthState, AuthUser } from "./types";

export const AUTH_STORAGE_KEY = "book-factory.auth.v1";

export interface AuthRepository {
  get(): AuthState;
  saveUser(user: AuthUser): void;
  clear(): void;
}

export function createLocalStorageAuthRepository(storage: Storage): AuthRepository {
  return {
    get() {
      const rawValue = storage.getItem(AUTH_STORAGE_KEY);

      if (!rawValue) {
        return { user: null };
      }

      try {
        const parsed = JSON.parse(rawValue) as Partial<AuthState>;
        return parsed.user ? { user: parsed.user } : { user: null };
      } catch {
        return { user: null };
      }
    },
    saveUser(user) {
      storage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user }));
    },
    clear() {
      storage.removeItem(AUTH_STORAGE_KEY);
    }
  };
}

export const authRepository = createLocalStorageAuthRepository(window.localStorage);
