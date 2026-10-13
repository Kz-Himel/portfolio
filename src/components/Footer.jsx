"use client";

import Link from "next/link";
import { FiGithub, FiMail, FiArrowUp, FiFileText } from "react-icons/fi";
import { FaLinkedin, FaDiscord, FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";
import { personalInfo } from "@/data/portfolioData";

const footerNavLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Services", href: "/#services" },
  { label: "Experience", href: "/#experience" },
  { label: "Credentials", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-[#060911] mt-20 transition-colors">
      <div className="container-custom pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Identity & Socials */}
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Fullstack MERN and Frontend developer building production-grade web applications, interactive interfaces, and scalable digital solutions.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalInfo.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-white/[0.2] hover:bg-indigo-50 dark:hover:bg-white/[0.08] transition-all shadow-2xs"
              >
                <FiGithub size={15} />
              </a>
              <a
                href={personalInfo.socials[1].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-white/[0.2] hover:bg-indigo-50 dark:hover:bg-white/[0.08] transition-all shadow-2xs"
              >
                <FaLinkedin size={15} />
              </a>
              <a
                href={personalInfo.socials[2].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord Profile"
                className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-white/[0.2] hover:bg-indigo-50 dark:hover:bg-white/[0.08] transition-all shadow-2xs"
              >
                <FaDiscord size={15} />
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-white/[0.2] hover:bg-indigo-50 dark:hover:bg-white/[0.08] transition-all shadow-2xs"
              >
                <FaWhatsapp size={15} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Address"
                className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-white/[0.2] hover:bg-indigo-50 dark:hover:bg-white/[0.08] transition-all shadow-2xs"
              >
                <FiMail size={15} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {footerNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Resources */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Resources &amp; Resume
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center gap-2"
                >
                  <FiFileText size={14} className="text-indigo-500 dark:text-indigo-400" />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.cvUrl}
                  download
                  className="hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center gap-2"
                >
                  <FiFileText size={14} className="text-indigo-500 dark:text-indigo-400" />
                  <span>Download CV (PDF)</span>
                </a>
              </li>
              <li>
                <Link href="/projects" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
                  All Projects Directory ({12})
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-indigo-600 dark:hover:text-white transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="border-t border-slate-200 dark:border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none cursor-pointer"
          >
            <span>Back to top</span>
            <FiArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}