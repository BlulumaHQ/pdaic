import { useState, type FormEvent } from "react";
import { org } from "@/data/site";
import { btn } from "./primitives";
import { cn } from "@/lib/utils";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * No newsletter service is configured, so this form never claims a subscription.
 * After validation it hands the request to the visitor's email app, addressed to the association.
 */
export function NewsletterForm({ compact }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!emailRe.test(email.trim())) { setError("請輸入有效的電子郵件地址。"); return; }
    setError("");
    window.location.href = `mailto:${org.email}?subject=${encodeURIComponent("訂閱協會電子報")}&body=${encodeURIComponent(`請將以下電子郵件加入協會電子報名單：${email.trim()}`)}`;
    setSent(true);
  };
  return (
    <form onSubmit={submit} noValidate className="space-y-3">
      <label htmlFor={compact ? "nl-footer" : "nl-main"} className={compact ? "sr-only" : "block text-sm font-semibold"}>電子郵件</label>
      <div className={cn("flex gap-2", compact ? "flex-col" : "flex-col sm:flex-row")}>
        <input
          id={compact ? "nl-footer" : "nl-main"} type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="填寫您的 E-mail" aria-invalid={!!error}
          className={cn("w-full rounded-md border px-4 py-3 text-sm text-foreground bg-card", error && "border-destructive")}
        />
        <button type="submit" className={btn({ variant: compact ? "light" : "primary" })}>訂閱電子報</button>
      </div>
      {error && <p role="alert" className={cn("text-sm", compact ? "text-gold" : "text-destructive")}>{error}</p>}
      <p className={cn("text-xs", compact ? "text-plum-foreground/60" : "text-muted-foreground")} aria-live="polite">
        {sent ? "已開啟您的電子郵件程式；寄出後協會將為您登記訂閱。" : `送出後將以電子郵件寄至 ${org.email} 申請訂閱。`}
      </p>
    </form>
  );
}

type Field = "name" | "email" | "subject" | "message";

/** No form endpoint is configured: validated messages are handed to the visitor's email app. */
export function ContactForm() {
  const [v, setV] = useState<Record<Field, string>>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [hp, setHp] = useState("");
  const [opened, setOpened] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (hp) return;
    const er: Partial<Record<Field, string>> = {};
    if (!v.name.trim()) er.name = "請填寫姓名。";
    if (!emailRe.test(v.email.trim())) er.email = "請輸入有效的電子郵件地址。";
    if (!v.subject.trim()) er.subject = "請填寫主旨。";
    if (v.message.trim().length < 5) er.message = "請填寫留言內容。";
    setErrors(er);
    if (Object.keys(er).length) return;
    const body = `${v.message}\n\n—\n姓名：${v.name}\n電子郵件：${v.email}`;
    window.location.href = `mailto:${org.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const field = (k: Field, label: string, type = "text") => (
    <div>
      <label htmlFor={`c-${k}`} className="mb-2 block text-sm font-semibold">{label} <span className="text-primary">*</span></label>
      {k === "message" ? (
        <textarea id={`c-${k}`} rows={6} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `c-${k}-err` : undefined}
          className={cn("w-full rounded-md border bg-card px-4 py-3", errors[k] && "border-destructive")} />
      ) : (
        <input id={`c-${k}`} type={type} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `c-${k}-err` : undefined}
          className={cn("w-full rounded-md border bg-card px-4 py-3", errors[k] && "border-destructive")} />
      )}
      {errors[k] && <p id={`c-${k}-err`} className="mt-1 text-sm text-destructive">{errors[k]}</p>}
    </div>
  );

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">{field("name", "姓名")}{field("email", "電子郵件", "email")}</div>
      {field("subject", "主旨")}
      {field("message", "留言內容")}
      <div className="hidden" aria-hidden="true">
        <label>Website<input tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} /></label>
      </div>
      <button type="submit" className={btn()}>送出訊息</button>
      <p className="text-sm text-muted-foreground" aria-live="polite">
        {opened
          ? "已開啟您的電子郵件程式，請在郵件中按下寄出，訊息才會送達協會。"
          : `按下送出後，將以您的電子郵件程式寄至 ${org.email}。`}
      </p>
    </form>
  );
}
