import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EMAIL, LOCATIONS, PHONES, SERVICES, telHref } from "@/lib/site";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Who we are" title="About Us" />

      <section className="py-12 md:py-17">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-3xl">
              <Image src="/images/factory.jpeg" alt="Bright Brush and Bristle Works India industry" width={660} height={660} className="h-auto w-full transition-transform duration-700 hover:scale-105" />
            </div>
          </Reveal>
          <Reveal direction="left" className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>Bright Brush and Bristle Works India is one of the oldest and most trusted companies in India operating in the bristle and brush industry. Established in 2018, the company has set up its manufacturing and marketing units in Uttar Pradesh, India. We specialize in the certified manufacturing of pig hair and boar bristles and have proudly earned the ISO 9001 Quality Certification.</p>
            <p>As one of the largest distributors and wholesalers of bristles in India, our commitment to quality products and transparent business practices has enabled us to establish a significant presence in international markets, with continuous growth on the horizon.</p>
            <p>For domestic purchases of pig hair, please contact Sri Sitaram Trading Co. For sales of raw bristles, reach out to Bright Brush and Bristle Works India through our manufacturing units.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <Reveal direction="scale">
            <div className="relative aspect-video overflow-hidden rounded-3xl border bg-brand shadow-2xl">
              <iframe
                src="https://www.youtube-nocookie.com/embed/U3W2Mj1fMCE?rel=0"
                title="Bright Brush and Bristle Works India video"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand py-12 text-white md:py-17">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-6 lg:grid-cols-2">
          <div>
            <Eyebrow light>Compliance</Eyebrow>
            <AnimatedHeading text="EU Compliance and Export Authorization" className="mt-6 text-3xl leading-[1.1] md:text-4xl" />
            <Reveal className="mt-6 space-y-4 leading-relaxed text-white/75">
              <p>Bright Brush and Bristle Works India is the only company in India authorized to export bristle products to the European Union. Our company complies with all regulations and standards set by the EU authorities. We are officially authorized by the Ministry of Commerce, and our factory premises have been inspected and approved by relevant government agencies.</p>
              <p>You can also verify our certification on the official EU website, as we meet all the requirements for both EU and non-EU country exports.</p>
            </Reveal>
          </div>
          <div>
            <Eyebrow light>Purpose</Eyebrow>
            <AnimatedHeading text="Our Mission & Vision" className="mt-6 text-3xl leading-[1.1] md:text-4xl" />
            <Reveal className="mt-6 space-y-4 leading-relaxed text-white/75">
              <p>Our mission is to manufacture and continually improve high-quality products at competitive prices while promoting environmental sustainability. We are committed to serving our customers with the utmost integrity and complete satisfaction.</p>
              <p>We aim to uphold the legacy of our company and continue as a premier Indian manufacturer of high-quality bristle products. We are committed to being the supplier of choice whenever our products are required, maintaining the image of excellence and reliability we have built over the years with our suppliers, employees, and community.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Eyebrow>Services</Eyebrow>
          <AnimatedHeading text="Overview of Our Services" className="mt-6 text-4xl md:text-5xl" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 110} className="h-full">
                <div className="hover-lift h-full rounded-2xl border bg-surface p-7">
                  <span className="font-mono-label text-saffron">0{i + 1}</span>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Reveal>
            <div className="rounded-3xl bg-surface p-8 md:p-12">
              <AnimatedHeading text="Office Contacts" className="text-3xl md:text-4xl" />
              <ul className="mt-8 grid gap-6 md:grid-cols-3">
                <li className="flex gap-3"><MapPin size={18} className="mt-1 shrink-0 text-green" /><span className="leading-relaxed text-muted-foreground">{LOCATIONS[2].address}</span></li>
                <li className="flex gap-3"><Phone size={18} className="mt-1 shrink-0 text-green" /><span className="flex flex-col gap-1">{PHONES.slice(0, 2).map((p) => <a key={p} href={telHref(p)} className="hover:text-green">{p}</a>)}</span></li>
                <li className="flex gap-3"><Mail size={18} className="mt-1 shrink-0 text-green" /><a href={`mailto:${EMAIL}`} className="break-all hover:text-green">{EMAIL}</a></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
