"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const TAGS = { div: motion.div, dl: motion.dl, ol: motion.ol };

export function Stagger({ children, className = "", as = "div", gap = 0.09 }: { children: ReactNode; className?: string; as?: keyof typeof TAGS; gap?: number }) {
  const Tag = TAGS[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: gap }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className = "", as = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" }) {
  const Tag = as === "li" ? motion.li : motion.div;
  return <Tag className={className} variants={item}>{children}</Tag>;
}

// Thin rule that draws itself from the left.
export function Rule({ className = "bg-foreground" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      className={`h-px origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: EASE }}
    />
  );
}

export function CountUp({ to, format = (n) => String(n) }: { to: number; format?: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, to, { duration: 1.8, ease: EASE, onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduced, to]);

  return <span ref={ref}>{format(value)}</span>;
}

// Link that leans toward the cursor and floods with colour on hover.
export function MagneticLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  return (
    <motion.span
      className="inline-block"
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.4);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
    >
      <Link href={href} className={`group relative inline-block overflow-hidden px-7 py-4 text-[15px] font-semibold ${className}`}>
        <span className="absolute inset-0 origin-bottom scale-y-0 bg-saffron transition-transform duration-500 ease-out group-hover:scale-y-100" />
        <span className="relative transition-colors duration-300 group-hover:text-brand">{children}</span>
      </Link>
    </motion.span>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div aria-hidden style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-saffron" />;
}
