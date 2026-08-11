import { useEffect } from "react";
import i18n from "./index";

const STORAGE_KEY = "app-language";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Restore the user's last selected language after hydration.
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (
      stored &&
      stored !== i18n.language &&
      Array.isArray(i18n.options.supportedLngs) &&
      i18n.options.supportedLngs.includes(stored)
    ) {
      i18n.changeLanguage(stored);
    }
  }, []);

  // Persist language changes and update document lang/dir.
  useEffect(() => {
    const apply = (lng: string) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, lng);
        document.documentElement.lang = lng;
        document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
      }
    };

    i18n.on("languageChanged", apply);
    apply(i18n.language);

    return () => {
      i18n.off("languageChanged", apply);
    };
  }, []);

  return <>{children}</>;
}
