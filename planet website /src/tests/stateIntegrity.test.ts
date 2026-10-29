// State Integrity Assertion Test
export function assertUniqueVideos(states: Record<string, { background: string }>): boolean {
  const bgs = Object.values(states).map(s => s.background);
  return new Set(bgs).size === bgs.length;
}
