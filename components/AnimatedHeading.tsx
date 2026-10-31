"use client";

import { motion } from "framer-motion";

const rise = {
  hidden: { y: "110%", rotate: 4 },
  show: { y: 0, rotate: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] as const } },
};

// Each word rises from behind its own mask. The heading watches the viewport,
// because a word hidden by its mask never counts as in view.
export function AnimatedHeading({ text, as = "h2", className = "" }: { text: string; as?: "h1" | "h2"; className?: string }) {
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  return (
    <Tag
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.06 }}
      className={`font-serif font-normal tracking-[-0.015em] ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} aria-hidden className="-mx-[0.06em] -my-[0.16em] mr-[0.18em] inline-block overflow-hidden px-[0.06em] py-[0.16em] align-bottom">
          <motion.span className="inline-block origin-bottom-left" variants={rise}>{word}</motion.span>
        </span>
      ))}
    </Tag>
  );
}
