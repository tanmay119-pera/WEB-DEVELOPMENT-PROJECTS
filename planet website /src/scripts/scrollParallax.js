// 3D Planetary Rotation Scroll Parallax Controller
export function updateScrollParallax(scrollY, observatoryElement) {
  const rot = scrollY * 0.08;
  const scale = Math.max(0.75, 1.0 - scrollY * 0.00015);
  observatoryElement.style.transform = `translateY(calc(-50% + ${scrollY * 0.12}px)) scale(${scale})`;
}
