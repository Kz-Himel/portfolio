"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

export default function MagneticButton({
  children,
  className = "",
  strength = 28,
  onClick,
  href,
  type = "button",
  as = "button",
  ariaLabel,
  target,
  rel,
  whileTap,
  whileHover,
}) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.3 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const handleMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const relX = e.clientX - (r.left + r.width / 2);
    const relY = e.clientY - (r.top + r.height / 2);
    mx.set((relX / (r.width / 2)) * strength * 0.5);
    my.set((relY / (r.height / 2)) * strength * 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const isLink = href && (as === Link || as === "a" || typeof as === "function");


  const MotionComponent = isLink ? motion.create(Link) : motion[typeof as === "string" ? as : "button"];

  return (
    <MotionComponent
      ref={ref}
      type={!isLink && as === "button" ? type : undefined}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: tx, y: ty, willChange: "transform" }}
      whileHover={whileHover ?? { scale: 1.02 }}
      whileTap={whileTap ?? { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 20 }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}