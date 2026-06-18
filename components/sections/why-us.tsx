"use client";

import { Dumbbell, Clock, Smartphone, Salad, type LucideIcon } from "lucide-react";
import { useCopy } from "@/lib/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

const icons: Record<string, LucideIcon> = {
  dumbbell: Dumbbell,
  clock: Clock,
  smartphone: Smartphone,
  salad: Salad,
};

export function WhyUs() {
  const t = useCopy();
  return (
    <section id="why" className="border-b border-line py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          kicker={t.why.kicker}
          title={t.why.title}
          intro={t.why.intro}
          align="center"
        />

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {t.why.items.map((feature, i) => {
            const Icon = icons[feature.icon] ?? Dumbbell;
            return (
              <RevealItem
                key={feature.title}
                className="group relative flex flex-col bg-ink p-8 transition-colors duration-300 hover:bg-surface md:p-10"
              >
                <span
                  className="absolute right-6 top-6 font-display text-2xl text-line transition-colors group-hover:text-flame/30"
                  aria-hidden
                >
                  0{i + 1}
                </span>
                <span className="grid size-14 place-items-center border border-line text-flame transition-all duration-300 group-hover:border-flame group-hover:bg-flame group-hover:text-ink">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl uppercase leading-none text-bone">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
