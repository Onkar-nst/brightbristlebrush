import type { Metadata } from "next";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { ContactForm } from "@/components/ContactForm";
import { Rule, Stagger, StaggerItem } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EMAIL, HOURS, LOCATIONS, PHONES, telHref } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="Call Us or Fill the Form" />

      <section className="pb-12 md:pb-17">
        <div className="mx-auto mb-8 max-w-7xl px-5 md:px-6"><Rule /></div>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6">
            <AnimatedHeading text="Don’t hesitate to contact us" className="text-4xl leading-[1.08] md:text-[3.25rem]" />
            <div className="mt-6 flex flex-col gap-1 font-serif text-3xl">
              {PHONES.map((p) => <a key={p} href={telHref(p)} className="w-fit hover:text-green">{p}</a>)}
            </div>
            <a href={`mailto:${EMAIL}`} className="mt-5 block font-semibold break-all underline decoration-saffron decoration-2 underline-offset-4">{EMAIL}</a>
            <p className="mt-5 text-muted-foreground">Working Time<br />{HOURS.join(". ")}.</p>
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8"><ContactForm /></Reveal>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <AnimatedHeading text="Locations" className="border-b border-foreground pb-4 text-4xl md:text-6xl" />
          <Stagger>
          {LOCATIONS.map((l) => (
            <StaggerItem key={l.title} className="grid gap-2 border-b py-6 md:grid-cols-12 md:gap-6">
              <h3 className="font-serif text-2xl md:col-span-4">{l.title}</h3>
              <p className="leading-relaxed md:col-span-4">{l.address}</p>
              {l.phone && (
                <p className="flex flex-col gap-1 text-[15px] font-semibold md:col-span-4">
                  <a href={telHref(l.phone)} className="w-fit hover:text-green">{l.phone}</a>
                  <a href={`mailto:${l.email}`} className="w-fit break-all hover:text-green">{l.email}</a>
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
