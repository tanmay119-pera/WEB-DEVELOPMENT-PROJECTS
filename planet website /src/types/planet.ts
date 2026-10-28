// TypeScript Definitions for The Living Archive
export interface PlanetaryMetric {
  label: string;
  val: string;
  sub: string;
}

export interface GeologicalEpoch {
  period: string;
  name: string;
  detail: string;
}

export interface SpaceMission {
  name: string;
  agency: string;
  year: string;
  desc: string;
}

export interface PlanetaryAnomaly {
  num: string;
  title: string;
  desc: string;
}

export interface PlanetaryDossier {
  name: string;
  num: string;
  classification: string;
  tagline: string;
  color: [number, number, number];
  accent: [number, number, number];
  radius: number;
  axialTilt: number;
  rotationSpeed: number;
  atmosphere: [number, number, number, number] | null;
  rings: boolean;
  ringTilt?: number;
  next: string;
  metrics: PlanetaryMetric[];
  geology: {
    summary: string;
    coreTitle: string;
    coreDesc: string;
    epochs: GeologicalEpoch[];
    featuresTitle: string;
    featuresDesc: string;
    features: PlanetaryMetric[];
  };
  atmosphereData: {
    summary: string;
    gases: { name: string; pct: number }[];
    climateTitle: string;
    climateDesc: string;
    metrics: PlanetaryMetric[];
  };
  missions: SpaceMission[];
  mysteries: PlanetaryAnomaly[];
}
