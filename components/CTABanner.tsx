import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Container";

type CTABannerProps = {
  heading: string;
  subheading?: string;
  cta: { label: string; href: string };
};

export function CTABanner({ heading, subheading, cta }: CTABannerProps) {
  return (
    <Section band="deep">
      <Container className="flex flex-col items-start gap-6 py-[clamp(56px,6.5vw,92px)] md:items-center md:text-center">
        <h2 className="max-w-[16ch] text-[clamp(28px,3.2vw,40px)] text-band-deep-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="max-w-[48ch] text-[15px] text-band-deep-muted">{subheading}</p>
        ) : null}
        <Button href={cta.href} variant="primary" size="hero" className="w-full sm:w-auto">
          {cta.label}
        </Button>
      </Container>
    </Section>
  );
}
