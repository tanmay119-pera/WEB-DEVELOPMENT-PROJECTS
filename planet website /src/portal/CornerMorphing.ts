// Corner Radius Morphing
export function getMorphedCornerRadius(expansion: number, baseRadius = 90) {
  return baseRadius * (1 - expansion);
}
