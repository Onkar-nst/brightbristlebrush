import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { Stagger, StaggerItem } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { EU_APPROVAL } from "@/lib/catalogue";
import { EMAIL, PRODUCTS, productHref } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  return product ? { title: product.name, description: product.body } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PRODUCTS.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = PRODUCTS.filter((x) => x.slug !== slug);
  const enquiry = `mailto:${EMAIL}?subject=${encodeURIComponent(`Enquiry: ${p.name}`)}`;

  return (
    <>
      <PageHero label={p.tagline} title={p.name} image={p.hero} />

      <section className="py-12 md:py-17">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 md:px-6 lg:grid-cols-2 lg:gap-14">
          <Reveal className="lg:sticky lg:top-28">
            <Photo src={p.hero} alt={p.name} ratio="aspect-[4/5]" priority sizes="(min-width: 1024px) 50vw, 100vw" className="border shadow-xl" />
          </Reveal>
          <div>
            <Eyebrow className="mb-5">Overview</Eyebrow>
            <AnimatedHeading lines={[p.name]} />
            <Reveal><p className="mt-5 leading-relaxed text-muted-foreground">{p.body}</p></Reveal>

            {p.blocks?.map((b) => (
              <Reveal key={b.title} className="mt-6 border-l-2 border-bronze pl-5">
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted-foreground">{b.body}</p>
              </Reveal>
            ))}

            <Stagger as="dl" className="mt-8 grid gap-3 sm:grid-cols-2">
              {p.facts.map(([k, v]) => (
                <StaggerItem key={k} className="border bg-surface p-4">
                  <dt className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bronze uppercase">{k}</dt>
                  <dd className="mt-1.5 font-medium">{v}</dd>
                </StaggerItem>
              ))}
            </Stagger>

            {p.measure && (
              <Reveal className="mt-6 bg-brand p-6 text-white">
                <p className="text-sm text-white/70">{p.measure.label}</p>
                <p className="mt-1 text-4xl font-semibold tracking-tight text-saffron md:text-5xl">{p.measure.value}</p>
                <p className="mt-2 text-sm text-white/70">{p.measure.note}</p>
              </Reveal>
            )}

            <Reveal className="mt-8">
              <h3 className="font-mono text-[11px] font-bold tracking-[0.14em] text-brand uppercase">Applications</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.applications.map((a) => <li key={a} className="border bg-surface px-3 py-1.5 text-sm">{a}</li>)}
              </ul>
            </Reveal>

            <Reveal className="mt-8">
              <h3 className="font-mono text-[11px] font-bold tracking-[0.14em] text-brand uppercase">Key Features</h3>
              <Stagger as="dl" className="mt-3 space-y-2.5">
                {p.specs.map(([k, v]) => (
                  <StaggerItem key={k} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-bronze/10 text-bronze"><Check size={11} strokeWidth={3} /></span>
                    <div className="flex flex-wrap gap-x-1.5"><dt className="font-semibold">{k}:</dt><dd className="text-muted-foreground">{v}</dd></div>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={enquiry} className="inline-flex items-center gap-2 bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-bronze">Enquire about this product <ArrowRight size={15} /></a>
              <Link href="/products/" className="inline-flex items-center border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-brand">All products</Link>
            </div>
          </div>
        </div>
      </section>

      {p.grades && (
        <section className="pb-12 md:pb-17">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <SectionHead label="Grade Guide" lines={["Choose the", "right stiffness."]} />
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {p.grades.map(([name, desc], i) => (
                <StaggerItem key={name} className="hover-lift border bg-surface p-5">
                  <span className="font-mono text-[11px] font-bold text-bronze">0{i + 1}</span>
                  <h3 className="mt-2 font-semibold">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {p.lengths && (
        <section className="pb-12 md:pb-17">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <SectionHead label="Natural colours" lines={["Black, grey", "and white bristles."]} />
            <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
              {p.lengths.map((l) => (
                <StaggerItem key={l.name} className="hover-lift border bg-surface">
                  <div className="relative aspect-[4/5] bg-white"><Image src={l.image} alt={l.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain p-4" /></div>
                  <div className="border-t p-5 text-center">
                    <h3 className="font-semibold tracking-wide uppercase">{l.name}</h3>
                    <p className="mt-1 text-muted-foreground">{l.range}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="Gallery" lines={["From our", "production floor."]} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.gallery.map((g) => (
              <Reveal key={g.src} direction="scale">
                <figure>
                  <Photo src={g.src} alt={g.caption ?? p.name} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 33vw, 50vw" className="border" />
                  {g.caption && <figcaption className="mt-2 text-sm text-muted-foreground italic">{g.caption}</figcaption>}
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Reveal className="flex flex-col items-start justify-between gap-5 bg-brand p-7 text-white md:flex-row md:items-center md:p-10">
            <div>
              <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-white/60 uppercase">Export &amp; Compliance</p>
              <p className="mt-2 text-xl font-semibold md:text-2xl">EU approved establishment • {EU_APPROVAL.number}</p>
              <p className="mt-1 text-white/70">Packaging, lead times, payment terms and certifications for every shipment.</p>
            </div>
            <Link href="/legal/" className="inline-flex shrink-0 items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-saffron">Export details <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="More products" lines={["Explore the", "rest of the range."]} />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 100}>
                <Link href={productHref(o.slug)} className="group hover-lift block border bg-surface">
                  <Photo src={o.hero} alt={o.name} ratio="aspect-[16/10]" sizes="(min-width: 768px) 33vw, 100vw" />
                  <div className="flex items-center justify-between gap-3 p-5">
                    <h3 className="font-semibold">{o.name}</h3>
                    <ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
