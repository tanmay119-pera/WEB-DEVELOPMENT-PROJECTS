// Earth: Polar Geomagnetic Aurora Borealis Ionization
export function renderAuroraBorealis(ctx, w, h, time) {
  const aurora = ctx.createLinearGradient(w * 0.2, 0, w * 0.8, h * 0.28);
  const wave = Math.sin(time * 0.002) * 0.04;
  aurora.addColorStop(0, `rgba(61, 242, 212, ${0.12 + wave})`);
  aurora.addColorStop(0.5, `rgba(80, 160, 255, ${0.09 + wave})`);
  aurora.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = aurora;
  ctx.fillRect(0, 0, w, h * 0.35);
}
