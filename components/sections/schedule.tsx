"use client";

import { useCopy } from "@/lib/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function Schedule() {
  const t = useCopy();
  const days = t.schedule.days;

  return (
    <section id="schedule" className="border-b border-line bg-ink-soft py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          kicker={t.schedule.kicker}
          title={t.schedule.title}
          intro={t.schedule.intro}
        />

        <div className="mt-12">
          <Tabs defaultValue={days[0]}>
            <TabsList className="mb-8">
              {days.map((day) => (
                <TabsTrigger key={day} value={day}>
                  {day}
                </TabsTrigger>
              ))}
            </TabsList>

            {days.map((day) => (
              <TabsContent key={day} value={day}>
                <ul className="border-t border-line">
                  {(t.schedule.grid[day] ?? []).map((cls, i) => (
                    <li
                      key={`${cls.time}-${i}`}
                      className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-5 transition-colors duration-300 hover:bg-surface md:gap-8 md:px-4"
                    >
                      <span className="font-display text-2xl tabular-nums text-flame md:text-3xl">
                        {cls.time}
                      </span>
                      <div>
                        <h3 className="font-display text-xl uppercase leading-none text-bone md:text-2xl">
                          {cls.name}
                        </h3>
                        <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                          {cls.trainer}
                        </span>
                      </div>
                      <span className="border border-line px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-muted transition-colors group-hover:border-flame group-hover:text-flame">
                        {cls.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
