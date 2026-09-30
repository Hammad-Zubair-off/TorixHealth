import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";
import { cn } from "@/lib/utils";

export type TrustItem = {
  icon: IconName;
  label: string;
  description?: string;
};

type TrustBarProps = {
  items: TrustItem[];
  /** Deep-blue rounded bar matching brand mockup (Home). */
  variant?: "default" | "brand";
};

export function TrustBar({ items, variant = "default" }: TrustBarProps) {
  if (variant === "brand") {
    return (
      <Section band="none" className="relative z-10 -mt-10 pb-6 md:-mt-14 md:pb-8">
        <Container>
          <ul
            className={cn(
              "m-0 grid list-none grid-cols-2 gap-6 rounded-2xl bg-gradient-to-br from-band-deep to-band-deep-2 px-5 py-7 text-band-deep-text shadow-lg sm:gap-8 sm:px-8 sm:py-8 md:grid-cols-4 md:gap-6 md:px-10 md:py-9",
            )}
          >
            {items.map((item) => (
              <li key={item.label} className="flex flex-col items-start gap-3 sm:flex-row sm:items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white">
                  <Icon name={item.icon} size={18} />
                </span>
                <div>
                  <span className="block text-[13px] font-semibold leading-snug text-white sm:text-[14px]">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="mt-1 block text-[12px] leading-snug text-band-deep-muted">
                      {item.description}
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    );
  }

  return (
    <Section band="paper" className="border-y border-divider">
      <Container className="py-7">
        <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
          {items.map((item) => (
            <li
              key={item.label}
              className="card-lift flex items-start gap-3 rounded-md border border-transparent px-3 py-3 hover:border-accent-200 hover:bg-accent-100/60 hover:shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-100 text-accent transition-colors duration-200">
                <Icon name={item.icon} size={18} />
              </span>
              <div>
                <span className="block text-[13px] font-semibold text-text sm:text-[14px]">
                  {item.label}
                </span>
                {item.description ? (
                  <span className="mt-0.5 block text-[12px] leading-snug text-neutral-600">
                    {item.description}
                  </span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
