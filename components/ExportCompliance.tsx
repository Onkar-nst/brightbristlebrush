import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { COMPLIANCE_BADGES, EXPORT_INFO } from "@/lib/catalogue";
import { Stagger, StaggerItem } from "./Motion";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const AUTHORITIES = [
  { src: "/images/compliance/defra-mark.png", name: "DEFRA" },
  { src: "/images/compliance/apha.png", name: "Animal & Plant Health Agency" },
  { src: "/images/compliance/european-commission.png", name: "European Commission" },
  { src: "/images/compliance/defra.png", name: "Department for Environment, Food & Rural Affairs" },
];

const IMPORT_POINTS = [
  "Pig bristles are only obtained from pigs which were fit for human consumption.",
  "Raw pig bristles are sourced only from approved and registered slaughterhouses.",
];

// Catalogue pages 06 (EU approval) and 07 (export information, compliance).
export function ExportCompliance() {
  return (
    <>
      <section className="bg-brand py-12 text-white md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead light label="EU & UK Approved Animal By-Product Establishment (Category 3)" lines={["Official EU & UK", "Export Approval"]} note="Compliant with the authorities of the United Kingdom and the European Union." />
          <Stagger className="mt-10 grid grid-cols-2 gap-px bg-white/15 lg:grid-cols-4">
            {AUTHORITIES.map((a) => (
              <StaggerItem key={a.src} className="flex h-36 items-center justify-center bg-white p-6 md:h-44">
                <Image src={a.src} alt={a.name} width={360} height={180} className="h-auto max-h-full w-auto max-w-full object-contain" />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10">
            <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-saffron uppercase">Import points</p>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {IMPORT_POINTS.map((t) => (
                <li key={t} className="flex gap-3 border border-white/15 p-5 leading-relaxed text-white/85">
                  <ShieldCheck size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-saffron" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="Export Information" lines={["Reliable Supply Chain", "for Global Markets"]} />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <Stagger as="dl" className="divide-y border-y">
              {EXPORT_INFO.map(([k, v]) => (
                <StaggerItem key={k} className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr] sm:gap-4">
                  <dt className="font-semibold">{k}</dt>
                  <dd className="text-muted-foreground">{v}</dd>
                </StaggerItem>
              ))}
            </Stagger>
            <Photo src="/images/catalogue/export-cartons.jpg" alt="Export cartons packed and wrapped on a pallet" ratio="aspect-[4/5] lg:aspect-auto lg:h-full" sizes="(min-width: 1024px) 40vw, 100vw" className="border" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="Quality & Compliance" lines={["Fully Compliant for", "International Export Markets"]} />
          <Stagger className="mt-10 mx-auto grid max-w-5xl grid-cols-2 border-t border-l sm:grid-cols-4">
            {COMPLIANCE_BADGES.map((b) => (
              <StaggerItem key={b.src} className="relative aspect-square border-r border-b">
                <Image src={b.src} alt={b.label} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-contain p-8 transition-transform duration-300 hover:scale-105 md:p-12 lg:p-14" />
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-8 text-center text-2xl text-bronze italic md:text-3xl">Your Trusted Partner for Natural Bristles Worldwide</p>
        </div>
      </section>
    </>
  );
}
