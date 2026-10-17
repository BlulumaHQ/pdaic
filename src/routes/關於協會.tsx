import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeading, btn } from "@/components/site/primitives";
import { constitution } from "@/data/constitution";
import { purposes } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/關於協會")({
  head: () => seo({ title: "關於協會 | 加拿大華人職能發展協會", description: "認識加拿大華人職能發展協會的創立宗旨、任務與完整協會章程。BC省登記立案之非營利社團。", path: "/關於協會" }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero title="關於協會" en="Professional Development Association in Canada" />
      <section className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Introduction" title="協會簡介">
              <p>『加拿大華人職能發展協會』（簡稱加華職發會；PDAC）創立之宗旨為提升國家整體商務人才素質及國際競爭力、協助商務人士、畢業人才、二度就業華裔族群就業無礙、職業技術升級，促進商務產學交流研討。強化職能技術、提升自我價值及競爭力、提升會員生活品質，啟動善良循環。</p>
            </SectionHeading>
          </div>
          <aside className="rounded-lg bg-surface p-8 lg:col-span-5">
            <p className="eyebrow mb-3 text-secondary">指導單位</p>
            <p className="text-lg font-semibold">僑委會</p>
            <p className="eyebrow mt-6 mb-3 text-secondary">組織區域</p>
            <p>加拿大卑詩省（British Columbia）</p>
            <p className="eyebrow mt-6 mb-3 text-secondary">主管機關</p>
            <p>加拿大BC省政府</p>
          </aside>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site">
          <SectionHeading eyebrow="Mission" title="創立宗旨" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {purposes.map((p, i) => (
              <li key={p.title} className="rounded-lg border bg-card p-8">
                <p className="text-sm font-bold text-gold">0{i + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-primary">{p.title}</h3>
                <p className="mt-4 text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/成為會員" className={btn()}>成為會員</Link>
            <Link to="/慈善晚宴" className={btn({ variant: "outline" })}>慈善公益</Link>
          </div>
        </div>
      </section>

      <section className="section-y" id="constitution">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <nav aria-label="章程目錄" className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4 text-secondary">目錄</p>
              <ul className="space-y-2 border-l">
                {constitution.map((c) => (
                  <li key={c.id}><a href={`#${c.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-sm hover:border-primary hover:text-primary">{c.title}</a></li>
                ))}
              </ul>
            </div>
          </nav>
          <article className="lg:col-span-9 max-w-3xl">
            <SectionHeading eyebrow="Constitution" title="加拿大華人職能發展協會章程">
              <p>以下為協會章程原文，經本會2024年8月24日第一屆第一次會員大會通過。</p>
            </SectionHeading>
            {constitution.map((c) => (
              <section key={c.id} id={c.id} className="mt-14 scroll-mt-28">
                <h3 className="border-b pb-3 text-2xl font-bold text-primary">{c.title}</h3>
                <div className="mt-6 space-y-6">
                  {c.articles.map((a) => (
                    <div key={a.no} className="grid gap-2 sm:grid-cols-[6rem_1fr]">
                      <p className="font-bold text-secondary">{a.no}</p>
                      <div className="space-y-2 text-[15px] leading-8">{a.paras.map((p, i) => <p key={i}>{p}</p>)}</div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
