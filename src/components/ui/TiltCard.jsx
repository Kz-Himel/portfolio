"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
  children,
  className = "",
  strength = 10,
  glare = true,
  max = 12,
  style,
  onClick,
}) {
  const ref = useRef(null);
  const py = useMotionValue(0.5);
  const px = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, (v) => -(v - 0.5) * max * 2), {
    stiffness: 220,
    damping: 18,
    mass: 0.4,
  });
  const ry = useSpring(useTransform(px, (v) => (v - 0.5) * max * 2), {
    stiffness: 220,
    damping: 18,
    mass: 0.4,
  });
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
    py.set(Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)));
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        ...style,
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX: rx,
          rotateY: ry,
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          willChange: "transform",
        }}
        className="relative w-full h-full"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            style={{
              background: useTransform(
                [gx, gy],
                ([latestX, latestY]) =>
                  `radial-gradient(circle at ${latestX} ${latestY}, rgba(255,255,255,0.16), transparent 45%)`
              ),
            }}
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
