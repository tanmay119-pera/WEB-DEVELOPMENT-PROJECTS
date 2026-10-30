// Aspect Ratio Ultrawide Adapter
export function adaptVideoScale(video: HTMLVideoElement, containerW: number, containerH: number) {
  const aspect = video.videoWidth / (video.videoHeight || 1);
  return Math.max(containerW / video.videoWidth, containerH / video.videoHeight);
}
