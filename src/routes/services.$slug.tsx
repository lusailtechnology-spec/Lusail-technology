import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  ShieldCheck,
  Quote,
  TrendingUp,
} from "lucide-react";
import { services, type Service } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PrevNext } from "@/components/site/PrevNext";
import { JsonLd, absUrl, breadcrumbSchema, faqSchema } from "@/components/site/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const idx = services.findIndex((x) => x.slug === params.slug);
    if (idx === -1) throw notFound();
    return { service: services[idx], index: idx };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found — Lusail Technology" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const s = loaderData.service;
    const title = `${s.title} in Qatar — Lusail Technology`;
    return {
      meta: [
        { title },
        { name: "description", content: s.short },
        {
          name: "keywords",
          content: [s.title, "Qatar", "Doha", ...s.technologies, ...s.industries].join(", "),
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: s.short },
        { property: "og:url", content: absUrl(`/services/${s.slug}`) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: s.short },
      ],
      links: [{ rel: "canonical", href: absUrl(`/services/${s.slug}`) }],
    };
  },
  component: ServiceDetail,
});

function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.overview,
    serviceType: s.title,
    areaServed: { "@type": "Country", name: "Qatar" },
    provider: {
      "@type": "Organization",
      name: "Lusail Technology",
      url: absUrl("/"),
      address: { "@type": "PostalAddress", addressLocality: "Doha", addressCountry: "QA" },
    },
    url: absUrl(`/services/${s.slug}`),
  };
}

