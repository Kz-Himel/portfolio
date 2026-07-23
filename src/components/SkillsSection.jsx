"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

const skills = [
  { name: "HTML5", icon: "🌐", category: "Frontend", level: 95 },
  { name: "CSS3", icon: "🎨", category: "Frontend", level: 90 },
  { name: "JavaScript", icon: "⚡", category: "Frontend", level: 85 },
  { name: "React", icon: "⚛️", category: "Frontend", level: 88 },
  { name: "Next.js", icon: "▲", category: "Frontend", level: 82 },
  { name: "Tailwind CSS", icon: "💨", category: "Frontend", level: 92 },
  { name: "Framer Motion", icon: "🎭", category: "Frontend", level: 75 },
  { name: "TypeScript", icon: "🔷", category: "Frontend", level: 70 },
  { name: "Node.js", icon: "🟢", category: "Backend", level: 65 },
  { name: "Express.js", icon: "🚂", category: "Backend", level: 60 },
  { name: "REST API", icon: "🔌", category: "Backend", level: 72 },
  { name: "MongoDB", icon: "🍃", category: "Database", level: 68 },
  { name: "Better Auth", icon: "🔐", category: "Database", level: 72 },
  { name: "Git", icon: "🌿", category: "Tools", level: 85 },
  { name: "GitHub", icon: "🐙", category: "Tools", level: 88 },
  { name: "VS Code", icon: "💻", category: "Tools", level: 95 },
  { name: "Figma", icon: "🎯", category: "Tools", level: 65 },
  { name: "Vercel", icon: "▲", category: "Tools", level: 80 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.03, ease: "easeOut" },
  }),
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Container aligned with Navbar and About standard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-1.5 tracking-tight">
            Tech I Work With
          </h2>
          <p className="text-muted text-xs md:text-sm mt-2 max-w-md leading-relaxed">
            A curated set of technologies I use to build fast, responsive, and modern web applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 md:gap-2.5 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent text-bg shadow-md shadow-accent/20"
                  : "glass border border-white/8 text-muted hover:text-text-main hover:border-accent/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{
                y: -4,
                borderColor: "rgba(56,189,248,0.3)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              }}
              className="glass border border-white/8 rounded-xl p-3.5 flex flex-col items-center gap-2.5 cursor-default transition-all duration-300 group"
            >
              {/* Icon */}
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>

              {/* Skill Name */}
              <span className="text-text-main text-xs font-medium text-center truncate w-full">
                {skill.name}
              </span>

              {/* Animated Progress Bar Container */}
              <div className="w-full space-y-1 mt-1">
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.1 + i * 0.03,
                      ease: [0.25, 1, 0.5, 1], // Custom smooth ease-out curve
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-sky-400"
                  />
                </div>
                
                {/* Percentage Text */}
                <div className="text-right">
                  <span className="text-[10px] text-muted font-mono">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}