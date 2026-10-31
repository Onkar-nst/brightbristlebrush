import type { Metadata } from "next";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Stagger, StaggerItem } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { EMAIL, LOCATIONS, PHONES, SERVICES, telHref } from "@/lib/site";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" />

      <section className="py-12 md:py-17">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-6 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5"><Photo src="/images/factory.jpeg" alt="Bright Brush and Bristle Works India industry" ratio="aspect-square" sizes="(min-width: 1024px) 42vw, 100vw" /></div>
          <Reveal className="space-y-5 text-[17px] leading-relaxed lg:col-span-6 lg:col-start-7">
            <p className="font-serif text-2xl leading-snug">Bright Brush and Bristle Works India is one of the oldest and most trusted companies in India operating in the bristle and brush industry. Established in 2018, the company has set up its manufacturing and marketing units in Uttar Pradesh, India. We specialize in the certified manufacturing of pig hair and boar bristles and have proudly earned the ISO 9001 Quality Certification.</p>
            <p>As one of the largest distributors and wholesalers of bristles in India, our commitment to quality products and transparent business practices has enabled us to establish a significant presence in international markets, with continuous growth on the horizon.</p>
            <p>For domestic purchases of pig hair, please contact Sri Sitaram Trading Co. For sales of raw bristles, reach out to Bright Brush and Bristle Works India through our manufacturing units.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand">
        <div className="mx-auto max-w-5xl">
          <Reveal direction="scale" className="relative aspect-video">
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

      <section className="py-12 md:py-17">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="border-t-2 border-foreground pt-4">
            <AnimatedHeading text="EU Compliance and Export Authorization" className="text-4xl leading-[1.1]" />
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>Bright Brush and Bristle Works India is the only company in India authorized to export bristle products to the European Union. Our company complies with all regulations and standards set by the EU authorities. We are officially authorized by the Ministry of Commerce, and our factory premises have been inspected and approved by relevant government agencies.</p>
              <p>You can also verify our certification on the official EU website, as we meet all the requirements for both EU and non-EU country exports.</p>
            </div>
          </div>
          <div className="border-t-2 border-foreground pt-4">
            <AnimatedHeading text="Our Mission & Vision" className="text-4xl leading-[1.1]" />
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>Our mission is to manufacture and continually improve high-quality products at competitive prices while promoting environmental sustainability. We are committed to serving our customers with the utmost integrity and complete satisfaction.</p>
              <p>We aim to uphold the legacy of our company and continue as a premier Indian manufacturer of high-quality bristle products. We are committed to being the supplier of choice whenever our products are required, maintaining the image of excellence and reliability we have built over the years with our suppliers, employees, and community.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <AnimatedHeading text="Overview of Our Services" className="border-b border-foreground pb-4 text-4xl md:text-6xl" />
          <Stagger>
          {SERVICES.map((s) => (
            <StaggerItem key={s.title} className="grid gap-2 border-b py-6 transition-colors duration-300 hover:bg-background/60 md:grid-cols-12 md:gap-6">
              <h3 className="font-serif text-2xl md:col-span-4 md:text-3xl">{s.title}</h3>
              <p className="leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6">{s.body}</p>
            </StaggerItem>
          ))}
          </Stagger>
        </div>
      </section>

      <section className="py-12 md:py-17">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-12 md:px-6">
          <AnimatedHeading text="Office Contacts" className="text-4xl md:col-span-4" />
          <address className="not-italic md:col-span-7 md:col-start-6">
            <p className="font-serif text-2xl leading-snug">{LOCATIONS[2].address}</p>
            <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-semibold">
              {PHONES.slice(0, 2).map((p) => <a key={p} href={telHref(p)} className="hover:text-green">{p}</a>)}
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-green">{EMAIL}</a>
            </p>
          </address>
        </div>
      </section>
    </>
  );
}
