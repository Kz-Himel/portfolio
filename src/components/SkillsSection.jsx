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
  { name: "Claude", level: 80, cat: "tools", size: "sm" },
  { name: "Tanstack Query", level: 80, cat: "frontend", size: "sm" },
  { name: "Redux", level: 80, cat: "frontend", size: "sm" },
  { name: "Zod", level: 80, cat: "backend", size: "sm" },
  { name: "Prisma", level: 80, cat: "database", size: "sm" },
];

const categoryBoxes = [
  { label: "Language", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Three.js", "Tanstack Query", "Redux"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Better Auth", "JWT", "Zod"] },
  { label: "Database", items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma"] },
  { label: "Tools", items: ["Git", "GitHub", "Vercel", "VS Code", "Figma", "Claude"] },
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

        {/* Minimal Category Tabs */}
        <Reveal delay={0.08} blur={false}>
          <div className="flex flex-wrap gap-4 mb-12 border-b border-border/60 pb-4">
            {categories.map((c) => {
              const active = activeCat === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(c.id)}
                  className={`relative font-mono text-xs px-3 py-1.5 rounded-md transition-all ${
                    active 
                      ? "text-accent bg-accent/10 font-medium" 
                      : "text-text-soft hover:text-text-main hover:bg-border/30"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Clean Radial Cluster */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12} blur={false}>
              <div className="p-6 md:p-8 relative rounded-2xl bg-panel border border-border/80 shadow-xs">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
                    Tech Cluster Map
                  </span>
                  <span className="font-mono text-[11px] text-accent">
                    {filtered.length} active
                  </span>
                </div>

                <div className="relative aspect-square w-full max-w-[440px] mx-auto">
                  {/* CORE STACK CENTER */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center z-10 bg-bg rounded-full border border-accent/40 shadow-sm"
                  >
                    <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-0.5">
                      Core
                    </span>
                    <span className="font-mono text-base md:text-xl font-bold text-accent tracking-tight">
                      STACK
                    </span>
                  </div>

                  {/* CONNECTING LINES */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {hexSkills.map((s, i) => {
                      const r = 36;
                      const pos = hexPos(i, hexSkills.length, r);
                      return (
                        <g key={`l-${s.name}`}>
                          <motion.line
                            x1={50} y1={50}
                            x2={pos.x} y2={pos.y}
                            stroke="var(--border)"
                            strokeWidth="0.4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.02 }}
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {/* SKILL NODES */}
                  {hexSkills.map((s, i) => {
                    const r = 36;
                    const pos = hexPos(i, hexSkills.length, r);
                    return (
                      <motion.div
                        key={s.name}
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.02 }}
                        whileHover={{ scale: 1.15, zIndex: 50 }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                      >
                        <div className="group relative flex items-center justify-center cursor-default">
                          <div
                            className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-bg border border-border/80 flex items-center justify-center font-mono text-[10px] md:text-xs font-medium text-text-main shadow-xs group-hover:border-accent group-hover:text-accent transition-all"
                          >
                            <span className="text-center px-1 truncate">{s.name}</span>
                          </div>

                          {/* Tooltip */}
                          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-[60]">
                            <div className="bg-panel border border-border px-2.5 py-1.5 rounded-lg shadow-md whitespace-nowrap">
                              <div className="font-mono text-[9px] uppercase tracking-wider text-accent">
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

          {/* RIGHT: Minimal Domain Groups */}
          <div className="lg:col-span-5 space-y-4">
            {categoryBoxes.map((box, i) => (
              <Reveal key={box.label} delay={0.15 + i * 0.04} blur={false}>
                <div className="p-5 rounded-xl bg-panel border border-border/80 hover:border-accent/40 transition-all">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono font-semibold text-xs uppercase tracking-wider text-accent">
                      {box.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {box.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs font-mono bg-bg text-text-main border border-border/60 rounded-md"
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