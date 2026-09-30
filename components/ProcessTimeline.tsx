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
};

const DEFAULT_ICONS: IconName[] = [
  "headphones",
  "shield",
  "monitor",
  "clipboard",
  "handshake",
  "lock",
  "users",
  "fileText",
];

export function ProcessTimeline({
  heading,
  subheading,
  steps,
}: ProcessTimelineProps) {
  return (
    <Section band="paper">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 text-center text-[clamp(14px,1.35vw,16px)] font-semibold uppercase tracking-[0.16em] text-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="mx-auto mb-12 max-w-[52ch] text-center text-[15px] text-neutral-600">
            {subheading}
          </p>
        ) : (
          <div className="mb-12" />
        )}

        <ol className="m-0 flex list-none flex-col gap-10 p-0 lg:flex-row lg:gap-0">
          {steps.map((step, index) => {
            const icon = step.icon ?? DEFAULT_ICONS[index % DEFAULT_ICONS.length];
            const isLast = index === steps.length - 1;

            return (
              <li
                key={step.title}
                className="relative flex flex-1 flex-col items-center px-2 text-center"
              >
                {!isLast ? (
                  <div
                    aria-hidden
                    className="absolute top-[36px] left-1/2 z-0 hidden h-px w-full bg-neutral-300 lg:block"
                  >
                    <span className="absolute top-1/2 right-0 size-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
                  </div>
                ) : null}

                <div className="relative z-10 mb-5 flex size-[72px] items-center justify-center">
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
                </div>

                <h3 className="mb-2 text-[16px] font-semibold text-text">
                  {step.title}
                </h3>
                <p className="max-w-[22ch] text-[13px] leading-relaxed text-neutral-600">
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
