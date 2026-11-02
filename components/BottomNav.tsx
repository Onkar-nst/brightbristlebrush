"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Info, Layers, Mail, Scale } from "lucide-react";
import { COMPANY } from "@/lib/site";

const LEFT = [
  { label: "About", href: "/about-us/", icon: Info },
  { label: "Products", href: "/products/", icon: Layers },
];
const RIGHT = [
  { label: "Contact", href: "/contact-us/", icon: Mail },
  { label: "Legal", href: "/legal/", icon: Scale },
];

// Phone-only tab bar: two links each side of the logo mark, which goes home.
export function BottomNav() {
  const pathname = usePathname();
  const item = ({ label, href, icon: Icon }: (typeof LEFT)[number]) => {
    const active = pathname.startsWith(href);
    return (
      <Link key={href} href={href} aria-current={active ? "page" : undefined} className={`flex h-full flex-col items-center justify-center gap-1 transition-colors ${active ? "text-bronze" : "text-muted-foreground hover:text-brand"}`}>
        <Icon size={20} strokeWidth={1.75} />
        <span className="font-mono text-[9px] font-bold tracking-[0.08em] uppercase">{label}</span>
      </Link>
    );
  };

  return (
    <nav aria-label="Quick links" className="fixed inset-x-0 bottom-0 z-50 grid h-16 grid-cols-5 items-center border-t bg-background/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] backdrop-blur md:hidden">
      {LEFT.map(item)}
      <Link href="/" aria-label={`${COMPANY} home`} className="flex h-full items-center justify-center">
        <span className="-mt-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-brand shadow-lg transition-transform active:scale-95">
          <Image src="/images/logo-mark.png" alt="" width={310} height={215} className="h-auto w-10" />
        </span>
      </Link>
      {RIGHT.map(item)}
    </nav>
  );
}
