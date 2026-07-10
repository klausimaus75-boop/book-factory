export interface GptProfile {
  id: string;
  name: string;
  description: string;
  taskArea: string;
  gptLink: string;
  isActive: boolean;
}

export interface UserSettings {
  gptProfiles: GptProfile[];
}
