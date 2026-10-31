import type { ReactNode } from "react";
import { AnimatedHeading } from "./AnimatedHeading";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

// Pill label, two-tone heading and, optionally, a short note on the right.
export function SectionHead({ label, lines, note, light = false }: { label: string; lines: string[]; note?: ReactNode; light?: boolean }) {
  return (
    <div className="grid items-end gap-5 lg:grid-cols-2 lg:gap-12">
      <div>
        <Eyebrow light={light} className="mb-5">{label}</Eyebrow>
        <AnimatedHeading lines={lines} light={light} />
      </div>
      {note && <Reveal><p className={`max-w-xl leading-relaxed ${light ? "text-white/75" : "text-muted-foreground"}`}>{note}</p></Reveal>}
    </div>
  );
}
