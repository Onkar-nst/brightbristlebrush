"use client";

import Image from "next/image";

import { ArrowRight, BadgeCheck, Factory, Handshake, Landmark, Plane } from "lucide-react";
import Link from "next/link";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { HomeHero } from "@/components/HomeHero";
import { CountUp, MagneticLink, Stagger, StaggerItem } from "@/components/Motion";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { COMPLIANCE_BADGES } from "@/lib/catalogue";

const STRIP_LOGOS = [
  ...COMPLIANCE_BADGES,
  { src: "/images/compliance/apha.png", label: "Animal & Plant Health Agency (APHA) compliant" },
  { src: "/images/compliance/defra.png", label: "Department for Environment, Food & Rural Affairs", wide: true },
  { src: "/images/compliance/european-commission.png", label: "European Commission (DG SANTE) compliant", wide: true },
];
import { BANK, FACTORY_PREMISES, FEATURES, HIGHLIGHTS, TRANSPORT } from "@/lib/site";

const DHL_ROUTES = [
  { title: "European Union", body: "Our shipments are generally cleared at Leipzig, Germany, which serves as a major point of entry into the EU, before being forwarded to their final destinations. Alternatively, shipments may be cleared directly at the destination country\u2019s port of entry. All customs clearance procedures are handled by DHL, and shipments are delivered under DAP (Delivered at Place) terms." },
  { title: "United Kingdom", body: "Our shipments are primarily cleared through East Midlands Airport and London Stansted Airport, with customs clearance and onward delivery managed by DHL." },
];

