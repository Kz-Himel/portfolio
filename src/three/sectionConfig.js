import { MONO } from "./materials";

// Each section owns a "stage" along -Z, AND its own multi-waypoint
// camera path (keyframes, keyed by local progress `at` 0..1 through
// that section's own scroll range). This is what makes "camera
// approaches, text grows huge, camera passes through, next world
// emerges" possible within a single section, not just a straight
// lerp between two fixed points.
const STEP = 9;
const stage = (index) => -index * STEP;

export const SECTIONS = [
  {
    id: "hero",
    stageZ: stage(0),
    keyframes: [
      { at: 0, pos: [0, 0.3, stage(0) + 14], look: [0, 0.3, stage(0)], fov: 32 },
      { at: 0.4, pos: [0, 0.3, stage(0) + 3], look: [0, 0.3, stage(0) - 1], fov: 46 },
      { at: 0.75, pos: [0, 0.25, stage(0) - 2], look: [0, 0.2, stage(0) - 7], fov: 54 },
      { at: 1, pos: [0, 0.2, stage(0) - 8], look: [0, 0.1, stage(1)], fov: 42 },
    ],
    fog: { color: MONO.voidBlack, near: 4, far: 14 },
  },
  {
    id: "about",
    stageZ: stage(1),
    keyframes: [
      { at: 0, pos: [-0.4, 0.4, stage(1) + 6], look: [-0.2, 0.1, stage(1)], fov: 42 },
      { at: 1, pos: [-0.4, 0.3, stage(1) - 3], look: [0.1, 0.1, stage(2)], fov: 42 },
    ],
    fog: { color: MONO.softBlack, near: 4, far: 12 },
  },
  {
    id: "skills",
    stageZ: stage(2),
    keyframes: [
      { at: 0, pos: [0.4, 0.3, stage(2) + 6], look: [0.1, 0.1, stage(2)], fov: 42 },
      { at: 1, pos: [0.4, 0.3, stage(2) - 3], look: [0, 0.1, stage(3)], fov: 42 },
    ],
    fog: { color: MONO.softBlack, near: 4, far: 12 },
  },
  // Phase 6+ appends further stages here: projects at stage(3), etc.
];