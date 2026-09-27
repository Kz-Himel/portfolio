"use client";
"use no memo";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MONO } from "./materials";

export default function Lighting() {
  const rimRef = useRef();

  useFrame(({ clock }) => {
    if (rimRef.current) {
      rimRef.current.intensity = 1.4 + Math.sin(clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <>
      <fog attach="fog" args={[MONO.voidBlack, 6, 20]} />
      <ambientLight intensity={0.25} color={MONO.lightGray} />
      <directionalLight position={[4, 6, 4]} intensity={1.1} color={MONO.brightSilver} />
      <directionalLight ref={rimRef} position={[-5, 2, -4]} intensity={1.4} color={MONO.silver} />
      <pointLight position={[0, -3, 2]} intensity={0.3} color={MONO.ash} />
    </>
  );
}