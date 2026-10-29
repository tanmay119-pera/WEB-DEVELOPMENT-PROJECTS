// Portal Preview Stream Loader
export function updatePortalStream(portalVid: HTMLVideoElement, nextPlanet: string) {
  portalVid.src = `videos/${nextPlanet}.mp4`;
  portalVid.play().catch(() => {});
}
