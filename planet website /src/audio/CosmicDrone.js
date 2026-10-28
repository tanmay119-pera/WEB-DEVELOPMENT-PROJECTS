// Web Audio Procedural Ambient Space Drone Synthesizer
export class SpaceDroneSynthesizer {
  constructor(audioCtx) {
    this.ctx = audioCtx;
    this.osc = this.ctx.createOscillator();
    this.osc.type = 'sine';
    this.osc.frequency.setValueAtTime(54.0, this.ctx.currentTime);
  }
}
