"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { COMPANY, NAV_LINKS, PRODUCTS, productHref } from "@/lib/site";
import { Flags } from "./Flags";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-black text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-5 py-3 md:grid-cols-[1fr_auto_1fr] md:px-6">
        <Link href="/" onClick={() => setOpen(false)} aria-label={`${COMPANY} home`}>
          <Image src="/images/logo-white.png" alt="" width={768} height={224} priority className="h-14 w-auto md:h-16" />
        </Link>

        <nav className="hidden items-center justify-center gap-0.5 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <div key={href} className="group relative">
                <Link href={href} aria-current={active ? "page" : undefined} className="relative flex items-center gap-1 px-3 py-2 text-[15px] lg:px-4">
                  <span className={`relative transition-colors ${active ? "text-white" : "text-white/75 group-hover:text-white"}`}>{label}</span>
                  {href === "/products/" && <ChevronDown size={14} className="text-white/60 transition-transform duration-200 group-hover:rotate-180" />}
                  {active && <motion.span layoutId="nav-mark" className="absolute inset-x-4 bottom-0.5 h-0.5 bg-saffron" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                </Link>
                {href === "/products/" && (
                  <div className="invisible absolute top-full left-1/2 w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="border border-white/10 bg-black py-2 shadow-xl">
                      {PRODUCTS.map((p) => (
                        <li key={p.slug}>
                          <Link href={productHref(p.slug)} className={`block px-5 py-2.5 text-sm transition-colors hover:bg-white/10 hover:text-saffron ${pathname === productHref(p.slug) ? "text-saffron" : "text-white/80"}`}>{p.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <Flags className="hidden w-full max-w-64 justify-self-end lg:block" />




        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center justify-self-end border border-white/30 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100dvh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto md:hidden"
          >
            <div className="flex flex-col px-5 pt-6">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.div key={href} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 * i + 0.1 }}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-white/10 py-4 text-3xl font-medium tracking-tight ${(href === "/" ? pathname === "/" : pathname.startsWith(href)) ? "text-saffron" : ""}`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <p className="mt-8 text-xs tracking-[0.14em] text-white/50 uppercase">Countries currently serving</p>
              <Flags className="mt-3" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
