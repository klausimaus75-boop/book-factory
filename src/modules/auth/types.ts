export interface AuthUser {
  id: string;
  name: string;
  email: string;
  picture?: string;
  provider: "google" | "local";
}

export interface AuthState {
  user: AuthUser | null;
}
