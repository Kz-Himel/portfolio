"use client";

import { motion } from "framer-motion";
import { FiZap, FiHeart, FiTarget } from "react-icons/fi";
import { PiGraduationCap } from "react-icons/pi";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "1+", label: "Years Experience" },
  { value: "10+", label: "Happy Clients" },
  { value: "5+", label: "Tech Stack" },
];

const highlights = [
  {
    icon: <PiGraduationCap size={18} />,
    title: "Self-Taught Dev",
    desc: "Passionate about learning & building modern web apps.",
  },
  {
    icon: <FiTarget size={18} />,
    title: "Goal-Oriented",
    desc: "Delivering pixel-perfect, performant interfaces.",
  },
  {
    icon: <FiZap size={18} />,
    title: "Modern Stack",
    desc: "Specialized in Next.js, React, Tailwind & Framer Motion.",
  },
  {
    icon: <FiHeart size={18} />,
    title: "Design-Driven",
    desc: "Bridging clean UI design with scalable functional code.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Container aligned with Navbar standard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-1.5 tracking-tight">
            The Dev Behind the Code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column — Image & Quick Stats (5 Cols) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="lg:col-span-5 space-y-6"
          >
            {/* Image Box */}
            <div className="relative w-full aspect-square max-w-xs sm:max-w-sm mx-auto lg:mx-0 rounded-2xl glass border border-white/10 overflow-hidden group">
              <Image
                src="/profile.png"
                alt="Khayruzzaman Himel"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass border border-white/10 backdrop-blur-md">
                <div className="text-text-main font-medium text-sm">
                  Khayruzzaman Himel
                </div>
                <div className="text-accent text-xs">Frontend Developer</div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.05 + 2}
                  className="glass border border-white/8 rounded-xl p-3 text-center hover:border-accent/30 transition-all duration-300"
                >
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-[11px] text-muted mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Details & Highlights (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="space-y-3.5 text-muted text-sm leading-relaxed"
            >
              <p>
                Hey! I&apos;m{" "}
                <span className="text-text-main font-medium">
                  Khayruzzaman Himel
                </span>
                , a frontend developer based in Bangladesh. I create modern, high-performance web applications with a strong focus on animation and clean UI architecture.
              </p>
              <p>
                I specialize in <span className="text-accent font-medium">Next.js</span>,{" "}
                <span className="text-accent font-medium">React</span>, and{" "}
                <span className="text-accent font-medium">Tailwind CSS</span>. My goal is to craft digital experiences that are not only visually appealing but also fast and intuitive to use.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.05 + 2}
                  whileHover={{ y: -3, borderColor: "rgba(56,189,248,0.25)" }}
                  className="glass border border-white/8 rounded-xl p-3.5 transition-all duration-300"
                >
                  <div className="text-accent mb-1.5">{item.icon}</div>
                  <div className="text-text-main font-medium text-xs mb-0.5">
                    {item.title}
                  </div>
                  <div className="text-muted text-[11px] leading-normal">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education Box */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="glass border border-white/8 rounded-xl p-4 flex items-center gap-3.5 mt-2"
            >
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                <PiGraduationCap size={20} />
              </div>
              <div className="text-xs">
                <div className="text-text-main font-medium text-sm">
                  Diploma in Computer Technology
                </div>
                <div className="text-muted mt-0.5">
                  Rangpur Polytechnic Institute · 2022 – Present
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}