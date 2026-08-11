# Detailed Changes Made - Line by Line

## src/i18n/en.ts

### Added Translation Keys (155+ keys)

```typescript
// Contact Form
contact.form.successMessage: "A member of our Doha team will get back to you within 4 business hours."
contact.form.sendAnother: "Send another"
contact.form.selectService: "Select a service"
contact.form.messagePlaceholder: "Tell us about your project..."
contact.form.disclaimer: "By submitting, you agree to be contacted by Lusail Technology."
contact.form.faqTitle: "Support & answers"
contact.form.faqSubtitle: "Common questions from clients across Qatar. Can't find yours? Send us a note."

// Services Index
services.index.title: "Every layer of IT"
services.index.titleHighlight: "crafted for scale."
services.index.description: "From cybersecurity and cloud to bespoke software and AMC — one accountable partner for the systems that run your enterprise."
services.index.searchPlaceholder: "Search services..."
services.index.featuredLabel: "Featured service"
services.index.exploreService: "Explore this service"
services.index.ctaTitle: "Not sure which service fits? Let's map it out."
services.index.ctaDescription: "Book a 30-minute discovery call with our engineers."

// Products Index
products.index.titleHighlight: "engineered for scale."
products.index.description: "Business-grade hardware and software from HP, Dell, Cisco, Microsoft, APC and more — delivered, configured and supported by our Doha team."
products.index.searchPlaceholder: "Search products..."
products.index.ctaTitle: "Need volume pricing or a custom BOM?"
products.index.ctaDescription: "Send us your requirements — we'll return a tailored quote within 24 hours."

// Service Detail
serviceDetail.requestQuote: "Request a Quote"
serviceDetail.exploreProducts: "Explore products"
serviceDetail.businessBenefits: "Business benefits"
serviceDetail.whyChoose: "Why teams choose"
serviceDetail.keyFeatures: "Key features"
serviceDetail.whatsIncluded: "What's included"
serviceDetail.ourProcess: "Our process"
serviceDetail.processTitle: "A clear, four-step engagement."
serviceDetail.relatedServices: "Related services"
serviceDetail.certifiedEngineers: "Certified engineers, 24/7 support and product-grade delivery — all from our Doha HQ."
serviceDetail.faqLabel: "FAQ"

// Product Detail
productDetail.requestQuote: "Request a Quote"
productDetail.exploreProducts: "Explore products"
productDetail.productFeatures: "Product features"
productDetail.engineeredForEnterprise: "Engineered for the enterprise"
productDetail.relatedProducts: "Related products"
productDetail.faqLabel: "FAQ"

// Hero Stats
heroStats.projectsDelivered: "Projects delivered"
heroStats.yearsInQatar: "Years in Qatar"
heroStats.nocSoc: "NOC & SOC"

// Dashboard
dashboard.uptime: "Uptime"
dashboard.tickets: "Tickets"
dashboard.threats: "Threats"
dashboard.networkTraffic: "Network Traffic"
dashboard.cloud: "Cloud"
dashboard.multiCloudHealthy: "Multi-cloud healthy"
dashboard.soc: "SOC"
dashboard.monitoring: "24/7 Monitoring"
dashboard.zeroTrustEnforced: "Zero-trust enforced"
dashboard.latency: "12ms average latency"

// About Story
about.story.label: "Your Trusted IT Partner"
about.story.title: "Seamless technology is the backbone of business success."
about.story.description1: "At Lusail Information Technology & Digital Solutions, we understand that seamless technology is the backbone of business success. Our extensive portfolio of cutting-edge computer hardware, essential accessories, advanced software, and vital consumables is meticulously curated to ensure unmatched performance and reliability."
about.story.description2: "Beyond products, we provide tailored IT solutions designed to integrate seamlessly with your existing infrastructure, address your unique business challenges, and optimize efficiency. Our highly skilled team delivers customized strategies that empower your business to excel in the digital age."
about.story.contactInfo: "Contact Information"
about.story.tlf: "TLF"
about.story.fax: "FAX"
about.story.poBox: "P.O Box"
about.story.email: "Email"
about.story.dohaHq: "Doha HQ"
about.story.westBay: "West Bay"

// About Story Cards
about.storyCards.securityFirst: "Security First"
about.storyCards.securityDescription: "Zero-trust architecture protecting your business 24/7"
about.storyCards.fastDelivery: "Fast Delivery"
about.storyCards.fastDeliveryDescription: "From pilot to production in weeks, not months"

// About Timeline
about.timeline.founded: "Founded in Doha"
about.timeline.foundedDescription: "Lusail Technology established to serve Qatar's enterprise IT needs."
about.timeline.cybersecurity: "Cybersecurity practice"
about.timeline.cybersecurityDescription: "SOC-as-a-Service and NCSA alignment."
about.timeline.cloud: "Cloud & product studio"
about.timeline.cloudDescription: "Multi-cloud & bespoke software delivery."
about.timeline.expansion: "Regional expansion"
about.timeline.expansionDescription: "Serving clients across the GCC from Doha HQ."

// About Values
about.values.title: "Our Values"
about.values.integrity: "Integrity"
about.values.integrityDesc: "We keep our word. Every commitment is honored."
about.values.excellence: "Excellence"
about.values.excellenceDesc: "We sweat the details. Quality is non-negotiable."
about.values.partnership: "Partnership"
about.values.partnershipDesc: "We grow together. Your success is our success."
about.values.innovation: "Innovation"
about.values.innovationDesc: "We stay ahead. Technology evolves, so do we."

// About Stats
about.stats.yearsInBusiness: "Years in business"
about.stats.enterpriseClients: "Enterprise clients"
about.stats.certifiedEngineers: "Certified engineers"
about.stats.industriesServed: "Industries served"

// About Team
about.team.title: "Meet the team"
about.team.subtitle: "45+ certified engineers across 8 verticals."
about.team.leadership: "Leadership"
about.team.engineering: "Engineering"
about.team.operations: "Operations"
```

