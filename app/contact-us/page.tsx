import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EMAIL, HOURS, LOCATIONS, PHONES, telHref } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Contact Us" subtitle="Call Us or Fill the Form" />

      <section className="py-12 md:py-17">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-2">
          <div>
            <AnimatedHeading text="Don’t hesitate to contact us" className="text-4xl leading-[1.08] md:text-5xl" />
            <Reveal className="mt-8 divide-y border-y">
              <div className="flex gap-4 py-5">
                <Phone size={20} className="mt-0.5 shrink-0 text-green" />
                <div className="flex flex-col gap-1.5 font-medium">{PHONES.map((p) => <a key={p} href={telHref(p)} className="w-fit hover:text-green">{p}</a>)}</div>
              </div>
              <div className="flex gap-4 py-5">
                <Mail size={20} className="mt-0.5 shrink-0 text-green" />
                <a href={`mailto:${EMAIL}`} className="font-medium break-all hover:text-green">{EMAIL}</a>
              </div>
              <div className="flex gap-4 py-5">
                <Clock size={20} className="mt-0.5 shrink-0 text-green" />
                <div><p className="font-medium">Working Time</p>{HOURS.map((h) => <p key={h} className="text-muted-foreground">{h}</p>)}</div>
              </div>
            </Reveal>
          </div>
          <Reveal direction="left">
            <div className="rounded-3xl border bg-surface p-7 md:p-10"><ContactForm /></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <AnimatedHeading text="Locations" className="text-4xl md:text-5xl" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.title} delay={(i % 2) * 110} className="h-full">
                <div className="hover-lift h-full rounded-2xl border bg-background p-7">
                  <MapPin size={22} className="text-saffron" />
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">{l.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.address}</p>
                  {l.phone && (
                    <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
                      <a href={telHref(l.phone)} className="hover:text-green">{l.phone}</a>
                      <a href={`mailto:${l.email}`} className="break-all hover:text-green">{l.email}</a>
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
