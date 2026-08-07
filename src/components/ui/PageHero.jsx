"use client";

import { motion, useScroll } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  stats,
}) {
  const { scrollYProgress } = useScroll();

  return (
    <section
      id="hero"
      className="relative pt-36 md:pt-44 pb-14 md:pb-24 overflow-hidden"
    >
      {/* parallax glow */}
      <motion.div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.18), rgba(34,211,238,0.12) 40%, transparent 70%)",
          filter: "blur(40px)",
          y: use(scrollYProgress, [0, 1], [0, 80]),
          opacity: 1 - use(scrollYProgress, [0, 1], [0, 0.7]),
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center top, black 20%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full hud-panel border border-cyan/20 mb-6"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-neon opacity-70 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-neon" />
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-cyan-neon">
            {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold leading-[1.02] tracking-tight text-text-main text-[40px] md:text-[64px] lg:text-[82px] max-w-5xl mx-auto mb-5"
        >
          {title}{" "}
          <span className="gradient-text">{highlight}</span>
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-text-soft text-[14.5px] md:text-[16.5px] max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {subtitle}
          </motion.p>
        )}

        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {stats.map((s, i) => (
              <div
                key={s.label + i}
                className="hud-panel rounded-2xl px-4 md:px-6 py-3 md:py-4 border border-white/6"
              >
                <div
                  className="font-display font-bold text-[22px] md:text-[28px] leading-none mb-1.5"
                  style={{ color: s.color }}
                >
                  {s.value}
                </div>
                <div className="font-mono text-[9.5px] md:text-[10.5px] uppercase tracking-[0.2em] text-text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
