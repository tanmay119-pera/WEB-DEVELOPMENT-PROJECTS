// Multi-Codec Video Fallback Support
export function getSupportedVideoType(): 'mp4' | 'webm' {
  const vid = document.createElement('video');
  return vid.canPlayType('video/mp4; codecs="avc1.42E01E"') ? 'mp4' : 'webm';
}
