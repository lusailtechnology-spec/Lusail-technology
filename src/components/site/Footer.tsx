import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { products } from "@/data/products";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 aurora opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-royal/20 blur-[120px]" />

      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/Logo.png"
                alt="Lusail Technology Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="font-display text-xl font-bold">
                  Lusail<span className="text-teal">.</span>Technology
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Doha · Qatar
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              Innovating tomorrow's technology today. Enterprise IT, cybersecurity,
              cloud and software solutions built for Qatar's most demanding
              organisations.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                West Bay Business District, Doha, Qatar
              </div>
              <a href="tel:+97444791860" className="flex items-center gap-3 hover:text-teal">
                <Phone className="h-4 w-4 shrink-0 text-teal" /> +974 4479 1860
              </a>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-white/60">FAX:</span>
                <span className="text-white/80">+974 4462 2407</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-white/60">P.O Box:</span>
                <span className="text-white/80">11401 Doha, Qatar</span>
              </div>
              <a href="mailto:info@lusailtechnology.com" className="flex items-center gap-3 hover:text-teal">
                <Mail className="h-4 w-4 shrink-0 text-teal" /> info@lusailtechnology.com
              </a>
            </div>
          </div>

          <FooterCol title="Company">
            <FLink to="/about">About Us</FLink>
            <FLink to="/services">Services</FLink>
            <FLink to="/products">Products</FLink>
            <FLink to="/contact">Contact</FLink>
          </FooterCol>

          <FooterCol title="Top Services">
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="text-sm text-white/70 hover:text-white"
              >
                {s.title}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Featured Products">
            {products.slice(0, 6).map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="text-sm text-white/70 hover:text-white"
              >
                {p.title}
              </Link>
            ))}
          </FooterCol>
        </div>

        <div className="mt-14 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-teal">Newsletter</div>
            <div className="mt-1 font-display text-2xl font-semibold">
              Technology insights, delivered monthly.
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 rounded-full bg-white/10 p-1.5"
          >
            <input
              type="email"
              placeholder="you@company.com"
              className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/50 outline-none"
            />
            <button className="btn-royal btn-royal-hover shrink-0 text-sm">
              Subscribe <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div className="mt-10 aspect-[16/5] w-full overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="Lusail Technology location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=51.5100%2C25.3100%2C51.5450%2C25.3400&layer=mapnik"
            className="h-full w-full grayscale invert"
            loading="lazy"
          />
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Lusail Technology. All rights reserved.</div>
          <div className="flex gap-2">
            {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:bg-white/10"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4 text-xs uppercase tracking-[0.25em] text-teal">{title}</div>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-sm text-white/70 hover:text-white">
      {children}
    </Link>
  );
}
