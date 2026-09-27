import { MONO } from "./materials";

/**
 * One entry per "world" in the cinematic journey.
 * `id` MUST match the corresponding section's DOM id in the page markup.
 * Camera keyframes are placeholders — each phase will tune its own entry
 * once that section's real 3D content exists.
 */
export const SECTIONS = [
  { id: "hero", camera: { pos: [0, 0.4, 6], look: [0, 0.2, 0] }, fog: { color: MONO.voidBlack, near: 6, far: 18 } },
  { id: "about", camera: { pos: [-2.2, 0.6, 5], look: [0, 0, 0] }, fog: { color: MONO.softBlack, near: 5, far: 16 } },
  { id: "skills", camera: { pos: [2.4, 0.2, 5.5], look: [0, 0, 0] }, fog: { color: MONO.softBlack, near: 5, far: 16 } },
  { id: "projects", camera: { pos: [0, 0.8, 7], look: [0, 0, -1] }, fog: { color: MONO.voidBlack, near: 7, far: 20 } },
  { id: "experience", camera: { pos: [-2, 0.4, 5.5], look: [0, 0, 0] }, fog: { color: MONO.softBlack, near: 5, far: 16 } },
  { id: "services", camera: { pos: [1.6, 0.3, 5.5], look: [0, 0, 0] }, fog: { color: MONO.softBlack, near: 5, far: 16 } },
  { id: "achievements", camera: { pos: [-1.6, 0.5, 5.5], look: [0, 0, 0] }, fog: { color: MONO.softBlack, near: 5, far: 16 } },
  { id: "contact", camera: { pos: [0, 0.3, 4.5], look: [0, 0, 0] }, fog: { color: MONO.voidBlack, near: 4, far: 14 } },
];