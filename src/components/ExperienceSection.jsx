"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCode, FiUsers, FiCpu, FiCalendar, FiTrendingUp } from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";

const experience = [
  {
    period: "2025 — Present",
    role: "Junior MERN / Frontend Developer",
    company: "Freelance · Independent",
    location: "Remote · Bangladesh",
    tag: "Fullstack",
    icon: <FiCode size={15} />,
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
    icon: <FiBriefcase size={15} />,
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
    icon: <FiCpu size={15} />,
    bullets: [
      "Completed 20+ tutorial and portfolio projects covering React, vanilla JS, CSS, and Node fundamentals.",
      "Built first MERN stack apps: authentication, CRUD, REST APIs, and realtime features.",
      "Contributed to local dev community — mentored juniors, shared tutorials, ran code reviews.",
    ],
  },
];

const achievements = [
  { label: "Projects Shipped", value: 30, suffix: "+", icon: <FiCode size={20} /> },
  { label: "Happy Clients", value: 12, suffix: "+", icon: <FiUsers size={20} /> },
  { label: "Avg. Lighthouse", value: 96, suffix: "/100", icon: <FiTrendingUp size={20} /> },
  { label: "Years Coding", value: 1.5, suffix: "+", icon: <FiCalendar size={20} />, dec: 1 },
];

function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="experience"
          subtitle="Three years of intentional leveling up — from learning fundamentals to shipping fullstack products."
        />

        <div className="relative pl-6 md:pl-8 space-y-6">
          <div
            aria-hidden
            className="absolute left-[7px] md:left-[9px] top-1 bottom-1 w-px bg-border"
          />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute -left-6 md:-left-8 top-4 w-4 h-4 flex items-center justify-center text-accent"
                style={{ background: "var(--bg)" }}
              >
                {exp.icon}
              </span>

              <div className="box p-5 md:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                      {exp.tag}
                    </span>
                    <span className="font-mono text-[10.5px] text-text-muted flex items-center gap-1.5">
                      <FiCalendar size={10} /> {exp.period}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                    {exp.location}
                  </span>
                </div>

                <h3 className="font-mono font-bold text-[17px] md:text-lg text-text-main mb-1">
                  {exp.role}
                </h3>
                <div className="font-mono text-[12px] text-text-soft mb-4">
                  {exp.company}
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-[13px] text-text-soft leading-relaxed">
                      <span className="mt-2 shrink-0 w-1 h-1" style={{ background: "var(--accent)" }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="relative pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="achievements"
          subtitle="Live stats from shipping production work."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={0.06 + i * 0.06} blur={false}>
              <div className="box p-5 md:p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent">{a.icon}</span>
                  <span className="font-mono text-[10px] text-text-muted">0{i + 1}</span>
                </div>
                <div className="font-mono font-bold text-text-main leading-none mb-2 text-[2rem] md:text-[2.5rem]">
                  <Counter to={a.value} decimals={a.dec || 0} suffix={a.suffix} />
                </div>
                <div className="text-[12px] text-text-soft">{a.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ExperienceSection, AchievementsSection };
export default ExperienceSection;