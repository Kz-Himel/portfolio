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
    icon: <FiMessageCircle size={20} />,
    label: "WhatsApp",
    href: "https://wa.me/8801307161360",
    color: "#25D366",
  },
  {
    icon: <FaLinkedin size={20} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khayruzzaman-himel/",
    color: "#0A66C2",
  },
  {
    icon: <FaGithub size={20} />,
    label: "GitHub",
    href: "https://github.com/Kz-Himel",
    color: "#E5E7EB",
  },
  {
    icon: <FiMail size={20} />,
    label: "Email",
    href: "mailto:kzhimel129@gmail.com",
    color: "#38BDF8",
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

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
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/6 rounded-full blur-[140px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mt-2">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted mt-3 max-w-lg mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Send me a message
            and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-3">
              <h3 className="text-text-main font-bold text-xl">Get in Touch</h3>
              <p className="text-muted text-sm leading-relaxed">
                Whether you have a project, a question, or just want to say hi —
                my inbox is always open.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 p-3 rounded-xl glass border border-white/8 hover:border-white/15 transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: `${link.color}15`,
                      color: link.color,
                    }}
                  >
                    {link.icon}
                  </div>
                  <span className="text-text-main text-sm font-medium group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="glass border border-green-500/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">
                  Available for Work
                </span>
              </div>
              <p className="text-muted text-xs">
                Currently accepting new projects and freelance opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass border border-white/8 rounded-2xl p-7">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <FiCheckCircle size={48} className="text-green-400" />
                  <h3 className="text-text-main font-bold text-xl">Message Sent!</h3>
                  <p className="text-muted text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-text-main text-sm font-medium">Name</label>
                    <input
                      {...register("name")}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-main placeholder-muted text-sm focus:outline-none focus:border-accent/40 focus:bg-white/8 transition-all duration-200"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-text-main text-sm font-medium">Email</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-main placeholder-muted text-sm focus:outline-none focus:border-accent/40 focus:bg-white/8 transition-all duration-200"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-text-main text-sm font-medium">Message</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-main placeholder-muted text-sm focus:outline-none focus:border-accent/40 focus:bg-white/8 transition-all duration-200 resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs">{errors.message.message}</p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(56,189,248,0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-bg font-semibold text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}