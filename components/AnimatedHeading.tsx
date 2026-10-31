"use client";

import { motion } from "framer-motion";

const rise = {
  hidden: { y: "105%" },
  show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

// Plain line rise behind a mask. The heading watches the viewport, not the
// span: a span fully hidden by the mask would never count as in view.
export function AnimatedHeading({ text, as = "h2", className = "" }: { text: string; as?: "h1" | "h2"; className?: string }) {
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`overflow-hidden pb-[0.12em] font-serif font-normal tracking-[-0.015em] ${className}`}
    >
      <motion.span className="block" variants={rise}>
        {text}
      </motion.span>
    </Tag>
  );
}
