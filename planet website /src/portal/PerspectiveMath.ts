// 3D Perspective Projection Mathematics
export function project3D(x: number, y: number, rx: number, ry: number, cx: number, cy: number) {
  const ax = rx * Math.PI / 180;
  const ay = ry * Math.PI / 180;
  const xx = x * Math.cos(ay);
  const yy = y * Math.cos(ax);
  const z  = x * Math.sin(ay) - y * Math.sin(ax);
  const p  = 850 / (850 + z);
  return [cx + xx * p, cy + yy * p];
}
