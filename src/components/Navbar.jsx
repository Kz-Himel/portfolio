"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import Logo from "./Logo";

const navLinks = [
  { href: "/#hero", label: "#home" },
  { href: "/#about", label: "#about" },
  { href: "/#skills", label: "#skills" },
  { href: "/#projects", label: "#projects" },
  { href: "/#experience", label: "#experience" },
  { href: "/#achievements", label: "#achievements" },
  { href: "/#contact", label: "#contact" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // reserve the slot so layout doesn't jump on hydration
    return <div className="w-8 h-8" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle light / dark theme"
      className="flex items-center justify-center w-8 h-8 text-text-soft hover:text-accent transition-colors"
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}

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
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 bg-bg transition-colors duration-300 ${
          scrolled ? "border-b border-border" : "border-b border-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Logo />

          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setActiveSection(link.href)}
                    className={`font-mono text-[13px] transition-colors ${
                      isActive
                        ? "text-text-main font-semibold"
                        : "text-text-soft hover:text-text-main"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center">
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="p-2 text-text-soft hover:text-text-main transition-colors"
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
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="box fixed left-4 right-4 top-[64px] z-40 bg-bg px-5 py-5 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.href);
                        setMenuOpen(false);
                      }}
                      className={`block font-mono text-sm py-2.5 transition-colors ${
                        isActive
                          ? "text-accent font-semibold"
                          : "text-text-soft hover:text-text-main"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}