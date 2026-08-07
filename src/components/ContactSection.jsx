"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FiMail,
  FiMessageCircle,
  FiSend,
  FiMapPin,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import MagneticButton from "./ui/MagneticButton";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(3, "Subject required"),
  message: z.string().min(10, "Message too short"),
});

const socials = [
  {
    icon: <FaGithub size={16} />,
    label: "GitHub",
    value: "@Kz-Himel",
    href: "https://github.com/Kz-Himel",
    color: "#E2E8F0",
  },
  {
    icon: <FaLinkedin size={16} />,
    label: "LinkedIn",
    value: "Khayruzzaman Himel",
    href: "https://www.linkedin.com/in/khayruzzaman-himel/",
    color: "#0A66C2",
  },
  {
    icon: <FaWhatsapp size={16} />,
    label: "WhatsApp",
    value: "+880 1700-000000",
    href: "#",
    color: "#25D366",
  },
  {
    icon: <FaDiscord size={16} />,
    label: "Discord",
    value: "kzhimel",
    href: "#",
    color: "#5865F2",
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data) => {
    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5500);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5500);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5500);
    }
  };

  return (
    <section id="contact" className="section-wrap relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14 text-center">
          <div className="inline-block mx-auto">
            <SectionHeader
              eyebrow="// Contact"
              title={
                <>
                  Let's build <span className="gradient-text">something legendary</span>
                </>
              }
              subtitle="Got a project, role, or wild idea? My inbox is open — I reply within 24 hours. Prefer chat? Jump to WhatsApp or Discord."
              align="center"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {/* LEFT: contact info panels */}
          <div className="lg:col-span-5 space-y-4 md:space-y-5 order-2 lg:order-1">
            <Reveal delay={0.06}>
              <div className="hud-panel rounded-[1.5rem] border border-cyan/15 p-5 md:p-7 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 w-40 h-40 rounded-full blur-3xl opacity-60"
                  style={{ background: "radial-gradient(circle, rgba(34,211,238,0.35), transparent 70%)" }}
                />

                <div className="relative flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(139,92,246,0.12))",
                      border: "1px solid rgba(34,211,238,0.3)",
                      color: "#22D3EE",
                      boxShadow: "0 0 28px rgba(34,211,238,0.25), inset 0 0 20px rgba(139,92,246,0.12)",
                    }}
                  >
                    <FiMail size={24} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-neon mb-1.5">
                      Primary channel
                    </div>
                    <a
                      href="mailto:kzhimel129@gmail.com"
                      className="font-display font-semibold text-[18px] md:text-xl text-text-main hover:text-cyan-neon transition-colors"
                    >
                      kzhimel129@gmail.com
                    </a>
                    <div className="mt-2 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-text-muted">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                      </span>
                      Available now · replies in 24h
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center gap-3 text-[13px] text-text-soft leading-relaxed mb-6">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-violet/10 text-violet-neon border border-violet/25">
                    <FiMapPin size={15} />
                  </span>
                  Rangpur, Bangladesh · GMT+6 · Remote-friendly
                </div>

                <div className="hud-divider mb-5" />

                <div className="relative grid grid-cols-2 gap-2.5 md:gap-3">
                  {socials.map((s, i) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-2.5 rounded-xl p-2.5 md:p-3 transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: `linear-gradient(135deg, ${s.color}0A, transparent)`,
                        border: `1px solid ${s.color}22`,
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          color: s.color,
                          background: `${s.color}15`,
                          boxShadow: `inset 0 0 0 1px ${s.color}22`,
                        }}
                      >
                        {s.icon}
                      </div>
                      <div className="leading-tight min-w-0">
                        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted mb-0.5">
                          {s.label}
                        </div>
                        <div
                          className="text-[12px] font-medium truncate"
                          style={{ color: `${s.color}` }}
                        >
                          {s.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="hud-panel rounded-[1.5rem] border border-violet/15 p-5 md:p-7 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full blur-3xl opacity-60"
                  style={{ background: "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)" }}
                />
                <div className="relative flex items-start gap-3.5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(74,222,128,0.12)",
                      border: "1px solid rgba(74,222,128,0.3)",
                      color: "#4ADE80",
                      boxShadow: "0 0 20px rgba(74,222,128,0.2)",
                    }}
                  >
                    <div className="relative w-4 h-4 flex items-center justify-center">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-60 animate-ping" />
                      <FiCheckCircle size={16} />
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-green-400 mb-1.5">
                      Availability
                    </div>
                    <h4 className="font-display font-bold text-[17px] text-text-main mb-1">
                      Open for <span className="gradient-text">freelance & FT roles</span>
                    </h4>
                    <p className="text-[12.5px] text-text-soft leading-relaxed">
                      Accepting new projects from Q3 2026 · Onsite + Remote · Contract preferred · Weekly check-ins
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal delay={0.08}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="hud-panel rounded-[1.6rem] border border-white/8 p-5 md:p-7 lg:p-9 relative overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 w-72 h-72 rounded-full blur-[100px] opacity-50 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full blur-[100px] opacity-40 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(34,211,238,0.3), transparent 70%)",
                  }}
                />

                <div className="relative mb-7 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-neon mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-neon animate-pulse shadow-[0_0_6px_var(--cyan-glow)]" />
                      Transmission · Encrypted
                    </div>
                    <h3 className="font-display text-2xl md:text-[1.7rem] font-bold leading-tight text-text-main">
                      Drop a <span className="gradient-text">message</span>
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                    fields · 04
                  </span>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div className="hud-input md:col-span-1">
                    <label htmlFor="name">01 · Name</label>
                    <input
                      id="name"
                      placeholder="What should I call you?"
                      {...register("name")}
                      className={errors.name ? "!border-red-400/50" : ""}
                    />
                    {errors.name && (
                      <p className="text-[10.5px] mt-1 text-red-400 font-medium">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="hud-input md:col-span-1">
                    <label htmlFor="email">02 · Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@domain.com"
                      {...register("email")}
                      className={errors.email ? "!border-red-400/50" : ""}
                    />
                    {errors.email && (
                      <p className="text-[10.5px] mt-1 text-red-400 font-medium">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="hud-input md:col-span-2">
                    <label htmlFor="subject">03 · Subject</label>
                    <input
                      id="subject"
                      placeholder="What's the project or role about?"
                      {...register("subject")}
                      className={errors.subject ? "!border-red-400/50" : ""}
                    />
                    {errors.subject && (
                      <p className="text-[10.5px] mt-1 text-red-400 font-medium">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                  <div className="hud-input md:col-span-2">
                    <label htmlFor="message">04 · Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell me about the scope, timeline, budget range, and what 'amazing' looks like…"
                      {...register("message")}
                      className={errors.message ? "!border-red-400/50" : ""}
                    />
                    {errors.message && (
                      <p className="text-[10.5px] mt-1 text-red-400 font-medium">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="relative mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5 text-[11px] text-text-muted font-mono">
                    <FiMessageCircle size={13} className="text-cyan-neon" />
                    Typical response · under 24 hours
                  </div>
                  <MagneticButton
                    strength={18}
                    whileHover={{ scale: 1.03 }}
                    className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[13px] md:text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <AnimatePresence mode="wait">
                      {status === "loading" || isSubmitting ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <motion.span
                            className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black/90"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                          />
                          Transmitting…
                        </motion.span>
                      ) : status === "success" ? (
                        <motion.span
                          key="success"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <FiCheckCircle size={16} />
                          Message sent!
                        </motion.span>
                      ) : status === "error" ? (
                        <motion.span
                          key="error"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <FiAlertCircle size={16} />
                          Retry please
                        </motion.span>
                      ) : (
                        <motion.span
                          key="send"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <FiSend size={14} />
                          Send Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </MagneticButton>
                </div>

                <div
                  aria-hidden
                  className="absolute inset-0 rounded-[inherit] pointer-events-none"
                  style={{
                    background:
                      "repeating-linear-gradient(0deg, rgba(34,211,238,0.018) 0px, transparent 2px, transparent 4px)",
                    mixBlendMode: "overlay",
                    opacity: 0.5,
                  }}
                />
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
