"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";

type Item = { src: string; caption?: string };

// Gallery thumbnails that open the full, uncropped photo in a lightbox.
export function ProductGallery({ items, name }: { items: Item[]; name: string }) {
  const [active, setActive] = useState<Item | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((g) => (
          <Reveal key={g.src} direction="scale">
            <figure>
              <button onClick={() => setActive(g)} aria-label={`View ${g.caption ?? name}`} className="group relative block w-full cursor-zoom-in text-left">
                <Photo src={g.src} alt={g.caption ?? name} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 33vw, 50vw" className="border" />
                <span className="absolute inset-0 flex items-center justify-center bg-brand/0 text-white opacity-0 transition-all group-hover:bg-brand/40 group-hover:opacity-100">
                  <ZoomIn size={28} />
                </span>
              </button>
              {g.caption && <figcaption className="mt-2 text-sm text-muted-foreground italic">{g.caption}</figcaption>}
            </figure>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.caption ?? name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-brand/90 p-5 backdrop-blur"
          >
            <button autoFocus aria-label="Close" className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center bg-white/10 text-white">
              <X size={20} />
            </button>
            <motion.div initial={{ scale: 0.92, y: 16 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96 }} className="relative h-[85dvh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <Image src={active.src} alt={active.caption ?? name} fill sizes="90vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
