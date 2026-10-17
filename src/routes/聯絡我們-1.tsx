import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/Forms";
import { org } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/聯絡我們-1")({
  head: () => seo({ title: "聯絡我們 | 加拿大華人職能發展協會", description: "聯絡加拿大華人職能發展協會：電子郵件 info@pdaic.ca，電話 (778) 233-0005。", path: "/聯絡我們-1" }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero title="聯絡我們" en="Get in Touch" />
      <section className="section-y">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="editorial-rule space-y-8 lg:col-span-4">
            <p className="text-lg text-muted-foreground">歡迎各位加入我們加華協會大家庭。有任何問題，歡迎與我們聯繫。</p>
            <div><p className="eyebrow text-secondary">Email</p><a href={`mailto:${org.email}`} className="text-lg font-semibold text-primary hover:underline">{org.email}</a></div>
            <div><p className="eyebrow text-secondary">Phone</p><a href={org.phoneHref} className="text-lg font-semibold text-primary hover:underline">{org.phone}</a></div>
            <div><p className="eyebrow text-secondary">通訊地址</p><address className="not-italic">{org.address.map((l) => <span key={l} className="block">{l}</span>)}</address></div>
            <div><p className="eyebrow text-secondary">Registered Charity</p><p>{org.registration}</p></div>
          </div>
          <div className="rounded-lg border bg-card p-6 md:p-10 lg:col-span-8"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
