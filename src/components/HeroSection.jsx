"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { FiMessageCircle, FiDownload, FiArrowRight, FiCpu } from "react-icons/fi";
import { HiCodeBracketSquare, HiSparkles } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import TypewriterText from "./TypewriterText";
import MagneticButton from "./ui/MagneticButton";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";

const codeLines = [
  { t: "const", c: "#C084FC" },
  { t: " developer ", c: "#E2E8F0" },
  { t: "=", c: "#94A3B8" },
  { t: "{", c: "#94A3B8" },
];
const code2 = [
  { t: "  stack:", c: "#22D3EE" },
  { t: " ['Next.js', 'React', 'MERN']", c: "#86EFAC" },
];
const code3 = [
  { t: "  passion:", c: "#22D3EE" },
  { t: ' "crafting experiences"', c: "#FCD34D" },
];
const code4 = [
  { t: "  available:", c: "#22D3EE" },
  { t: " true", c: "#F472B6" },
];
const code5 = [{ t: "};", c: "#94A3B8" }];

function CodeLine({ parts, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-0 text-[10.5px] leading-[1.55rem] font-mono"
    >
      <span className="text-text-muted/60 w-6 shrink-0 select-none">
        {String(i + 1).padStart(2, "0")}
      </span>
      <span className="text-text-muted/40 mr-3 select-none">│</span>
      {parts.map((p, j) => (
        <span key={j} style={{ color: p.c }} className={j === 0 ? "ml-1" : ""}>
          {p.t}
        </span>
      ))}
    </motion.div>
  );
}