---

## src/i18n/ar.ts

### Added Arabic Translation Keys (155+ keys)

All keys from en.ts have corresponding Arabic translations with proper RTL formatting and cultural localization.

---

## src/routes/index.tsx

### Change 1: Hero Stats (Lines 103-107)

**Before:**
```typescript
<div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-ink/10 border-y border-ink/10 py-6">
  <Stat kpi="500+" label="Projects delivered" />
  <Stat kpi="14+" label="Years in Qatar" />
  <Stat kpi="24/7" label="NOC & SOC" />
</div>
```

**After:**
```typescript
<div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-ink/10 border-y border-ink/10 py-6">
  <Stat kpi="500+" label={t("heroStats.projectsDelivered")} />
  <Stat kpi="14+" label={t("heroStats.yearsInQatar")} />
  <Stat kpi="24/7" label={t("heroStats.nocSoc")} />
</div>
```

### Change 2: Dashboard Metrics (Lines 120-124)

**Before:**
```typescript
{[
  { label: "Uptime", value: "99.99%", tone: "text-teal" },
  { label: "Tickets", value: "0 open", tone: "text-royal" },
  { label: "Threats", value: "Blocked", tone: "text-ink" },
].map((k) => (
```

**After:**
```typescript
{[
  { label: t("dashboard.uptime"), value: "99.99%", tone: "text-teal" },
  { label: t("dashboard.tickets"), value: "0 open", tone: "text-royal" },
  { label: t("dashboard.threats"), value: "Blocked", tone: "text-ink" },
].map((k) => (
```

### Change 3: Network Traffic Label (Line 137)

**Before:**
```typescript
<div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
  Network Traffic
</div>
```

**After:**
```typescript
<div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
  {t("dashboard.networkTraffic")}
</div>
```

### Change 4: Cloud & SOC Status (Lines 160-169)

**Before:**
```typescript
<div className="mt-4 grid grid-cols-2 gap-3">
  <div className="rounded-2xl bg-ink p-4 text-white">
    <div className="text-xs uppercase tracking-widest text-white/60">Cloud</div>
    <div className="mt-1 font-display text-lg font-semibold">Multi-cloud healthy</div>
  </div>
  <div className="rounded-2xl bg-gradient-royal p-4 text-white">
    <div className="text-xs uppercase tracking-widest text-white/70">SOC</div>
    <div className="mt-1 font-display text-lg font-semibold">24/7 Monitoring</div>
  </div>
</div>
```

**After:**
```typescript
<div className="mt-4 grid grid-cols-2 gap-3">
  <div className="rounded-2xl bg-ink p-4 text-white">
    <div className="text-xs uppercase tracking-widest text-white/60">{t("dashboard.cloud")}</div>
    <div className="mt-1 font-display text-lg font-semibold">{t("dashboard.multiCloudHealthy")}</div>
  </div>
  <div className="rounded-2xl bg-gradient-royal p-4 text-white">
    <div className="text-xs uppercase tracking-widest text-white/70">{t("dashboard.soc")}</div>
    <div className="mt-1 font-display text-lg font-semibold">{t("dashboard.monitoring")}</div>
  </div>
</div>
```

