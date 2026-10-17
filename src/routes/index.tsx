import { createFileRoute, Link } from "@tanstack/react-router";
import { btn, SectionHeading, Eyebrow } from "@/components/site/primitives";
import { EventCard } from "@/components/site/EventCard";
import { HeroSlider } from "@/components/site/HeroSlider";
import { NewsletterForm } from "@/components/site/Forms";
import { events, isUpcoming, members, org, purposes } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "首頁 | 加拿大華人職能發展協會",
      description: "加拿大華人職能發展協會致力於專業職能培訓、商務交流、終身學習與社區公益，連結加拿大卑詩省專業人士及華人社群，共同成長並回饋社會。",
      path: "/",
    }),
  component: Home,
});

function Home() {
  const upcoming = events.filter((e) => isUpcoming(e));
  const recent = events.filter((e) => !isUpcoming(e)).slice(0, 3);
  return (
    <>
      {/* Hero slider */}
      <HeroSlider />


      {/* About */}
      <section className="section-y bg-surface">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About PDAIC" title="專業成長，從連結開始">
              <p>『加華職能發展協會』加拿大華人職能發展協會是BC省登記立案之非營利社團。協會理監事及顧問團隊匯集本地傑出企業負責人、主流教育產業菁英及資深慈善團體負責人等，以其熱誠及豐富經驗協助輔導在職人士、婦女弱勢、在校學生及有意藉由職業技能改善生活之人群。</p>
            </SectionHeading>
            <Link to="/關於協會" className={`${btn({ variant: "link" })} mt-8 ml-6`}>了解更多 →</Link>
          </div>
          <img src="/images/charity-gala-2026-poster-tc.webp" alt="2026 溫馨音樂會慈善晚宴主視覺" className="mx-auto aspect-[4/5] w-full max-w-md rounded-lg object-cover object-top shadow-xl" loading="lazy" />
        </div>
      </section>

      {/* Missions */}
      <section className="section-y">
        <div className="container-site">
          <SectionHeading eyebrow="Our Mission" title="我們的核心使命" />
          <div className="mt-14 grid border-t md:grid-cols-3">
            {purposes.map((p, i) => (
              <div key={p.title} className="border-b py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <p className="text-sm font-bold text-gold">0{i + 1}</p>
                <h3 className="mt-3 text-2xl font-bold text-primary">{p.title}</h3>
                <p className="eyebrow mt-1 text-muted-foreground">{p.en}</p>
                <p className="mt-5 text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section-y bg-surface">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Events & Development" title="課程與精彩活動" />
            <Link to="/課程活動" className={btn({ variant: "outline" })}>查看所有活動</Link>
          </div>
          {upcoming.length ? (
            <div className="mt-12 grid gap-8 md:grid-cols-3">{upcoming.map((e) => <EventCard key={e.slug} e={e} />)}</div>
          ) : (
            <div className="mt-12 rounded-lg border border-dashed border-lavender bg-card px-8 py-10 text-center">
              <p className="text-lg font-semibold text-primary">目前尚無即將舉行的活動，歡迎稍後回來查看最新消息。</p>
            </div>
          )}
          <h3 className="mt-16 mb-6 text-sm font-bold tracking-widest text-muted-foreground">過往活動紀錄</h3>
          <div className="grid gap-8 md:grid-cols-3">{recent.map((e) => <EventCard key={e.slug} e={e} past />)}</div>
        </div>
      </section>

      {/* Charity */}
      <section className="section-y bg-plum text-plum-foreground">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src="/images/charity-pafn-evan-rubin.webp" alt="PAFN 社區包容項目經理 Evan Rubin 於紙飛機咖啡館錄製的影片" className="aspect-[3/4] w-full max-w-sm rounded-lg object-cover" loading="lazy" />
          </div>
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Community & Charity" title="以專業連結社區，以行動傳遞關懷" light>
              <p>協會與太平洋自閉症家庭網絡（Pacific Autism Family Network, PAFN）合作舉辦慈善晚宴，支持 JET Program（Job・Education・Training），協助自閉症兒童與青少年培養技能、自信與獨立。</p>
              <p className="mt-4">加拿大職能發展協會宗旨希望人人都可以藉由職能力的提升創造生活的幸福感，這份使命～更應該普及給弱勢的孩子。</p>
            </SectionHeading>
            <div className="mt-10 flex flex-wrap gap-3 pl-6">
              <Link to="/慈善晚宴" className={btn({ variant: "light" })}>慈善晚宴</Link>
              <Link to="/協會給pafn的承諾" className={btn({ variant: "ghostLight" })}>協會給 PAFN 的承諾</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-y">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Our People" title="認識協會團隊" />
            <Link to="/協會成員" className={btn({ variant: "outline" })}>查看協會成員</Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {members.slice(0, 4).map((m) => (
              <figure key={m.slug}>
                <img src={m.image} alt={`${m.nameZh ?? ""} ${m.nameEn} ${m.roleZh}`} className="aspect-[4/5] w-full rounded-lg object-cover object-center" loading="lazy" />
                <figcaption className="mt-4">
                  <p className="font-bold">{m.nameZh} {m.nameEn}</p>
                  <p className="text-sm text-secondary">{m.roleZh}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="section-y bg-surface">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Membership</Eyebrow>
            <h2 className="text-3xl font-bold text-primary md:text-[2.5rem]">加入我們，一起成長</h2>
            <p className="mt-5 text-lg text-muted-foreground">與志同道合的專業人士交流，參與協會活動，共同推動職能發展及社區公益。</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/成為會員" className={btn()}>成為會員</Link>
              <Link to="/聯絡我們-1" className={btn({ variant: "outline" })}>聯絡我們</Link>
            </div>
          </div>
          <ul className="space-y-4">
            {["參加本會所舉辦之各項活動及研討會", "參加本會舉辦之教育訓練，及購買本會所出版之刊物、教材等之優待", "請求本會協助商務相關之諮詢服務事宜", "享有發言權、表決權、選舉權、被選舉權及罷免權"].map((b) => (
              <li key={b} className="flex gap-4 rounded-lg border bg-card p-5"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" /><span>{b}</span></li>
            ))}
            <li className="text-xs text-muted-foreground">依本會章程第八條所列會員權利。</li>
          </ul>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-y">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading title="掌握協會最新消息"><p>訂閱電子報，了解協會課程、活動及最新資訊。</p></SectionHeading>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
