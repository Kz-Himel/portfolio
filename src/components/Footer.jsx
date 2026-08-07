"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUp, FiGithub, FiMail, FiHeart } from "react-icons/fi";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import Logo from "./Logo";

const navCols = [
  {
    title: "Navigate",
    links: [
      { href: "/#hero", label: "Home" },
      { href: "/#about", label: "About" },
      { href: "/#skills", label: "Skills" },
      { href: "/#projects", label: "Projects" },
      { href: "/#experience", label: "Experience" },
      { href: "/#achievements", label: "Achievements" },
      { href: "/#contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/#services", label: "MERN Development" },
      { href: "/#services", label: "Frontend · UI/UX" },
      { href: "/#services", label: "AI & LLM Integrations" },
      { href: "/#services", label: "Performance · SEO" },
      { href: "/#services", label: "DevOps · Deploy" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "mailto:kzhimel129@gmail.com", label: "kzhimel129@gmail.com" },
      { href: "https://github.com/Kz-Himel", label: "GitHub · @Kz-Himel" },
      { href: "https://www.linkedin.com/in/khayruzzaman-himel/", label: "LinkedIn" },
      { href: "/Khayruzzaman_Himel_CV.pdf", label: "Download Resume" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 md:mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-10">
        <div
          aria-hidden
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-neon animate-pulse shadow-[0_0_8px_var(--cyan-glow)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
              End of transmission
            </span>
          </div>
          <div className="hud-divider flex-1 mx-5" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
            End · v2.0
          </span>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.04) 50%, rgba(139,92,246,0.06) 100%)",
        }} />
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[70%] max-w-[900px] hud-divider"
        />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative pt-10 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 mb-10">
            <div className="md:col-span-4 space-y-4">
              <Logo />
              <p className="text-[13px] text-text-soft leading-relaxed max-w-sm">
                Crafting premium, modern, and motion-rich web products —
                engineered for performance, built to inspire.
              </p>
              <div className="flex items-center gap-2">
                {[
                  { icon: <FiGithub size={14} />, href: "https://github.com/Kz-Himel", c: "#E2E8F0" },
                  { icon: <FaLinkedin size={14} />, href: "https://www.linkedin.com/in/khayruzzaman-himel/", c: "#0A66C2" },
                  { icon: <FaDiscord size={14} />, href: "#", c: "#5865F2" },
                  { icon: <FiMail size={14} />, href: "mailto:kzhimel129@gmail.com", c: "#22D3EE" },
                ].map((s) => (
                  <a
                    key={s.c}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="social"
                    className="group relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${s.c}12, transparent)`,
                      border: `1px solid ${s.c}22`,
                      color: s.c,
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {navCols.map((col) => (
              <div key={col.title} className="md:col-span-4 lg:col-span-2 md:col-span-4 grid-cols-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-neon mb-3.5">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        target={l.href.startsWith("http") || l.href.startsWith("mailto:") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[12.5px] text-text-soft hover:text-cyan-neon transition-colors inline-flex items-center gap-1.5 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-neon/0 group-hover:bg-cyan-neon group-hover:shadow-[0_0_5px_var(--cyan-glow)] transition-all" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="hud-divider mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-mono text-[11px] tracking-wider text-text-muted">
              © {new Date().getFullYear()} · Khayruzzaman Himel · All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-[11.5px] text-text-soft font-medium">
              Designed & built with <FiHeart size={12} className="text-magenta-glow animate-pulse" />{" "}
              <span className="gradient-text font-semibold">Himel</span> · Next.js + Framer Motion
            </p>
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="group relative inline-flex items-center gap-2 rounded-full hud-panel px-3.5 py-2 border border-cyan/25 text-cyan-neon"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-neon opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-neon" />
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em]">Back to top</span>
              <span className="w-7 h-7 rounded-full flex items-center justify-center bg-cyan/10 border border-cyan/30">
                <FiArrowUp size={12} />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
