import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container, Kicker, Section } from "@/components/Container";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type HeroProps = {
  breadcrumb?: BreadcrumbItem[];
  eyebrow?: string;
  headline: string;
  /** Word/phrase within headline to render in accent color (case-sensitive match). */
  highlightWord?: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  consultationNote?: string;
  visualCaption?: string;
  visual?: React.ReactNode;
  /** When true, CTAs sit side-by-side without bordered wrapper (brand mockup). */
  brandLayout?: boolean;
};

function HeadlineWithHighlight({
  headline,
  highlightWord,
}: {
  headline: string;
  highlightWord?: string;
}) {
  if (!highlightWord || !headline.includes(highlightWord)) {
    return <>{headline}</>;
  }
  const parts = headline.split(highlightWord);
  return (
    <>
      {parts[0]}
      <span className="text-accent">{highlightWord}</span>
      {parts.slice(1).join(highlightWord)}
    </>
  );
}

export function Hero({
  breadcrumb,
  eyebrow,
  headline,
  highlightWord,
  subheadline,
  primaryCta,
  secondaryCta,
  consultationNote,
  visualCaption,
  visual,
  brandLayout = false,
}: HeroProps) {
  return (
    <Section band="wash" className={cn(brandLayout && "pb-0")}>
      <Container
        className={cn(
          "grid items-center gap-[clamp(36px,5vw,72px)] py-[clamp(56px,6.5vw,96px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]",
          brandLayout && "pb-[clamp(72px,8vw,112px)]",
        )}
      >
        <div>
          {breadcrumb && breadcrumb.length > 0 ? (
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex flex-wrap items-center gap-2 text-[13px] text-neutral-600"
            >
              {breadcrumb.map((item, index) => {
                const isLast = index === breadcrumb.length - 1;
                return (
                  <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-neutral-400">
                        /
                      </span>
                    ) : null}
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="no-underline transition-colors duration-150 hover:text-accent-700"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        className={cn(isLast && "font-medium text-text")}
                        aria-current={isLast ? "page" : undefined}
                      >
                        {item.label}
                      </span>
                    )}
                  </span>
                );
              })}
            </nav>
          ) : null}

          {eyebrow ? (
            <span
              className={cn(
                "mb-5 inline-flex items-center gap-2 rounded-full border border-accent-300 bg-band-paper px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-accent-700 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md",
              )}
            >
              {brandLayout ? (
                <Icon name="shield" size={14} className="text-accent shrink-0" />
              ) : null}
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mb-6 max-w-[14ch] text-[clamp(36px,4.2vw,56px)] leading-[1.05] text-text">
            <HeadlineWithHighlight headline={headline} highlightWord={highlightWord} />
          </h1>
          <p className="mb-8 max-w-[46ch] text-[18px] leading-[1.6] text-neutral-800">
            {subheadline}
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <Button href={primaryCta.href} variant="primary" size="hero" arrow={brandLayout}>
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size={brandLayout ? "hero" : "default"}
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
          {consultationNote ? (
            <p className="mt-5 flex max-w-[44ch] items-start gap-2 text-[13px] text-neutral-600">
              {brandLayout ? (
                <Icon name="shield" size={14} className="mt-0.5 shrink-0 text-accent" />
              ) : null}
              <span>{consultationNote}</span>
            </p>
          ) : null}
        </div>

        <div className={cn("min-h-[280px]")}>
          {visual ?? <HeroVisualPlaceholder caption={visualCaption} />}
        </div>
      </Container>
    </Section>
  );
}

