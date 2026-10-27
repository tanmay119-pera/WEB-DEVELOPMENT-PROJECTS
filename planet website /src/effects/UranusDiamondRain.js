// Uranus: Deep Mantle Methane Diamond Rain Simulation
export function renderDiamondRain(ctx, p, time) {
  const diamondShimmer = 0.4 + 0.6 * Math.sin(time * 0.003 + p.seed);
  ctx.fillStyle = `rgba(160, 240, 255, ${diamondShimmer * 0.5})`;
}
