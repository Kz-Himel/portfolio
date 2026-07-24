"use client";

import { motion } from "framer-motion";
import { FiMessageCircle, FiDownload } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import TypewriterText from "./TypewriterText";

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
    <section className="relative min-h-[92vh] flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* WIDER + same alignment standard as Navbar (max-w-7xl px-6) */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-accent/20 text-accent text-xs font-medium"
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <BsStars size={13} />
              </motion.span>
              Available for freelance work
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="space-y-1.5"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Khayruzzaman Himel</span>
              </h1>
              <h2 className="text-lg md:text-xl gradient-text font-medium">
                <TypewriterText
                  words={[
                    "Junior MERN Developer",
                    "React Js & Next Js Developer",
                    "Frontend Focused Fullstack Dev",
                  ]}
                />
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-muted text-[15px] leading-relaxed max-w-xl"
            >
              I build responsive, animated, and scalable web applications using{" "}
              <span className="text-accent">Next.js</span>,{" "}
              <span className="text-accent">React</span>, and modern UI
              technologies. Crafting digital experiences that feel alive.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-3.5"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 30px rgba(56,189,248,0.3)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(56,189,248,0)",
                      "0 0 16px rgba(56,189,248,0.18)",
                      "0 0 0px rgba(56,189,248,0)",
                    ],
                  }}
                  transition={{
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg font-semibold text-[13px] transition-all duration-300"
                >
                  <FiMessageCircle size={15} />
                  Contact Me
                </motion.button>
              </Link>
              <motion.a
                href="/MERN_Developer_Khayruzzaman_Himel.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-text-main font-semibold text-[13px] hover:border-accent/30 transition-all duration-300 cursor-pointer"
              >
                <FiDownload size={15} />
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex gap-7 pt-2"
            >
              {[
                { value: "20+", label: "Projects" },
                { value: "1+", label: "Years Exp." },
                { value: "10+", label: "Clients" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3 }}
                  className="text-center cursor-default"
                >
                  <div className="text-xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">{stat.label}</div>
                </motion.div>
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
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-transparent to-purple-500/20 blur-2xl scale-110"
              />

              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div className="absolute inset-4 rounded-full border border-accent/10" />

              <div className="absolute inset-6 rounded-full glass border-2 animate-border-glow overflow-hidden animate-float">
                <Image
                  src="/profile.png"
                  alt="Kz Himel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-2 -right-4 glass border border-white/10 rounded-xl px-2.5 py-1.5 text-[11px] font-medium text-accent shadow-lg"
              >
                ⚡ Next.js 15
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-4 -left-4 glass border border-white/10 rounded-xl px-2.5 py-1.5 text-[11px] font-medium text-soft-accent shadow-lg"
              >
                🎨 Framer Motion
              </motion.div>
              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 -right-8 glass border border-white/10 rounded-xl px-2.5 py-1.5 text-[11px] font-medium text-purple-400 shadow-lg"
              >
                🚀 TypeScript
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}