import { create } from "zustand";

type Language = "en" | "es";

type TranslationState = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export const useTranslationStore = create<TranslationState>((set) => {
  // Load language from localStorage or default to "en"
  const storedLanguage = (localStorage.getItem("language") as Language) || "en";
  return {
    language: storedLanguage,
    setLanguage: (lang) => {
      localStorage.setItem("language", lang);
      set({ language: lang });
    },
  };
});
