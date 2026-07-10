import { useCallback, useSyncExternalStore } from "react";
import { authRepository } from "./authStorage";
import type { AuthState, AuthUser } from "./types";

const authListeners = new Set<() => void>();

function subscribe(listener: () => void) {
  authListeners.add(listener);
  return () => authListeners.delete(listener);
}

function notifyAuthListeners() {
  authListeners.forEach((listener) => listener());
}

function getSnapshot() {
  return JSON.stringify(authRepository.get());
}

export function useAuth() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => JSON.stringify({ user: null }));
  const state = JSON.parse(snapshot) as AuthState;

  const signIn = useCallback((user: AuthUser) => {
    authRepository.saveUser(user);
    notifyAuthListeners();
  }, []);

  const signOut = useCallback(() => {
    authRepository.clear();
    notifyAuthListeners();
  }, []);

  return {
    user: state.user,
    isAuthenticated: Boolean(state.user),
    signIn,
    signOut
  };
}
