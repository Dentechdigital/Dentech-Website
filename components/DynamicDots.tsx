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
    // `any-pointer` is more reliable across mice/trackpads than `pointer` on some browsers.
    const finePointer = window.matchMedia('(any-pointer: fine)').matches;
    const hoverCapable = window.matchMedia('(hover: hover)').matches;
    const interactivePointer = finePointer && hoverCapable;

    let animationFrameId = 0;
    let mouse = { x: -1000, y: -1000 };
    let targetMouse = { x: -1000, y: -1000 };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      targetMouse.x = -1000;
      targetMouse.y = -1000;
    };

    if (interactivePointer) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerleave', handlePointerLeave);
      window.addEventListener('blur', handlePointerLeave);
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
    const maxRadius = finePointer ? 5.2 : 3.5;
    const interactionRadius = interactivePointer ? 215 : 0;
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

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.62)`;

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
            const repelStrength = easeForce * 28;
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
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerleave', handlePointerLeave);
        window.removeEventListener('blur', handlePointerLeave);
      };
    }

    const draw = (now: number) => {
      if (interactivePointer) {
        // Smooth pointer tracking keeps the interaction natural.
        mouse.x += (targetMouse.x - mouse.x) * 0.24;
        mouse.y += (targetMouse.y - mouse.y) * 0.24;
      }
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
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
    />
  );
};

export default DynamicDots;
