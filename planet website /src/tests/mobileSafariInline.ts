// iOS Safari Inline Video Playback Verification
export function verifyPlaysinline(videoEl: HTMLVideoElement): boolean {
  return videoEl.hasAttribute('playsinline') && videoEl.muted;
}
