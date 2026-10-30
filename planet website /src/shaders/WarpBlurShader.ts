// Relativistic Motion Blur Transition Shader
export const WarpBlurShader = {
  uniforms: { uTime: { value: 0 }, uVelocity: { value: 0 } },
  fragmentShader: `precision mediump float; uniform float uVelocity; void main() { gl_FragColor = vec4(1.0); }`
};
