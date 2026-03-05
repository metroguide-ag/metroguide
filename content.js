// ─────────────────────────────────────────
//  MetroGuide — РЕДАКТИРУЙ ТОЛЬКО ЭТОТ ФАЙЛ
//  Сохрани → Vercel задеплоит автоматически
// ─────────────────────────────────────────

const SITE = {

  // ── GENERAL
  studio_name: "MetroGuide",
  tagline: "Design. Strategy. Conversion.",
  email: "hello@metroguide.io",
  typeform_url: "https://form.typeform.com/to/gEakDcxK",
  location: "Temirtau, KZ",

  // ── HERO
  hero: {
    tag: "Design Studio · Est. 2021",
    line1: "Design that",
    line2: "converts.",
    line3: "Strategy that scales.",
    subtext: "We build websites, brands, and products\nfor Seed & Series A startups.\nFintech. B2B SaaS. Built to win trust fast.",
    cta_primary: "View Work →",
    cta_secondary: "Free Audit",
    stats: [
      { num: "30+", label: "Screens designed" },
      { num: "3×",  label: "Faster conversions" },
      { num: "100%", label: "Founder-focused" },
    ],
  },

  // ── MARQUEE (повторяется автоматически)
  marquee: [
    "Web Design", "UX Strategy", "Brand Identity",
    "Marketing Sites", "Fintech", "B2B SaaS",
    "Pitch Decks", "Conversion Design",
  ],

  // ── WORK CASES
  cases: [
    {
      id: "bytemine",
      tag: "SaaS · Marketing Website · 15 screens",
      title: "Bytemine",
      desc: "Full marketing website for an algo trading SaaS. Architecture → User flows → 15-screen Axure prototype. Conversion funnel built into every section.",
      wide: true,   // занимает всю ширину
      color: "#00ffb4",
      icon: "⬡",
    },
    {
      id: "xide",
      tag: "Fintech · Trading Platform · NDA",
      title: "XIDE",
      desc: "30-screen product UX for a North American stock platform with 95%+ AI prediction accuracy.",
      wide: false,
      color: "#00aaff",
      icon: "◈",
    },
    {
      id: "pari",
      tag: "Fintech · Concept Redesign · UI",
      title: "Pari",
      desc: "Unsolicited concept redesign for a Portuguese fintech. Full UI in colour — before/after.",
      wide: false,
      color: "#ff6b6b",
      icon: "◉",
    },
  ],

  // ── SERVICES
  services: [
    {
      num: "01",
      icon: "◻",
      title: "Web Design & Dev",
      desc: "Landing pages, SaaS marketing sites, and multi-page builds. Design + Webflow development, full cycle delivered live.",
      price: "From $1,500 · 2 weeks – 2 months",
    },
    {
      num: "02",
      icon: "◈",
      title: "Brand Identity",
      desc: "Logo, visual system, tone of voice, full guidelines. From Brand Foundation to full Brand Ecosystem.",
      price: "From $1,000 · 3 weeks – 6 months",
    },
    {
      num: "03",
      icon: "◎",
      title: "UX / Product Design",
      desc: "User research, flows, wireframes, Axure prototypes. Built around conversion logic and product thinking.",
      price: "From $1,500 · Scope-based",
    },
    {
      num: "04",
      icon: "▣",
      title: "Pitch Decks",
      desc: "Investor-ready decks with clear narrative structure. Design that makes complex ideas immediately clear.",
      price: "From $250 · 1 week",
    },
    {
      num: "05",
      icon: "◆",
      title: "Targeting & Creatives",
      desc: "Ad creatives optimised for A/B testing. Packs of 3–5 assets designed for conversion, not just aesthetics.",
      price: "$350–$500 per pack · 1 week",
    },
    {
      num: "06",
      icon: "◇",
      title: "Strategy Audit",
      desc: "30-minute free audit of your current website or product. We tell you what's leaking conversions and why.",
      price: "Free · 30 minutes",
    },
  ],

  // ── ABOUT
  about: {
    paragraphs: [
      "MetroGuide is a <strong>specialized design studio</strong>, not a 20-person agency and not a freelancer from Upwork. We work with a small number of clients at a time — which means full attention on your project.",
      "Our ICP: <strong>Fintech and B2B SaaS startups</strong> at Seed and Series A stage. Founders, CPOs, CMOs who need design and positioning to move together — not just \"make it look good.\"",
      "We approach every project by first understanding your <strong>product logic and conversion context</strong>. The visual output follows the strategic thinking, not the other way around.",
    ],
    badge_top: "Seed / Series A",
    badge_bottom: "Fintech · SaaS",
  },

  // ── PROCESS
  process: [
    { num: "01", title: "Discovery",      desc: "We map your product, market, ICP, and competitors. No brief template — a real conversation." },
    { num: "02", title: "User Research",  desc: "User Stories Map + Functional Requirements. We define what the product needs before touching design." },
    { num: "03", title: "Architecture",   desc: "User flows, information architecture, and interaction logic — all before any pixel work." },
    { num: "04", title: "Prototype",      desc: "Interactive Axure wireframes or full UI in Figma. Tested, iterated, signed off." },
    { num: "05", title: "Delivery",       desc: "Webflow build or developer handoff. Full documentation. You own everything." },
  ],

  // ── CTA
  cta: {
    heading1: "Ready to convert",
    heading2: "better?",
    subtext: "Start with a free 30-minute strategy audit.\nNo pitch. We look at your site, tell you what we see.",
    button: "Book Free Audit →",
    note: "Usually responds within 24 hours",
  },

  // ── NAV
  nav_links: [
    { label: "Work",     href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About",    href: "#about" },
    { label: "Process",  href: "#process" },
  ],

};
