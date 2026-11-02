"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Droplets, Flame, FlaskConical, PackageCheck, Wind, type LucideIcon } from "lucide-react";
import { useRef } from "react";

const ICONS: LucideIcon[] = [Flame, Droplets, FlaskConical, Wind, PackageCheck];
const TAGS = ["100°C • 3+ hours", "Rinse & dry", "60°C • 2+ hours", "Rinse & dry", "Ready to ship"];
const EASE = [0.22, 1, 0.36, 1] as const;

// Vertical timeline: the rail fills as you scroll and each step lights up
// as it reaches the middle of the screen.
export function ProcessTimeline({ steps }: { steps: string[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <ol ref={ref} className="relative mx-auto max-w-4xl">
      <span aria-hidden className="absolute top-0 bottom-0 left-6 w-px bg-border md:left-1/2" />
      <motion.span aria-hidden style={{ scaleY: reduced ? 1 : fill }} className="absolute top-0 bottom-0 left-6 w-[3px] origin-top -translate-x-px bg-saffron md:left-1/2" />
      {steps.map((step, i) => {
        const Icon = ICONS[i % ICONS.length];
        const right = i % 2 === 1;
        return (
          <motion.li
            key={step}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -35% 0px" }}
            className="relative grid grid-cols-[3rem_1fr] gap-5 pb-10 last:pb-0 md:grid-cols-[1fr_4rem_1fr] md:gap-8"
          >
            <motion.span
              variants={{ hidden: { scale: 0.6, backgroundColor: "#ffffff", color: "#9a5a22" }, show: { scale: 1, backgroundColor: "#211b16", color: "#ffffff", transition: { duration: 0.5, ease: EASE } } }}
              className="relative z-10 flex h-12 w-12 items-center justify-center border-2 border-saffron md:col-start-2 md:mx-auto"
            >
              <Icon size={20} strokeWidth={1.75} />
            </motion.span>
            <motion.div
              variants={{ hidden: { opacity: 0, x: right ? 40 : -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } } }}
              className={`group hover-lift border bg-surface p-5 md:p-6 ${right ? "md:col-start-3" : "md:col-start-1 md:row-start-1 md:text-right"}`}
            >
              <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-bronze uppercase">Step {String(i + 1).padStart(2, "0")} • {TAGS[i]}</p>
              <p className="mt-2 text-lg leading-snug font-semibold md:text-xl">{step}</p>
            </motion.div>
          </motion.li>
        );
      })}
    </ol>
  );
}
