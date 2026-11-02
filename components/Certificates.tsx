"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { CERTIFICATES } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Certificates() {
  const [active, setActive] = useState<(typeof CERTIFICATES)[number] | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {CERTIFICATES.map((c, i) => (
          <Reveal key={c.src} delay={i * 90} direction="scale">
            <button
              onClick={() => setActive(c)}
              aria-label={`View ${c.title}`}
              className="group hover-lift block w-full overflow-hidden border bg-surface p-3 text-left"
            >
              <span className="relative block aspect-[732/1024] overflow-hidden bg-white">
                <Image src={c.src} alt={c.title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 flex items-center justify-center bg-brand/0 text-white opacity-0 transition-all group-hover:bg-brand/50 group-hover:opacity-100">
                  <ZoomIn size={28} />
                </span>
              </span>
              <span className="mt-3 block text-sm font-semibold">{c.title}</span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-brand/90 p-5 backdrop-blur"
          >
            <button autoFocus aria-label="Close" className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center bg-white/10 text-white">
              <X size={20} />
            </button>
            <motion.div initial={{ scale: 0.92, y: 16 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96 }} className="relative aspect-[732/1024] h-[85dvh] max-w-full" onClick={(e) => e.stopPropagation()}>
              <Image src={active.src} alt={active.title} fill sizes="90vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
