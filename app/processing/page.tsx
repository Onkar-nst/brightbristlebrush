import type { Metadata } from "next";
import { FileCheck2, ShieldCheck } from "lucide-react";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { CountUp, Stagger, StaggerItem } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { PROCESSING } from "@/lib/catalogue";

export const metadata: Metadata = { title: "Processing" };

const TREATMENT_FIGURES = [
  { temp: 100, hours: 3 },
  { temp: 60, hours: 2 },
];

export default function ProcessingPage() {
  return (
    <>
      <PageHero label="Boar bristle • Pig hair • Hog hair" title={["Bristle Processing", "and Hygiene"]} image="/images/catalogue/process-bleaching.jpg" />

      <section className="py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="Commitments" lines={["Our Production", "Commitments"]} />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {PROCESSING.commitments.map((c, i) => (
              <StaggerItem key={c} className="group hover-lift relative overflow-hidden border bg-surface p-6 hover:border-bronze/40">
                <span aria-hidden className="absolute -top-4 -right-1 text-8xl font-bold text-bronze/10 transition-colors duration-500 group-hover:text-bronze/20">0{i + 1}</span>
                <ShieldCheck size={26} strokeWidth={1.6} className="relative text-bronze" />
                <p className="relative mt-4 text-lg leading-snug font-semibold">{c}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-brand py-12 text-white md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead light label="Treatment" lines={["Boiled and bleached", "before it ships."]} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PROCESSING.photos.map((p, i) => (
              <Reveal key={p.title} delay={i * 140} className="h-full">
                <figure className="group flex h-full flex-col bg-white/5">
                  <Photo src={p.src} alt={p.title} ratio="aspect-[4/3]" sizes="(min-width: 768px) 50vw, 100vw" />
                  <figcaption className="grid grid-cols-2 items-end gap-x-6 gap-y-4 p-5 sm:grid-cols-[1fr_auto_auto] sm:p-6">
                    <span className="col-span-2 sm:col-span-1">
                      <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-saffron uppercase">Stage {i === 0 ? "01" : "03"}</span>
                      <span className="mt-1 block text-xl font-semibold uppercase">{p.title}</span>
                    </span>
                    <span className="text-right">
                      <span className="block text-3xl font-bold text-saffron md:text-4xl"><CountUp to={TREATMENT_FIGURES[i].temp} />°C</span>
                      <span className="text-xs text-white/60">Temperature</span>
                    </span>
                    <span className="text-right">
                      <span className="block text-3xl font-bold md:text-4xl"><CountUp to={TREATMENT_FIGURES[i].hours} />+ h</span>
                      <span className="text-xs text-white/60">Duration</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="text-center">
            <Eyebrow className="mx-auto mb-5">Process</Eyebrow>
            <AnimatedHeading lines={["From Treatment", "to Dispatch"]} />
          </div>
          <div className="mt-12"><ProcessTimeline steps={PROCESSING.steps} /></div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="Documents" lines={["Accompanying", "Shipment Documents"]} note={PROCESSING.note} />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESSING.documents.map((d) => (
              <StaggerItem key={d} className="group hover-lift flex items-center gap-3 border bg-background p-5 hover:border-bronze/40">
                <FileCheck2 size={24} strokeWidth={1.6} className="shrink-0 text-bronze transition-transform duration-300 group-hover:-rotate-6" />
                <p className="font-semibold leading-snug">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
