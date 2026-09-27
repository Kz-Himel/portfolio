"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Lighting from "./Lighting";
import CameraRig from "./CameraRig";
import HeroWorld from "./HeroWorld";
import AboutWorld from "./AboutWorld";
import SkillsWorld from "./SkillsWorld";
import { MONO } from "./materials";

export default function SceneCanvas() {
  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ fov: 42, position: [0, 0.4, 6] }}
        style={{ background: MONO.voidBlack }}
      >
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <Lighting />
          <CameraRig />
          <HeroWorld />
          <AboutWorld />
          <SkillsWorld />
          {/* Phase 3+ mounts each next section's world here */}
        </Suspense>
      </Canvas>
    </div>
  );
}