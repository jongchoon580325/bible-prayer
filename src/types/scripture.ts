export interface ScriptureData {
  text: string;
  keywords: string[];
  context: ContextData;
}

export interface ContextData {
  theme: string;
  mainPoints: string[];
  emotionalTone: string;
}

export type PrayerType = 'beginner' | 'advanced'; 