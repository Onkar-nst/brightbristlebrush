"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedHeading } from "./AnimatedHeading";
import { Eyebrow } from "./Eyebrow";

export function PageHero({ label, title, subtitle, image = "/images/range.jpg" }: { label: string; title: string | string[]; subtitle?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-black">
      <motion.div className="absolute inset-0" initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}>
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="relative mx-auto max-w-7xl px-5 pt-32 pb-14 md:px-6 md:pt-40 md:pb-20">
        <Eyebrow light>{label}</Eyebrow>
        <AnimatedHeading as="h1" light lines={Array.isArray(title) ? title : [title]} className="mt-5 text-5xl md:text-7xl" />
        {subtitle && <p className="mt-4 text-lg text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}
