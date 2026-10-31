"use client";

import { motion } from "framer-motion";

const rise = {
  hidden: { y: "110%", rotate: 4 },
  show: { y: 0, rotate: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] as const } },
};

// Two-tone heading: each word rises from behind its own mask. The heading
// watches the viewport, because a masked word never counts as in view.
export function AnimatedHeading({ lines, as = "h2", light = false, className = "text-[clamp(2rem,4vw,3.25rem)]" }: { lines: string[]; as?: "h1" | "h2"; light?: boolean; className?: string }) {
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  return (
    <Tag
      aria-label={lines.join(" ")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.06 }}
      className={`leading-[1.12] font-semibold tracking-[-0.03em] ${className}`}
    >
      {lines.map((line, l) => (
        <span key={l} aria-hidden className={`block ${l === 0 && lines.length > 1 ? (light ? "text-white/75" : "text-green") : light ? "text-white" : "text-foreground"}`}>
          {line.split(" ").map((word, i) => (
            <span key={i} className="-mx-[0.06em] -my-[0.16em] mr-[0.18em] inline-block overflow-hidden px-[0.06em] py-[0.16em] align-bottom">
              <motion.span className="inline-block origin-bottom-left" variants={rise}>{word}</motion.span>
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
