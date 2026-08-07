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
    color: "#22D3EE",
    icon: <FiCode size={16} />,
    bullets: [
      "Building production-grade fullstack apps with Next.js 14+, Express, and MongoDB.",
      "Integrating auth flows (Better Auth, JWT) and AI / LLM copilot features into SaaS products.",
      "Leading frontend architecture, animations (Framer Motion), and responsive design for 6+ active projects.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Frontend Developer",
    company: "Freelance · Client Projects",
    location: "Remote · Global",
    tag: "Frontend",
    color: "#8B5CF6",
    icon: <FiBriefcase size={16} />,
    bullets: [
      "Delivered 12+ production websites — landing pages, portfolios, dashboards, and small SaaS MVPs.",
      "Collaborated with 8+ founders and designers to translate Figma into pixel-perfect React interfaces.",
      "Optimized Core Web Vitals — averaging 95+ Lighthouse performance across delivered sites.",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Self-Taught Engineer · Learning + Building",
    company: "Personal Projects & Open Source",
    location: "Rangpur, BD",
    tag: "Foundation",
    color: "#EC4899",
    icon: <FiCpu size={16} />,
    bullets: [
      "Completed 20+ tutorial and portfolio projects covering React, vanilla JS, CSS, and Node fundamentals.",
      "Built first MERN stack apps: authentication, CRUD, REST APIs, and realtime features.",
      "Contributed to local dev community — mentored juniors, shared tutorials, ran code reviews.",
    ],
  },
];

const achievements = [
  { label: "Projects Shipped", value: 30, suffix: "+", color: "#22D3EE", icon: <FiCode size={22} /> },
  { label: "Happy Clients", value: 12, suffix: "+", color: "#8B5CF6", icon: <FiUsers size={22} /> },
  { label: "Avg. Lighthouse", value: 96, suffix: "/100", color: "#4ADE80", icon: <FiTrendingUp size={22} /> },
  { label: "Years Coding", value: 1.5, suffix: "+", color: "#EC4899", icon: <FiCalendar size={22} />, dec: 1 },
];

function ExperienceSection() {
  return (
    <section id="experience" className="section-wrap relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <SectionHeader
            eyebrow="// Experience"
            title={
              <>
                A <span className="gradient-text">timeline</span> of building
              </>
            }
            subtitle="Three years of intentional leveling up — from learning fundamentals to shipping premium fullstack products. Each milestone reflects real projects, real growth, and real clients."
          />
        </div>

        <div className="relative pl-6 md:pl-10 lg:pl-16 space-y-8 md:space-y-10">
          <div
            aria-hidden
            className="absolute left-3 md:left-5 lg:left-8 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(180deg, rgba(34,211,238,0.7), rgba(139,92,246,0.5), rgba(236,72,153,0.4))",
            }}
          />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="absolute -left-[27px] md:-left-[38px] lg:-left-[52px] top-3 w-10 h-10 rounded-2xl flex items-center justify-center hud-panel z-10"
                style={{
                  color: exp.color,
                  border: `1px solid ${exp.color}44`,
                  boxShadow: `0 0 0 3px rgba(5,8,22,0.98), 0 0 24px ${exp.color}55`,
                }}
              >
                {exp.icon}
              </div>
              <div
                className="absolute -left-[19px] md:-left-[28px] lg:left-[46px] top-[50px] h-px w-6"
                style={{ background: `linear-gradient(90deg, ${exp.color}aa, transparent)` }}
              />

              <div
                className="hud-panel rounded-2xl border border-white/5 p-5 md:p-7 relative overflow-hidden transition-all duration-500 hover:border-cyan/25"
                style={{
                  boxShadow: "0 12px 40px -18px rgba(6,182,212,0.18)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute right-0 top-0 w-52 h-52 pointer-events-none opacity-40"
                  style={{
                    background: `radial-gradient(circle at top right, ${exp.color}22, transparent 70%)`,
                  }}
                />

                <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border"
                      style={{
                        color: exp.color,
                        borderColor: `${exp.color}44`,
                        background: `${exp.color}0F`,
                      }}
                    >
                      {exp.tag}
                    </span>
                    <span className="font-mono text-[10.5px] text-text-muted tracking-wider flex items-center gap-1.5">
                      <FiCalendar size={10} /> {exp.period}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-text-muted tracking-[0.18em] uppercase">
                    {exp.location}
                  </span>
                </div>

                <h3 className="font-display font-bold text-[18px] md:text-[21px] leading-tight text-text-main mb-1">
                  {exp.role}
                </h3>
                <div className="font-mono text-[12px] text-text-soft mb-4">
                  {exp.company}
                </div>

                <ul className="space-y-2.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-[13px] md:text-[14px] text-text-soft leading-relaxed">
                      <span
                        className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{
                          background: exp.color,
                          boxShadow: `0 0 6px ${exp.color}`,
                        }}
                      />
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
    <section id="achievements" className="section-wrap relative pt-2 md:pt-6">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12">
          <SectionHeader
            eyebrow="// Milestones"
            title={
              <>
                Achievements · <span className="gradient-text">by the numbers</span>
              </>
            }
            subtitle="Live stats from shipping production work. Every number represents real projects, real users, and a relentless focus on quality."
          />
        </div>

        <Reveal delay={0.06}>
          <div className="hud-panel rounded-[1.6rem] border border-cyan/15 p-6 md:p-10 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
                maskImage:
                  "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              }}
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] max-w-[900px] pointer-events-none opacity-60"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(34,211,238,0.08), rgba(139,92,246,0.08), rgba(236,72,153,0.05), rgba(34,211,238,0.08))",
                filter: "blur(60px)",
              }}
            />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6, type: "spring" }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative p-5 md:p-6 rounded-2xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, rgba(11,16,34,0.6), rgba(7,17,31,0.4))`,
                    border: `1px solid ${a.color}22`,
                    backdropFilter: "blur(10px)",
                    boxShadow: `inset 0 0 20px ${a.color}0D, 0 0 40px -20px ${a.color}44`,
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute -right-6 -top-6 w-20 h-20 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"
                    style={{ background: a.color }}
                  />
                  <div
                    className="relative flex items-center justify-between mb-4"
                  >
                    <div
                      className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${a.color}1A`,
                        border: `1px solid ${a.color}33`,
                        color: a.color,
                        boxShadow: `inset 0 0 20px ${a.color}18, 0 0 18px ${a.color}22`,
                      }}
                    >
                      {a.icon}
                    </div>
                    <span
                      className="font-mono text-[9px] uppercase tracking-[0.22em]"
                      style={{ color: `${a.color}BB` }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <div
                    className="relative font-display font-bold leading-none mb-2.5"
                    style={{
                      fontSize: "clamp(2rem, 5vw, 3.2rem)",
                      color: a.color,
                      textShadow: `0 0 22px ${a.color}55`,
                    }}
                  >
                    <Counter to={a.value} decimals={a.dec || 0} suffix={a.suffix} />
                  </div>
                  <div className="relative text-[12px] md:text-[13px] text-text-soft font-medium tracking-wide">
                    {a.label}
                  </div>

                  <motion.div
                    aria-hidden
                    className="absolute bottom-0 left-0 h-0.5"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                    style={{
                      background: `linear-gradient(90deg, ${a.color}, transparent)`,
                      boxShadow: `0 0 8px ${a.color}88`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { ExperienceSection, AchievementsSection };
export default ExperienceSection;
