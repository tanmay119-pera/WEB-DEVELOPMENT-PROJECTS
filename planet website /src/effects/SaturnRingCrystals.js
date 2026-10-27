// Saturn: Cascading Water-Ice Ring Crystal Glitter
export function renderRingGlitter(ctx, p, time) {
  const sparkle = 0.5 + 0.5 * Math.sin(time * 0.005 + p.seed * 10);
  ctx.fillStyle = `rgba(245, 235, 215, ${sparkle * 0.6})`;
}
