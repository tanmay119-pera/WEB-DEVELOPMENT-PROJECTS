// Contraction Timing Curve
export const CONTRACTION_DURATION = 850;
export function easeContraction(t: number) { return Math.sin((t * Math.PI) / 2); }
