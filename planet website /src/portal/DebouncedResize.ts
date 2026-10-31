// Debounced Resize Recalibration
export function onWindowResizeDebounced(callback: () => void, delayMs = 120) {
  let timer: any;
  window.addEventListener('resize', () => { clearTimeout(timer); timer = setTimeout(callback, delayMs); });
}
