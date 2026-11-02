# The Living Archive — Video Streaming & 3D Optics Architecture

## Video Lifecycle
1. DOM contains 8 independent `<video class="background">` elements.
2. Only the active planet's video is played; 7 background videos are paused to save CPU.
3. Portal displays destination video stream clipped to 3D projected squircle.
4. Warp transit expands portal to 100vw/100vh with cubic-bezier easing.
