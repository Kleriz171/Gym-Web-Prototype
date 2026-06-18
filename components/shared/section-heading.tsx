"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker && (
        <Reveal>
          <p className="kicker mb-4 flex items-center gap-3">
            {align === "center" && <span className="h-px w-6 bg-flame" />}
            {kicker}
            <span className="h-px w-6 bg-flame" />
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          id={id}
          className="font-display display-md uppercase text-balance"
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
