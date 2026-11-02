import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { PRODUCTS, productHref } from "@/lib/site";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero label="What we make" title="Products" image="/images/catalogue/hero-bundles.jpg" />
      <section className="bg-white py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="Our range" lines={["Bristles for", "every brush."]} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 120} className="h-full">
                <Link href={productHref(p.slug)} className="group hover-lift flex h-full flex-col border bg-surface hover:border-bronze/40">
                  <Photo src={p.hero} alt={p.name} ratio="aspect-[16/10]" sizes="(min-width: 768px) 50vw, 100vw" />
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-bronze uppercase">{p.tagline}</p>
                    <h2 className="mt-2 text-xl font-semibold tracking-[-0.02em] md:text-2xl">{p.name}</h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand">
                      View product <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </span>
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
