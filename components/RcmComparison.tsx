import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type ComparisonPoint = {
  icon: IconName;
  text: string;
};

export type ComparisonColumn = {
  title: string;
  subtitle: string;
  items: ComparisonPoint[];
  emphasized?: boolean;
};

type RcmComparisonProps = {
  heading: string;
  columns: [ComparisonColumn, ComparisonColumn];
  band?: "bg" | "paper" | "tint";
};

/** Side-by-side In-House vs Outsourced RCM comparison. */
export function RcmComparison({
  heading,
  columns,
  band = "tint",
}: RcmComparisonProps) {
  return (
    <Section band={band}>
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mx-auto mb-10 max-w-[30ch] text-center text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>

        <div className="grid gap-0 overflow-hidden rounded-lg border border-divider bg-band-paper shadow-[var(--shadow-md)] md:grid-cols-2">
          {columns.map((column) => (
            <div
              key={column.title}
              className={
                column.emphasized
                  ? "border-t border-divider bg-neutral-200/60 p-6 sm:p-8 md:border-t-0 md:border-l"
                  : "p-6 sm:p-8"
              }
            >
              <h3 className="mb-1 text-[20px] font-semibold text-text">
                {column.title}
              </h3>
              <p className="mb-6 text-[14px] text-neutral-600">{column.subtitle}</p>

              <ul className="m-0 flex list-none flex-col gap-5 p-0">
                {column.items.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <Icon
                      name={item.icon}
                      size={20}
                      className={
                        column.emphasized
                          ? "mt-0.5 shrink-0 text-emerald-600"
                          : "mt-0.5 shrink-0 text-neutral-500"
                      }
                    />
                    <span className="text-[14px] leading-[1.55] text-neutral-700">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
