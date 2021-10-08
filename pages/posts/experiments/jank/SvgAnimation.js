export default class SvgAnimation {
  constructor(circle) {
    this.circle = circle;
  }

  drawPoint() {
    const t = performance.now() / 1000;
    const x = 100 * Math.sin(3 * t);
    const y = 100 * Math.cos(3 * t);

    this.circle.setAttribute('cx', 250+x);
    this.circle.setAttribute('cy', 250 +y);
  }

  render() {
    this.drawPoint();
  }
}
