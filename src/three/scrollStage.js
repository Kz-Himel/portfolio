// A plain mutable store — NOT React state/context. CameraRig writes to
// it once per frame; any world object reads it inside its own useFrame
// to drive scale/fade/explode effects off the SAME local scroll
// progress the camera itself is using. Kept outside React on purpose:
// every reader needs it every frame, and re-rendering React for that
// would defeat the imperative useFrame pattern this project relies on.
export const scrollStage = {
  activeId: null,
  progress: 0, // 0..1 — how far through the CURRENT section's own range
};