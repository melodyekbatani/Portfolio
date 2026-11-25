// Seam fade — the site's soft white wave gradient.
// Add data-seam to any element whose top edge should melt into the
// content scrolling behind it. A canvas is inserted that sits on the
// element's top edge, is drawn white and blurred (CSS .seam-fade), with a
// slow, even wave along its top. Respects prefers-reduced-motion.
(function () {
  const OVERLAP = 24;      // px the fade reaches into the element itself
  const SCALE = 0.5;       // draw at half-res; it's blurred anyway
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function attach(host) {
    const canvas = document.createElement("canvas");
    canvas.className = "seam-fade";
    canvas.setAttribute("aria-hidden", "true");
    host.prepend(canvas);
    const ctx = canvas.getContext("2d");
    let W = 0, H = 0, raf = 0, visible = false;

    function resize() {
      W = Math.max(1, Math.round(canvas.offsetWidth * SCALE));
      H = Math.max(1, Math.round(canvas.offsetHeight * SCALE));
      canvas.width = W;
      canvas.height = H;
      draw(performance.now());
    }

    function draw(t) {
      const s = t / 1000;
      const floor = (OVERLAP + 12) * SCALE;
      const room = H - floor;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, H - floor, W, floor);
      ctx.beginPath();
      ctx.moveTo(0, H - floor + 1);
      const steps = 64;
      const span = canvas.offsetWidth / 1400;          // pattern sized in real px
      const amp = canvas.offsetWidth < 768 ? 0.45 : 1;
      for (let k = 0; k <= steps; k++) {
        const u = k / steps, x = u * span;
        const wave = 0.55 + amp * (
          0.20 * Math.sin(x * 5.2 + s * 0.45) +
          0.12 * Math.sin(x * 11.0 - s * 0.7 + 1.3) +
          0.08 * Math.sin(x * 2.1 + s * 0.25 + 2.4));
        ctx.lineTo(u * W, H - floor - Math.max(0, wave) * room);
      }
      ctx.lineTo(W, H - floor + 1);
      ctx.closePath();
      ctx.fill();
    }

    function loop(t) {
      draw(t);
      raf = requestAnimationFrame(loop);
    }

    new ResizeObserver(resize).observe(canvas);
    resize();
    if (reduce) return;
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(loop);
    }).observe(host);
  }

  document.querySelectorAll("[data-seam]").forEach(attach);
})();
