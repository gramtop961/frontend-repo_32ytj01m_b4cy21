import React, { useRef, useEffect } from 'react';

// Floating cherry blossom petals canvas background
export default function PetalCanvas({ className = '' }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(0);
  const petalsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const { clientWidth, clientHeight } = canvas.parentElement;
      canvas.width = clientWidth * DPR;
      canvas.height = clientHeight * DPR;
      canvas.style.width = clientWidth + 'px';
      canvas.style.height = clientHeight + 'px';
    }

    function createPetals(count) {
      const petals = [];
      for (let i = 0; i < count; i++) {
        petals.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: 6 + Math.random() * 10,
          speedY: 0.2 + Math.random() * 0.6,
          speedX: -0.3 + Math.random() * 0.6,
          tilt: Math.random() * Math.PI * 2,
          tiltSpeed: 0.005 + Math.random() * 0.01,
          alpha: 0.6 + Math.random() * 0.4,
        });
      }
      petalsRef.current = petals;
    }

    function drawPetal(p) {
      const r = p.r;
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(Math.sin(p.tilt) * 0.6);

      // Blossom petal shape using path with subtle gradient
      const grad = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r);
      grad.addColorStop(0, 'rgba(255, 182, 193, 1)'); // light pink
      grad.addColorStop(1, 'rgba(255, 105, 135, 0.8)'); // deeper sakura pink
      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.moveTo(0, -r);
      ctx.bezierCurveTo(r * 0.8, -r * 0.9, r, -r * 0.2, r * 0.7, r * 0.3);
      ctx.quadraticCurveTo(0, r * 0.9, -r * 0.7, r * 0.3);
      ctx.bezierCurveTo(-r, -r * 0.2, -r * 0.8, -r * 0.9, 0, -r);
      ctx.closePath();
      ctx.fill();

      // Vein
      ctx.strokeStyle = 'rgba(255,255,255,0.5)';
      ctx.lineWidth = 0.8 * DPR;
      ctx.beginPath();
      ctx.moveTo(0, -r * 0.6);
      ctx.quadraticCurveTo(0, 0, 0, r * 0.6);
      ctx.stroke();

      ctx.restore();
    }

    function tick() {
      const petals = petalsRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle vignette to enhance depth
      const vignette = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        Math.min(canvas.width, canvas.height) * 0.2,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.7
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.25)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let p of petals) {
        p.y += p.speedY * DPR;
        p.x += p.speedX * DPR + Math.sin(p.y * 0.002) * 0.4;
        p.tilt += p.tiltSpeed;

        if (p.y - p.r > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;

        drawPetal(p);
      }

      animationRef.current = requestAnimationFrame(tick);
    }

    resize();
    createPetals(Math.max(40, Math.floor((canvas.clientWidth + canvas.clientHeight) / 15)));
    tick();

    window.addEventListener('resize', () => {
      resize();
      createPetals(petalsRef.current.length);
    });

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden
    />
  );
}
