import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/primitives";
import { EventCard } from "@/components/site/EventCard";
import { events, isUpcoming } from "@/data/site";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/課程活動")({
  head: () => seo({ title: "課程活動 | 加拿大華人職能發展協會", description: "加拿大華人職能發展協會的課程、講座與社區活動，包括即將舉行與過往活動紀錄。", path: "/課程活動" }),
  component: Events,
});

function Events() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const upcoming = events.filter((e) => isUpcoming(e));
  const past = events.filter((e) => !isUpcoming(e));
  const list = tab === "upcoming" ? upcoming : past;
  return (
    <>
      <PageHero title="課程與活動" en="Courses & Events" intro={<p>本會每個月都有實用的課程，也有定期性的會員活動。</p>} />
      <section className="section-y">
        <div className="container-site">
          <div role="tablist" aria-label="活動篩選" className="inline-flex rounded-lg border bg-surface p-1">
            {([["upcoming", `即將舉行（${upcoming.length}）`], ["past", `過往活動（${past.length}）`]] as const).map(([k, l]) => (
              <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
                className={cn("rounded-md px-5 py-2 text-sm font-semibold transition-colors", tab === k ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary")}>{l}</button>
            ))}
          </div>
          {list.length ? (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">{list.map((e) => <EventCard key={e.slug} e={e} past={tab === "past"} />)}</div>
          ) : (
            <div className="mt-10 rounded-lg border border-dashed border-lavender bg-surface px-8 py-14 text-center">
              <p className="text-lg font-semibold text-primary">目前尚無即將舉行的活動，歡迎稍後回來查看最新消息。</p>
              <button onClick={() => setTab("past")} className="mt-4 text-sm font-semibold text-secondary hover:underline">瀏覽過往活動 →</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