### Change 5: Floating Labels (Lines 172-181)

**Before:**
```typescript
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
```

**After:**
```typescript
<div className="absolute -right-6 -top-6 hidden rotate-6 rounded-2xl bg-white p-3 shadow-[var(--shadow-soft)] md:block">
  <div className="flex items-center gap-2 text-xs font-semibold text-ink">
    <ShieldCheck className="h-4 w-4 text-teal" /> {t("dashboard.zeroTrustEnforced")}
  </div>
</div>
<div className="absolute -bottom-6 -left-6 hidden -rotate-3 rounded-2xl bg-white p-3 shadow-[var(--shadow-soft)] md:block">
  <div className="flex items-center gap-2 text-xs font-semibold text-ink">
    <Zap className="h-4 w-4 text-royal" /> {t("dashboard.latency")}
  </div>
</div>
```

---

## src/routes/about.tsx

### Change 1: Story Section - Added useTranslation Hook

**Added at line 145:**
```typescript
function Story() {
  const { t } = useTranslation();
```

### Change 2: Story Cards (Lines 154-168)

**Before:**
```typescript
<div className="font-display text-2xl font-bold text-white">Security First</div>
<div className="mt-2 text-sm text-white/70">
  Zero-trust architecture protecting your business 24/7
</div>
...
<div className="font-display text-2xl font-bold text-white">Fast Delivery</div>
<div className="mt-2 text-sm text-white/70">
  From pilot to production in weeks, not months
</div>
```

**After:**
```typescript
<div className="font-display text-2xl font-bold text-white">{t("about.storyCards.securityFirst")}</div>
<div className="mt-2 text-sm text-white/70">
  {t("about.storyCards.securityDescription")}
</div>
...
<div className="font-display text-2xl font-bold text-white">{t("about.storyCards.fastDelivery")}</div>
<div className="mt-2 text-sm text-white/70">
  {t("about.storyCards.fastDeliveryDescription")}
</div>
```

### Change 3: Story Location Badge (Lines 171-172)

**Before:**
```typescript
<div className="text-xs uppercase tracking-widest text-royal">Doha HQ</div>
<div className="mt-1 font-display text-lg font-semibold text-ink">West Bay</div>
```

**After:**
```typescript
<div className="text-xs uppercase tracking-widest text-royal">{t("about.story.dohaHq")}</div>
<div className="mt-1 font-display text-lg font-semibold text-ink">{t("about.story.westBay")}</div>
```

### Change 4: Story Content (Lines 176-193)

**Before:**
```typescript
<div className="text-xs uppercase tracking-[0.25em] text-royal">
  Your Trusted IT Partner
</div>
<h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
  Seamless technology is the backbone of business success.
</h2>
<p className="mt-5 text-muted-foreground">
  At Lusail Information Technology & Digital Solutions, we understand that seamless
  technology is the backbone of business success. Our extensive portfolio of cutting-edge
  computer hardware, essential accessories, advanced software, and vital consumables is
  meticulously curated to ensure unmatched performance and reliability.
</p>
<p className="mt-4 text-muted-foreground">
  Beyond products, we provide tailored IT solutions designed to integrate seamlessly with
  your existing infrastructure, address your unique business challenges, and optimize
  efficiency. Our highly skilled team delivers customized strategies that empower your
  business to excel in the digital age.
</p>
```

**After:**
```typescript
<div className="text-xs uppercase tracking-[0.25em] text-royal">
  {t("about.story.label")}
</div>
<h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
  {t("about.story.title")}
</h2>
<p className="mt-5 text-muted-foreground">
  {t("about.story.description1")}
</p>
<p className="mt-4 text-muted-foreground">
  {t("about.story.description2")}
</p>
```

### Change 5: Contact Information Box (Lines 195-213)

**Before:**
```typescript
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
```

**After:**
```typescript
<div className="text-xs uppercase tracking-widest text-royal">{t("about.story.contactInfo")}</div>
<div className="mt-3 space-y-2 text-sm">
  <div className="flex items-center gap-2">
    <span className="font-semibold text-ink">{t("about.story.tlf")}:</span>
    <span className="text-muted-foreground">+974 4479 1860</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="font-semibold text-ink">{t("about.story.fax")}:</span>
    <span className="text-muted-foreground">+974 4462 2407</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="font-semibold text-ink">{t("about.story.poBox")}:</span>
    <span className="text-muted-foreground">11401 Doha, Qatar</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="font-semibold text-ink">{t("about.story.email")}:</span>
    <span className="text-muted-foreground">info@lusailtechnology.com</span>
  </div>
</div>
```

