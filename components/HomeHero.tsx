"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticLink, Marquee } from "./Motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const STRIP = ["Boar Bristle", "Grey Pig Hair", "Butt Cut / Root Cut", "Natural Pig Hair", "Europe", "Asia", "Australia", "North America"];

const letters = {
  hidden: { y: "115%", rotate: 8 },
  show: { y: 0, rotate: 0, transition: { duration: 1, ease: EASE } },
};
const fade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

function Line({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span aria-hidden className={`block ${className}`}>
      {text.split(" ").map((word, w) => (
        <span key={w} className="mr-[0.22em] inline-block whitespace-nowrap">
          {word.split("").map((ch, i) => (
            <span key={i} className="-mx-[0.08em] -my-[0.16em] inline-block overflow-hidden px-[0.08em] py-[0.16em] align-bottom">
              <motion.span className="inline-block origin-bottom-left" variants={letters}>{ch}</motion.span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const mainX = useTransform(mx, [-1, 1], [-14, 14]);
  const mainY = useTransform(my, [-1, 1], [-10, 10]);
  const smallX = useTransform(mx, [-1, 1], [30, -30]);
  const smallY = useTransform(my, [-1, 1], [24, -24]);
  const topX = useTransform(mx, [-1, 1], [-38, 38]);
  const topY = useTransform(my, [-1, 1], [-28, 28]);

  const headY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const mainScroll = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const smallScroll = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const topScroll = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const spin = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.028, delayChildren: 0.35 }}
      onPointerMove={(e) => {
        if (reduced || e.pointerType !== "mouse") return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-brand pt-20 text-brand-foreground md:pt-22"
    >
      {/* Slowly drifting colour, echoing the logo's three strokes */}
      <motion.div aria-hidden className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-green/30 blur-[110px]" animate={reduced ? undefined : { x: [0, 90, 0], y: [0, 50, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div aria-hidden className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-saffron/20 blur-[120px]" animate={reduced ? undefined : { x: [0, -80, 0], y: [0, -60, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 gap-8 px-5 pt-8 pb-10 md:px-6 lg:grid-cols-12 lg:gap-0 lg:pt-10">
        <motion.div className="relative z-20 flex flex-col justify-center lg:col-span-7 lg:col-start-1 lg:row-start-1" style={{ y: reduced ? 0 : headY }}>
          <motion.p variants={fade} className="flex items-center gap-3 text-sm text-white/75">
            <motion.span className="h-px w-10 origin-left bg-saffron" variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1, ease: EASE } } }} />
            Bright Brush and Bristles
          </motion.p>
          <h1 aria-label="Global reach, local touch." className="mt-5 font-serif text-[clamp(3.2rem,12.5vw,5rem)] leading-[0.98] tracking-[-0.03em] lg:text-[clamp(5rem,8.6vw,8.25rem)]">
            <Line text="Global reach," />
            <Line text="local touch." className="text-saffron italic" />
          </h1>
          <motion.p variants={fade} className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
            We specialize in manufacturing and exporting high-quality pig hair products, including boar bristle and hog hair, as a dedicated and focused supplier of these items.
          </motion.p>
          <motion.div variants={fade} className="mt-7 flex flex-wrap gap-3">
            <MagneticLink href="/products/" className="bg-white text-brand">Products</MagneticLink>
            <MagneticLink href="/contact-us/" className="border border-white/40 text-white">Contact Us</MagneticLink>
          </motion.div>
        </motion.div>

        {/* Collage */}
        <div className="relative h-[24rem] sm:h-[32rem] lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:h-auto lg:min-h-[34rem]">
          <motion.div className="absolute inset-y-0 right-0 left-[12%] lg:top-[6%] lg:bottom-[8%]" style={{ x: reduced ? 0 : mainX, y: reduced ? 0 : mainY }}>
            <motion.div className="relative h-full w-full overflow-hidden" style={{ y: reduced ? 0 : mainScroll }} variants={{ hidden: { clipPath: "inset(100% 0 0 0)" }, show: { clipPath: "inset(0% 0 0 0)", transition: { duration: 1.5, delay: 0.3, ease: EASE } } }}>
              <motion.div className="absolute inset-0" variants={{ hidden: { scale: 1.3 }, show: { scale: 1, transition: { duration: 2, delay: 0.3, ease: EASE } } }}>
                <Image src="/images/range.jpg" alt="Range of bristle bundles from Bright Brush and Bristle Works India" fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover object-[center_80%]" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="absolute bottom-4 left-0 z-10 w-[38%] lg:bottom-0 lg:w-[34%]" style={{ x: reduced ? 0 : smallX, y: reduced ? 0 : smallY }}>
            <motion.div className="relative aspect-[4/5] overflow-hidden border-4 border-brand shadow-2xl" style={{ y: reduced ? 0 : smallScroll }} variants={{ hidden: { opacity: 0, y: 70, rotate: -7 }, show: { opacity: 1, y: 0, rotate: -3, transition: { duration: 1.2, delay: 1, ease: EASE } } }}>
              <Image src="/images/p-grey.jpg" alt="Grey pig hair bundles" fill sizes="20vw" className="object-cover object-left" />
            </motion.div>
          </motion.div>

          <motion.div className="absolute top-0 right-3 z-10 hidden w-[28%] sm:block lg:-top-1 lg:-right-4" style={{ x: reduced ? 0 : topX, y: reduced ? 0 : topY }}>
            <motion.div className="relative aspect-square overflow-hidden border-4 border-brand shadow-2xl" style={{ y: reduced ? 0 : topScroll }} variants={{ hidden: { opacity: 0, y: -60, rotate: 8 }, show: { opacity: 1, y: 0, rotate: 3, transition: { duration: 1.2, delay: 1.2, ease: EASE } } }}>
              <Image src="/images/p-black.jpg" alt="Black boar bristle bundles" fill sizes="15vw" className="object-cover object-left" />
            </motion.div>
          </motion.div>

          {/* Rotating seal */}
          <motion.div className="absolute right-2 bottom-2 z-20 h-24 w-24 sm:h-32 sm:w-32 lg:right-auto lg:bottom-[10%] lg:left-[33%]" variants={{ hidden: { opacity: 0, scale: 0.4 }, show: { opacity: 1, scale: 1, transition: { duration: 0.9, delay: 1.5, ease: EASE } } }}>
            <motion.div className="h-full w-full" style={{ rotate: reduced ? 0 : spin }}>
              <motion.svg viewBox="0 0 120 120" aria-hidden className="h-full w-full" animate={reduced ? undefined : { rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}>
                <circle cx="60" cy="60" r="59" fill="#d9731a" />
                <defs><path id="seal" d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1-90 0" /></defs>
                <text fill="#1a1714" fontSize="11.6" letterSpacing="2" fontWeight="600"><textPath href="#seal">ISO 9001 CERTIFIED • EXPORTER •</textPath></text>
              </motion.svg>
            </motion.div>
            <span className="absolute inset-0 flex items-center justify-center font-serif text-lg leading-none text-brand italic sm:text-2xl">Est.<br />2018</span>
          </motion.div>
        </div>
      </div>

      <motion.div variants={fade} className="relative border-t border-white/20 py-4">
        <Marquee items={STRIP} className="font-serif text-2xl text-white/85 italic md:text-3xl" />
      </motion.div>
    </motion.section>
  );
}
