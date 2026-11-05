import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { Stagger, StaggerItem } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { EMAIL, LOCATIONS, PHONES, telHref } from "@/lib/site";

export const metadata: Metadata = { title: "About Us" };

const HERITAGE = [
  { year: "1935", body: "Great Grandfather Sarjoo Prasad establishes Shri Sitaram Trading Company in Barhaj, Uttar Pradesh, trading natural pig bristles for international export through agents and brokers, including Begbie, Phillips & Hayley, Limited." },
  { year: "1970s", body: "Export activities continue into the 1970s, building a family tradition in the knowledge, craftsmanship and processing of natural bristles." },
  { year: "2018", body: "In 2018, we established Bright Brush and Bristle Works India as a dedicated manufacturing and export establishment, carrying forward this legacy into modern international markets." },
  { year: "Today", body: "Nearly nine decades after the beginning of our family\u2019s involvement in the industry, we continue operating from Barhaj, preserving the traditional craftsmanship that defines our identity." },
];

const CAPACITY = [
  ["2.5–3 t", "Finished product per month"],
  ["30–35", "Production workers"],
  ["~7", "Administrative professionals"],
];

const JOURNEY = [
  { year: "2018", body: "Our modern international export journey began in 2018 with shipments to Thailand." },
  { year: "2019", body: "We entered the European Union market through Germany, marking an important milestone in our international expansion." },
  { year: "Today", body: "Our export markets span Europe, Asia and the United Kingdom." },
];

const MARKETS = ["Germany", "Italy", "Austria", "France", "Switzerland", "Spain", "South Korea", "United Kingdom"];

