import React, { useEffect, useRef } from 'react';

const DOT_COUNT = 140;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

type Point3 = { x: number; y: number; z: number };

function fibonacciSphere(n: number): Point3[] {
  const pts: Point3[] = [];
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / Math.max(1, n - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = GOLDEN_ANGLE * i;
    pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
  }
  return pts;
}

const basePoints = fibonacciSphere(DOT_COUNT);

export default function AboutHeroSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isDark = () => document.documentElement.classList.contains('dark');

    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    let angle = 0;
    const speed = reducedMotion ? 0 : 0.35;
    let tabVisible = !document.hidden;

    const onVis = () => {
      tabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVis);

    const draw = () => {
      if (!reducedMotion && !tabVisible) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, w, h);
      if (w < 48 || h < 48) {
        if (!reducedMotion) rafRef.current = requestAnimationFrame(draw);
        return;
      }
      const cx = w * 0.52;
      const cy = h * 0.48;
      const scale = Math.min(w, h) * 0.42;
      const dark = isDark();

      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      const projected: { sx: number; sy: number; z: number; x2: number }[] = [];

      for (const p of basePoints) {
        const x2 = p.x * cos + p.z * sin;
        const z2 = -p.x * sin + p.z * cos;
        const sx = cx + x2 * scale;
        const sy = cy + p.y * scale * 0.92;
        projected.push({ sx, sy, z: z2, x2 });
      }

      projected.sort((a, b) => a.z - b.z);

      for (const { sx, sy, z, x2 } of projected) {
        const depth = (z + 1) / 2;
        const alpha = dark ? 0.14 + depth * 0.52 : 0.1 + depth * 0.48;
        const radius = dark ? 0.95 + depth * 2.35 : 0.88 + depth * 2.15;
        const cyanMix = (x2 + 1) / 2;
        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        if (dark) {
          const r = 100 + depth * 90;
          const g = 165 + cyanMix * 50;
          const bl = 230 + depth * 25;
          ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${alpha})`;
        } else {
          const r = Math.floor(37 + cyanMix * 70);
          const g = Math.floor(99 + cyanMix * 100);
          const b = Math.floor(235 - cyanMix * 40);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }
        ctx.fill();
      }

      angle += speed * 0.012;
      if (!reducedMotion) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    if (reducedMotion) {
      angle = 0.8;
      draw();
    } else {
      rafRef.current = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('visibilitychange', onVis);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
