import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "border border-transparent bg-accent text-white shadow-[0_8px_24px_rgba(107,92,219,0.28)] hover:bg-accent-700 hover:shadow-[0_14px_36px_rgba(107,92,219,0.34)] active:bg-accent-800",
  secondary:
    "border border-divider bg-band-paper text-text hover:border-accent-300 hover:bg-accent-100 hover:text-accent-700 active:bg-accent-200",
  ghost:
    "border border-transparent bg-transparent text-accent-700 hover:bg-accent-100 hover:text-accent active:bg-accent-200",
  outline:
    "border border-accent bg-transparent text-accent-700 hover:bg-accent hover:text-white hover:shadow-[0_8px_24px_rgba(107,92,219,0.28)]",
} as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: "default" | "hero";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-md text-[14px] font-semibold no-underline",
        "transition-[transform,box-shadow,background-color,border-color,color,filter] duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        size === "hero" ? "px-7 py-3.5 text-[15px]" : "px-5 py-2.5",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
