import React, { useEffect, useRef } from 'react';

const DynamicDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    let animationFrameId = 0;
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    if (finePointer) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
    }

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    window.addEventListener('resize', resize);
    resize();

    const spacing = isMobile ? 38 : 28;
    const baseRadius = 1.2;
    const maxRadius = 3.5;
    const interactionRadius = finePointer ? 140 : 0;
    const minFrameMs = isMobile ? 1000 / 30 : 1000 / 60;
    let lastDraw = 0;

    const drawFrame = (timeSeconds: number, waveEnabled: boolean) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.floor(canvas.width / spacing);
      const rows = Math.floor(canvas.height / spacing);

      const offsetX = (canvas.width - cols * spacing) / 2;
      const offsetY = (canvas.height - rows * spacing) / 2;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = offsetX + i * spacing;
          const y = offsetY + j * spacing;

          const ratioX = x / canvas.width;
          const ratioY = y / canvas.height;

          const r = Math.floor(147 + (110 - 147) * ratioX);
          const g = Math.floor(197 + (231 - 197) * ratioY);
          const b = Math.floor(253 + (183 - 253) * ((ratioX + ratioY) / 2));

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let radius = baseRadius;
          let xOffset = 0;
          let yOffset = 0;

          if (interactionRadius > 0 && distance < interactionRadius) {
            const force = (interactionRadius - distance) / interactionRadius;
            const easeForce = Math.pow(force, 1.5);
            radius = baseRadius + easeForce * (maxRadius - baseRadius);
            const angle = Math.atan2(dy, dx);
            const repelStrength = easeForce * 15;
            xOffset = -Math.cos(angle) * repelStrength;
            yOffset = -Math.sin(angle) * repelStrength;
          }

          const wave = waveEnabled ? Math.sin(x * 0.015 + y * 0.005 + timeSeconds) * 5 : 0;

          ctx.beginPath();
          ctx.arc(x + xOffset, y + yOffset + wave, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    if (reduceMotion) {
      drawFrame(0, false);
      return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    const draw = (now: number) => {
      if (now - lastDraw < minFrameMs) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }
      lastDraw = now;
      const timeSeconds = now / 1000;
      drawFrame(timeSeconds, true);
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-70"
    />
  );
};

export default DynamicDots;
