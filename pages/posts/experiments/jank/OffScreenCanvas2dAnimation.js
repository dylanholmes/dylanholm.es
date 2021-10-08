
import myworker from './worker.js'

class WebWorker {
  constructor(worker) {
    const code = worker.toString();
    const blob = new Blob(["(" + code + ")()"]);
    return new Worker(URL.createObjectURL(blob));
  }
}

export default class OffScreenCanvas2dAnimation {
  constructor(canvas) {
    this.canvas = canvas;
    this.fix_dpi();

    var offscreen = this.canvas.transferControlToOffscreen();

    var worker = new WebWorker(myworker);
    worker.postMessage({ canvas: offscreen }, [offscreen]);
  }

  render() {}

  fix_dpi() {
    let dpi = window.devicePixelRatio;
    let style_height = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
    this.canvas.setAttribute('height', style_height * dpi);
    this.canvas.setAttribute('width', style_width * dpi);
  }
}
