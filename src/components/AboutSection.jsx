"use client";

import Reveal from "./ui/Reveal";
import { FiUser, FiMapPin, FiBriefcase, FiBookOpen, FiCompass } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header Tag */}
        <div className="mb-4">
          <span className="section-tag">
            <span className="w-2 h-2 rounded-full bg-accent" />
            02. About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* LEFT: Detailed Bio & Description */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main leading-tight">
              Crafting digital experiences at the intersection of engineering and design.
            </h2>

            <div className="space-y-4 text-text-soft text-sm sm:text-base leading-relaxed">
              <p>
                I am a passionate Full-Stack Developer specializing in the MERN stack and modern web technologies. My approach combines clean, maintainable code architecture with polished, fluid user interfaces that leave a lasting impression.
              </p>
              <p>
                Over the past few years, I’ve worked on a diverse range of projects—from dynamic SaaS platforms and AI-driven workflow tools to high-performance marketing sites. I thrive in environments that challenge me to solve complex state-management, performance, and scaling problems.
              </p>
              <p>
                When I&apos;m not pushing code, you&apos;ll find me exploring emerging AI capabilities, contributing to open-source developer tools, or refining UI animation curves.
              </p>
            </div>
          </div>

          {/* RIGHT: "At a Glance" Info Panel (Matching Image Sidebar) */}
          <div className="lg:col-span-5">
            <div className="box p-6 sm:p-7 rounded-2xl bg-panel border border-border shadow-sm">
              <h3 className="text-base font-bold text-text-main font-mono mb-5 pb-3 border-b border-border flex items-center gap-2">
                <FiCompass className="text-accent" />
                At a Glance
              </h3>

              <ul className="space-y-4 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-text-muted flex items-center gap-2">
                    <FiBriefcase size={15} className="text-accent" /> Role
                  </span>
                  <span className="font-semibold text-text-main">Fullstack Developer</span>
                </li>

                <li className="flex items-center justify-between">
                  <span className="text-text-muted flex items-center gap-2">
                    <FiMapPin size={15} className="text-accent" /> Location
                  </span>
                  <span className="font-semibold text-text-main">Bangladesh</span>
                </li>

                <li className="flex items-center justify-between">
                  <span className="text-text-muted flex items-center gap-2">
                    <FiUser size={15} className="text-accent" /> Focus
                  </span>
                  <span className="font-semibold text-text-main">MERN & Next.js Ecosystem</span>
                </li>

                <li className="flex items-center justify-between">
                  <span className="text-text-muted flex items-center gap-2">
                    <FiBookOpen size={15} className="text-accent" /> Experience
                  </span>
                  <span className="font-semibold text-text-main">04+ Years Building</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}