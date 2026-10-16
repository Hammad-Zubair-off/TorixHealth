import { Container, Section } from "@/components/Container";
import type { EhrSystem } from "@/content/ehr-systems";

type EhrSystemsProps = {
  heading: string;
  subheading: string;
  systems: EhrSystem[];
  band?: "bg" | "paper" | "tint";
};

/** Standardized EMR/EHR logo-style grid for systems Torix bills with. */
export function EhrSystems({
  heading,
  subheading,
  systems,
  band = "paper",
}: EhrSystemsProps) {
  return (
    <Section band={band}>
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 max-w-[28ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        <p className="mb-10 max-w-[68ch] text-[15px] leading-[1.6] text-neutral-600">
          {subheading}
        </p>

        <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {systems.map((system) => (
            <li key={system.name}>
              <div className="flex h-full min-h-[108px] flex-col items-center justify-center gap-3 rounded-md border border-divider bg-band-paper px-3 py-5 text-center shadow-[var(--shadow-sm)] transition-[transform,box-shadow] duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]">
                <span
                  className="flex size-12 items-center justify-center rounded-full bg-accent-100 text-[13px] font-semibold tracking-wide text-accent-700"
                  aria-hidden="true"
                >
                  {system.short}
                </span>
                <span className="text-[13px] font-semibold leading-snug text-text">
                  {system.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
