"use client";

import { useCopy } from "@/lib/language-provider";
import { CountUp } from "@/components/shared/count-up";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

export function Stats() {
  const t = useCopy();
  return (
    <section className="border-b border-line bg-ink-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="kicker mb-10 flex items-center gap-3">
          <span className="h-px w-6 bg-flame" />
          {t.stats.kicker}
        </p>
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-4">
          {t.stats.items.map((stat) => (
            <RevealItem
              key={stat.label}
              className="group relative bg-ink p-7 transition-colors duration-300 hover:bg-surface md:p-9"
            >
              <div className="font-display text-5xl leading-none text-bone md:text-7xl">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </div>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-flame transition-all duration-500 group-hover:w-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
