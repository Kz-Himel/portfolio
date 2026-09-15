"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { 
  FiArrowRight, 
  FiDownload, 
  FiCpu, 
  FiGithub, 
  FiZap, 
  FiLayers, 
  FiTerminal, 
  FiCheckCircle 
} from "react-icons/fi";
import Reveal from "./ui/Reveal";

// Dynamic Import to avoid Next.js SSR Hydration Issues
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

const GITHUB_USERNAME = "Kz-Himel";

const coreCapabilities = [
  {
    title: "AI-Driven Applications",
    desc: "LLM integration, Prompt Engineering & Smart Automation",
    tag: "AI / ML",
    icon: FiCpu,
  },
  {
    title: "Full-Stack Web Systems",
    desc: "Production-ready apps with Next.js, Node.js & MongoDB",
    tag: "MERN / Next",
    icon: FiLayers,
  },
  {
    title: "High Performance UI/UX",
    desc: "Interactive, fluid animations & mobile-first architecture",
    tag: "Frontend",
    icon: FiZap,
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-10 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          
          {/* LEFT: Copy & Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. AI Badge */}
            <Reveal delay={0} blur={false}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-mono text-xs md:text-sm">
                <FiCpu size={14} className="animate-pulse" />
                <span>AI-Powered Developer &amp; Full-Stack Crafter</span>
              </div>
            </Reveal>

            {/* 2. Heading */}
            <Reveal delay={0.05} blur={false}>
              <h1 className="font-mono font-bold leading-[1.1] text-3xl sm:text-5xl lg:text-6xl text-text-main tracking-tight">
                Khayruzzaman Himel
              </h1>
            </Reveal>

            {/* 3. Role */}
            <Reveal delay={0.1} blur={false}>
              <h2 className="font-mono font-semibold text-lg sm:text-2xl text-accent">
                Fullstack Developer <span className="text-text-muted text-base font-normal">(MERN Stack)</span>
              </h2>
            </Reveal>

            {/* 4. Description */}
            <Reveal delay={0.15} blur={false}>
              <p className="text-text-soft text-sm sm:text-[15px] leading-relaxed max-w-lg">
                Building responsive, animated, and scalable web apps with Next.js, React, Node.js, and AI integrations — turning ideas into production-grade interfaces that feel fast, intentional, and alive.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.2} blur={false}>
              <div className="flex flex-wrap gap-3 items-center pt-1">
                <Link href="/#contact" className="btn-outline">
                  Contact me
                  <FiArrowRight size={14} />
                </Link>
                <a
                  href="/Khayruzzaman_Himel_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-muted"
                >
                  <FiDownload size={14} />
                  Resume
                </a>
              </div>
            </Reveal>

            {/* UNIQUE FEATURE: Core Capabilities / Tech Focus instead of Stats */}
            <Reveal delay={0.25} blur={false}>
              <div className="pt-3">
                <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-3 uppercase tracking-wider">
                  <FiTerminal size={14} className="text-accent" />
                  <span>Core Expertise & Focus Areas</span>
                </div>

                <div className="space-y-2.5 max-w-lg">
                  {coreCapabilities.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="group flex items-start justify-between p-3 rounded-xl border border-accent/15 bg-accent/5 hover:bg-accent/10 hover:border-accent/40 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:scale-105 transition-transform">
                            <Icon size={16} />
                          </div>
                          <div>
                            <h4 className="font-mono text-xs sm:text-sm font-semibold text-text-main flex items-center gap-1.5">
                              {item.title}
                              <FiCheckCircle size={12} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h4>
                            <p className="text-[11px] sm:text-xs text-text-soft mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] px-2 py-1 rounded bg-accent/10 text-accent shrink-0">
                          {item.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

          </div>

          {/* RIGHT: Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-[340px] mx-auto">
              <span
                aria-hidden
                className="hidden sm:block box-accent absolute -top-8 left-6 w-24 h-20 -z-10"
              />
              <span
                aria-hidden
                className="hidden sm:block box-accent absolute -top-2 left-16 w-16 h-14 -z-10"
              />

              <div
                aria-hidden
                className="hidden sm:grid absolute -bottom-6 -right-8 grid-cols-5 gap-2"
              >
                {Array.from({ length: 20 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1 h-1 rounded-full"
                    style={{ background: "var(--dot-color)" }}
                  />
                ))}
              </div>

              <Reveal delay={0.2} blur={false}>
                <div className="box relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src="/profile.png"
                    alt="Khayruzzaman Himel"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 60vw, 340px"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.3} blur={false}>
                <div className="box mt-3 flex items-center gap-2.5 px-4 py-3 rounded-xl">
                  <span className="w-2.5 h-2.5 shrink-0 rounded-full animate-ping" style={{ background: "var(--accent)" }} />
                  <span className="font-mono text-[13px] text-text-soft">
                    Currently working on <span className="text-text-main font-semibold">CareerPilot AI</span>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* GITHUB CONTRIBUTIONS GRID */}
        <Reveal delay={0.1} blur={false} className="mt-16 md:mt-24">
          <div className="box p-6 md:p-8 rounded-2xl border border-accent/20 bg-accent/5 backdrop-blur-sm relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                  <FiGithub size={22} />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg text-text-main">
                    GitHub Contributions
                  </h3>
                  <p className="text-xs text-text-soft">
                    My coding activity &amp; open source commits
                  </p>
                </div>
              </div>

              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline w-fit"
              >
                <span>@{GITHUB_USERNAME}</span>
                <FiArrowRight size={12} />
              </a>
            </div>

            <div className="overflow-x-auto pb-2 flex justify-center">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                colorScheme="dark"
                style={{
                  color: "var(--text-soft)",
                }}
              />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}