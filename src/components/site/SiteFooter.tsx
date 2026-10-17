import { Link } from "@tanstack/react-router";
import { org } from "@/data/site";
import { NewsletterForm } from "./Forms";

export function SiteFooter() {
  return (
    <footer className="bg-plum text-plum-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img src="/images/pdaic-logo-symbol.webp" alt={`${org.nameZh} 標誌`} width={48} height={48} className="h-12 w-12 rounded-md" loading="lazy" />
            <div className="leading-tight">
              <p className="font-bold">{org.nameZh}</p>
              <p className="text-xs text-plum-foreground/70">{org.nameEn}</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-plum-foreground/75">歡迎各位加入我們加華協會大家庭。BC省登記立案之非營利社團，致力於專業職能培訓、商務交流與社區公益。</p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-4 text-gold">聯絡資訊</p>
          <ul className="space-y-2 text-sm">
            <li>Email：<a className="hover:text-gold" href={`mailto:${org.email}`}>{org.email}</a></li>
            <li>Phone：<a className="hover:text-gold" href={org.phoneHref}>{org.phone}</a></li>
            <li className="text-plum-foreground/75">Registered Charity: {org.registration}</li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-4 text-gold">快速連結</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/關於協會" className="hover:text-gold">關於協會</Link></li>
            <li><Link to="/協會成員" className="hover:text-gold">協會成員</Link></li>
            <li><Link to="/課程活動" className="hover:text-gold">課程活動</Link></li>
            <li><Link to="/成為會員" className="hover:text-gold">成為會員</Link></li>
            <li><Link to="/協會給pafn的承諾" hash="support" className="hover:text-gold">捐款支持</Link></li>
            <li><Link to="/聯絡我們-1" className="hover:text-gold">聯絡我們</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-4 text-gold">協會電子報</p>
          <NewsletterForm compact />
        </div>
      </div>
      <div className="border-t border-plum-foreground/15">
        <p className="container-site py-5 text-xs text-plum-foreground/60">
          © 2026 Professional Development Association in Canada. All rights reserved. | Web Design by{" "}
          <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Bluluma</a>
        </p>
      </div>
    </footer>
  );
}
