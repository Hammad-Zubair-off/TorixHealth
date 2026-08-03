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
  wash: "bg-[linear-gradient(170deg,var(--color-accent-200)_0%,var(--color-bg)_62%)]",
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
