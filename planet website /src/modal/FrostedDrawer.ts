// Frosted Glass Modal Drawer
export function initModal(modalEl: HTMLElement, triggerBtn: HTMLElement, closeBtn: HTMLElement) {
  triggerBtn.onclick = () => modalEl.classList.add('is-open');
  closeBtn.onclick = () => modalEl.classList.remove('is-open');
}
