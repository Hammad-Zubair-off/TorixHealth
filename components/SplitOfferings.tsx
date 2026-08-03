import { Button } from "@/components/Button";
import { Container, Kicker, Section } from "@/components/Container";

type SplitCard = {
  kicker: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

type SplitOfferingsProps = {
  heading: string;
  subheading: string;
  servicesCard: SplitCard;
  solutionsCard: SplitCard;
};

export function SplitOfferings({
  heading,
  subheading,
  servicesCard,
  solutionsCard,
}: SplitOfferingsProps) {
  return (
    <Section band="paper" className="border-b border-divider">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3.5 max-w-[18ch] text-[clamp(28px,3vw,38px)] text-text">
          {heading}
        </h2>
        <p className="mb-10 max-w-[56ch] text-[15px] text-neutral-600">{subheading}</p>

        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          <article className="card-lift card-lift-light flex flex-col rounded-lg border border-divider bg-bg p-[30px] shadow-sm">
            <Kicker className="mb-2">{servicesCard.kicker}</Kicker>
            <h3 className="mb-3 mt-2 text-[26px] text-text">{servicesCard.title}</h3>
            <p className="mb-6 flex-1 text-[14px] leading-[1.55] text-neutral-600">
              {servicesCard.description}
            </p>
            <Button href={servicesCard.cta.href} variant="outline" className="self-start">
              {servicesCard.cta.label}
            </Button>
          </article>

          <article className="card-lift card-lift-deep flex flex-col rounded-lg border border-white/10 bg-gradient-to-br from-band-deep to-band-deep-2 p-[30px] shadow-md">
            <Kicker className="mb-2 text-accent-300">{solutionsCard.kicker}</Kicker>
            <h3 className="mb-3 mt-2 text-[26px] text-band-deep-text">
              {solutionsCard.title}
            </h3>
            <p className="mb-6 flex-1 text-[14px] leading-[1.55] text-band-deep-muted">
              {solutionsCard.description}
            </p>
            <Button href={solutionsCard.cta.href} variant="secondary" className="self-start">
              {solutionsCard.cta.label}
            </Button>
          </article>
        </div>
      </Container>
    </Section>
  );
}
