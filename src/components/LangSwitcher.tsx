import { useState } from "react";
import { useTranslationStore } from "../stores/translationStore";

export function LangSwitcher() {
  const language = useTranslationStore((state) => state.language);
  const setLanguage = useTranslationStore((state) => state.setLanguage);

  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (lang: "en" | "es") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative  mr-auto w-fit">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 hover:bg-indigo-800 focus:outline-none"
      >
        {language === "en" ? "English" : "Español"}
        <span
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden transition-opacity duration-200">
          <button
            onClick={() => toggleLanguage("en")}
            className="flex items-center gap-2 w-full px-4 py-2 text-left text-gray-700 hover:bg-indigo-100 transition-colors"
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => toggleLanguage("es")}
            className="flex items-center gap-2 w-full px-4 py-2 text-left text-gray-700 hover:bg-indigo-100 transition-colors"
          >
            🇪🇸 Español
          </button>
        </div>
      )}
    </div>
  );
}
