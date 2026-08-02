import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Building2,
  Compass,
  Eye,
  Target,
  Award,
  Users,
  Rocket,
  ShieldCheck,
  Heart,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lusail Technology — Qatar's Enterprise IT Partner" },
      {
        name: "description",
        content:
          "Learn about Lusail Technology — our mission, vision, and the Doha team engineering enterprise-grade IT solutions across Qatar.",
      },
      { property: "og:title", content: "About Lusail Technology" },
      { property: "og:description", content: "Qatar's enterprise IT partner engineering trust into every layer." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "https://www.lusailtechnology.com/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Story />
      <Timeline />
      <Values />
      <Stats />
      <Team />
      <CTA />
    </>
  );
}

function AboutHero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="container-x relative grid gap-10 py-24 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div className="animate-reveal">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
            {t('aboutPage.hero.badge')}
          </div>
          <h1 className="mt-6 font-display display-1 font-bold text-ink">
            {t('aboutPage.hero.title')}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {t('aboutPage.hero.description')}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["2011", t('aboutPage.hero.founded')],
            ["120+", t('aboutPage.hero.enterpriseClients')],
            ["45+", t('aboutPage.hero.certifiedEngineers')],
            ["8", t('aboutPage.hero.industryVerticals')],
          ].map(([k, v]) => (
            <div key={v} className="rounded-2xl bg-ink p-5 text-white">
              <div className="font-display text-3xl font-bold">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const { t } = useTranslation();
  return (
    <section className="container-x py-20">
      <div className="grid gap-6 lg:grid-cols-3">
        <Card icon={Target} label={t('aboutPage.mission.label')} title={t('aboutPage.mission.title')} body={t('aboutPage.mission.body')} tone="royal" />
        <Card icon={Eye} label={t('aboutPage.vision.label')} title={t('aboutPage.vision.title')} body={t('aboutPage.vision.body')} tone="ivory" />
        <Card icon={Compass} label={t('aboutPage.purpose.label')} title={t('aboutPage.purpose.title')} body={t('aboutPage.purpose.body')} tone="ink" />
      </div>
    </section>
  );
}

function Card({ icon: Icon, label, title, body, tone }: any) {
  const styles: Record<string, string> = {
    royal: "bg-gradient-royal text-white",
    ivory: "bg-ivory text-ink",
    ink: "bg-ink text-white",
  };
  return (
    <div className={`relative overflow-hidden rounded-[28px] p-8 ${styles[tone]}`}>
      <Icon className="h-6 w-6 opacity-80" />
      <div className={`mt-6 text-xs uppercase tracking-[0.25em] ${tone === "ivory" ? "text-royal" : "text-white/70"}`}>{label}</div>
      <div className="mt-2 font-display text-2xl font-semibold">{title}</div>
      <div className={`mt-3 text-sm ${tone === "ivory" ? "text-muted-foreground" : "text-white/70"}`}>{body}</div>
    </div>
  );
}

function Story() {
  const { t } = useTranslation();
  return (
    <section className="bg-ivory py-24">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[3/4] rounded-3xl bg-ink p-6 flex flex-col justify-between">
              <ShieldCheck className="h-10 w-10 text-teal" />
              <div>
                <div className="font-display text-2xl font-bold text-white">{t('aboutPage.story.securityFirst')}</div>
                <div className="mt-2 text-sm text-white/70">{t('aboutPage.story.securityFirstDesc')}</div>
              </div>
            </div>
            <div className="mt-10 aspect-[3/4] rounded-3xl bg-gradient-royal p-6 flex flex-col justify-between">
              <Rocket className="h-10 w-10 text-white/80" />
              <div>
                <div className="font-display text-2xl font-bold text-white">{t('aboutPage.story.fastDelivery')}</div>
                <div className="mt-2 text-sm text-white/70">{t('aboutPage.story.fastDeliveryDesc')}</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 rounded-2xl glass p-4">
            <div className="text-xs uppercase tracking-widest text-royal">{t('aboutPage.story.dohaHq')}</div>
            <div className="mt-1 font-display text-lg font-semibold text-ink">{t('aboutPage.story.westBay')}</div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="text-xs uppercase tracking-[0.25em] text-royal">{t('aboutPage.story.label')}</div>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            {t('aboutPage.story.title')}
          </h2>
          <p className="mt-5 text-muted-foreground">
            {t('aboutPage.story.description1')}
          </p>
          <p className="mt-4 text-muted-foreground">
            {t('aboutPage.story.description2')}
          </p>
          <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-4">
            <div className="text-xs uppercase tracking-widest text-royal">{t('aboutPage.story.contactInfo')}</div>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ink">{t('aboutPage.story.tlf')}:</span>
                <span className="text-muted-foreground">+974 4479 1860</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ink">{t('aboutPage.story.fax')}:</span>
                <span className="text-muted-foreground">+974 4462 2407</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ink">{t('aboutPage.story.poBox')}:</span>
                <span className="text-muted-foreground">11401 Doha, Qatar</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ink">{t('aboutPage.story.email')}:</span>
                <span className="text-muted-foreground">info@lusailtechnology.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const { t } = useTranslation();
  const items = [
    { year: "2011", title: t('aboutPage.timeline.founded'), body: t('aboutPage.timeline.foundedDesc') },
    { year: "2015", title: t('aboutPage.timeline.nocLaunched'), body: t('aboutPage.timeline.nocLaunchedDesc') },
    { year: "2018", title: t('aboutPage.timeline.cybersecurity'), body: t('aboutPage.timeline.cybersecurityDesc') },
    { year: "2021", title: t('aboutPage.timeline.cloud'), body: t('aboutPage.timeline.cloudDesc') },
    { year: "2024", title: t('aboutPage.timeline.aiAutomation'), body: t('aboutPage.timeline.aiAutomationDesc') },
    { year: "2026", title: t('aboutPage.timeline.regional'), body: t('aboutPage.timeline.regionalDesc') },
  ];
  return (
    <section className="container-x py-24">
      <div className="max-w-xl">
        <div className="text-xs uppercase tracking-[0.25em] text-royal">{t('aboutPage.timeline.title')}</div>
        <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
          {t('aboutPage.timeline.subtitle')}
        </h2>
      </div>
      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink/10 md:block" />
        <div className="grid gap-8 md:grid-cols-6">
          {items.map((i, idx) => (
            <div key={i.year} className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`h-3 w-3 rounded-full ${
                    idx === items.length - 1 ? "bg-royal ring-4 ring-royal/20" : "bg-ink"
                  }`}
                />
                <div className="font-display text-xl font-bold text-ink">{i.year}</div>
              </div>
              <div className="font-semibold text-ink">{i.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{i.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const { t } = useTranslation();
  return (
    <section className="bg-ink py-24 text-white">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-teal">{t('aboutPage.coreStrengths.title')}</div>
          <h2 className="mt-3 font-display display-2 font-bold">
            {t('aboutPage.coreStrengths.innovation')}
          </h2>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl bg-white/5 p-6">
            <div className="font-display text-xl font-semibold text-teal">{t('aboutPage.coreStrengths.expertise')}</div>
            <p className="mt-3 text-sm text-white/70">
              {t('aboutPage.coreStrengths.expertiseDesc')}
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <div className="font-display text-xl font-semibold text-teal">{t('aboutPage.coreStrengths.reliability')}</div>
            <p className="mt-3 text-sm text-white/70">
              {t('aboutPage.coreStrengths.reliabilityDesc')}
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <div className="font-display text-xl font-semibold text-teal">{t('aboutPage.coreStrengths.support')}</div>
            <p className="mt-3 text-sm text-white/70">
              {t('aboutPage.coreStrengths.supportDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { t } = useTranslation();
  const items = [
    ["14+", t('aboutPage.stats.yearsInBusiness')],
    ["120+", t('aboutPage.stats.enterpriseClients')],
    ["45+", t('aboutPage.stats.certifiedEngineers')],
    ["8", t('aboutPage.stats.industriesServed')],
  ];
  return (
    <section className="container-x py-20">
      <div className="grid grid-cols-2 gap-6 rounded-3xl bg-ivory p-10 md:grid-cols-4">
        {items.map(([k, v]) => (
          <div key={v}>
            <div className="font-display text-4xl font-bold text-ink md:text-5xl">{k}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Team() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink via-ink/95 to-royal/20 py-20">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(600px 300px at 20% 20%, rgba(30,86,255,0.5), transparent 70%), radial-gradient(500px 260px at 80% 80%, rgba(15,194,192,0.4), transparent 70%)" }} />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-teal">{t('aboutPage.ceoMessage.title')}</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
              {t('aboutPage.ceoMessage.welcome')}
            </h2>
          </div>
          <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-8 border border-white/10">
            <p className="text-white">
              {t('aboutPage.ceoMessage.paragraph1')}
            </p>
            <p className="mt-4 text-white/80">
              {t('aboutPage.ceoMessage.paragraph2')}
            </p>
            <p className="mt-4 text-white/80">
              {t('aboutPage.ceoMessage.paragraph3')}
            </p>
            <p className="mt-4 text-white/80">
              {t('aboutPage.ceoMessage.paragraph4')}
            </p>
            <div className="mt-6 border-t border-white/20 pt-4">
              <div className="font-semibold text-white">{t('aboutPage.ceoMessage.sincerely')}</div>
              <div className="mt-1 font-display text-lg font-semibold text-teal">{t('aboutPage.ceoMessage.name')}</div>
              <div className="text-sm text-white/70">{t('aboutPage.ceoMessage.role')}</div>
              <div className="text-sm text-white/70">{t('aboutPage.ceoMessage.company')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { t } = useTranslation();
  return (
    <section className="container-x py-20">
      <div className="rounded-[32px] bg-gradient-royal p-10 text-white md:p-14">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <div className="font-display display-2 font-bold">{t('aboutPage.cta.title')}</div>
            <div className="mt-3 max-w-lg text-white/80">
              {t('aboutPage.cta.description')}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-ivory"
            >
              {t('aboutPage.cta.button')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
