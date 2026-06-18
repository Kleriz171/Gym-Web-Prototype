"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useCopy } from "@/lib/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const t = useCopy();
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: true });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  return (
    <section
      id="transformations"
      className="relative overflow-hidden border-b border-line bg-ink-soft py-20 md:py-32"
    >
      <Quote
        className="pointer-events-none absolute -right-10 -top-10 size-72 text-flame/[0.04]"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          kicker={t.testimonials.kicker}
          title={t.testimonials.title}
          intro={t.testimonials.intro}
        />

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {t.testimonials.items.map((item) => (
              <figure
                key={item.name}
                className="min-w-0 shrink-0 basis-full px-1 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="flex h-full flex-col border border-line bg-surface p-8">
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-flame text-flame" />
                    ))}
                  </div>
                  <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-bone/90">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center justify-between border-t border-line pt-5">
                    <span className="font-display text-xl uppercase text-bone">
                      {item.name}
                    </span>
                    <span className="bg-flame px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink">
                      {item.result}
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {t.testimonials.items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => embla?.scrollTo(i)}
                className={cn(
                  "h-1 transition-all duration-300",
                  selected === i ? "w-8 bg-flame" : "w-4 bg-line"
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous"
              className="grid size-12 place-items-center border border-line text-bone transition-colors hover:border-flame hover:text-flame"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next"
              className="grid size-12 place-items-center border border-line text-bone transition-colors hover:border-flame hover:text-flame"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
