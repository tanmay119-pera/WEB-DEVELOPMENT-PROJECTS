// Telemetry Loading Indicator
export function showOrbitLoading(loadingEl: HTMLElement, visible: boolean) {
  loadingEl.style.opacity = visible ? '0.85' : '0';
}
