// Retina Display DPI Scaler
export function getRetinaPixelRatio() {
  return Math.min(window.devicePixelRatio || 1, 2);
}
