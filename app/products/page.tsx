import type { Metadata } from "next";
import { Bristles } from "@/components/Bristles";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PRODUCTS } from "@/lib/site";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="What we make" title="Products" />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-20 px-5 md:space-y-28 md:px-6">
          {PRODUCTS.map((p, i) => (
            <article key={p.name} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <Reveal direction={i % 2 ? "left" : "right"} className={i % 2 ? "lg:order-2" : ""}>
                <div className="relative h-72 overflow-hidden rounded-3xl border bg-surface md:h-[28rem]">
                  <Bristles palette={p.palette} density={1.4} />
                  <span className="font-mono-label absolute top-5 left-5 rounded-full bg-background/85 px-3 py-1 text-muted-foreground backdrop-blur">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
              <Reveal direction={i % 2 ? "right" : "left"}>
                <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">{p.name}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
                <h3 className="font-mono-label mt-7 text-green">Key Features</h3>
                <dl className="mt-2 divide-y border-y">
                  {p.specs.map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3 text-sm">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
