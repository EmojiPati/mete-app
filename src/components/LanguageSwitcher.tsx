"use client";

import { useTranslation } from "@/i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${
          locale === "en" ? "text-primary" : "text-text-secondary"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-[13px] text-text-secondary/40">/</span>
      <button
        type="button"
        onClick={() => setLocale("ja")}
        className={`text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${
          locale === "ja" ? "text-primary" : "text-text-secondary"
        }`}
        aria-label="Switch to Japanese"
      >
        JA
      </button>
    </div>
  );
}
