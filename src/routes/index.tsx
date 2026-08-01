import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
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
    links: [{ rel: "canonical", href: "/" }],
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
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-x relative grid gap-16 pb-24 pt-16 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
        <div className="animate-reveal">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-teal">
              <Sparkles className="h-2.5 w-2.5 text-ink" />
            </span>
            Trusted IT partner across Qatar
          </div>
          <h1 className="mt-6 font-display display-1 font-bold text-ink">
            Empowering Businesses with{" "}
            <span className="text-gradient">Innovative IT</span> Solutions.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Lusail Technology delivers enterprise IT solutions, cybersecurity, networking,
            cloud infrastructure, software development and digital transformation across
            Qatar — designed and operated by certified engineers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/services" className="btn-royal btn-royal-hover">
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-ghost-ink btn-ghost-ink-hover">
              Contact Us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-ink/10 border-y border-ink/10 py-6">
            <Stat kpi="500+" label="Projects delivered" />
            <Stat kpi="14+" label="Years in Qatar" />
            <Stat kpi="24/7" label="NOC & SOC" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-royal opacity-20 blur-3xl" />
          <div className="relative animate-float overflow-hidden rounded-[36px] border border-ink/10 bg-white shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-1.5 border-b border-ink/5 px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-ink/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-ink/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-royal" />
              <div className="ml-3 text-xs text-muted-foreground">
                lusail.tech / operations
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Uptime", value: "99.99%", tone: "text-teal" },
                  { label: "Tickets", value: "0 open", tone: "text-royal" },
                  { label: "Threats", value: "Blocked", tone: "text-ink" },
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
                    Network Traffic
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
                    Cloud
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold">
                    Multi-cloud healthy
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-royal p-4 text-white">
                  <div className="text-xs uppercase tracking-widest text-white/70">
                    SOC
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold">
                    24/7 Monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -top-6 hidden rotate-6 rounded-2xl bg-white p-3 shadow-[var(--shadow-soft)] md:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <ShieldCheck className="h-4 w-4 text-teal" /> Zero-trust enforced
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden -rotate-3 rounded-2xl bg-white p-3 shadow-[var(--shadow-soft)] md:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <Zap className="h-4 w-4 text-royal" /> 12ms average latency
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
  const logos = ["Cisco", "Microsoft", "Dell", "HP", "Lenovo", "Fortinet", "Ubiquiti", "VMware", "AWS", "Google Cloud", "Adobe", "SonicWall"];
  return (
    <section className="border-y border-ink/10 bg-ivory/60 py-6">
      <div className="container-x flex items-center gap-6 overflow-hidden">
        <div className="shrink-0 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Certified partners
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
  return (
    <section className="container-x py-24">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="grid grid-cols-6 gap-3 max-[400px]:grid-cols-1">
            <div className="col-span-4 aspect-[4/5] rounded-[32px] bg-gradient-royal p-8 text-white shadow-[var(--shadow-glow)] max-[400px]:col-span-1 max-[400px]:aspect-auto max-[400px]:min-h-[200px]">
              <div className="text-xs uppercase tracking-[0.25em] text-white/70">
                Est. 2011
              </div>
              <div className="mt-auto flex h-full flex-col justify-end">
                <div className="font-display text-4xl font-bold leading-tight max-[400px]:text-2xl">
                  Engineering trust into every layer of IT.
                </div>
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-3 max-[400px]:col-span-1 max-[400px]:flex-row">
              <div className="aspect-square rounded-2xl bg-ink p-4 text-white max-[400px]:aspect-auto max-[400px]:flex-1">
                <BadgeCheck className="h-5 w-5 text-teal" />
                <div className="mt-6 font-display text-2xl font-bold max-[400px]:text-xl">ISO 27001</div>
                <div className="text-xs text-white/60">Certified</div>
              </div>
              <div className="flex-1 rounded-2xl bg-ivory p-4 max-[400px]:flex-1">
                <Handshake className="h-5 w-5 text-royal" />
                <div className="mt-4 font-display text-xl font-bold text-ink break-words max-[400px]:text-lg">
                  Long-term partnerships
                </div>
              </div>
            </div>
            <div className="col-span-6 rounded-2xl border border-ink/10 p-5 max-[400px]:col-span-1">
              <div className="grid grid-cols-3 gap-4 max-[400px]:grid-cols-1">
                {[
                  ["500+", "Projects"],
                  ["120+", "Enterprises"],
                  ["98%", "Retention"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <div className="font-display text-2xl font-bold text-ink max-[400px]:text-xl">{k}</div>
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
          <div className="text-xs uppercase tracking-[0.25em] text-royal">Who we are</div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            A Qatari IT partner engineered like a modern product company.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            From Doha, we design, deploy and operate the systems that keep enterprises
            resilient — spanning cybersecurity, cloud, networking, and bespoke software.
            Our engineers combine deep vendor expertise with product-grade craftsmanship.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, t: "Security-first", d: "Zero-trust by default." },
              { icon: Zap, t: "Fast execution", d: "Pilot to production in weeks." },
              { icon: Cpu, t: "Deep expertise", d: "Certified across 20+ vendors." },
              { icon: Handshake, t: "Local presence", d: "Doha-based, GCC coverage." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-ink/10 p-4">
                <f.icon className="h-5 w-5 text-royal" />
                <div className="mt-3 font-semibold text-ink">{f.t}</div>
                <div className="text-sm text-muted-foreground">{f.d}</div>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-royal hover:gap-3 transition-all">
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: BadgeCheck, t: "Certified Professionals", d: "Engineers certified across Cisco, Microsoft, Fortinet, AWS and more." },
    { icon: Award, t: "Global Certifications", d: "ISO 27001, ISO 9001 and industry-leading security standards." },
    { icon: Zap, t: "Fast Response", d: "SLA-backed response in under 15 minutes for critical incidents." },
    { icon: Clock, t: "24/7 Support", d: "Round-the-clock NOC & SOC operating from Doha." },
    { icon: Cpu, t: "Customized Solutions", d: "Every deployment tailored to your workflows and risk profile." },
    { icon: Lock, t: "Enterprise Security", d: "Zero-trust architectures and continuous monitoring." },
    { icon: Handshake, t: "Trusted Partner", d: "Long-term engagements with Qatar's most demanding enterprises." },
  ];
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(600px 300px at 20% 20%, rgba(30,86,255,0.5), transparent 70%), radial-gradient(500px 260px at 80% 80%, rgba(15,194,192,0.4), transparent 70%)" }} />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-teal">Why Lusail</div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              A partner engineered for the enterprises that can't afford downtime.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
            {items.map((f, i) => (
              <div
                key={f.t}
                className={`group relative bg-ink p-6 transition-all hover:bg-white/5 ${
                  i === 0 ? "sm:col-span-2 sm:bg-white/5" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-teal">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold">{f.t}</div>
                    <div className="mt-1 text-sm text-white/70">{f.d}</div>
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
  return (
    <section className="container-x py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <div className="text-xs uppercase tracking-[0.25em] text-royal">Featured services</div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Solutions that scale with your ambition.
          </h2>
        </div>
        <Link to="/services" className="btn-ghost-ink btn-ghost-ink-hover self-start">
          All services <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        {featuredServices.map((s, i) => {
          const Icon = (Icons as any)[s.icon] ?? Sparkles;
          const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
          const tall = i === 0 || i === 3;
          return (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-ink/10 p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] ${spans[i]} ${
                tall ? "min-h-[340px] bg-ivory" : "min-h-[280px] bg-white"
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
                    className="h-12 w-12 rounded-xl object-contain"
                  />
                ) : (
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <ArrowUpRight className="h-5 w-5 text-ink/40 transition-all group-hover:rotate-45 group-hover:text-royal" />
              </div>
              <div className="mt-8">
                <div className="font-display text-2xl font-semibold text-ink">{s.title}</div>
                <div className="mt-2 max-w-md text-muted-foreground">{s.short}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section className="bg-ivory py-24">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-royal">Featured products</div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Enterprise-grade hardware & software.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="hidden lg:grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-ink transition hover:bg-ink hover:text-white"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="hidden lg:grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-ink transition hover:bg-ink hover:text-white"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <Link to="/products" className="btn-ghost-ink btn-ghost-ink-hover hidden md:inline-flex">
              Browse catalog <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredProducts.concat(featuredProducts).map((p, i) => {
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
  const items = [
    { icon: Stethoscope, name: "Healthcare" },
    { icon: GraduationCap, name: "Education" },
    { icon: Landmark, name: "Government" },
    { icon: HardHat, name: "Construction" },
    { icon: ShoppingBag, name: "Retail" },
    { icon: Hotel, name: "Hospitality" },
    { icon: Banknote, name: "Finance" },
    { icon: Fuel, name: "Oil & Gas" },
  ];
  return (
    <section className="container-x py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-royal">Industries</div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Sector-specific expertise, from clinical systems to trading floors.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every industry brings unique regulations, workloads and risk. Our teams
            combine domain fluency with technology depth to deliver outcomes that fit.
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
              <div className="mt-1 text-xs text-muted-foreground">Enterprise-ready</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const logos = ["Cisco", "Microsoft", "Dell", "HP", "Lenovo", "Fortinet", "Ubiquiti", "VMware", "AWS", "Google Cloud", "Adobe", "SonicWall"];
  return (
    <section className="border-y border-ink/10 bg-ivory py-16">
      <div className="container-x">
        <div className="mx-auto max-w-xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-royal">Technology partners</div>
          <h3 className="mt-3 font-display text-2xl font-bold text-ink">
            Certified & authorized across the world's leading vendors
          </h3>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink/10 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l}
              className="grid h-24 place-items-center bg-white transition hover:bg-ivory"
            >
              <span className="font-display text-lg font-semibold text-ink/70">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Lusail transformed our datacenter operations. Uptime jumped to 99.99% within a quarter — their engineers feel like part of our team.",
      role: "CIO, National Retailer",
    },
    {
      quote:
        "The cybersecurity overhaul was flawless. Zero-trust rolled out across 12 sites with no downtime and clear reporting throughout.",
      role: "Head of IT, Finance Group",
    },
    {
      quote:
        "From strategy to code, they behave like a modern product company — rare in the region and exactly what we needed.",
      role: "Director, Healthcare Network",
    },
  ];
  return (
    <section className="container-x py-24">
      <div className="grid gap-10 lg:grid-cols-3">
        {items.map((t, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-3xl border border-ink/10 p-8 ${
              i === 1 ? "bg-ink text-white lg:-translate-y-6" : "bg-white text-ink"
            }`}
          >
            <Quote className={`h-8 w-8 ${i === 1 ? "text-teal" : "text-royal"}`} />
            <p className="mt-6 text-lg leading-relaxed">"{t.quote}"</p>
            <div className="mt-8 border-t border-current/10 pt-4">
              <div className={`text-sm ${i === 1 ? "text-white/60" : "text-muted-foreground"}`}>
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
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-[40px] bg-ink p-10 text-white shadow-[var(--shadow-glow)] md:p-16">
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(600px 300px at 90% 10%, rgba(30,86,255,0.55), transparent 60%), radial-gradient(500px 260px at 0% 100%, rgba(15,194,192,0.35), transparent 60%)" }} />
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-teal">Let's build</div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-6xl">
              Let's build your digital future together.
            </h2>
            <p className="mt-5 max-w-xl text-white/70">
              Book a discovery call with our Doha team. We'll assess your current stack,
              identify quick wins, and outline a roadmap tailored to your business.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/contact" className="btn-royal btn-royal-hover">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explore services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
