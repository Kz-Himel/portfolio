"use client";

import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiZap, FiGlobe, FiGitMerge } from "react-icons/fi";
import { IoColorPaletteOutline } from "react-icons/io5";

const services = [
  {
    icon: <FiCode size={28} />,
    title: "Frontend Development",
    desc: "Building fast, modern web apps with Next.js and React. Clean code, great architecture, and top performance.",
    tags: ["Next.js", "React", "TypeScript"],
    color: "#38BDF8",
  },
  {
    icon: <FiSmartphone size={28} />,
    title: "Responsive Design",
    desc: "Pixel-perfect interfaces that look stunning on any device — mobile, tablet, or desktop.",
    tags: ["Mobile-First", "Tailwind CSS"],
    color: "#7DD3FC",
  },
  {
    icon: <IoColorPaletteOutline size={28} />,
    title: "UI/UX Implementation",
    desc: "Translating Figma designs into reality with meticulous attention to detail and smooth interactions.",
    tags: ["Figma", "Framer Motion"],
    color: "#a78bfa",
  },
  {
    icon: <FiGlobe size={28} />,
    title: "API Integration",
    desc: "Connecting frontends to any backend — REST APIs, GraphQL, Firebase, and more.",
    tags: ["REST", "Firebase", "GraphQL"],
    color: "#34d399",
  },
  {
    icon: <FiZap size={28} />,
    title: "Performance Optimization",
    desc: "Analyzing and improving load times, Lighthouse scores, and Core Web Vitals for better SEO.",
    tags: ["Core Web Vitals", "SEO"],
    color: "#fbbf24",
  },
  {
    icon: <FiGitMerge size={28} />,
    title: "Version Control & Deploy",
    desc: "Professional Git workflows, CI/CD pipelines, and deployment on Vercel or Netlify.",
    tags: ["Git", "Vercel", "CI/CD"],
    color: "#f87171",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/4 rounded-full blur-[150px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mt-2">
            What I Can Do For You
          </h2>
          <p className="text-muted mt-3 max-w-lg">
            From concept to production — I handle the full frontend lifecycle with
            quality and care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group glass border border-white/8 rounded-2xl p-6 cursor-default transition-all duration-300 relative overflow-hidden"
              style={{
                "--hover-color": service.color,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)`,
                }}
              />
              {/* Border glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: `${service.color}30` }}
              />

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${service.color}15`,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </div>

                <h3 className="text-text-main font-bold text-lg">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        background: `${service.color}12`,
                        color: service.color,
                        border: `1px solid ${service.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}