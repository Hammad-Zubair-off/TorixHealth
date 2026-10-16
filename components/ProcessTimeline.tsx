import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type ProcessStep = {
  title: string;
  description: string;
  icon?: IconName;
};

type ProcessTimelineProps = {
  heading: string;
  subheading?: string;
  steps: ProcessStep[];
  band?: "bg" | "paper" | "tint";
};

const DEFAULT_ICONS: IconName[] = [
  "check",
  "clipboard",
  "fileText",
  "layers",
  "monitor",
  "clock",
  "alert",
  "headphones",
  "activity",
];

/** Standardized multi-step billing process with visible icon markers. */
export function ProcessTimeline({
  heading,
  subheading,
  steps,
  band = "paper",
}: ProcessTimelineProps) {
  return (
    <Section band={band}>
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 max-w-[28ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="mb-10 max-w-[64ch] text-[15px] text-neutral-600">
            {subheading}
          </p>
        ) : (
          <div className="mb-10" />
        )}

        <ol className="m-0 grid list-none grid-cols-1 gap-x-6 gap-y-10 p-0 sm:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => {
            const icon = step.icon ?? DEFAULT_ICONS[index % DEFAULT_ICONS.length];

            return (
              <li key={step.title} className="relative flex flex-col items-start">
                <div className="relative mb-4 flex size-[72px] items-center justify-center">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-accent/12"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-[6px] rounded-full bg-accent/10"
                  />
                  <span className="relative flex size-12 items-center justify-center rounded-full bg-accent text-white shadow-[0_10px_28px_rgba(10,80,208,0.32)]">
                    <Icon name={icon} size={22} className="text-white" />
                  </span>
                  <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-band-paper text-[11px] font-semibold text-accent-700 shadow-[var(--shadow-sm)] ring-1 ring-divider">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mb-2 text-[17px] font-semibold text-text">
                  {step.title}
                </h3>
                <p className="max-w-[42ch] text-[14px] leading-[1.6] text-neutral-600">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
