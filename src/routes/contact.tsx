import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 aurora" />
        <div className="container-x relative py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
              We reply within 4 business hours
            </div>
            <h1 className="mt-6 font-display display-1 font-bold text-ink">
              Let's talk about your <span className="text-gradient">next project.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Reach our Doha team for quotes, discovery workshops or emergency support.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <aside className="flex flex-col gap-4">
            <div className="rounded-[28px] bg-ink p-8 text-white">
              <div className="text-xs uppercase tracking-[0.25em] text-teal">Head office</div>
              <div className="mt-3 font-display text-2xl font-semibold">Doha, Qatar</div>
              <div className="mt-6 space-y-4 text-sm text-white/80">
                <Info icon={Phone} label="Phone" value="+974 4479 1860" href="tel:+97444791860" />
                <Info icon={Mail} label="Email" value="info@lusailtechnology.com" href="mailto:info@lusailtechnology.com" />
                <Info icon={Clock} label="FAX" value="+974 4462 2407" />
                <Info icon={Clock} label="P.O Box" value="11401 Doha, Qatar" />
                <Info icon={Clock} label="Hours" value="Sun–Thu · 8:00 – 18:00 (AST)" />
              </div>
            </div>
            <div className="rounded-[28px] border border-ink/10 p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-royal/10 text-royal">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-ink">Emergency support?</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Existing clients — reach our 24/7 NOC at
                    <a href="tel:+97440009999" className="ml-1 font-semibold text-royal">
                      +974 4000 9999
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square w-full overflow-hidden rounded-[28px] border border-ink/10">
              <iframe
                title="Lusail Technology location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=51.5100%2C25.3100%2C51.5450%2C25.3400&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </aside>

          <div className="rounded-[28px] bg-white p-8 shadow-[var(--shadow-soft)] md:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-start justify-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-teal/20 text-teal">
                  <Send className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold text-ink">
                  Thanks — message received.
                </h2>
                <p className="mt-3 max-w-md text-muted-foreground">
                  A member of our Doha team will get back to you within 4 business hours.
                </p>
                <button onClick={() => setSent(false)} className="btn-ghost-ink btn-ghost-ink-hover mt-6">
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Company" name="company" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Service
                  </label>
                  <select
                    name="service"
                    className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-royal"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-royal"
                  />
                </div>
                <button type="submit" className="btn-royal btn-royal-hover mt-2 justify-center">
                  Send message <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by Lusail Technology.
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
            <h2 className="mt-3 font-display text-4xl font-bold text-ink">Support & answers</h2>
            <p className="mt-4 text-muted-foreground">
              Common questions from clients across Qatar. Can't find yours? Send us a note.
            </p>
          </div>
          <Accordion type="single" collapsible>
            {[
              {
                q: "How quickly can you start?",
                a: "Discovery calls happen within 48 hours. Simple engagements can mobilize in one week.",
              },
              {
                q: "Do you serve government entities?",
                a: "Yes — we hold the necessary approvals and follow NCSA guidelines end-to-end.",
              },
              {
                q: "Do you offer AMCs?",
                a: "Yes, tailored AMCs covering hardware, software and infrastructure across Qatar.",
              },
              {
                q: "Can you support Arabic-language projects?",
                a: "Absolutely. Our teams operate bilingually with full RTL delivery capability.",
              },
            ].map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-ink/10">
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-ink">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
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
        className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-royal"
      />
    </div>
  );
}
