"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Logo from "./Logo";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    // 1. Navbar background change on scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // 2. Dynamic active section highlighting on scroll
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // triggers active state when section enters upper-middle view
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe each section with matching IDs
    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2.5 glass border-b border-white/5 shadow-lg shadow-black/20"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setActiveSection(link.href)}
                    className={`relative px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-300 group ${
                      isActive
                        ? "text-accent"
                        : "text-muted hover:text-text-main"
                    }`}
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg border border-accent/20 bg-accent/10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">{link.label}</span>

                    {!isActive && (
                      <span className="absolute bottom-0.5 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-4/5" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Github Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Kz-Himel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(56,189,248,0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(56,189,248,0)",
                    "0 0 14px rgba(56,189,248,0.15)",
                    "0 0 0px rgba(56,189,248,0)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-bg font-semibold text-[13px] transition-all duration-300"
              >
                <FaGithub size={14} />
                Github
              </motion.button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-lg p-2 text-muted transition-colors hover:text-text-main md:hidden"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass fixed left-0 right-0 top-[56px] z-40 border-b border-white/5 px-6 py-5 md:hidden"
          >
            <ul className="flex flex-col gap-1.5">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href;

                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.href);
                        handleCloseMenu();
                      }}
                      className={`flex items-center rounded-lg px-4 py-2.5 text-[13px] font-medium transition-all ${
                        isActive
                          ? "border border-accent/20 bg-accent/10 text-accent"
                          : "text-muted hover:bg-white/5 hover:text-text-main"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}

              {/* Github Mobile */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <a
                  href="https://github.com/Kz-Himel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg font-semibold text-[13px] transition-all duration-300 w-full justify-center"
                  >
                    <FaGithub size={14} />
                    Github
                  </motion.button>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}