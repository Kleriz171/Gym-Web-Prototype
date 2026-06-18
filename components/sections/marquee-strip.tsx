"use client";

import { useCopy } from "@/lib/language-provider";
import { Marquee } from "@/components/shared/marquee";

export function MarqueeStrip() {
  const t = useCopy();
  return (
    <div className="relative z-20 -mt-2 border-y border-line bg-flame py-4 md:py-5">
      <div className="-rotate-[0.4deg]">
        <Marquee
          items={t.marquee}
          duration={28}
          className="font-display text-2xl uppercase tracking-tight text-ink md:text-4xl"
          separatorClassName="!text-ink/70"
        />
      </div>
    </div>
  );
}
