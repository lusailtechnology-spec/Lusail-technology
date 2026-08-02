import { useTranslation } from "react-i18next";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n, t } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(isAr ? "en" : "ar")}
      className={`rounded-full border border-ink/10 bg-white px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal ${className}`}
      aria-label={t("language")}
    >
      {isAr ? "EN" : "AR"}
    </button>
  );
}
