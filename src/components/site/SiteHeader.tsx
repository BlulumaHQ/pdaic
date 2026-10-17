import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, HeartHandshake, Menu, X } from "lucide-react";
import { btn } from "./primitives";
import { org } from "@/data/site";

const nav = [
  { to: "/", label: "首頁" },
  { to: "/關於協會", label: "關於協會" },
  { to: "/協會成員", label: "協會成員" },
  { to: "/課程活動", label: "課程活動" },
] as const;
const charity = [
  { to: "/慈善晚宴", label: "慈善晚宴" },
  { to: "/協會給pafn的承諾", label: "協會給 PAFN 的承諾" },
] as const;
const tail = [
  { to: "/聯絡我們-1", label: "聯絡我們" },
] as const;

const linkCls = "whitespace-nowrap text-sm font-medium text-foreground transition-colors hover:text-primary";
const activeProps = { className: "text-primary font-semibold" };

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container-site flex h-10 items-center justify-end gap-3 border-b bg-surface/60">
        <Link to="/協會給pafn的承諾" hash="support" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary">
          <HeartHandshake className="h-4 w-4 text-primary" /> 捐款支持
        </Link>
        <Link to="/成為會員" className={btn({ size: "sm" })}>加入會員</Link>
      </div>
      <div className="container-site flex h-24 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-4" onClick={close} aria-label={`${org.nameZh} 首頁`}>
          <img src="/images/pdaic-logo-symbol.webp" alt="" width={64} height={64} className="h-16 w-16 rounded-md" />
          <span className="leading-tight">
            <span className="block text-xl font-bold text-primary">{org.nameZh}</span>
            <span className="hidden 2xl:block text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">{org.nameEn}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="主選單">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className={linkCls} activeProps={activeProps} activeOptions={{ exact: n.to === "/" }}>{n.label}</Link>
          ))}
          <div className="group relative">
            <button className={`${linkCls} inline-flex items-center gap-1`} aria-haspopup="true">
              慈善公益 <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="rounded-lg border bg-card p-2 shadow-lg">
                {charity.map((c) => (
                  <Link key={c.to} to={c.to} className="block rounded-md px-3 py-2 text-sm hover:bg-surface hover:text-primary">{c.label}</Link>
                ))}
              </div>
            </div>
          </div>
          {tail.map((n) => (
            <Link key={n.to} to={n.to} className={linkCls} activeProps={activeProps}>{n.label}</Link>
          ))}
        </nav>

        <button className="xl:hidden rounded-md p-2 text-primary" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "關閉選單" : "開啟選單"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t bg-background xl:hidden" aria-label="行動版選單">
          <div className="container-site flex flex-col py-4">
            {[...nav, ...charity, ...tail].map((n) => (
              <Link key={n.to} to={n.to} onClick={close} className="border-b py-3 text-base font-medium hover:text-primary" activeProps={activeProps} activeOptions={{ exact: n.to === "/" }}>{n.label}</Link>
            ))}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link to="/協會給pafn的承諾" hash="support" onClick={close} className={btn({ variant: "outline" })}>捐款支持</Link>
              <Link to="/成為會員" onClick={close} className={btn()}>加入會員</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
