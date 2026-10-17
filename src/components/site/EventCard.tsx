import { Link } from "@tanstack/react-router";
import type { EventItem } from "@/data/site";

export function EventCard({ e, past }: { e: EventItem; past?: boolean }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden bg-surface">
        {e.image ? (
          <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center">
            <img src="/images/pdaic-logo-symbol.webp" alt="" className="h-16 w-16 rounded-md opacity-90" loading="lazy" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold">
          <span className="text-secondary">{e.dateLabel}</span>
          {past && <span className="rounded bg-surface px-2 py-0.5 text-muted-foreground">{e.status}</span>}
        </div>
        <h3 className="text-xl font-bold text-foreground">{e.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{e.time} · {e.location}</p>
        <p className="mt-3 flex-1 text-sm text-muted-foreground">{e.summary}</p>
        <Link to="/events-1/$slug" params={{ slug: e.slug }} className="mt-5 text-sm font-semibold text-primary hover:underline">詳細資料 →</Link>
      </div>
    </article>
  );
}
