"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { SECTIONS } from "./sectionConfig";
import { clamp, lerp, damp } from "./utils";
import { scrollStage } from "./scrollStage";

function updateCamera(camera, state, delta) {
  const { bounds, mouse, target, desiredPos, desiredLook } = state;
  const b = bounds.current;
  if (!b.length) return;

  const scrollY = window.scrollY;

  let active = b[0];
  for (let i = 0; i < b.length; i++) {
    if (scrollY >= b[i].top) active = b[i];
  }

  const span = active.bottom - active.top || 1;
  const p = clamp((scrollY - active.top) / span, 0, 1);

  scrollStage.activeId = active.config.id;
  scrollStage.progress = p;

  const kfs = active.config.keyframes;
  let k0 = kfs[0];
  let k1 = kfs[kfs.length - 1];
  let t = 0;

  for (let i = 0; i < kfs.length - 1; i++) {
    if (p >= kfs[i].at && p <= kfs[i + 1].at) {
      k0 = kfs[i];
      k1 = kfs[i + 1];
      t = clamp((p - k0.at) / (k1.at - k0.at || 1), 0, 1);
      break;
    }
  }

  desiredPos.current.set(
    lerp(k0.pos[0], k1.pos[0], t),
    lerp(k0.pos[1], k1.pos[1], t),
    lerp(k0.pos[2], k1.pos[2], t)
  );
  desiredLook.current.set(
    lerp(k0.look[0], k1.look[0], t),
    lerp(k0.look[1], k1.look[1], t),
    lerp(k0.look[2], k1.look[2], t)
  );

  desiredPos.current.x += mouse.current.x * 0.2;
  desiredPos.current.y += -mouse.current.y * 0.12;

  camera.position.x = damp(camera.position.x, desiredPos.current.x, 4, delta);
  camera.position.y = damp(camera.position.y, desiredPos.current.y, 4, delta);
  camera.position.z = damp(camera.position.z, desiredPos.current.z, 4, delta);
  target.current.x = damp(target.current.x, desiredLook.current.x, 4, delta);
  target.current.y = damp(target.current.y, desiredLook.current.y, 4, delta);
  target.current.z = damp(target.current.z, desiredLook.current.z, 4, delta);
  camera.lookAt(target.current);

  if (k0.fov !== undefined && k1.fov !== undefined) {
    const fov = lerp(k0.fov, k1.fov, t);
    if (Math.abs(camera.fov - fov) > 0.01) {
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
  }
}

export default function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const bounds = useRef([]);
  const target = useRef(new THREE.Vector3(0, 0.2, 0));
  const desiredPos = useRef(new THREE.Vector3());
  const desiredLook = useRef(new THREE.Vector3());
  const state = useRef({ bounds, mouse, target, desiredPos, desiredLook });

  useEffect(() => {
    const measure = () => {
      bounds.current = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);
        const rect = el ? el.getBoundingClientRect() : { top: 0, height: 0 };
        const top = rect.top + window.scrollY;
        return { top, bottom: top + rect.height, config: s };
      });
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(document.documentElement);

    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("resize", measure);
    window.addEventListener("mousemove", onMove);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  useFrame((_, delta) => {
    updateCamera(camera, state.current, delta);
  });

  return null;
}