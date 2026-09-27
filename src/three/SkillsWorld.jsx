"use client";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { brushedSilver, darkGraphite, glowSilver } from "./materials";
import { SECTIONS } from "./sectionConfig";
import Card3D from "./Card3D";

const Z = SECTIONS.find((s) => s.id === "skills").stageZ;

function SpinningRing({ center, rotationSpeed, tilt, radius, tube, material }) {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * rotationSpeed;
  });

  return (
    <mesh ref={ref} position={center} rotation={tilt}>
      <torusGeometry args={[radius, tube, 12, 64]} />
      <meshStandardMaterial {...material} />
    </mesh>
  );
}

function OrbitNode({ center, radius, offset, speed, tiltY = 0 }) {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed + offset;
    ref.current.position.x = center[0] + Math.cos(t) * radius;
    ref.current.position.y = center[1] + Math.sin(t) * radius * Math.sin(tiltY);
    ref.current.position.z = center[2] + Math.sin(t) * radius * Math.cos(tiltY);
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.12, 0]} />
      <meshStandardMaterial {...glowSilver} />
    </mesh>
  );
}

const categories = [
  { id: "all", label: "All" },
  { id: "language", label: "Language" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools" },
];

const skills = [
  { name: "Next.js", level: 92, cat: "frontend" },
  { name: "React.js", level: 95, cat: "frontend" },
  { name: "TypeScript", level: 82, cat: "frontend" },
  { name: "Tailwind CSS", level: 93, cat: "frontend" },
  { name: "JavaScript", level: 90, cat: "frontend" },
  { name: "Framer Motion", level: 86, cat: "frontend" },
  { name: "HTML5", level: 96, cat: "frontend" },
  { name: "CSS3", level: 94, cat: "frontend" },
  { name: "Node.js", level: 84, cat: "backend" },
  { name: "Express.js", level: 86, cat: "backend" },
  { name: "REST APIs", level: 88, cat: "backend" },
  { name: "JWT Auth", level: 80, cat: "backend" },
  { name: "Better Auth", level: 78, cat: "backend" },
  { name: "MongoDB", level: 85, cat: "database" },
  { name: "Mongoose", level: 82, cat: "database" },
  { name: "PostgreSQL", level: 68, cat: "database" },
  { name: "Git · GitHub", level: 90, cat: "tools" },
  { name: "Vercel · Netlify", level: 92, cat: "tools" },
  { name: "Claude", level: 80, cat: "tools" },
];

const categoryBoxes = [
  { label: "Language", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Better Auth", "JWT"] },
  { label: "Database", items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma"] },
  { label: "Tools", items: ["Git", "GitHub", "Vercel", "VS Code", "Claude"] },
];

function hexPos(index, total, radius) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: Number((50 + radius * Math.cos(angle)).toFixed(4)),
    y: Number((50 + radius * Math.sin(angle)).toFixed(4)),
  };
}

function SkillsCardContent() {
  const [activeCat, setActiveCat] = useState("all");
  const filtered = activeCat === "all" ? skills : skills.filter((s) => s.cat === activeCat);
  const hexSkills = activeCat === "all" ? skills.slice(0, 13) : filtered;

  return (
    <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md p-6 shadow-2xl">
      <div className="flex flex-wrap gap-3 mb-6 border-b border-border/60 pb-3">
        {categories.map((c) => {
          const active = activeCat === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={`relative font-mono text-[11px] px-2.5 py-1 rounded-md transition-all ${
                active ? "text-accent bg-accent/10 font-medium" : "text-text-soft hover:text-text-main"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
        <div className="sm:col-span-7">
          <div className="relative aspect-square w-full max-w-[320px] mx-auto">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex flex-col items-center justify-center z-10 bg-black/60 rounded-full border border-accent/40">
              <span className="font-mono text-[7px] uppercase tracking-widest text-text-muted">Core</span>
              <span className="font-mono text-sm font-bold text-accent tracking-tight">STACK</span>
            </div>

            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {hexSkills.map((s, i) => {
                const pos = hexPos(i, hexSkills.length, 36);
                return (
                  <motion.line
                    key={`l-${s.name}`}
                    x1={50} y1={50} x2={pos.x} y2={pos.y}
                    stroke="var(--border)" strokeWidth="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.02 }}
                  />
                );
              })}
            </svg>

            {hexSkills.map((s, i) => {
              const pos = hexPos(i, hexSkills.length, 36);
              return (
                <div
                  key={s.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center font-mono text-[8px] font-medium text-text-main group-hover:border-accent group-hover:text-accent transition-all">
                    <span className="text-center px-0.5 truncate leading-tight">{s.name}</span>
                  </div>
                  <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-[60]">
                    <div className="bg-black/80 border border-white/10 px-2 py-1 rounded-lg whitespace-nowrap">
                      <div className="font-mono text-[8px] uppercase tracking-wider text-accent">{s.cat}</div>
                      <div className="font-mono text-[9px] text-text-muted">{s.level}% proficiency</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="sm:col-span-5 space-y-2.5">
          {categoryBoxes.map((box) => (
            <div key={box.label} className="p-3 rounded-lg border border-white/10 bg-black/30">
              <span className="font-mono font-semibold text-[10px] uppercase tracking-wider text-accent">
                {box.label}
              </span>
              <div className="flex flex-wrap gap-1 mt-1.5">
                {box.items.map((item) => (
                  <span key={item} className="px-1.5 py-0.5 text-[9px] font-mono bg-black/40 text-text-main border border-white/10 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsWorld() {
  const center = [-2.6, 0.9, -2.6];

  return (
    <group position={[0, 0, Z]}>
      <SpinningRing center={center} rotationSpeed={0.06} tilt={[Math.PI / 2.4, 0, 0]} radius={1.4} tube={0.02} material={brushedSilver} />
      <SpinningRing center={center} rotationSpeed={-0.09} tilt={[Math.PI / 3, 0.4, 0]} radius={1.8} tube={0.015} material={darkGraphite} />

      {Array.from({ length: 6 }).map((_, i) => (
        <OrbitNode key={i} center={center} radius={1.4 + (i % 3) * 0.25} offset={(i / 6) * Math.PI * 2} speed={0.15 + (i % 4) * 0.05} tiltY={0.6} />
      ))}

      <Card3D position={[0.3, 0, 0]} width={680} scale={0.0078} floatAmount={0.05} tiltAmount={0.012}>
        <SkillsCardContent />
      </Card3D>
    </group>
  );
}