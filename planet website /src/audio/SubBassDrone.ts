// 54 Hz Sub-Bass Space Hum Oscillator
export function createSubBassDrone(ctx: AudioContext): OscillatorNode {
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(54.0, ctx.currentTime);
  return osc;
}
