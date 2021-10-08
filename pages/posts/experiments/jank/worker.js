const worker = () => {
  self.addEventListener("message", evt => {
    console.log('here');
    var canvas = evt.data.canvas;
    var ctx = canvas.getContext('2d');

    function render(time) {
      ctx.clearRect(0, 0, 500, 500);

      const t = performance.now() / 1000.0;
      const x = 100.0 * Math.sin(3.0 * t);
      const y = 100.0 * Math.cos(3.0 * t);
      ctx.beginPath();
      ctx.ellipse(250 + x, 250 + y, 10, 10, 0, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
}
export default worker;
