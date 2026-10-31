"use client";

import { Landmark } from "lucide-react";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { HomeHero } from "@/components/HomeHero";
import { CountUp, MagneticLink, Stagger, StaggerItem } from "@/components/Motion";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { BANK, FACTORY_PREMISES, FEATURES, TRANSPORT } from "@/lib/site";

const FACTS = [
  { label: "Total factory area", to: 20000, after: " sq. ft." },
  { label: "Workmen on-site", before: "50 to ", to: 70 },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="py-12 md:py-17">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <Eyebrow className="mb-5">Welcome</Eyebrow>
            <AnimatedHeading lines={["Welcome to", "Bright Brush and Bristles Work India"]} />
          </div>
          <Reveal className="lg:col-span-7">
            <div className="relative">
              <Photo src="/images/inspection.jpg" alt="Measuring packed bristle bundles with calipers" ratio="aspect-[1450/650]" sizes="(min-width: 1024px) 58vw, 100vw" className="rounded-3xl border shadow-xl" />
            </div>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground md:text-[17px]">
              <p>Bright Brush and Bristles Work India is among the oldest companies in India operating in this industry. Established in 2018, the company has set up its manufacturing and marketing unit in Uttar Pradesh, India. We are a certified manufacturer of pig hair and boar bristles and have been awarded the ISO 9001 Quality Certificate.</p>
              <p>Our sister concern, Sri Sitaram Trading Company, holds 40% to 55% of the Indian domestic market for pig bristles. As one of the largest manufacturer of bristles in India, we take pride in delivering quality products with transparency. This approach has enabled us to establish a strong foothold in the international market, and we are continuously expanding.</p>
              <p>Bright Brush and Bristles Work India focuses solely on exports and imports. We do not engage in domestic sales, which are exclusively handled by our sister concern.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="Features" lines={["Why buyers", "work with us."]} />
          <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title} className="group hover-lift rounded-2xl border bg-surface p-6 hover:border-brand/40">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <f.icon size={19} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:px-6 lg:grid-cols-2">
          <Reveal direction="right" className="h-full">
            <div className="hover-lift h-full rounded-3xl border bg-surface p-6 md:p-8">
              <Photo src="/images/office.jpg" alt="Bright Brush and Bristle Works India factory building" ratio="aspect-[1450/650]" sizes="(min-width: 1024px) 50vw, 100vw" className="rounded-2xl" />
              <Eyebrow className="mt-6">Factory Premises</Eyebrow>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{FACTORY_PREMISES}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3">
                {FACTS.map((f) => (
                  <div key={f.label} className="rounded-2xl border bg-background p-4">
                    <dd className="text-xl font-semibold tracking-tight text-brand md:text-2xl">{f.before}<CountUp to={f.to} format={(n) => n.toLocaleString("en-US")} />{f.after}</dd>
                    <dt className="mt-1 text-xs text-muted-foreground">{f.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal direction="left" delay={120} className="h-full">
            <div className="hover-lift h-full rounded-3xl bg-brand p-6 text-white md:p-8">
              <Photo src="/images/delivery.png" alt="Worldwide delivery routes by road, sea and air" ratio="aspect-[1450/650]" sizes="(min-width: 1024px) 50vw, 100vw" className="rounded-2xl" />
              <Eyebrow light className="mt-6">Transport &amp; Transit</Eyebrow>
              <p className="mt-4 text-[15px] leading-relaxed text-white/80">{TRANSPORT}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Reveal>
            <div className="grid items-center gap-8 rounded-3xl bg-brand p-7 md:p-12 lg:grid-cols-2">
              <div>
                <AnimatedHeading light lines={["Premium Bristles", "Delivered Globally"]} />
                <p className="mt-4 max-w-md leading-relaxed text-white/80">High-quality pig hair and boar bristles, crafted with precision and shipped worldwide.</p>
                <div className="mt-6"><MagneticLink href="/products/" className="rounded-full bg-white text-brand">Products</MagneticLink></div>
              </div>
              <Photo src="/images/p-wgb.jpg" alt="White, grey and black natural pig hair bundles" ratio="aspect-[16/10]" sizes="(min-width: 1024px) 50vw, 100vw" className="rounded-2xl shadow-2xl" />
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
            <div className="rounded-3xl border bg-surface p-6 md:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand"><Landmark size={20} strokeWidth={1.75} /></span>
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
