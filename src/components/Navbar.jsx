"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiDownload, FiArrowRight } from "react-icons/fi";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { personalInfo } from "@/data/portfolioData";

const navItems = [
  { href: "/", label: "Home", targetId: "hero" },
  { href: "/#about", label: "About", targetId: "about" },
  { href: "/#skills", label: "Skills", targetId: "skills" },
  { href: "/#projects", label: "Projects", targetId: "projects" },
  { href: "/#services", label: "Services", targetId: "services" },
  { href: "/#experience", label: "Experience", targetId: "experience" },
  { href: "/#achievements", label: "Achievements", targetId: "achievements" },
  { href: "/#contact", label: "Contact", targetId: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("/");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      if (pathname !== "/") return;

      // When near top of page, Home is active
      if (scrollY < 160) {
        setActiveSection("/");
        return;
      }

      // When scrolled near bottom of page, Contact is active
      if (window.innerHeight + Math.ceil(scrollY) >= document.documentElement.scrollHeight - 60) {
        setActiveSection("/#contact");
        return;
      }

      // Check sections from top down to highlight the current visible section
      const sections = [
        { id: "hero", href: "/" },
        { id: "about", href: "/#about" },
        { id: "skills", href: "/#skills" },
        { id: "projects", href: "/#projects" },
        { id: "services", href: "/#services" },
        { id: "experience", href: "/#experience" },
        { id: "achievements", href: "/#achievements" },
        { id: "contact", href: "/#contact" },
      ];

      const threshold = 240;
      let current = "/";
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            current = sec.href;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const matching = navItems.find((n) => n.href === `/${hash}` || n.href === hash);
      if (matching) {
        setActiveSection(matching.href);
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e, item) => {
    if (pathname === "/") {
      e.preventDefault();
      setMobileMenuOpen(false);

      if (item.href === "/" || item.targetId === "hero") {
        const heroEl = document.getElementById("hero");
        if (heroEl) {
          heroEl.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        window.history.pushState(null, "", "/");
        setActiveSection("/");
      } else {
        const targetId = item.targetId || item.href.replace("/#", "");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", item.href);
          setActiveSection(item.href);
        }
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${scrolled
          ? "bg-white/90 dark:bg-[#090D16]/90 backdrop-blur-md border-b border-slate-200/90 dark:border-white/[0.08] shadow-xs py-3.5"
          : "bg-white/70 dark:bg-[#090D16]/70 backdrop-blur-md border-b border-slate-200/50 dark:border-white/[0.05] py-4"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo onClick={(e) => handleNavClick(e, navItems[0])} />

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-[#0F172A]/90 border border-slate-200/90 dark:border-white/[0.08] p-1 rounded-full shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href && pathname === "/";
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${isActive
                      ? "text-indigo-600 dark:text-white bg-white dark:bg-indigo-600 font-semibold shadow-xs"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-white/[0.06]"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <a
              href="https://github.com/Kz-Himel"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-ghost text-xs py-2 px-3 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06]"
              aria-label="GitHub Profile"
            >
              <FiGithub size={15} />
              <span className="hidden lg:inline">GitHub</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download
              className="hidden sm:inline-flex btn-primary text-xs py-2 px-3.5 font-medium shadow-xs"
            >
              <FiDownload size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((p) => !p)}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/[0.08] rounded-xl bg-white dark:bg-[#0F172A] md:hidden shadow-xs cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-4 top-20 z-40 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/[0.1] rounded-2xl p-5 md:hidden shadow-2xl space-y-4"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href && pathname === "/";
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                        ? "text-indigo-600 dark:text-white bg-indigo-50 dark:bg-indigo-500/20 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                        }`}
                    >
                      <span>{item.label}</span>
                      <FiArrowRight size={14} className="text-slate-400 dark:text-slate-500" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-3">
              <a
                href="https://github.com/Kz-Himel"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-xs justify-center"
              >
                <FiGithub size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-primary w-full text-xs justify-center"
              >
                <FiDownload size={14} />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}