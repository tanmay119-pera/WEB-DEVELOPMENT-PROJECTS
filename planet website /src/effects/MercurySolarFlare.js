// Mercury: Solar Wind Energetic Particle Simulation
export function renderSolarFlare(ctx, w, h, time, particles) {
  const grad = ctx.createLinearGradient(0, 0, w * 0.45, h * 0.45);
  grad.addColorStop(0, 'rgba(255, 205, 110, 0.14)');
  grad.addColorStop(0.5, 'rgba(255, 130, 45, 0.04)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
}
