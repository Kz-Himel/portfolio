import * as THREE from "three";

export const clamp = THREE.MathUtils.clamp;
export const lerp = THREE.MathUtils.lerp;
export const damp = THREE.MathUtils.damp;

export function mapRange(value, inMin, inMax, outMin, outMax) {
  const t = clamp((value - inMin) / (inMax - inMin), 0, 1);
  return lerp(outMin, outMax, t);
}