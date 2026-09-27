"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { brushedSilver, darkGraphite, glowSilver } from "./materials";

function SpinningRing({ position, rotationSpeed, tilt, radius, tube, material }) {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * rotationSpeed;
  });

  return (
    <mesh ref={ref} position={position} rotation={tilt}>
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

export default function SkillsWorld() {
  const center = [-2, 0.2, -4];

  return (
    <group>
      <SpinningRing position={center} rotationSpeed={0.06} tilt={[Math.PI / 2.4, 0, 0]} radius={1.6} tube={0.02} material={brushedSilver} />
      <SpinningRing position={center} rotationSpeed={-0.09} tilt={[Math.PI / 3, 0.4, 0]} radius={2.1} tube={0.015} material={darkGraphite} />
      <SpinningRing position={center} rotationSpeed={0.05} tilt={[Math.PI / 1.8, -0.3, 0]} radius={1.1} tube={0.02} material={brushedSilver} />

      {Array.from({ length: 8 }).map((_, i) => (
        <OrbitNode
          key={i}
          center={center}
          radius={1.6 + (i % 3) * 0.3}
          offset={(i / 8) * Math.PI * 2}
          speed={0.15 + (i % 4) * 0.05}
          tiltY={0.6}
        />
      ))}
    </group>
  );
}