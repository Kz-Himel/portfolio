"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { FiSend, FiMessageCircle, FiMail, FiCheckCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const socialLinks = [
  {
    icon: <FiMessageCircle size={18} />,
    label: "WhatsApp",
    href: "https://wa.me/8801307161360",
    color: "#25D366",
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khayruzzaman-himel/",
    color: "#0A66C2",
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    href: "https://github.com/Kz-Himel",
    color: "#E5E7EB",
  },
  {
    icon: <FiMail size={18} />,
    label: "Email",
    href: "mailto:kzhimel129@gmail.com",
    color: "#38BDF8",
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10 text-center"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-1 tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted text-xs md:text-sm mt-2 max-w-md mx-auto leading-relaxed">
            Have a project in mind? Send me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">
          {/* Left — Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass border border-white/8 rounded-xl p-4 md:p-5 space-y-4">
              <div>
                <h3 className="text-text-main font-semibold text-base">Get in Touch</h3>
                <p className="text-muted text-xs leading-relaxed mt-1">
                  Whether you have a project, a question, or just want to say hi — my inbox is always open.
                </p>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 pt-1">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2.5 p-2 rounded-lg glass border border-white/5 hover:border-white/15 transition-all duration-200 group"
                  >
                    <div
                      className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                      style={{
                        background: `${link.color}15`,
                        color: link.color,
                      }}
                    >
                      {link.icon}
                    </div>
                    <span className="text-text-main text-xs font-medium group-hover:text-accent transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass border border-green-500/20 rounded-xl p-3.5 flex items-center gap-3">
              <div className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </div>
              <div>
                <span className="text-green-400 text-xs font-semibold block leading-none">
                  Available for Work
                </span>
                <p className="text-muted text-[11px] mt-0.5">
                  Accepting new projects and freelance opportunities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="glass border border-white/8 rounded-xl p-5 md:p-6">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center space-y-2.5"
                >
                  <FiCheckCircle size={40} className="text-green-400" />
                  <h3 className="text-text-main font-semibold text-lg">Message Sent!</h3>
                  <p className="text-muted text-xs max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-text-main text-xs font-medium">Name</label>
                      <input
                        {...register("name")}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-text-main placeholder-muted text-xs focus:outline-none focus:border-accent/40 focus:bg-white/8 transition-all duration-200"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-[11px]">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-text-main text-xs font-medium">Email</label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-text-main placeholder-muted text-xs focus:outline-none focus:border-accent/40 focus:bg-white/8 transition-all duration-200"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-[11px]">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-text-main text-xs font-medium">Message</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-text-main placeholder-muted text-xs focus:outline-none focus:border-accent/40 focus:bg-white/8 transition-all duration-200 resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-[11px]">{errors.message.message}</p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-xs">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-accent text-bg font-semibold text-xs transition-all duration-300 hover:opacity-90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend size={14} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}