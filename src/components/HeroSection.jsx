"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = "himel.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>01. Available for new opportunities</span>
            </div>

            {/* Real name stays in the DOM for accessibility/SEO — the
                dominant visual name now lives as 3D metallic type in the
                canvas behind this section. */}
            <h1 className="sr-only">Khayruzzaman Himel</h1>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-text-muted">
              Fullstack Developer
            </p>

            <p className="text-text-soft text-sm sm:text-base leading-relaxed max-w-xl">
              I&apos;m a fullstack developer and creative technologist based in Bangladesh, passionate about building robust, accessible web applications that bridge design and engineering.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/#contact" className="btn-primary flex items-center gap-2">
                <span>Available for hire</span>
                <FiArrowRight size={15} />
              </Link>

              <button
                onClick={handleCopyEmail}
                className="btn-ghost flex items-center gap-2"
              >
                {copied ? <FiCheck size={15} className="text-text-main" /> : <FiCopy size={15} />}
                <span>{copied ? "Copied Email!" : "Copy email"}</span>
              </button>
            </div>

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

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px]">
              <div className="p-3 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/profile.png"
                    alt="Khayruzzaman Himel"
                    fill
                    sizes="(max-width: 1024px) 320px, 320px"
                    className="object-cover object-top grayscale contrast-110"
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