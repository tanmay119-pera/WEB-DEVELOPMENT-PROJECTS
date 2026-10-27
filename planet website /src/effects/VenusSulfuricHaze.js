// Venus: Convective Sulfuric Acid Cloud Simulation
export function renderVenusVapor(ctx, p, time) {
  const shimmer = 0.5 + 0.5 * Math.sin(time * 0.004 + p.seed);
  ctx.fillStyle = `rgba(230, 185, 90, ${0.08 * shimmer})`;
}
