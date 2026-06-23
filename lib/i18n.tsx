"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Dictionary, type Lang } from "./dictionaries";

export type { Lang, Dictionary } from "./dictionaries";
export { dictionaries } from "./dictionaries";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const COOKIE = "lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

type ProviderProps = {
  children: ReactNode;
  initialLang: Lang;
};

export function I18nProvider({ children, initialLang }: ProviderProps) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof document !== "undefined") {
      document.cookie = `${COOKIE}=${next}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
      document.documentElement.lang = next;
    }
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  return ctx;
}
