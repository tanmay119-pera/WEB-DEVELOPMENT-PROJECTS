// Autoplay Promise Exception Handler
export async function safePlay(videoEl: HTMLVideoElement): Promise<boolean> {
  try {
    await videoEl.play();
    return true;
  } catch (err) {
    return false;
  }
}
