"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = "himel.dev@gmail.com"; // Apnar email ekhane dite paren

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT COLUMN: Intro, Name, Bio, CTAs, Stats */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Status Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>01. Available for new opportunities</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-text-main leading-[1.1]">
              Khayruzzaman Himel
            </h1>

            {/* Bio Description */}
            <p className="text-text-soft text-sm sm:text-base leading-relaxed max-w-xl">
              I&apos;m a fullstack developer and creative technologist based in Bangladesh, passionate about building robust, accessible web applications that bridge design and engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/#contact" className="btn-primary flex items-center gap-2">
                <span>Available for hire</span>
                <FiArrowRight size={15} />
              </Link>
              
              <button 
                onClick={handleCopyEmail}
                className="btn-ghost flex items-center gap-2"
              >
                {copied ? <FiCheck size={15} className="text-emerald-500" /> : <FiCopy size={15} />}
                <span>{copied ? "Copied Email!" : "Copy email"}</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border mt-8 max-w-lg">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-text-main">04+</h3>
                <p className="text-xs text-text-muted mt-1 uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-text-main">35+</h3>
                <p className="text-xs text-text-muted mt-1 uppercase tracking-wider">Completed Projects</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-text-main">100%</h3>
                <p className="text-xs text-text-muted mt-1 uppercase tracking-wider">Client Satisfaction</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Profile Card Image Box */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[340px]">
              <div className="box p-3 bg-panel shadow-sm rounded-2xl border border-border">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-bg">
                  <Image
                    src="/profile.png"
                    alt="Khayruzzaman Himel"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}