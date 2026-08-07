"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiCpu,
  FiMonitor,
  FiLayers,
  FiZap,
  FiSearch,
  FiTerminal,
} from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

const services = [
  {
    title: "MERN Stack Development",
    desc: "End-to-end fullstack apps with MongoDB, Express, React, and Node — designed to scale and maintain.",
    icon: <FiCode size={22} />,
    color: "#22D3EE",
    span: "md:col-span-6",
  },
  {
    title: "Backend & API Engineering",
    desc: "REST & RESTful APIs, auth (JWT / Better Auth), rate limits, secure DB schemas, and clean architecture.",
    icon: <FiServer size={22} />,
    color: "#8B5CF6",
    span: "md:col-span-6",
  },
  {
    title: "AI & LLM Integration",
    desc: "Ship AI copilots, semantic search, contextual assistants, and RAG-powered flows into production products.",
    icon: <FiCpu size={22} />,
    color: "#EC4899",
    span: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "Responsive Web Design",
    desc: "Pixel-perfect, motion-rich interfaces for desktop, tablet, and mobile — mobile-first, accessible.",
    icon: <FiMonitor size={22} />,
    color: "#4ADE80",
    span: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "UI / UX Engineering",
    desc: "Translate Figma into real products. Design systems, component libraries, and AAA-level interactions.",
    icon: <FiLayers size={22} />,
    color: "#F472B6",
    span: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "Third-Party API Integration",
    desc: "Payments (Stripe), email (Resend), social logins, CRM, and any SaaS REST API — wired cleanly.",
    icon: <FiZap size={22} />,
    color: "#60A5FA",
    span: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "Performance & SEO Optimization",
    desc: "Core Web Vitals, image optimization, SEO metadata, and 95+ Lighthouse scores on production sites.",
    icon: <FiSearch size={22} />,
    color: "#FACC15",
    span: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "DevOps & Deployment",
    desc: "Ship on Vercel, Netlify, Railway, Render — CI config, env management, and reliable releases.",
    icon: <FiTerminal size={22} />,
    color: "#A78BFA",
    span: "md:col-span-6 lg:col-span-4",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-wrap relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <SectionHeader
            eyebrow="// Services"
            title={
              <>
                What I can <span className="gradient-text">ship</span> for you
              </>
            }
            subtitle="8 dedicated service lanes — pick one, or combine them for a full product build. All services are hands-on, premium-grade, and delivery focused."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className={`hud-panel rounded-2xl md:rounded-3xl border border-white/5 p-5 md:p-7 h-full group relative overflow-hidden ${s.span}`}
                style={{
                  boxShadow: "0 14px 50px -22px rgba(139,92,246,0.25)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-700 blur-3xl pointer-events-none"
                  style={{ background: `${s.color}55` }}
                />

                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 60%, rgba(34,211,238,0.04) 100%)",
                  }}
                />

                <div className="relative flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, ${s.color}1F, ${s.color}08)`,
                      border: `1px solid ${s.color}33`,
                      color: s.color,
                      boxShadow: `inset 0 0 22px ${s.color}12, 0 0 28px -8px ${s.color}55`,
                    }}
                  >
                    {s.icon}
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 rounded-2xl"
                      animate={{
                        boxShadow: [
                          `0 0 0 0 ${s.color}00`,
                          `0 0 0 6px ${s.color}14`,
                          `0 0 0 0 ${s.color}00`,
                        ],
                      }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                  <span
                    className="font-mono text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: `${s.color}AA` }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3 className="relative font-display font-semibold text-[17px] md:text-xl text-text-main leading-tight mb-2.5 group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="relative text-[13px] md:text-[14px] text-text-soft leading-relaxed max-w-[46ch]">
                  {s.desc}
                </p>

                {/* Bottom glow line */}
                <div
                  aria-hidden
                  className="absolute left-0 right-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
                    boxShadow: `0 0 8px ${s.color}88`,
                  }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
