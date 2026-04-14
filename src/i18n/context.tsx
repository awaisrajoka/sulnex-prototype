"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import ptBR from "./pt-BR";
import en from "./en";

type Translations = typeof ptBR;
type Language = "pt-BR" | "en";

const translations: Record<Language, Translations> = {
  "pt-BR": ptBR,
  en: en,
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  language: "pt-BR",
  setLanguage: () => {},
  t: (key: string) => key,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt-BR");

  useEffect(() => {
    const saved = localStorage.getItem("sulnex-lang") as Language | null;
    if (saved && (saved === "pt-BR" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("sulnex-lang", lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let result: any = translations[language];
      for (const k of keys) {
        if (result && typeof result === "object" && k in result) {
          result = result[k];
        } else {
          return key; // fallback to key if not found
        }
      }
      return typeof result === "string" ? result : key;
    },
    [language]
  );

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
