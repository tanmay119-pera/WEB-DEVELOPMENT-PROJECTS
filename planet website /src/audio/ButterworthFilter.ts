// Low-Pass Butterworth Analog Filter
export function createButterworthFilter(ctx: AudioContext) {
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 120;
  return filter;
}
