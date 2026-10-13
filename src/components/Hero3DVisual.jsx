"use client";

import { useRef, useState, useEffect, useSyncExternalStore, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function GeometricCore({ hovered }) {
  const meshRef = useRef();
  const innerRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMouseMove = (e) => {
      if (reducedMotion.current) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.current = { x, y };
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    if (!reducedMotion.current) {
      // Gentle idle rotation + subtle cursor tilt
      const targetRotX = mousePos.current.y * 0.4 + state.clock.elapsedTime * 0.15;
      const targetRotY = mousePos.current.x * 0.5 + state.clock.elapsedTime * 0.2;

      meshRef.current.rotation.x = THREE.MathUtils.damp(meshRef.current.rotation.x, targetRotX, 3, delta);
      meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, targetRotY, 3, delta);

      if (innerRef.current) {
        innerRef.current.rotation.x = -state.clock.elapsedTime * 0.25;
        innerRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      }
    }
  });

  return (
    <group>
      {/* Outer structural geometric frame */}
      <mesh ref={meshRef} scale={hovered ? 1.05 : 1}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#818CF8"
          roughness={0.2}
          metalness={0.8}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Inner subtle core */}
      <mesh ref={innerRef} scale={0.75}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#6366F1"
          roughness={0.3}
          metalness={0.9}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Center jewel node */}
      <mesh scale={0.25}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial color="#A5B4FC" wireframe={false} />
      </mesh>
    </group>
  );
}

function FallbackGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-36 h-36 rounded-full border border-indigo-500/20 flex items-center justify-center animate-pulse">
        <div className="w-24 h-24 rounded-full border border-indigo-400/40" />
      </div>
    </div>
  );
}

export default function Hero3DVisual() {
  const [hovered, setHovered] = useState(false);
  const mounted = useIsClient();

  if (!mounted) {
    return <FallbackGraphic />;
  }

  return (
    <div
      className="relative w-full aspect-square max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto cursor-grab active:cursor-grabbing"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      aria-hidden="true"
    >
      {/* Subtle backdrop glow */}
      <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      {/* Canvas */}
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 4]} intensity={1.2} color="#E0E7FF" />
        <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#6366F1" />
        <Suspense fallback={null}>
          <GeometricCore hovered={hovered} />
        </Suspense>
      </Canvas>
    </div>
  );
}
