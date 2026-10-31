"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

const hidden: Record<Direction, object> = {
  up: { y: 28 },
  left: { x: 32 },
  right: { x: -32 },
  scale: { scale: 0.94 },
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...hidden[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
