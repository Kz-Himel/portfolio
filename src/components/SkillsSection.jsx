"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import TiltCard from "./ui/TiltCard";

const categories = [
  { id: "all", label: "All Systems" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "DevOps · Tools" },
];

const skills = [
  { name: "Next.js", level: 92, cat: "frontend", color: "#FFFFFF", size: "lg" },
  { name: "React.js", level: 95, cat: "frontend", color: "#22D3EE", size: "lg" },
  { name: "TypeScript", level: 82, cat: "frontend", color: "#3B82F6", size: "md" },
  { name: "Tailwind CSS", level: 93, cat: "frontend", color: "#22D3EE", size: "md" },
  { name: "JavaScript", level: 90, cat: "frontend", color: "#FCD34D", size: "md" },
  { name: "Framer Motion", level: 86, cat: "frontend", color: "#A78BFA", size: "sm" },
  { name: "HTML5", level: 96, cat: "frontend", color: "#F97316", size: "sm" },
  { name: "CSS3", level: 94, cat: "frontend", color: "#3B82F6", size: "sm" },
  { name: "Node.js", level: 84, cat: "backend", color: "#4ADE80", size: "md" },
  { name: "Express.js", level: 86, cat: "backend", color: "#E2E8F0", size: "md" },
  { name: "REST APIs", level: 88, cat: "backend", color: "#8B5CF6", size: "md" },
  { name: "JWT Auth", level: 80, cat: "backend", color: "#F472B6", size: "sm" },
  { name: "Better Auth", level: 78, cat: "backend", color: "#22D3EE", size: "sm" },
  { name: "MongoDB", level: 85, cat: "database", color: "#4ADE80", size: "md" },
  { name: "Mongoose", level: 82, cat: "database", color: "#A78BFA", size: "sm" },
  { name: "PostgreSQL", level: 68, cat: "database", color: "#3B82F6", size: "sm" },
  { name: "Git · GitHub", level: 90, cat: "tools", color: "#E2E8F0", size: "md" },
  { name: "Vercel · Netlify", level: 92, cat: "tools", color: "#FFFFFF", size: "sm" },
];

const RADAR_CATS = ["frontend", "backend", "database", "tools"];
const RADAR_LABELS = ["Frontend", "Backend", "Database", "DevOps"];

function computeRadar() {
  return RADAR_CATS.map((c) => {
    const arr = skills.filter((s) => s.cat === c);
    const avg = arr.reduce((a, b) => a + b.level, 0) / (arr.length || 1);
    return Math.min(100, Math.round(avg));
  });
}

function hexPos(index, total, radius) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: 50 + radius * Math.cos(angle),
    y: 50 + radius * Math.sin(angle),
  };
}

