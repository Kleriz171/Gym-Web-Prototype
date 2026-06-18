/* ----------------------------------------------------------------------------
   PULSE — bilingual content dictionary
   `en` and `sq` share the `SiteCopy` shape, guaranteeing 1:1 parity.
   English is authored; Albanian is idiomatic placeholder (refine later).
---------------------------------------------------------------------------- */

export type Lang = "en" | "sq";

export interface NavCopy {
  links: { label: string; href: string }[];
  join: string;
  menu: string;
  close: string;
}

export interface HeroCopy {
  kicker: string;
  titleTop: string;
  titleAccent: string;
  titleBottom: string;
  subhead: string;
  ctaJoin: string;
  ctaTrial: string;
  scroll: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Program {
  id: string;
  name: string;
  tagline: string;
  description: string;
  intensity: string;
}

export interface Tier {
  id: string;
  name: string;
  blurb: string;
  monthly: number;
  annual: number;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface Trainer {
  name: string;
  specialty: string;
  bio: string;
}

export interface ScheduleClass {
  time: string;
  name: string;
  trainer: string;
  tag: string;
}

export interface Facility {
  title: string;
  caption: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  result: string;
  rating: number;
}

export interface Feature {
  icon: string;
  title: string;
  body: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface SiteCopy {
  nav: NavCopy;
  hero: HeroCopy;
  marquee: string[];
  stats: { kicker: string; items: Stat[] };
  programs: {
    kicker: string;
    title: string;
    intro: string;
    intensityLabel: string;
    items: Program[];
  };
  pricing: {
    kicker: string;
    title: string;
    intro: string;
    monthly: string;
    annual: string;
    save: string;
    perMonth: string;
    billedAnnually: string;
    popular: string;
    tiers: Tier[];
  };
  trainers: {
    kicker: string;
    title: string;
    intro: string;
    items: Trainer[];
  };
  schedule: {
    kicker: string;
    title: string;
    intro: string;
    days: string[];
    grid: Record<string, ScheduleClass[]>;
  };
  facilities: {
    kicker: string;
    title: string;
    intro: string;
    items: Facility[];
  };
  testimonials: {
    kicker: string;
    title: string;
    intro: string;
    items: Testimonial[];
  };
  why: {
    kicker: string;
    title: string;
    intro: string;
    items: Feature[];
  };
  app: {
    kicker: string;
    title: string;
    body: string;
    bullets: string[];
    ios: string;
    android: string;
  };
  lead: {
    kicker: string;
    title: string;
    body: string;
    name: string;
    email: string;
    phone: string;
    goal: string;
    goals: string[];
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    errName: string;
    errEmail: string;
    errPhone: string;
  };
  faq: {
    kicker: string;
    title: string;
    items: Faq[];
  };
  footer: {
    tagline: string;
    hoursTitle: string;
    hours: string[];
    locationTitle: string;
    address: string[];
    linksTitle: string;
    links: { label: string; href: string }[];
    newsletterTitle: string;
    newsletterBody: string;
    newsletterPlaceholder: string;
    newsletterCta: string;
    rights: string;
  };
}

const en: SiteCopy = {
  nav: {
    links: [
      { label: "Programs", href: "#programs" },
      { label: "Pricing", href: "#pricing" },
      { label: "Trainers", href: "#trainers" },
      { label: "Schedule", href: "#schedule" },
      { label: "FAQ", href: "#faq" },
    ],
    join: "Join Now",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    kicker: "Premium Strength & Conditioning",
    titleTop: "Build",
    titleAccent: "Your Best",
    titleBottom: "Self",
    subhead:
      "Train where intensity meets intelligence. State-of-the-art equipment, elite coaches, and a community that refuses to settle.",
    ctaJoin: "Join Now",
    ctaTrial: "Book Free Trial",
    scroll: "Scroll",
  },
  marquee: [
    "Strength",
    "HIIT",
    "Boxing",
    "CrossFit",
    "Yoga",
    "Cardio",
    "No Excuses",
    "Show Up",
    "Outwork Yesterday",
  ],
  stats: {
    kicker: "The numbers don't lie",
    items: [
      { value: 4200, suffix: "+", label: "Active Members" },
      { value: 38, suffix: "", label: "Expert Trainers" },
      { value: 120, suffix: "+", label: "Classes / Week" },
      { value: 2800, suffix: "m²", label: "Training Floor" },
    ],
  },
  programs: {
    kicker: "Find your discipline",
    title: "Programs Built To Break Limits",
    intro:
      "Six signature tracks, each engineered with progressive coaching and measurable results.",
    intensityLabel: "Intensity",
    items: [
      {
        id: "strength",
        name: "Strength",
        tagline: "Iron & Power",
        description:
          "Progressive barbell and accessory work to build raw, functional strength under expert coaching.",
        intensity: "High",
      },
      {
        id: "hiit",
        name: "HIIT",
        tagline: "Burn Engine",
        description:
          "Explosive high-intensity intervals that torch calories and rebuild your conditioning fast.",
        intensity: "Extreme",
      },
      {
        id: "yoga",
        name: "Yoga",
        tagline: "Mobility & Flow",
        description:
          "Breath-led flows and deep mobility to keep your body resilient, supple and recovered.",
        intensity: "Low",
      },
      {
        id: "crossfit",
        name: "CrossFit",
        tagline: "Forge Athletes",
        description:
          "Constantly varied functional movements at intensity. Community, competition, and serious capacity.",
        intensity: "Extreme",
      },
      {
        id: "boxing",
        name: "Boxing",
        tagline: "Hit Hard",
        description:
          "Footwork, combinations and bag work that sharpens reflexes and unleashes power.",
        intensity: "High",
      },
      {
        id: "cardio",
        name: "Cardio",
        tagline: "Endless Engine",
        description:
          "Rowers, bikes, sleds and treads programmed to build a relentless aerobic base.",
        intensity: "Medium",
      },
    ],
  },
  pricing: {
    kicker: "Commit to the work",
    title: "Memberships",
    intro: "No contracts you'll regret. Just access, coaching, and momentum.",
    monthly: "Monthly",
    annual: "Annual",
    save: "Save 20%",
    perMonth: "/mo",
    billedAnnually: "billed annually",
    popular: "Most Popular",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        blurb: "Everything you need to begin.",
        monthly: 29,
        annual: 23,
        features: [
          "Full gym floor access",
          "2 group classes / week",
          "Locker & shower facilities",
          "Mobile app workouts",
        ],
        cta: "Get Started",
      },
      {
        id: "pro",
        name: "Pulse Pro",
        blurb: "For those who train with intent.",
        monthly: 49,
        annual: 39,
        popular: true,
        features: [
          "Unlimited group classes",
          "24/7 gym access",
          "1 monthly PT session",
          "Nutrition plan & tracking",
          "Recovery zone & sauna",
        ],
        cta: "Go Pro",
      },
      {
        id: "elite",
        name: "Elite",
        blurb: "The complete performance package.",
        monthly: 89,
        annual: 71,
        features: [
          "Everything in Pulse Pro",
          "Weekly 1:1 coaching",
          "InBody & performance testing",
          "Guest passes each month",
          "Priority class booking",
        ],
        cta: "Go Elite",
      },
    ],
  },
  trainers: {
    kicker: "Coached by the best",
    title: "Meet The Coaches",
    intro:
      "Certified, relentless, and obsessed with your progress. Your goals are their job.",
    items: [
      {
        name: "Ardit Hoxha",
        specialty: "Strength & Powerlifting",
        bio: "National-level powerlifter turned coach. Ardit builds bulletproof strength with flawless technique.",
      },
      {
        name: "Elira Krasniqi",
        specialty: "HIIT & Conditioning",
        bio: "Elira's classes are legendary. Expect to leave drenched, stronger, and addicted to the burn.",
      },
      {
        name: "Marcus Bell",
        specialty: "Boxing & Combat",
        bio: "Ex-amateur boxer with a decade of coaching. Sharp hands, sharper mindset.",
      },
      {
        name: "Sara Dimitrova",
        specialty: "Yoga & Mobility",
        bio: "Sara restores what hard training breaks down — mobility, breath, and balance.",
      },
    ],
  },
  schedule: {
    kicker: "Plan your week",
    title: "Class Schedule",
    intro: "Show up. We'll handle the intensity.",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    grid: {
      Mon: [
        { time: "06:30", name: "Strength", trainer: "Ardit", tag: "Strength" },
        { time: "12:00", name: "Burn HIIT", trainer: "Elira", tag: "HIIT" },
        { time: "18:30", name: "Boxing", trainer: "Marcus", tag: "Boxing" },
      ],
      Tue: [
        { time: "07:00", name: "CrossFit", trainer: "Ardit", tag: "CrossFit" },
        { time: "12:30", name: "Flow Yoga", trainer: "Sara", tag: "Yoga" },
        { time: "19:00", name: "Cardio Engine", trainer: "Elira", tag: "Cardio" },
      ],
      Wed: [
        { time: "06:30", name: "Power Hour", trainer: "Ardit", tag: "Strength" },
        { time: "17:30", name: "Burn HIIT", trainer: "Elira", tag: "HIIT" },
        { time: "19:30", name: "Boxing", trainer: "Marcus", tag: "Boxing" },
      ],
      Thu: [
        { time: "07:00", name: "Mobility", trainer: "Sara", tag: "Yoga" },
        { time: "12:00", name: "CrossFit", trainer: "Ardit", tag: "CrossFit" },
        { time: "18:30", name: "Cardio Engine", trainer: "Elira", tag: "Cardio" },
      ],
      Fri: [
        { time: "06:30", name: "Strength", trainer: "Ardit", tag: "Strength" },
        { time: "12:30", name: "Burn HIIT", trainer: "Elira", tag: "HIIT" },
        { time: "18:00", name: "Boxing", trainer: "Marcus", tag: "Boxing" },
      ],
      Sat: [
        { time: "09:00", name: "Team WOD", trainer: "Ardit", tag: "CrossFit" },
        { time: "10:30", name: "Flow Yoga", trainer: "Sara", tag: "Yoga" },
        { time: "11:30", name: "Open Floor", trainer: "Crew", tag: "Cardio" },
      ],
    },
  },
  facilities: {
    kicker: "Built different",
    title: "The Facility",
    intro:
      "2,800m² of purpose-built training space. Every detail engineered for performance.",
    items: [
      { title: "Strength Hall", caption: "Eleiko platforms & racks" },
      { title: "Combat Zone", caption: "Ring, bags & open mat" },
      { title: "Cardio Deck", caption: "Assault bikes & rowers" },
      { title: "Recovery Suite", caption: "Sauna, ice & massage" },
      { title: "Studio", caption: "Yoga & mobility space" },
      { title: "Turf Track", caption: "Sled & sprint lanes" },
    ],
  },
  testimonials: {
    kicker: "Real people, real results",
    title: "Transformations",
    intro: "Don't take our word for it. Take theirs.",
    items: [
      {
        quote:
          "I lost 18kg and gained a completely new mindset. PULSE didn't just change my body — it changed how I show up everywhere.",
        name: "Genta M.",
        result: "−18kg in 7 months",
        rating: 5,
      },
      {
        quote:
          "The coaching is on another level. I finally deadlift double bodyweight and my back pain is gone for good.",
        name: "Driton K.",
        result: "+60kg deadlift",
        rating: 5,
      },
      {
        quote:
          "Best community I've ever trained in. The 6:30 crew keeps me accountable every single morning.",
        name: "Anna P.",
        result: "Down 3 sizes",
        rating: 5,
      },
      {
        quote:
          "From couch to my first competition in a year. The trainers believed in me before I did.",
        name: "Besar H.",
        result: "First CrossFit comp",
        rating: 5,
      },
    ],
  },
  why: {
    kicker: "Why PULSE",
    title: "Built To Make You Better",
    intro: "Everything here exists for one reason: your results.",
    items: [
      {
        icon: "dumbbell",
        title: "Premium Equipment",
        body: "Eleiko, Rogue and Technogym. No waiting, no compromises — only the best tools.",
      },
      {
        icon: "clock",
        title: "24/7 Access",
        body: "Your schedule, your rules. Train at 5am or midnight with secure keyless entry.",
      },
      {
        icon: "smartphone",
        title: "Smart App",
        body: "Book classes, track lifts, follow programs and log progress — all in one place.",
      },
      {
        icon: "salad",
        title: "Nutrition Plans",
        body: "Personalised macros and meal guidance that actually fit your life and goals.",
      },
    ],
  },
  app: {
    kicker: "Train in your pocket",
    title: "The PULSE App",
    body: "Your entire training life in one app. Book a class, follow your program, scan into the gym, and watch your numbers climb.",
    bullets: [
      "One-tap class booking",
      "Guided programs & video form cues",
      "Progress, PRs & streak tracking",
      "Keyless gym entry",
    ],
    ios: "App Store",
    android: "Google Play",
  },
  lead: {
    kicker: "Your first session is on us",
    title: "Claim Your Free Trial",
    body: "No pressure, no contracts. Come experience PULSE for a full day, free.",
    name: "Full name",
    email: "Email address",
    phone: "Phone number",
    goal: "Your main goal",
    goals: ["Lose weight", "Build muscle", "Get stronger", "Improve fitness", "Just start"],
    submit: "Book My Free Trial",
    submitting: "Booking…",
    successTitle: "You're in! 🔥",
    successBody: "Check your inbox — our team will confirm your free session shortly.",
    errName: "Please enter your name",
    errEmail: "Enter a valid email",
    errPhone: "Enter a valid phone number",
  },
  faq: {
    kicker: "Good questions",
    title: "FAQ",
    items: [
      {
        q: "Do I need to be fit to start?",
        a: "Absolutely not. Every program scales to your level, and your first session includes a full assessment so we meet you exactly where you are.",
      },
      {
        q: "Is there a lock-in contract?",
        a: "No long-term lock-ins. Monthly memberships are rolling, and annual plans simply save you 20%. Cancel or pause anytime with 30 days' notice.",
      },
      {
        q: "What's included in the free trial?",
        a: "A full day of access: the gym floor, one group class of your choice, and a quick goal-setting chat with a coach. Bring trainers and water — we'll handle the rest.",
      },
      {
        q: "Do you have showers and lockers?",
        a: "Yes — full changing rooms, showers, day lockers and a recovery suite with sauna are included on Pro and Elite memberships.",
      },
      {
        q: "Can I freeze my membership?",
        a: "Of course. Life happens. You can freeze your membership for up to 3 months per year at no cost.",
      },
    ],
  },
  footer: {
    tagline: "Train where intensity meets intelligence.",
    hoursTitle: "Opening Hours",
    hours: [
      "Mon – Fri  ·  05:00 – 23:00",
      "Saturday  ·  07:00 – 21:00",
      "Sunday  ·  08:00 – 20:00",
      "Members  ·  24/7 keyless access",
    ],
    locationTitle: "Find Us",
    address: ["Rruga e Durrësit 121", "Tiranë 1001, Albania", "hello@pulse.fit", "+355 4 123 4567"],
    linksTitle: "Explore",
    links: [
      { label: "Programs", href: "#programs" },
      { label: "Pricing", href: "#pricing" },
      { label: "Trainers", href: "#trainers" },
      { label: "Schedule", href: "#schedule" },
      { label: "Free Trial", href: "#trial" },
    ],
    newsletterTitle: "Join the movement",
    newsletterBody: "Training tips, member stories and exclusive offers. No spam, ever.",
    newsletterPlaceholder: "Your email",
    newsletterCta: "Subscribe",
    rights: "All rights reserved.",
  },
};

const sq: SiteCopy = {
  nav: {
    links: [
      { label: "Programet", href: "#programs" },
      { label: "Çmimet", href: "#pricing" },
      { label: "Trajnerët", href: "#trainers" },
      { label: "Orari", href: "#schedule" },
      { label: "Pyetjet", href: "#faq" },
    ],
    join: "Bashkohu Tani",
    menu: "Menu",
    close: "Mbyll",
  },
  hero: {
    kicker: "Forcë & Kondicionim Premium",
    titleTop: "Ndërto",
    titleAccent: "Veten Më Të",
    titleBottom: "Mirë",
    subhead:
      "Stërvitu aty ku intensiteti takon inteligjencën. Pajisje moderne, trajnerë elitë dhe një komunitet që nuk dorëzohet kurrë.",
    ctaJoin: "Bashkohu Tani",
    ctaTrial: "Rezervo Provën Falas",
    scroll: "Zbrit",
  },
  marquee: [
    "Forcë",
    "HIIT",
    "Boks",
    "CrossFit",
    "Joga",
    "Kardio",
    "Pa Justifikime",
    "Paraqitu",
    "Mund Dje-në",
  ],
  stats: {
    kicker: "Numrat nuk gënjejnë",
    items: [
      { value: 4200, suffix: "+", label: "Anëtarë Aktivë" },
      { value: 38, suffix: "", label: "Trajnerë Ekspertë" },
      { value: 120, suffix: "+", label: "Klasa / Javë" },
      { value: 2800, suffix: "m²", label: "Sipërfaqe Stërvitjeje" },
    ],
  },
  programs: {
    kicker: "Gjej disiplinën tënde",
    title: "Programe Që Thyejnë Kufijtë",
    intro:
      "Gjashtë programe nënshkrimi, secili i ndërtuar me trajnim progresiv dhe rezultate të matshme.",
    intensityLabel: "Intensiteti",
    items: [
      {
        id: "strength",
        name: "Forcë",
        tagline: "Hekur & Fuqi",
        description:
          "Punë progresive me shtangë dhe ushtrime ndihmëse për të ndërtuar forcë funksionale nën trajnim ekspert.",
        intensity: "I lartë",
      },
      {
        id: "hiit",
        name: "HIIT",
        tagline: "Motor Djegës",
        description:
          "Intervale eksplozive me intensitet të lartë që djegin kalori dhe rindërtojnë kondicionin shpejt.",
        intensity: "Ekstrem",
      },
      {
        id: "yoga",
        name: "Joga",
        tagline: "Lëvizshmëri & Rrjedhë",
        description:
          "Rrjedha të udhëhequra nga fryma dhe lëvizshmëri e thellë për ta mbajtur trupin elastik dhe të rikuperuar.",
        intensity: "I ulët",
      },
      {
        id: "crossfit",
        name: "CrossFit",
        tagline: "Farkëto Atletë",
        description:
          "Lëvizje funksionale vazhdimisht të ndryshme me intensitet. Komunitet, garë dhe kapacitet serioz.",
        intensity: "Ekstrem",
      },
      {
        id: "boxing",
        name: "Boks",
        tagline: "Godit Fort",
        description:
          "Lëvizje këmbësh, kombinime dhe punë me thes që mprehin reflekset dhe lëshojnë fuqinë.",
        intensity: "I lartë",
      },
      {
        id: "cardio",
        name: "Kardio",
        tagline: "Motor i Pafund",
        description:
          "Rrema, biçikleta, slita dhe shirita të programuar për të ndërtuar një bazë aerobike të pamëshirshme.",
        intensity: "Mesatar",
      },
    ],
  },
  pricing: {
    kicker: "Përkushtoju punës",
    title: "Anëtarësitë",
    intro: "Pa kontrata që do t'i pendohesh. Vetëm akses, trajnim dhe vrull.",
    monthly: "Mujore",
    annual: "Vjetore",
    save: "Kurse 20%",
    perMonth: "/muaj",
    billedAnnually: "faturuar vjetore",
    popular: "Më e Popullarizuara",
    tiers: [
      {
        id: "starter",
        name: "Fillestar",
        blurb: "Gjithçka që të duhet për të nisur.",
        monthly: 29,
        annual: 23,
        features: [
          "Akses i plotë në palestër",
          "2 klasa në grup / javë",
          "Dollapë & dushe",
          "Stërvitje në aplikacion",
        ],
        cta: "Fillo",
      },
      {
        id: "pro",
        name: "Pulse Pro",
        blurb: "Për ata që stërviten me qëllim.",
        monthly: 49,
        annual: 39,
        popular: true,
        features: [
          "Klasa në grup të pakufizuara",
          "Akses 24/7",
          "1 seancë PT në muaj",
          "Plan ushqimor & gjurmim",
          "Zonë rikuperimi & sauna",
        ],
        cta: "Bëhu Pro",
      },
      {
        id: "elite",
        name: "Elite",
        blurb: "Paketa e plotë e performancës.",
        monthly: 89,
        annual: 71,
        features: [
          "Gjithçka në Pulse Pro",
          "Trajnim 1:1 çdo javë",
          "Testim InBody & performance",
          "Bileta për miq çdo muaj",
          "Rezervim klasash me përparësi",
        ],
        cta: "Bëhu Elite",
      },
    ],
  },
  trainers: {
    kicker: "Trajnuar nga më të mirët",
    title: "Njihu Me Trajnerët",
    intro:
      "Të certifikuar, të pamëshirshëm dhe të obsesionuar me progresin tënd. Synimet e tua janë puna e tyre.",
    items: [
      {
        name: "Ardit Hoxha",
        specialty: "Forcë & Powerlifting",
        bio: "Powerlifter i nivelit kombëtar kthyer trajner. Arditi ndërton forcë të pathyeshme me teknikë të përsosur.",
      },
      {
        name: "Elira Krasniqi",
        specialty: "HIIT & Kondicionim",
        bio: "Klasat e Elirës janë legjendare. Prit të dalësh i djersitur, më i fortë dhe i varur pas djegies.",
      },
      {
        name: "Marcus Bell",
        specialty: "Boks & Luftim",
        bio: "Ish-boksier amator me një dekadë trajnim. Duar të shpejta, mendje edhe më e mprehtë.",
      },
      {
        name: "Sara Dimitrova",
        specialty: "Joga & Lëvizshmëri",
        bio: "Sara rikthen atë që stërvitja e rëndë prish — lëvizshmërinë, frymën dhe ekuilibrin.",
      },
    ],
  },
  schedule: {
    kicker: "Planifiko javën",
    title: "Orari i Klasave",
    intro: "Paraqitu. Intensitetin e mbajmë ne.",
    days: ["Hën", "Mar", "Mër", "Enj", "Pre", "Sht"],
    grid: {
      Hën: [
        { time: "06:30", name: "Forcë", trainer: "Ardit", tag: "Strength" },
        { time: "12:00", name: "Burn HIIT", trainer: "Elira", tag: "HIIT" },
        { time: "18:30", name: "Boks", trainer: "Marcus", tag: "Boxing" },
      ],
      Mar: [
        { time: "07:00", name: "CrossFit", trainer: "Ardit", tag: "CrossFit" },
        { time: "12:30", name: "Joga Rrjedhë", trainer: "Sara", tag: "Yoga" },
        { time: "19:00", name: "Motor Kardio", trainer: "Elira", tag: "Cardio" },
      ],
      Mër: [
        { time: "06:30", name: "Ora e Fuqisë", trainer: "Ardit", tag: "Strength" },
        { time: "17:30", name: "Burn HIIT", trainer: "Elira", tag: "HIIT" },
        { time: "19:30", name: "Boks", trainer: "Marcus", tag: "Boxing" },
      ],
      Enj: [
        { time: "07:00", name: "Lëvizshmëri", trainer: "Sara", tag: "Yoga" },
        { time: "12:00", name: "CrossFit", trainer: "Ardit", tag: "CrossFit" },
        { time: "18:30", name: "Motor Kardio", trainer: "Elira", tag: "Cardio" },
      ],
      Pre: [
        { time: "06:30", name: "Forcë", trainer: "Ardit", tag: "Strength" },
        { time: "12:30", name: "Burn HIIT", trainer: "Elira", tag: "HIIT" },
        { time: "18:00", name: "Boks", trainer: "Marcus", tag: "Boxing" },
      ],
      Sht: [
        { time: "09:00", name: "Team WOD", trainer: "Ardit", tag: "CrossFit" },
        { time: "10:30", name: "Joga Rrjedhë", trainer: "Sara", tag: "Yoga" },
        { time: "11:30", name: "Kat i Hapur", trainer: "Ekipi", tag: "Cardio" },
      ],
    },
  },
  facilities: {
    kicker: "Ndërtuar ndryshe",
    title: "Ambienti",
    intro:
      "2,800m² hapësirë stërvitjeje e ndërtuar me qëllim. Çdo detaj i projektuar për performancë.",
    items: [
      { title: "Salla e Forcës", caption: "Platforma & raft Eleiko" },
      { title: "Zona e Luftimit", caption: "Ring, thasë & tapet" },
      { title: "Kati i Kardios", caption: "Biçikleta & rrema" },
      { title: "Suita e Rikuperimit", caption: "Sauna, akull & masazh" },
      { title: "Studio", caption: "Hapësirë joga & lëvizshmërie" },
      { title: "Pista me Bar", caption: "Korsi slite & sprinti" },
    ],
  },
  testimonials: {
    kicker: "Njerëz realë, rezultate reale",
    title: "Transformime",
    intro: "Mos na beso ne. Beso ata.",
    items: [
      {
        quote:
          "Humba 18kg dhe fitova një mentalitet krejt të ri. PULSE nuk më ndryshoi vetëm trupin — ndryshoi mënyrën si paraqitem kudo.",
        name: "Genta M.",
        result: "−18kg në 7 muaj",
        rating: 5,
      },
      {
        quote:
          "Trajnimi është në një nivel tjetër. Më në fund ngre dyfishin e peshës time dhe dhimbja e shpinës u zhduk.",
        name: "Driton K.",
        result: "+60kg deadlift",
        rating: 5,
      },
      {
        quote:
          "Komuniteti më i mirë ku kam stërvitur ndonjëherë. Ekipi i 6:30 më mban përgjegjës çdo mëngjes.",
        name: "Anna P.",
        result: "3 madhësi më poshtë",
        rating: 5,
      },
      {
        quote:
          "Nga divani te gara ime e parë brenda një viti. Trajnerët besuan tek unë para se të besoja vetë.",
        name: "Besar H.",
        result: "Gara e parë CrossFit",
        rating: 5,
      },
    ],
  },
  why: {
    kicker: "Pse PULSE",
    title: "Ndërtuar Të Të Bëjë Më Të Mirë",
    intro: "Gjithçka këtu ekziston për një arsye: rezultatet e tua.",
    items: [
      {
        icon: "dumbbell",
        title: "Pajisje Premium",
        body: "Eleiko, Rogue dhe Technogym. Pa pritje, pa kompromise — vetëm mjetet më të mira.",
      },
      {
        icon: "clock",
        title: "Akses 24/7",
        body: "Orari yt, rregullat e tua. Stërvitu në 5 të mëngjesit ose mesnatë me hyrje pa çelës.",
      },
      {
        icon: "smartphone",
        title: "Aplikacion i Zgjuar",
        body: "Rezervo klasa, gjurmo ngritjet, ndiq programe dhe regjistro progresin — gjithçka në një vend.",
      },
      {
        icon: "salad",
        title: "Plane Ushqimore",
        body: "Makro dhe udhëzime vakti të personalizuara që përshtaten me jetën dhe synimet e tua.",
      },
    ],
  },
  app: {
    kicker: "Stërvitu në xhep",
    title: "Aplikacioni PULSE",
    body: "Gjithë jeta jote e stërvitjes në një aplikacion. Rezervo një klasë, ndiq programin, skano hyrjen dhe shiko numrat të ngjiten.",
    bullets: [
      "Rezervim klase me një prekje",
      "Programe të udhëhequra & video teknike",
      "Gjurmim progresi, PR & serish",
      "Hyrje në palestër pa çelës",
    ],
    ios: "App Store",
    android: "Google Play",
  },
  lead: {
    kicker: "Seanca jote e parë është falas",
    title: "Merr Provën Tënde Falas",
    body: "Pa presion, pa kontrata. Eja provo PULSE për një ditë të plotë, falas.",
    name: "Emri i plotë",
    email: "Adresa email",
    phone: "Numri i telefonit",
    goal: "Synimi yt kryesor",
    goals: ["Humb peshë", "Ndërto muskuj", "Bëhu më i fortë", "Përmirëso formën", "Thjesht fillo"],
    submit: "Rezervo Provën Falas",
    submitting: "Duke rezervuar…",
    successTitle: "Je brenda! 🔥",
    successBody: "Kontrollo emailin — ekipi ynë do të konfirmojë seancën tënde falas së shpejti.",
    errName: "Të lutem shkruaj emrin",
    errEmail: "Shkruaj një email të vlefshëm",
    errPhone: "Shkruaj një numër të vlefshëm",
  },
  faq: {
    kicker: "Pyetje të mira",
    title: "Pyetjet e Shpeshta",
    items: [
      {
        q: "A duhet të jem në formë për të filluar?",
        a: "Aspak. Çdo program përshtatet me nivelin tënd, dhe seanca jote e parë përfshin një vlerësim të plotë që të nisemi pikërisht aty ku je.",
      },
      {
        q: "A ka kontratë me afat?",
        a: "Pa afate të gjata. Anëtarësitë mujore janë të rinovueshme, ndërsa planet vjetore thjesht të kursejnë 20%. Anulo ose ndalo kurdo me njoftim 30-ditësh.",
      },
      {
        q: "Çfarë përfshin prova falas?",
        a: "Një ditë e plotë akses: palestra, një klasë në grup sipas dëshirës, dhe një bisedë e shkurtër me një trajner për synimet. Sill atlete dhe ujë — pjesën tjetër e mbajmë ne.",
      },
      {
        q: "A keni dushe dhe dollapë?",
        a: "Po — dhoma zhveshjeje të plota, dushe, dollapë ditorë dhe një suitë rikuperimi me sauna përfshihen në anëtarësitë Pro dhe Elite.",
      },
      {
        q: "A mund ta ngrij anëtarësinë?",
        a: "Sigurisht. Jeta ndodh. Mund ta ngrish anëtarësinë deri në 3 muaj në vit pa asnjë kosto.",
      },
    ],
  },
  footer: {
    tagline: "Stërvitu aty ku intensiteti takon inteligjencën.",
    hoursTitle: "Orari i Hapjes",
    hours: [
      "Hën – Pre  ·  05:00 – 23:00",
      "E Shtunë  ·  07:00 – 21:00",
      "E Diel  ·  08:00 – 20:00",
      "Anëtarët  ·  hyrje 24/7 pa çelës",
    ],
    locationTitle: "Na Gjej",
    address: ["Rruga e Durrësit 121", "Tiranë 1001, Shqipëri", "hello@pulse.fit", "+355 4 123 4567"],
    linksTitle: "Eksploro",
    links: [
      { label: "Programet", href: "#programs" },
      { label: "Çmimet", href: "#pricing" },
      { label: "Trajnerët", href: "#trainers" },
      { label: "Orari", href: "#schedule" },
      { label: "Prova Falas", href: "#trial" },
    ],
    newsletterTitle: "Bashkohu lëvizjes",
    newsletterBody: "Këshilla stërvitjeje, histori anëtarësh dhe oferta ekskluzive. Kurrë spam.",
    newsletterPlaceholder: "Email-i yt",
    newsletterCta: "Abonohu",
    rights: "Të gjitha të drejtat e rezervuara.",
  },
};

export const dictionaries: Record<Lang, SiteCopy> = { en, sq };
