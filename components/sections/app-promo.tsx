"use client";

import { motion } from "framer-motion";
import { Check, Apple, Play } from "lucide-react";
import { useCopy } from "@/lib/language-provider";
import { Reveal } from "@/components/shared/reveal";

export function AppPromo() {
  const t = useCopy();
  return (
    <section id="app" className="relative overflow-hidden border-b border-line bg-ink-soft py-20 md:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <Reveal>
            <p className="kicker mb-4">{t.app.kicker}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display display-md uppercase">{t.app.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
              {t.app.body}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-3">
              {t.app.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-bone/90">
                  <span className="grid size-6 shrink-0 place-items-center bg-flame text-ink">
                    <Check className="size-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#"
                className="flex items-center gap-3 border border-line bg-ink px-5 py-3 transition-colors hover:border-flame"
              >
                <Apple className="size-6 text-bone" />
                <span className="text-left">
                  <span className="block font-mono text-[0.55rem] uppercase tracking-[0.15em] text-muted">
                    Download
                  </span>
                  <span className="block font-display text-lg uppercase leading-none text-bone">
                    {t.app.ios}
                  </span>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 border border-line bg-ink px-5 py-3 transition-colors hover:border-flame"
              >
                <Play className="size-6 text-bone" />
                <span className="text-left">
                  <span className="block font-mono text-[0.55rem] uppercase tracking-[0.15em] text-muted">
                    Get it on
                  </span>
                  <span className="block font-display text-lg uppercase leading-none text-bone">
                    {t.app.android}
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Phone mockup */}
        <Reveal delay={0.1} className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ rotate: -6 }}
            whileInView={{ rotate: -3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative w-[270px] rounded-[2.6rem] border border-line bg-ink p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] flame-glow"
          >
            <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-surface">
              {/* notch */}
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
              {/* app screen */}
              <div className="flex h-full flex-col p-5 pt-9">
                <span className="kicker">Today</span>
                <h3 className="mt-1 font-display text-3xl uppercase leading-none text-bone">
                  Burn HIIT
                </h3>
                <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-muted">
                  18:30 · Elira
                </span>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {[
                    { k: "Streak", v: "12" },
                    { k: "PRs", v: "08" },
                  ].map((s) => (
                    <div key={s.k} className="border border-line bg-ink p-3">
                      <div className="font-display text-3xl text-flame">{s.v}</div>
                      <div className="font-mono text-[0.55rem] uppercase tracking-[0.15em] text-muted">
                        {s.k}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 space-y-2">
                  {[70, 45, 90].map((w, i) => (
                    <div key={i} className="border border-line bg-ink p-2.5">
                      <div className="mb-1.5 flex justify-between font-mono text-[0.55rem] uppercase tracking-[0.1em] text-muted">
                        <span>Set {i + 1}</span>
                        <span className="text-flame">{w}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-line">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${w}%` }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                          viewport={{ once: true }}
                          className="h-full bg-flame"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto grid place-items-center bg-flame py-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink">
                  Check In
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
