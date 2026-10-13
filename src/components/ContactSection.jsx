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
  FiCheck,
  FiCopy,
} from "react-icons/fi";
import { FaWhatsapp, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import SectionHeader from "./ui/SectionHeader";
import { personalInfo } from "@/data/portfolioData";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please provide a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const socialIcons = {
  Discord: <FaDiscord size={17} />,
  Email: <FiMail size={17} />,
  WhatsApp: <FaWhatsapp size={17} />,
  GitHub: <FaGithub size={17} />,
  LinkedIn: <FaLinkedin size={17} />,
};

const inputClass =
  "w-full bg-slate-50 dark:bg-[#070A12] border border-slate-200 dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all";

export default function ContactSection() {
  const [status, setStatus] = useState("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

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
      } else {
        setStatus("error");
      }
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-200 dark:border-white/[0.06] scroll-mt-20">
      <div className="container-custom">
        <SectionHeader
          stationNumber="Get in Touch"
          title="Let's Build Something Together"
          subtitle="Open for contract engineering, high-impact frontend architecture, and fullstack product opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Details & Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Card */}
            <div className="card-surface p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge-subtle">
                  Direct Line
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <FiCheck size={13} className="text-emerald-500 dark:text-emerald-400" />
                      <span className="text-emerald-500 dark:text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy size={13} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block break-all"
                >
                  {personalInfo.email}
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                  Typical response time is under 24 hours.
                </p>
              </div>
            </div>

            {/* Social & Messaging Channels */}
            <div className="card-surface p-6 sm:p-7 space-y-5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Connect Across Platforms
              </h3>

              <div className="space-y-2.5">
                {personalInfo.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-slate-200/80 dark:border-white/[0.04] hover:border-slate-300 dark:hover:border-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all group"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {socialIcons[s.platform] || <FiMail size={16} />}
                      </span>
                      <span className="text-sm font-medium">{s.platform}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors truncate max-w-[170px]">
                      {s.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability & Location Card */}
            <div className="card-surface p-6 space-y-3.5">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Availability Status
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalInfo.availabilityNotice}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-white/[0.06]">
                <FiMapPin size={14} className="text-indigo-500 dark:text-indigo-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-surface p-6 sm:p-8 md:p-10 space-y-6"
            >
              <div className="border-b border-slate-200 dark:border-white/[0.06] pb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Fill out the form below and I&apos;ll get back to you promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    placeholder="e.g. Sarah Connor"
                    {...register("name")}
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 flex items-center gap-1">
                      <FiAlertCircle size={12} />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    {...register("email")}
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 flex items-center gap-1">
                      <FiAlertCircle size={12} />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject / Inquiry Type <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    placeholder="Project Inquiry, Full-Time Role, or Contract"
                    {...register("subject")}
                    className={inputClass}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 flex items-center gap-1">
                      <FiAlertCircle size={12} />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Message Details <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project scope, timeline, goals, and any specific tech stack preferences..."
                    {...register("message")}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 flex items-center gap-1">
                      <FiAlertCircle size={12} />
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Direct endpoint response within 24 hours.
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting || status === "loading"}
                  className="btn-primary justify-center text-sm font-semibold min-w-[160px]"
                >
                  <AnimatePresence mode="wait">
                    {status === "loading" || isSubmitting ? (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </motion.span>
                    ) : status === "success" ? (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-1.5 text-emerald-300"
                      >
                        <FiCheckCircle size={15} /> Sent Successfully
                      </motion.span>
                    ) : status === "error" ? (
                      <motion.span
                        key="error"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-1.5 text-rose-300"
                      >
                        <FiAlertCircle size={15} /> Error - Retry
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-1.5"
                      >
                        <FiSend size={15} /> Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}