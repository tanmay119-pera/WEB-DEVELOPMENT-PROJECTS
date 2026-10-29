// Playback Orchestration Engine
export function playActiveVideo(activeId: string) {
  document.querySelectorAll<HTMLVideoElement>('.background').forEach(v => {
    if (v.id === activeId) {
      v.classList.add('is-visible');
      v.play().catch(() => {});
    } else {
      v.classList.remove('is-visible');
      v.pause();
    }
  });
}
