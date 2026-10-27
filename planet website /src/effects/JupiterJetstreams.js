// Jupiter: Zonal Shear Jetstream Filament Simulation
export function renderJovianJets(ctx, p, time) {
  const dir = (p.y % 120 < 60) ? 2.5 : -2.5; // Alternating shear
  p.x += dir;
}
