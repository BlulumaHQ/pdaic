import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { btn } from "@/components/site/primitives";
import { cn } from "@/lib/utils";
import { org } from "@/data/site";

type Slide =
  | { kind: "photo"; src: string; alt: string }
  | { kind: "content" };

// Slide order: 團隊合影 → 原始首頁內容 → 楓紅團體照
const slides: Slide[] = [
  { kind: "photo", src: "/images/home-hero-team-portrait.webp", alt: "加拿大華人職能發展協會理監事團隊合影" },
  { kind: "content" },
  { kind: "photo", src: "/images/home-hero-team-walk.webp", alt: "協會成員在楓紅季節一同走在社區街道上" },
];

const SLIDE_COUNT = slides.length;
const INTERVAL_MS = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % SLIDE_COUNT), INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [paused]);

  const go = (i: number) => setIndex((i + SLIDE_COUNT) % SLIDE_COUNT);

  return (
    <section
      className="relative overflow-hidden bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="協會形象輪播"
    >
      {slides.map((slide, i) => {
        const active = index === i;
        const hiddenClass = active ? "" : "pointer-events-none absolute inset-0 opacity-0";

        if (slide.kind === "content") {
          return (
            <div
              key={`content-${i}`}
              className={cn(
                "container-site grid items-center gap-12 py-14 transition-opacity duration-700 lg:grid-cols-12 lg:py-24",
                hiddenClass,
              )}
              aria-hidden={!active}
            >
              <div className="fade-up lg:col-span-6">
                <p className="eyebrow mb-6 text-secondary">{org.nameEn}</p>
                <h1 className="text-[2.6rem] font-extrabold leading-[1.15] text-primary md:text-6xl lg:text-[4rem]">
                  連結專業・<br />啟發成長・<br />共創未來
                </h1>
                <p className="editorial-rule mt-8 max-w-lg text-lg text-muted-foreground">
                  致力於推動專業職能發展、商務交流與終身學習，連結人才、產業及社區，攜手創造更美好的未來。
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/關於協會" className={btn()}>認識協會</Link>
                  <Link to="/成為會員" className={btn({ variant: "outline" })}>加入會員</Link>
                </div>
              </div>
              <div className="lg:col-span-6">
                <figure className="relative">
                  <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-lg border border-lavender lg:block" aria-hidden />
                  <img src="/images/home-josephine-wu-speech.webp" alt="協會會長吳秀美於慈善晚宴宣傳影片中致詞" className="relative aspect-[3/2] w-full rounded-lg object-cover" width={960} height={540} />
                  <figcaption className="mt-3 text-xs text-muted-foreground">會長 吳秀美 Josephine Wu 為慈善晚宴致詞</figcaption>
                </figure>
              </div>
            </div>
          );
        }

        return (
          <div
            key={slide.src}
            className={cn(
              "transition-opacity duration-700",
              active
                ? "relative aspect-[3/2] opacity-100 lg:aspect-[2/1]"
                : "pointer-events-none absolute inset-0 opacity-0",
            )}
            aria-hidden={!active}
          >
            <img
              src={slide.src}
              alt={active ? slide.alt : ""}
              className="absolute inset-0 h-full w-full object-cover object-top"
              width={1600}
              height={1066}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        );
      })}

      {/* Controls */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="上一張"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background/80 p-2 text-primary shadow-sm transition-colors hover:bg-surface"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="下一張"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background/80 p-2 text-primary shadow-sm transition-colors hover:bg-surface"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-background/70 px-3 py-2 shadow-sm backdrop-blur-sm">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`切換到第 ${i + 1} 張`}
            aria-current={i === index}
            className={cn("h-2.5 w-2.5 rounded-full transition-colors", i === index ? "bg-primary" : "bg-lavender hover:bg-secondary")}
          />
        ))}
      </div>
    </section>
  );
}
