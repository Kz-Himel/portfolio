"use client";

import { motion } from "framer-motion";
import { FiZap, FiHeart, FiTarget } from "react-icons/fi";
import { PiGraduationCap } from "react-icons/pi";
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "1+", label: "Years of Learning" },
  { value: "10+", label: "Happy Clients" },
  { value: "5+", label: "Technologies" },
];

const highlights = [
  {
    icon: <PiGraduationCap size={20} />,
    title: "Self-Taught Developer",
    desc: "Passionate about learning and building modern web applications.",
  },
  {
    icon: <FiTarget size={20} />,
    title: "Goal-Oriented",
    desc: "Focused on delivering pixel-perfect, performant digital experiences.",
  },
  {
    icon: <FiZap size={20} />,
    title: "Modern Stack",
    desc: "Specialized in Next.js, React, Tailwind, and animation libraries.",
  },
  {
    icon: <FiHeart size={20} />,
    title: "Design-Driven",
    desc: "Love bridging the gap between clean design and functional code.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mt-2">
            The Dev Behind the Code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Story */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="space-y-6"
          >
            {/* Image placeholder */}
            <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl glass border border-white/8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-bg to-purple-500/10 flex items-center justify-center">
                <Image src="/profile.jpg" alt="Himel" fill className="object-cover" />
              </div>
              Replace with: 
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-text-main font-semibold text-lg">Khayruzzaman Himel</div>
                <div className="text-accent text-sm">Frontend Developer</div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.1 + 2}
                  className="glass border border-white/8 rounded-xl p-4 text-center hover:border-accent/20 transition-all duration-300"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Details */}
          <div className="space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="space-y-4 text-muted leading-relaxed"
            >
              <p>
                Hey! I&apos;m <span className="text-text-main font-semibold">Kamrul Himel</span>, a
                passionate frontend developer from Bangladesh. I started my journey
                into web development driven by a love for beautiful, interactive
                interfaces.
              </p>
              <p>
                I specialize in building modern, responsive web applications using{" "}
                <span className="text-accent">Next.js</span> and{" "}
                <span className="text-accent">React</span>, with a strong eye for
                design and animation. I believe great software is both functional and
                visually delightful.
              </p>
              <p>
                Currently, I&apos;m focused on mastering the full modern web stack —
                from performant React architectures to smooth Framer Motion animations
                — while taking on freelance projects and contributing to the community.
              </p>
            </motion.div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.1 + 2}
                  whileHover={{ y: -4, borderColor: "rgba(56,189,248,0.3)" }}
                  className="glass border border-white/8 rounded-xl p-4 transition-all duration-300 cursor-default"
                >
                  <div className="text-accent mb-2">{item.icon}</div>
                  <div className="text-text-main font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-muted text-xs leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="glass border border-white/8 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <PiGraduationCap size={18} className="text-accent" />
                <span className="text-text-main font-semibold text-sm">Education</span>
              </div>
              <div className="text-muted text-sm">
                <div className="font-medium text-text-main">Computer Science</div>
                <div className="text-xs mt-0.5">Rangpur Polytechnic Institute · 2022 – Present</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}