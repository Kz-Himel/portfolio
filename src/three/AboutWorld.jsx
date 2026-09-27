"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { FiUser, FiMapPin, FiBriefcase, FiBookOpen, FiCompass } from "react-icons/fi";
import { brushedSilver, darkGraphite } from "./materials";
import { SECTIONS } from "./sectionConfig";
import Card3D from "./Card3D";

const Z = SECTIONS.find((s) => s.id === "about").stageZ;

function RotatingCore({ center }) {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.y += delta * 0.12;
  });

  return (
    <mesh ref={ref} position={center} scale={1.1}>
      <icosahedronGeometry args={[0.9, 1]} />
      <meshStandardMaterial {...brushedSilver} />
    </mesh>
  );
}

function OrbitNode({ center, radius, offset, speed, size = 0.09 }) {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed + offset;
    ref.current.position.x = center[0] + Math.cos(t) * radius;
    ref.current.position.z = center[2] + Math.sin(t) * radius;
    ref.current.position.y = center[1] + Math.sin(t * 1.3) * 0.3;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial {...darkGraphite} />
    </mesh>
  );
}

function AboutCardContent() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md p-7 shadow-2xl grid grid-cols-1 sm:grid-cols-12 gap-6">
      <div className="sm:col-span-7 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-text-main leading-tight">
          Crafting digital experiences at the intersection of engineering and design.
        </h2>
        <div className="space-y-3 text-text-soft text-xs sm:text-sm leading-relaxed">
          <p>
            I am a passionate Full-Stack Developer specializing in the MERN stack and modern web technologies. My approach combines clean, maintainable code architecture with polished, fluid user interfaces.
          </p>
          <p>
            Over the past few years, I&rsquo;ve worked on a diverse range of projects—from dynamic SaaS platforms and AI-driven workflow tools to high-performance marketing sites.
          </p>
        </div>
      </div>

      <div className="sm:col-span-5">
        <h3 className="text-sm font-bold text-text-main font-mono mb-3 pb-2 border-b border-border flex items-center gap-2">
          <FiCompass className="text-accent" /> At a Glance
        </h3>
        <ul className="space-y-3 text-xs">
          <li className="flex items-center justify-between">
            <span className="text-text-muted flex items-center gap-2"><FiBriefcase size={13} className="text-accent" /> Role</span>
            <span className="font-semibold text-text-main">Fullstack Developer</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-text-muted flex items-center gap-2"><FiMapPin size={13} className="text-accent" /> Location</span>
            <span className="font-semibold text-text-main">Bangladesh</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-text-muted flex items-center gap-2"><FiUser size={13} className="text-accent" /> Focus</span>
            <span className="font-semibold text-text-main">MERN &amp; Next.js</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-text-muted flex items-center gap-2"><FiBookOpen size={13} className="text-accent" /> Experience</span>
            <span className="font-semibold text-text-main">04+ Years</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function AboutWorld() {
  const coreCenter = [2.6, 0.9, -2.4];

  return (
    <group position={[0, 0, Z]}>
      <RotatingCore center={coreCenter} />
      <OrbitNode center={coreCenter} radius={1.5} offset={0} speed={0.25} />
      <OrbitNode center={coreCenter} radius={1.5} offset={Math.PI / 2} speed={0.2} />
      <OrbitNode center={coreCenter} radius={1.5} offset={Math.PI} speed={0.3} />
      <OrbitNode center={coreCenter} radius={1.5} offset={(3 * Math.PI) / 2} speed={0.22} />

      <Card3D position={[-0.3, 0, 0]} width={620} scale={0.0082} floatAmount={0.05} tiltAmount={0.012}>
        <AboutCardContent />
      </Card3D>
    </group>
  );
}