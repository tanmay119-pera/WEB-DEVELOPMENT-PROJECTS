// Tab Inactivity Audio Suspension
export function handleTabVisibility(ctx: AudioContext) {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) ctx.suspend();
    else ctx.resume();
  });
}
