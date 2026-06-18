import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-2xl uppercase leading-none tracking-tight text-bone",
        className
      )}
    >
      Pulse<span className="text-flame">.</span>
    </span>
  );
}
