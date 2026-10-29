// Destination Video Transit Binder
export function prepareTransitVideo(transitionVid: HTMLVideoElement, targetPlanet: string) {
  transitionVid.src = `videos/${targetPlanet}.mp4`;
  transitionVid.load();
}
