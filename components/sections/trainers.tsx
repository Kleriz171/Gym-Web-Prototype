"use client";

import {
  InstagramIcon,
  XIcon,
  LinkedinIcon,
} from "@/components/shared/social-icons";
import { useCopy } from "@/lib/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

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
                {/* Portrait placeholder (duotone) */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      i % 2 === 0
                        ? "radial-gradient(120% 90% at 70% 10%, #2a1708 0%, #141414 55%, #0d0d0d 100%)"
                        : "radial-gradient(120% 90% at 30% 10%, #1a1a1a 0%, #141414 55%, #0d0d0d 100%)",
                  }}
                  aria-hidden
                />
                <span
                  className="absolute right-4 top-3 font-display text-[5rem] leading-none text-flame/15 transition-colors duration-500 group-hover:text-flame/25"
                  aria-hidden
                >
                  {initials(trainer.name)}
                </span>

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
