class SoundController {
  constructor() {
    this.muted = true;
  }
  init() {}
  toggleMute() { return true; }
  playClick() {}
  playHotspot() {}
  playMotorSurge() {}
  playSuccess() {}
  playWhoosh() {}
  playTone() {}
}

export const soundFx = new SoundController();