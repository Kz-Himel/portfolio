"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { SECTIONS } from "./sectionConfig";
import { clamp, lerp, damp } from "./utils";

function updateCamera(camera, state, delta) {
  const { bounds, mouse, target, desiredPos, desiredLook } = state;

  const b = bounds.current;

  if (!b.length) return;

  const scrollY = window.scrollY;

  let from = b[0];
  let to = b[b.length - 1];
  let t = 0;

  if (scrollY <= b[0].mid) {
    from = to = b[0];
  } else if (scrollY >= b[b.length - 1].mid) {
    from = to = b[b.length - 1];
  } else {
    for (let i = 0; i < b.length - 1; i++) {
      if (
        scrollY >= b[i].mid &&
        scrollY <= b[i + 1].mid
      ) {
        from = b[i];
        to = b[i + 1];

        t = clamp(
          (scrollY - from.mid) /
            (to.mid - from.mid || 1),
          0,
          1
        );

        break;
      }
    }
  }

  const a = from.config.camera;
  const z = to.config.camera;

  desiredPos.current.set(
    lerp(a.pos[0], z.pos[0], t),
    lerp(a.pos[1], z.pos[1], t),
    lerp(a.pos[2], z.pos[2], t)
  );

  desiredLook.current.set(
    lerp(a.look[0], z.look[0], t),
    lerp(a.look[1], z.look[1], t),
    lerp(a.look[2], z.look[2], t)
  );

  // Mouse parallax
  desiredPos.current.x += mouse.current.x * 0.25;
  desiredPos.current.y += -mouse.current.y * 0.15;

  // Smooth camera movement
  camera.position.x = damp(
    camera.position.x,
    desiredPos.current.x,
    4,
    delta
  );

  camera.position.y = damp(
    camera.position.y,
    desiredPos.current.y,
    4,
    delta
  );

  camera.position.z = damp(
    camera.position.z,
    desiredPos.current.z,
    4,
    delta
  );

  // Smooth look-at
  target.current.x = damp(
    target.current.x,
    desiredLook.current.x,
    4,
    delta
  );

  target.current.y = damp(
    target.current.y,
    desiredLook.current.y,
    4,
    delta
  );

  target.current.z = damp(
    target.current.z,
    desiredLook.current.z,
    4,
    delta
  );

  camera.lookAt(target.current);
}

export default function CameraRig() {
  const { camera } = useThree();

  const mouse = useRef({ x: 0, y: 0 });
  const bounds = useRef([]);

  const target = useRef(
    new THREE.Vector3(0, 0.2, 0)
  );

  const desiredPos = useRef(
    new THREE.Vector3()
  );

  const desiredLook = useRef(
    new THREE.Vector3()
  );

  const state = useRef({
    bounds,
    mouse,
    target,
    desiredPos,
    desiredLook,
  });

  useEffect(() => {
    const measure = () => {
      bounds.current = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);

        const rect = el
          ? el.getBoundingClientRect()
          : { top: 0, height: 0 };

        const top =
          rect.top + window.scrollY;

        return {
          mid: top + rect.height / 2,
          config: s,
        };
      });
    };

    measure();

    const ro = new ResizeObserver(measure);

    ro.observe(document.documentElement);

    const onMove = (e) => {
      mouse.current.x =
        (e.clientX / window.innerWidth) * 2 - 1;

      mouse.current.y =
        (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener(
      "resize",
      measure
    );

    window.addEventListener(
      "mousemove",
      onMove
    );

    return () => {
      ro.disconnect();

      window.removeEventListener(
        "resize",
        measure
      );

      window.removeEventListener(
        "mousemove",
        onMove
      );
    };
  }, []);

  useFrame((_, delta) => {
    updateCamera(
      camera,
      state.current,
      delta
    );
  });

  return null;
}