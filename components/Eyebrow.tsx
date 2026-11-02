import type { ReactNode } from "react";

export function Eyebrow({ children, light = false, className = "" }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <div className={`inline-flex w-fit items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-semibold tracking-[0.14em] uppercase ${light ? "border-white/20 bg-white/10 text-white" : "border-brand/20 bg-brand/10 text-brand"} ${className}`}>
      <span className="relative flex h-2 w-2 shrink-0">
        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${light ? "bg-white" : "bg-brand"}`} />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${light ? "bg-white" : "bg-brand"}`} />
      </span>
      {children}
    </div>
  );
}
