import { createFileRoute, Link } from "@tanstack/react-router";
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
    links: [{ rel: "canonical", href: "/about" }],
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
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="container-x relative grid gap-10 py-24 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div className="animate-reveal">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
            About Lusail Technology
          </div>
          <h1 className="mt-6 font-display display-1 font-bold text-ink">
            Engineered in Doha.<br />
            <span className="text-gradient">Trusted across Qatar.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            We are a Qatari technology company building the digital backbone of the
            country's most ambitious enterprises. Our craft combines vendor expertise,
            product-grade engineering and deep operational discipline.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["2011", "Founded"],
            ["120+", "Enterprise clients"],
            ["45+", "Certified engineers"],
            ["8", "Industry verticals"],
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
  return (
    <section className="container-x py-20">
      <div className="grid gap-6 lg:grid-cols-3">
        <Card icon={Target} label="Mission" title="Innovate tomorrow's technology, today." body="Empower Qatar's enterprises with technology that is secure, elegant and built to last — from strategy to 24/7 operations." tone="royal" />
        <Card icon={Eye} label="Vision" title="The most trusted IT partner in the GCC." body="A regional benchmark for engineering discipline, product craftsmanship, and long-term client outcomes." tone="ivory" />
        <Card icon={Compass} label="Purpose" title="Turn IT into a competitive advantage." body="Every deployment we deliver should measurably increase resilience, speed or revenue." tone="ink" />
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
  return (
    <section className="bg-ivory py-24">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[3/4] rounded-3xl bg-ink p-6 flex flex-col justify-between">
              <ShieldCheck className="h-10 w-10 text-teal" />
              <div>
                <div className="font-display text-2xl font-bold text-white">Security First</div>
                <div className="mt-2 text-sm text-white/70">Zero-trust architecture protecting your business 24/7</div>
              </div>
            </div>
            <div className="mt-10 aspect-[3/4] rounded-3xl bg-gradient-royal p-6 flex flex-col justify-between">
              <Rocket className="h-10 w-10 text-white/80" />
              <div>
                <div className="font-display text-2xl font-bold text-white">Fast Delivery</div>
                <div className="mt-2 text-sm text-white/70">From pilot to production in weeks, not months</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 rounded-2xl glass p-4">
            <div className="text-xs uppercase tracking-widest text-royal">Doha HQ</div>
            <div className="mt-1 font-display text-lg font-semibold text-ink">West Bay</div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="text-xs uppercase tracking-[0.25em] text-royal">Your Trusted IT Partner</div>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Seamless technology is the backbone of business success.
          </h2>
          <p className="mt-5 text-muted-foreground">
            At Lusail Information Technology & Digital Solutions, we understand that seamless technology is the backbone of business success. Our extensive portfolio of cutting-edge computer hardware, essential accessories, advanced software, and vital consumables is meticulously curated to ensure unmatched performance and reliability.
          </p>
          <p className="mt-4 text-muted-foreground">
            Beyond products, we provide tailored IT solutions designed to integrate seamlessly with your existing infrastructure, address your unique business challenges, and optimize efficiency. Our highly skilled team delivers customized strategies that empower your business to excel in the digital age.
          </p>
          <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-4">
            <div className="text-xs uppercase tracking-widest text-royal">Contact Information</div>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ink">TLF:</span>
                <span className="text-muted-foreground">+974 4479 1860</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ink">FAX:</span>
                <span className="text-muted-foreground">+974 4462 2407</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ink">P.O Box:</span>
                <span className="text-muted-foreground">11401 Doha, Qatar</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ink">Email:</span>
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
  const items = [
    { year: "2011", title: "Founded in Doha", body: "Small engineering team, first enterprise clients." },
    { year: "2015", title: "24/7 NOC launched", body: "Round-the-clock managed services goes live." },
    { year: "2018", title: "Cybersecurity practice", body: "SOC-as-a-Service and NCSA alignment." },
    { year: "2021", title: "Cloud & product studio", body: "Multi-cloud & bespoke software delivery." },
    { year: "2024", title: "AI & automation", body: "AI enablement, RPA and smart workplaces." },
    { year: "2026", title: "Regional expansion", body: "Serving clients across the GCC from Doha HQ." },
  ];
  return (
    <section className="container-x py-24">
      <div className="max-w-xl">
        <div className="text-xs uppercase tracking-[0.25em] text-royal">Timeline</div>
        <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
          A decade of engineered trust.
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
  return (
    <section className="bg-ink py-24 text-white">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-teal">Our Core Strengths</div>
          <h2 className="mt-3 font-display display-2 font-bold">
            We build and activate brands through cultural insight, strategic vision, and the power of emotion.
          </h2>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl bg-white/5 p-6">
            <div className="font-display text-xl font-semibold text-teal">HR Consulting</div>
            <p className="mt-3 text-sm text-white/70">
              The HR solution of Lusail Information Technology helps your organization equip its processes, systems and people to successfully meet challenges impacting its present and the future.
            </p>
            <p className="mt-2 text-sm text-white/70">
              Our Human Resource consultants work very closely with your senior management in identifying process gaps that need to be bridged and HR interventions that can positively impact the role that HR plays in helping the organization in meeting its business strategies.
            </p>
            <p className="mt-2 text-sm text-white/70">
              Once the need and nature of such interventions are clearly defined, we design and deliver customized HR solutions that will have a sustainable positive impact on talent acquisition, development, engagement and retention.
            </p>
            <p className="mt-2 text-sm text-white/70">
              Our HR solutions are based on global best practices but highly "tailor-made" to ensure best-fit to your organizational culture and sensitivities.
            </p>
            <p className="mt-2 text-sm text-white/70">
              We ensure the sustainability of our HR services by staying closely engaged with our clients during the implementation and operationalization of our solutions through "bridge teams."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    ["500+", "Projects Completed"],
    ["120+", "Happy Clients"],
    ["14+", "Years Experience"],
    ["24/7", "Support Hours"],
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
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink via-ink/95 to-royal/20 py-20">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(600px 300px at 20% 20%, rgba(30,86,255,0.5), transparent 70%), radial-gradient(500px 260px at 80% 80%, rgba(15,194,192,0.4), transparent 70%)" }} />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-teal">CEO's Message</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
              Welcome to Our Website
            </h2>
          </div>
          <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-8 border border-white/10">
            <p className="text-white">
              At Lusail Technology, we believe technology should simplify business, drive innovation, and create lasting value for our clients.
            </p>
            <p className="mt-4 text-white/80">
              Since our inception, our mission has been to deliver reliable, innovative, and high-quality technology solutions that help businesses thrive in an ever-changing digital world. We are committed to excellence, customer satisfaction, and continuous improvement in everything we do.
            </p>
            <p className="mt-4 text-white/80">
              Our success is built on the trust of our clients, the dedication of our team, and our passion for embracing new technologies. As we continue to grow, we remain focused on providing exceptional service, building long-term partnerships, and delivering solutions that make a meaningful impact.
            </p>
            <p className="mt-4 text-white/80">
              Thank you for visiting our website and for considering Lusail Technology as your trusted technology partner. We look forward to supporting your success and growing together.
            </p>
            <div className="mt-6 border-t border-white/20 pt-4">
              <div className="font-semibold text-white">Sincerely,</div>
              <div className="mt-1 font-display text-lg font-semibold text-teal">Mansoor Al Marri</div>
              <div className="text-sm text-white/70">Chief Executive Officer</div>
              <div className="text-sm text-white/70">Lusail Technology</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-x py-20">
      <div className="rounded-[32px] bg-gradient-royal p-10 text-white md:p-14">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <div className="font-display display-2 font-bold">Work with the team.</div>
            <div className="mt-3 max-w-lg text-white/80">
              From assessment to 24/7 operations, we're ready to become an extension of yours.
            </div>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-ivory"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
