import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions, ScrollProgress } from "@/components/site/FloatingActions";
import "@/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-royal btn-royal-hover">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-royal btn-royal-hover"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost-ink btn-ghost-ink-hover">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lusail Technology — Enterprise IT Solutions in Qatar" },
      {
        name: "description",
        content:
          "Lusail Technology is Qatar's premium IT solutions partner — cybersecurity, cloud, networking, software and managed services in Doha.",
      },
      { name: "author", content: "Lusail Technology" },
      { property: "og:site_name", content: "Lusail Technology" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.lusailtechnology.com/Logo.png?v=2" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.lusailtechnology.com/Logo.png?v=2" },
      { name: "google-site-verification", content: "DpqOIxN_K3Ct5WLszCWtrNkowEVDrac3fqYU_fJTH5Y" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/Logo.png?v=2", type: "image/png" },
      { rel: "shortcut icon", href: "/Logo.png?v=2", type: "image/png" },
      { rel: "apple-touch-icon", href: "/Logo.png?v=2" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Language persistence
  useEffect(() => {
    const STORAGE_KEY = "app-language";
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && stored !== i18n.language) {
      i18n.changeLanguage(stored);
    }

    const apply = (lng: string) => {
      localStorage.setItem(STORAGE_KEY, lng);
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    };

    i18n.on("languageChanged", apply);
    apply(i18n.language);

    return () => {
      i18n.off("languageChanged", apply);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <div className="min-h-screen flex flex-col">
          <ScrollProgress />
          <Navbar />
          <ScrollToTop />
          <div className="flex-1 px-2 sm:px-6 lg:px-8 py-6">
            <div className="bg-white/30 rounded-lg overflow-hidden">
              <main id="main" className="pt-20 sm:pt-24">
                <Outlet />
              </main>
              <Footer />
            </div>
          </div>
          <FloatingActions />
        </div>
      </I18nextProvider>
    </QueryClientProvider>
  );
}
