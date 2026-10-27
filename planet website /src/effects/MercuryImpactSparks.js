// Mercury: Micro-Impact Surface Glow Sparks
export function renderImpactSparks(ctx, p, time) {
  const sparkIntensity = 0.5 + 0.5 * Math.sin(time * 0.008 + p.seed);
  ctx.fillStyle = `rgba(255, 240, 200, ${p.alpha * sparkIntensity})`;
}
