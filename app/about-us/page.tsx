import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { Stagger, StaggerItem } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { EMAIL, LOCATIONS, PHONES, SERVICES, telHref } from "@/lib/site";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero label="Who we are" title="About Us" image="/images/office.jpg" />

      <section className="py-12 md:py-17">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:px-6 lg:grid-cols-[420px_1fr] lg:gap-12">
          <Reveal>
            <Photo src="/images/factory.jpeg" alt="Bright Brush and Bristle Works India industry" ratio="aspect-square" sizes="(min-width: 1024px) 420px, 100vw" className="rounded-3xl border shadow-xl" />
          </Reveal>
          <Reveal direction="left">
            <Eyebrow className="mb-5">About Us</Eyebrow>
            <AnimatedHeading lines={["Bright Brush and", "Bristle Works India"]} />
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>Bright Brush and Bristle Works India is one of the oldest and most trusted companies in India operating in the bristle and brush industry. Established in 2018, the company has set up its manufacturing and marketing units in Uttar Pradesh, India. We specialize in the certified manufacturing of pig hair and boar bristles and have proudly earned the ISO 9001 Quality Certification.</p>
              <p>As one of the largest distributors and wholesalers of bristles in India, our commitment to quality products and transparent business practices has enabled us to establish a significant presence in international markets, with continuous growth on the horizon.</p>
              <p>For domestic purchases of pig hair, please contact Sri Sitaram Trading Co. For sales of raw bristles, reach out to Bright Brush and Bristle Works India through our manufacturing units.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <Reveal direction="scale" className="relative aspect-video overflow-hidden rounded-3xl border bg-black shadow-xl">
            <iframe
              src="https://www.youtube-nocookie.com/embed/U3W2Mj1fMCE?rel=0"
              title="Bright Brush and Bristle Works India video"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              />
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:px-6 lg:grid-cols-2">
          <Reveal direction="right" className="h-full">
            <div className="hover-lift h-full rounded-3xl border bg-surface p-7 md:p-10">
              <Eyebrow className="mb-5">Compliance</Eyebrow>
              <AnimatedHeading lines={["EU Compliance and", "Export Authorization"]} className="text-[clamp(1.5rem,2.4vw,2rem)]" />
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>Bright Brush and Bristle Works India is the only company in India authorized to export bristle products to the European Union. Our company complies with all regulations and standards set by the EU authorities. We are officially authorized by the Ministry of Commerce, and our factory premises have been inspected and approved by relevant government agencies.</p>
                <p>You can also verify our certification on the official EU website, as we meet all the requirements for both EU and non-EU country exports.</p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" delay={120} className="h-full">
            <div className="hover-lift h-full rounded-3xl bg-brand p-7 text-white md:p-10">
              <Eyebrow light className="mb-5">Purpose</Eyebrow>
              <AnimatedHeading light lines={["Our Mission", "& Vision"]} className="text-[clamp(1.5rem,2.4vw,2rem)]" />
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-white/80">
                <p>Our mission is to manufacture and continually improve high-quality products at competitive prices while promoting environmental sustainability. We are committed to serving our customers with the utmost integrity and complete satisfaction.</p>
                <p>We aim to uphold the legacy of our company and continue as a premier Indian manufacturer of high-quality bristle products. We are committed to being the supplier of choice whenever our products are required, maintaining the image of excellence and reliability we have built over the years with our suppliers, employees, and community.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="Services" lines={["Overview of", "Our Services"]} />
          <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <StaggerItem key={s.title} className="hover-lift rounded-2xl border bg-surface p-6 hover:border-brand/40">
                <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-brand">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Reveal>
            <div className="rounded-3xl bg-brand p-7 text-white md:p-12">
              <AnimatedHeading light lines={["Office Contacts"]} />
              <ul className="mt-6 grid gap-5 text-white/85 md:grid-cols-3">
                <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0" />{LOCATIONS[2].address}</li>
                <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0" /><span className="flex flex-col gap-1">{PHONES.slice(0, 2).map((p) => <a key={p} href={telHref(p)} className="hover:text-white">{p}</a>)}</span></li>
                <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0" /><a href={`mailto:${EMAIL}`} className="break-all hover:text-white">{EMAIL}</a></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
