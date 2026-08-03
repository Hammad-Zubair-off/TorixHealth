import { Button } from "@/components/Button";
import { Container, Kicker, Section } from "@/components/Container";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  consultationNote?: string;
  visualCaption?: string;
  visual?: React.ReactNode;
};

export function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  consultationNote,
  visualCaption,
  visual,
}: HeroProps) {
  return (
    <Section band="wash">
      <Container className="grid items-center gap-[clamp(36px,5vw,72px)] py-[clamp(56px,6.5vw,96px)] [grid-template-columns:repeat(auto-fit,minmax(340px,1fr))]">
        <div>
          {eyebrow ? (
            <span className="mb-5 inline-flex rounded-full border border-accent-300 bg-band-paper px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-accent-700 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mb-6 max-w-[12ch] text-[clamp(38px,4.6vw,62px)] leading-[1.03] text-text">
            {headline}
          </h1>
          <p className="mb-8 max-w-[46ch] text-[18px] leading-[1.6] text-neutral-800">
            {subheadline}
          </p>
          <div className="inline-flex flex-wrap items-center gap-[18px] rounded-lg border border-accent-300 bg-band-paper/80 p-3 shadow-sm">
            <Button href={primaryCta.href} variant="primary" size="hero">
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="ghost">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
          {consultationNote ? (
            <p className="mt-5 max-w-[40ch] text-[13px] text-neutral-600">
              {consultationNote}
            </p>
          ) : null}
        </div>

        <div className={cn("min-h-[280px]")}>
          {visual ?? (
            <HeroVisualPlaceholder caption={visualCaption} />
          )}
        </div>
      </Container>
    </Section>
  );
}

function HeroVisualPlaceholder({ caption }: { caption?: string }) {
  return (
    <div
      className="relative h-full min-h-[280px] overflow-hidden rounded-lg border border-accent-300 bg-band-paper p-6 shadow-md"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(121,108,191,0.07) 0 8px, transparent 8px 16px)",
      }}
    >
      <div className="relative flex flex-col gap-4">
        <Kicker>Operations + software</Kicker>
        <div className="rounded-md border border-divider bg-bg p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2.5 text-accent-700">
            <Icon name="activity" size={20} />
            <span className="text-[15px] font-medium text-text">
              Billing workspace
            </span>
          </div>
          <div className="grid gap-2">
            <div className="h-2.5 w-4/5 rounded-sm bg-accent-200" />
            <div className="h-2.5 w-3/5 rounded-sm bg-neutral-200" />
            <div className="h-2.5 w-2/3 rounded-sm bg-neutral-200" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-md border border-divider bg-[linear-gradient(150deg,var(--color-accent-100),var(--band-paper)_70%)] p-4">
            <Icon name="layers" size={22} className="mb-2 text-accent-700" />
            <p className="text-[13px] text-neutral-700">Services</p>
          </div>
          <div className="rounded-md bg-gradient-to-br from-band-deep to-band-deep-2 p-4 text-band-deep-text">
            <Icon name="monitor" size={22} className="mb-2 text-accent-300" />
            <p className="text-[13px] text-band-deep-muted">Solutions</p>
          </div>
        </div>
        {caption ? (
          <p className="text-[12px] text-neutral-600">{caption}</p>
        ) : null}
      </div>
    </div>
  );
}
