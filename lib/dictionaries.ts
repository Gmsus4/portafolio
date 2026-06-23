export type Lang = "es" | "en";

export type Dictionary = {
  nav: { about: string; work: string; skills: string; contact: string };
  hero: {
    status: string;
    role: string;
    title: string;
    tagline: string;
    bio: string[];
  };
  work: { title: string; period: string };
  skills: { title: string; subtitle: string };
  timeline: { title: string; subtitle: string };
  contact: { title: string; subtitle: string; prompt: string };
  footer: { copyright: string; back: string };
};

export const dictionaries: Record<Lang, Dictionary> = {
  es: {
    nav: {
      about: "Sobre mí",
      work: "Proyectos",
      skills: "Skills",
      contact: "Contacto",
    },
    hero: {
      status: "Disponible para nuevos proyectos",
      role: "Desarrollador Web",
      title: "Fernando Gómez.",
      tagline:
        "Construyo interfaces consideradas y de alto rendimiento para la web, con un ojo en el detalle y otro en el usuario.",
      bio: [
        "Empecé a programar a los dieciséis, en una materia optativa de preparatoria, escribiendo fórmulas en NetBeans sin saber que esa clase terminaría definiendo mi carrera. Un par de meses después descubrí HTML y CSS, y algo tan simple como cambiar el color de fondo de una página me pareció más poderoso que cualquier cosa que hubiera visto en una pantalla.",
        "Desde entonces no he parado. Pasé de páginas estáticas a proyectos freelance para pequeños negocios, luego a aplicaciones full-stack con React, Next.js y bases de datos como PostgreSQL y MongoDB. Cada proyecto me ha enseñado algo nuevo, y cada conocimiento nuevo me ha acercado un paso más a la clase de desarrollador que quiero ser.",
        "Mi filosofía es simple: el aprendizaje continuo no es opcional, es el trabajo. La web cambia rápido, las herramientas cambian más rápido todavía, y la única forma de mantenerse vigente es seguir construyendo. Eso es lo que hago, todos los días, desde Jalisco.",
      ],
    },
    work: {
      title: "Proyectos seleccionados",
      period: "2022 — 2024",
    },
    skills: {
      title: "Lo que uso",
      subtitle: "una lista honesta",
    },
    timeline: {
      title: "Cómo llegué hasta aquí",
      subtitle: "un recorrido breve",
    },
    contact: {
      title: "Hablemos",
      subtitle: "siempre abierto",
      prompt: "La forma más rápida de escribirme es ",
    },
    footer: {
      copyright: "© 2018 — 2026 Fernando Gómez",
      back: "Volver arriba ↑",
    },
  },
  en: {
    nav: {
      about: "About",
      work: "Work",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      status: "Available for new projects",
      role: "Web Developer",
      title: "Fernando Gómez.",
      tagline:
        "I build considered, high-performance interfaces for the web — with one eye on the details and the other on the user.",
      bio: [
        "I started programming at sixteen, in an elective class in high school, writing formulas in NetBeans without knowing that class would end up defining my career. A few months later I discovered HTML and CSS, and something as simple as changing the background color of a page felt more powerful than anything I'd ever seen on a screen.",
        "I haven't stopped since. I went from static pages to freelance projects for small businesses, then to full-stack applications with React, Next.js and databases like PostgreSQL and MongoDB. Every project has taught me something new, and every new skill has brought me a step closer to the kind of developer I want to be.",
        "My philosophy is simple: continuous learning isn't optional, it's the work. The web changes fast, tools change even faster, and the only way to stay current is to keep building. That's what I do, every day, from Jalisco.",
      ],
    },
    work: {
      title: "Selected work",
      period: "2022 — 2024",
    },
    skills: {
      title: "What I use",
      subtitle: "an honest list",
    },
    timeline: {
      title: "How I got here",
      subtitle: "a short walk through",
    },
    contact: {
      title: "Get in touch",
      subtitle: "always open",
      prompt: "The fastest way to reach me is ",
    },
    footer: {
      copyright: "© 2018 — 2026 Fernando Gómez",
      back: "Back to top ↑",
    },
  },
};
