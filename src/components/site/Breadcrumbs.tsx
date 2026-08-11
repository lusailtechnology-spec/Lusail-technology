import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  const textClass = isDark ? "text-white" : "text-ink font-semibold";
  const activeClass = isDark ? "text-white font-bold" : "text-ink font-bold";

  return (
    <nav aria-label="Breadcrumb" className="w-full overflow-x-auto">
      <ol className={`inline-flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm rounded-full ${isDark ? "bg-ink/80 text-white" : "bg-white/90 text-ink"} backdrop-blur-md px-4 py-1.5 border border-ink/10 shadow-sm`}>
        <li className="flex items-center gap-1.5">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-md px-1 py-0.5 transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
          >
            <Home className="h-3.5 w-3.5 text-royal" aria-hidden="true" />
            <span className={textClass}>Home</span>
          </Link>
        </li>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.label} className="flex min-w-0 items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50 text-royal" aria-hidden="true" />
              {c.to && !last ? (
                <Link
                  to={c.to as never}
                  params={c.params as never}
                  className="truncate rounded-md px-1 py-0.5 transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
                >
                  <span className={textClass}>{c.label}</span>
                </Link>
              ) : (
                <span aria-current="page" className={`truncate ${activeClass}`}>
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