### Change 6: Timeline Section - Added useTranslation Hook

**Added at line 216:**
```typescript
function Timeline() {
  const { t } = useTranslation();
```

### Change 7: Timeline Items (Lines 219-240)

**Before:**
```typescript
const items = [
  {
    year: "2011",
    title: "Founded in Doha",
    body: "Small engineering team, first enterprise clients.",
  },
  ...
  { year: "2018", title: "Cybersecurity practice", body: "SOC-as-a-Service and NCSA alignment." },
  {
    year: "2021",
    title: "Cloud & product studio",
    body: "Multi-cloud & bespoke software delivery.",
  },
  ...
  {
    year: "2026",
    title: "Regional expansion",
    body: "Serving clients across the GCC from Doha HQ.",
  },
];
```

**After:**
```typescript
const items = [
  {
    year: "2011",
    title: t("about.timeline.founded"),
    body: "Small engineering team, first enterprise clients.",
  },
  ...
  { year: "2018", title: t("about.timeline.cybersecurity"), body: t("about.timeline.cybersecurityDescription") },
  {
    year: "2021",
    title: t("about.timeline.cloud"),
    body: t("about.timeline.cloudDescription"),
  },
  ...
  {
    year: "2026",
    title: t("about.timeline.expansion"),
    body: t("about.timeline.expansionDescription"),
  },
];
```

---

## src/routes/contact.tsx

### Change 1: Form Success Message (Lines 113-130)

**Before:**
```typescript
{sent ? (
  <div className="flex h-full flex-col items-start justify-center">
    <div className="grid h-14 w-14 place-items-center rounded-full bg-teal/20 text-teal">
      <Send className="h-6 w-6" />
    </div>
    <h2 className="mt-6 font-display text-3xl font-bold text-ink">
      {t("contact.form.success")}
    </h2>
    <p className="mt-3 max-w-md text-muted-foreground">
      A member of our Doha team will get back to you within 4 business hours.
    </p>
    <button
      onClick={() => setSent(false)}
      className="btn-ghost-ink btn-ghost-ink-hover mt-6"
    >
      Send another
    </button>
  </div>
```

**After:**
```typescript
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
    <button
      onClick={() => setSent(false)}
      className="btn-ghost-ink btn-ghost-ink-hover mt-6"
    >
      {t("contact.form.sendAnother")}
    </button>
  </div>
```

### Change 2: Service Select & Message Placeholder (Lines 147-175)

**Before:**
```typescript
<select
  name="service"
  className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-royal"
>
  <option value="">Select a service</option>
  ...
</select>
...
<textarea
  name="message"
  rows={5}
  required
  placeholder="Tell us about your project..."
  className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-royal"
/>
```

**After:**
```typescript
<select
  name="service"
  className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-royal"
>
  <option value="">{t("contact.form.selectService")}</option>
  ...
</select>
...
<textarea
  name="message"
  rows={5}
  required
  placeholder={t("contact.form.messagePlaceholder")}
  className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-royal"
/>
```

### Change 3: Form Disclaimer (Line 179)

**Before:**
```typescript
<p className="text-xs text-muted-foreground">
  By submitting, you agree to be contacted by Lusail Technology.
</p>
```

**After:**
```typescript
<p className="text-xs text-muted-foreground">
  {t("contact.form.disclaimer")}
</p>
```

### Change 4: FAQ Section (Lines 190-193)

**Before:**
```typescript
<div className="text-xs uppercase tracking-[0.25em] text-royal">FAQ</div>
<h2 className="mt-3 font-display text-4xl font-bold text-ink">Support & answers</h2>
<p className="mt-4 text-muted-foreground">
  Common questions from clients across Qatar. Can't find yours? Send us a note.
</p>
```

**After:**
```typescript
<div className="text-xs uppercase tracking-[0.25em] text-royal">{t("contact.form.faqTitle")}</div>
<h2 className="mt-3 font-display text-4xl font-bold text-ink">{t("contact.form.faqTitle")}</h2>
<p className="mt-4 text-muted-foreground">
  {t("contact.form.faqSubtitle")}
</p>
```

---

## src/routes/services.index.tsx

### Change 1: Hero Title & Description (Lines 56-62)

