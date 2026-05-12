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
  { name: "Firebase", icon: "🔥", category: "Database", level: 72 },
  { name: "Git", icon: "🌿", category: "Tools", level: 85 },
  { name: "GitHub", icon: "🐙", category: "Tools", level: 88 },
  { name: "VS Code", icon: "💻", category: "Tools", level: 95 },
  { name: "Figma", icon: "🎯", category: "Tools", level: 65 },
  { name: "Vercel", icon: "▲", category: "Tools", level: 80 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: "easeOut" },
  }),
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/6 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mt-2">
            Tech I Work With
          </h2>
          <p className="text-muted mt-3 max-w-lg">
            A curated set of technologies I use to build fast, modern, and beautiful
            web applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent text-bg shadow-lg shadow-accent/20"
                  : "glass border border-white/8 text-muted hover:text-text-main hover:border-accent/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
                y: -6,
                borderColor: "rgba(56,189,248,0.35)",
                boxShadow: "0 8px 30px rgba(56,189,248,0.12)",
              }}
              className="glass border border-white/8 rounded-2xl p-4 flex flex-col items-center gap-3 cursor-default transition-all duration-300 group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
              <span className="text-text-main text-sm font-medium text-center">
                {skill.name}
              </span>

              {/* Progress bar */}
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.04, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-soft-accent"
                />
              </div>
              <span className="text-xs text-muted">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}