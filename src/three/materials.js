// ---- Monochrome palette. These are the ONLY colors used anywhere in the 3D world. ----
export const MONO = {
  voidBlack: "#08080a",
  softBlack: "#0f0f12",
  graphite: "#232326",
  ash: "#3a3a3e",
  silver: "#c8c9cc",
  brightSilver: "#eef0f2",
  lightGray: "#9a9ba0",
};

// Reusable JSX material presets — spread these onto <meshStandardMaterial {...brushedSilver} />
export const brushedSilver = {
  color: MONO.silver,
  metalness: 0.9,
  roughness: 0.35,
  envMapIntensity: 1.1,
};

export const darkGraphite = {
  color: MONO.graphite,
  metalness: 0.6,
  roughness: 0.55,
};

export const glowSilver = {
  color: MONO.brightSilver,
  metalness: 0.8,
  roughness: 0.2,
  emissive: MONO.lightGray,
  emissiveIntensity: 0.15,
};