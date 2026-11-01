// Relativistic Warp Pitch Sweep Synthesizer
export function playWarpAcceleration(ctx: AudioContext) {
  const osc = ctx.createOscillator();
  osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.9);
}
