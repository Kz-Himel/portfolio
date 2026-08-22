"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

// Matches the exact --accent hex from globals.css for each mode.
const ACCENT_HEX = { dark: 0xc168d8, light: 0x9a34c7 };

export default function Background3D() {
  const canvasRef = useRef(null);
  const materialsRef = useRef([]);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let disposed = false;
    let renderer, camera, frameId, handleResize;
    let disposables = [];

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    import("three").then((THREE) => {
      if (disposed || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.z = 9;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const initialColor =
        (canvas.dataset.theme || resolvedTheme) === "light"
          ? ACCENT_HEX.light
          : ACCENT_HEX.dark;

      const group = new THREE.Group();

      const geo = new THREE.IcosahedronGeometry(3.4, 1);
      const wireGeo = new THREE.WireframeGeometry(geo);
      const mat = new THREE.LineBasicMaterial({
        color: initialColor,
        transparent: true,
        opacity: 0.22,
      });
      const wire = new THREE.LineSegments(wireGeo, mat);
      wire.position.set(3.4, 0.6, -2);
      group.add(wire);

      const geo2 = new THREE.OctahedronGeometry(1.3, 0);
      const wireGeo2 = new THREE.WireframeGeometry(geo2);
      const mat2 = new THREE.LineBasicMaterial({
        color: initialColor,
        transparent: true,
        opacity: 0.18,
      });
      const wire2 = new THREE.LineSegments(wireGeo2, mat2);
      wire2.position.set(-5.2, -1.8, -3);
      group.add(wire2);

      const dotCount = window.innerWidth < 768 ? 36 : 80;
      const positions = new Float32Array(dotCount * 3);
      for (let i = 0; i < dotCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 22;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
      }
      const dotGeo = new THREE.BufferGeometry();
      dotGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const dotMat = new THREE.PointsMaterial({
        color: initialColor,
        size: 0.05,
        transparent: true,
        opacity: 0.35,
      });
      const points = new THREE.Points(dotGeo, dotMat);
      group.add(points);

      scene.add(group);

      materialsRef.current = [mat, mat2, dotMat];
      disposables = [geo, wireGeo, mat, geo2, wireGeo2, mat2, dotGeo, dotMat];

      handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize);

      const animate = () => {
        if (!prefersReduced) {
          group.rotation.y += 0.0012;
          group.rotation.x += 0.00035;
          wire2.rotation.y -= 0.002;
          wire2.rotation.x += 0.0015;
        }
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };
      animate();
    });

    return () => {
      disposed = true;
      if (handleResize) window.removeEventListener("resize", handleResize);
      if (frameId) cancelAnimationFrame(frameId);
      disposables.forEach((d) => d.dispose && d.dispose());
      if (renderer) renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (canvasRef.current) canvasRef.current.dataset.theme = resolvedTheme || "dark";
    const hex = resolvedTheme === "light" ? ACCENT_HEX.light : ACCENT_HEX.dark;
    materialsRef.current.forEach((m) => m.color && m.color.setHex(hex));
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}