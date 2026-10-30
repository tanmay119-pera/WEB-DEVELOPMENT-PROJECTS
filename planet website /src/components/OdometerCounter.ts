// Odometer Percentage Counter
export function updateOdometer(valEl: HTMLElement, pct: number) {
  valEl.textContent = String(Math.min(100, Math.round(pct)));
}
