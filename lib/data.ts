export type Project = {
  title: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Loom & Lathe",
    description:
      "An editorial storefront for a fourth-generation weaving workshop.",
    year: "2024",
    role: "Design + Engineering",
    stack: ["Next.js", "Sanity", "Stripe"],
    href: "#",
  },
  {
    title: "Counterweight",
    description:
      "A real-time dashboard for a quantitative trading desk — sub-millisecond chart updates.",
    year: "2024",
    role: "Frontend Lead",
    stack: ["React", "D3", "WebSocket", "Rust/WASM"],
    href: "#",
  },
  {
    title: "Quiet Hours",
    description:
      "A reading log that respects your attention. No notifications, no streaks, no infinite scroll.",
    year: "2023",
    role: "Solo build",
    stack: ["Remix", "PostgreSQL", "Prisma"],
    href: "#",
  },
  {
    title: "Field Notes Atlas",
    description:
      "An interactive archive for a natural history museum. Forty thousand specimens, one page.",
    year: "2023",
    role: "Design + Engineering",
    stack: ["Astro", "MapLibre", "Three.js"],
    href: "#",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL", "Python"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "React", "Remix", "Astro", "Svelte", "Node.js"],
  },
  {
    label: "Design",
    items: ["Figma", "Typesetting", "Typography", "Design systems"],
  },
  {
    label: "Tooling",
    items: ["Git", "Postgres", "Prisma", "Sanity", "Vercel", "Playwright"],
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Read.cv", href: "https://read.cv" },
  { label: "Are.na", href: "https://are.na" },
  { label: "Email", href: "mailto:hola@aureliomarin.dev" },
];
