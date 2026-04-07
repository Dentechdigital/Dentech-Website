import React, { useEffect, useRef } from 'react';

const HALO_COUNT = 160;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

type Point3 = { x: number; y: number; z: number };

function fibonacciSphere(n: number, radius: number): Point3[] {
  const pts: Point3[] = [];
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / Math.max(1, n - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = GOLDEN_ANGLE * i;
    pts.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius,
    });
  }
  return pts;
}

/** Soft “wavy” radius like an organic blob */
function wavyRadius(theta: number, phi: number): number {
  return (
    1 +
    0.06 * Math.sin(theta * 3 + phi * 2) +
    0.05 * Math.sin(phi * 4) +
    0.04 * Math.cos(theta * 5 - phi)
  );
}

function spherePoint(theta: number, phi: number): Point3 {
  const r = wavyRadius(theta, phi);
  const cp = Math.cos(phi);
  return {
    x: r * cp * Math.cos(theta),
    y: r * Math.sin(phi),
    z: r * cp * Math.sin(theta),
  };
}

function rotateY(p: Point3, cos: number, sin: number): Point3 {
  return {
    x: p.x * cos + p.z * sin,
    y: p.y,
    z: -p.x * sin + p.z * cos,
  };
}

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
      w = Math.max(1, parent.clientWidth);
      h = Math.max(1, parent.clientHeight);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas.parentElement!);

    let angle = 0;
    const speed = reducedMotion ? 0 : 1;
    let tabVisible = !document.hidden;

    const onVis = () => {
      tabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVis);

    const haloPts = fibonacciSphere(HALO_COUNT, 1);
    const outerHalo = fibonacciSphere(80, 1.18);

    const draw = () => {
      if (!reducedMotion && !tabVisible) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      if (w < 32 || h < 32) {
        if (!reducedMotion) rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const dark = isDark();
      const cx = w * 0.5;
      const cy = h * 0.5;
      const scale = Math.min(w, h) * 0.38;

      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      type Proj = { sx: number; sy: number; z: number };
      const project = (p: Point3): Proj => {
        const q = rotateY(p, cosA, sinA);
        return { sx: cx + q.x * scale, sy: cy - q.y * scale * 0.92, z: q.z };
      };

      // --- Wireframe meridians & parallels (soft, low contrast) ---
      const meridians = 14;
      const parallels = 10;
      const lineAlphaBack = dark ? 0.06 : 0.07;
      const lineAlphaFront = dark ? 0.22 : 0.2;

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let m = 0; m < meridians; m++) {
        const theta0 = (m / meridians) * Math.PI * 2;
        ctx.beginPath();
        let first = true;
        for (let k = 0; k <= 48; k++) {
          const phi = (k / 48 - 0.5) * Math.PI;
          const p = spherePoint(theta0, phi);
          const pr = project(p);
          if (first) {
            ctx.moveTo(pr.sx, pr.sy);
            first = false;
          } else {
            ctx.lineTo(pr.sx, pr.sy);
          }
        }
        const midZ = project(spherePoint(theta0, 0)).z;
        const t = (midZ + 1) / 2;
        const a = lineAlphaBack + t * (lineAlphaFront - lineAlphaBack);
        ctx.strokeStyle = dark ? `rgba(148, 190, 255, ${a})` : `rgba(100, 140, 190, ${a})`;
        ctx.lineWidth = dark ? 1 : 1.1;
        ctx.stroke();
      }

      for (let p = 0; p < parallels; p++) {
        const phi = (p / (parallels - 1) - 0.5) * Math.PI * 0.88;
        ctx.beginPath();
        let first = true;
        for (let k = 0; k <= 64; k++) {
          const theta = (k / 64) * Math.PI * 2;
          const pt = spherePoint(theta, phi);
          const pr = project(pt);
          if (first) {
            ctx.moveTo(pr.sx, pr.sy);
            first = false;
          } else {
            ctx.lineTo(pr.sx, pr.sy);
          }
        }
        const midZ = project(spherePoint(0, phi)).z;
        const t = (midZ + 1) / 2;
        const a = lineAlphaBack + t * (lineAlphaFront - lineAlphaBack);
        ctx.strokeStyle = dark ? `rgba(165, 210, 255, ${a * 0.9})` : `rgba(120, 160, 200, ${a * 0.95})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // --- Halo particles (outer cloud, very soft) ---
      const halos: Proj[] = [...haloPts, ...outerHalo].map((p) => project(p));
      halos.sort((a, b) => a.z - b.z);

      for (const { sx, sy, z } of halos) {
        const depth = (z + 1) / 2;
        const r = 0.7 + depth * 1.9;
        const a = dark ? 0.1 + depth * 0.38 : 0.12 + depth * 0.42;
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        if (dark) {
          ctx.fillStyle = `rgba(186, 220, 255, ${a})`;
        } else {
          ctx.fillStyle = `rgba(125, 165, 210, ${a})`;
        }
        ctx.fill();
      }

      // --- Soft cyan / periwinkle accent dots (sparse, smooth gradient feel) ---
      const accents = fibonacciSphere(45, 1.02);
      for (const p of accents) {
        const pr = project(p);
        const depth = (pr.z + 1) / 2;
        if (depth < 0.35) continue;
        ctx.beginPath();
        ctx.arc(pr.sx, pr.sy, 1.1 + depth * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `rgba(140, 210, 230, ${0.15 + depth * 0.25})`
          : `rgba(90, 160, 200, ${0.18 + depth * 0.28})`;
        ctx.fill();
      }

      angle += speed * 0.008;
      if (!reducedMotion) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    if (reducedMotion) {
      angle = 0.6;
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

  return <canvas ref={canvasRef} className="block h-full w-full" aria-hidden />;
}
