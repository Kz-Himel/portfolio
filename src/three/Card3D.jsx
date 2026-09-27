"use client";
"use no memo";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { scrollStage } from "./scrollStage";
import { clamp } from "./utils";

/**
 * Mounts real, interactive HTML onto an actual 3D anchor inside the
 * canvas — true perspective, occludes behind other meshes, idly
 * floats/tilts like a physical object, fully accessible DOM underneath.
 *
 * `sectionId` + `fadeRange` (e.g. [0.5, 0.9]) let a card fade out as the
 * camera flies past it deeper into its own section — pass `[end, start]`
 * (reversed) to fade IN instead.
 */
export default function Card3D({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  width = 480,
  scale = 0.0095,
  floatSpeed = 1,
  floatAmount = 0.08,
  tiltAmount = 0.02,
  sectionId,
  fadeRange,
  children,
}) {
  const groupRef = useRef(null);
  const wrapRef = useRef(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.elapsedTime * floatSpeed;
      groupRef.current.position.y = position[1] + Math.sin(t) * floatAmount;
      groupRef.current.rotation.z = rotation[2] + Math.sin(t * 0.6) * tiltAmount;
      groupRef.current.rotation.x = rotation[0] + Math.cos(t * 0.5) * tiltAmount * 0.6;
    }

    if (wrapRef.current && sectionId && fadeRange) {
      if (scrollStage.activeId !== sectionId) {
        wrapRef.current.style.opacity = "1";
        return;
      }
      const [a, b] = fadeRange;
      const op =
        a < b
          ? 1 - clamp((scrollStage.progress - a) / (b - a || 1), 0, 1)
          : clamp((scrollStage.progress - b) / (a - b || 1), 0, 1);
      wrapRef.current.style.opacity = String(op);
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <Html transform occlude="blending" scale={scale} style={{ width: `${width}px` }}>
        <div ref={wrapRef} style={{ width: `${width}px` }}>
          {children}
        </div>
      </Html>
    </group>
  );
}