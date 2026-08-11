import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Clock,
  Cpu,
  Lock,
  Handshake,
  BadgeCheck,
  Award,
  Building2,
  GraduationCap,
  Landmark,
  HardHat,
  ShoppingBag,
  Hotel,
  Banknote,
  Fuel,
  Stethoscope,
  Quote,
  Sparkles,
} from "lucide-react";
import * as Icons from "lucide-react";
import { featuredServices, services } from "@/data/services";
import { featuredProducts } from "@/data/products";
import { useTranslatedServices } from "@/i18n/useTranslatedServices";
import { useTranslatedProducts } from "@/i18n/useTranslatedProducts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lusail Technology — Enterprise IT Solutions in Doha, Qatar" },
      {
        name: "description",
        content:
          "Cybersecurity, cloud, networking, software and 24/7 managed IT services from Qatar's premium enterprise IT partner.",
      },
      { property: "og:title", content: "Lusail Technology — Enterprise IT Solutions in Qatar" },
      {
        property: "og:description",
        content: "Innovating tomorrow's technology today. Enterprise IT solutions from Doha, Qatar.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "https://www.lusailtechnology.com/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhoWeAre />
      <WhyUs />
      <FeaturedServices />
      <FeaturedProducts />
      <Industries />
      <Partners />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-x relative grid gap-8 pb-20 pt-16 lg:gap-16 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
        <div className="animate-reveal">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-teal">
              <Sparkles className="h-2.5 w-2.5 text-ink" />
            </span>
            {t("home.hero.badge")}
          </div>
          <h1 className="mt-6 font-display display-1 font-bold text-ink">
            {t("home.hero.title")}
          </h1>
          <p className="mt-6 max-w-xl hero-description-plate text-lg leading-relaxed">
            {t("home.hero.description")}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
            <Link to="/services" className="btn-royal btn-royal-hover text-sm sm:text-base">
              {t("home.hero.exploreServices")} <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
            <Link to="/contact" className="btn-ghost-ink btn-ghost-ink-hover text-sm sm:text-base">
              {t("home.hero.contactUs")} <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </div>
          <div className="mt-6 sm:mt-10 grid max-w-lg grid-cols-3 divide-x divide-ink/10 rounded-2xl border border-ink/10 bg-white/85 backdrop-blur-md p-3 sm:p-4 shadow-sm">
            <Stat kpi="500+" label={t("home.hero.projectsDelivered")} />
            <Stat kpi="14+" label={t("home.hero.yearsInQatar")} />
            <Stat kpi="24/7" label={t("home.hero.nocSoc")} />
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-royal opacity-20 blur-3xl" />
          <div className="relative animate-float overflow-hidden rounded-[36px] border border-ink/10 bg-white shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-1.5 border-b border-ink/5 px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-ink/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-ink/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-royal" />
              <div className="ml-3 text-xs text-muted-foreground">
                {t("home.hero.browserUrl")}
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: t("home.hero.uptime"), value: "99.99%", tone: "text-teal" },
                  { label: t("home.hero.tickets"), value: "0 open", tone: "text-royal" },
                  { label: t("home.hero.threats"), value: t("home.hero.blocked"), tone: "text-ink" },
                ].map((k) => (
                  <div key={k.label} className="rounded-2xl bg-ivory p-4">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {k.label}
                    </div>
                    <div className={`mt-1 font-display text-xl font-bold ${k.tone}`}>
                      {k.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-ink/10 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {t("home.hero.networkTraffic")}
                  </div>
                  <div className="text-xs text-teal">▲ 12.4%</div>
                </div>
                <svg viewBox="0 0 300 90" className="h-24 w-full">
                  <defs>
                    <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#1E56FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#1E56FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 70 L30 60 L60 65 L90 40 L120 50 L150 30 L180 45 L210 20 L240 35 L270 15 L300 25 L300 90 L0 90 Z"
                    fill="url(#lg)"
                  />
                  <path
                    d="M0 70 L30 60 L60 65 L90 40 L120 50 L150 30 L180 45 L210 20 L240 35 L270 15 L300 25"
                    fill="none"
                    stroke="#1E56FF"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-ink p-4 text-white">
                  <div className="text-xs uppercase tracking-widest text-white/60">
                    {t("home.hero.cloud")}
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold">
                    {t("home.hero.multiCloudHealthy")}
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-royal p-4 text-white">
                  <div className="text-xs uppercase tracking-widest text-white/70">
                    SOC
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold">
                    {t("home.hero.monitoring")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -top-6 hidden rotate-6 rounded-2xl bg-white p-3 shadow-[var(--shadow-soft)] md:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <ShieldCheck className="h-4 w-4 text-teal" /> {t("home.hero.zeroTrust")}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden -rotate-3 rounded-2xl bg-white p-3 shadow-[var(--shadow-soft)] md:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <Zap className="h-4 w-4 text-royal" /> {t("home.hero.latency")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="px-4 first:pl-0">
      <div className="font-display text-2xl font-bold text-ink">{kpi}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function TrustBar() {
  const { t } = useTranslation();
  const logos = ["Cisco", "Microsoft", "Dell", "HP", "Lenovo", "Fortinet", "Ubiquiti", "VMware", "AWS", "Google Cloud", "Adobe", "SonicWall"];
  return (
    <section className="border-y border-ink/10 py-6">
      <div className="container-x flex items-center gap-6 overflow-hidden">
        <div className="shrink-0 text-xs uppercase tracking-[0.25em] text-white/60">
          {t("home.trustBar.certifiedPartners")}
        </div>
        <div className="relative flex flex-1 overflow-hidden">
          <div className="animate-marquee flex shrink-0 gap-12 pr-12">
            {[...logos, ...logos].map((l, i) => (
              <div
                key={i}
                className="font-display text-lg font-semibold tracking-tight text-ink/50"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  const { t } = useTranslation();
  const whyUsItems = t("home.whyUs.items", { returnObjects: true }) as Array<{ label: string; description: string }>;
  return (
    <section className="container-x py-24">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-6">
            <div className="col-span-1 min-h-[200px] rounded-[32px] bg-gradient-royal p-6 text-white shadow-[var(--shadow-glow)] sm:col-span-4 sm:aspect-[4/5] sm:p-8 flex flex-col justify-between">
              <div className="text-xs uppercase tracking-[0.25em] text-white/70">
                {t("home.whoWeAre.established")}
              </div>
              <div className="mt-6 flex flex-col justify-end sm:mt-auto">
                <div className="font-display text-2xl font-bold text-white leading-tight sm:text-4xl">
                  {t("home.whoWeAre.tagline")}
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-3 sm:col-span-2">
              <div className="rounded-2xl bg-ink p-5 text-white">
                <BadgeCheck className="h-5 w-5 text-teal" />
                <div className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">{t("home.whoWeAre.iso27001")}</div>
                <div className="text-xs text-white/60">{t("home.whoWeAre.certified")}</div>
              </div>
              <div className="flex-1 rounded-2xl bg-ivory p-5">
                <Handshake className="h-5 w-5 text-royal" />
                <div className="mt-3 font-display text-lg font-bold text-ink break-words sm:text-xl">
                  {whyUsItems[5]?.label}
                </div>
                <div className="mt-1 text-xs text-ink/70">{whyUsItems[5]?.description}</div>
              </div>
            </div>
            <div className="col-span-1 rounded-2xl border border-ink/10 bg-white/85 backdrop-blur-md p-5 shadow-sm sm:col-span-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  [t("home.whoWeAre.statProjects"), t("home.whoWeAre.statProjectsLabel")],
                  [t("home.whoWeAre.statExperience"), t("home.whoWeAre.statExperienceLabel")],
                  [t("home.whoWeAre.statSatisfaction"), t("home.whoWeAre.statSatisfactionLabel")],
                ].map(([k, v]) => (
                  <div key={v}>
                    <div className="font-display text-2xl font-bold text-ink">{k}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-royal">{t("home.whoWeAre.label")}</div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {t("home.whoWeAre.subtitle")}
          </h2>
          <p className="mt-5 max-w-xl hero-description-plate text-lg leading-relaxed">
            {t("home.whoWeAre.description")}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, t: whyUsItems[0]?.label, d: whyUsItems[0]?.description },
              { icon: Zap, t: whyUsItems[1]?.label, d: whyUsItems[1]?.description },
              { icon: Cpu, t: whyUsItems[3]?.label, d: whyUsItems[3]?.description },
              { icon: Handshake, t: whyUsItems[5]?.label, d: whyUsItems[5]?.description },
            ].map((f) => (
              <div key={f.t ?? f.icon.displayName} className="rounded-2xl border border-ink/10 bg-white/85 backdrop-blur-md p-4 shadow-sm">
                <f.icon className="h-5 w-5 text-royal" />
                <div className="mt-3 font-semibold text-ink">{f.t}</div>
                <div className="text-sm text-ink/70">{f.d}</div>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-royal hover:gap-3 transition-all">
            {t("home.whoWeAre.learnMore")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const { t } = useTranslation();
  const whyUsItems = t("home.whyUs.items", { returnObjects: true }) as Array<{ label: string; description: string }>;
  const items = [
    { icon: ShieldCheck, t: whyUsItems[0]?.label, d: whyUsItems[0]?.description },
    { icon: Zap, t: whyUsItems[1]?.label, d: whyUsItems[1]?.description },
    { icon: Clock, t: whyUsItems[2]?.label, d: whyUsItems[2]?.description },
    { icon: Cpu, t: whyUsItems[3]?.label, d: whyUsItems[3]?.description },
    { icon: Lock, t: whyUsItems[4]?.label, d: whyUsItems[4]?.description },
    { icon: Handshake, t: whyUsItems[5]?.label, d: whyUsItems[5]?.description },
  ];
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/90 to-ink/85" />
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(600px 300px at 20% 20%, rgba(30,86,255,0.5), transparent 70%), radial-gradient(500px 260px at 80% 80%, rgba(15,194,192,0.4), transparent 70%)" }} />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-teal">{t("home.whyUs.label")}</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-white tracking-tight sm:text-5xl">
              {t("home.whyUs.title")}
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
            {items.map((f, i) => (
              <div
                key={f.t}
                className={`group relative bg-ink p-5 sm:p-6 transition-all hover:bg-white/5 ${
                  i === 0 ? "sm:col-span-2 sm:bg-white/5" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-teal">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-base sm:text-lg font-semibold text-white">{f.t}</div>
                    <div className="mt-1 text-xs sm:text-sm text-white/70">{f.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedServices() {
  const { t } = useTranslation();
  const translatedServices = useTranslatedServices();
  const featuredTranslatedServices = translatedServices.filter((s) => s.featured);
  return (
    <section className="container-x py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <div className="text-xs uppercase tracking-[0.25em] text-royal">{t("home.featuredServices.title")}</div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {t("home.featuredServices.subtitle")}
          </h2>
        </div>
        <Link to="/services" className="btn-ghost-ink btn-ghost-ink-hover self-start">
          {t("home.featuredServices.viewAll")} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        {featuredTranslatedServices.map((s, i) => {
          const Icon = (Icons as any)[s.icon] ?? Sparkles;
          const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
          const tall = i === 0 || i === 3;
          return (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-ink/10 p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] ${spans[i]} ${
                tall ? "bg-ivory" : "bg-white"
              }`}
            >
              {tall && (
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-royal opacity-10 blur-2xl transition-opacity group-hover:opacity-20" />
              )}
              <div className="flex items-start justify-between">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-10 w-10 rounded-xl object-contain"
                  />
                ) : (
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <ArrowUpRight className="h-5 w-5 text-ink/40 transition-all group-hover:rotate-45 group-hover:text-royal" />
              </div>
              <div className="mt-5">
                <div className="font-display text-xl font-semibold text-ink">{s.title}</div>
                <div className="mt-1.5 max-w-md text-sm text-muted-foreground">{s.short}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const translatedProducts = useTranslatedProducts();
  const featuredTranslatedProducts = translatedProducts.filter((p) => p.featured);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-teal">{t("home.featuredProducts.title")}</div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t("home.featuredProducts.subtitle")}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="hidden lg:grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-ink transition hover:bg-ink hover:text-white"
              aria-label={t("accessibility.scrollLeft")}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="hidden lg:grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-ink transition hover:bg-ink hover:text-white"
              aria-label={t("accessibility.scrollRight")}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <Link to="/products" className="btn-ghost-ink btn-ghost-ink-hover hidden md:inline-flex">
              {t("home.featuredProducts.viewAll")} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredTranslatedProducts.concat(featuredTranslatedProducts).map((p, i) => {
            const Icon = (Icons as any)[p.icon] ?? Sparkles;
            return (
              <Link
                key={`${p.slug}-${i}`}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group relative flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-ink/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {p.category}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-ink/40 transition group-hover:rotate-45 group-hover:text-royal" />
                </div>
                <div className="my-6 grid aspect-square place-items-center rounded-2xl bg-gradient-royal text-white overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-contain p-6"
                    />
                  ) : (
                    <Icon className="h-16 w-16 opacity-80" strokeWidth={1.2} />
                  )}
                </div>
                <div className="font-display text-lg font-semibold text-ink">{p.title}</div>
                <div className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.short}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const { t } = useTranslation();
  const items = [
    { icon: Stethoscope, name: t("industries.healthcare") },
    { icon: GraduationCap, name: t("industries.education") },
    { icon: Landmark, name: t("industries.government") },
    { icon: HardHat, name: t("industries.construction") },
    { icon: ShoppingBag, name: t("industries.retail") },
    { icon: Hotel, name: t("industries.hospitality") },
    { icon: Banknote, name: t("industries.finance") },
    { icon: Fuel, name: t("industries.oilGas") },
  ];
  return (
    <section className="container-x py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-royal">{t("home.industries.title")}</div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {t("home.industries.subtitle")}
          </h2>
          <p className="mt-5 text-muted-foreground">
            {t("industries.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {items.map((i, idx) => (
            <div
              key={i.name}
              className={`group relative overflow-hidden rounded-2xl border border-ink/10 p-5 transition-all hover:-translate-y-1 hover:border-royal/30 ${
                idx % 3 === 0 ? "bg-ivory" : "bg-white"
              }`}
            >
              <i.icon className="h-6 w-6 text-royal transition group-hover:scale-110" />
              <div className="mt-6 font-semibold text-ink">{i.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{t("industries.enterpriseReady")}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const { t } = useTranslation();
  const partners = [
    { src: "/1 partner.jpeg", alt: "Partner company one" },
    { src: "/2 partner.jpeg", alt: "Partner company two" },
  ];
  return (
    <section className="border-y border-ink/10 py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-teal">{t("home.partners.title")}</div>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            {t("home.partners.subtitle")}
          </h2>
          <p className="mt-4 text-white/70">
            {t("home.partners.description", "Trusted by leading organizations across Qatar")}
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {partners.map((p) => (
            <div
              key={p.src}
              className="group relative overflow-hidden rounded-[28px] border border-ink/10 bg-white p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-royal/30 hover:shadow-[var(--shadow-glow)] sm:p-10"
            >
              <div className="flex items-center justify-center min-h-[200px] sm:min-h-[240px]">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-auto w-full max-h-[200px] sm:max-h-[240px] object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useTranslation();
  const items = [
    {
      quote: t("home.testimonials.quote1"),
      role: t("home.testimonials.role1"),
    },
    {
      quote: t("home.testimonials.quote2"),
      role: t("home.testimonials.role2"),
    },
    {
      quote: t("home.testimonials.quote3"),
      role: t("home.testimonials.role3"),
    },
  ];
  return (
    <section className="container-x py-24">
      <div className="mb-10 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-teal">{t("home.testimonials.title")}</div>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {t("home.testimonials.subtitle")}
        </h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-3">
        {items.map((t, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-3xl border border-ink/10 p-6 sm:p-8 shadow-sm ${
              i === 1 ? "bg-ink text-white lg:-translate-y-6" : "bg-white text-ink"
            }`}
          >
            <Quote className={`h-8 w-8 ${i === 1 ? "text-teal" : "text-royal"}`} />
            <p className={`mt-6 text-base sm:text-lg leading-relaxed font-medium ${i === 1 ? "text-white" : "text-ink"}`}>
              "{t.quote}"
            </p>
            <div className="mt-8 border-t border-current/10 pt-4">
              <div className={`text-sm font-semibold ${i === 1 ? "text-white/70" : "text-ink/70"}`}>
                {t.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useTranslation();
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-[40px] bg-ink p-10 text-white shadow-[var(--shadow-glow)] md:p-16">
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(600px 300px at 90% 10%, rgba(30,86,255,0.55), transparent 60%), radial-gradient(500px 260px at 0% 100%, rgba(15,194,192,0.35), transparent 60%)" }} />
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-teal">{t("home.finalCTA.label")}</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-white leading-tight sm:text-6xl">
              {t("home.finalCTA.title")}
            </h2>
            <p className="mt-5 max-w-xl text-white/70">
              {t("home.finalCTA.description")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/contact" className="btn-royal btn-royal-hover">
              {t("home.finalCTA.getStarted")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {t("home.finalCTA.schedule")} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
