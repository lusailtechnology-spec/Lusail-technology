import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowUpRight, Sparkles, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { services } from "@/data/services";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { useState } from "react";
import { useTranslatedServices } from "@/i18n/useTranslatedServices";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "IT Services — Lusail Technology, Doha Qatar" },
      {
        name: "description",
        content:
          "Explore Lusail Technology's IT services in Qatar — cybersecurity, cloud, networking, software, CCTV, AMC, digital marketing and more.",
      },
      { property: "og:title", content: "IT Services — Lusail Technology" },
      {
        property: "og:description",
        content: "Enterprise IT services delivered by certified engineers across Qatar.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useTranslation();
  const translatedServices = useTranslatedServices();
  const [query, setQuery] = useState("");
  const filtered = translatedServices.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.short.toLowerCase().includes(query.toLowerCase()),
  );

  const featured = translatedServices[0];
  const FIcon = (Icons as any)[featured.icon] ?? Sparkles;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 aurora" />
        <div className="container-x relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs items={[{ label: t("nav.services") }]} />
        </div>
        <div className="container-x relative grid gap-10 pb-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
              {t("services.index.serviceCount")}
            </div>
            <h1 className="mt-6 font-display display-1 font-bold text-ink">
              {t("services.index.title")}, <span className="text-gradient">{t("services.index.titleHighlight")}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              {t("services.index.description")}
            </p>
          </div>
          <div className="relative">
            <label className="flex items-center gap-3 rounded-full border border-ink/10 bg-white p-2 pl-5 shadow-[var(--shadow-soft)]">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("services.index.searchPlaceholder")}
                className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none"
              />
              <span className="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white">
                {filtered.length}
              </span>
            </label>
          </div>
        </div>
      </section>

      <section className="container-x pt-4">
        <Link
          to="/services/$slug"
          params={{ slug: featured.slug }}
          className="group relative flex overflow-hidden rounded-[36px] bg-ink text-white transition hover:shadow-[var(--shadow-glow)]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(600px 300px at 90% 20%, rgba(30,86,255,0.55), transparent 60%), radial-gradient(500px 260px at 0% 100%, rgba(15,194,192,0.35), transparent 60%)" }} />
          <div className="relative grid w-full gap-10 p-10 lg:grid-cols-[1.4fr_1fr] lg:p-14">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-teal">{t("services.index.featuredLabel")}</div>
              <div className="mt-3 font-display display-2 font-bold">{featured.title}</div>
              <p className="mt-4 max-w-lg text-white/70">{featured.overview}</p>
              <div className="mt-8 inline-flex items-center gap-2 font-semibold text-teal transition-all group-hover:gap-3">
                {t("services.index.exploreService")} <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
            <div className="relative">
              <div className="grid aspect-square place-items-center rounded-[28px] bg-white/5 backdrop-blur overflow-hidden">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-contain p-8"
                  />
                ) : (
                  <FIcon className="h-32 w-32 text-white/70" strokeWidth={1} />
                )}
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(1).map((s, idx) => {
            const Icon = (Icons as any)[s.icon] ?? Sparkles;
            const dark = idx % 5 === 2;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className={`group relative flex flex-col overflow-hidden rounded-[24px] border p-7 transition-all hover:-translate-y-1 ${
                  dark
                    ? "border-transparent bg-ivory"
                    : "border-ink/10 bg-white hover:border-royal/30"
                }`}
              >
                <div className="flex items-start justify-between">
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-11 w-11 rounded-xl object-contain"
                    />
                  ) : (
                    <div
                      className={`grid h-11 w-11 place-items-center rounded-xl ${
                        dark ? "bg-ink text-white" : "bg-ivory text-royal"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  )}
                  <ArrowUpRight className="h-4 w-4 text-ink/40 transition group-hover:rotate-45 group-hover:text-royal" />
                </div>
                <div className="mt-8 font-display text-xl font-semibold text-ink">
                  {s.title}
                </div>
                <div className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-[32px] bg-gradient-royal p-10 text-white md:p-14">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <div className="font-display display-3 font-bold">
                {t("services.index.ctaTitle")}
              </div>
              <div className="mt-3 max-w-lg text-white/80">
                {t("services.index.ctaDescription")}
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink lg:justify-self-end"
            >
              {t("services.index.talkToExpert")} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
