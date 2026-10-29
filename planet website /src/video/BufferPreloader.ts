// Selective Video Buffer Preloader
export function preloadAdjacentPlanets(currentIndex: number, planets: string[]) {
  const nextIdx = (currentIndex + 1) % planets.length;
  const prevIdx = (currentIndex - 1 + planets.length) % planets.length;
  // Preload next and previous video buffers
}
