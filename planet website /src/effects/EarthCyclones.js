// Earth: Swirling Tropospheric Cyclonic Vortices
export function renderEarthClouds(ctx, p, time) {
  const spiral = Math.sin(p.y * 0.01 + time * 0.001) * 0.6;
  ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.35})`;
}
