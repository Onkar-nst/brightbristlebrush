"use client";

import { ArrowRight, BadgeCheck, Factory, Handshake, Landmark, Plane } from "lucide-react";
import Link from "next/link";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { HomeHero } from "@/components/HomeHero";
import { CountUp, MagneticLink, Stagger, StaggerItem } from "@/components/Motion";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { BANK, FACTORY_PREMISES, FEATURES, HIGHLIGHTS, TRANSPORT } from "@/lib/site";

const WELCOME_POINTS = [
  { icon: BadgeCheck, label: "ISO 9001 Certified" },
  { icon: Factory, label: "Manufacturing in Uttar Pradesh" },
  { icon: Plane, label: "Focused on Exports & Imports" },
  { icon: Handshake, label: "Sister concern: Sri Sitaram Trading Co." },
];

type Fact = { label: string; to?: number; before?: string; after?: string; text?: string };

const FACTORY_FACTS: Fact[] = [
  { label: "Total factory area", to: 20000, after: " sq. ft." },
  { label: "Workmen on-site", before: "50 to ", to: 70 },
];
const TRANSPORT_FACTS: Fact[] = [
  { label: "To reach New Delhi", to: 4, after: " days" },
  { label: "Shipping options", text: "Air & Sea" },
];

function FactTiles({ facts, dark = false }: { facts: Fact[]; dark?: boolean }) {
  return (
    <dl className="mt-auto grid grid-cols-2 gap-3 pt-5">
      {facts.map((f) => (
        <div key={f.label} className={`border p-4 ${dark ? "border-white/15 bg-white/5" : "bg-background"}`}>
          <dd className={`text-xl font-semibold tracking-tight md:text-2xl ${dark ? "text-white" : "text-brand"}`}>
            {f.text ?? <><span className="whitespace-nowrap">{f.before}<CountUp to={f.to!} format={(n) => n.toLocaleString("en-US")} />{f.after && <span className="text-sm font-medium md:text-base">{f.after}</span>}</span></>}
          </dd>
          <dt className={`mt-1 text-xs ${dark ? "text-white/65" : "text-muted-foreground"}`}>{f.label}</dt>
        </div>
      ))}
    </dl>
  );
}

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="py-8 md:py-12">
        {/* Running carousel on phones and tablets, a row of four on desktop. */}
        <div className="marquee overflow-hidden lg:hidden">
          <div className="marquee-track flex w-max gap-4 pl-4 [--marquee-duration:24s]">
            {[0, 1].map((copy) => HIGHLIGHTS.map((h) => (
              <div key={`${copy}-${h.title}`} aria-hidden={copy === 1} className="flex w-[250px] shrink-0 items-center gap-4 border bg-surface px-5 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-bronze/10 text-bronze"><h.icon size={21} strokeWidth={1.75} /></span>
                <h3 className="font-semibold leading-snug tracking-[-0.01em]">{h.title}</h3>
              </div>
            )))}
          </div>
        </div>
        <Stagger className="mx-auto hidden max-w-7xl grid-cols-4 gap-4 px-6 lg:grid">
          {HIGHLIGHTS.map((h) => (
            <StaggerItem key={h.title} className="group hover-lift flex items-center gap-4 border bg-surface px-5 py-5 hover:border-bronze/40">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-bronze/10 text-bronze transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <h.icon size={21} strokeWidth={1.75} />
              </span>
              <h3 className="font-semibold leading-snug tracking-[-0.01em]">{h.title}</h3>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="pb-15 md:pb-21">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-[440px_1fr] lg:gap-16">
          <Reveal className="lg:h-full">
            <div className="relative mx-auto max-w-md lg:mx-0 lg:h-full">
              <div aria-hidden className="absolute -top-4 -left-4 hidden h-24 w-24 border border-bronze/30 md:block" />
              <Photo src="/images/catalogue/calcutta-hand.jpg" alt="Calcutta extra stiff boar bristle bundle held in hand" ratio="aspect-[4/5] lg:aspect-auto lg:h-full" sizes="(min-width: 1024px) 440px, 100vw" className="border shadow-xl" />
              <div className="absolute -bottom-6 left-6 bg-brand px-7 py-5 text-white shadow-2xl md:left-10">
                <div className="text-4xl leading-none font-bold md:text-5xl"><CountUp to={2018} /></div>
                <div className="mt-2 font-mono text-[10px] font-semibold tracking-[0.14em] text-white/70 uppercase">Established</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" className="lg:py-2">
            <Eyebrow className="mb-5">Welcome</Eyebrow>
            <AnimatedHeading lines={["Welcome to", "Bright Brush and Bristles Work India"]} className="text-[clamp(2rem,3.4vw,2.85rem)]" />
            <div aria-hidden className="mt-5 h-0.5 w-16 bg-saffron" />
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground md:text-[17px]">
              <p>Bright Brush and Bristles Work India is among the oldest companies in India operating in this industry. Established in 2018, the company has set up its manufacturing and marketing unit in Uttar Pradesh, India. We are a certified manufacturer of pig hair and boar bristles and have been awarded the ISO 9001 Quality Certificate.</p>
              <p>Our sister concern, Sri Sitaram Trading Company, holds 40% to 55% of the Indian domestic market for pig bristles. As one of the largest manufacturer of bristles in India, we take pride in delivering quality products with transparency. This approach has enabled us to establish a strong foothold in the international market, and we are continuously expanding.</p>
              <p>Bright Brush and Bristles Work India focuses solely on exports and imports. We do not engage in domestic sales, which are exclusively handled by our sister concern.</p>
            </div>
            <Stagger className="mt-7 grid gap-4 sm:grid-cols-2">
              {WELCOME_POINTS.map((p) => (
                <StaggerItem key={p.label} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border bg-surface text-bronze"><p.icon size={19} strokeWidth={1.75} /></span>
                  <span className="font-medium">{p.label}</span>
                </StaggerItem>
              ))}
            </Stagger>
            <Link href="/products/" className="group mt-8 inline-flex items-center gap-3 bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-bronze">
              Explore our products
              <span className="flex h-6 w-6 items-center justify-center bg-white/15 transition-transform group-hover:translate-x-1"><ArrowRight size={14} /></span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="Features" lines={["Why buyers", "work with us."]} />
        </div>
        <Reveal className="marquee mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
          <div className="marquee-track flex w-max gap-5 px-2.5 [--marquee-duration:60s]">
            {[0, 1].map((copy) => FEATURES.map((f) => (
              <div key={`${copy}-${f.title}`} aria-hidden={copy === 1} className="group w-[300px] shrink-0 border bg-surface p-6 transition-colors duration-300 hover:border-bronze/50 hover:bg-background sm:w-[340px]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-bronze/10 text-bronze transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <f.icon size={19} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            )))}
          </div>
        </Reveal>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:px-6 lg:grid-cols-2">
          <Reveal direction="right" className="h-full">
            <div className="hover-lift flex h-full flex-col overflow-hidden border bg-surface">
              <Photo src="/images/office.jpg" alt="Bright Brush and Bristle Works India factory building" ratio="aspect-[1450/650]" sizes="(min-width: 1024px) 50vw, 100vw" />
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <Eyebrow>Factory Premises</Eyebrow>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{FACTORY_PREMISES}</p>
                <FactTiles facts={FACTORY_FACTS} />
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" delay={120} className="h-full">
            <div className="hover-lift flex h-full flex-col overflow-hidden bg-brand text-white">
              <Photo src="/images/delivery.png" alt="Worldwide delivery routes by road, sea and air" ratio="aspect-[1450/650]" sizes="(min-width: 1024px) 50vw, 100vw" />
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <Eyebrow light>Transport &amp; Transit</Eyebrow>
                <p className="mt-4 text-[15px] leading-relaxed text-white/80">{TRANSPORT}</p>
                <FactTiles facts={TRANSPORT_FACTS} dark />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Reveal>
            <div className="grid overflow-hidden bg-brand lg:grid-cols-2">
              <div className="self-center p-7 md:p-12">
                <AnimatedHeading light lines={["Premium Bristles", "Delivered Globally"]} />
                <p className="mt-4 max-w-md leading-relaxed text-white/80">High-quality pig hair and boar bristles, crafted with precision and shipped worldwide.</p>
                <div className="mt-6"><MagneticLink href="/products/" className="bg-white text-brand">Products</MagneticLink></div>
              </div>
              <Photo src="/images/catalogue/export-cartons.jpg" alt="Export cartons packed and wrapped on a pallet" ratio="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[22rem]" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <Eyebrow className="mb-5">Certified</Eyebrow>
            <AnimatedHeading lines={["ISO Certified &", "Banking Partner Details"]} />
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>We are proud to be an ISO 9001 certified company, ensuring that our products and processes meet international quality standards. Our commitment to transparency, reliability, and continuous improvement reflects in every aspect of our operations, from manufacturing to customer service.</p>
              <p>For smooth financial transactions, we maintain a trusted partnership with HDFC Bank Ltd. Below are our banking details:</p>
            </div>
          </div>
          <Reveal direction="left">
            <div className="border bg-surface p-6 md:p-8">
              <span className="flex h-11 w-11 items-center justify-center bg-bronze/10 text-bronze"><Landmark size={20} strokeWidth={1.75} /></span>
              <Stagger as="dl" className="mt-3 divide-y">
                {BANK.map(([k, v]) => (
                  <StaggerItem key={k} className="grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-4">
                    <dt className="text-sm text-muted-foreground">{k}</dt>
                    <dd className="font-medium break-words">{v}</dd>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
