import { useEffect, useRef } from "react";

const palette = [
  "rgba(235, 207, 145, 0.30)",
  "rgba(139, 224, 214, 0.20)",
  "rgba(213, 154, 201, 0.16)",
  "rgba(248, 243, 236, 0.18)",
];

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pointer = { x: 0, y: 0, px: 0, py: 0, vx: 0, vy: 0, active: false };
    let ratio = 1;
    let width = 0;
    let height = 0;
    let particles = [];
    let frame = 0;

    const resize = () => {
      ratio = Math.min(window.devicePixelRatio || 1, 1.6);
      width = canvas.width = window.innerWidth * ratio;
      height = canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const count = Math.min(30, Math.max(16, Math.floor(window.innerWidth / 62)));
      const minimumGap = Math.min(width, height) * 0.12;
      particles = [];

      for (let index = 0; index < count; index += 1) {
        let candidate = null;
        let attempts = 0;

        while (attempts < 40) {
          const next = {
            x: Math.random() * width,
            y: Math.random() * height,
          };
          const hasSpace = particles.every((particle) => {
            const dx = particle.x - next.x;
            const dy = particle.y - next.y;
            return Math.sqrt(dx * dx + dy * dy) > minimumGap;
          });

          if (hasSpace) {
            candidate = next;
            break;
          }
          attempts += 1;
        }

        const position = candidate || { x: Math.random() * width, y: Math.random() * height };
        particles.push({
          ...position,
          z: 0.35 + Math.random() * 1.05,
          vx: (-0.032 + Math.random() * 0.064) * ratio,
          vy: (-0.026 + Math.random() * 0.052) * ratio,
          base: (0.55 + Math.random() * 1.15) * ratio,
          halo: (18 + Math.random() * 28) * ratio,
          pulse: Math.random() * Math.PI * 2,
          color: palette[index % palette.length],
        });
      }
    };

    const onMove = (event) => {
      const nextX = event.clientX * ratio;
      const nextY = event.clientY * ratio;
      pointer.vx = nextX - (pointer.active ? pointer.x : nextX);
      pointer.vy = nextY - (pointer.active ? pointer.y : nextY);
      pointer.px = pointer.x;
      pointer.py = pointer.y;
      pointer.x = nextX;
      pointer.y = nextY;
      pointer.active = true;
    };

    const drawGlow = (x, y, radius, color) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.38, color.replace(/,[^,]+\)$/u, ", 0.045)"));
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      if (pointer.active) {
        drawGlow(pointer.x, pointer.y, 150 * ratio, "rgba(232, 202, 140, 0.06)");
        pointer.vx *= 0.86;
        pointer.vy *= 0.86;
      }

      for (const particle of particles) {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (pointer.active && dist < 230 * ratio) {
          const strength = (1 - dist / (230 * ratio)) * particle.z;
          particle.x += pointer.vx * 0.035 * strength;
          particle.y += pointer.vy * 0.035 * strength;
          particle.x += (dx / Math.max(dist, 1)) * strength * 0.45;
          particle.y += (dy / Math.max(dist, 1)) * strength * 0.45;
        }

        particle.pulse += 0.011;
        particle.x += particle.vx * particle.z;
        particle.y += particle.vy * particle.z;

        if (particle.x < -90) particle.x = width + 90;
        if (particle.x > width + 90) particle.x = -90;
        if (particle.y < -90) particle.y = height + 90;
        if (particle.y > height + 90) particle.y = -90;

        const pulse = 0.9 + Math.sin(particle.pulse) * 0.13;
        drawGlow(particle.x, particle.y, particle.halo * pulse, particle.color);

        ctx.beginPath();
        ctx.fillStyle = particle.color.replace(/,[^,]+\)$/u, ", 0.32)");
        ctx.arc(particle.x, particle.y, particle.base * pulse, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}



