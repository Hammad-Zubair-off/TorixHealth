import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Container";
import { Icon } from "@/components/icons";

export type PricingColumn = {
  items: string[];
  cta: { label: string; href: string };
};

type ServicePricingProps = {
  heading: string;
  columns: [PricingColumn, PricingColumn];
  band?: "bg" | "paper" | "tint";
};

/** Two-column included-services list with pricing heading and CTAs. */
export function ServicePricing({
  heading,
  columns,
  band = "tint",
}: ServicePricingProps) {
  return (
    <Section band={band}>
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mx-auto mb-10 max-w-[28ch] text-center text-[clamp(26px,2.7vw,34px)] text-accent-700">
          {heading}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-6">
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col items-center gap-5">
              <div className="w-full rounded-md border border-divider bg-band-paper p-6 shadow-[var(--shadow-md)] sm:p-7">
                <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-[1.5] text-neutral-700"
                    >
                      <span
                        className="mt-0.5 flex size-[22px] shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white"
                        aria-hidden="true"
                      >
                        <Icon name="arrowRight" size={12} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button href={column.cta.href} arrow>
                {column.cta.label}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
