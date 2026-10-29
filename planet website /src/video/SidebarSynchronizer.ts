// Sidebar Click Video Stream Synchronizer
export function bindSidebarClicks(onSelect: (planet: string) => void) {
  document.querySelectorAll('[data-target-planet]').forEach(el => {
    el.addEventListener('click', () => {
      onSelect(el.getAttribute('data-target-planet') || 'mars');
    });
  });
}
