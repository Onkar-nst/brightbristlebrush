"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const unroll = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: { clipPath: "inset(0 0 0% 0)", transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const } },
};

// Photograph that unrolls from the top. The outer box watches the viewport
// because the clipped layer has no visible area until it has played.
export function Photo({
  src, alt, ratio = "aspect-[4/3]", sizes = "100vw", priority = false, position = "object-center", className = "",
}: {
  src: string; alt: string; ratio?: string; sizes?: string; priority?: boolean; position?: string; className?: string;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden bg-surface ${ratio} ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      <motion.div className="absolute inset-0" variants={unroll}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={`object-cover ${position}`} />
      </motion.div>
    </motion.div>
  );
}
