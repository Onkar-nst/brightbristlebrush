import Image from "next/image";
import { COUNTRIES } from "@/lib/catalogue";

// Countries currently served, running in a loop that pauses on hover.
export function Flags({ className = "" }: { className?: string }) {
  return (
    <div className={`marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] ${className}`} aria-label={`Countries we serve: ${COUNTRIES.map((c) => c.name).join(", ")}`}>
      <div className="marquee-track flex w-max items-center gap-4 [--marquee-duration:22s]">
        {[0, 1].map((copy) => COUNTRIES.map((c) => (
          <Image key={`${copy}-${c.flag}`} src={`/images/flags/${c.flag}.png`} alt="" aria-hidden title={c.name} width={30} height={20} className="h-5 w-auto" />
        )))}
      </div>
    </div>
  );
}
