"use client";

import { Bristles } from "./Bristles";
import { AnimatedHeading } from "./AnimatedHeading";
import { Eyebrow } from "./Eyebrow";

const PALETTE = ["#1d3a2e", "#26493a", "#16a35a", "#f08a1d", "#e9e6dc"];

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div className="absolute inset-x-0 bottom-0 h-3/4 opacity-60">
        <Bristles palette={PALETTE} density={0.5} interactive />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-12 md:px-6 md:pt-32 md:pb-17">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <AnimatedHeading as="h1" text={title} className="mt-6 max-w-4xl text-[clamp(2.5rem,11vw,3rem)] leading-[1.05] md:text-7xl" />
        {subtitle && <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