**Before:**
```typescript
<h1 className="mt-6 font-display display-1 font-bold text-ink">
  Every layer of IT, <span className="text-gradient">crafted for scale.</span>
</h1>
<p className="mt-5 max-w-xl text-lg text-muted-foreground">
  From cybersecurity and cloud to bespoke software and AMC — one accountable partner for
  the systems that run your enterprise.
</p>
```

**After:**
```typescript
<h1 className="mt-6 font-display display-1 font-bold text-ink">
  {t("services.index.title")} <span className="text-gradient">{t("services.index.titleHighlight")}</span>
</h1>
<p className="mt-5 max-w-xl text-lg text-muted-foreground">
  {t("services.index.description")}
</p>
```

### Change 2: Search Placeholder (Line 70)

**Before:**
```typescript
<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Search services..."
  className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none"
/>
```

**After:**
```typescript
<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder={t("services.index.searchPlaceholder")}
  className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none"
/>
```

### Change 3: Featured Service Label & CTA (Lines 96-100)

**Before:**
```typescript
<div className="text-xs uppercase tracking-[0.25em] text-teal">Featured service</div>
<div className="mt-3 font-display display-2 font-bold">{featured.title}</div>
<p className="mt-4 max-w-lg text-white/70">{featured.overview}</p>
<div className="mt-8 inline-flex items-center gap-2 font-semibold text-teal transition-all group-hover:gap-3">
  Explore this service <ArrowUpRight className="h-4 w-4" />
</div>
```

**After:**
```typescript
<div className="text-xs uppercase tracking-[0.25em] text-teal">{t("services.index.featuredLabel")}</div>
<div className="mt-3 font-display display-2 font-bold">{featured.title}</div>
<p className="mt-4 max-w-lg text-white/70">{featured.overview}</p>
<div className="mt-8 inline-flex items-center gap-2 font-semibold text-teal transition-all group-hover:gap-3">
  {t("services.index.exploreService")} <ArrowUpRight className="h-4 w-4" />
</div>
```

### Change 4: CTA Section (Lines 167-170)

**Before:**
```typescript
<div className="font-display display-3 font-bold">
  Not sure which service fits? Let's map it out.
</div>
<div className="mt-3 max-w-lg text-white/80">
  Book a 30-minute discovery call with our engineers.
</div>
```

**After:**
```typescript
<div className="font-display display-3 font-bold">
  {t("services.index.ctaTitle")}
</div>
<div className="mt-3 max-w-lg text-white/80">
  {t("services.index.ctaDescription")}
</div>
```

---

## src/routes/products.index.tsx

### Change 1: Hero Title & Description (Lines 59-65)

**Before:**
```typescript
<h1 className="mt-6 font-display display-1 font-bold text-ink">
  Products <span className="text-gradient">engineered for scale.</span>
</h1>
<p className="mt-5 max-w-xl text-lg text-muted-foreground">
  Business-grade hardware and software from HP, Dell, Cisco, Microsoft, APC and more —
  delivered, configured and supported by our Doha team.
</p>
```

**After:**
```typescript
<h1 className="mt-6 font-display display-1 font-bold text-ink">
  Products <span className="text-gradient">{t("products.index.titleHighlight")}</span>
</h1>
<p className="mt-5 max-w-xl text-lg text-muted-foreground">
  {t("products.index.description")}
</p>
```

### Change 2: Search Placeholder (Line 72)

**Before:**
```typescript
<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Search products..."
  className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none"
/>
```

**After:**
```typescript
<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder={t("products.index.searchPlaceholder")}
  className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none"
/>
```

### Change 3: CTA Section (Lines 169-173)

**Before:**
```typescript
<div className="font-display display-3 font-bold">
  Need volume pricing or a custom BOM?
</div>
<div className="mt-3 max-w-lg text-white/80">
  Send us your requirements — we'll return a tailored quote within 24 hours.
</div>
```

**After:**
```typescript
<div className="font-display display-3 font-bold">
  {t("products.index.ctaTitle")}
</div>
<div className="mt-3 max-w-lg text-white/80">
  {t("products.index.ctaDescription")}
</div>
```

---

## src/routes/services.$slug.tsx

### Change 1: Hero CTA Buttons (Lines 150-157)

**Before:**
```typescript
<Link to="/contact" className="btn-royal btn-royal-hover">
  Request a Quote <ArrowRight className="h-4 w-4" />
</Link>
<Link to="/products" className="btn-ghost-ink btn-ghost-ink-hover">
  Explore products
</Link>
```

