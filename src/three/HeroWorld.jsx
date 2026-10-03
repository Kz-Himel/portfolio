"use client";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text3D, Sparkles } from "@react-three/drei";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiCopy, FiCheck } from "react-icons/fi";
import { MONO, brushedSilver, darkGraphite } from "./materials";
import { SECTIONS } from "./sectionConfig";
import { scrollStage } from "./scrollStage";
import Card3D from "./Card3D";

const Z = SECTIONS.find((s) => s.id === "hero").stageZ;

function FloatingShape({ geometry, material, speed = 1 }) {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15 * speed;
    ref.current.rotation.y += delta * 0.22 * speed;
  });

  return (
    <mesh ref={ref}>
      {geometry}
      <meshStandardMaterial {...material} />
    </mesh>
  );
}

// The centerpiece: grows as the camera approaches (progress 0 -> 0.75),
// so the letters feel physically huge right as the camera passes them —
// on top of whatever growth perspective alone already gives from the
// camera dolly defined in sectionConfig.
function HeroTitle() {
  const ref = useRef(null);

  useFrame(() => {
    if (!ref.current) return;
    if (scrollStage.activeId !== "hero") return;
    const grow = Math.min(scrollStage.progress / 0.75, 1);
    ref.current.scale.setScalar(1 + grow * 1.4);
  });

  return (
    <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.3}>
      <group ref={ref} position={[0, 0.5, Z]}>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={1}
          height={0.18}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.015}
          position={[-3.4, 0, 0]}
        >
          Kz Himel
          <meshStandardMaterial {...brushedSilver} />
        </Text3D>
      </group>
    </Float>
  );
}

function HeroCardContent() {
  const [copied, setCopied] = useState(false);
  const email = "himel.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md p-7 shadow-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        <div className="sm:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-accent">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Available for new opportunities</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main leading-tight">
            Khayruzzaman Himel
          </h1>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-text-muted">
            Fullstack Developer
          </p>
          <p className="text-text-soft text-sm leading-relaxed">
            I&apos;m a fullstack developer and creative technologist based in Bangladesh, building robust, accessible web applications that bridge design and engineering.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link href="/#contact" className="btn-primary flex items-center gap-2">
              <span>Available for hire</span>
              <FiArrowRight size={15} />
            </Link>
            <button onClick={handleCopyEmail} className="btn-ghost flex items-center gap-2">
              {copied ? <FiCheck size={15} className="text-text-main" /> : <FiCopy size={15} />}
              <span>{copied ? "Copied Email!" : "Copy email"}</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-5 border-t border-border mt-4 max-w-sm">
            <div>
              <h3 className="text-xl font-bold text-text-main">04+</h3>
              <p className="text-[10px] text-text-muted mt-0.5 uppercase tracking-wider">Years Exp.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-main">35+</h3>
              <p className="text-[10px] text-text-muted mt-0.5 uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-main">100%</h3>
              <p className="text-[10px] text-text-muted mt-0.5 uppercase tracking-wider">Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/profile.png"
              alt="Khayruzzaman Himel"
              fill
              sizes="220px"
              className="object-cover object-top grayscale contrast-110"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroWorld() {
  return (
    <group>
      <Sparkles count={80} scale={[10, 5, 24]} size={2} speed={0.35} color={MONO.silver} opacity={0.3} position={[0, 0, Z - 8]} />

      <HeroTitle />

      <Float speed={0.8} rotationIntensity={0.6} floatIntensity={1} position={[3.2, 1, Z - 2.5]}>
        <FloatingShape geometry={<icosahedronGeometry args={[0.4, 0]} />} material={brushedSilver} />
      </Float>
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8} position={[-3.4, -0.7, Z - 3.5]}>
        <FloatingShape geometry={<torusGeometry args={[0.35, 0.12, 16, 64]} />} material={darkGraphite} speed={0.6} />
      </Float>

      {/*
        Stays readable while the camera is still approaching, then fades
        out (0.55 -> 0.85) before the camera "passes through" the huge
        title — so it never overlaps the fly-through moment.
      */}
      <Card3D
        position={[0, -0.3, Z + 1]}
        width={640}
        scale={0.0082}
        floatAmount={0.05}
        tiltAmount={0.012}
        sectionId="hero"
        fadeRange={[0.55, 0.85]}
      >
        <HeroCardContent />
      </Card3D>
    </group>
  );
}