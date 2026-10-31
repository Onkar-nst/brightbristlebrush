"use client";

import { motion } from "framer-motion";

const word = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function AnimatedHeading({
  text,
  as = "h2",
  className = "",
}: {
  text: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  return (
    <Tag
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.07 }}
      className={`font-medium tracking-[-0.03em] ${className}`}
    >
      {text.split(" ").map((w, i) => (
        <motion.span key={i} aria-hidden variants={word} className="mr-[0.25em] inline-block">
          {w}
        </motion.span>
      ))}
    </Tag>
  );
}
