// Spring Lerp Interpolation
export function lerpSpring(current: number, target: number, factor = 0.22) {
  return current + (target - current) * factor;
}
