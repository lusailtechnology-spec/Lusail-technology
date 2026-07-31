import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Item = { slug: string; title: string };

export function PrevNext({
  base,
  prev,
  next,
}: {
  base: "/services/$slug" | "/products/$slug";
  prev: Item;
  next: Item;
}) {
  return (
    <nav aria-label="Pagination" className="container-x pb-16">
      <div className="grid gap-3 sm:grid-cols-2">
        <Link
          to={base}
          params={{ slug: prev.slug }}
          className="group flex min-h-[64px] items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 transition hover:border-royal/30 hover:shadow-[var(--shadow-soft)]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 text-royal transition group-hover:-translate-x-1" />
          <span className="min-w-0">
            <span className="block text-[11px] uppercase tracking-widest text-muted-foreground">
              Previous
            </span>
            <span className="block truncate font-display font-semibold text-ink">{prev.title}</span>
          </span>
        </Link>
        <Link
          to={base}
          params={{ slug: next.slug }}
          className="group flex min-h-[64px] items-center justify-end gap-3 rounded-2xl border border-ink/10 bg-white p-4 text-right transition hover:border-royal/30 hover:shadow-[var(--shadow-soft)]"
        >
          <span className="min-w-0">
            <span className="block text-[11px] uppercase tracking-widest text-muted-foreground">
              Next
            </span>
            <span className="block truncate font-display font-semibold text-ink">{next.title}</span>
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 text-royal transition group-hover:translate-x-1" />
        </Link>
      </div>
    </nav>
  );
}
