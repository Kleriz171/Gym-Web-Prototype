"use client";

import { useState } from "react";
import { toast } from "sonner";
import { MapPin } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/components/shared/social-icons";
import { useCopy } from "@/lib/language-provider";
import { Logo } from "@/components/shared/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const t = useCopy();
  const [email, setEmail] = useState("");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) return;
    toast.success(t.footer.newsletterCta, { description: email });
    setEmail("");
  };

  return (
    <footer className="bg-ink-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + newsletter */}
          <div>
            <Logo className="text-3xl" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {t.footer.tagline}
            </p>

            <form onSubmit={onSubscribe} className="mt-8 max-w-sm">
              <p className="font-display text-xl uppercase text-bone">
                {t.footer.newsletterTitle}
              </p>
              <p className="mt-1 text-xs text-muted">{t.footer.newsletterBody}</p>
              <div className="mt-4 flex">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.newsletterPlaceholder}
                  aria-label={t.footer.newsletterPlaceholder}
                  className="border-r-0"
                />
                <Button type="submit" size="md" className="shrink-0">
                  {t.footer.newsletterCta}
                </Button>
              </div>
            </form>
          </div>

          {/* Links */}
          <FooterCol title={t.footer.linksTitle}>
            <ul className="space-y-3">
              {t.footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-flame"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* Hours */}
          <FooterCol title={t.footer.hoursTitle}>
            <ul className="space-y-3">
              {t.footer.hours.map((line) => (
                <li key={line} className="text-sm text-muted">
                  {line}
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* Location / map */}
          <FooterCol title={t.footer.locationTitle}>
            <address className="space-y-1.5 not-italic">
              {t.footer.address.map((line) => (
                <p key={line} className="text-sm text-muted">
                  {line}
                </p>
              ))}
            </address>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 flex aspect-[16/9] items-center justify-center gap-2 border border-line bg-ink text-muted transition-colors hover:border-flame hover:text-flame"
            >
              <MapPin className="size-4" />
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em]">
                View Map
              </span>
            </a>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-line pt-8 md:flex-row">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-faint">
            © {new Date().getFullYear()} PULSE. {t.footer.rights}
          </p>
          <div className="flex gap-2">
            {[InstagramIcon, FacebookIcon, YoutubeIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="PULSE social"
                className="grid size-10 place-items-center border border-line text-muted transition-colors hover:border-flame hover:text-flame"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-5 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-flame">
        {title}
      </h3>
      {children}
    </div>
  );
}
