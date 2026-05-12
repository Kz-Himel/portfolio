"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiMessageCircle, FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { icon: <FaGithub size={18} />, href: "https://github.com/kamrulhimel", label: "GitHub" },
  { icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: <FiMessageCircle size={18} />, href: "https://wa.me/8801XXXXXXXXX", label: "WhatsApp" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Frontend Developer crafting modern, animated, and scalable web
              experiences.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, color: "#38BDF8" }}
                  className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-muted transition-colors hover:border-accent/20"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-text-main font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text-main font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-2 text-muted text-sm">
              <p>himel@example.com</p>
              <p>Bangladesh 🇧🇩</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs">Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Kamrul Himel. Built with Next.js & ❤️
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, boxShadow: "0 0 15px rgba(56,189,248,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-white/8 text-muted text-xs hover:text-accent hover:border-accent/20 transition-all"
          >
            <FiArrowUp size={13} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}