const WELCOME_POINTS = [
  { icon: BadgeCheck, label: "ISO 9001 Certified" },
  { icon: Factory, label: "Manufacturing in-House" },
  { icon: Plane, label: "Focused 100% Export" },
  { icon: Handshake, label: "Sister concern Shree Sitaram Trading Company" },
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
        <Reveal className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
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

      <section className="pb-15 md:pb-21">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-[520px_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative mx-auto max-w-xl lg:mx-0">
              <div aria-hidden className="absolute -top-4 -left-4 hidden h-24 w-24 border border-bronze/30 md:block" />
              <Image src="/images/welcome-range.jpg" alt="Bright Brush and Bristle Works India bristle range, an EU and UK approved establishment since 2019" width={1356} height={1159} sizes="(min-width: 1024px) 520px, 100vw" className="h-auto w-full border shadow-xl" />
              <div className="absolute -bottom-6 left-6 bg-brand px-7 py-5 text-white shadow-2xl md:left-10">
                <div className="text-4xl leading-none font-bold md:text-5xl"><CountUp to={2018} /></div>
                <div className="mt-2 font-mono text-[10px] font-semibold tracking-[0.14em] text-white/70 uppercase">Established</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" className="lg:py-2">
            <Eyebrow className="mb-5">Welcome</Eyebrow>
            <AnimatedHeading lines={["Premium Natural Boar Bristle Manufacturer", "& Pig Bristle Exporter from India"]} className="text-[clamp(1.8rem,3vw,2.5rem)]" />
            <div aria-hidden className="mt-5 h-0.5 w-16 bg-saffron" />
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground md:text-[17px]">
              <p>Bright Brush &amp; Bristle Works India is a specialized boar bristle manufacturer in India and an established pig bristle exporter from India, supplying premium natural boar bristles, pig hair, and hog bristles to professional brush manufacturers worldwide.</p>
              <p>As a trusted natural boar bristle supplier and pig hair manufacturer in India, we specialize exclusively in the in-house processing, grading, and manufacturing of natural pig bristles for luxury hairbrushes, grooming brushes, paintbrushes, and industrial brush applications.</p>
              <p>Our product range includes Calcutta Extra-Stiff Boar Bristles, natural black and grey long-size bristles, and premium first-cut and second-cut root-cut bristles, available in various lengths, colors, and grades to meet the specific requirements of international brush manufacturers.</p>
              <p>As an established hog hair exporter from India, we supply wholesale boar bristles and operate as a bulk pig bristles supplier, with a monthly finished production capacity of approximately 2,500–3,000 kilograms.</p>
              <p>Unlike trading companies, we maintain complete control over our manufacturing operations. Every stage, from raw material selection and boiling to bleaching, sorting, grading, and final packaging, is carried out within our own manufacturing facility.</p>
            </div>
            <h3 className="mt-8 text-xl font-semibold tracking-[-0.01em] md:text-2xl">EU &amp; UK Approved Animal By-Product Establishment Since 2019</h3>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground md:text-[17px]">
              <p>We are an ISO 9001:2015-certified manufacturer with an EU and UK approved Animal By-Product (ABP) establishment. Our processing procedures and export documentation support the international supply of treated natural pig bristles to European and British brush manufacturers.</p>
              <p>Our manufacturing heritage dates back to 1935, through our sister concern, Shri Sitaram Trading Company, reflecting generations of experience in India&rsquo;s traditional pig bristle industry.</p>
              <p>Whether you require premium natural boar bristles for luxury grooming products or natural pig hair for brush manufacturing, we offer consistent quality, dependable bulk supply, and professional international export services.</p>
            </div>
            <p className="mt-6 border-l-4 border-saffron bg-bronze/10 px-5 py-4 text-lg leading-relaxed font-semibold text-brand md:text-xl">Bright Brush &amp; Bristle Works India — The Gold Standard of Indian Bristles.</p>
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
            <div className="grid gap-8 bg-[linear-gradient(180deg,#fbd84d_0%,#ffd200_45%,#ffcc00_100%)] p-6 text-brand md:p-10 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
              <div>
                <AnimatedHeading lines={["Premium Bristles", "Delivered Globally"]} className="text-[clamp(1.8rem,3vw,2.6rem)]" />
                <p className="mt-4 text-[15px] leading-relaxed text-brand/85">We maintain a dedicated DHL shipping account for our exports to the European Union and the United Kingdom, ensuring reliable customs clearance and timely delivery.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {DHL_ROUTES.map((r) => (
                    <div key={r.title} className="border border-brand/15 bg-white/45 p-4">
                      <p className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase">{r.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-brand/80">{r.body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex flex-col gap-4 border border-brand/15 bg-white/45 p-4 sm:flex-row sm:items-center">
                  <div className="shrink-0 sm:w-36">
                    <p className="text-3xl leading-none font-semibold tracking-tight">6–7</p>
                    <p className="mt-1 font-mono text-[10px] font-bold tracking-[0.14em] uppercase">working days or less</p>
                  </div>
                  <p className="text-sm leading-relaxed text-brand/80"><strong className="text-brand">DHL Customs Clearance &amp; Delivery Time:</strong> From the date of pickup, the entire process, including international transportation, customs clearance, and final delivery, typically takes 6–7 working days or less for shipments to the European Union and the United Kingdom. DHL&rsquo;s efficient logistics network and prompt customs handling enable us to maintain consistently fast and reliable delivery schedules.</p>
                </div>
              </div>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Image src="/images/dhl-delivery.jpg" alt="DHL aircraft, truck and van used for our EU and UK shipments" width={588} height={330} sizes="(min-width: 1024px) 40vw, 100vw" className="h-auto w-full shadow-2xl" />
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 bg-brand px-5 py-3.5 text-white">
                  <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-[#ffcc00] uppercase">DHL Account Number</span>
                  <span className="text-xl font-semibold tracking-wide">531297214</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-brand/80">This established logistics arrangement enables us to provide efficient, reliable, and streamlined shipping services to our European and UK customers. Our established partnership with DHL allows us to provide customers with a streamlined, dependable, and efficient international shipping experience.</p>
                <div className="mt-5"><MagneticLink href="/products/" className="bg-brand text-white">Products</MagneticLink></div>
              </div>
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
      <section aria-label="Certifications and export approvals" className="border-t bg-surface py-8 md:py-10">
        <div className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
          <div className="marquee-track flex w-max items-center [--marquee-duration:40s]">
            {[0, 1].map((copy) =>
              STRIP_LOGOS.map((b) => (
                <div key={`${copy}-${b.src}`} aria-hidden={copy === 1 || undefined} className={`relative h-28 shrink-0 border-r md:h-32 ${"wide" in b ? "w-56 md:w-64" : "w-28 md:w-32"}`}>
                  <Image src={b.src} alt={copy === 1 ? "" : b.label} fill sizes="128px" className="object-contain p-3" />
                </div>
              )),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
