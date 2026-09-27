"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import { MONO, brushedSilver, darkGraphite } from "./materials";

function RotatingCore() {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.y += delta * 0.12;
  });

  return (
    <mesh ref={ref} position={[1.8, 0.1, -3]} scale={1.3}>
      <icosahedronGeometry args={[0.9, 1]} />
      <meshStandardMaterial {...brushedSilver} />
    </mesh>
  );
}

function OrbitNode({ radius, offset, speed, size = 0.09 }) {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed + offset;
    ref.current.position.x = 1.8 + Math.cos(t) * radius;
    ref.current.position.z = -3 + Math.sin(t) * radius;
    ref.current.position.y = 0.1 + Math.sin(t * 1.3) * 0.3;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial {...darkGraphite} />
    </mesh>
  );
}

export default function AboutWorld() {
  return (
    <group>
      <RotatingCore />

      {/* Four orbiting nodes echo the four "At a Glance" facts in the HTML panel */}
      <OrbitNode radius={1.9} offset={0} speed={0.25} />
      <OrbitNode radius={1.9} offset={Math.PI / 2} speed={0.2} />
      <OrbitNode radius={1.9} offset={Math.PI} speed={0.3} />
      <OrbitNode radius={1.9} offset={(3 * Math.PI) / 2} speed={0.22} />

      <Float speed={0.6} floatIntensity={0.4} rotationIntensity={0}>
        <Text
          position={[0.4, 0.6, -6]}
          fontSize={1.4}
          color={MONO.ash}
          fillOpacity={0.5}
          anchorX="center"
          anchorY="middle"
        >
          ABOUT
        </Text>
      </Float>
    </group>
  );
}