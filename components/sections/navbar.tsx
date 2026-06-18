"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCopy } from "@/lib/language-provider";
import { Logo } from "@/components/shared/logo";
import { LangToggle } from "@/components/shared/lang-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useCopy();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-line/80 py-3"
          : "border-b border-transparent py-5"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8"
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center" aria-label="PULSE home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-bone"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-flame transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangToggle className="hidden sm:inline-flex" />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#trial">{t.nav.join}</a>
          </Button>
          <button
            type="button"
            className="grid size-10 place-items-center border border-line text-bone lg:hidden"
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass absolute inset-x-0 top-full border-b border-line lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-6">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line/60 py-4 font-display text-2xl uppercase text-bone transition-colors hover:text-flame"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4 flex items-center justify-between">
                <LangToggle />
                <Button asChild size="sm">
                  <a href="#trial" onClick={() => setOpen(false)}>
                    {t.nav.join}
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
