import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "nav" | "footer" | "header";
} & React.HTMLAttributes<HTMLElement>;

export function Container({
  children,
  className,
  as: Tag = "div",
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-[clamp(24px,4vw,44px)]",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  band?: "bg" | "paper" | "tint" | "deep" | "wash" | "none";
};

const bands: Record<NonNullable<SectionProps["band"]>, string> = {
  none: "",
  bg: "bg-bg",
  paper: "bg-band-paper",
  tint: "bg-band-tint",
  deep: "bg-gradient-to-br from-band-deep to-band-deep-2 text-band-deep-text",
  wash: "bg-[radial-gradient(ellipse_80%_60%_at_85%_35%,rgba(107,77,230,0.14),transparent_55%),radial-gradient(ellipse_50%_45%_at_12%_80%,rgba(107,77,230,0.08),transparent_50%),linear-gradient(170deg,#ebe6ff_0%,var(--color-bg)_58%,#f8f7ff_100%)]",
};

export function Section({
  children,
  className,
  id,
  band = "bg",
}: SectionProps) {
  return (
    <section id={id} className={cn(bands[band], className)}>
      {children}
    </section>
  );
}

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.08em] text-accent-700",
        className,
      )}
    >
      {children}
    </p>
  );
}
