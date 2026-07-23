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
  { icon: <FaGithub size={16} />, href: "https://github.com/Kz-Himel", label: "GitHub" },
  { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/khayruzzaman-himel/", label: "LinkedIn" },
  { icon: <FiMessageCircle size={16} />, href: "https://wa.me/8801307161360", label: "WhatsApp" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 mt-8 md:mt-12">
      {/* Aligned with Navbar & Other Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          
          {/* Brand */}
          <div className="space-y-3">
            <Logo />
            <p className="text-muted text-xs leading-relaxed max-w-xs">
              Frontend Developer crafting modern, animated, and scalable web experiences.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  className="w-8 h-8 rounded-lg glass border border-white/8 flex items-center justify-center text-muted transition-colors hover:text-accent hover:border-accent/20"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-text-main font-semibold text-xs uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-xs hover:text-accent transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text-main font-semibold text-xs uppercase tracking-wider mb-3">
              Contact
            </h4>
            <div className="space-y-1.5 text-muted text-xs">
              <p>kzhimel129@gmail.com</p>
              <p>Bangladesh 🇧🇩</p>
              <div className="flex items-center gap-2 pt-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-[11px] font-medium">Available for work</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5">
          <p className="text-muted text-[11px]">
            © {new Date().getFullYear()} Kz Himel. Built with Next.js & ❤️
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg glass border border-white/8 text-muted text-[11px] hover:text-accent hover:border-accent/20 transition-all cursor-pointer"
          >
            <FiArrowUp size={12} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}