"use client";

import Link from "next/link";
import { FiGithub, FiMail, FiHeart } from "react-icons/fi";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import Logo from "./Logo";

const navCols = [
  {
    title: "Navigate",
    links: [
      { href: "/#hero", label: "Home" },
      { href: "/#about", label: "About" },
      { href: "/#skills", label: "Skills" },
      { href: "/#projects", label: "Projects" },
      { href: "/#experience", label: "Experience" },
      { href: "/#achievements", label: "Achievements" },
      { href: "/#contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/#services", label: "MERN Development" },
      { href: "/#services", label: "Frontend · UI/UX" },
      { href: "/#services", label: "AI & LLM Integrations" },
      { href: "/#services", label: "Performance · SEO" },
      { href: "/#services", label: "DevOps · Deploy" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "mailto:kzhimel129@gmail.com", label: "kzhimel129@gmail.com" },
      { href: "https://github.com/Kz-Himel", label: "GitHub · @Kz-Himel" },
      { href: "https://www.linkedin.com/in/khayruzzaman-himel/", label: "LinkedIn" },
      { href: "/Khayruzzaman_Himel_CV.pdf", label: "Download Resume" },
    ],
  },
];

const socialIcons = [
  { icon: <FiGithub size={14} />, href: "https://github.com/Kz-Himel" },
  { icon: <FaLinkedin size={14} />, href: "https://www.linkedin.com/in/khayruzzaman-himel/" },
  { icon: <FaDiscord size={14} />, href: "https://discord.com/channels/1495450778364678285/1495450779220312116" },
  { icon: <FiMail size={14} />, href: "mailto:kzhimel129@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border mt-10">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-4 space-y-4">
            <Logo />
            <p className="text-[13px] text-text-soft leading-relaxed max-w-sm">
              Crafting modern, motion-rich web products — engineered for
              performance, built to last.
            </p>
            <div className="flex items-center gap-2">
              {socialIcons.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social link"
                  className="box w-9 h-9 flex items-center justify-center text-text-soft hover:text-accent hover:border-accent transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {navCols.map((col) => (
            <div key={col.title} className="md:col-span-4 lg:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-3.5">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      target={l.href.startsWith("http") || l.href.startsWith("mailto:") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[12.5px] text-text-soft hover:text-text-main transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-text-muted">
            © {new Date().getFullYear()} Khayruzzaman Himel. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-[11.5px] text-text-soft">
            Built with <FiHeart size={12} className="text-accent" />
            <span className="text-text-main font-medium">Himel</span> · Next.js
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="font-mono text-[11px] uppercase tracking-wider text-text-soft hover:text-accent transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}