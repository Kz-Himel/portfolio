"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

const categories = [
  { id: "all", label: "All" },
  { id: "language", label: "Language" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools" },
];

const skills = [
  { name: "Next.js", level: 92, cat: "frontend", size: "lg" },
  { name: "React.js", level: 95, cat: "frontend", size: "lg" },
  { name: "TypeScript", level: 82, cat: "frontend", size: "md" },
  { name: "Tailwind CSS", level: 93, cat: "frontend", size: "md" },
  { name: "JavaScript", level: 90, cat: "frontend", size: "md" },
  { name: "Framer Motion", level: 86, cat: "frontend", size: "sm" },
  { name: "HTML5", level: 96, cat: "frontend", size: "sm" },
  { name: "CSS3", level: 94, cat: "frontend", size: "sm" },
  { name: "Node.js", level: 84, cat: "backend", size: "md" },
  { name: "Express.js", level: 86, cat: "backend", size: "md" },
  { name: "REST APIs", level: 88, cat: "backend", size: "md" },
  { name: "JWT Auth", level: 80, cat: "backend", size: "sm" },
  { name: "Better Auth", level: 78, cat: "backend", size: "sm" },
  { name: "MongoDB", level: 85, cat: "database", size: "md" },
  { name: "Mongoose", level: 82, cat: "database", size: "sm" },
  { name: "PostgreSQL", level: 68, cat: "database", size: "sm" },
  { name: "Git · GitHub", level: 90, cat: "tools", size: "md" },
  { name: "Vercel · Netlify", level: 92, cat: "tools", size: "sm" },
];

const categoryBoxes = [
  { label: "Language", items: ["JavaScript(ES6+)", "TypeScript", "Html5", "CSS3"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Hero Ui", "Shadcn", "Framer Motion", "Three.js"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Better Auth", "JWT"] },
  { label: "Database", items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma"] },
  { label: "Tools", items: ["Git", "GitHub", "Vercel", "VS Code", "Figma"] },
];

function hexPos(index, total, radius) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: Number((50 + radius * Math.cos(angle)).toFixed(4)),
    y: Number((50 + radius * Math.sin(angle)).toFixed(4)),
  };
}

export default function SkillsSection() {
  const [activeCat, setActiveCat] = useState("all");

  const filtered = activeCat === "all" ? skills : skills.filter((s) => s.cat === activeCat);
  const hexSkills = activeCat === "all" ? skills.slice(0, 13) : filtered;

  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="skills"
          subtitle="A modern web stack, mastered in layers — explore by domain below."
        />

        <Reveal delay={0.08} blur={false}>
          <div className="flex flex-wrap gap-6 mb-10 border-b border-border">
            {categories.map((c) => {
              const active = activeCat === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(c.id)}
                  className={`relative pb-3 font-mono text-[13px] transition-colors ${
                    active ? "text-accent" : "text-text-soft hover:text-text-main"
                  }`}
                >
                  {c.label}
                  {active && (
                    <motion.span
                      layoutId="skillTabUnderline"
                      className="absolute left-0 right-0 -bottom-px h-[2px]"
                      style={{ background: "var(--accent)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Radial Stack Cluster */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12} blur={false}>
              <div className="box p-6 md:p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
                    Tech Cluster
                  </span>
                  <span className="font-mono text-[10px] text-text-muted">
                    {filtered.length} skills
                  </span>
                </div>

                <div className="relative aspect-square w-full max-w-[480px] mx-auto">
                  
                  {/* CORE STACK CENTER */}
                  <div
                    className="box absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92px] h-[92px] md:w-[116px] md:h-[116px] flex flex-col items-center justify-center z-10 bg-bg"
                    style={{ borderColor: "var(--accent)" }}
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted mb-1">
                      Core
                    </span>
                    <span className="font-mono text-lg md:text-2xl font-bold text-accent leading-none">
                      STACK
                    </span>
                  </div>

                  {/* CONNECTING LINES WITH WAVE PULSE */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {hexSkills.map((s, i) => {
                      const r = 36 + (s.size === "lg" ? 0 : s.size === "md" ? -4 : -8);
                      const pos = hexPos(i, hexSkills.length, r);
                      return (
                        <g key={`l-${s.name}`}>
                          {/* Base Connection Line */}
                          <motion.line
                            x1={50} y1={50}
                            x2={pos.x} y2={pos.y}
                            stroke="var(--border)"
                            strokeWidth="0.3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 + i * 0.03 }}
                          />

                          {/* Line Pulse Traveling Outward */}
                          <motion.line
                            x1={50} y1={50}
                            x2={pos.x} y2={pos.y}
                            stroke="var(--accent)"
                            strokeWidth="0.6"
                            strokeDasharray="6 20"
                            strokeLinecap="round"
                            initial={{ strokeDashoffset: 26, opacity: 0 }}
                            animate={{
                              strokeDashoffset: [26, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              delay: (i % 4) * 0.25,
                              ease: "easeInOut",
                            }}
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {/* SKILL BOXES */}
                  {hexSkills.map((s, i) => {
                    const r = 38 + (s.size === "lg" ? 2 : s.size === "md" ? -2 : -6);
                    const pos = hexPos(i, hexSkills.length, r);
                    const box =
                      s.size === "lg"
                        ? "w-14 h-14 md:w-16 md:h-16 text-[10px] md:text-xs"
                        : s.size === "md"
                        ? "w-11 h-11 md:w-[3.25rem] md:h-[3.25rem] text-[9.5px] md:text-[10.5px]"
                        : "w-9 h-9 md:w-11 md:h-11 text-[8.5px] md:text-[9.5px]";
                    return (
                      <motion.div
                        key={s.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 + i * 0.03 }}
                        whileHover={{ scale: 1.12, zIndex: 50 }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                      >
                        <div className="group relative flex items-center justify-center cursor-default">
                          <div
                            className={`box ${box} bg-bg flex items-center justify-center font-mono font-medium text-text-main transition-colors duration-300 group-hover:border-accent`}
                          >
                            <span className="text-center px-1 leading-tight">{s.name}</span>
                          </div>

                          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-[60]">
                            <div className="box bg-bg px-3 py-2 whitespace-nowrap">
                              <div className="font-mono text-[9px] uppercase tracking-widest text-accent mb-1">
                                {s.cat}
                              </div>
                              <div className="font-mono text-[10px] text-text-muted">
                                {s.level}% proficiency
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Clean Pill Badge List */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 content-start">
            {categoryBoxes.map((box, i) => (
              <Reveal key={box.label} delay={0.16 + i * 0.05} blur={false}>
                <div className="box p-4 transition-all hover:border-accent/50">
                  <div className="mb-2.5">
                    <span className="font-mono font-semibold text-[12px] uppercase tracking-wider text-accent">
                      {box.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {box.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-[11px] font-mono bg-border/40 text-text-main border border-border/80 rounded-md transition-colors hover:border-accent/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}