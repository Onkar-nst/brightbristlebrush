"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { BANK, FACTORY_PREMISES, FEATURES, TRANSPORT } from "@/lib/site";

const FACTS = [
  ["20,000 sq. ft.", "Total factory area"],
  ["50 to 70", "Workmen on-site"],
  ["4 days", "To reach New Delhi"],
];

export default function Home() {
  return (
    <>
      <section className="pt-22 md:pt-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 pt-10 md:px-6 lg:grid-cols-12 lg:gap-6 lg:pt-14">
          <div className="lg:col-span-7">
            <p className="text-sm">Bright Brush and Bristles</p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 font-serif text-[clamp(3.25rem,11vw,7.5rem)] leading-[0.95] tracking-[-0.025em]"
            >
              Global reach, <em className="text-green">local touch.</em>
            </motion.h1>
          </div>
          <div className="self-end pb-2 lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-muted-foreground">
              We specialize in manufacturing and exporting high-quality pig hair products, including boar bristle and hog hair, as a dedicated and focused supplier of these items.
            </p>
            <div className="mt-5 flex gap-6 text-[15px] font-semibold">
              <Link href="/products/" className="underline decoration-saffron decoration-2 underline-offset-4 hover:text-green">See the products</Link>
              <Link href="/contact-us/" className="underline decoration-foreground/30 decoration-2 underline-offset-4 hover:text-green">Contact us</Link>
            </div>
          </div>
        </div>
        <Photo src="/images/range.jpg" alt="Range of bristle bundles from Bright Brush and Bristle Works India" ratio="aspect-[4/3] md:aspect-[16/7]" position="object-[center_72%]" priority className="mt-8 md:mt-10" />
      </section>

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

      <section className="bg-brand py-12 text-brand-foreground md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <AnimatedHeading text="Features" className="border-b border-white/30 pb-4 text-5xl md:text-7xl" />
          <ol className="grid md:grid-cols-2 md:gap-x-12">
            {FEATURES.map((f, i) => (
              <li key={f.title} className="grid grid-cols-[2.25rem_1fr] border-b border-white/20 py-5">
                <span className="font-serif text-lg text-saffron italic">{i + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl">{f.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/70">{f.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="grid lg:grid-cols-12">
          <Photo src="/images/office.jpg" alt="Bright Brush and Bristle Works India factory building" ratio="aspect-[16/9] lg:aspect-auto lg:min-h-full" sizes="(min-width: 1024px) 58vw, 100vw" className="lg:col-span-7" />
          <div className="px-5 py-10 md:px-10 md:py-14 lg:col-span-5">
            <h3 className="font-serif text-4xl">Factory Premises</h3>
            <p className="mt-4 text-[17px] leading-relaxed">{FACTORY_PREMISES}</p>
            <dl className="mt-6 border-t border-foreground">
              {FACTS.map(([value, label]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 border-b py-2.5">
                  <dt className="text-sm text-muted-foreground">{label}</dt>
                  <dd className="font-serif text-xl">{value}</dd>
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

      <section className="border-b border-foreground">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-19">
          <AnimatedHeading text="Premium Bristles Delivered Globally" className="text-5xl leading-[1] md:text-8xl" />
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
            <dl className="border-y-2 border-foreground">
              {BANK.map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b py-3.5 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-4">
                  <dt className="text-sm text-muted-foreground">{k}</dt>
                  <dd className="font-serif text-xl break-words">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
