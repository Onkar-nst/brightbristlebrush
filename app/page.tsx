"use client";

import { AnimatedHeading } from "@/components/AnimatedHeading";
import { HomeHero } from "@/components/HomeHero";
import { CountUp, Marquee, Rule, ScrollText, Stagger, StaggerItem } from "@/components/Motion";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { BANK, FACTORY_PREMISES, FEATURES, TRANSPORT } from "@/lib/site";

const FACTS = [
  { label: "Total factory area", to: 20000, after: " sq. ft." },
  { label: "Workmen on-site", before: "50 to ", to: 70 },
  { label: "To reach New Delhi", to: 4, after: " days" },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="py-12 md:py-17">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-6 lg:grid-cols-12 lg:gap-6">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <AnimatedHeading text="Welcome to Bright Brush and Bristles Work India" className="text-4xl leading-[1.08] md:text-[3.25rem]" />
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <Photo src="/images/inspection.jpg" alt="Measuring packed bristle bundles with calipers" ratio="aspect-[1450/650]" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed">
              <p className="font-serif text-2xl leading-snug">Bright Brush and Bristles Work India is among the oldest companies in India operating in this industry. Established in 2018, the company has set up its manufacturing and marketing unit in Uttar Pradesh, India. We are a certified manufacturer of pig hair and boar bristles and have been awarded the ISO 9001 Quality Certificate.</p>
              <p>Our sister concern, Sri Sitaram Trading Company, holds 40% to 55% of the Indian domestic market for pig bristles. As one of the largest manufacturer of bristles in India, we take pride in delivering quality products with transparency. This approach has enabled us to establish a strong foothold in the international market, and we are continuously expanding.</p>
              <p>Bright Brush and Bristles Work India focuses solely on exports and imports. We do not engage in domestic sales, which are exclusively handled by our sister concern.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee items={["Pig Hair", "Boar Bristle", "Hog Hair", "ISO 9001", "Free Samples", "Live Factory Tour"]} speed={1.6} className="border-y border-foreground py-3 font-serif text-3xl md:text-5xl" />

      <section className="bg-brand py-12 text-brand-foreground md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <AnimatedHeading text="Features" className="border-b border-white/30 pb-4 text-5xl md:text-7xl" />
          <Stagger as="ol" className="grid md:grid-cols-2 md:gap-x-12">
            {FEATURES.map((f, i) => (
              <StaggerItem as="li" key={f.title} className="group relative grid grid-cols-[2.25rem_1fr] border-b border-white/20 py-5">
                <span className="font-serif text-lg text-saffron italic transition-transform duration-300 group-hover:scale-125">{i + 1}</span>
                <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
                  <h3 className="font-serif text-2xl transition-colors duration-300 group-hover:text-saffron">{f.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white">{f.body}</p>
                </div>
                <span aria-hidden className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-saffron transition-transform duration-700 ease-out group-hover:scale-x-100" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section>
        <div className="grid lg:grid-cols-12">
          <Photo src="/images/office.jpg" alt="Bright Brush and Bristle Works India factory building" ratio="aspect-[16/9] lg:aspect-auto lg:min-h-full" sizes="(min-width: 1024px) 58vw, 100vw" className="lg:col-span-7" />
          <div className="px-5 py-10 md:px-10 md:py-14 lg:col-span-5">
            <h3 className="font-serif text-4xl">Factory Premises</h3>
            <p className="mt-4 text-[17px] leading-relaxed">{FACTORY_PREMISES}</p>
            <Rule className="mt-6 bg-foreground" />
            <dl>
              {FACTS.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-4 border-b py-2.5">
                  <dt className="text-sm text-muted-foreground">{f.label}</dt>
                  <dd className="font-serif text-2xl">{f.before}<CountUp to={f.to} format={(n) => n.toLocaleString("en-US")} />{f.after}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="grid bg-surface lg:grid-cols-12">
          <div className="order-2 px-5 py-10 md:px-10 md:py-14 lg:order-1 lg:col-span-5">
            <h3 className="font-serif text-4xl">Transport &amp; Transit</h3>
            <p className="mt-4 text-[17px] leading-relaxed">{TRANSPORT}</p>
          </div>
          <Photo src="/images/delivery.png" alt="Worldwide delivery routes by road, sea and air" ratio="aspect-[16/9] lg:aspect-auto lg:min-h-full" sizes="(min-width: 1024px) 58vw, 100vw" className="order-1 lg:order-2 lg:col-span-7" />
        </div>
      </section>

      <section className="overflow-hidden border-b border-foreground py-12 md:py-19">
        <h2 className="sr-only">Premium Bristles Delivered Globally</h2>
        <div aria-hidden className="font-serif leading-[1.05] tracking-[-0.02em]">
          <ScrollText className="text-[13vw] whitespace-nowrap" from="4%" to="-14%">Premium Bristles</ScrollText>
          <ScrollText className="text-[13vw] whitespace-nowrap text-green italic" from="-10%" to="10%"><span className="pl-[14vw]">Delivered Globally</span></ScrollText>
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <p className="mt-4 max-w-xl text-lg text-muted-foreground md:ml-auto md:text-right">High-quality pig hair and boar bristles, crafted with precision and shipped worldwide.</p>
        </div>
      </section>

      <section className="py-12 md:py-17">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-6 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <AnimatedHeading text="ISO Certified & Banking Partner Details" className="text-4xl leading-[1.08] md:text-[3.25rem]" />
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed">
              <p>We are proud to be an ISO 9001 certified company, ensuring that our products and processes meet international quality standards. Our commitment to transparency, reliability, and continuous improvement reflects in every aspect of our operations, from manufacturing to customer service.</p>
              <p>For smooth financial transactions, we maintain a trusted partnership with HDFC Bank Ltd. Below are our banking details:</p>
            </div>
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <Stagger as="dl" className="border-y-2 border-foreground">
              {BANK.map(([k, v]) => (
                <StaggerItem key={k} className="grid gap-1 border-b py-3.5 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-4">
                  <dt className="text-sm text-muted-foreground">{k}</dt>
                  <dd className="font-serif text-xl break-words">{v}</dd>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </section>
    </>
  );
}
