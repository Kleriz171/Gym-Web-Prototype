"use client";

import { useEffect, useRef, useState } from "react";
import { useHasFinePointer, usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Custom desktop cursor: a small flame dot with a trailing ring that grows
 * over interactive elements. Disabled on touch devices and reduced-motion.
 */
export function Cursor() {
  const fine = useHasFinePointer();
  const reduced = usePrefersReducedMotion();
  const enabled = fine && !reduced;

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) {
      document.body.removeAttribute("data-cursor");
      return;
    }
    document.body.setAttribute("data-cursor", "on");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest('a, button, [role="button"], input, label, [data-hover]')
      );
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    const render = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.body.removeAttribute("data-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={dotRef}
        className="absolute -ml-1 -mt-1 size-2 rounded-full bg-flame"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="absolute rounded-full border border-flame/70 transition-[width,height,margin,opacity,background-color] duration-200"
        style={{
          willChange: "transform",
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          marginLeft: hovering ? -28 : -15,
          marginTop: hovering ? -28 : -15,
          backgroundColor: hovering
            ? "rgba(255,92,0,0.12)"
            : "transparent",
          opacity: down ? 0.5 : 1,
        }}
      />
    </div>
  );
}
