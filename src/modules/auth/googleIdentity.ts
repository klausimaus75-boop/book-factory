import type { AuthUser } from "./types";

export interface GoogleCredentialResponse {
  credential?: string;
}

export interface GoogleIdTokenPayload {
  sub: string;
  name?: string;
  email?: string;
  picture?: string;
}

export function getGoogleClientId(): string {
  return import.meta.env.VITE_GOOGLE_CLIENT_ID ?? "";
}

export function decodeGoogleCredential(credential: string): GoogleIdTokenPayload {
  const [, payload] = credential.split(".");

  if (!payload) {
    throw new Error("Invalid Google credential.");
  }

  const normalizedPayload = payload.replace(/-/g, "+").replace(/_/g, "/");
  const paddedPayload = normalizedPayload.padEnd(Math.ceil(normalizedPayload.length / 4) * 4, "=");
  const json = atob(paddedPayload);

  return JSON.parse(json) as GoogleIdTokenPayload;
}

export function mapGooglePayloadToAuthUser(payload: GoogleIdTokenPayload): AuthUser {
  return {
    id: payload.sub,
    name: payload.name || payload.email || "Google-Nutzer",
    email: payload.email || "",
    picture: payload.picture,
    provider: "google"
  };
}
