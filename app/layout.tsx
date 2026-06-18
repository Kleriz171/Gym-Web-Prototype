import type { Metadata, Viewport } from "next";
import { Anton, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-provider";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import { Cursor } from "@/components/shared/cursor";
import { Toaster } from "@/components/ui/sonner";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://pulse.fit";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PULSE — Premium Strength & Conditioning Gym",
    template: "%s · PULSE",
  },
  description:
    "Train where intensity meets intelligence. State-of-the-art equipment, elite coaches, 24/7 access and a community that refuses to settle. Book your free trial.",
  keywords: [
    "gym",
    "fitness",
    "strength training",
    "HIIT",
    "CrossFit",
    "personal trainer",
    "Tirana gym",
    "palestër",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "PULSE",
    title: "PULSE — Build Your Best Self",
    description:
      "Premium strength & conditioning. Elite coaches, 24/7 access, real results. Book your free trial.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "PULSE gym" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PULSE — Build Your Best Self",
    description:
      "Premium strength & conditioning. Elite coaches, 24/7 access, real results.",
    images: ["/og.svg"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${manrope.variable} ${geistMono.variable}`}
    >
      <body>
        <LanguageProvider>
          <div className="grain-layer" aria-hidden />
          <SmoothScroll />
          <Cursor />
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
