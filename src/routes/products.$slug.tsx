import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import { products, type Product } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PrevNext } from "@/components/site/PrevNext";
import { JsonLd, absUrl, breadcrumbSchema, faqSchema } from "@/components/site/seo";
import { useTranslation } from "react-i18next";
import { useTranslatedProducts } from "@/i18n/useTranslatedProducts";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const idx = products.findIndex((x) => x.slug === params.slug);
    if (idx === -1) throw notFound();
    return { product: products[idx], index: idx };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found — Lusail Technology" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.product;
    const title = `${p.title} in Qatar — Lusail Technology`;
    return {
      meta: [
        { title },
        { name: "description", content: p.short },
        {
          name: "keywords",
          content: [p.title, p.category, "Qatar", "Doha", ...p.brands].join(", "),
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: p.short },
        { property: "og:url", content: absUrl(`/products/${p.slug}`) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: p.short },
      ],
      links: [{ rel: "canonical", href: absUrl(`/products/${p.slug}`) }],
    };
  },
  component: ProductDetail,
});

function productSchema(p: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    description: p.overview,
    category: p.category,
    brand: p.brands.map((b) => ({ "@type": "Brand", name: b })),
    url: absUrl(`/products/${p.slug}`),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "QAR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Lusail Technology" },
    },
  };
}

function productFaq(p: Product, t: any) {
  return [
    {
      q: t("productDetail.faq.q1", { product: p.title.toLowerCase() }),
      a: t("productDetail.faq.a1"),
    },
    {
      q: t("productDetail.faq.q2"),
      a: t("productDetail.faq.a2", { category: p.category.toLowerCase() }),
    },
    {
      q: t("productDetail.faq.q3"),
      a: t("productDetail.faq.a3"),
    },
  ];
}

