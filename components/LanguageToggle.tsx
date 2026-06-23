"use client";

import { useI18n, type Lang } from "@/lib/i18n";

const ORDER: Lang[] = ["en", "es"];

export function LanguageToggle() {
  const { lang, setLang } = useI18n();
  const other = lang === "es" ? "en" : "es";

  return (
    <div className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-muted">
      {ORDER.map((code, i) => {
        const isActive = lang === code;
        return (
          <span key={code} className="inline-flex items-center">
            {i > 0 && <span className="text-foreground/20">/</span>}
            <button
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={isActive}
              aria-label={`Switch language to ${code.toUpperCase()}`}
              className={`px-1 transition-colors hover:text-foreground ${
                isActive ? "font-medium text-foreground" : ""
              }`}
            >
              {code.toUpperCase()}
            </button>
          </span>
        );
      })}
      <span className="sr-only">Current language: {lang.toUpperCase()}.</span>
      <span aria-hidden className="hidden">
        {other}
      </span>
    </div>
  );
}
