import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { Navbar } from "@/components/Navbar";
import { rcmContent } from "@/content/revenue-cycle-management";

export const metadata: Metadata = {
  title: rcmContent.meta.title,
  description: rcmContent.meta.description,
};

export default function RevenueCycleManagementPage() {
  const c = rcmContent;

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
          image={c.hero.image}
        />
        <IconFeatureGrid
          heading={c.howItWorks.heading}
          subheading={c.howItWorks.subheading}
          footerNote={c.howItWorks.footerNote}
          items={c.howItWorks.items}
          band="paper"
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
