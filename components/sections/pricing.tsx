"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useCopy } from "@/lib/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  const t = useCopy();
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="border-b border-line bg-ink-soft py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            kicker={t.pricing.kicker}
            title={t.pricing.title}
            intro={t.pricing.intro}
          />

          {/* Billing toggle */}
          <div className="flex items-center gap-4">
            <span
              className={cn(
                "font-mono text-xs uppercase tracking-[0.15em]",
                !annual ? "text-bone" : "text-faint"
              )}
            >
              {t.pricing.monthly}
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={annual}
              aria-label={`${t.pricing.monthly} / ${t.pricing.annual}`}
              onClick={() => setAnnual((v) => !v)}
              className="relative h-8 w-16 border border-line bg-surface p-1"
            >
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
                className={cn(
                  "block size-6 bg-flame",
                  annual ? "ml-auto" : "ml-0"
                )}
              />
            </button>
            <span
              className={cn(
                "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em]",
                annual ? "text-bone" : "text-faint"
              )}
            >
              {t.pricing.annual}
              <span className="bg-flame px-1.5 py-0.5 text-[0.6rem] text-ink">
                {t.pricing.save}
              </span>
            </span>
          </div>
        </div>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
          {t.pricing.tiers.map((tier) => {
            const price = annual ? tier.annual : tier.monthly;
            return (
              <RevealItem
                key={tier.id}
                className={cn(
                  "relative flex flex-col bg-ink p-8 transition-colors duration-300 md:p-10",
                  tier.popular && "bg-surface lg:scale-[1.02] lg:z-10"
                )}
              >
                {tier.popular && (
                  <>
                    <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-flame/60" />
                    <span className="absolute right-0 top-0 bg-flame px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink">
                      {t.pricing.popular}
                    </span>
                  </>
                )}

                <h3 className="font-display text-3xl uppercase">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted">{tier.blurb}</p>

                <div className="mt-8 flex items-end gap-1">
                  <span className="font-display text-6xl leading-none text-bone md:text-7xl">
                    €{price}
                  </span>
                  <span className="mb-1.5 font-mono text-xs text-muted">
                    {t.pricing.perMonth}
                  </span>
                </div>
                <p className="mt-1 h-4 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-faint">
                  {annual ? t.pricing.billedAnnually : ""}
                </p>

                <ul className="mt-8 flex flex-1 flex-col gap-3.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          tier.popular ? "text-flame" : "text-bone"
                        )}
                      />
                      <span className="text-bone/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={tier.popular ? "flame" : "outline"}
                  className="mt-10 w-full"
                >
                  <a href="#trial">{tier.cta}</a>
                </Button>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
