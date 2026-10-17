import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/primitives";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { members, type Member } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/協會成員")({
  head: () => seo({ title: "協會成員 | 加拿大華人職能發展協會", description: "第二屆協會理監事名冊：認識加拿大華人職能發展協會的會長、副會長、總幹事及各部門總監。", path: "/協會成員" }),
  component: Team,
});

function Team() {
  const [sel, setSel] = useState<Member | null>(null);
  return (
    <>
      <PageHero title="協會成員" en="Meet Our Team" intro={<p>第二屆協會理監事名冊。加華職能發展協會理監事及顧問團隊匯集本地傑出企業負責人、主流教育產業菁英及資深慈善團體負責人等，以其熱誠及豐富經驗協助輔導在職人士、婦女弱勢、在校學生及有意藉由職業技能改善生活之人群。</p>} />
      <section className="section-y">
        <div className="container-site grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <button key={m.slug} onClick={() => setSel(m)} className="group text-left">
              <div className="overflow-hidden rounded-lg bg-surface">
                <img src={m.image} alt={`${m.nameZh ?? ""} ${m.nameEn} 肖像`} loading="lazy" className={`aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${m.imgPos ?? "object-top"}`} />
              </div>
              <p className="mt-5 text-xs font-semibold tracking-widest text-secondary uppercase">{m.roleEn}</p>
              <h2 className="mt-1 text-xl font-bold">{m.nameZh} {m.nameEn}</h2>
              <p className="text-primary">{m.roleZh}</p>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{m.sections[0]?.items.join("・")}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-primary group-hover:underline">完整介紹 →</span>
            </button>
          ))}
        </div>
      </section>
      <Dialog open={!!sel} onOpenChange={(o) => !o && setSel(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          {sel && (
            <div className="grid gap-6 sm:grid-cols-[180px_1fr]">
              <img src={sel.image} alt={`${sel.nameEn} 肖像`} className={`aspect-[4/5] w-full rounded-md object-cover ${sel.imgPos ?? "object-top"}`} />
              <div>
                <DialogTitle className="text-2xl font-bold">{sel.nameZh} {sel.nameEn}</DialogTitle>
                <DialogDescription className="text-primary">{sel.roleZh}{sel.roleEn ? ` · ${sel.roleEn}` : ""}</DialogDescription>
                {sel.sections.map((s) => (
                  <div key={s.heading} className="mt-5">
                    <p className="editorial-rule text-sm font-bold text-secondary">{s.heading}</p>
                    <ul className="mt-2 space-y-1 text-sm">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  </div>
                ))}
                {sel.note && <p className="mt-5 text-sm text-muted-foreground">{sel.note}</p>}
                {sel.links && (
                  <div className="mt-5 flex flex-wrap gap-4">
                    {sel.links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">{l.label} ↗</a>)}
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
