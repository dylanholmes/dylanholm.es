export default class Animation {
  constructor(plot) {
    this.plot = plot;


  }

  animate(time) {
    this.plot.render(time);
    this.requestAnimationFrameHandle = requestAnimationFrame(t => this.animate(t));
  }

  startAnimation() {
    if (!this.requestAnimationFrameHandle) {
      this.requestAnimationFrameHandle = requestAnimationFrame(t => this.animate(t));
    }
  }

  stopAnimation() {
    if (this.requestAnimationFrameHandle) {
        cancelAnimationFrame(this.requestAnimationFrameHandle);
        this.requestAnimationFrameHandle = null;
    }
  }

  toggleAnimation = () => {
      if (this.requestAnimationFrameHandle) {
        this.stopAnimation();
      } else {
        this.startAnimation();
      }
    }
}