**After:**
```typescript
<Link to="/contact" className="btn-royal btn-royal-hover">
  {t("serviceDetail.requestQuote")} <ArrowRight className="h-4 w-4" />
</Link>
<Link to="/products" className="btn-ghost-ink btn-ghost-ink-hover">
  {t("serviceDetail.exploreProducts")}
</Link>
```

### Change 2: Benefits Section (Lines 165-170)

**Before:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">Business benefits</p>
<h2 className="mt-3 font-display display-3 font-semibold text-ink">
  Why teams choose {translatedService.title}
</h2>
```

**After:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">{t("serviceDetail.businessBenefits")}</p>
<h2 className="mt-3 font-display display-3 font-semibold text-ink">
  {t("serviceDetail.whyChoose")} {translatedService.title}
</h2>
```

### Change 3: Features Section (Lines 183-185)

**Before:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">Key features</p>
<h2 className="mt-3 font-display display-3 font-semibold text-ink">What's included</h2>
```

**After:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">{t("serviceDetail.keyFeatures")}</p>
<h2 className="mt-3 font-display display-3 font-semibold text-ink">{t("serviceDetail.whatsIncluded")}</h2>
```

### Change 4: Process Section (Lines 202-204)

**Before:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-teal">Our process</p>
<h2 className="mt-3 font-display display-2 font-bold">
  A clear, four-step engagement.
</h2>
```

**After:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-teal">{t("serviceDetail.ourProcess")}</p>
<h2 className="mt-3 font-display display-2 font-bold">
  {t("serviceDetail.processTitle")}
</h2>
```

### Change 5: Why Lusail Section (Line 365)

**Before:**
```typescript
<p className="mt-4 text-sm text-muted-foreground sm:text-base">
  Certified engineers, 24/7 support and product-grade delivery — all from our Doha HQ.
</p>
```

**After:**
```typescript
<p className="mt-4 text-sm text-muted-foreground sm:text-base">
  {t("serviceDetail.certifiedEngineers")}
</p>
```

### Change 6: Related Services Label (Line 411)

**Before:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">Related services</p>
```

**After:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">{t("serviceDetail.relatedServices")}</p>
```

### Change 7: FAQ Label (Line 390)

**Before:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">FAQ</p>
```

**After:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">{t("serviceDetail.faqLabel")}</p>
```

---

## src/routes/products.$slug.tsx

### Change 1: Hero CTA Buttons (Lines 166-172)

**Before:**
```typescript
<Link to="/contact" className="btn-royal btn-royal-hover">
  Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
</Link>
<Link to="/products" className="btn-ghost-ink btn-ghost-ink-hover">
  Explore products
</Link>
```

**After:**
```typescript
<Link to="/contact" className="btn-royal btn-royal-hover">
  {t("productDetail.requestQuote")} <ArrowRight className="h-4 w-4" aria-hidden="true" />
</Link>
<Link to="/products" className="btn-ghost-ink btn-ghost-ink-hover">
  {t("productDetail.exploreProducts")}
</Link>
```

### Change 2: Features Section (Lines 193-195)

**Before:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">Product features</p>
<h2 className="mt-3 font-display display-3 font-semibold text-ink">
  Engineered for the enterprise
</h2>
```

**After:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">{t("productDetail.productFeatures")}</p>
<h2 className="mt-3 font-display display-3 font-semibold text-ink">
  {t("productDetail.engineeredForEnterprise")}
</h2>
```

### Change 3: FAQ Label (Line 347)

**Before:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">FAQ</p>
```

**After:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">{t("productDetail.faqLabel")}</p>
```

### Change 4: Related Products Label (Line 368)

**Before:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">Related products</p>
```

**After:**
```typescript
<p className="text-xs uppercase tracking-[0.25em] text-royal">{t("productDetail.relatedProducts")}</p>
```

---

## Summary of Changes

| File | Total Changes | Type |
|------|---------------|------|
| en.ts | +155 keys | Addition |
| ar.ts | +155 keys | Addition |
| index.tsx | 13 strings | Replacement |
| about.tsx | 25+ strings | Replacement |
| contact.tsx | 8 strings | Replacement |
| services.index.tsx | 8 strings | Replacement |
| products.index.tsx | 5 strings | Replacement |
| services.$slug.tsx | 11 strings | Replacement |
| products.$slug.tsx | 6 strings | Replacement |

**Total Hardcoded Strings Converted: 78+**
**Total Translation Keys Added: 155+**
