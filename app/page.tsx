"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Landmark, MapPin, Plane, ShieldCheck } from "lucide-react";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Bristles } from "@/components/Bristles";
import { CountUp } from "@/components/CountUp";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { BANK, FACTORY_PREMISES, FEATURES, TRANSPORT } from "@/lib/site";

const HERO_PALETTE = ["#1d3a2e", "#26493a", "#31594a", "#16a35a", "#f08a1d", "#e9e6dc"];
const BANNER_PALETTE = ["#b96312", "#d97814", "#f6a64f", "#a85710"];
const MARKETS = ["Europe", "Asia", "Australia", "North America"];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const STATS = [
  { to: 20000, suffix: " sq. ft.", label: "Total factory area", thousands: true },
  { to: 4, suffix: " levels", label: "Ground + three floors" },
  { to: 70, prefix: "50–", suffix: "", label: "Workmen on-site" },
  { to: 4, suffix: " days", label: "To reach New Delhi" },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-brand text-white">
        <div className="absolute inset-x-0 bottom-0 h-full opacity-80">
          <Bristles palette={HERO_PALETTE} interactive />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/70 to-transparent" />
        <motion.div variants={container} initial="hidden" animate="show" className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 py-28 md:px-6">
          <motion.div variants={item}><Eyebrow light>Bright Brush and Bristles</Eyebrow></motion.div>
          <motion.h1 variants={item} className="mt-6 max-w-4xl text-5xl leading-[1.02] font-medium tracking-[-0.035em] sm:text-6xl md:text-8xl">
            Global reach, local touch.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            We specialize in manufacturing and exporting high-quality pig hair products, including boar bristle and hog hair, as a dedicated and focused supplier of these items.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link href="/products/" className="group inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-brand transition-transform hover:scale-105">
              Products <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact-us/" className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-white/15">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div aria-hidden className="overflow-hidden border-b bg-surface py-4">
        <div className="marquee flex w-max">
          {Array.from({ length: 8 }, () => MARKETS).flat().map((m, i) => (
            <span key={i} className="font-mono-label flex items-center gap-8 pr-8 text-muted-foreground">
              {m}<span className="h-1.5 w-1.5 rounded-full bg-saffron" />
            </span>
          ))}
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Welcome</Eyebrow>
            <AnimatedHeading text="Welcome to Bright Brush and Bristles Work India" className="mt-6 text-4xl leading-[1.08] md:text-5xl" />
          </div>
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg lg:col-span-7" direction="left">
            <p>Bright Brush and Bristles Work India is among the oldest companies in India operating in this industry. Established in 2018, the company has set up its manufacturing and marketing unit in Uttar Pradesh, India. We are a certified manufacturer of pig hair and boar bristles and have been awarded the ISO 9001 Quality Certificate.</p>
            <p>Our sister concern, Sri Sitaram Trading Company, holds 40% to 55% of the Indian domestic market for pig bristles. As one of the largest manufacturer of bristles in India, we take pride in delivering quality products with transparency. This approach has enabled us to establish a strong foothold in the international market, and we are continuously expanding.</p>
            <p>Bright Brush and Bristles Work India focuses solely on exports and imports. We do not engage in domestic sales, which are exclusively handled by our sister concern.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Eyebrow>Features</Eyebrow>
          <AnimatedHeading text="Features" className="mt-6 text-4xl md:text-5xl" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 110} className="h-full">
                <div className="group hover-lift h-full rounded-2xl border bg-background p-6 hover:border-green/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/10 text-green transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <f.icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <Reveal direction="right" className="h-full">
              <div className="h-full rounded-2xl bg-brand p-7 text-white md:p-9">
                <MapPin className="text-saffron" size={24} />
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em]">Factory Premises</h3>
                <p className="mt-4 leading-relaxed text-white/75">{FACTORY_PREMISES}</p>
              </div>
            </Reveal>
            <Reveal direction="left" className="h-full">
              <div className="h-full rounded-2xl bg-brand p-7 text-white md:p-9">
                <Plane className="text-saffron" size={24} />
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em]">Transport &amp; Transit</h3>
                <p className="mt-4 leading-relaxed text-white/75">{TRANSPORT}</p>
              </div>
            </Reveal>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} direction="scale">
                <div className="rounded-2xl border bg-background p-6">
                  <dd className="text-2xl font-semibold tracking-[-0.03em] text-green md:text-4xl">
                    {s.prefix}<CountUp to={s.to} format={(n) => (s.thousands ? n.toLocaleString("en-US") : String(n))} />{s.suffix}
                  </dd>
                  <dt className="mt-2 text-sm text-muted-foreground">{s.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="relative overflow-hidden bg-saffron text-brand">
        <div className="absolute inset-x-0 bottom-0 h-full opacity-35"><Bristles palette={BANNER_PALETTE} density={0.7} /></div>
        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center md:px-6 md:py-32">
          <AnimatedHeading text="Premium Bristles Delivered Globally" className="mx-auto max-w-4xl text-4xl leading-[1.05] md:text-7xl" />
          <Reveal delay={200}><p className="mx-auto mt-6 max-w-xl text-lg">High-quality pig hair and boar bristles, crafted with precision and shipped worldwide.</p></Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-2">
          <div>
            <Eyebrow>Certified</Eyebrow>
            <AnimatedHeading text="ISO Certified & Banking Partner Details" className="mt-6 text-4xl leading-[1.08] md:text-5xl" />
            <Reveal className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>We are proud to be an ISO 9001 certified company, ensuring that our products and processes meet international quality standards. Our commitment to transparency, reliability, and continuous improvement reflects in every aspect of our operations, from manufacturing to customer service.</p>
              <p>For smooth financial transactions, we maintain a trusted partnership with HDFC Bank Ltd. Below are our banking details:</p>
            </Reveal>
            <Reveal className="mt-6"><span className="inline-flex items-center gap-2 text-sm font-medium text-green"><ShieldCheck size={18} /> ISO 9001</span></Reveal>
          </div>
          <Reveal direction="left">
            <div className="rounded-2xl border bg-surface p-7 md:p-9">
              <Landmark className="text-green" size={24} />
              <dl className="mt-4 divide-y">
                {BANK.map(([k, v]) => (
                  <div key={k} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                    <dt className="font-mono-label self-center text-muted-foreground">{k}</dt>
                    <dd className="break-words font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