export default function SkillsSection() {
  const [activeCat, setActiveCat] = useState("all");
  const radar = useMemo(() => computeRadar(), []);

  const filtered = activeCat === "all" ? skills : skills.filter((s) => s.cat === activeCat);
  const hexSkills = activeCat === "all" ? skills.slice(0, 13) : filtered;

  // Radar polygon (pentagon scaled by each axis)
  const radarPoints = (values) => {
    const cx = 50, cy = 50, maxR = 38;
    const angleStep = (Math.PI * 2) / values.length;
    return values
      .map((v, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const r = (v / 100) * maxR;
        return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
      })
      .join(" ");
  };
  const rings = [20, 40, 60, 80, 100];

  return (
    <section id="skills" className="section-wrap relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
          <SectionHeader
            eyebrow="// Capabilities"
            title={
              <>
                Skills <span className="gradient-text">Constellation</span>
              </>
            }
            subtitle="A modern web stack, mastered in layers. Explore by domain — or view the radar to see balanced strengths across the full stack."
          />
        </div>

        {/* Category filter */}
        <Reveal delay={0.08}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => {
              const active = activeCat === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(c.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    active
                      ? "text-text-main"
                      : "text-text-soft hover:text-text-main"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="skillFilterPill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(6,182,212,0.18), rgba(139,92,246,0.18))",
                        border: "1px solid rgba(6,182,212,0.3)",
                        boxShadow:
                          "0 0 20px rgba(6,182,212,0.15), inset 0 0 20px rgba(139,92,246,0.06)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10 font-mono tracking-[0.12em] text-[11px] uppercase">
                    {c.label}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Hex cluster */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal delay={0.12}>
              <TiltCard max={4} strength={4}>
                <div className="hud-panel rounded-[1.6rem] border border-cyan/15 p-6 md:p-8 min-h-[560px] relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none opacity-40"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12), transparent 60%)",
                    }}
                  />
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-neon mb-1.5">
                        Tech Cluster
                      </div>
                      <h3 className="font-display text-xl font-semibold">
                        Interactive Hex · <span className="gradient-text">{filtered.length} Skills</span>
                      </h3>
                    </div>
                    <span className="hud-panel rounded-full border border-violet/20 px-3 py-1 font-mono text-[10px] text-violet-neon uppercase tracking-wider">
                      Hover · Click
                    </span>
                  </div>

                  <div className="relative aspect-square w-full max-w-[520px] mx-auto">
                    {/* Core center */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full flex flex-col items-center justify-center z-10"
                      style={{
                        background: "radial-gradient(circle, rgba(6,182,212,0.25), rgba(139,92,246,0.2))",
                        border: "1px solid rgba(6,182,212,0.35)",
                        boxShadow: "0 0 60px rgba(6,182,212,0.25), inset 0 0 30px rgba(139,92,246,0.15)",
                      }}
                    >
                      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-neon mb-1">Core</span>
                      <span className="font-display text-[22px] md:text-3xl font-bold gradient-text leading-none">STACK</span>
                      <span className="font-mono text-[9px] text-text-muted mt-1">v2026</span>
                    </div>

                    {/* SVG connecting lines from center to each hex */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
                      <defs>
                        <linearGradient id="connGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="rgba(34,211,238,0.8)" />
                          <stop offset="100%" stopColor="rgba(139,92,246,0.6)" />
                        </linearGradient>
                      </defs>
                      {hexSkills.map((s, i) => {
                        const r = 36 + (s.size === "lg" ? 0 : s.size === "md" ? -4 : -8);
                        const pos = hexPos(i, hexSkills.length, r);
                        return (
                          <motion.line
                            key={`l-${s.name}`}
                            x1={50} y1={50}
                            x2={pos.x} y2={pos.y}
                            stroke="url(#connGrad)"
                            strokeWidth="0.18"
                            strokeDasharray="0.6 0.6"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.55 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.1 + i * 0.03 }}
                          />
                        );
                      })}
                    </svg>

                    {/* Hexagon skill nodes */}
                    {hexSkills.map((s, i) => {
                      const r = 38 + (s.size === "lg" ? 2 : s.size === "md" ? -2 : -6);
                      const pos = hexPos(i, hexSkills.length, r);
                      const box = s.size === "lg" ? "w-14 h-14 md:w-16 md:h-16 text-[10px] md:text-xs" : s.size === "md" ? "w-11 h-11 md:w-13 md:h-13 text-[9.5px] md:text-[10.5px]" : "w-9 h-9 md:w-11 md:h-11 text-[8.5px] md:text-[9.5px]";
                      return (
                        <motion.div
                          key={s.name}
                          initial={{ opacity: 0, scale: 0.4 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.55, delay: 0.15 + i * 0.035, type: "spring" }}
                          whileHover={{ scale: 1.18, zIndex: 50 }}
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                        >
                          <div className="group relative cursor-default flex items-center justify-center">
                            {/* Hex shape via SVG bg */}
                            <div
                              className={`${box} relative flex items-center justify-center font-semibold rounded-lg`}
                              style={{
                                color: s.color,
                                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                background: `linear-gradient(135deg, rgba(11,16,34,0.9), rgba(7,17,31,0.9))`,
                                border: `1px solid ${s.color}55`,
                                boxShadow: `0 0 18px ${s.color}33, inset 0 0 18px ${s.color}1A`,
                              }}
                            >
                              <span className="text-center px-1 leading-tight">
                                {s.name}
                              </span>
                              {/* Progress arc overlay */}
                              <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                  background: `conic-gradient(${s.color}55 0%, ${s.color}33 ${s.level}%, transparent ${s.level}%)`,
                                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                  mixBlendMode: "screen",
                                }}
                              />
                            </div>
                            {/* Tooltip */}
                            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 z-[60]">
                              <div className="hud-panel rounded-xl px-3 py-2 border border-white/10 whitespace-nowrap min-w-[120px]">
                                <div className="text-[10px] uppercase tracking-widest font-mono mb-1" style={{ color: s.color }}>{s.cat}</div>
                                <div className="font-semibold text-[12px] text-text-main mb-1.5">{s.name}</div>
                                <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${s.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="h-full rounded-full"
                                    style={{
                                      background: `linear-gradient(90deg, ${s.color}, #8B5CF6)`,
                                      boxShadow: `0 0 8px ${s.color}`,
                                    }}
                                  />
                                </div>
                                <div className="text-[10px] font-mono text-text-muted mt-1">{s.level}% proficiency</div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* RIGHT: Radar + list */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            {/* Radar */}
            <Reveal delay={0.16}>
              <div className="hud-panel rounded-[1.6rem] border border-violet/15 p-6 md:p-7">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-neon mb-1.5">
                      Proficiency Radar
                    </div>
                    <h3 className="font-display text-xl font-semibold">
                      Strength · <span className="gradient-text">Quadrants</span>
                    </h3>
                  </div>
                </div>

                <div className="relative aspect-square w-full max-w-[360px] mx-auto">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(6,182,212,0.35)" />
                        <stop offset="100%" stopColor="rgba(139,92,246,0.15)" />
                      </radialGradient>
                      <linearGradient id="radarStroke" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#22D3EE" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>

                    {/* Concentric rings */}
                    {rings.map((r) => {
                      const pts = RADAR_LABELS.map((_, i) => {
                        const angle = (i / RADAR_LABELS.length) * Math.PI * 2 - Math.PI / 2;
                        const rr = (r / 100) * 38;
                        return `${50 + rr * Math.cos(angle)},${50 + rr * Math.sin(angle)}`;
                      }).join(" ");
                      return (
                        <polygon
                          key={r}
                          points={pts}
                          fill="none"
                          stroke="rgba(148,163,184,0.1)"
                          strokeWidth="0.2"
                        />
                      );
                    })}

                    {/* Axis lines */}
                    {RADAR_LABELS.map((_, i) => {
                      const angle = (i / RADAR_LABELS.length) * Math.PI * 2 - Math.PI / 2;
                      return (
                        <line
                          key={i}
                          x1={50} y1={50}
                          x2={50 + 38 * Math.cos(angle)}
                          y2={50 + 38 * Math.sin(angle)}
                          stroke="rgba(6,182,212,0.15)"
                          strokeWidth="0.2"
                        />
                      );
                    })}

                    {/* Area */}
                    <motion.polygon
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "50px 50px" }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      points={radarPoints(radar)}
                      fill="url(#radarFill)"
                      stroke="url(#radarStroke)"
                      strokeWidth="0.4"
                    />

                    {/* Data points */}
                    {radar.map((v, i) => {
                      const angle = (i / RADAR_LABELS.length) * Math.PI * 2 - Math.PI / 2;
                      const r = (v / 100) * 38;
                      return (
                        <motion.circle
                          key={i}
                          initial={{ r: 0 }}
                          whileInView={{ r: 0.9 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                          cx={50 + r * Math.cos(angle)}
                          cy={50 + r * Math.sin(angle)}
                          fill="#22D3EE"
                          style={{ filter: "drop-shadow(0 0 2px rgba(34,211,238,0.9))" }}
                        />
                      );
                    })}

                    {/* Labels */}
                    {RADAR_LABELS.map((l, i) => {
                      const angle = (i / RADAR_LABELS.length) * Math.PI * 2 - Math.PI / 2;
                      const r = 46;
                      const x = 50 + r * Math.cos(angle);
                      const y = 50 + r * Math.sin(angle);
                      return (
                        <g key={l}>
                          <text
                            x={x} y={y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="fill-text-soft"
                            style={{ fontSize: "2.6px", fontFamily: "monospace", letterSpacing: "0.05em" }}
                          >
                            {l}
                          </text>
                          <text
                            x={x} y={y + 3}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="fill-cyan-neon"
                            style={{ fontSize: "2.2px", fontFamily: "monospace", fontWeight: 700 }}
                          >
                            {radar[i]}%
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </Reveal>

            {/* Detailed skills list with bars */}
            <Reveal delay={0.2}>
              <div className="hud-panel rounded-[1.4rem] border border-cyan/15 p-5 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-neon">
                    Linear · Progress
                  </div>
                  <span className="text-[10px] text-text-muted font-mono">{filtered.length} tracked</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3.5">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((s, i) => (
                      <motion.div
                        key={s.name}
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ delay: i * 0.025, duration: 0.4 }}
                        className="space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[12px] text-text-main font-medium">
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: s.color, boxShadow: `0 0 6px ${s.color}` }}
                            />
                            {s.name}
                          </div>
                          <span className="font-mono text-[10px] text-text-muted">
                            {s.level}%
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full relative"
                            style={{
                              background: `linear-gradient(90deg, ${s.color} 0%, #8B5CF6 100%)`,
                              boxShadow: `0 0 8px ${s.color}99`,
                            }}
                          >
                            <div
                              className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_white]"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
