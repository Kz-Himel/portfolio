"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
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

function ServiceCard({ service, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal delay={index * 0.04} blur={false}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative h-full cursor-pointer"
      >
        {/* BACKGROUND PURPLE ELECTRIC SHOCKWAVE PULSE */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Shockwave Rings */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full border border-purple-500/80 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-purple-400/40 group-hover:animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_200ms]" />
          
          {/* High Voltage Purple Glow Base */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/30 via-purple-900/10 to-transparent blur-md" />
        </div>

        {/* ORIGINAL SHARP BOX CONTAINER */}
        <div className="box p-5 h-full relative z-10 bg-bg transition-all duration-300 group-hover:border-purple-500 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] flex flex-col justify-between">
          
          {/* ELECTRIC LIGHT SWEEP LINE */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
            <div className="absolute -inset-[100%] top-0 left-0 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -rotate-45 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-accent group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-125 transform">
                {service.icon}
              </span>
              <span className="font-mono text-[10px] text-text-muted group-hover:text-purple-300">
                0{index + 1}
              </span>
            </div>
            <h3 className="font-mono font-semibold text-[15px] text-text-main leading-tight mb-2 group-hover:text-purple-300 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-[12.5px] text-text-soft leading-relaxed">
              {service.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="services"
          subtitle="8 dedicated service lanes — pick one, or combine them for a full product build."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 [perspective:1000px]">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}