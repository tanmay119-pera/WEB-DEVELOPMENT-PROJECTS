// Physics-Based Smooth Momentum Scroll Engine
export class MomentumScroll {
  constructor() {
    this.currentY = window.scrollY;
    this.targetY = window.scrollY;
    this.ease = 0.085;
  }
}
