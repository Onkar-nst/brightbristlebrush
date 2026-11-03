"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";
import { MagneticLink } from "./Motion";

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      <motion.div className="absolute inset-0" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}>
        <Image src="/images/hero-bundles-logo.jpg" alt="Range of bristle bundles from Bright Brush and Bristle Works India" fill priority sizes="100vw" className="object-cover object-[center_75%]" />
      </motion.div>
      <div className="absolute inset-0 bg-black/55 md:bg-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/60 md:to-black/10" />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.14, delayChildren: 0.5 }}
        className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 py-28 md:px-6"
      >
        <motion.div variants={item}><Eyebrow light>Bright Brush and Bristles</Eyebrow></motion.div>
        <motion.h1 variants={item} className="mt-5 text-5xl leading-[1.05] font-medium tracking-[-0.03em] text-white sm:text-6xl md:text-7xl">
          Global reach,<br />local touch.
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
          We specialize in manufacturing and exporting high-quality pig hair products, including boar bristle and hog hair, as a dedicated and focused supplier of these items.
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <MagneticLink href="/products/" className="bg-white text-brand">Products</MagneticLink>
          <MagneticLink href="/contact-us/" className="border border-white/40 text-white">Contact Us</MagneticLink>
        </motion.div>
      </motion.div>

    </section>
  );
}
