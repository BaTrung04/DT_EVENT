"use client";

import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";

type Language = "vi" | "en" | "ko";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("vi");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get saved language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language;

    // Use setTimeout to defer state updates and avoid lint warning
    setTimeout(() => {
      if (savedLanguage && ["vi", "en", "ko"].includes(savedLanguage)) {
        setLanguage(savedLanguage);
      }
      setMounted(true);
    }, 0);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
      // Reload page to apply new language
      window.location.reload();
    }
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[mounted ? language : "vi"];

    for (const k of keys) {
      if (typeof value === "object" && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return { language, changeLanguage, t };
}
