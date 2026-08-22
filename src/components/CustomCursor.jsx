"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CORNER = 8; // px, length of each bracket arm
const STROKE = 1.5;

export default function CustomCursor() {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 320, damping: 28, mass: 0.4 });
  const ringY = useSpring(dotY, { stiffness: 320, damping: 28, mass: 0.4 });

  useEffect(() => {
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touchDevice);
    setReady(true);
    if (touchDevice) return;

    document.body.classList.add("cursor-none-active");

    const move = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setVisible(true);
    };
    const over = (e) => {
      const target = e.target.closest?.(
        "a, button, input, textarea, select, [role='button'], .hover-target"
      );
      setHovering(!!target);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseleave", leave);

    return () => {
      document.body.classList.remove("cursor-none-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!ready || isTouch) return null;

  const size = hovering ? 46 : 28;

  const cornerBase = {
    position: "absolute",
    width: CORNER,
    height: CORNER,
    transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
  };

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[999] pointer-events-none w-1 h-1"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          background: "var(--accent)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      />

      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[998] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
        }}
      >
        <span
          style={{
            ...cornerBase,
            top: 0,
            left: 0,
            borderTop: `${STROKE}px solid var(--accent)`,
            borderLeft: `${STROKE}px solid var(--accent)`,
          }}
        />
        <span
          style={{
            ...cornerBase,
            top: 0,
            right: 0,
            borderTop: `${STROKE}px solid var(--accent)`,
            borderRight: `${STROKE}px solid var(--accent)`,
          }}
        />
        <span
          style={{
            ...cornerBase,
            bottom: 0,
            left: 0,
            borderBottom: `${STROKE}px solid var(--accent)`,
            borderLeft: `${STROKE}px solid var(--accent)`,
          }}
        />
        <span
          style={{
            ...cornerBase,
            bottom: 0,
            right: 0,
            borderBottom: `${STROKE}px solid var(--accent)`,
            borderRight: `${STROKE}px solid var(--accent)`,
          }}
        />
      </motion.div>
    </>
  );
}