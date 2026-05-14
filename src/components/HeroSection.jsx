"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiMessageCircle, FiDownload } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 text-accent text-sm font-medium"
            >
              <BsStars size={14} />
              Available for freelance work
            </motion.div>

            {/* Heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="space-y-2"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-main leading-[1.05]">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Khayruzzaman Himel</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted font-medium">
                Frontend Developer | Web Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-muted text-lg leading-relaxed max-w-lg"
            >
              I build responsive, animated, and scalable web applications using{" "}
              <span className="text-accent">Next.js</span>,{" "}
              <span className="text-accent">React</span>, and modern UI
              technologies. Crafting digital experiences that feel alive.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 30px rgba(56,189,248,0.3)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-bg font-semibold text-sm transition-all duration-300"
                >
                  <FiMessageCircle size={16} />
                  Contact Me
                </motion.button>
              </Link>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-white/10 text-text-main font-semibold text-sm hover:border-accent/30 transition-all duration-300 cursor-pointer"
              >
                <FiDownload size={16} />
                Resume
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex gap-8 pt-4"
            >
              {[
                { value: "20+", label: "Projects" },
                { value: "1+", label: "Years Exp." },
                { value: "10+", label: "Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-transparent to-purple-500/20 blur-2xl scale-110" />

              {/* Rotating border */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div className="absolute inset-4 rounded-full border border-accent/10" />

              {/* Image container */}
              <div className="absolute inset-6 rounded-full glass border-2 animate-border-glow overflow-hidden animate-float">
                {/* your actual image */}
                <Image
                  src="/profile.png"
                  alt="Kz Himel"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-2 -right-4 glass border border-white/10 rounded-xl px-3 py-2 text-xs font-medium text-accent shadow-lg"
              >
                ⚡ Next.js 15
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 glass border border-white/10 rounded-xl px-3 py-2 text-xs font-medium text-soft-accent shadow-lg"
              >
                🎨 Framer Motion
              </motion.div>
              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute top-1/2 -right-8 glass border border-white/10 rounded-xl px-3 py-2 text-xs font-medium text-purple-400 shadow-lg"
              >
                🚀 Tailwind
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
