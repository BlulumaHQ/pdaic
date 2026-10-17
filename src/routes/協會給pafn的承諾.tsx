import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeading, btn } from "@/components/site/primitives";
import { mailto, org } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/協會給pafn的承諾")({
  head: () => seo({ title: "協會給 PAFN 的承諾 | 加拿大華人職能發展協會", description: "加拿大華人職能發展協會對太平洋自閉症家扶中心（PAFN）的承諾，以及「讓愛飛翔 職能獻愛慈善晚宴」的初衷。", path: "/協會給pafn的承諾" }),
  component: Commitment,
});

function Commitment() {
  return (
    <>
      <PageHero title="協會給 PAFN 的承諾" en="Our Commitment to Pacific Autism Family Network" />
      <section className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="space-y-16 lg:col-span-7">
            <SectionHeading eyebrow="About PDAC" title="加拿大職能發展協會（PDAC）">
              <p>加拿大職能發展協會（PDAC）是一個在卑詩省註冊的非營利組織（註冊號碼 S0080460）。PDAC 透過提升專業技能、促進商業與學術的合作，並改善會員的整體生活品質，賦能個人發揮潛能。通過每月的工作坊、商業博覽會以及慈善活動，PDAC 支持就業、技能發展，並促進社會有意義的貢獻，創造積極的成長與善良循環。</p>
            </SectionHeading>
            <SectionHeading eyebrow="Our Commitment" title="我們對 PAFN 的承諾">
              <p>PDAC 致力於支持卑詩省太平洋自閉症家扶中心（PAFN），以應對卑詩省自閉症社群日益增長的需求。卑詩省兒童與家庭發展部（BC Ministry of Children and Family Development）於 2023 年 12 月報告指出，卑詩省每 37 名兒童與青少年中，就有 1 人位於自閉症光譜上。目前，全省已有超過 29,000 名兒童與青少年被診斷為自閉症，對資源與支持的需求持續增加。</p>
              <p className="mt-4">PAFN 致力於創造包容性機會，並提供讓自閉症兒童、成人及其家庭感受到支持與聯結的空間。通過涵蓋整個生命週期的計畫和資源，PAFN 協助自閉症人士發展運動技能，促進情感成長，並建立有意義的人際關係，幫助這些兒童和成人在充滿理解與包容的社群中茁壯成長，找到歸屬，過上充滿愛與支持的生活。</p>
            </SectionHeading>
            <SectionHeading eyebrow="Let Love Soar" title="「讓愛飛翔 職能獻愛慈善晚宴」">
              <p className="font-semibold text-foreground">每個孩子都應該擁有夢想、追求和成長的機會。</p>
              <p className="mt-4">每個自閉症孩子的夢想，就像一架小飛機，渴望飛向廣闊的未來。然而，社會對自閉症的不了解，家庭雖然竭盡全力為他們創造安全的空間，但資源和能力仍然有限。</p>
              <p className="mt-4">加拿大華人職能發展協會（PDAC）很榮幸舉辦「讓愛翱翔」職能獻愛慈善晚宴為卑詩省太平洋自閉症家扶中心（PAFN）募款。為自閉症兒童及其家庭提供更多關鍵資源和支持。我們希望通過職能協會的平台，拋磚引玉，凝聚更多愛心，幫助自閉症孩子和家庭擁有幸福且有意義的生活。</p>
            </SectionHeading>
          </div>
          <aside className="space-y-6 lg:col-span-5">
            <img src="/images/pafn-commitment-02.webp" alt="讓愛飛翔 職能獻愛慈善晚宴 說明文件" className="w-full rounded-lg border" loading="lazy" />
          </aside>
        </div>
      </section>

      <section id="support" className="section-y scroll-mt-24 bg-surface">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="Support" title="捐款支持">
            <p>歡迎支持協會的公益行動。如欲捐款或贊助，請直接與協會聯繫，我們將提供相關資訊。</p>
          </SectionHeading>
          <div className="rounded-lg border bg-card p-8">
            <p>Email：<a href={`mailto:${org.email}`} className="font-semibold text-primary hover:underline">{org.email}</a></p>
            <p className="mt-2">Phone：<a href={org.phoneHref} className="font-semibold text-primary hover:underline">{org.phone}</a></p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={mailto("捐款支持洽詢")} className={btn()}>來信洽詢捐款</a>
              <Link to="/慈善晚宴" className={btn({ variant: "outline" })}>慈善晚宴</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
