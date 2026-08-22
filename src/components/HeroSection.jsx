"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload, FiCpu } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";

const stats = [
  { v: 30, s: "+", l: "Projects" },
  { v: 1.5, s: "+", l: "Years Exp.", dec: 1 },
  { v: 12, s: "+", l: "Clients" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* LEFT: copy */}
          <div className="lg:col-span-7 space-y-5">
            {/* 1. AI-Powered Quote / Badge */}
            <Reveal delay={0} blur={false}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-mono text-xs md:text-sm">
                <FiCpu size={14} className="animate-pulse" />
                <span>AI-Powered Developer &amp; Full-Stack Crafter</span>
              </div>
            </Reveal>

            {/* 2. Big Name Heading */}
            <Reveal delay={0.05} blur={false}>
              <h1 className="font-mono font-bold leading-[1.1] text-3xl sm:text-5xl lg:text-6xl text-text-main tracking-tight">
                Khayruzzaman Himel
              </h1>
            </Reveal>

            {/* 3. Sub-heading / Role */}
            <Reveal delay={0.1} blur={false}>
              <h2 className="font-mono font-semibold text-lg sm:text-2xl text-accent">
                Fullstack Developer <span className="text-text-muted text-base font-normal">(MERN Stack)</span>
              </h2>
            </Reveal>

            {/* 4. Description */}
            <Reveal delay={0.15} blur={false}>
              <p className="text-text-soft text-sm sm:text-[15px] leading-relaxed max-w-lg">
                Building responsive, animated, and scalable web apps with
                Next.js, React, Node.js, and AI integrations — turning ideas into production-grade interfaces that feel fast, intentional, and alive.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.2} blur={false}>
              <div className="flex flex-wrap gap-3 items-center pt-1">
                <Link
                  href="/#contact"
                  className="btn-outline"
                >
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

            {/* Stats Cards */}
            <Reveal delay={0.25} blur={false}>
              <div className="grid grid-cols-3 gap-3 max-w-md pt-2">
                {stats.map((it) => (
                  <div key={it.l} className="box px-3 py-3 text-center">
                    <div className="font-mono font-bold text-lg text-text-main">
                      <Counter to={it.v} decimals={it.dec || 0} suffix={it.s} />
                    </div>
                    <div className="text-[10px] text-text-muted mt-1 tracking-wide uppercase">
                      {it.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT: photo + decorative frames */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-[340px] mx-auto">
              {/* decorative empty wireframe rectangles */}
              <span
                aria-hidden
                className="hidden sm:block box-accent absolute -top-8 left-6 w-24 h-20 -z-10"
              />
              <span
                aria-hidden
                className="hidden sm:block box-accent absolute -top-2 left-16 w-16 h-14 -z-10"
              />

              {/* decorative dot grid */}
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
                <div className="box relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Kz Himel"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 60vw, 340px"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.3} blur={false}>
                <div className="box mt-3 flex items-center gap-2.5 px-4 py-3">
                  <span className="w-3 h-3 shrink-0" style={{ background: "var(--accent)" }} />
                  <span className="font-mono text-[13px] text-text-soft">
                    Currently working on <span className="text-text-main font-semibold">CareerPilot AI</span>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Quote block */}
        <Reveal delay={0.1} blur={false} className="mt-16 md:mt-24">
          <div className="box-accent relative px-6 py-6 md:px-8 md:py-7 max-w-3xl">
            <span className="absolute -top-4 left-6 text-4xl text-accent font-mono select-none">
              &ldquo;
            </span>
            <p className="font-mono text-base md:text-lg text-text-main">
              It works on my machine.
            </p>
            <p className="font-mono text-sm text-text-soft mt-4 text-right">
              — every developer, probably
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}