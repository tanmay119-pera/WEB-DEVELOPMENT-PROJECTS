// Accessible ARIA Attributes for Portal
export function setPortalAria(portalBtn: HTMLButtonElement, nextPlanet: string) {
  portalBtn.setAttribute('aria-label', `Travel to ${nextPlanet}`);
}
