"use client";

import Image from "next/image";
import {
  InstagramIcon,
  XIcon,
  LinkedinIcon,
} from "@/components/shared/social-icons";
import { useCopy } from "@/lib/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

// Portraits are positional — order matches the trainer items in content/copy.ts.
const portraits = [
  "/images/trainers/ardit.jpg",
  "/images/trainers/elira.jpg",
  "/images/trainers/marcus.jpg",
  "/images/trainers/sara.jpg",
];

export function Trainers() {
  const t = useCopy();
  return (
    <section id="trainers" className="border-b border-line py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          kicker={t.trainers.kicker}
          title={t.trainers.title}
          intro={t.trainers.intro}
        />

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {t.trainers.items.map((trainer, i) => (
            <RevealItem key={trainer.name}>
              <article className="group relative aspect-[3/4] overflow-hidden border border-line bg-surface">
                {/* Portrait */}
                <Image
                  src={portraits[i % portraits.length]}
                  alt={`${trainer.name} — ${trainer.specialty}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                {/* Scrim for legibility */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition-opacity duration-500 group-hover:from-ink/95"
                  aria-hidden
                />

                {/* Bottom info bar */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="translate-y-0 transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="kicker">{trainer.specialty}</span>
                    <h3 className="mt-1 font-display text-2xl uppercase leading-none text-bone">
                      {trainer.name}
                    </h3>
                  </div>

                  {/* Bio reveal */}
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="pt-3 text-sm leading-relaxed text-muted">
                        {trainer.bio}
                      </p>
                      <div className="mt-4 flex gap-2">
                        {[InstagramIcon, XIcon, LinkedinIcon].map((Icon, k) => (
                          <a
                            key={k}
                            href="#"
                            aria-label={`${trainer.name} social`}
                            className="grid size-9 place-items-center border border-line text-muted transition-colors hover:border-flame hover:text-flame"
                          >
                            <Icon className="size-4" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <span className="absolute left-0 top-0 h-0.5 w-0 bg-flame transition-all duration-500 group-hover:w-full" />
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
