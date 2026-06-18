"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  duration?: number;
  className?: string;
  separatorClassName?: string;
}

/**
 * Infinite CSS marquee. The animated track holds TWO copies of the items and
 * translates by -50%, so the loop is seamless.
 */
export function Marquee({
  items,
  reverse = false,
  duration = 30,
  className,
  separatorClassName,
}: MarqueeProps) {
  const group = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className={className}>{item}</span>
          <span className={cn("mx-6 text-flame md:mx-10", separatorClassName)}>✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="flex overflow-hidden" role="presentation">
      <div
        className={cn(
          "flex shrink-0",
          reverse ? "animate-marquee-rev" : "animate-marquee"
        )}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}
