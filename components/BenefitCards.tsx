import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type BenefitItem = {
  icon: IconName;
  title: string;
  description: string;
};

type BenefitCardsProps = {
  heading: string;
  subheading?: string;
  items: BenefitItem[];
};

/** Open / light card treatment for differentiator blocks */
export function BenefitCards({ heading, subheading, items }: BenefitCardsProps) {
  return (
    <Section band="paper">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 max-w-[20ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="mb-8 max-w-[56ch] text-[15px] text-neutral-600">{subheading}</p>
        ) : (
          <div className="mb-8" />
        )}
        <ul className="m-0 grid list-none gap-8 p-0 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {items.map((item) => (
            <li key={item.title} className="flex gap-3.5">
              <Icon name={item.icon} size={24} className="mt-0.5 shrink-0 text-accent-700" />
              <div>
                <h3 className="mb-2 text-[18px] text-text">{item.title}</h3>
                <p className="text-[14px] leading-[1.55] text-neutral-600">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
