import { AnimatedHeading } from "./AnimatedHeading";

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 pt-32 md:flex-row md:items-end md:px-6 md:pt-40">
      <AnimatedHeading as="h1" text={title} className="text-6xl leading-none md:text-8xl" />
      {subtitle && <p className="pb-3 font-serif text-xl text-muted-foreground italic md:text-2xl">{subtitle}</p>}
    </section>
  );
}
