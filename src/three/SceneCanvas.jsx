"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Lighting from "./Lighting";
import CameraRig from "./CameraRig";
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
          <Lighting />
          <CameraRig />
          {/* Phase 2+ mounts each section's world here: <HeroWorld />, <AboutWorld />, ... */}
        </Suspense>
      </Canvas>
    </div>
  );
}