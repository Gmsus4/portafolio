"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileMenu } from "@/components/MobileMenu";
import { ProjectImage } from "@/components/ProjectImage";
import { SocialIcon } from "@/components/SocialIcon";
import { email, projects, skills, socials } from "@/lib/data";

export default function Home() {
  const { t, lang } = useI18n();

  return (
    <div className="flex flex-1 flex-col" id="top">
      <header className="mx-auto w-full max-w-[640px] px-6 py-8 sm:px-0">
        <div className="flex items-center justify-between text-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-medium tracking-tight text-foreground p-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon.png"
                alt=""
                aria-hidden
                width={28}
                height={28}
                className="h-7 w-7 rounded"
              />
              Fernando Gómez
            </Link>
          <div className="hidden items-center gap-5 text-muted sm:flex">
            <nav aria-label="Primary" className="flex items-center gap-5">
              <a href="#about" className="transition-colors hover:text-foreground">
                {t.nav.about}
              </a>
              <a href="#work" className="transition-colors hover:text-foreground">
                {t.nav.work}
              </a>
              <a href="#skills" className="transition-colors hover:text-foreground">
                {t.nav.skills}
              </a>
              <a href="#contact" className="transition-colors hover:text-foreground">
                {t.nav.contact}
              </a>
            </nav>
            <span aria-hidden className="text-foreground/20">
              ·
            </span>
            <LanguageToggle />
          </div>
          <MobileMenu />
        </div>
      </header>

      <main className="mx-auto w-full max-w-[640px] flex-1 px-6 sm:px-0">
        {/* HERO / ABOUT */}
        <section id="about" className="pt-0 pb-20 sm:pt-6 sm:pb-24">
          <h1 className="serif mt-8 text-5xl leading-[1.05] text-foreground sm:text-6xl">{t.hero.title}</h1>
          <p className="serif mt-6 text-2xl leading-snug text-foreground/85 sm:text-3xl">{t.hero.tagline}</p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span>{t.hero.status}</span>
            <span aria-hidden>·</span>
            <span>Jalisco</span>
          </div>
          <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
            {t.hero.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <hr className="border-t border-rule" />

        {/* TIMELINE */}
        {/* <section className="py-20 sm:py-24">
          <header className="mb-12 flex items-baseline justify-between">
            <h2 className="serif text-2xl text-foreground sm:text-3xl">
              {t.timeline.title}
            </h2>
            <span className="text-sm text-muted">{t.timeline.subtitle}</span>
          </header>
          <ol className="space-y-10">
            {timeline.map((item, i) => (
              <li
                key={i}
                className="grid grid-cols-1 gap-3 sm:grid-cols-[6.5rem,1fr] sm:gap-8"
              >
                <div className="text-sm text-muted tabular-nums">
                  {item.date[lang]}
                </div>
                <div>
                  <h3 className="serif text-xl text-foreground sm:text-2xl">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-foreground/80">
                    {item.body[lang]}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section> */}

        <hr className="border-t border-rule" />

        {/* WORK */}
        <section id="work" className="py-20 sm:py-24">
          <header className="mb-12 flex items-baseline justify-between">
            <h2 className="serif text-2xl text-foreground sm:text-3xl">{t.work.title}</h2>
            <span className="text-sm text-muted">{t.work.period}</span>
          </header>

          <ul>
            {projects.map((project) => (
              <li key={project.title} className="group border-t border-rule py-7 first:border-t-0">
                <a href={project.href} className="block transition-opacity hover:opacity-100 opacity-95">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <ProjectImage src={project.image} />
                      <h3 className="serif text-xl text-foreground sm:text-2xl">{project.title}</h3>
                    </div>
                    <span className="shrink-0 text-sm tabular-nums text-muted">{project.year}</span>
                  </div>
                  <p className="mt-2 text-base leading-relaxed text-foreground/75">{project.description[lang]}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                    <span>{project.role[lang]}</span>
                    <span aria-hidden>·</span>
                    <span className="flex flex-wrap gap-x-2 gap-y-1 text-foreground/55">
                      {project.stack.map((tech, i) => (
                        <span key={tech}>
                          {tech}
                          {i < project.stack.length - 1 && (
                            <span className="ml-2 text-muted" aria-hidden>
                              /
                            </span>
                          )}
                        </span>
                      ))}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-t border-rule" />

        {/* SKILLS */}
        <section id="skills" className="py-20 sm:py-24">
          <header className="mb-12 flex items-baseline justify-between">
            <h2 className="serif text-2xl text-foreground sm:text-3xl">{t.skills.title}</h2>
            <span className="text-sm text-muted">{t.skills.subtitle}</span>
          </header>
          <dl className="space-y-8">
            {skills.map((group) => (
              <div key={group.label.en} className="grid grid-cols-1 gap-3 sm:grid-cols-[8rem,1fr] sm:gap-8">
                <dt className="text-sm text-muted">{group.label[lang]}</dt>
                <dd className="flex flex-wrap gap-x-2 gap-y-1 text-base leading-relaxed text-foreground/85">
                  {group.items.map((item, i) => (
                    <span key={item} className="text-foreground">
                      {item}
                      {i < group.items.length - 1 && (
                        <span className="ml-2 text-muted" aria-hidden>
                          /
                        </span>
                      )}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <hr className="border-t border-rule" />

        {/* CONTACT */}
        <section id="contact" className="py-20 sm:py-24">
          <header className="mb-12 flex items-baseline justify-between">
            <h2 className="serif text-2xl text-foreground sm:text-3xl">{t.contact.title}</h2>
            <span className="text-sm text-muted">{t.contact.subtitle}</span>
          </header>
          <p className="serif text-2xl leading-snug text-foreground sm:text-3xl">
            {t.contact.prompt}
            <a
              href={`mailto:${email}`}
              className="whitespace-nowrap underline decoration-foreground/30 underline-offset-[6px] transition-colors hover:decoration-foreground"
            >
              {email}
            </a>
            .
          </p>
          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-base">
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noreferrer noopener" : undefined}
                  className="inline-flex items-center gap-2 text-foreground/85 underline decoration-foreground/30 underline-offset-[6px] transition-colors hover:decoration-foreground"
                >
                  {social.icon && <SocialIcon name={social.icon} />}
                  <span>{social.label[lang]}</span>
                  {social.external && (
                    <span aria-hidden className="ml-0.5 text-muted">
                      ↗
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-[640px] px-6 pb-10 pt-12 text-sm text-muted sm:px-0">
        <div className="flex flex-col items-start justify-between gap-2 border-t border-rule pt-6 sm:flex-row sm:items-center">
          <p>{t.footer.copyright}</p>
          <a href="#top" className="hover:text-foreground">
            {t.footer.back}
          </a>
        </div>
      </footer>
    </div>
  );
}
