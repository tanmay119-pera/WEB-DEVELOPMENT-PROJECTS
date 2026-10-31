// Mobile Touch Swipe Navigation
export function initTouchNavigation(onNext: () => void, onPrev: () => void) {
  let startX = 0;
  window.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  window.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff < -80) onNext();
    else if (diff > 80) onPrev();
  }, { passive: true });
}