function ProductDetail() {
  const { t } = useTranslation();
  const translatedProducts = useTranslatedProducts();
  const { product, index } = Route.useLoaderData() as { product: Product; index: number };
  const translatedProduct = translatedProducts.find(p => p.slug === product.slug) || product;
  const Icon = (Icons as any)[product.icon] ?? Sparkles;
  const variant = index % 2;
  const faq = productFaq(translatedProduct, t);
  const related = translatedProducts.filter((p) => p.slug !== product.slug).slice(0, 3);
  const compare = translatedProducts
    .filter((p) => p.slug !== product.slug && p.category !== product.category)
    .slice(0, 2);
  const prev = translatedProducts[(index - 1 + translatedProducts.length) % translatedProducts.length];
  const next = translatedProducts[(index + 1) % translatedProducts.length];

  return (
    <>
      <JsonLd
        data={[
          productSchema(translatedProduct),
          faqSchema(faq),
          breadcrumbSchema([
            { name: t("nav.home"), path: "/" },
            { name: t("nav.products"), path: "/products" },
            { name: translatedProduct.title, path: `/products/${product.slug}` },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="container-x py-12 sm:py-16 lg:py-20">
          <Breadcrumbs items={[{ label: t("nav.products"), to: "/products" }, { label: translatedProduct.title }]} />
          <div
            className={`mt-8 grid gap-10 lg:items-center lg:gap-14 ${
              variant === 0 ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
            }`}
          >
            <div
              className={`relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none ${
                variant === 0 ? "order-2 lg:order-1" : "order-2"
              }`}
            >
              <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-royal opacity-25 blur-3xl" />
              <div className="grid aspect-square place-items-center rounded-[28px] bg-ink text-white shadow-[var(--shadow-glow)] sm:rounded-[36px] overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={translatedProduct.title}
                    className="h-full w-full object-contain p-8"
                  />
                ) : (
                  <Icon className="h-28 w-28 text-white/80 sm:h-36 sm:w-36 lg:h-44 lg:w-44" strokeWidth={1} />
                )}
              </div>
            </div>
            <div className={variant === 0 ? "order-1 lg:order-2" : "order-1"}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {translatedProduct.category}
              </p>
              <h1 className="mt-2 font-display display-1 font-bold text-ink">{translatedProduct.title}</h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                {translatedProduct.overview}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-royal btn-royal-hover">
                  {t("productDetail.requestQuote")} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/products" className="btn-ghost-ink btn-ghost-ink-hover">
                  {t("productDetail.exploreProducts")}
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {product.brands.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES + SPECS */}
      <section className="container-x py-12 sm:py-16">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-[24px] border border-ink/10 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-royal">{t("productDetail.productFeatures")}</p>
            <h2 className="mt-3 font-display display-3 font-semibold text-ink">
              {t("productDetail.engineeredForEnterprise")}
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {translatedProduct.features.map((f) => (
                <div key={f} className="flex items-start gap-3 rounded-2xl bg-ivory p-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-royal text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-ink">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] bg-ink p-6 text-white sm:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-teal">{t("productDetail.technicalSpecifications", "Technical specifications")}</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-0 text-left">
                <caption className="sr-only">
                  Technical specifications for {translatedProduct.title}
                </caption>
                <tbody className="divide-y divide-white/10">
                  {product.specs.map((s) => (
                    <tr key={s.label} className="align-top">
                      <th scope="row" className="py-3 pr-4 text-sm font-normal text-white/60">
                        {s.label}
                      </th>
                      <td className="py-3 text-right text-sm font-medium">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS / INDUSTRIES / BENEFITS */}
      <section className="container-x pb-12 sm:pb-16">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          <div className="rounded-[24px] bg-ivory p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-royal">{t("productDetail.applications")}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {translatedProduct.applications.map((a) => (
                <span
                  key={a}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-ink/10 bg-white p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-royal">{t("productDetail.industries")}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["finance", "healthcare", "government", "oilGas", "education", "retail"].map(
                (i) => (
                  <span
                    key={i}
                    className="rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-ink"
                  >
                    {t(`industries.${i}`)}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="rounded-[24px] border border-ink/10 bg-white p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-royal">{t("productDetail.benefits")}</p>
            <ul className="mt-4 space-y-3">
              {translatedProduct.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  <span className="text-sm text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      {compare.length > 0 && (
        <section className="container-x pb-12 sm:pb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-royal">{t("productDetail.comparison")}</p>
          <h2 className="mt-3 font-display display-3 font-bold text-ink">
            {t("productDetail.compares", { title: translatedProduct.title })}
          </h2>
          <div className="mt-6 overflow-x-auto rounded-[24px] border border-ink/10">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead className="bg-ivory">
                <tr>
                  <th scope="col" className="p-4 font-semibold text-ink">
                    {t("productDetail.criteria")}
                  </th>
                  <th scope="col" className="p-4 font-semibold text-royal">
                    {translatedProduct.title}
                  </th>
                  {compare.map((c) => (
                    <th key={c.slug} scope="col" className="p-4 font-semibold text-ink">
                      {c.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                <tr>
                  <th scope="row" className="p-4 font-normal text-muted-foreground">
                    {t("productDetail.category")}
                  </th>
                  <td className="p-4 text-ink">{translatedProduct.category}</td>
                  {compare.map((c) => (
                    <td key={c.slug} className="p-4 text-ink">
                      {c.category}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" className="p-4 font-normal text-muted-foreground">
                    {t("productDetail.bestFor")}
                  </th>
                  <td className="p-4 text-ink">{translatedProduct.applications[0]}</td>
                  {compare.map((c) => (
                    <td key={c.slug} className="p-4 text-ink">
                      {c.applications[0]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" className="p-4 font-normal text-muted-foreground">
                    {t("productDetail.keyBrands")}
                  </th>
                  <td className="p-4 text-ink">{product.brands.slice(0, 2).join(", ")}</td>
                  {compare.map((c) => (
                    <td key={c.slug} className="p-4 text-ink">
                      {c.brands.slice(0, 2).join(", ")}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="container-x pb-12 sm:pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-royal">{t("productDetail.faqLabel")}</p>
          <h2 className="mt-3 font-display display-3 font-bold text-ink">
            {t("productDetail.faqTitle")}
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faq.map((f, i) => (
              <AccordionItem key={f.q} value={`p-${i}`} className="border-ink/10">
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

      {/* RELATED */}
      <section className="container-x pb-12 sm:pb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-royal">{t("productDetail.relatedProducts")}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => {
            const RIcon = (Icons as any)[r.icon] ?? Sparkles;
            return (
              <Link
                key={r.slug}
                to="/products/$slug"
                params={{ slug: r.slug }}
                className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-5 transition hover:-translate-y-1 hover:border-royal/30 hover:shadow-[var(--shadow-soft)] sm:p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ivory text-royal">
                  <RIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="mt-5 font-display text-lg font-semibold text-ink">{r.title}</span>
                <span className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.short}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-royal transition-all group-hover:gap-3">
                  {t("productDetail.viewProduct")} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <PrevNext base="/products/$slug" prev={prev} next={next} />

      {/* CTA */}
      <section className="container-x pb-20 sm:pb-24">
        <div className="rounded-[28px] bg-gradient-royal p-7 text-white sm:p-10 md:p-14">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display display-2 font-bold">{t("productDetail.ctaTitle")}</h2>
              <p className="mt-3 max-w-lg text-sm text-white/80 sm:text-base">
                {t("productDetail.ctaDescription", { product: translatedProduct.title.toLowerCase() })}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" /> {t("productDetail.authorisedPartner")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-self-end">
              <Link
                to="/contact"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
              >
                {t("productDetail.requestQuote")} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {t("nav.viewAll")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
