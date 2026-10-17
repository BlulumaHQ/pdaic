import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeading, btn } from "@/components/site/primitives";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/慈善晚宴")({
  head: () => seo({ title: "慈善晚宴 | 加拿大華人職能發展協會", description: "2026年5月23日「音樂・星光・希望」溫馨音樂會慈善晚宴，加拿大職能發展協會 × Pacific Autism Family Network，支持 JET Program。", path: "/慈善晚宴" }),
  component: Gala,
});

function Gala() {
  return (
    <>
      <PageHero title="溫馨音樂會慈善晚宴" en="Music · Starlight · Hope — PDAC Charity Gala 2026" intro={<p>加拿大職能發展協會 × Pacific Autism Family Network</p>} />
      <section className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-6 inline-block rounded bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground">活動已圓滿結束</p>
            <SectionHeading eyebrow="Overview" title="一個充滿愛與溫暖的夜晚">
              <p>This is more than a concert. It's a night where your presence creates real change.</p>
              <p className="mt-4">In partnership with Pacific Autism Family Network, we are supporting the JET Program (Job • Education • Training) — empowering children and youth with autism to gain skills, confidence, and independence.</p>
              <p className="mt-4">Because true success is not just what we achieve — but how many lives we uplift along the way.</p>
            </SectionHeading>
            <dl className="mt-10 grid gap-6 border-t pt-8 sm:grid-cols-3">
              <div><dt className="eyebrow text-secondary">日期</dt><dd className="mt-1 font-semibold">2026年5月23日（星期六）</dd></div>
              <div><dt className="eyebrow text-secondary">時間</dt><dd className="mt-1 font-semibold">5:00 PM – 9:00 PM</dd></div>
              <div><dt className="eyebrow text-secondary">地點</dt><dd className="mt-1 font-semibold">The Westin Wall Centre, Richmond</dd></div>
            </dl>
          </div>
          <img src="/images/charity-gala-2026-poster-tc.webp" alt="2026年5月23日溫馨音樂會慈善晚宴海報" className="w-full rounded-lg shadow-xl lg:col-span-5" />
        </div>
      </section>

      <section className="section-y bg-plum text-plum-foreground">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="Partner" title="與 Pacific Autism Family Network 攜手" light>
            <p>PAFN 太平洋自閉症家庭網絡中心社區包容項目經理 Evan Rubin 為慈善晚宴特別錄製影片，背景選在 Paper Planes Café 紙飛機咖啡館——這是與太平洋自閉症家庭網絡合作創立，專門培訓和僱用神經多樣性人員的社會企業，溫哥華國際機場被認為是加拿大第一個擁有這種社會企業的機場。</p>
          </SectionHeading>
          <img src="/images/charity-pafn-evan-rubin.webp" alt="PAFN Evan Rubin 於紙飛機咖啡館" className="mx-auto aspect-[3/4] w-full max-w-sm rounded-lg object-cover" loading="lazy" />
        </div>
      </section>

      <section className="section-y">
        <div className="container-site">
          <SectionHeading eyebrow="Media" title="活動主視覺" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[["en", "英文版"], ["sc", "簡體中文版"], ["tc", "繁體中文版"]].map(([k, l]) => (
              <img key={k} src={`/images/charity-gala-2026-poster-${k}.webp`} alt={`慈善晚宴海報（${l}）`} className="w-full rounded-lg border" loading="lazy" />
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            <Link to="/協會給pafn的承諾" className={btn()}>協會給 PAFN 的承諾</Link>
            <Link to="/聯絡我們-1" className={btn({ variant: "outline" })}>聯絡協會</Link>
          </div>
        </div>
      </section>
    </>
  );
}
