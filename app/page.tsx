import Link from "next/link";
import { projects, skills, socials } from "@/lib/data";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="mx-auto flex w-full max-w-[640px] items-center justify-between px-6 py-8 sm:px-0">
        <Link
          href="#top"
          className="text-sm font-medium tracking-tight text-foreground"
        >
          Aurelio Marín
        </Link>
        <nav
          aria-label="Primary"
          className="flex items-center gap-5 text-sm text-muted"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main
        id="top"
        className="mx-auto w-full max-w-[640px] flex-1 px-6 sm:px-0"
      >
        {/* HERO / ABOUT */}
        <section id="about" className="pt-12 pb-24 sm:pt-20 sm:pb-32">
          <p className="text-sm text-muted">
            Independent web developer · Madrid
          </p>
          <h1 className="serif mt-6 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            Aurelio Marín.
          </h1>
          <p className="serif mt-6 text-2xl leading-snug text-foreground/85 sm:text-3xl">
            I build considered, performant interfaces for studios, founders and
            the occasional museum.
          </p>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
            <p>
              Eight years writing the front half of the web — mostly
              TypeScript, React and CSS, occasionally Svelte and Astro, almost
              never anything else. I work on small, well-defined slices of
              larger products: a design system, a checkout, a dashboard, an
              editorial site that has to load on a five-year-old phone.
            </p>
            <p>
              Currently booking a single engagement for late July. I answer
              email the same day it arrives.
            </p>
          </div>
        </section>

        <hr className="rule border-t" />

        {/* WORK */}
        <section id="work" className="py-20 sm:py-28">
          <header className="mb-12 flex items-baseline justify-between">
            <h2 className="serif text-2xl text-foreground sm:text-3xl">
              Selected work
            </h2>
            <span className="text-sm text-muted">2023 — 2024</span>
          </header>

          <ul>
            {projects.map((project) => (
              <li
                key={project.title}
                className="group border-t border-rule py-7 first:border-t-0"
              >
                <a
                  href={project.href}
                  className="block transition-opacity hover:opacity-100 opacity-95"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="serif text-xl text-foreground sm:text-2xl">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-sm tabular-nums text-muted">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-2 text-base leading-relaxed text-foreground/75">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                    <span>{project.role}</span>
                    <span aria-hidden>·</span>
                    <span className="text-foreground/55">
                      {project.stack.join(" / ")}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <hr className="rule border-t" />

        {/* SKILLS */}
        <section id="skills" className="py-20 sm:py-28">
          <header className="mb-12 flex items-baseline justify-between">
            <h2 className="serif text-2xl text-foreground sm:text-3xl">
              Tools I use
            </h2>
            <span className="text-sm text-muted">a short list</span>
          </header>

          <dl className="space-y-8">
            {skills.map((group) => (
              <div
                key={group.label}
                className="grid grid-cols-1 gap-3 sm:grid-cols-[8rem,1fr] sm:gap-8"
              >
                <dt className="text-sm text-muted">{group.label}</dt>
                <dd className="text-base leading-relaxed text-foreground/85">
                  {group.items.map((item, i) => (
                    <span key={item}>
                      <span className="text-foreground">{item}</span>
                      {i < group.items.length - 1 && (
                        <span className="mx-2 text-muted">/</span>
                      )}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <hr className="rule border-t" />

        {/* CONTACT */}
        <section id="contact" className="py-20 sm:py-28">
          <header className="mb-12 flex items-baseline justify-between">
            <h2 className="serif text-2xl text-foreground sm:text-3xl">
              Get in touch
            </h2>
            <span className="text-sm text-muted">always open</span>
          </header>

          <p className="serif text-2xl leading-snug text-foreground sm:text-3xl">
            The fastest way to reach me is{" "}
            <a
              href="mailto:hola@aureliomarin.dev"
              className="underline decoration-foreground/30 underline-offset-[6px] transition-colors hover:decoration-foreground"
            >
              hola@aureliomarin.dev
            </a>
            .
          </p>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-base">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="text-foreground/85 underline decoration-foreground/30 underline-offset-[6px] transition-colors hover:decoration-foreground"
                >
                  {social.label}
                  {social.href.startsWith("http") && (
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
          <p>© 2017 — 2026 Aurelio Marín</p>
          <a href="#top" className="hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
