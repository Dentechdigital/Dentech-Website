import React, { useEffect, useRef } from 'react';

const DynamicDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    window.addEventListener('resize', resize);
    resize();

    // Dot settings
    const spacing = 28;
    const baseRadius = 1.2;
    const maxRadius = 3.5;
    const interactionRadius = 140;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.floor(canvas.width / spacing);
      const rows = Math.floor(canvas.height / spacing);
      
      const offsetX = (canvas.width - cols * spacing) / 2;
      const offsetY = (canvas.height - rows * spacing) / 2;

      const time = Date.now() / 1000;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = offsetX + i * spacing;
          const y = offsetY + j * spacing;

          // Subtle gradient coloring based on position
          const ratioX = x / canvas.width;
          const ratioY = y / canvas.height;
          
          // Mix between blue (147, 197, 253) and emerald (110, 231, 183)
          const r = Math.floor(147 + (110 - 147) * ratioX);
          const g = Math.floor(197 + (231 - 197) * ratioY);
          const b = Math.floor(253 + (183 - 253) * ((ratioX + ratioY) / 2));
          
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;

          // Calculate distance to mouse
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let radius = baseRadius;
          let xOffset = 0;
          let yOffset = 0;

          if (distance < interactionRadius) {
            const force = (interactionRadius - distance) / interactionRadius;
            // Ease out the force for a smoother interaction
            const easeForce = Math.pow(force, 1.5);
            radius = baseRadius + easeForce * (maxRadius - baseRadius);
            
            // Repel effect
            const angle = Math.atan2(dy, dx);
            const repelStrength = easeForce * 15;
            xOffset = -Math.cos(angle) * repelStrength;
            yOffset = -Math.sin(angle) * repelStrength;
          }

          // Vertical wave animation based on time and position
          const wave = Math.sin(x * 0.015 + y * 0.005 + time) * 5;
          
          ctx.beginPath();
          ctx.arc(x + xOffset, y + yOffset + wave, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

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
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
    />
  );
};

export default DynamicDots;
