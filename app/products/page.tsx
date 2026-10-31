import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { PRODUCTS } from "@/lib/site";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero label="What we make" title="Products" image="/images/p-wgb.jpg" />
      <section className="bg-brand py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead light label="Our range" lines={["Bristles for", "every brush."]} />
          <div className="mt-24 grid gap-x-6 gap-y-24 md:grid-cols-2">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 120} className="h-full">
                <article className="hover-lift relative h-full rounded-3xl bg-background p-6 pt-24 md:p-8 md:pt-24">
                  <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 overflow-hidden rounded-full border-4 border-background shadow-xl">
                    <Image src={p.image} alt={p.name} fill sizes="160px" className="object-cover" />
                  </div>
                  <h2 className="text-center text-xl font-semibold tracking-[-0.02em] text-brand md:text-2xl">{p.name}</h2>
                  <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  <h3 className="mt-6 font-mono text-[11px] font-bold tracking-[0.14em] text-brand uppercase">Key Features</h3>
                  <Stagger as="dl" className="mt-3 space-y-2.5">
                    {p.specs.map(([k, v]) => (
                      <StaggerItem key={k} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"><Check size={11} strokeWidth={3} /></span>
                        <div className="flex flex-wrap gap-x-1.5">
                          <dt className="font-semibold">{k}:</dt>
                          <dd className="text-muted-foreground">{v}</dd>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
