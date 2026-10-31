import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div
      className={`font-mono-label inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1 font-semibold ${
        light ? "border-white/20 bg-white/10 text-white" : "border-green/20 bg-green/10 text-green"
      }`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-saffron" />
      </span>
      {children}
    </div>
  );
}
