"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import { useCopy } from "@/lib/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const tints = [
  "radial-gradient(120% 120% at 20% 10%, #2a1708 0%, #141414 60%)",
  "radial-gradient(120% 120% at 80% 20%, #1d1d1d 0%, #101010 60%)",
  "radial-gradient(120% 120% at 50% 90%, #2a1708 0%, #121212 60%)",
  "radial-gradient(120% 120% at 10% 80%, #181818 0%, #0f0f0f 60%)",
  "radial-gradient(120% 120% at 90% 60%, #2a1708 0%, #131313 60%)",
  "radial-gradient(120% 120% at 40% 30%, #1a1a1a 0%, #0e0e0e 60%)",
];

export function Gallery() {
  const t = useCopy();
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });
  const [open, setOpen] = useState<number | null>(null);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  const [canScroll, setCanScroll] = useState(true);
  useEffect(() => {
    if (!embla) return;
    const update = () => setCanScroll(embla.canScrollNext() || embla.canScrollPrev());
    embla.on("select", update);
    update();
  }, [embla]);

  return (
    <section id="facilities" className="border-b border-line py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-8">
          <SectionHeading
            kicker={t.facilities.kicker}
            title={t.facilities.title}
            intro={t.facilities.intro}
          />
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous"
              disabled={!canScroll}
              className="grid size-12 place-items-center border border-line text-bone transition-colors hover:border-flame hover:text-flame disabled:opacity-40"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next"
              disabled={!canScroll}
              className="grid size-12 place-items-center border border-line text-bone transition-colors hover:border-flame hover:text-flame disabled:opacity-40"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <Dialog
          open={open !== null}
          onOpenChange={(v) => !v && setOpen(null)}
        >
          <div className="mt-12 overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {t.facilities.items.map((item, i) => (
                <div
                  key={item.title}
                  className="min-w-0 shrink-0 basis-[80%] sm:basis-[48%] lg:basis-[32%]"
                >
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      onClick={() => setOpen(i)}
                      className="group relative block aspect-[4/5] w-full overflow-hidden border border-line text-left"
                    >
                      <span
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                        style={{ background: tints[i % tints.length] }}
                        aria-hidden
                      />
                      <span
                        className="absolute right-5 top-4 font-display text-7xl leading-none text-flame/10"
                        aria-hidden
                      >
                        0{i + 1}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                      <span className="absolute bottom-0 left-0 p-6">
                        <span className="kicker">{item.caption}</span>
                        <span className="mt-1 block font-display text-3xl uppercase leading-none text-bone">
                          {item.title}
                        </span>
                      </span>
                      <span className="absolute right-5 top-5 grid size-10 place-items-center border border-line bg-ink/40 text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Expand className="size-4" />
                      </span>
                    </button>
                  </DialogTrigger>
                </div>
              ))}
            </div>
          </div>

          <DialogContent className="overflow-hidden p-0">
            {open !== null && (
              <div className="relative">
                <div
                  className="aspect-video w-full"
                  style={{ background: tints[open % tints.length] }}
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-ink to-transparent p-8">
                  <span className="kicker">{t.facilities.items[open].caption}</span>
                  <DialogTitle className="mt-1 text-4xl">
                    {t.facilities.items[open].title}
                  </DialogTitle>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Mobile hint */}
        <p className={cn("mt-6 text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-faint md:hidden")}>
          ← swipe →
        </p>
      </div>
    </section>
  );
}
