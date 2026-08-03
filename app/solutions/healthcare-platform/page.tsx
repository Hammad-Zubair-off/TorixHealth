import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { Navbar } from "@/components/Navbar";
import { PlatformSpotlight } from "@/components/PlatformSpotlight";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { healthcarePlatformContent } from "@/content/healthcare-platform";

export const metadata: Metadata = {
  title: healthcarePlatformContent.meta.title,
  description: healthcarePlatformContent.meta.description,
};

export default function HealthcarePlatformPage() {
  const c = healthcarePlatformContent;

  return (
    <>
      <Navbar />
      <main>
        <Hero
          breadcrumb={c.hero.breadcrumb}
          eyebrow={c.hero.eyebrow}
          headline={c.hero.headline}
          subheadline={c.hero.subheadline}
          primaryCta={c.hero.primaryCta}
          secondaryCta={c.hero.secondaryCta}
          consultationNote={c.hero.distinction}
          visualCaption={c.hero.visualCaption}
        />
        <PlatformSpotlight
          kicker={c.overview.kicker}
          heading={c.overview.heading}
          description={c.overview.description}
          highlights={c.overview.highlights}
          cta={c.overview.cta}
        />
        <IconFeatureGrid
          heading={c.capabilities.heading}
          subheading={c.capabilities.subheading}
          items={c.capabilities.items}
          band="paper"
          minCardWidth={220}
        />
        <IconFeatureGrid
          heading={c.unified.heading}
          subheading={c.unified.subheading}
          items={c.unified.items}
          variant="deep"
          band="deep"
          minCardWidth={240}
        />
        <ProcessTimeline
          heading={c.process.heading}
          subheading={c.process.subheading}
          steps={c.process.steps}
        />
        <IconFeatureGrid
          heading={c.whyUs.heading}
          subheading={c.whyUs.subheading}
          items={c.whyUs.items}
          band="tint"
          minCardWidth={240}
        />
        <FAQAccordion heading={c.faqs.heading} items={c.faqs.items} />
        <CTABanner
          heading={c.finalCta.heading}
          subheading={c.finalCta.subheading}
          cta={c.finalCta.cta}
        />
      </main>
      <Footer />
    </>
  );
}
