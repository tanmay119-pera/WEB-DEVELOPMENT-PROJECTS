// Keyboard Shortcut Listeners
export function bindKeyboardModal(modalEl: HTMLElement) {
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') modalEl.classList.remove('is-open');
  });
}
