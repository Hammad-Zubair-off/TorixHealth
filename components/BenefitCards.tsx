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
  footerNote?: string;
  items: BenefitItem[];
};

/** Card treatment for differentiator / mission blocks */
export function BenefitCards({
  heading,
  subheading,
  footerNote,
  items,
}: BenefitCardsProps) {
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
        <ul className="m-0 grid list-none gap-4 p-0 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {items.map((item) => (
            <li key={item.title}>
              <div className="card-lift card-lift-light flex h-full flex-col rounded-md border border-divider bg-band-paper p-6">
                <Icon
                  name={item.icon}
                  size={24}
                  className="mb-3 shrink-0 text-accent-700"
                />
                <h3 className="mb-2 text-[18px] text-text">{item.title}</h3>
                <p className="text-[14px] leading-[1.55] text-neutral-600">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        {footerNote ? (
          <p className="mt-8 max-w-[68ch] text-[14px] leading-[1.55] text-neutral-600">
            {footerNote}
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
