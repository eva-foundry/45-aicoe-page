// EVA-STORY: F45-02-001 F45-02-002
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/resources_en.json";
import fr from "./locales/fr/resources_fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    interpolation: {
      escapeValue: false, // React handles XSS
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

// Keep document.documentElement.lang in sync
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng.startsWith("fr") ? "fr" : "en";
});

// Set initial lang attribute
document.documentElement.lang = i18n.language.startsWith("fr") ? "fr" : "en";

export default i18n;
