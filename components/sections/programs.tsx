"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useCopy } from "@/lib/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const intensityDots: Record<string, number> = {
  Low: 1,
  "I ulët": 1,
  Medium: 2,
  Mesatar: 2,
  High: 3,
  "I lartë": 3,
  Extreme: 4,
  Ekstrem: 4,
};

export function Programs() {
  const t = useCopy();
  const [active, setActive] = useState(0);

  return (
    <section id="programs" className="border-b border-line py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          kicker={t.programs.kicker}
          title={t.programs.title}
          intro={t.programs.intro}
        />

        <div className="mt-14 border-t border-line">
          {t.programs.items.map((program, i) => {
            const isActive = active === i;
            return (
              <div
                key={program.id}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "group relative cursor-pointer border-b border-line transition-colors duration-300",
                  isActive && "bg-surface"
                )}
                data-hover
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="flex w-full items-center gap-4 px-2 py-6 text-left md:gap-8 md:px-6 md:py-8"
                  aria-expanded={isActive}
                >
                  <span
                    className={cn(
                      "font-mono text-xs tabular-nums transition-colors md:text-sm",
                      isActive ? "text-flame" : "text-faint"
                    )}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className={cn(
                      "font-display text-3xl uppercase leading-none transition-all duration-300 md:text-6xl",
                      isActive ? "text-flame md:translate-x-2" : "text-bone"
                    )}
                  >
                    {program.name}
                  </h3>
                  <span className="ml-auto hidden font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted md:block">
                    {program.tagline}
                  </span>
                  <ArrowUpRight
                    className={cn(
                      "size-6 shrink-0 transition-all duration-300 md:size-8",
                      isActive
                        ? "rotate-0 text-flame opacity-100"
                        : "-rotate-45 text-faint opacity-50"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 px-2 pb-8 md:grid-cols-[1fr_auto] md:items-end md:gap-12 md:px-6 md:pl-[4.5rem]">
                        <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
                          {program.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-faint">
                            {t.programs.intensityLabel}
                          </span>
                          <div className="flex gap-1.5">
                            {[0, 1, 2, 3].map((d) => (
                              <span
                                key={d}
                                className={cn(
                                  "h-5 w-1.5",
                                  d < (intensityDots[program.intensity] ?? 2)
                                    ? "bg-flame"
                                    : "bg-line"
                                )}
                              />
                            ))}
                          </div>
                          <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-bone">
                            {program.intensity}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
