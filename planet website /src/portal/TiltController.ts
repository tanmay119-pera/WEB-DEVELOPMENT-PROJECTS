// Interactive Mouse Tilt Controller
export function calculateTilt(mouseX: number, mouseY: number, w: number, h: number) {
  return {
    targetY: (mouseX / w - 0.5) * 36,
    targetX: (mouseY / h - 0.5) * -32
  };
}
