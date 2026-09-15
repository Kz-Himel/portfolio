"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiZap,
  FiTarget,
  FiAward,
  FiCalendar,
  FiBookOpen,
  FiTerminal,
  FiCode,
  FiCpu,
} from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

const highlights = [
  {
    icon: <FiZap size={18} />,
    title: "Performance First",
    desc: "Optimized bundle sizes, 60fps animations, and perfect Core Web Vitals.",
    badge: "Fast",
  },
  {
    icon: <FiTarget size={18} />,
    title: "Pixel-Precision UI",
    desc: "Design-system grade layouts built with Framer Motion & Tailwind CSS.",
    badge: "Design",
  },
  {
    icon: <FiCpu size={18} />,
    title: "AI & Fullstack",
    desc: "Integrating LLM APIs into robust Next.js and Node.js architectures.",
    badge: "Architecture",
  },
  {
    icon: <FiAward size={18} />,
    title: "Clean Code",
    desc: "Modular structure, strict typing principles, and component reusability.",
    badge: "Quality",
  },
];

const educationAndJourney = [
  {
    year: "2022 — Present",
    title: "Diploma in Computer Technology",
    org: "Rangpur Polytechnic Institute",
    tag: "Education",
    desc: "Building engineering fundamentals in algorithms, data structures, and architecture.",
    icon: <FiBookOpen size={14} />,
  },
  {
    year: "2025 — Present",
    title: "1+ Year Independent Development",
    org: "Self-Driven & Project-Based",
    tag: "Hands-on",
    desc: "1+ year of intense hands-on building — crafting full-stack apps, auth flows, and AI tools.",
    icon: <FiCode size={14} />,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="about"
          subtitle="Engineered with precision, designed with taste — building production-ready web applications that balance technical complexity with sleek user experiences."
        />

        {/* EQUAL HEIGHT BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Portrait Card */}
            <Reveal delay={0.05} blur={false} className="flex-1">
              <div className="box relative w-full h-full min-h-[380px] overflow-hidden rounded-2xl border border-accent/20 group flex flex-col justify-end p-4">
                <Image
                  src="/profile.png"
                  alt="Khayruzzaman Himel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-80" />
                
                {/* Float Badge */}
                <div className="relative z-10 p-3 rounded-xl bg-bg/80 backdrop-blur-md border border-accent/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-xs font-semibold text-text-main">
                      Fullstack & AI Crafter
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 rounded bg-accent/10 text-accent">
                    Rangpur, BD
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Developer Spec Card */}
            <Reveal delay={0.1} blur={false}>
              <div className="box p-5 rounded-2xl border border-accent/15 bg-accent/5 h-full flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <FiTerminal size={16} className="text-accent" />
                  <span className="font-mono text-xs uppercase tracking-wider text-text-main font-bold">
                    Developer Spec
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono text-text-soft">
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-text-muted">Focus:</span>
                    <span className="text-text-main font-semibold">MERN & Next.js</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-text-muted">Core Strength:</span>
                    <span className="text-text-main font-semibold">Interactive UI + APIs</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-text-muted">Experience:</span>
                    <span className="text-accent font-semibold">1+ Year Hands-On</span>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Background & Narrative */}
            <Reveal delay={0.15} blur={false}>
              <div className="box p-6 rounded-2xl border border-accent/20 h-full flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted font-bold">
                    Background & Philosophy
                  </span>
                </div>

                <div className="space-y-3 text-text-soft text-xs md:text-sm leading-relaxed">
                  <p>
                    I&apos;m <span className="text-text-main font-semibold">Khayruzzaman Himel</span>, a Full-Stack Developer specializing in <span className="text-accent font-semibold">MERN Stack, Next.js, and AI integrations</span>. I build web applications that feel fast, intuitive, and visually intentional.
                  </p>
                  <p>
                    With <span className="text-text-main font-medium">1+ year of intensive hands-on development</span>, I have built full-featured web apps — engineering dynamic interfaces, secure auth systems, and AI workflows.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Highlights 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={0.18 + i * 0.04} blur={false} className="h-full">
                  <div className="box p-4 rounded-xl border border-accent/10 hover:border-accent/40 transition-all duration-300 group h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-1.5 rounded-lg bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                        {h.icon}
                      </div>
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-accent/10 text-accent">
                        {h.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-xs text-text-main mb-1">
                        {h.title}
                      </h3>
                      <p className="text-[11px] text-text-soft leading-snug">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Education & Journey Card */}
            <Reveal delay={0.25} blur={false}>
              <div className="box p-5 rounded-2xl border border-accent/20 h-full flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted font-bold">
                      Education & Timeline
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-text-muted">
                    <FiCalendar size={11} className="text-accent" />
                    Academic & Self-Growth
                  </div>
                </div>

                <div className="relative pl-5 space-y-4">
                  <div
                    aria-hidden
                    className="absolute left-[6px] top-1 bottom-1 w-px bg-border"
                  />

                  {educationAndJourney.map((t, i) => (
                    <motion.div
                      key={t.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      className="relative"
                    >
                      <span
                        aria-hidden
                        className="absolute -left-5 top-1 w-3 h-3 flex items-center justify-center text-accent"
                        style={{ background: "var(--bg)" }}
                      >
                        {t.icon}
                      </span>

                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-semibold px-1.5 py-0.5 rounded bg-accent/10">
                          {t.tag}
                        </span>
                        <span className="font-mono text-[10px] text-text-muted">
                          {t.year}
                        </span>
                      </div>

                      <h4 className="font-mono font-bold text-xs text-text-main">
                        {t.title}
                      </h4>
                      <p className="text-[11px] text-text-soft leading-tight mt-0.5">
                        {t.desc}
                      </p>
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