import projects from "./projects";

export const personalInfo = {
  name: "Khayruzzaman Himel",
  shortName: "Kz Himel",
  role: "Fullstack Developer",
  title: "Junior MERN Developer crafting modern, animated, and scalable web experiences.",
  bio: "I'm a fullstack developer and creative technologist based in Bangladesh, building robust, accessible web applications that bridge design and engineering.",
  aboutHeadline: "Crafting digital experiences at the intersection of engineering and design.",
  aboutParagraphs: [
    "I am a passionate Full-Stack Developer specializing in the MERN stack and modern web technologies. My approach combines clean, maintainable code architecture with polished, fluid user interfaces.",
    "Over the past few years, I've worked on a diverse range of projects—from dynamic SaaS platforms and AI-driven workflow tools to high-performance marketing sites.",
  ],
  profileImage: "/profile.png",
  resumeUrl: "/Khayruzzaman_Himel_Resume.pdf",
  cvUrl: "/Khayruzzaman_Himel_CV.pdf",
  email: "kzhimel129@gmail.com",
  secondaryEmail: "himel.dev@gmail.com",
  phone: "+880 1341288101",
  whatsappUrl: "https://wa.me/8801341288101",
  location: "Rangpur, Bangladesh · GMT+6",
  availabilityNotice: "Open for freelance & full-time roles · Accepting new projects from Q3 2026 · Reply within 24h",
  stats: [
    { value: "04+", label: "Years Exp." },
    { value: "35+", label: "Projects" },
    { value: "100%", label: "Satisfaction" },
  ],
  glance: [
    { label: "Role", value: "Fullstack Developer" },
    { label: "Location", value: "Bangladesh" },
    { label: "Focus", value: "MERN & Next.js" },
    { label: "Experience", value: "04+ Years" },
  ],
  socials: [
    {
      platform: "GitHub",
      handle: "@Kz-Himel",
      href: "https://github.com/Kz-Himel",
    },
    {
      platform: "LinkedIn",
      handle: "Khayruzzaman Himel",
      href: "https://www.linkedin.com/in/khayruzzaman-himel/",
    },
    {
      platform: "Discord",
      handle: "kzhimel",
      href: "https://discord.com/channels/1495450778364678285/1495450779220312116",
    },
    {
      platform: "WhatsApp",
      handle: "+880 1341288101",
      href: "https://wa.me/8801341288101",
    },
    {
      platform: "Email",
      handle: "kzhimel129@gmail.com",
      href: "mailto:kzhimel129@gmail.com",
    },
  ],
};

