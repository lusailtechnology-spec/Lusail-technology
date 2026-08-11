import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/data/services";
import { useTranslatedServices } from "@/i18n/useTranslatedServices";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Lusail Technology — Doha, Qatar" },
      {
        name: "description",
        content:
          "Talk to Lusail Technology's Doha team. Enterprise IT support, quotes and consultations across Qatar.",
      },
      { property: "og:title", content: "Contact Lusail Technology" },
      { property: "og:description", content: "Reach our Doha-based enterprise IT team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "https://www.lusailtechnology.com/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();
  const translatedServices = useTranslatedServices();
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 aurora" />
        <div className="container-x relative py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
              {t("contact.hero.badge")}
            </div>
            <h1 className="mt-6 font-display display-1 font-bold text-ink">
              {t("contact.hero.title")}
            </h1>
            <p className="mt-5 max-w-xl hero-description-plate text-lg leading-relaxed">
              {t("contact.hero.description")}
            </p>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <aside className="flex flex-col gap-4">
            <div className="rounded-[28px] bg-ink p-8 text-white">
              <div className="text-xs uppercase tracking-[0.25em] text-teal">{t("contact.office.label")}</div>
              <div className="mt-3 font-display text-2xl font-semibold">{t("contact.office.location")}</div>
              <div className="mt-6 space-y-4 text-sm text-white/80">
                <Info icon={Phone} label={t("contact.office.phone")} value="+974 4479 1860" href="tel:+97444791860" />
                <Info icon={Mail} label={t("contact.office.email")} value="info@lusailtechnology.com" href="mailto:info@lusailtechnology.com" />
                <Info icon={Clock} label={t("contact.office.fax")} value="+974 4462 2407" />
                <Info icon={Clock} label={t("contact.office.poBox")} value="11401 Doha, Qatar" />
                <Info icon={Clock} label={t("contact.office.hours")} value={t("contact.office.hoursValue")} />
              </div>
            </div>
            <div className="rounded-[28px] border border-ink/10 bg-white/85 backdrop-blur-md p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-royal/10 text-royal">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{t("contact.office.address")}</div>
                  <div className="mt-1.5 text-sm text-ink">Building No.143 - Al Rayan Road, Bin Mahmoud, P.O Box 11401, Doha, Qatar</div>
                </div>
              </div>
            </div>
            <div className="rounded-[28px] border border-ink/10 bg-white/85 backdrop-blur-md p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-royal/10 text-royal">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-ink">{t("contact.emergency.title")}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {t("contact.emergency.description")}
                    <a href="tel:+97440009999" className="ml-1 font-semibold text-royal">
                      +974 4000 9999
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[380px] sm:h-[450px] w-full overflow-hidden rounded-[28px] border border-ink/10 shadow-sm">
              <iframe
                title="Lusail Technology location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=51.5100%2C25.3100%2C51.5450%2C25.3400&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </aside>

          <div className="h-fit rounded-[28px] bg-white p-8 shadow-[var(--shadow-soft)] md:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-start justify-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-teal/20 text-teal">
                  <Send className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold text-ink">
                  {t("contact.form.success")}
                </h2>
                <p className="mt-3 max-w-md text-muted-foreground">
                  {t("contact.form.successMessage")}
                </p>
                <button onClick={() => setSent(false)} className="btn-ghost-ink btn-ghost-ink-hover mt-6">
                  {t("contact.form.sendAnother")}
                </button>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSubmitting(true);
                  setError(false);

                  const formData = new FormData(e.target);
                  formData.append("access_key", "c3b640f2-0f5f-42ab-bf8e-075e651dfdc4");

                  try {
                    const response = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: formData
                    });

                    const data = await response.json();
                    if (data.success) {
                      setSent(true);
                    } else {
                      setError(true);
                    }
                  } catch (err) {
                    setError(true);
                  } finally {
                    setSubmitting(false);
                  }
                }}
                className="grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t("contact.form.name")} name="name" required />
                  <Field label={t("contact.form.company")} name="company" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t("contact.form.phone")} name="phone" type="tel" />
                  <Field label={t("contact.form.email")} name="email" type="email" required />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {t("contact.form.service")}
                  </label>
                  <select
                    name="service_interest"
                    className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink font-medium outline-none focus:border-royal"
                  >
                    <option value="">{t("contact.form.selectService")}</option>
                    {translatedServices.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder={t("contact.form.messagePlaceholder")}
                    className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink font-medium placeholder:text-ink/50 outline-none focus:border-royal"
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn-royal btn-royal-hover mt-2 justify-center"
                  disabled={submitting}
                >
                  {submitting ? t("contact.form.sending") : t("contact.form.submit")} <ArrowUpRight className="h-4 w-4" />
                </button>
                {error && (
                  <p className="text-xs text-red-500">
                    {t("contact.form.error")}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  {t("contact.form.disclaimer")}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-royal">FAQ</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-ink">{t("contactFaq.title")}</h2>
            <p className="mt-4 text-muted-foreground">
              {t("contactFaq.subtitle")}
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: t("contactFaq.q1"),
                a: t("contactFaq.a1"),
              },
              {
                q: t("contactFaq.q2"),
                a: t("contactFaq.a2"),
              },
              {
                q: t("contactFaq.q3"),
                a: t("contactFaq.a3"),
              },
              {
                q: t("contactFaq.q4"),
                a: t("contactFaq.a4"),
              },
            ].map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-ink/10 bg-white/85 backdrop-blur-md px-5 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm text-ink/80 leading-relaxed sm:text-base">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

function Info({ icon: Icon, label, value, href }: any) {
  const inner = (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
      <div>
        <div className="text-[11px] uppercase tracking-widest text-white/50">{label}</div>
        <div className="mt-0.5">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:text-teal">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({ label, name, type = "text", required = false }: any) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink font-medium placeholder:text-ink/50 outline-none transition focus:border-royal"
      />
    </div>
  );
}