function ServiceDetail() {
  const { service, index } = Route.useLoaderData() as { service: Service; index: number };
  const Icon = (Icons as any)[service.icon] ?? Sparkles;
  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(index, index + 3)
    .concat(services.slice(0, 3))
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];

  const Visual = ({ className = "" }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-royal opacity-25 blur-3xl" />
      <div className="grid aspect-square w-full place-items-center rounded-[28px] bg-ink text-white shadow-[var(--shadow-glow)] sm:rounded-[36px] overflow-hidden">
        {service.image ? (
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-contain p-8"
          />
        ) : (
          <Icon className="h-24 w-24 text-white/80 sm:h-32 sm:w-32 lg:h-40 lg:w-40" strokeWidth={1} />
        )}
      </div>
    </div>
  );

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faq),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 aurora" />
        <div className="container-x relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Services", to: "/services" },
              { label: service.title },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:items-center lg:gap-14 lg:grid-cols-[1.2fr_1fr]">
            <div className="animate-reveal">
              <h1 className="font-display display-1 font-bold text-ink">{service.title}</h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                {service.overview}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-royal btn-royal-hover">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/products" className="btn-ghost-ink btn-ghost-ink-hover">
                  Explore products
                </Link>
              </div>
            </div>
            <Visual className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none order-2" />
          </div>
        </div>
      </section>

      {/* ---------------- BENEFITS + FEATURES ---------------- */}
      <section className="container-x py-12 sm:py-16">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="rounded-[24px] bg-ivory p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-royal">Business benefits</p>
            <h2 className="mt-3 font-display display-3 font-semibold text-ink">
              Why teams choose {service.title}
            </h2>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-royal text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-ink sm:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[24px] border border-ink/10 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-royal">Key features</p>
            <h2 className="mt-3 font-display display-3 font-semibold text-ink">What's included</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-2 rounded-2xl bg-white p-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  <span className="text-sm text-ink">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS (alternating presentation) ---------------- */}
      <section className="bg-ink py-14 text-white sm:py-20">
        <div className="container-x">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-teal">Our process</p>
            <h2 className="mt-3 font-display display-2 font-bold">
              A clear, four-step engagement.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <div
                key={step.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6"
              >
                <div className="font-display text-4xl font-bold text-teal/40 sm:text-6xl">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{step.step}</h3>
                <p className="mt-2 text-sm text-white/70">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TECHNOLOGIES + INDUSTRIES ---------------- */}
      <section className="container-x py-14 sm:py-20">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-royal">Industries served</p>
            <h2 className="mt-3 font-display display-3 font-bold text-ink">
              Built for regulated &amp; complex environments
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.industries.map((i) => (
                <span
                  key={i}
                  className="rounded-full bg-ivory px-4 py-2 text-sm font-medium text-ink"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-royal">Technologies used</p>
            <h2 className="mt-3 font-display display-3 font-bold text-ink">
              Vendor-neutral by design
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CUSTOM SECTIONS ---------------- */}
      {service.customSections && service.customSections.length > 0 && (
        <>
          {service.customSections.map((section, idx) => (
            <section
              key={section.title}
              className={`container-x py-14 sm:py-20 ${idx % 2 === 0 ? "" : "bg-ivory"}`}
            >
              <div className="max-w-4xl">
                <p className="text-xs uppercase tracking-[0.25em] text-royal">
                  {section.title}
                </p>
                <h2 className="mt-3 font-display display-3 font-bold text-ink">
                  {section.content}
                </h2>
                {section.type === "list" && section.items && (
                  <ul className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span className="text-sm text-ink sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.type === "stats" && section.stats && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {section.stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-ink/10 bg-white p-5">
                        <div className="font-display text-2xl font-bold text-ink sm:text-3xl">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {section.type === "text" && (
                  <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                    {section.content}
                  </p>
                )}
              </div>
            </section>
          ))}
        </>
      )}

      {/* ---------------- CASE STUDY ---------------- */}
      <section className="container-x pb-14 sm:pb-20">
        <div className="grid gap-8 overflow-hidden rounded-[28px] bg-ivory p-6 sm:p-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-royal">Case study</p>
            <h2 className="mt-3 font-display display-3 font-bold text-ink">
              {service.industries[0]} client, Doha
            </h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              A {service.industries[0].toLowerCase()} organisation engaged Lusail Technology to
              modernise {service.title.toLowerCase()}. We assessed the estate, designed a
              fit-for-purpose model and delivered it with zero unplanned downtime — then handed
              over documentation, dashboards and a 12-month roadmap.
            </p>
            <blockquote className="mt-6 flex gap-3 rounded-2xl bg-white p-5">
              <Quote className="h-5 w-5 shrink-0 text-royal" aria-hidden="true" />
              <p className="text-sm italic text-ink">
                “Lusail delivered on time and stayed accountable long after go-live. The reporting
                alone changed how our board sees IT.”
              </p>
            </blockquote>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { k: "-62%", v: "Incident volume" },
              { k: "99.98%", v: "Availability" },
              { k: "6 weeks", v: "Time to value" },
            ].map((m) => (
              <div key={m.v} className="rounded-2xl bg-white p-5">
                <div className="flex items-center gap-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                  <TrendingUp className="h-5 w-5 text-teal" aria-hidden="true" />
                  {m.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY LUSAIL ---------------- */}
      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-royal">Why Lusail Technology</p>
            <h2 className="mt-3 font-display display-3 font-bold text-ink">
              An engineering partner, not just a vendor.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              Certified engineers, 24/7 support and product-grade delivery — all from our Doha HQ.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "SLA-backed 24/7 support",
              "Local Doha delivery team",
              "Product-grade engineering",
              "Transparent reporting",
            ].map((v) => (
              <div
                key={v}
                className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4"
              >
                <ShieldCheck className="h-5 w-5 shrink-0 text-royal" aria-hidden="true" />
                <span className="text-sm font-medium text-ink sm:text-base">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="container-x py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-royal">FAQ</p>
          <h2 className="mt-3 font-display display-3 font-bold text-ink">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {service.faq.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-ink/10">
                <AccordionTrigger className="min-h-[56px] text-left font-display text-base font-semibold text-ink sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ---------------- RELATED ---------------- */}
      <section className="container-x pb-12 sm:pb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-royal">Related services</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => {
            const RIcon = (Icons as any)[r.icon] ?? Sparkles;
            return (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-5 transition hover:-translate-y-1 hover:border-royal/30 hover:shadow-[var(--shadow-soft)] sm:p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ivory text-royal">
                  <RIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="mt-5 font-display text-lg font-semibold text-ink">{r.title}</span>
                <span className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.short}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-royal transition-all group-hover:gap-3">
                  Learn more <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <PrevNext base="/services/$slug" prev={prev} next={next} />

      {/* ---------------- CTA ---------------- */}
      <section className="container-x pb-20 sm:pb-24">
        <div
          className="rounded-[28px] p-7 text-white sm:p-10 md:p-14 bg-ink"
        >
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display display-2 font-bold">Ready to Transform Your Business?</h2>
              <p className="mt-3 max-w-lg text-sm text-white/75 sm:text-base">
                Our team can scope, price and mobilize {service.title.toLowerCase()} within days.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-self-end">
              <Link
                to="/contact"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
              >
                Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
