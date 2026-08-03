import type { Metadata } from "next";
import { BenefitCards } from "@/components/BenefitCards";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { Navbar } from "@/components/Navbar";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { medicalBillingContent } from "@/content/medical-billing";

export const metadata: Metadata = {
  title: medicalBillingContent.meta.title,
  description: medicalBillingContent.meta.description,
};

export default function MedicalBillingPage() {
  const c = medicalBillingContent;

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
          visualCaption={c.hero.visualCaption}
        />
        <IconFeatureGrid
          heading={c.included.heading}
          subheading={c.included.subheading}
          footerNote={c.included.footerNote}
          items={c.included.items}
          band="paper"
          minCardWidth={240}
        />
        <IconFeatureGrid
          heading={c.problems.heading}
          subheading={c.problems.subheading}
          items={c.problems.items}
          variant="deep"
          band="deep"
          minCardWidth={240}
        />
        <ProcessTimeline
          heading={c.process.heading}
          subheading={c.process.subheading}
          steps={c.process.steps}
        />
        <BenefitCards
          heading={c.whyUs.heading}
          items={c.whyUs.items}
          footerNote={c.whyUs.footerNote}
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
