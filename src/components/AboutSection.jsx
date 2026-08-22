"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiZap,
  FiTarget,
  FiThumbsUp,
  FiAward,
  FiCalendar,
  FiBookOpen,
  FiGlobe,
} from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";

const highlights = [
  {
    icon: <FiZap size={18} />,
    title: "Fast & Optimized",
    desc: "60fps interactions, lazy loads, Core Web Vitals obsessed.",
  },
  {
    icon: <FiTarget size={18} />,
    title: "Pixel Perfect",
    desc: "Design-system-grade precision across desktop, tablet & mobile.",
  },
  {
    icon: <FiThumbsUp size={18} />,
    title: "User-Focused",
    desc: "Accessible, intuitive flows with reduced-motion support.",
  },
  {
    icon: <FiAward size={18} />,
    title: "Premium Quality",
    desc: "Elegant motion and delightful micro-details, shipped clean.",
  },
];

const timeline = [
  {
    year: "2022 — Present",
    title: "Diploma in Computer Technology",
    org: "Rangpur Polytechnic Institute",
    tag: "Education",
    desc: "Structured engineering foundation in algorithms, data structures, networking, and modern software architecture.",
    icon: <FiBookOpen size={14} />,
  },
  {
    year: "2024 — 2025",
    title: "Frontend Developer · Freelance",
    org: "Remote · Bangladesh",
    tag: "Career",
    desc: "Shipped responsive React & Next.js projects for startups and local businesses — from landing pages to dashboards.",
    icon: <FiZap size={14} />,
  },
  {
    year: "2025 — 2026",
    title: "Junior MERN Developer",
    org: "Collaborative & client projects",
    tag: "Growth",
    desc: "Built fullstack apps with auth, payments, AI integrations, and realtime features — focused on Next.js + Express + MongoDB.",
    icon: <FiGlobe size={14} />,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="about"
          subtitle="I'm Khayruzzaman Himel — a developer who treats interfaces as products. I blend engineering rigor with visual taste to ship websites that feel alive, responsive, and confidently premium."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT: portrait + highlights */}
          <div className="md:col-span-5 space-y-5">
            <Reveal delay={0.05} blur={false}>
              <div className="box relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Himel portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 420px"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} blur={false}>
              <div className="box grid grid-cols-3 divide-x divide-border px-4 py-3.5">
                <div className="text-center">
                  <div className="font-mono text-lg font-bold text-text-main leading-none">
                    <Counter to={2023} />
                  </div>
                  <div className="text-[9px] text-text-muted mt-1 uppercase tracking-wide">
                    Since
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-lg font-bold text-accent leading-none">
                    <Counter to={30} suffix="+" />
                  </div>
                  <div className="text-[9px] text-text-muted mt-1 uppercase tracking-wide">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-lg font-bold text-text-main leading-none">
                    <Counter to={4.9} decimals={1} suffix="★" />
                  </div>
                  <div className="text-[9px] text-text-muted mt-1 uppercase tracking-wide">
                    Rating
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={0.14 + i * 0.04} blur={false}>
                  <div className="box p-4 h-full">
                    <div className="text-accent mb-2.5">{h.icon}</div>
                    <h3 className="font-mono font-semibold text-[13px] text-text-main mb-1">
                      {h.title}
                    </h3>
                    <p className="text-[11.5px] text-text-soft leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT: narrative + timeline */}
          <div className="md:col-span-7 space-y-6">
            <Reveal delay={0.15} blur={false}>
              <div className="box p-6 md:p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2" style={{ background: "var(--accent)" }} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
                    Narrative
                  </span>
                </div>
                <div className="space-y-4 text-text-soft text-sm md:text-[15px] leading-[1.8]">
                  <p>
                    Hi, I&apos;m{" "}
                    <span className="text-text-main font-semibold">
                      Khayruzzaman Himel
                    </span>{" "}
                    — a <span className="text-accent">Junior MERN & Frontend Developer</span>{" "}
                    from Rangpur, Bangladesh. I&apos;m currently completing my Diploma in
                    Computer Technology at Rangpur Polytechnic Institute, and I&apos;ve
                    been coding and building production-grade web projects for over a
                    year.
                  </p>
                  <p>
                    I care deeply about <span className="text-text-main">craft</span>{" "}
                    {"— "}the kind of subtle details that separate a good site from a
                    memorable one. I combine a frontend-first approach with fullstack
                    competence: building authentication flows, REST APIs, database
                    schemas, and now, integrating AI &amp; LLMs into product experiences.
                  </p>
                  <p>
                    When I&apos;m not coding, I&apos;m studying design, dissecting
                    Awwwards-level interactions, and leveling up — to make every next
                    project better than the last.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} blur={false}>
              <div className="box p-6 md:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
                    Journey
                  </span>
                  <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-text-muted">
                    <FiCalendar size={11} />
                    {timeline.length} milestones
                  </div>
                </div>

                <div className="relative pl-6 space-y-6">
                  <div
                    aria-hidden
                    className="absolute left-[7px] top-1 bottom-1 w-px bg-border"
                  />
                  {timeline.map((t, i) => (
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
                        className="absolute -left-6 top-1.5 w-3.5 h-3.5 flex items-center justify-center text-accent"
                        style={{ background: "var(--bg)" }}
                      >
                        {t.icon}
                      </span>

                      <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                          {t.tag}
                        </span>
                        <span className="font-mono text-[10.5px] text-text-muted">
                          {t.year}
                        </span>
                      </div>
                      <h4 className="font-mono font-semibold text-[15px] text-text-main mb-1">
                        {t.title}
                      </h4>
                      <div className="font-mono text-[11px] text-text-soft mb-2">
                        {t.org}
                      </div>
                      <p className="text-[13px] text-text-soft leading-relaxed">
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