import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { PRODUCTS } from "@/lib/site";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero title="Products" />
      <div className="mx-auto mt-6 max-w-7xl px-5 md:px-6">
        {PRODUCTS.map((p, i) => (
          <article key={p.name} className="grid gap-6 border-b first:border-t border-foreground py-10 md:py-14 lg:grid-cols-12">
            <div className={`lg:col-span-6 ${i % 2 ? "lg:order-2 lg:col-start-7" : ""}`}>
              <Photo src={p.image} alt={p.name} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <Reveal className={`lg:col-span-5 ${i % 2 ? "lg:order-1 lg:col-start-1 lg:row-start-1" : "lg:col-start-8"}`}>
              <p className="font-serif text-lg text-saffron italic">No. {i + 1}</p>
              <h2 className="mt-1 font-serif text-4xl leading-[1.08] md:text-[2.75rem]">{p.name}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
              <h3 className="mt-6 border-b border-foreground pb-1.5 text-sm font-semibold">Key Features</h3>
              <dl>
                {p.specs.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[6rem_1fr] gap-4 border-b py-2 text-[15px]">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </article>
        ))}
      </div>
    </>
  );
}
