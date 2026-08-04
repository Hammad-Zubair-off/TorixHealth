import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Hero, HeroBrandVisual } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ServicesOverview } from "@/components/ServicesOverview";
import { SplitOfferings } from "@/components/SplitOfferings";
import { TrustBar } from "@/components/TrustBar";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
};

export default function HomePage() {
  const c = homeContent;

  return (
    <>
      <Navbar />
      <main>
        <Hero
          eyebrow={c.hero.eyebrow}
          headline={c.hero.headline}
          highlightWord={c.hero.highlightWord}
          subheadline={c.hero.subheadline}
          primaryCta={c.hero.primaryCta}
          secondaryCta={c.hero.secondaryCta}
          consultationNote={c.hero.consultationNote}
          brandLayout
          visual={<HeroBrandVisual />}
        />
        <TrustBar items={c.trust} variant="brand" />
        <SplitOfferings
          heading={c.split.heading}
          subheading={c.split.subheading}
          servicesCard={c.split.servicesCard}
          solutionsCard={c.split.solutionsCard}
        />
        <ServicesOverview
          servicesHeading={c.overview.servicesHeading}
          servicesNote={c.overview.servicesNote}
          solutionsHeading={c.overview.solutionsHeading}
          services={c.overview.services}
          solutions={c.overview.solutions}
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
