import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Instrument_Serif, Inter } from "next/font/google";
import { I18nProvider, type Lang } from "@/lib/i18n";
import { dictionaries } from "@/lib/dictionaries";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

function resolveLang(value: string | undefined): Lang {
  return value === "en" ? "en" : "es";
}

export async function generateMetadata(): Promise<Metadata> {
  const store = await cookies();
  const lang = resolveLang(store.get("lang")?.value);
  const t = dictionaries[lang].hero;
  return {
    title: `Fernando Gómez — ${t.role}`,
    description: t.tagline,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = await cookies();
  const lang = resolveLang(store.get("lang")?.value);

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <I18nProvider initialLang={lang}>{children}</I18nProvider>
      </body>
    </html>
  );
}
