import { describe, expect, it } from "vitest";
import { createLocalStorageAuthRepository } from "./authStorage";
import type { AuthUser } from "./types";

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

describe("auth storage", () => {
  it("persists and clears the signed-in user", () => {
    const repository = createLocalStorageAuthRepository(createMemoryStorage());
    const user: AuthUser = {
      id: "123",
      name: "Klaus",
      email: "klaus@example.com",
      provider: "google"
    };

    repository.saveUser(user);
    expect(repository.get().user).toEqual(user);

    repository.clear();
    expect(repository.get().user).toBeNull();
  });
});
