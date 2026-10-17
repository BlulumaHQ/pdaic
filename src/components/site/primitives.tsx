import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const btn = cva(
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-secondary",
        outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        light: "bg-background text-primary hover:bg-surface",
        ghostLight: "border border-plum-foreground/40 text-plum-foreground hover:bg-plum-foreground/10",
        link: "px-0 py-0 text-primary underline-offset-4 hover:underline",
      },
      size: { sm: "px-4 py-2 text-xs", md: "" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);
export type BtnProps = VariantProps<typeof btn>;

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return <p className={cn("eyebrow mb-4", light ? "text-gold" : "text-secondary")}>{children}</p>;
}

export function PageHero({ title, en, intro }: { title: string; en: string; intro?: ReactNode }) {
  return (
    <section className="border-b bg-surface">
      <div className="container-site py-16 lg:py-24">
        <div className="editorial-rule fade-up max-w-3xl">
          <p className="eyebrow mb-4 text-secondary">{en}</p>
          <h1 className="text-4xl font-bold text-primary md:text-6xl">{title}</h1>
          {intro && <div className="mt-6 text-lg text-muted-foreground">{intro}</div>}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, children, light }: { eyebrow?: string; title: string; children?: ReactNode; light?: boolean }) {
  return (
    <div className={cn("max-w-2xl", light ? "editorial-rule-light" : "editorial-rule")}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={cn("text-3xl font-bold md:text-[2.5rem] md:leading-tight", light ? "text-plum-foreground" : "text-primary")}>{title}</h2>
      {children && <div className={cn("mt-5 text-base md:text-lg", light ? "text-plum-foreground/80" : "text-muted-foreground")}>{children}</div>}
    </div>
  );
}