export function HeroBrandVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px]">
      {/* Ambient glow behind the transparent subject */}
      <div
        aria-hidden="true"
        className="absolute left-[8%] top-[4%] h-[70%] w-[84%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(167,148,245,0.4)_0%,rgba(107,77,230,0.12)_48%,transparent_70%)] blur-[2px]"
      />

      <div className="relative z-[1] w-full">
        <Image
          src="/brand/hero-doctor.png"
          alt="Healthcare professional representing Torix Solutions billing partnership"
          width={720}
          height={912}
          className="relative mx-auto h-auto w-full select-none drop-shadow-[0_20px_40px_rgba(42,31,110,0.16)]"
          priority
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 440px, 480px"
        />
        {/* Soft fade into section wash at the feet */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[14%] bg-gradient-to-t from-[color-mix(in_srgb,var(--color-bg)_92%,transparent)] via-[color-mix(in_srgb,var(--color-bg)_35%,transparent)] to-transparent"
        />
      </div>

      {/* Floating UI cards — sample demo metrics (revise later) */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        {/* Claims — bottom left */}
        <div className="absolute bottom-[20%] left-0 hidden w-[148px] rounded-xl bg-accent px-3.5 py-3 text-white shadow-lg sm:block sm:bottom-[24%] sm:left-[-4%]">
          <div className="mb-1 flex items-center justify-between text-[11px] font-medium text-white/85">
            Claims
            <Icon name="fileText" size={14} className="opacity-80" />
          </div>
          <p className="font-[family-name:var(--font-heading)] text-[20px] font-semibold leading-none">
            1,243
          </p>
          <p className="mt-1 text-[10px] text-white/70">Processed this month</p>
        </div>

        {/* A/R — right */}
        <div className="absolute bottom-[10%] right-0 w-[min(156px,42%)] rounded-xl border border-white/80 bg-band-paper/95 p-3 shadow-lg backdrop-blur-sm sm:bottom-[16%] sm:right-[-4%] sm:w-[164px] sm:p-3.5">
          <p className="mb-2 text-[11px] font-semibold text-neutral-700">A/R Follow Up</p>
          <div className="flex items-center gap-2.5">
            <div
              className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
              style={{
                background:
                  "conic-gradient(var(--color-accent) 0 92%, var(--color-accent-200) 0)",
              }}
              aria-hidden="true"
            >
              <span className="absolute inset-[5px] flex items-center justify-center rounded-full bg-band-paper text-[11px] font-bold text-accent">
                92%
              </span>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500">Resolution</p>
              <p className="text-[12px] font-semibold leading-snug text-text">
                Resolution Rate
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: single compact claims chip */}
        <div className="absolute bottom-[14%] left-0 rounded-lg bg-accent px-2.5 py-2 text-white shadow-md sm:hidden">
          <p className="text-[10px] font-medium text-white/85">Claims</p>
          <p className="text-[13px] font-semibold">1,243</p>
        </div>
      </div>
    </div>
  );
}

function HeroVisualPlaceholder({ caption }: { caption?: string }) {
  return (
    <div
      className="relative h-full min-h-[280px] overflow-hidden rounded-lg border border-accent-300 bg-band-paper p-6 shadow-md"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(107,77,230,0.07) 0 8px, transparent 8px 16px)",
      }}
    >
      <div className="relative flex flex-col gap-4">
        <Kicker>Claim workflow</Kicker>
        <div className="rounded-md border border-divider bg-bg p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2.5 text-accent-700">
            <Icon name="activity" size={20} />
            <span className="text-[15px] font-medium text-text">
              Scrub → Submit → Post
            </span>
          </div>
          <div className="grid gap-2">
            <div className="h-2.5 w-4/5 rounded-sm bg-accent-200" />
            <div className="h-2.5 w-3/5 rounded-sm bg-neutral-200" />
            <div className="h-2.5 w-2/3 rounded-sm bg-neutral-200" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["Scrub", "Submit", "Post"].map((label) => (
            <div
              key={label}
              className="rounded-md border border-divider bg-[linear-gradient(150deg,var(--color-accent-100),var(--band-paper)_70%)] p-3 text-center"
            >
              <p className="text-[12px] font-medium text-accent-700">{label}</p>
            </div>
          ))}
        </div>
        {caption ? (
          <p className="text-[12px] text-neutral-600">{caption}</p>
        ) : null}
      </div>
    </div>
  );
}
