import Image from "next/image";
import { Container, Section } from "@/components/Container";
import type { PartnerLogo } from "@/content/ehr-systems";
import { cn } from "@/lib/utils";

type LogoMarqueeProps = {
  heading: string;
  subheading: string;
  items: PartnerLogo[];
  band?: "bg" | "paper" | "tint";
  /** Animation duration in seconds — longer = slower. */
  durationSec?: number;
};

const fadeFrom: Record<NonNullable<LogoMarqueeProps["band"]>, string> = {
  bg: "from-bg",
  paper: "from-band-paper",
  tint: "from-band-tint",
};

function LogoCard({ item }: { item: PartnerLogo }) {
  return (
    <div
      className={cn(
        "flex h-[96px] w-[210px] shrink-0 items-center justify-center rounded-md border border-divider bg-band-paper px-4 py-3 shadow-[var(--shadow-sm)]",
      )}
    >
      {item.src ? (
        <div className="relative h-12 w-full">
          <Image
            src={item.src}
            alt={item.name}
            fill
            className="object-contain"
            sizes="180px"
          />
        </div>
      ) : (
        <span className="text-center text-[14px] font-semibold leading-snug text-text">
          {item.name}
        </span>
      )}
    </div>
  );
}

/** Infinite single-line scrolling logo strip with names. */
export function LogoMarquee({
  heading,
  subheading,
  items,
  band = "paper",
  durationSec = 40,
}: LogoMarqueeProps) {
  const track = [...items, ...items];

  return (
    <Section band={band}>
      <Container className="pt-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 max-w-[28ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        <p className="mb-10 max-w-[68ch] text-[15px] leading-[1.6] text-neutral-600">
          {subheading}
        </p>
      </Container>

      <div
        className="relative overflow-hidden pb-[clamp(56px,6.5vw,92px)]"
        role="region"
        aria-label={heading}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent sm:w-20",
            fadeFrom[band],
          )}
        />
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent sm:w-20",
            fadeFrom[band],
          )}
        />

        <ul
          className="logo-marquee-track m-0 flex w-max list-none gap-4 px-4"
          style={{ ["--marquee-duration" as string]: `${durationSec}s` }}
        >
          {track.map((item, index) => (
            <li key={`${item.name}-${index}`} aria-hidden={index >= items.length}>
              <LogoCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
