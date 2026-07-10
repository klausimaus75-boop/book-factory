import type { GptProfile } from "./types";

export function getActiveConceptGptProfile(profiles: GptProfile[]): GptProfile | undefined {
  return profiles.find((profile) => profile.taskArea === "Buchkonzept" && profile.isActive);
}

export function canOpenGptProfile(profile: GptProfile | undefined): profile is GptProfile {
  return Boolean(profile?.gptLink.trim());
}
