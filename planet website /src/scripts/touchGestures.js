// Mobile Touch Swipe Navigation Controller
export function initTouchSwipe(onSwipeLeft, onSwipeRight) {
  let touchStartX = 0;
  window.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  window.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (diff > 80) onSwipeRight();
    else if (diff < -80) onSwipeLeft();
  }, { passive: true });
}
