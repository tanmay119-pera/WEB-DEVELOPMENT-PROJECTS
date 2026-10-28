// URL Hash Deep-Linking & History State Synchronizer
export function syncHash(planetKey, sectionId) {
  if (history.replaceState) {
    history.replaceState(null, '', `#${planetKey}/${sectionId}`);
  }
}
