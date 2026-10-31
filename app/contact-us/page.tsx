import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow } from "@/components/Eyebrow";
import { Stagger, StaggerItem } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { EMAIL, HOURS, LOCATIONS, PHONES, telHref } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero label="Get in touch" title="Contact Us" subtitle="Call Us or Fill the Form" image="/images/inspection.jpg" />

      <section className="py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Reveal>
            <div className="grid gap-10 rounded-3xl border bg-surface p-7 md:p-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <Eyebrow className="mb-5">Connect</Eyebrow>
                <AnimatedHeading lines={["Don’t hesitate", "to contact us"]} />
                <ul className="mt-7 space-y-4">
                  <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-brand" /><span className="flex flex-col gap-1 font-medium">{PHONES.map((p) => <a key={p} href={telHref(p)} className="w-fit hover:text-brand">{p}</a>)}</span></li>
                  <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-brand" /><a href={`mailto:${EMAIL}`} className="font-medium break-all hover:text-brand">{EMAIL}</a></li>
                  <li className="flex gap-3"><Clock size={18} className="mt-0.5 shrink-0 text-brand" /><span><span className="font-medium">Working Time</span><br /><span className="text-muted-foreground">{HOURS.join(" / ")}</span></span></li>
                </ul>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHead label="Locations" lines={["Our units", "and offices"]} />
          <Stagger className="mt-8 grid gap-5 md:grid-cols-2">
            {LOCATIONS.map((l) => (
              <StaggerItem key={l.title} className="hover-lift rounded-2xl border bg-surface p-6 hover:border-brand/40">
                <h3 className="flex items-center gap-2 font-mono text-xs font-bold tracking-[0.1em] text-brand uppercase"><MapPin size={15} />{l.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.address}</p>
                {l.phone && (
                  <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
                    <a href={telHref(l.phone)} className="hover:text-brand">{l.phone}</a>
                    <a href={`mailto:${l.email}`} className="break-all hover:text-brand">{l.email}</a>
                  </p>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