export const skillsData = {
  categories: [
    { id: "all", label: "All" },
    { id: "language", label: "Language" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools" },
  ],
  list: [
    { name: "Next.js", level: 92, cat: "frontend" },
    { name: "React.js", level: 95, cat: "frontend" },
    { name: "TypeScript", level: 82, cat: "frontend" },
    { name: "Tailwind CSS", level: 93, cat: "frontend" },
    { name: "JavaScript", level: 90, cat: "language" },
    { name: "Framer Motion", level: 86, cat: "frontend" },
    { name: "HTML5", level: 96, cat: "language" },
    { name: "CSS3", level: 94, cat: "language" },
    { name: "Node.js", level: 84, cat: "backend" },
    { name: "Express.js", level: 86, cat: "backend" },
    { name: "REST APIs", level: 88, cat: "backend" },
    { name: "JWT Auth", level: 80, cat: "backend" },
    { name: "Better Auth", level: 78, cat: "backend" },
    { name: "MongoDB", level: 85, cat: "database" },
    { name: "Mongoose", level: 82, cat: "database" },
    { name: "PostgreSQL", level: 68, cat: "database" },
    { name: "Git · GitHub", level: 90, cat: "tools" },
    { name: "Vercel · Netlify", level: 92, cat: "tools" },
    { name: "Claude", level: 80, cat: "tools" },
  ],
  categoryGroups: [
    { label: "Language", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
    { label: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"] },
    { label: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Better Auth", "JWT"] },
    { label: "Database", items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma"] },
    { label: "Tools", items: ["Git", "GitHub", "Vercel", "VS Code", "Claude"] },
  ],
};

export const servicesData = [
  {
    id: "mern",
    title: "FullStack & MERN Stack Development",
    desc: "End-to-end fullstack apps with MongoDB, Express, React, and Node — designed to scale and maintain.",
  },
  {
    id: "backend",
    title: "Backend & API Engineering",
    desc: "REST APIs, auth (JWT / Better Auth), rate limits, secure DB schemas, and clean architecture.",
  },
  {
    id: "ai",
    title: "AI & LLM Integration",
    desc: "Ship AI copilots, semantic search, contextual assistants, and RAG-powered flows into production products.",
  },
  {
    id: "responsive",
    title: "Responsive Web Design",
    desc: "Pixel-perfect, motion-rich interfaces for desktop, tablet, and mobile — mobile-first, accessible.",
  },
  {
    id: "uiux",
    title: "UI / UX Engineering",
    desc: "Translate Figma into real products. Design systems, component libraries, and polished interactions.",
  },
  {
    id: "apis",
    title: "Third-Party API Integration",
    desc: "Payments (Stripe), email (Resend), social logins, CRM, and any SaaS REST API — wired cleanly.",
  },
  {
    id: "seo",
    title: "Performance & SEO Optimization",
    desc: "Core Web Vitals, image optimization, SEO metadata, and high Lighthouse scores on production sites.",
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    desc: "Ship on Vercel, Netlify, Railway, Render — CI config, env management, and reliable releases.",
  },
];

export const experienceData = [
  {
    period: "2025 — Present",
    role: "Junior MERN / Frontend Developer",
    company: "Freelance · Independent",
    location: "Remote · Bangladesh",
    tag: "Fullstack",
    bullets: [
      "Building production-grade fullstack apps with Next.js, Express, and MongoDB.",
      "Integrating auth flows (Better Auth, JWT) and AI / LLM copilot features into SaaS products.",
      "Leading frontend architecture, animations, and responsive design for active client projects.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Frontend Developer",
    company: "Freelance · Client Projects",
    location: "Remote · Global",
    tag: "Frontend",
    bullets: [
      "Delivered production websites — landing pages, portfolios, dashboards, and small SaaS MVPs.",
      "Collaborated with founders and designers to translate Figma into pixel-perfect React interfaces.",
      "Optimized Core Web Vitals across every delivered site.",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Self-Taught Engineer · Learning + Building",
    company: "Personal Projects & Open Source",
    location: "Rangpur, BD",
    tag: "Foundation",
    bullets: [
      "Completed 20+ tutorial and portfolio projects covering React, vanilla JS, CSS, and Node fundamentals.",
      "Built first MERN stack apps: authentication, CRUD, REST APIs, and realtime features.",
      "Contributed to local dev community — mentored juniors, shared tutorials, ran code reviews.",
    ],
  },
];

export const achievementsData = [
  {
    label: "Blackbelt Web Developer",
    issuer: "Programming Hero",
    detail: "Complete Web Development Course · Batch 13",
    image: "/achievements/certificate_blackbelt.jpeg",
    driveLink: "https://drive.google.com",
  },
  {
    label: "Certificate of Completion with Excellence",
    issuer: "Programming Hero",
    detail: "Complete Web Development Course · Batch 13",
    image: "/achievements/certificate_programming_hero.png",
    driveLink: "https://drive.google.com",
  },
  {
    label: "CV Writing & Interview",
    issuer: "10 Minute School",
    detail: "Online Course",
    image: "/achievements/certificate_tenminscl.png",
    driveLink: "https://drive.google.com",
  },
];

export const stations = [
  { id: "hero", label: "01. Index", title: "Hero", progress: 0.0 },
  { id: "about", label: "02. Profile", title: "About", progress: 0.14 },
  { id: "skills", label: "03. Arsenal", title: "Skills", progress: 0.28 },
  { id: "projects", label: "04. Works", title: "Projects", progress: 0.44 },
  { id: "services", label: "05. Services", title: "Services", progress: 0.6 },
  { id: "experience", label: "06. Trajectory", title: "Experience", progress: 0.74 },
  { id: "achievements", label: "07. Credentials", title: "Achievements", progress: 0.88 },
  { id: "contact", label: "08. Dispatch", title: "Contact", progress: 1.0 },
];

export { projects };
