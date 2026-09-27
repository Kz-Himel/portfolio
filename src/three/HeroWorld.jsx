"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text3D, Sparkles } from "@react-three/drei";
import { MONO, brushedSilver, darkGraphite } from "./materials";

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

export default function HeroWorld() {
  return (
    <group>
      <Sparkles
        count={60}
        scale={[8, 4, 6]}
        size={2}
        speed={0.3}
        color={MONO.silver}
        opacity={0.35}
      />

      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={0.9}
          height={0.16}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.015}
          position={[-2.7, -0.3, -1]}
        >
          HIMEL
          <meshStandardMaterial {...brushedSilver} />
        </Text3D>
      </Float>

      <Float speed={0.8} rotationIntensity={0.6} floatIntensity={1} position={[2.4, 0.6, -1.5]}>
        <FloatingShape geometry={<icosahedronGeometry args={[0.5, 0]} />} material={brushedSilver} />
      </Float>

      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8} position={[1.6, -0.8, -2.5]}>
        <FloatingShape geometry={<torusGeometry args={[0.4, 0.14, 16, 64]} />} material={darkGraphite} speed={0.6} />
      </Float>

      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.5} position={[-1.8, 0.9, -2]}>
        <FloatingShape geometry={<sphereGeometry args={[0.28, 32, 32]} />} material={brushedSilver} speed={0.8} />
      </Float>
    </group>
  );
}