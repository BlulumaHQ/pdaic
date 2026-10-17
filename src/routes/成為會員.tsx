import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeading, btn } from "@/components/site/primitives";
import { mailto } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/成為會員")({
  head: () => seo({ title: "成為會員 | 加拿大華人職能發展協會", description: "加入加拿大華人職能發展協會：會員申請資格、會員類別、會員權利與入會流程。", path: "/成為會員" }),
  component: Membership,
});

const categories = [
  { t: "個人會員", d: "凡贊同本會宗旨、年滿十六歲、且合乎申請條件之一者，經本會審查通過，並繳納入會費，始為本會個人會員。" },
  { t: "團體會員", d: "凡贊同本會宗旨之七人以上團體；須為各級政府主管機關登記有案之公私營機構、法人、社團，或為學校認可之學生團體。經審查及理事會通過，並推派代表三名。" },
  { t: "贊助會員", d: "經本協會理事會同意之贊助本會團體或個人。" },
  { t: "榮譽會員", d: "對跨業職能教育與其推廣及職能教材具特殊貢獻者，經理事會通過，可聘為本會榮譽會員。" },
];

function Membership() {
  return (
    <>
      <PageHero title="成為會員" en="Become a Member" intro={<p>本會每個月都有非常實用超值的課程，也有定期性的會員活動，年度的會員商機就業博覽會更能為企業及個人職業媒合提供最有效的能見度與媒合成功率。</p>} />

      <section className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="Eligibility" title="會員申請資格">
            <p>凡贊同本會宗旨、年滿十六歲、且合乎下列條件之一者，得申請為本會正式個人會員：</p>
          </SectionHeading>
          <ol className="space-y-4">
            {["擁有正當職業工作者。", "從事一般商務職能教育之教學、研究者。", "對跨業職能教育推展有興趣者。", "欲提升職能技術者。"].map((x, i) => (
              <li key={x} className="flex gap-5 border-b pb-4"><span className="font-bold text-gold">（{["一", "二", "三", "四"][i]}）</span><span>{x}</span></li>
            ))}
            <li className="pt-2 text-sm text-muted-foreground">Agree with the purpose of our association, be at least sixteen years old, and meet one of the conditions above.</li>
          </ol>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site">
          <SectionHeading eyebrow="Categories" title="會員類別" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {categories.map((c) => (
              <div key={c.t} className="rounded-lg border bg-card p-8"><h3 className="text-xl font-bold text-primary">{c.t}</h3><p className="mt-3 text-muted-foreground">{c.d}</p></div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">以上各類會員均須經審查合格，由本會理事會通過後，正式取得會員資格。（章程第七條）</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="Benefits" title="會員權利" />
          <ul className="space-y-4">
            {["享有發言權、表決權、選舉權、被選舉權及罷免權（贊助會員及榮譽會員僅有發言權）。", "參加本會所舉辦之各項活動及研討會。", "參加本會舉辦之教育訓練，及購買本會所出版之刊物、教材等之優待。", "請求本會協助商務相關之諮詢服務事宜。"].map((b) => (
              <li key={b} className="flex gap-4"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary" /><span>{b}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="How to Join" title="入會流程" />
            <ol className="mt-10 space-y-6">
              {["來信或致電協會，表達入會意願並索取申請資料。", "提交申請，由本會審查。", "審查通過後繳納入會費及常年會費。", "經理事會通過，正式取得會員資格。"].map((s, i) => (
                <li key={s} className="flex gap-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span><span className="pt-1">{s}</span></li>
              ))}
            </ol>
          </div>
          <div className="rounded-lg border bg-card p-8">
            <h3 className="text-xl font-bold text-primary">會費資訊</h3>
            <p className="mt-3 text-sm text-muted-foreground">依協會章程第三十條所載：</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>入會費：個人會員加幣50元、團體會員加幣300元</li>
              <li>常年會費：個人會員加幣200元（兩年），團體會員加幣500元（兩年）</li>
              <li>一次繳交十年會費者，得成為永久會員</li>
              <li>夫妻雙人入會：第一人$200元；第二人$100元</li>
            </ul>
            <div className="mt-6 rounded-md bg-surface p-4 text-sm">
              <p className="font-semibold">創會會員優惠（過往公告）</p>
              <p className="mt-1 text-muted-foreground">原網站曾公告創會會員免首次入會費、享活動折扣及創會紀念禮包，惟中英文版本所列優惠期限不一致。最新會費與優惠，請以協會確認為準。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">歡迎加入我們加華協會大家庭</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">加拿大華人職能發展協會 理事長吳秀美 Josephine Wu 暨全體理監事敬邀</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={mailto("會員申請洽詢")} className={btn()}>來信申請入會</a>
            <Link to="/聯絡我們-1" className={btn({ variant: "outline" })}>聯絡我們</Link>
          </div>
        </div>
      </section>
    </>
  );
}
