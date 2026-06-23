"use client";

import { useCallback, useEffect, useState } from "react";
import { useI18n, type Dictionary } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { avatar } from "@/lib/data";

type NavKey = keyof Dictionary["nav"];

const NAV_ITEMS: { key: NavKey; href: string }[] = [
  { key: "about", href: "#about" },
  { key: "work", href: "#work" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
];

export function MobileMenu() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="sm:hidden -mr-2 p-2 text-muted transition-colors hover:text-foreground fixed right-6 bg-backgroundMobile rounded-full"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="h-5 w-5"
          aria-hidden
        >
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-background sm:hidden"
        >
          <div className="mx-auto flex w-full max-w-[640px] items-center justify-between px-6 py-8">
            <span className="font-medium tracking-tight text-foreground p-2">Fernando Gómez</span>
            <button
              type="button"
              onClick={close}
              className="-mr-2 p-2 text-muted transition-colors hover:text-foreground"
              aria-label="Close menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="mx-auto flex w-full max-w-[640px] flex-1 flex-col px-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="serif border-b border-rule py-5 text-4xl text-foreground transition-opacity hover:opacity-60"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          <div className="mx-auto w-full max-w-[640px] px-6 pb-8">
            <div className="flex items-center justify-between">
              <LanguageToggle />
              <span className="mono text-xs uppercase tracking-[0.18em] text-muted">{t.nav.contact}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
