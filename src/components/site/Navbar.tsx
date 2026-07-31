import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { products } from "@/data/products";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open (no layout shift).
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [open]);

  // Escape closes the menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-[padding] duration-300 ${
        scrolled ? "py-1.5 sm:py-2" : "py-3 sm:py-4"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between gap-3 rounded-full px-3 transition-all duration-300 sm:px-4 ${
            scrolled ? "glass py-1.5 shadow-[var(--shadow-soft)]" : "py-2"
          }`}
        >
          <Link
            to="/"
            aria-label="Lusail Technology home"
            className="flex min-h-[44px] items-center gap-2 pl-1 sm:pl-2"
          >
            <img
              src="/Logo.png"
              alt="Lusail Technology Logo"
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-4 w-auto max-w-[50px]" : "h-5 w-auto max-w-[60px]"
              }`}
            />
            <span className="font-display text-sm font-bold tracking-tight text-ink pt-0.5">
              Lusail Technology
            </span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {nav.map((item) => {
                if (item.label === "Services") {
                  return (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuTrigger
                        className={`bg-transparent text-sm ${isActive("/services") ? "text-royal" : ""}`}
                      >
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[min(720px,90vw)] grid-cols-2 gap-1 p-4">
                          {services.slice(0, 12).map((s) => (
                            <NavigationMenuLink asChild key={s.slug}>
                              <Link
                                to="/services/$slug"
                                params={{ slug: s.slug }}
                                className="group flex items-start gap-3 rounded-xl p-3 hover:bg-ivory"
                              >
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-royal transition-all group-hover:scale-150" />
                                <span className="min-w-0">
                                  <span className="block truncate text-sm font-semibold text-ink">
                                    {s.title}
                                  </span>
                                  <span className="line-clamp-1 block text-xs text-muted-foreground">
                                    {s.short}
                                  </span>
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                          <NavigationMenuLink asChild>
                            <Link
                              to="/services"
                              className="col-span-2 mt-1 inline-flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white"
                            >
                              View all services
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }
                if (item.label === "Products") {
                  return (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuTrigger
                        className={`bg-transparent text-sm ${isActive("/products") ? "text-royal" : ""}`}
                      >
                        Products
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[min(560px,90vw)] grid-cols-2 gap-1 p-4">
                          {products.map((p) => (
                            <NavigationMenuLink asChild key={p.slug}>
                              <Link
                                to="/products/$slug"
                                params={{ slug: p.slug }}
                                className="group flex items-start gap-3 rounded-xl p-3 hover:bg-ivory"
                              >
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" />
                                <span className="min-w-0">
                                  <span className="block truncate text-sm font-semibold text-ink">
                                    {p.title}
                                  </span>
                                  <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                                    {p.category}
                                  </span>
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                          <NavigationMenuLink asChild>
                            <Link
                              to="/products"
                              className="col-span-2 mt-1 inline-flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white"
                            >
                              Browse full catalog
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.to}
                        activeOptions={{ exact: item.to === "/" }}
                        className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition hover:text-ink data-[status=active]:text-royal"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-2 lg:flex">
            <Link to="/contact" className="btn-royal btn-royal-hover text-sm">
              Get a Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full hairline bg-white/70 text-ink transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 cursor-default bg-ink/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              id="mobile-menu"
              key="menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
              className="container-x fixed inset-x-0 top-[68px] z-50 lg:hidden"
            >
              <div className="max-h-[calc(100dvh-88px)] overflow-y-auto overscroll-contain rounded-3xl border border-ink/10 bg-white p-3 shadow-[var(--shadow-glow)]">
                <nav aria-label="Mobile" className="flex flex-col">
                  {nav.map((n) => (
                    <Link
                      key={n.label}
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-[48px] items-center rounded-2xl px-4 text-base font-semibold transition ${
                        isActive(n.to) ? "bg-ivory text-royal" : "text-ink hover:bg-ivory"
                      }`}
                    >
                      {n.label}
                    </Link>
                  ))}

                  <Accordion type="single" collapsible className="mt-1">
                    <AccordionItem value="services" className="border-ink/10">
                      <AccordionTrigger className="min-h-[48px] px-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:no-underline">
                        All services
                      </AccordionTrigger>
                      <AccordionContent className="pb-2">
                        <div className="flex flex-col">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              to="/services/$slug"
                              params={{ slug: s.slug }}
                              onClick={() => setOpen(false)}
                              className="flex min-h-[44px] items-center rounded-xl px-4 text-sm font-medium text-ink hover:bg-ivory"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="products" className="border-ink/10">
                      <AccordionTrigger className="min-h-[48px] px-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:no-underline">
                        All products
                      </AccordionTrigger>
                      <AccordionContent className="pb-2">
                        <div className="flex flex-col">
                          {products.map((p) => (
                            <Link
                              key={p.slug}
                              to="/products/$slug"
                              params={{ slug: p.slug }}
                              onClick={() => setOpen(false)}
                              className="flex min-h-[44px] items-center rounded-xl px-4 text-sm font-medium text-ink hover:bg-ivory"
                            >
                              {p.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="btn-royal btn-royal-hover mt-3 min-h-[48px] justify-center"
                  >
                    Get a Quote <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
