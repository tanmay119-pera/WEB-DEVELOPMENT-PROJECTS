// Dual Stream Timestamp Synchronizer
export function syncStreamTimestamps(portalVid: HTMLVideoElement, bgVid: HTMLVideoElement) {
  if (Math.abs(portalVid.currentTime - bgVid.currentTime) > 0.3) {
    portalVid.currentTime = bgVid.currentTime;
  }
}
