"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiZap,
  FiGlobe,
  FiGitMerge,
  FiServer,
  FiCpu,
} from "react-icons/fi";
import { IoColorPaletteOutline } from "react-icons/io5";

const services = [
  {
    icon: <FiCode size={22} />,
    title: "MERN Development",
    desc: "Building fast, modern web apps with Next.js, React, Express and MongoDB. Clean architecture and top performance.",
    tags: ["Next.js", "React", "TypeScript"],
    color: "#38BDF8",
  },
  {
    icon: <FiServer size={22} />,
    title: "Backend Development",
    desc: "Designing scalable REST APIs, secure database schemas, and robust server-side logic for high reliability.",
    tags: ["Node.js", "Express", "MongoDB"],
    color: "#818CF8",
  },
  {
    icon: <FiCpu size={22} />,
    title: "AI Integration",
    desc: "Integrating cutting-edge AI models, LLMs, and intelligent automation into web applications to elevate UX.",
    tags: ["OpenAI", "Gemini API", "AI Agents"],
    color: "#EC4899",
  },
  {
    icon: <FiSmartphone size={22} />,
    title: "Responsive Design",
    desc: "Pixel-perfect, mobile-first interfaces that function and look stunning seamlessly across all screen sizes.",
    tags: ["Mobile-First", "Tailwind CSS"],
    color: "#38BDF8",
  },
  {
    icon: <IoColorPaletteOutline size={22} />,
    title: "UI/UX Implementation",
    desc: "Translating complex Figma & Adobe designs into pixel-perfect code with smooth interactions.",
    tags: ["Figma", "Framer Motion"],
    color: "#A78BFA",
  },
  {
    icon: <FiGlobe size={22} />,
    title: "API Integration",
    desc: "Connecting modern frontends to diverse backends, payment gateways, and third-party services.",
    tags: ["REST API", "Firebase", "Stripe"],
    color: "#34D399",
  },
  {
    icon: <FiZap size={22} />,
    title: "Performance & SEO",
    desc: "Optimizing Web Vitals, page speed, and overall Lighthouse metrics for maximal organic reach.",
    tags: ["Core Web Vitals", "SEO"],
    color: "#FBBF24",
  },
  {
    icon: <FiGitMerge size={22} />,
    title: "Version Control & DevOps",
    desc: "Structured Git workflows, automated CI/CD pipelines, and effortless deployment setup on Vercel or Netlify.",
    tags: ["Git", "Vercel", "CI/CD"],
    color: "#F87171",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Container aligned with Navbar, About, Skills & Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-1 tracking-tight">
            What I Can Do For You
          </h2>
          <p className="text-muted text-xs md:text-sm mt-2 max-w-md leading-relaxed">
            From concept to production — I deliver full-stack solutions with quality, performance, and attention to detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group glass border border-white/8 rounded-xl p-4 cursor-default transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Radial Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 75%)`,
                }}
              />
              
              {/* Border Accent Glow on Hover */}
              <div
                className="absolute inset-0 rounded-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ borderColor: `${service.color}35` }}
              />

              <div className="relative z-10 space-y-3">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${service.color}15`,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </div>

                <h3 className="text-text-main font-semibold text-base group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted text-xs leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="relative z-10 flex flex-wrap gap-1.5 pt-3">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium transition-colors"
                    style={{
                      background: `${service.color}12`,
                      color: service.color,
                      border: `1px solid ${service.color}20`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}