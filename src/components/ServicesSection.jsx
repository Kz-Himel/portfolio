"use client";

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
    icon: <FiCode size={20} />,
  },
  {
    title: "Backend & API Engineering",
    desc: "REST APIs, auth (JWT / Better Auth), rate limits, secure DB schemas, and clean architecture.",
    icon: <FiServer size={20} />,
  },
  {
    title: "AI & LLM Integration",
    desc: "Ship AI copilots, semantic search, contextual assistants, and RAG-powered flows into production products.",
    icon: <FiCpu size={20} />,
  },
  {
    title: "Responsive Web Design",
    desc: "Pixel-perfect, motion-rich interfaces for desktop, tablet, and mobile — mobile-first, accessible.",
    icon: <FiMonitor size={20} />,
  },
  {
    title: "UI / UX Engineering",
    desc: "Translate Figma into real products. Design systems, component libraries, and polished interactions.",
    icon: <FiLayers size={20} />,
  },
  {
    title: "Third-Party API Integration",
    desc: "Payments (Stripe), email (Resend), social logins, CRM, and any SaaS REST API — wired cleanly.",
    icon: <FiZap size={20} />,
  },
  {
    title: "Performance & SEO Optimization",
    desc: "Core Web Vitals, image optimization, SEO metadata, and high Lighthouse scores on production sites.",
    icon: <FiSearch size={20} />,
  },
  {
    title: "DevOps & Deployment",
    desc: "Ship on Vercel, Netlify, Railway, Render — CI config, env management, and reliable releases.",
    icon: <FiTerminal size={20} />,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="services"
          subtitle="8 dedicated service lanes — pick one, or combine them for a full product build."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04} blur={false}>
              <div className="box p-5 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent">{s.icon}</span>
                  <span className="font-mono text-[10px] text-text-muted">0{i + 1}</span>
                </div>
                <h3 className="font-mono font-semibold text-[15px] text-text-main leading-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-[12.5px] text-text-soft leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}