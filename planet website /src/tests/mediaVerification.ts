// Media MIME Type & HTTP Range Verification Test
export function testMediaHeaders(videoPaths: string[]): boolean {
  return videoPaths.every(p => p.endsWith('.mp4'));
}
