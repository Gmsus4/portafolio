import type { Lang } from "./i18n";

export type Localized = Record<Lang, string>;

export type Project = {
  title: string;
  year: string;
  role: Localized;
  description: Localized;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Tagblade",
    year: "2025",
    role: {
      es: "Agencia · diseño y desarrollo",
      en: "Agency · design + development",
    },
    description: {
      es: "Agencia de desarrollo web profesional que diseña y desarrolla sitios que combinan rendimiento, estética y propósito: diseño responsivo, código optimizado, hosting y mantenimiento, con foco en experiencias digitales modernas que impulsan el crecimiento de los negocios.",
      en: "A professional web development agency that designs and builds sites combining performance, aesthetics and purpose: responsive design, optimized code, hosting and maintenance — focused on modern digital experiences that help businesses grow.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    href: "https://tagblade.com/",
  },
  {
    title: "Teslo Shop",
    year: "2024",
    role: {
      es: "E-commerce · moda y accesorios",
      en: "E-commerce · fashion & accessories",
    },
    description: {
      es: "Tienda en línea de moda y accesorios inspirados en la estética y la innovación de Tesla. Catálogo por categorías, autenticación, carrito y checkout completo en una experiencia de compra intuitiva y moderna.",
      en: "An online fashion and accessories store inspired by Tesla's aesthetic and innovation. Browse a curated catalog by category, with secure authentication, cart and a complete checkout flow in a modern, intuitive shopping experience.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Mybeat",
    year: "2026",
    role: {
      es: "App de seguimiento deportivo",
      en: "Sports tracking app",
    },
    description: {
      es: "Diario deportivo para corredores, ciclistas y caminantes que registra métricas a partir de archivos GPX. Permite compartir el progreso con amigos o profesionales de la salud desde un perfil público, con privacidad geográfica que protege las rutas exactas del usuario.",
      en: "A sports diary for runners, cyclists and walkers that logs metrics from GPX files. Share your progress with friends or health professionals from a public profile, with geographic privacy that protects your exact routes.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    href: "https://www.mybeat.me/",
  },
  {
    title: "lyrx",
    year: "2026",
    role: {
      es: "Open source · CLI",
      en: "Open source · CLI",
    },
    description: {
      es: "Herramienta de línea de comandos escrita en Python que detecta la canción que estás escuchando y muestra la letra sincronizada en tiempo real directamente en la terminal. Compatible con Windows (vía Windows Media Session) y Linux (vía MPRIS). Sin interfaces gráficas, sin configuración extra.",
      en: "An open source command-line tool written in Python. It detects the song you're currently playing and shows the synchronized lyrics in real time, right in your terminal. Compatible with Windows (via Windows Media Session) and Linux (via MPRIS). No GUI, no setup.",
    },
    stack: ["Python", "MPRIS", "Windows Media Session"],
    href: "https://lyricli.vercel.app/",
  },
];

export type SkillGroup = {
  label: Localized;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: { es: "Lenguajes", en: "Languages" },
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
  },
  {
    label: { es: "Frameworks", en: "Frameworks" },
    items: ["React", "Next.js", "Express.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: { es: "Back-end y datos", en: "Backend & data" },
    items: ["Node.js", "PostgreSQL", "MongoDB", "Prisma", "Mongoose"],
  },
  {
    label: { es: "Herramientas", en: "Tools" },
    items: ["Git", "GitHub", "VS Code", "Figma", "Photoshop"],
  },
];

export type TimelineItem = {
  date: Localized;
  title: Localized;
  body: Localized;
};

export const timeline: TimelineItem[] = [
  {
    date: { es: "Mediados de 2016", en: "Mid 2016" },
    title: { es: "El primer `Hola, mundo`", en: "The first `Hello, world`" },
    body: {
      es: "En preparatoria, en una materia optativa, escribí mis primeras líneas en NetBeans. A finales de ese año me topé con HTML y CSS, y descubrí que cambiar el color de fondo de una página era más emocionante de lo que debería.",
      en: "In high school, in an elective class, I wrote my first lines of code in NetBeans. By the end of that year I had stumbled into HTML and CSS, and discovered that changing the background color of a page was more exciting than it had any right to be.",
    },
  },
  {
    date: { es: "Julio 2018", en: "July 2018" },
    title: { es: "Terminé la preparatoria", en: "High school, finished" },
    body: {
      es: "Conocía HTML y CSS a un nivel básico. No me quedé conforme y traté de buscar más información por mi cuenta, leyendo todo lo que encontraba en foros y tutoriales.",
      en: "I knew HTML and CSS at a basic level. I wasn't satisfied and started looking for more on my own, reading everything I could find on forums and tutorials.",
    },
  },
  {
    date: { es: "2019", en: "2019" },
    title: { es: "Primeros proyectos propios", en: "First projects of my own" },
    body: {
      es: "En paralelo a la universidad empecé a hacer páginas estáticas más elaboradas. No era muy constante, pero empecé a cuidar más el diseño gracias a lo que iba aprendiendo de CSS.",
      en: "Alongside university I started building more elaborate static pages. I wasn't very consistent, but I did start caring more about the design as I learned more CSS.",
    },
  },
  {
    date: { es: "2021", en: "2021" },
    title: { es: "Un giro inesperado", en: "An unexpected turn" },
    body: {
      es: "Dejé la universidad para entender qué era lo mío. La respuesta fue programar. Retomé el aprendizaje en serio y di el salto a JavaScript, que terminó de abrirme la puerta al desarrollo web de verdad.",
      en: "I left university to figure out what I really wanted. The answer was programming. I took my learning seriously again and made the leap to JavaScript, which finally opened the door to real web development.",
    },
  },
  {
    date: { es: "2022", en: "2022" },
    title: { es: "Primer trabajo como freelance", en: "First freelance work" },
    body: {
      es: "Con HTML, CSS y un poco de JavaScript empecé a hacer páginas estáticas para pequeños negocios. Nada complicado, pero suficiente para empezar a facturar y entender cómo se trabaja con un cliente real.",
      en: "With HTML, CSS and a little JavaScript I started building static sites for small businesses. Nothing fancy, but enough to start invoicing and to understand what it means to work with a real client.",
    },
  },
  {
    date: { es: "2023 — 2024", en: "2023 — 2024" },
    title: { es: "El siguiente nivel", en: "The next level" },
    body: {
      es: "Dejé las páginas estáticas y me adentré en el mundo dinámico: React, Node.js, MongoDB, PostgreSQL, Prisma, Next.js, TypeScript y Tailwind CSS. Empecé a construir aplicaciones full-stack de verdad, con autenticación, bases de datos y despliegues en producción.",
      en: "I left static pages behind and dove into the dynamic web: React, Node.js, MongoDB, PostgreSQL, Prisma, Next.js, TypeScript and Tailwind CSS. I started building real full-stack applications — with authentication, databases and production deployments.",
    },
  },
];

export type Social = {
  label: Localized;
  href: string;
  external: boolean;
};

export const socials: Social[] = [
  {
    label: { es: "GitHub", en: "GitHub" },
    href: "https://github.com",
    external: true,
  },
  {
    label: { es: "LinkedIn", en: "LinkedIn" },
    href: "https://linkedin.com",
    external: true,
  },
  {
    label: { es: "Email", en: "Email" },
    href: "mailto:fergomez.js@gmail.com",
    external: false,
  },
];

export const email = "fergomez.js@gmail.com";
