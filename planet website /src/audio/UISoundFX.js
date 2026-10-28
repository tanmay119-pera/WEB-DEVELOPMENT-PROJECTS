// Procedural Glass UI Clicks and Warp Sweep Synthesizer
export function playWarpSweep(ctx) {
  const osc = ctx.createOscillator();
  osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.6);
}
