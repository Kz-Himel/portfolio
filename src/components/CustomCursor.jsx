"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  // High performance exact point tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Fast & natural cursor tracking physics (Zero lag)
  const cursorX = useSpring(mouseX, { stiffness: 800, damping: 35, mass: 0.05 });
  const cursorY = useSpring(mouseY, { stiffness: 800, damping: 35, mass: 0.05 });

  useEffect(() => {
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touchDevice);
    setReady(true);
    if (touchDevice) return;

    document.body.classList.add("cursor-none-active");

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      // Fast check for interactive elements directly under the mouse tip
      const target = e.target.closest?.(
        "a, button, input, textarea, select, [role='button'], .hover-target, label, summary"
      );
      setHovering(!!target);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("cursor-none-active");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (!ready || isTouch) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
    >
      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          scale: hovering ? 1.25 : 1,
          rotate: hovering ? 25 : 15, // Corrected direction to point straight up
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
        style={{
          transformOrigin: "top left", // Ensure click point stays exact at the tip
        }}
      >
        {/* Your original perfect arrow shape */}
        <path
          d="M3 3L10.07 19.97L13.58 12.58L20.97 9.07L3 3Z"
          fill="transparent"
          stroke="var(--accent, #000)"
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}