import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  v: number;
}

const STAR_COUNT = 240;

/**
 * Dimmed canvas starfield for the hero background — drifts slowly downward.
 * Replaces react-starfield so the palette stays magenta-free and on-theme.
 */
const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let stars: Star[] = [];
    let frame = 0;

    const init = () => {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        z: Math.random() * 0.8 + 0.2,
        v: Math.random() * 0.04 + 0.02,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (const s of stars) {
        ctx.globalAlpha = s.z;
        ctx.fillStyle = 'rgb(140,140,180)';
        ctx.fillRect(s.x, s.y, s.z * 1.4, s.z * 1.4);
        if (!reduced) {
          s.y += s.v * 6;
          if (s.y > canvas.offsetHeight) {
            s.y = 0;
            s.x = Math.random() * canvas.offsetWidth;
          }
        }
      }
      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="starfield" ref={canvasRef} aria-hidden="true" />;
};

export default Starfield;
