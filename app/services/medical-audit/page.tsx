import type { Metadata } from "next";
import { BenefitCards } from "@/components/BenefitCards";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { Navbar } from "@/components/Navbar";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { medicalAuditContent } from "@/content/medical-audit";

export const metadata: Metadata = {
  title: medicalAuditContent.meta.title,
  description: medicalAuditContent.meta.description,
};

export default function MedicalAuditPage() {
  const c = medicalAuditContent;

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
        <IconFeatureGrid
          heading={c.analyze.heading}
          subheading={c.analyze.subheading}
          items={c.analyze.items}
          band="paper"
        />
        <BenefitCards
          heading={c.deliverables.heading}
          subheading={c.deliverables.subheading}
          items={c.deliverables.items}
        />
        <ProcessTimeline
          heading={c.process.heading}
          subheading={c.process.subheading}
          steps={c.process.steps}
        />
        <IconFeatureGrid
          heading={c.specialties.heading}
          subheading={c.specialties.subheading}
          items={c.specialties.items}
          variant="deep"
          band="deep"
        />
        <IconFeatureGrid
          heading={c.whyUs.heading}
          subheading={c.whyUs.subheading}
          items={c.whyUs.items}
          band="tint"
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
