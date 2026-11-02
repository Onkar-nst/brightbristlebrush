import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { COMPLIANCE_BADGES, EU_APPROVAL, EU_VERIFY_STEPS, EXPORT_INFO } from "@/lib/catalogue";
import { Stagger, StaggerItem } from "./Motion";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

// Catalogue pages 06 (EU approval) and 07 (export information, compliance).
export function ExportCompliance() {
  return (
    <>
      <section className="bg-brand py-12 text-white md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead light label="Non-EU Approved Establishment" lines={["Official EU", "Export Approval"]} note="Independent verification through the European Commission." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            <Reveal>
              <p className="leading-relaxed text-white/80">Bright Brush &amp; Bristle Works India is an approved non-EU establishment for the export of treated boar bristles and pig hair to the European Union. Buyers may independently verify our establishment through the European Commission&apos;s official TRACES NT Approved Establishments Directory.</p>
              <dl className="mt-6 grid gap-px bg-white/15 sm:grid-cols-2">
                <div className="bg-brand p-5 sm:pl-0"><dt className="font-mono text-[11px] font-bold tracking-[0.14em] text-white/60 uppercase">Establishment</dt><dd className="mt-1 text-lg font-semibold">Bright Brush &amp; Bristle Works India</dd></div>
                <div className="bg-brand p-5"><dt className="font-mono text-[11px] font-bold tracking-[0.14em] text-white/60 uppercase">Approval Number</dt><dd className="mt-1 text-lg font-semibold text-saffron">{EU_APPROVAL.number}</dd></div>
              </dl>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <Image src="/images/compliance/eu-verify-qr.png" alt="QR code linking to the European Commission TRACES NT directory" width={120} height={120} className="bg-white p-2" />
                <div>
                  <a href={EU_APPROVAL.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-saffron">
                    Verify on European Commission website <ExternalLink size={14} />
                  </a>
                  <p className="mt-2 text-sm text-white/60">Official European Commission – TRACES NT. Independent buyer verification.</p>
                </div>
              </div>
            </Reveal>
            <div>
              <h3 className="text-2xl font-semibold">How to verify our establishment</h3>
              <Stagger as="ol" className="mt-5 space-y-3">
                {EU_VERIFY_STEPS.map((s, i) => (
                  <StaggerItem as="li" key={s} className="flex gap-4 border border-white/15 bg-white/5 p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-saffron font-semibold text-saffron">{i + 1}</span>
                    <span className="pt-1 leading-snug text-white/85">{s}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
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
          <Stagger className="mt-10 grid grid-cols-2 border-t border-l sm:grid-cols-3 lg:grid-cols-5">
            {COMPLIANCE_BADGES.map((b) => (
              <StaggerItem key={b.src} className="relative aspect-square border-r border-b">
                <Image src={b.src} alt={b.label} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-contain p-4 transition-transform duration-300 hover:scale-105" />
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-8 text-center text-2xl text-bronze italic md:text-3xl">Your Trusted Partner for Natural Bristles Worldwide</p>
        </div>
      </section>
    </>
  );
}
