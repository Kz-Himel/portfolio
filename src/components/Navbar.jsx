"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { FiMenu, FiX, FiSun, FiMoon, FiGithub } from "react-icons/fi";
import Logo from "./Logo";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#contact", label: "Contact" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle light / dark theme"
      className="flex items-center justify-center w-8 h-8 text-text-soft hover:text-accent transition-colors rounded-lg border border-border bg-panel"
    >
      {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
    </button>
  );
}

function GithubButton() {
  return (
    <a
      href="https://github.com/Kz-Himel"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 text-text-soft hover:text-text-main transition-colors text-xs font-mono border border-border rounded-lg bg-panel hover:border-accent"
      aria-label="GitHub Profile"
    >
      <FiGithub size={15} />
      <span>GitHub</span>
    </a>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-md border-b border-border shadow-xs py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-7 bg-panel border border-border px-5 py-2 rounded-full shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setActiveSection(link.href)}
                    className={`text-xs font-medium transition-colors ${
                      isActive
                        ? "text-accent font-semibold"
                        : "text-text-soft hover:text-text-main"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Actions (Theme + GitHub) */}
          <div className="hidden lg:flex items-center gap-2">
            <GithubButton />
            <ThemeToggle />
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="p-2 text-text-soft hover:text-text-main transition-colors border border-border rounded-lg bg-panel"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-4 top-[75px] z-40 bg-panel border border-border p-5 lg:hidden shadow-xl rounded-xl"
          >
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.href);
                        setMenuOpen(false);
                      }}
                      className={`block text-sm py-2 px-3 rounded-lg transition-colors ${
                        isActive
                          ? "text-accent font-semibold bg-accent-soft"
                          : "text-text-soft hover:text-text-main hover:bg-bg"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <div className="pt-2 border-t border-border mt-1 flex items-center justify-between">
                <span className="text-xs text-text-muted">Socials</span>
                <a
                  href="https://github.com/Kz-Himel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-accent flex items-center gap-1.5"
                >
                  <FiGithub size={14} /> @Kz-Himel
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}