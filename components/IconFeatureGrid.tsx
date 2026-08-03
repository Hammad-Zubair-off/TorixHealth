import Link from "next/link";
import { Container, Kicker, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  icon: IconName;
  title: string;
  description?: string;
  href?: string;
  /** Link label when `href` is set. Defaults to “Explore →”. */
  ctaLabel?: string;
};

type IconFeatureGridProps = {
  kicker?: string;
  heading: string;
  subheading?: string;
  footerNote?: string;
  items: FeatureItem[];
  variant?: "light" | "deep" | "open";
  band?: "bg" | "paper" | "tint" | "deep" | "none";
  minCardWidth?: number;
  className?: string;
};

export function IconFeatureGrid({
  kicker,
  heading,
  subheading,
  footerNote,
  items,
  variant = "light",
  band = "bg",
  minCardWidth = 260,
  className,
}: IconFeatureGridProps) {
  const deep = variant === "deep";
  const open = variant === "open";

  return (
    <Section band={band} className={className}>
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        {kicker ? (
          <Kicker className={cn("mb-3", deep && "text-accent-300")}>{kicker}</Kicker>
        ) : null}
        <h2
          className={cn(
            "mb-3 max-w-[20ch] text-[clamp(26px,2.7vw,34px)]",
            deep ? "text-band-deep-text" : "text-text",
          )}
        >
          {heading}
        </h2>
        {subheading ? (
          <p
            className={cn(
              "mb-8 max-w-[56ch] text-[15px]",
              deep ? "text-band-deep-muted" : "text-neutral-600",
            )}
          >
            {subheading}
          </p>
        ) : (
          <div className="mb-8" />
        )}

        <ul
          className="m-0 grid list-none gap-4 p-0"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(${minCardWidth}px, 1fr))`,
          }}
        >
          {items.map((item) => {
            const body = (
              <>
                <Icon
                  name={item.icon}
                  size={24}
                  className={cn(
                    "mb-3",
                    deep ? "text-accent-300" : "text-accent-700",
                  )}
                />
                <h3
                  className={cn(
                    "mb-2 text-[16px]",
                    deep ? "text-band-deep-text" : "text-text",
                    open && "text-[18px]",
                  )}
                >
                  {item.title}
                </h3>
                {item.description ? (
                  <p
                    className={cn(
                      "text-[13px] leading-[1.5]",
                      deep ? "text-band-deep-muted" : "text-neutral-600",
                    )}
                  >
                    {item.description}
                  </p>
                ) : null}
                {item.href ? (
                  <span
                    className={cn(
                      "mt-3 inline-flex text-[13px] font-medium",
                      deep ? "text-accent-300" : "text-accent-700",
                    )}
                  >
                    {item.ctaLabel ?? "Explore →"}
                  </span>
                ) : null}
              </>
            );

            const cardClass = cn(
              "flex flex-col rounded-md p-7 card-lift",
              open
                ? "bg-transparent p-0 sm:p-2"
                : deep
                  ? "card-lift-deep border border-white/10 bg-white/5"
                  : "card-lift-light border border-divider bg-bg",
            );

            return (
              <li key={item.title}>
                {item.href ? (
                  <Link href={item.href} className={cn(cardClass, "no-underline")}>
                    {body}
                  </Link>
                ) : (
                  <div className={cardClass}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>

        {footerNote ? (
          <p
            className={cn(
              "mt-8 max-w-[68ch] text-[14px] leading-[1.55]",
              deep ? "text-band-deep-muted" : "text-neutral-600",
            )}
          >
            {footerNote}
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
