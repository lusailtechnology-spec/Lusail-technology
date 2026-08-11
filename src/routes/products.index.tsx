import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowUpRight, Sparkles, Search } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTranslatedProducts } from "@/i18n/useTranslatedProducts";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "IT Products — Lusail Technology, Doha Qatar" },
      {
        name: "description",
        content:
          "Business laptops, servers, networking, storage, software and power protection from Lusail Technology's Qatar catalog.",
      },
      { property: "og:title", content: "IT Products — Lusail Technology" },
      {
        property: "og:description",
        content: "Enterprise hardware and software procurement, delivery and support in Qatar.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "https://www.lusailtechnology.com/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t, i18n } = useTranslation();
  const translatedProducts = useTranslatedProducts();
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  // Get unique translated categories from products
  const uniqueCategories = useMemo(() => {
    const cats = new Set(translatedProducts.map(p => p.category));
    return ["All", ...Array.from(cats)];
  }, [translatedProducts]);

  const filtered = useMemo(
    () =>
      translatedProducts.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          (p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.short.toLowerCase().includes(query.toLowerCase())),
      ),
    [category, query, translatedProducts],
  );

  return (
    <>
      <section className="relative overflow-hidden bg-transparent">
        <div className="container-x relative pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20">
          <Breadcrumbs items={[{ label: t("nav.products") }]} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
                {t("products.index.catalogBadge", "Enterprise catalog")}
              </div>
              <h1 className="mt-6 font-display display-1 font-bold text-ink">
                {t("nav.products")} <span className="text-gradient">{t("products.index.titleHighlight")}</span>
              </h1>
              <p className="mt-5 max-w-xl hero-description-plate text-lg leading-relaxed">
                {t("products.index.description")}
              </p>
            </div>
            <label className="flex items-center gap-3 rounded-full border border-ink/10 bg-white p-2 pl-5 shadow-[var(--shadow-soft)]">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("products.index.searchPlaceholder")}
                className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none"
              />
              <span className="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white">
                {filtered.length}
              </span>
            </label>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {uniqueCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  c === category
                    ? "bg-ink text-white shadow-[var(--shadow-soft)]"
                    : "border border-ink/10 bg-white text-ink hover:border-royal/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => {
            const Icon = (Icons as any)[p.icon] ?? Sparkles;
            const feature = idx === 0;
            return (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className={`group relative flex flex-col overflow-hidden rounded-[28px] border transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] ${
                  feature
                    ? "border-transparent bg-ink text-white md:col-span-2 md:row-span-2"
                    : "border-ink/10 bg-white/85 backdrop-blur-md shadow-sm"
                }`}
              >
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <div className="flex items-start justify-between">
                    <div
                      className={`text-xs uppercase tracking-widest ${
                        feature ? "text-teal" : "text-muted-foreground"
                      }`}
                    >
                      {p.category}
                    </div>
                    <ArrowUpRight
                      className={`h-4 w-4 transition group-hover:rotate-45 ${
                        feature ? "text-white/60" : "text-ink/40 group-hover:text-royal"
                      }`}
                    />
                  </div>
                  <div
                    className={`my-6 grid flex-1 place-items-center rounded-2xl overflow-hidden ${
                      feature ? "bg-white/5" : "bg-ivory"
                    }`}
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Icon
                        className={feature ? "h-40 w-40 text-white/80" : "h-20 w-20 text-royal/70"}
                        strokeWidth={1}
                      />
                    )}
                  </div>
                  <div className={`font-display font-semibold ${feature ? "text-3xl" : "text-lg"}`}>
                    {p.title}
                  </div>
                  <div
                    className={`mt-2 line-clamp-2 text-sm ${
                      feature ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {p.short}
                  </div>
                </div>
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
                {t("products.index.ctaTitle")}
              </div>
              <div className="mt-3 max-w-lg text-white/80">
                {t("products.index.ctaDescription")}
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink lg:justify-self-end"
            >
              {t("nav.getQuote")} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
