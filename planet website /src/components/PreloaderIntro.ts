// Preloader Flight Sequence Controller
export function initPreloaderFlight(vid: HTMLVideoElement, onComplete: () => void) {
  vid.playbackRate = 1.0;
  vid.onended = onComplete;
}
