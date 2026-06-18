"use client";

import { useLanguage } from "@/lib/language-provider";
import { cn } from "@/lib/utils";
import type { Lang } from "@/content/copy";

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const options: Lang[] = ["en", "sq"];

  return (
    <div
      className={cn(
        "inline-flex items-center border border-line font-mono text-[0.65rem] uppercase tracking-[0.15em]",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => setLang(opt)}
          aria-pressed={lang === opt}
          className={cn(
            "px-2.5 py-1.5 transition-colors duration-200",
            lang === opt
              ? "bg-flame text-ink"
              : "text-muted hover:text-bone"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
