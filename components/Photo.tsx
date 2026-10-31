"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const unroll = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: { clipPath: "inset(0 0 0% 0)", transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const } },
};

// Photograph that unrolls from the top, drifts inside its frame on scroll and
// zooms on hover. The outer box watches the viewport because the clipped layer
// has no visible area until it has played.
export function Photo({
  src, alt, ratio = "aspect-[4/3]", sizes = "100vw", priority = false, position = "object-center", className = "",
}: {
  src: string; alt: string; ratio?: string; sizes?: string; priority?: boolean; position?: string; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden bg-surface ${ratio} ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      <motion.div className="absolute inset-0" variants={unroll}>
        <motion.div className="absolute -inset-y-[8%] inset-x-0" style={{ y: reduced ? 0 : y }}>
          <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={`object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${position}`} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
