// Double Buffering Canvas Controller
export function captureSceneFreeze(sourceCanvas: HTMLCanvasElement, targetCtx: CanvasRenderingContext2D) {
  targetCtx.drawImage(sourceCanvas, 0, 0);
}
