"use client";

import { useEffect, useState } from "react";

/** Tracks a media query, SSR-safe (defaults to `false` until mounted). */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** True when the user prefers reduced motion. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** True on screens below the `md` breakpoint (mobile/tablet). */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}

/** True for devices with a fine pointer (mouse) — i.e. desktops. */
export function useHasFinePointer(): boolean {
  return useMediaQuery("(pointer: fine)");
}
