"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

export default function CosmicBackground() {
  const canvasRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothMX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothMY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const { scrollYProgress } = useScroll();

  const bgOrb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const bgOrb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgGridY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  // Neural network + star canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let nodes = [];
    let stars = [];
    let mX = 0.5, mY = 0.5;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 26000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.6,
      }));

      const starCount = Math.min(140, Math.floor((window.innerWidth * window.innerHeight) / 14000));
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.1 + 0.2,
        a: Math.random() * 0.7 + 0.15,
        s: Math.random() * 0.006 + 0.001,
        t: Math.random() * Math.PI * 2,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      mX = e.clientX / window.innerWidth;
      mY = e.clientY / window.innerHeight;
      mouseX.set(mX);
      mouseY.set(mY);
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Stars twinkle
      for (const s of stars) {
        s.t += s.s;
        const twinkle = 0.5 + 0.5 * Math.sin(s.t);
        const alpha = s.a * (0.4 + twinkle * 0.6);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 184, 255, ${alpha})`;
        ctx.fill();
      }

      // Node motion
      const mPullX = (mX - 0.5) * 18;
      const mPullY = (mY - 0.5) * 18;
      for (const n of nodes) {
        n.x += n.vx + mPullX * 0.02;
        n.y += n.vy + mPullY * 0.02;
        if (n.x < 0) n.x = window.innerWidth;
        if (n.x > window.innerWidth) n.x = 0;
        if (n.y < 0) n.y = window.innerHeight;
        if (n.y > window.innerHeight) n.y = 0;
      }

      // Neural connections
      const maxDist = 150;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.22;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(34, 211, 238, ${alpha})`);
            grad.addColorStop(0.5, `rgba(139, 92, 246, ${alpha * 0.9})`);
            grad.addColorStop(1, `rgba(236, 72, 153, ${alpha * 0.5})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // Draw node
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(167, 139, 250, 0.55)";
        ctx.fill();
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Base gradient */}
      <div className="absolute inset-0" style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #0A1328 0%, #050816 45%, #03060F 100%)"
      }} />

      {/* Parallax glow orbs */}
      <motion.div
        className="absolute -left-40 top-[10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-60"
        style={{
          y: bgOrb1Y,
          background:
            "radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute -right-40 top-[35%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-55"
        style={{
          y: bgOrb2Y,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute left-[40%] -bottom-40 w-[700px] h-[700px] rounded-full blur-[180px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%)",
        }}
      />

      {/* Mouse reactive light */}
      <motion.div
        className="absolute w-[480px] h-[480px] rounded-full blur-[120px] pointer-events-none opacity-40"
        style={{
          x: useTransform(smoothMX, (v) => `calc(${v * 100}vw - 240px)`),
          y: useTransform(smoothMY, (v) => `calc(${v * 100}vh - 240px)`),
          background:
            "radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(139,92,246,0.12) 40%, transparent 70%)",
        }}
      />

      {/* Floating grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          y: bgGridY,
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* Light beams */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
        <div
          className="absolute top-[-10%] left-[18%] w-[120px] h-[140vh] -skew-x-12 animate-flicker"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(34,211,238,0.8), transparent)",
          }}
        />
        <div
          className="absolute top-[-10%] right-[22%] w-[90px] h-[140vh] skew-x-6 animate-flicker"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(139,92,246,0.7), transparent)",
            animationDelay: "1.2s",
          }}
        />
      </div>

      {/* Neural / star canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />

      {/* Rising particles (simple CSS) */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-rise"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${(i * 7.3 + 5) % 100}%`,
              bottom: `-${Math.random() * 10}%`,
              background:
                i % 4 === 0
                  ? "rgba(236, 72, 153, 0.7)"
                  : i % 3 === 0
                    ? "rgba(139, 92, 246, 0.7)"
                    : "rgba(34, 211, 238, 0.75)",
              boxShadow: `0 0 6px ${
                i % 3 === 0
                  ? "rgba(139,92,246,0.7)"
                  : "rgba(34,211,238,0.7)"
              }`,
              animationDuration: `${10 + (i % 6) * 2}s`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(3,6,15,0.7) 100%)",
        }}
      />
    </div>
  );
}
