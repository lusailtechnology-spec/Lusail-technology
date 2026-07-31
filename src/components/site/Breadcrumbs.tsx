import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const muted = tone === "dark" ? "text-white/60" : "text-muted-foreground";
  const active = tone === "dark" ? "text-white" : "text-ink";
  const accent = tone === "dark" ? "text-teal" : "text-royal";

  return (
    <nav aria-label="Breadcrumb" className="w-full overflow-x-auto">
      <ol className={`flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 text-xs sm:text-sm ${muted}`}>
        <li className="flex items-center gap-1.5">
          <Link
            to="/"
            className={`inline-flex items-center gap-1 rounded-md px-1 py-1 transition hover:${accent} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal`}
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.label} className="flex min-w-0 items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden="true" />
              {c.to && !last ? (
                <Link
                  to={c.to as never}
                  params={c.params as never}
                  className={`truncate rounded-md px-1 py-1 transition hover:${accent} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal`}
                >
                  {c.label}
                </Link>
              ) : (
                <span aria-current="page" className={`truncate font-medium ${active}`}>
                  {c.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