const techBadges = [
  { label: "Next.js", color: "#FFFFFF", y: 68, x: 58, delay: 0.1, box: "rgba(255,255,255,0.35)" },
  { label: "React", color: "#22D3EE", y: 22, x: 6, delay: 0.2, box: "rgba(34,211,238,0.4)" },
  { label: "TypeScript", color: "#3B82F6", y: 50, x: 88, delay: 0.15, box: "rgba(59,130,246,0.4)" },
  { label: "Tailwind", color: "#22D3EE", y: 92, x: 18, delay: 0.28, box: "rgba(34,211,238,0.4)" },
  { label: "Node.js", color: "#4ADE80", y: 96, x: 78, delay: 0.34, box: "rgba(74,222,128,0.4)" },
  { label: "MongoDB", color: "#4ADE80", y: 12, x: 64, delay: 0.22, box: "rgba(74,222,128,0.4)" },
  { label: "AI / LLM", color: "#A78BFA", y: 42, x: 36, delay: 0.4, box: "rgba(167,139,250,0.4)" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 90, damping: 20 });
  const sy = useSpring(my, { stiffness: 90, damping: 20 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const frameRotateX = useTransform(sy, (v) => `${(v - 0.5) * -6}deg`);
  const frameRotateY = useTransform(sx, (v) => `${(v - 0.5) * 8}deg`);
  const depthTranslate = (depth) =>
    useTransform([sx, sy], ([x, y]) => {
      return `translate3d(${(x - 0.5) * depth}px, ${(y - 0.5) * depth}px, 0)`;
    });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] flex items-center pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden"
    >
      {/* Radial grid halo */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[22%] -translate-x-1/2 w-[1100px] h-[700px] max-w-[120vw] opacity-[0.25] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.12), transparent 60%), repeating-conic-gradient(from 0deg at 50% 50%, rgba(139,92,246,0.06) 0deg 2deg, transparent 2deg 20deg)",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT: Copy + code */}
          <div className="lg:col-span-7 space-y-7 relative z-10">
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2.5 rounded-full hud-panel border border-cyan/25 px-3.5 py-1.5 shadow-[0_0_24px_-6px_rgba(6,182,212,0.4)]">
                <motion.span
                  animate={{ rotate: [0, 18, -14, 0], scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  className="text-cyan-neon"
                >
                  <HiSparkles size={13} />
                </motion.span>
                <span className="text-[11.5px] font-semibold tracking-wide text-cyan-neon/95 font-mono uppercase">
                  Available for freelance · Q3 2026
                </span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
              </div>
            </Reveal>

            <div className="space-y-3">
              <Reveal delay={0.08} y={40} blur>
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-text-muted mb-2">
                  // Hello World, I am
                </p>
              </Reveal>

              <Reveal delay={0.14} y={48} blur>
                <h1 className="font-display font-bold leading-[0.98] tracking-tight">
                  <span className="block text-[44px] sm:text-6xl lg:text-[5.6rem] text-text-main">
                    Khayruzzaman
                  </span>
                  <span className="block text-[40px] sm:text-5xl lg:text-[4.5rem] gradient-text italic mt-1">
                    Himel
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.26} y={24}>
                <div className="flex items-center gap-3 mt-4">
                  <span className="h-px w-10 bg-gradient-to-r from-cyan to-transparent" />
                  <h2 className="text-lg md:text-xl lg:text-2xl text-text-soft font-medium">
                    <span className="font-mono text-cyan-neon/80 mr-1">&gt;</span>{" "}
                    <TypewriterText
                      words={[
                        "Junior MERN Developer",
                        "React & Next.js Specialist",
                        "Frontend-Focused Fullstack",
                        "AI-Powered UI Engineer",
                      ]}
                    />
                  </h2>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.32} y={20} blur>
              <p className="text-text-soft text-sm sm:text-[15px] leading-relaxed max-w-xl">
                I engineer responsive, animated, and scalable web experiences
                with <span className="text-cyan-neon font-medium">Next.js</span>,{" "}
                <span className="text-violet-neon font-medium">React</span> &
                modern tooling — crafting{" "}
                <span className="text-text-main">interfaces that feel alive</span>,
                performant, and deeply intentional.
              </p>
            </Reveal>

            <Reveal delay={0.38} y={16}>
              <div className="flex flex-wrap gap-3.5 items-center">
                <MagneticButton
                  as={Link}
                  href="/#contact"
                  strength={24}
                  className="btn-primary inline-flex items-center gap-2 px-5.5 py-3 rounded-xl text-[13px] shadow-glow-cyan"
                  whileHover={{ scale: 1.03 }}
                >
                  <FiMessageCircle size={15} />
                  <span className="font-semibold">Start a Project</span>
                  <FiArrowRight size={14} className="-mr-1 opacity-90" />
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="/Khayruzzaman_Himel_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={20}
                  className="btn-ghost inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] border"
                  whileHover={{ scale: 1.03 }}
                >
                  <FiDownload size={15} />
                  <span className="font-semibold">Download CV</span>
                </MagneticButton>
              </div>
            </Reveal>

            {/* STATS row */}
            <Reveal delay={0.46} y={16}>
              <div className="grid grid-cols-3 gap-3 max-w-lg pt-3">
                {[
                  { v: 30, s: "+", l: "Projects" },
                  { v: 1.5, s: "+", l: "Years Exp.", dec: 1 },
                  { v: 12, s: "+", l: "Clients" },
                ].map((it, i) => (
                  <motion.div
                    key={it.l}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.06, duration: 0.5 }}
                    whileHover={{ y: -3 }}
                    className="hud-panel rounded-2xl border border-cyan/15 px-3.5 py-3.5 text-center"
                  >
                    <div className="font-display font-bold text-[22px] md:text-[26px] leading-none gradient-text">
                      <Counter to={it.v} decimals={it.dec || 0} suffix={it.s} />
                    </div>
                    <div className="text-[10.5px] text-text-muted mt-1.5 tracking-wide uppercase font-medium">
                      {it.l}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            {/* Code snippet panel */}
            <Reveal delay={0.52} y={18} blur>
              <motion.div
                style={{ transform: depthTranslate(-14) }}
                className="relative mt-6 max-w-md"
              >
                <div className="hud-panel rounded-2xl border border-cyan/20 p-4 shadow-[0_20px_60px_-20px_rgba(139,92,246,0.35)]">
                  {/* window chrome */}
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-magenta-glow/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    </div>
                    <div className="font-mono text-[9.5px] text-text-muted tracking-wider uppercase">
                      himel.ts
                    </div>
                    <span className="text-[10px] text-cyan-neon/80 font-mono flex items-center gap-1">
                      <FiCpu size={10} /> ready
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <CodeLine i={0} parts={codeLines} />
                    <CodeLine i={1} parts={code2} />
                    <CodeLine i={2} parts={code3} />
                    <CodeLine i={3} parts={code4} />
                    <CodeLine i={4} parts={code5} />
                  </div>

                  {/* scan bar */}
                  <motion.div
                    aria-hidden
                    className="absolute left-0 right-0 h-6 pointer-events-none opacity-50 mix-blend-overlay"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent, rgba(34,211,238,0.18), transparent)",
                    }}
                    animate={{ top: ["0%", "100%"] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* corner accents */}
                <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-cyan-neon" />
                <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-violet-neon" />
              </motion.div>
            </Reveal>
          </div>

          {/* RIGHT: Holographic portrait + tech constellation */}
          <motion.div
            style={{ transform: depthTranslate(12) }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[460px] aspect-square">
              {/* HUD rotating rings */}
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-full border border-cyan/20"
                style={{
                  rotateX: frameRotateX,
                  rotateY: frameRotateY,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute inset-0 rounded-full border border-dashed border-cyan/25 animate-spin-slow"
                  style={{ transform: "scale(1)" }}
                />
                <div
                  className="absolute inset-[10%] rounded-full border border-violet/25 animate-spin-reverse"
                  style={{ transform: "scale(1)" }}
                />
                <div
                  className="absolute inset-[20%] rounded-full border border-magenta-glow/15"
                  style={{
                    boxShadow:
                      "inset 0 0 40px rgba(6,182,212,0.08), inset 0 0 60px rgba(139,92,246,0.06)",
                  }}
                />

                {/* tick marks */}
                {Array.from({ length: 40 }).map((_, i) => {
                  const deg = i * 9;
                  const isMajor = i % 5 === 0;
                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-0 -translate-x-1/2 origin-bottom"
                      style={{
                        height: "50%",
                        transform: `translateX(-50%) rotate(${deg}deg)`,
                      }}
                    >
                      <div
                        className={`bg-cyan/40 ${isMajor ? "w-px h-3.5" : "w-px h-1.5"}`}
                      />
                    </div>
                  );
                })}
              </motion.div>

              {/* Glow backplate */}
              <motion.div
                aria-hidden
                className="absolute inset-[6%] rounded-full blur-[80px] opacity-75 animate-breath"
                style={{
                  background:
                    "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(139,92,246,0.35) 45%, rgba(236,72,153,0.22) 75%, transparent 100%)",
                }}
              />

              {/* Holographic portrait frame */}
              <motion.div
                style={{
                  rotateX: frameRotateX,
                  rotateY: frameRotateY,
                  transformStyle: "preserve-3d",
                }}
                className="absolute inset-[22%] z-10"
              >
                <div className="relative w-full h-full rounded-full hud-panel border-0 shadow-[0_0_80px_-10px_rgba(6,182,212,0.45)] animate-float-gentle">
                  {/* Animated gradient border */}
                  <div
                    aria-hidden
                    className="absolute -inset-[2px] rounded-full"
                    style={{
                      background:
                        "conic-gradient(from 0deg, rgba(34,211,238,0), rgba(34,211,238,0.7), rgba(139,92,246,0.7), rgba(236,72,153,0.5), rgba(34,211,238,0))",
                      filter: "blur(2px)",
                      animation: "spin 8s linear infinite",
                      WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      padding: "2px",
                      maskComposite: "exclude",
                    }}
                  />

                  {/* Inner frame */}
                  <div className="absolute inset-[3px] rounded-full overflow-hidden border border-cyan-neon/30 bg-gradient-to-br from-cyan/5 via-bg to-violet/10">
                    <Image
                      src="/profile.png"
                      alt="Kz Himel"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 60vw, 300px"
                    />
                    {/* Holo scan overlay */}
                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40"
                      style={{
                        background:
                          "repeating-linear-gradient(0deg, rgba(34,211,238,0.12) 0px, transparent 2px, transparent 4px)",
                      }}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(5,8,22,0) 40%, rgba(5,8,22,0.65) 100%)",
                      }}
                    />
                    {/* scan bar */}
                    <motion.div
                      aria-hidden
                      className="absolute left-0 right-0 h-10 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent, rgba(34,211,238,0.35), transparent)",
                        filter: "blur(2px)",
                      }}
                      animate={{ top: ["-12%", "112%"] }}
                      transition={{
                        duration: 3.6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Nameplate */}
                    <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 whitespace-nowrap hud-panel rounded-xl px-3.5 py-1.5 border border-cyan/30 shadow-glow-cyan">
                      <div className="font-mono text-[10.5px] tracking-wider uppercase text-cyan-neon flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon animate-pulse" />
                        KZ · HIMEL
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tech badges constellation */}
              {techBadges.map((b) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, scale: 0.4, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{
                    delay: 0.5 + b.delay,
                    duration: 0.5,
                    y: {
                      duration: 4 + b.delay * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute z-20"
                  style={{
                    left: `${b.x}%`,
                    top: `${b.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="hud-panel rounded-full px-3 py-1.5 text-[10.5px] font-semibold border whitespace-nowrap"
                    style={{
                      color: b.color,
                      borderColor: `${b.color}40`,
                      boxShadow: `0 0 18px ${b.box}`,
                    }}
                  >
                    {b.label}
                  </div>
                </motion.div>
              ))}

              {/* Status chip top-right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute top-4 right-0 z-30"
              >
                <div className="hud-panel rounded-2xl px-3 py-2 border border-violet/25 shadow-glow-violet">
                  <div className="font-mono text-[9.5px] uppercase tracking-widest text-violet-neon/90 mb-1">
                    System
                  </div>
                  <div className="font-mono text-[10.5px] text-text-main flex items-center gap-1.5">
                    <HiCodeBracketSquare size={12} className="text-cyan-neon" />
                    Online · Nominal
                  </div>
                </div>
              </motion.div>

              {/* Availability chip bottom-left */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute bottom-10 -left-2 z-30"
              >
                <div className="hud-panel rounded-2xl px-3.5 py-2.5 border border-green-400/25">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                    </span>
                    <div>
                      <div className="text-[9.5px] uppercase tracking-widest text-green-400/90 font-mono">
                        Status
                      </div>
                      <div className="text-[11px] font-semibold text-text-main">
                        Accepting work
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-6 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[9.5px] uppercase tracking-[0.3em] text-text-muted">
            scroll
          </span>
          <motion.div
            className="w-5 h-9 rounded-full border border-cyan/30 relative overflow-hidden"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-2 w-1 h-2 rounded-full bg-cyan-neon"
              animate={{ y: [0, 16, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
