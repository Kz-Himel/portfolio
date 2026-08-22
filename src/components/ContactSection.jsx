"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FiMail,
  FiSend,
  FiMapPin,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(3, "Subject required"),
  message: z.string().min(10, "Message too short"),
});

const socials = [
  {
    icon: <FaDiscord size={16} />,
    label: "Discord",
    value: "kzhimel",
    href: "https://discord.com/channels/1495450778364678285/1495450779220312116",
  },
  {
    icon: <FiMail size={16} />,
    label: "Email",
    value: "kzhimel129@gmail.com",
    href: "mailto:kzhimel129@gmail.com",
  },
  {
    icon: <FaWhatsapp size={16} />,
    label: "WhatsApp",
    value: "+880 1341288101",
    href: "https://wa.me/8801341288101",
  },
  {
    icon: <FaGithub size={16} />,
    label: "GitHub",
    value: "@Kz-Himel",
    href: "https://github.com/Kz-Himel",
  },
];

const inputClass =
  "w-full bg-transparent border-b border-border font-mono text-[13px] text-text-main placeholder:text-text-muted py-2.5 outline-none focus:border-accent transition-colors";

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
      setStatus(res.ok ? "success" : "error");
      if (res.ok) reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="contact"
          subtitle="I'm interested in freelance opportunities and full-time roles. However, if you have other requests or questions, don't hesitate to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
            <Reveal delay={0.06} blur={false}>
              <div className="box p-5 md:p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted mb-4 block">
                  Message me here
                </span>
                <div className="space-y-1">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 py-2.5 border-b border-border last:border-b-0 text-text-soft hover:text-accent transition-colors"
                    >
                      <span className="text-accent shrink-0">{s.icon}</span>
                      <span className="font-mono text-[13px] truncate">{s.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} blur={false}>
              <div className="box p-5 md:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
                    Availability
                  </span>
                </div>
                <h4 className="font-mono font-semibold text-[15px] text-text-main mb-1.5">
                  Open for freelance &amp; full-time roles
                </h4>
                <p className="text-[12.5px] text-text-soft leading-relaxed">
                  Accepting new projects from Q3 2026 · Remote-friendly · Reply within 24h.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14} blur={false}>
              <div className="flex items-center gap-3 text-[13px] text-text-soft font-mono">
                <FiMapPin size={14} className="text-accent" />
                Rangpur, Bangladesh · GMT+6
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal delay={0.08} blur={false}>
              <form onSubmit={handleSubmit(onSubmit)} className="box p-6 md:p-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted mb-6 block">
                  Drop a message
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      id="name"
                      placeholder="Your name"
                      {...register("name")}
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="text-[10.5px] mt-1 text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@domain.com"
                      {...register("email")}
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="text-[10.5px] mt-1 text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="sr-only">Subject</label>
                    <input
                      id="subject"
                      placeholder="What's the project or role about?"
                      {...register("subject")}
                      className={inputClass}
                    />
                    {errors.subject && (
                      <p className="text-[10.5px] mt-1 text-red-400">{errors.subject.message}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about the scope, timeline, and budget…"
                      {...register("message")}
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[10.5px] mt-1 text-red-400">{errors.message.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <span className="font-mono text-[11px] text-text-muted">
                    Typical response · under 24 hours
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-outline justify-center disabled:opacity-50"
                  >
                    <AnimatePresence mode="wait">
                      {status === "loading" || isSubmitting ? (
                        <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          Sending…
                        </motion.span>
                      ) : status === "success" ? (
                        <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-green-400">
                          <FiCheckCircle size={14} /> Message sent
                        </motion.span>
                      ) : status === "error" ? (
                        <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-red-400">
                          <FiAlertCircle size={14} /> Retry please
                        </motion.span>
                      ) : (
                        <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          <FiSend size={13} /> Send message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}