export default function AboutPage() {
  return (
    <>
      <PageHero label="Who we are" title="About Us" image="/images/office.jpg" />

      <section className="py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Reveal className="text-center">
            <Eyebrow className="mb-5 justify-center">About Us</Eyebrow>
            <AnimatedHeading lines={["Bright Brush and", "Bristle Works India"]} className="mx-auto text-center" />
            <p className="mt-5 text-2xl text-bronze italic md:text-3xl">The Gold Standard of Indian Bristles</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow className="mb-5">Our Heritage</Eyebrow>
            <AnimatedHeading lines={["A Legacy", "Since 1935"]} />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground md:text-[17px]">
              <p>The story of Bright Brush and Bristle Works India begins in 1935, when our Great Grandfather Sarjoo Prasad established Shri Sitaram Trading Company in the historic town of Barhaj, Uttar Pradesh, India.</p>
              <p>During the British era, the company was involved in the natural pig bristle trade, supplying materials for international export through established agents and brokers. These commercial activities continued into the 1970s, establishing a family tradition rooted in the knowledge, craftsmanship, and processing of natural bristles.</p>
              <p>Although the earlier export operations eventually ceased, the expertise and traditional hand-processing methods remained part of our family&rsquo;s heritage.</p>
            </div>
          </Reveal>
          <Stagger className="relative border-l border-bronze/30 pl-8">
            {HERITAGE.map((h) => (
              <StaggerItem key={h.year} className="relative pb-10 last:pb-0">
                <span aria-hidden className="absolute top-1.5 -left-[38px] h-3 w-3 rounded-full border-2 border-background bg-saffron ring-1 ring-bronze/40" />
                <p className="text-3xl font-semibold tracking-tight text-bronze md:text-4xl">{h.year}</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{h.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-17">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-6 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Image src="/images/catalogue/natural-new-box-hand.jpg" alt="Hand-finished bristle bundles packed in a carton" width={1086} height={1448} sizes="(min-width: 1024px) 50vw, 100vw" className="mx-auto h-auto max-h-[75vh] w-auto max-w-full border shadow-xl" />
          </Reveal>
          <Reveal direction="left">
            <Eyebrow className="mb-5">Craftsmanship</Eyebrow>
            <AnimatedHeading lines={["Traditional Craftsmanship,", "Modern International Standards"]} className="text-[clamp(1.8rem,3vw,2.6rem)]" />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>At Bright Brush and Bristle Works India, the art of natural bristle processing remains deeply connected to our heritage.</p>
              <p>Our manufacturing methods are based on traditional hand-processing techniques passed down through generations. From the careful preparation of raw materials to the meticulous sorting and grading of finished bristles, skilled craftsmanship remains central to our operations.</p>
              <p className="font-semibold text-foreground">We maintain complete in-house manufacturing without outsourcing any stage of production.</p>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-px border bg-border">
              {CAPACITY.map(([v, l]) => (
                <div key={l} className="bg-background p-4 md:p-5">
                  <dt className="text-2xl font-semibold tracking-tight text-bronze md:text-3xl">{v}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground md:text-sm">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-17">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:px-6 lg:grid-cols-2">
          <Reveal direction="right" className="h-full">
            <div className="hover-lift h-full border bg-surface p-7 md:p-10">
              <Eyebrow className="mb-5">Sourcing</Eyebrow>
              <AnimatedHeading lines={["Responsible", "Raw-Material Sourcing"]} className="text-[clamp(1.5rem,2.4vw,2rem)]" />
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>Our commitment to quality begins before manufacturing.</p>
                <p>We procure raw pig bristles exclusively from registered, established slaughterhouses, sourcing materials from pigs declared fit for human consumption.</p>
                <p>We maintain strict procurement practices and purchasing documentation to support traceability and responsible raw-material selection.</p>
                <p>Every stage of manufacturing is conducted within our own establishment, enabling direct oversight of processing conditions, hygiene, product quality, and final packaging.</p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" delay={120} className="h-full">
            <div className="hover-lift h-full border bg-surface p-7 md:p-10">
              <Eyebrow className="mb-5">Quality</Eyebrow>
              <AnimatedHeading lines={["Processing and", "Quality Assurance"]} className="text-[clamp(1.5rem,2.4vw,2rem)]" />
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>All our natural pig bristles undergo essential treatment stages involving boiling, bleaching, washing, drying, and careful hand-processing.</p>
                <p>These procedures are consistently applied to every shipment, regardless of product colour, grade, or export destination.</p>
                <p>Our experienced workforce carefully sorts and grades the finished materials according to length, stiffness, colour, and customer specifications.</p>
                <p>Our product portfolio includes premium Calcutta Extra-Stiff Boar Bristles, natural long-size pig bristles, root-cut and butt-cut bristles, and customized grades for professional brush manufacturing.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand py-12 text-white md:py-17">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <Reveal>
            <Eyebrow light className="mb-5">Regulatory Compliance</Eyebrow>
            <AnimatedHeading light lines={["European Union and", "United Kingdom Compliance"]} className="text-[clamp(1.8rem,3vw,2.6rem)]" />
            <div className="mt-6 space-y-4 leading-relaxed text-white/80">
              <p>Since 2019, Bright Brush and Bristle Works India has supplied treated pig bristles to the European Union and the United Kingdom.</p>
              <p>Our establishment holds approvals relating to Category 3 Animal By-Products for the processing and export of treated pig bristles, subject to the applicable requirements of the destination market.</p>
              <p>Our establishment undergoes comprehensive inspections involving European Union and Indian authorities at intervals of less than two years.</p>
              <p>These inspections generally take two to three days and include examination of procurement and sales records, raw-material traceability, storage conditions, hygiene, and manufacturing areas used for washing, boiling, bleaching, and processing.</p>
              <p>We maintain relevant veterinary and export documentation to support regulatory compliance and international shipment clearance.</p>
            </div>
          </Reveal>
          <Reveal direction="left" delay={120} className="lg:self-center">
            <div className="border border-white/15 p-7 md:p-10">
              <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-saffron uppercase">Quality Management</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">ISO 9001:2015</h3>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/80">
                <p>Bright Brush and Bristle Works India maintains an ISO 9001:2015 certified quality management system.</p>
                <p>Our certification supports our commitment to consistent manufacturing practices, quality assurance, documentation, and continual improvement.</p>
                <p>Our quality management approach combines traditional craftsmanship with structured procedures appropriate for international manufacturing and export operations.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="Our International Journey" lines={["From Barhaj", "to the World"]} note="We aim to develop lasting relationships with professional brush manufacturers through consistent quality, reliable supply, transparent communication, and a clear understanding of individual product requirements." />
          <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {JOURNEY.map((j) => (
              <StaggerItem key={j.year} className="hover-lift border bg-surface p-6 hover:border-bronze/40">
                <p className="text-3xl font-semibold tracking-tight text-bronze">{j.year}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{j.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-6">
            <ul className="flex flex-wrap gap-2">
              {MARKETS.map((m) => <li key={m} className="border bg-background px-4 py-2 text-sm font-medium">{m}</li>)}
            </ul>
            <p className="mt-4 text-muted-foreground">The United Kingdom remains one of our principal international markets.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-6 lg:grid-cols-2 lg:gap-14">
          <Reveal direction="right">
            <Eyebrow className="mb-5">Our People and Our Roots</Eyebrow>
            <AnimatedHeading lines={["Rooted in", "Barhaj"]} />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>Our greatest strength lies in the people who preserve our traditional manufacturing expertise.</p>
              <p>Operating from Barhaj, a small town near Gorakhpur in Uttar Pradesh, we remain committed to the community where our family&rsquo;s bristle-trading journey began.</p>
              <p>Our skilled workforce represents the continuation of a traditional craft that has been practiced locally for generations.</p>
              <p>We take pride in maintaining these skills while creating employment opportunities and connecting our hometown with international manufacturing industries.</p>
            </div>
          </Reveal>
          <Reveal>
            <Image src="/images/packing-team.jpg" alt="Our team sorting and packing bristles for export" width={1400} height={1050} sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full border shadow-xl" />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="Our Vision" lines={["A Message from the", "Owner & Director"]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[420px_1fr] lg:gap-14">
            <Stagger className="grid grid-cols-2 gap-4 lg:self-start">
              {["/images/founder-1.jpg", "/images/founder-2.jpg"].map((src) => (
                <StaggerItem key={src} className="relative aspect-[3/4] overflow-hidden border shadow-lg">
                  <Image src={src} alt="Owner & Director, Bright Brush and Bristle Works India" fill sizes="(min-width: 1024px) 210px, 50vw" className="object-cover object-top" />
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal direction="left">
              <blockquote className="relative border-l-4 border-saffron pl-6 md:pl-8">
                <span aria-hidden className="absolute -top-6 left-4 text-7xl leading-none text-bronze/25">&ldquo;</span>
                <div className="space-y-4 text-lg leading-relaxed md:text-xl">
                  <p>My vision is to establish Bright Brush and Bristle Works India as a globally respected name in the natural bristle industry, strengthening our presence and reaching brush manufacturers throughout the European Union and the United Kingdom.</p>
                  <p>I believe that lasting success is built not merely on supplying products, but on earning the trust and confidence of every customer we serve. Through uncompromising quality, dependable service, and long-term partnerships, we aspire to make Indian natural boar bristles a benchmark for excellence in international markets.</p>
                  <p>Guided by our family&rsquo;s heritage dating back to 1935, my ambition is to carry generations of traditional craftsmanship into the future, strengthening India&rsquo;s position in the global bristle industry while remaining true to the values upon which our business was founded.</p>
                </div>
                <footer className="mt-6">
                  <p className="text-lg font-semibold">Armaan Pratap and Pratap Bahadur Sitaram</p>
                  <p className="text-sm text-muted-foreground">Owner &amp; Director, Bright Brush and Bristle Works India</p>
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-17">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-6">
          <Reveal>
            <Eyebrow className="mb-5 justify-center">Our Vision</Eyebrow>
            <p className="text-xl leading-relaxed md:text-2xl">Our vision is to strengthen India&rsquo;s reputation as a dependable international source of premium natural boar bristles through traditional craftsmanship, responsible sourcing, consistent quality, and long-term customer partnerships.</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">We remain committed to preserving our family&rsquo;s manufacturing heritage while continuously improving our operations to meet the expectations of international markets.</p>
            <div aria-hidden className="mx-auto mt-8 h-0.5 w-16 bg-saffron" />
            <p className="mt-8 text-lg font-semibold">Bright Brush and Bristle Works India</p>
            <p className="mt-1 text-2xl text-bronze italic md:text-3xl">The Gold Standard of Indian Bristles.</p>
            <p className="mt-3 text-muted-foreground">Preserving a tradition since 1935. Serving international markets through our modern export establishment since 2018.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Reveal direction="scale" className="relative aspect-video md:aspect-auto md:h-[549px] overflow-hidden border bg-black shadow-xl">
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
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Reveal>
            <div className="bg-brand p-7 text-white md:p-12">
              <AnimatedHeading light lines={["Office Contacts"]} />
              <ul className="mt-6 flex flex-col gap-5 text-white/85 md:flex-row md:gap-16">
                <li className="flex max-w-sm gap-3"><MapPin size={18} className="mt-0.5 shrink-0" />{LOCATIONS[2].address}</li>
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
