"use client";

import { useEffect, useRef } from "react";

type Strand = { x: number; length: number; width: number; color: string; phase: number; lean: number };

/**
 * Canvas field of bristle strands rising from the bottom edge. They sway on
 * their own and, when `interactive`, part around the pointer like a real brush.
 */
export function Bristles({
  palette,
  density = 1,
  interactive = false,
  className = "",
}: {
  palette: string[];
  density?: number;
  interactive?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -9999, y: -9999, pull: 0, active: false };
    let strands: Strand[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.round((width / 3.2) * density), 900);
      strands = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        length: height * (0.45 + Math.random() * 0.5),
        width: 0.7 + Math.random() * 1.1,
        color: palette[Math.floor(Math.random() * palette.length)],
        phase: Math.random() * Math.PI * 2,
        lean: (Math.random() - 0.5) * 0.14,
      }));
      strands.sort((a, b) => b.length - a.length);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      pointer.pull += ((pointer.active ? 1 : 0) - pointer.pull) * 0.08;
      ctx.lineCap = "round";
      for (const s of strands) {
        const sway = Math.sin(t * 0.0009 + s.phase + s.x * 0.006) * s.length * 0.035;
        let tipX = s.x + s.lean * s.length + sway;
        const tipY = height - s.length;
        const dx = tipX - pointer.x;
        const reach = 170;
        if (Math.abs(dx) < reach && pointer.y > tipY - reach) {
          const force = (1 - Math.abs(dx) / reach) ** 2;
          tipX += Math.sign(dx || 1) * force * 90 * pointer.pull;
        }
        ctx.beginPath();
        ctx.moveTo(s.x, height);
        ctx.quadraticCurveTo(s.x + (tipX - s.x) * 0.25, height - s.length * 0.55, tipX, tipY);
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.width;
        ctx.stroke();
      }
    };

    const loop = (t: number) => {
      if (visible) draw(t);
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.active = e.clientY >= r.top && e.clientY <= r.bottom;
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);

    if (reduced) {
      draw(0);
    } else {
      frame = requestAnimationFrame(loop);
      if (interactive) window.addEventListener("pointermove", onMove, { passive: true });
    }

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, [palette, density, interactive]);

  return <canvas ref={ref} aria-hidden className={`block h-full w-full ${className}`} />;
}
