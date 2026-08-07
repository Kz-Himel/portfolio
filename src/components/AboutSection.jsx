"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiAward,
  FiTarget,
  FiZap,
  FiThumbsUp,
  FiMapPin,
  FiCalendar,
  FiBookOpen,
  FiGlobe,
} from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";
import TiltCard from "./ui/TiltCard";

const highlights = [
  {
    icon: <FiZap size={20} />,
    color: "#22D3EE",
    title: "Fast & Optimized",
    desc: "60fps interactions, lazy loads, and Core Web Vitals obsessed.",
  },
  {
    icon: <FiTarget size={20} />,
    color: "#A78BFA",
    title: "Pixel Perfect",
    desc: "Design-system-grade precision across desktop, tablet & mobile.",
  },
  {
    icon: <FiThumbsUp size={20} />,
    color: "#4ADE80",
    title: "User-Focused",
    desc: "Accessible, intuitive flows with reduced-motion support.",
  },
  {
    icon: <FiAward size={20} />,
    color: "#F472B6",
    title: "Premium Quality",
    desc: "AAA-game polish, elegant motion, and delightful micro-details.",
  },
];

const timeline = [
  {
    year: "2022 — Present",
    title: "Diploma in Computer Technology",
    org: "Rangpur Polytechnic Institute",
    tag: "Education",
    desc: "Structured engineering foundation in algorithms, data structures, networking, and modern software architecture.",
    icon: <FiBookOpen size={16} />,
    color: "#22D3EE",
  },
  {
    year: "2024 — 2025",
    title: "Frontend Developer · Freelance",
    org: "Remote · Bangladesh",
    tag: "Career",
    desc: "Shipped responsive React & Next.js projects for startups and local businesses — from landing pages to dashboards.",
    icon: <FiZap size={16} />,
    color: "#A78BFA",
  },
  {
    year: "2025 — 2026",
    title: "Junior MERN Developer",
    org: "Collaborative & client projects",
    tag: "Growth",
    desc: "Built fullstack apps with auth, payments, AI integrations, and realtime features — focused on Next.js + Express + MongoDB.",
    icon: <FiGlobe size={16} />,
    color: "#EC4899",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-wrap relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end flex-wrap gap-6 mb-10 md:mb-14">
          <SectionHeader
            eyebrow="// Identity"
            title={
              <>
                About the <span className="gradient-text">Engineer</span>
                <br /> behind the pixels
              </>
            }
            subtitle="I'm Khayruzzaman Himel — a developer who treats interfaces as products. I blend engineering rigor with visual taste to ship websites that feel alive, responsive, and confidently premium."
          />
          <Reveal delay={0.1}>
            <div className="hud-panel rounded-2xl border border-cyan/15 px-4 py-3 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <div className="font-mono text-[11px] leading-tight">
                <div className="text-green-400 uppercase tracking-[0.2em]">Status</div>
                <div className="text-text-main font-semibold">Open for freelance</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-start">
          {/* Left column: portrait + info */}
          <div className="md:col-span-5 space-y-6">
            <Reveal delay={0.05} y={24} blur>
              <TiltCard strength={8} max={8} className="w-full max-w-sm mx-auto md:max-w-none">
                <div className="relative rounded-[1.6rem] overflow-hidden hud-panel border border-violet/20 shadow-[0_24px_70px_-24px_rgba(139,92,246,0.35)]">
                  {/* corner notches */}
                  <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-neon z-20 pointer-events-none" />
                  <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-violet-neon z-20 pointer-events-none" />
                  <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-magenta-glow z-20 pointer-events-none" />
                  <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-neon z-20 pointer-events-none" />

                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/profile.png"
                      alt="Himel portrait"
                      fill
                      className="object-cover scale-105"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 420px"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none mix-blend-overlay"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(5,8,22,0.0) 30%, rgba(5,8,22,0.8) 100%)",
                      }}
                    />
                    {/* grid overlay */}
                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(34,211,238,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.25) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                        maskImage:
                          "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                      }}
                    />

                    {/* Top meta */}
                    <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-20">
                      <div className="hud-panel rounded-xl px-3 py-1.5 border border-cyan/25">
                        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-neon">
                          Profile · v2.0
                        </div>
                      </div>
                      <div className="hud-panel rounded-xl px-3 py-1.5 border border-violet/25">
                        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-neon flex items-center gap-1.5">
                          <FiMapPin size={10} /> Rangpur, BD
                        </div>
                      </div>
                    </div>

                    {/* Bottom data panel */}
                    <div className="absolute left-5 right-5 bottom-5 z-20">
                      <div className="hud-panel rounded-2xl border border-white/10 px-4 py-3.5 grid grid-cols-3 gap-3">
                        <div>
                          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted mb-1">
                            Since
                          </div>
                          <div className="font-display text-xl text-text-main leading-none">
                            <Counter to={2023} suffix="" />
                          </div>
                        </div>
                        <div className="border-l border-cyan/10 pl-3">
                          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted mb-1">
                            Projects
                          </div>
                          <div className="font-display text-xl gradient-text leading-none">
                            <Counter to={30} suffix="+" />
                          </div>
                        </div>
                        <div className="border-l border-violet/10 pl-3">
                          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted mb-1">
                            Rating
                          </div>
                          <div className="font-display text-xl text-text-main leading-none">
                            <Counter to={4.9} decimals={1} suffix="★" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={0.1 + i * 0.05}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="hud-panel rounded-2xl border border-white/5 p-4 h-full group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{
                        background: `${h.color}14`,
                        color: h.color,
                        boxShadow: `inset 0 0 0 1px ${h.color}33, 0 0 18px ${h.color}20`,
                      }}
                    >
                      {h.icon}
                    </div>
                    <h3 className="font-display font-semibold text-[14px] text-text-main mb-1.5">
                      {h.title}
                    </h3>
                    <p className="text-[11.5px] text-text-soft leading-relaxed">
                      {h.desc}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: copy + timeline */}
          <div className="md:col-span-7 space-y-8">
            <Reveal delay={0.15}>
              <div className="hud-panel rounded-[1.4rem] border border-cyan/15 p-6 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-neon mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-neon shadow-[0_0_8px_var(--cyan-glow)]" />
                  Narrative
                </div>
                <div className="space-y-4 text-text-soft text-sm md:text-[15px] leading-[1.8]">
                  <p>
                    Hi, I'm <span className="text-text-main font-semibold">Khayruzzaman Himel</span>{" "}
                    — a <span className="text-cyan-neon font-medium">Junior MERN & Frontend Developer</span>{" "}
                    from Rangpur, Bangladesh. I'm currently completing my{" "}
                    <span className="text-violet-neon font-medium">Diploma in Computer Technology</span>{" "}
                    at Rangpur Polytechnic Institute, and I've been coding and building
                    production-grade web projects for over a year.
                  </p>
                  <p>
                    I care deeply about{" "}
                    <span className="text-text-main">craft</span> — the kind of
                    subtle details that separate a good site from a{" "}
                    <span className="text-magenta-glow font-medium">memorable one</span>
                    . I combine a frontend-first approach with fullstack competence:
                    building authentication flows, REST APIs, database schemas, and
                    now, integrating AI & LLMs into product experiences.
                  </p>
                  <p>
                    When I'm not coding, I'm studying design, dissecting{" "}
                    <span className="text-cyan-neon">Awwwards</span>-level
                    interactions, and leveling up — to make every next project better
                    than the last.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Timeline */}
            <Reveal delay={0.22}>
              <div className="hud-panel rounded-[1.4rem] border border-violet/15 p-6 md:p-8 relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-neon mb-2">
                      Journey
                    </div>
                    <h3 className="font-display text-2xl md:text-[1.7rem] font-semibold">
                      Timeline · <span className="gradient-text">So Far</span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-[10.5px] font-mono uppercase tracking-[0.18em] text-text-muted">
                    <FiCalendar size={11} className="text-cyan-neon" />
                    {timeline.length}+ milestones
                  </div>
                </div>

                <div className="relative pl-8 md:pl-10 space-y-7">
                  <div
                    aria-hidden
                    className="absolute left-3 md:left-4 top-1 bottom-1 w-px bg-gradient-to-b from-cyan/60 via-violet/50 to-magenta-glow/40"
                  />
                  {timeline.map((t, i) => (
                    <motion.div
                      key={t.title}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                    >
                      <div
                        className="absolute -left-[30px] md:-left-[38px] top-2 w-6 h-6 rounded-full hud-panel flex items-center justify-center border"
                        style={{
                          borderColor: `${t.color}55`,
                          color: t.color,
                          boxShadow: `0 0 0 3px rgba(7,17,31,0.9), 0 0 18px ${t.color}55`,
                        }}
                      >
                        {t.icon}
                      </div>
                      <div
                        className="absolute -left-[25px] md:-left-[33px] top-[30px] w-4 h-px"
                        style={{
                          background: `linear-gradient(90deg, ${t.color}99, transparent)`,
                        }}
                      />

                      <div className="rounded-2xl border border-white/5 p-5 md:p-6 bg-gradient-to-br from-white/[0.02] to-transparent transition-all duration-300 hover:border-cyan/25 hover:shadow-[0_8px_40px_-12px_rgba(6,182,212,0.25)]">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span
                            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider border"
                            style={{
                              color: t.color,
                              borderColor: `${t.color}44`,
                              background: `${t.color}0F`,
                            }}
                          >
                            {t.tag}
                          </span>
                          <span className="font-mono text-[10.5px] text-text-muted tracking-wider flex items-center gap-1.5">
                            <FiCalendar size={10} /> {t.year}
                          </span>
                        </div>
                        <h4 className="font-display font-semibold text-[16px] md:text-lg text-text-main mb-1">
                          {t.title}
                        </h4>
                        <div className="font-mono text-[11px] text-text-soft mb-3">
                          {t.org}
                        </div>
                        <p className="text-[13px] text-text-soft leading-relaxed">
                          {t.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}