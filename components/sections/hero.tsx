"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useCopy } from "@/lib/language-provider";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";

// 3D scene is client-only and lazy-loaded so it never blocks SSR / first paint.
const HeroCanvas = dynamic(() => import("@/components/three/hero-canvas"), {
  ssr: false,
});

export function Hero() {
  const t = useCopy();
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const use3D = !isMobile && !reduced;

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sceneY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      {/* Background layer: 3D on desktop, static art on mobile/reduced-motion */}
      <motion.div
        className="absolute inset-0 z-0"
        style={use3D ? { y: sceneY, opacity: sceneOpacity } : undefined}
        aria-hidden
      >
        {use3D ? (
          <HeroCanvas />
        ) : (
          <Image
            src="/hero-fallback.svg"
            alt=""
            fill
            priority
            className="object-cover opacity-90"
          />
        )}
        {/* Vignette + bottom fade for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,10,0.65)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
      </motion.div>

      {/* Faint grid behind text */}
      <div className="grid-lines pointer-events-none absolute inset-0 z-0 opacity-[0.18]" aria-hidden />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 md:px-8"
        style={use3D ? { y: textY } : undefined}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="kicker mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-flame" />
          {t.hero.kicker}
        </motion.p>

        <h1 className="font-display display-xl uppercase">
          <Line delay={0.15}>{t.hero.titleTop}</Line>
          <Line delay={0.27} className="text-flame">
            {t.hero.titleAccent}
          </Line>
          <Line delay={0.39} className="text-stroke">
            {t.hero.titleBottom}
          </Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg"
        >
          {t.hero.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.68 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Magnetic>
            <Button asChild size="lg">
              <a href="#trial">{t.hero.ctaTrial}</a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild variant="outline" size="lg">
              <a href="#pricing">{t.hero.ctaJoin}</a>
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#programs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-label={t.hero.scroll}
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted">
          {t.hero.scroll}
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="text-flame"
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}

function Line({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`block ${className ?? ""}`}
      >
        {children}
      </motion.span>
    </span>
  );
}
