import { Container, Section } from "@/components/Container";
import { cn } from "@/lib/utils";

export type ProcessStep = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  heading: string;
  subheading?: string;
  steps: ProcessStep[];
};

export function ProcessTimeline({
  heading,
  subheading,
  steps,
}: ProcessTimelineProps) {
  return (
    <Section band="paper">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 text-[clamp(26px,2.7vw,34px)] text-text">{heading}</h2>
        {subheading ? (
          <p className="mb-8 max-w-[56ch] text-[15px] text-neutral-600">{subheading}</p>
        ) : (
          <div className="mb-8" />
        )}

        <ol className="m-0 grid list-none gap-4 p-0 [grid-template-columns:repeat(auto-fit,minmax(190px,1fr))]">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={cn(
                "card-lift card-lift-light rounded-md border border-divider bg-band-paper p-6",
                "flex gap-4 md:flex-col md:gap-0",
              )}
            >
              <div className="mb-0 font-mono text-[12px] leading-none text-accent-700 md:mb-3">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="mb-2 text-[16px] text-text">{step.title}</h3>
                <p className="text-[13px] text-neutral-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
