// Magnetic Cursor Snap Controller
export function snapCursorToPortal(cursorEl: HTMLElement, snapped: boolean) {
  cursorEl.classList.toggle('is-enter', snapped);
}
