// Crystalline Glass UI Transient Synthesizer
export function playGlassClick(ctx: AudioContext) {
  const osc = ctx.createOscillator();
  osc.frequency.setValueAtTime(2400, ctx.currentTime);
}
