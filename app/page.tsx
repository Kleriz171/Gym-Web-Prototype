import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Stats } from "@/components/sections/stats";
import { Programs } from "@/components/sections/programs";
import { Pricing } from "@/components/sections/pricing";
import { Trainers } from "@/components/sections/trainers";
import { Schedule } from "@/components/sections/schedule";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyUs } from "@/components/sections/why-us";
import { AppPromo } from "@/components/sections/app-promo";
import { LeadForm } from "@/components/sections/lead-form";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <MarqueeStrip />
        <Stats />
        <Programs />
        <Pricing />
        <Trainers />
        <Schedule />
        <Gallery />
        <Testimonials />
        <WhyUs />
        <AppPromo />
        <LeadForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
