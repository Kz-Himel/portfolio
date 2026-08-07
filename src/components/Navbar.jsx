"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Logo from "./Logo";
import MagneticButton from "./ui/MagneticButton";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (pathname !== "/") {
      const matched = navLinks.find(
        (l) => l.href.replace("/#", "/") === pathname
      );
      setActiveSection(matched ? matched.href : "");
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const opts = {
      root: null,
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0,
    };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(`/#${entry.target.id}`);
      });
    };
    const observer = new IntersectionObserver(handleIntersect, opts);
    navLinks.forEach((link) => {
      const id = link.href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl"
      >
        <div
          className={`relative flex items-center justify-between rounded-[1.4rem] px-3.5 py-2.5 transition-all duration-500 overflow-hidden ${
            scrolled
              ? "hud-panel shadow-[0_12px_60px_-10px_rgba(6,182,212,0.15)]"
              : "hud-panel"
          }`}
        >
          {/* Animated border sweep */}
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-[1.4rem] pointer-events-none"
            animate={
              scrolled
                ? {
                    boxShadow: [
                      "inset 0 0 0 1px rgba(6,182,212,0.2)",
                      "inset 0 0 0 1px rgba(139,92,246,0.25)",
                      "inset 0 0 0 1px rgba(6,182,212,0.2)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <Logo />

          <ul className="hidden lg:flex items-center gap-1 rounded-full p-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setActiveSection(link.href)}
                    className="relative px-3.5 py-2 rounded-full text-[12.5px] font-medium transition-colors duration-300 group block"
                    style={{
                      color: isActive ? "var(--text-main)" : "var(--text-soft)",
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(6,182,212,0.16), rgba(139,92,246,0.16))",
                          border: "1px solid rgba(6,182,212,0.28)",
                          boxShadow:
                            "0 0 20px rgba(6,182,212,0.12), inset 0 0 20px rgba(139,92,246,0.06)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span
                        className={`inline-block w-1 h-1 rounded-full transition-all ${
                          isActive
                            ? "bg-cyan-neon shadow-[0_0_6px_var(--cyan-glow)]"
                            : "bg-transparent group-hover:bg-violet-neon/60"
                        }`}
                      />
                      {link.label}
                    </span>
                    {!isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-gradient-to-r from-cyan-neon via-violet to-magenta-glow transition-all duration-300 group-hover:w-3/4 rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <MagneticButton
              as="a"
              href="https://github.com/Kz-Himel"
              target="_blank"
              rel="noopener noreferrer"
              strength={20}
              className="btn-primary flex items-center gap-2 px-4.5 py-2.25 rounded-[0.8rem] text-[12px]"
              whileHover={{ scale: 1.03 }}
            >
              <FaGithub size={14} />
              <span className="font-semibold">GitHub</span>
            </MagneticButton>
          </div>

          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="lg:hidden relative z-10 rounded-xl p-2 text-text-soft transition-colors hover:text-cyan-neon"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hud-panel fixed left-1/2 -translate-x-1/2 top-[78px] z-40 w-[calc(100%-1.5rem)] max-w-6xl rounded-[1.2rem] border border-cyan/20 px-5 py-5 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.href);
                        setMenuOpen(false);
                      }}
                      className={`flex items-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-cyan/15 to-violet/15 text-cyan-neon border border-cyan/25"
                          : "text-text-soft hover:bg-white/[0.04] hover:text-text-main"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
                className="pt-2"
              >
                <a
                  href="https://github.com/Kz-Himel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold w-full"
                >
                  <FaGithub size={14} />
                  GitHub
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}