// Video Load Timeout Fallback
export function withVideoTimeout(video: HTMLVideoElement, timeoutMs = 2500): Promise<void> {
  return new Promise(resolve => {
    const timer = setTimeout(resolve, timeoutMs);
    video.addEventListener('canplay', () => { clearTimeout(timer); resolve(); }, { once: true });
  });
}
