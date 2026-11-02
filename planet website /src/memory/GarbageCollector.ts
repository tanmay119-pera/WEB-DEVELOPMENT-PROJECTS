// Canvas Context Garbage Collection
export function disposeCanvases(...canvases: HTMLCanvasElement[]) {
  canvases.forEach(c => { c.width = 1; c.height = 1; });
}
