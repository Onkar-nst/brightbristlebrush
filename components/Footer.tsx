import Image from "next/image";
import Link from "next/link";
import { AnimatedHeading } from "./AnimatedHeading";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, EMAIL, LOCATIONS, NAV_LINKS, PHONES, PRODUCTS, telHref } from "@/lib/site";

const heading = "font-serif text-lg text-white";

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-5 py-9 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:pr-8">
            <Image src="/images/logo-white.png" alt={COMPANY} width={768} height={224} className="h-14 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Global reach, local touch. Certified manufacturer of pig hair and boar bristles.
            </p>
          </div>
          <div className="lg:col-span-2">
            <h2 className={heading}>Company</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}><Link href={href} className="inline-block transition-all duration-300 hover:translate-x-1.5 hover:text-white">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h2 className={heading}>Products</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {PRODUCTS.map((p) => (
                <li key={p.name}><Link href="/products/" className="transition-colors hover:text-white">{p.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h2 className={heading}>Get in Touch</h2>
            <ul className="mt-5 space-y-3.5 text-sm text-white/60">
              <li className="flex items-center gap-3"><Phone size={15} className="shrink-0 text-white/40" /><a href={telHref(PHONES[0])} className="hover:text-white">{PHONES[0]}</a></li>
              <li className="flex items-center gap-3"><Mail size={15} className="shrink-0 text-white/40" /><a href={`mailto:${EMAIL}`} className="break-all hover:text-white">{EMAIL}</a></li>
              <li className="flex items-start gap-3"><MapPin size={15} className="mt-0.5 shrink-0 text-white/40" /><span className="leading-relaxed">{LOCATIONS[0].address}</span></li>
            </ul>
          </div>
        </div>
        <AnimatedHeading text="Global reach, local touch." className="mt-10 text-[9.5vw] leading-none text-saffron italic lg:text-[7.5rem]" />
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 md:flex-row">
          <span>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</span>
          <span>Designed by <a href="https://www.brandedsystem.com/" className="underline underline-offset-2 hover:text-white">Branded System</a></span>
        </div>
      </div>
    </footer>
  );
}
