import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { events, isUpcoming } from "@/data/site";
import { btn } from "@/components/site/primitives";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/events-1/$slug")({
  loader: ({ params }) => {
    const e = events.find((x) => x.slug === params.slug);
    if (!e) throw notFound();
    return e;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? seo({ title: `${loaderData.title} | 加拿大華人職能發展協會`, description: `${loaderData.dateLabel}・${loaderData.summary}`, path: `/events-1/${params.slug}` })
      : { meta: [{ title: "活動 | 加拿大華人職能發展協會" }] },
  component: EventDetail,
});

function EventDetail() {
  const e = Route.useLoaderData();
  const past = !isUpcoming(e);
  return (
    <section className="section-y">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          {e.image ? (
            <img src={e.image} alt={e.title} className="w-full rounded-lg shadow-lg" />
          ) : (
            <div className="flex aspect-[4/5] items-center justify-center rounded-lg bg-surface"><img src="/images/pdaic-logo-symbol.webp" alt="" className="h-24 w-24 rounded-md" /></div>
          )}
        </div>
        <div className="lg:col-span-7">
          <Link to="/課程活動" className="text-sm font-semibold text-secondary hover:underline">← 所有活動</Link>
          {past && <p className="mt-6 inline-block rounded bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground">{e.status}</p>}
          <h1 className="mt-4 text-4xl font-bold text-primary md:text-5xl">{e.title}</h1>
          <dl className="editorial-rule mt-8 space-y-3">
            <div><dt className="eyebrow text-secondary">日期</dt><dd>{e.dateLabel}</dd></div>
            <div><dt className="eyebrow text-secondary">時間</dt><dd>{e.time}</dd></div>
            <div><dt className="eyebrow text-secondary">地點</dt><dd>{e.location}</dd></div>
          </dl>
          <div className="mt-10 space-y-3 text-muted-foreground">{(e.body ?? [e.summary]).map((p, i) => <p key={i}>{p}</p>)}</div>
          <div className="mt-10 flex gap-3">
            <Link to="/課程活動" className={btn({ variant: "outline" })}>查看其他活動</Link>
            <Link to="/聯絡我們-1" className={btn()}>聯絡協會</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
