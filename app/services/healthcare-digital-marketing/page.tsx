import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/site";
import { faqPageSchema, breadcrumbSchema } from "@/lib/seo-schema";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { Navbar } from "@/components/Navbar";
import { healthcareDigitalMarketingContent } from "@/content/healthcare-digital-marketing";

export const metadata: Metadata = buildPageMetadata({
  title: healthcareDigitalMarketingContent.meta.title,
  description: healthcareDigitalMarketingContent.meta.description,
  path: "/services/healthcare-digital-marketing",
});

export default function HealthcareDigitalMarketingPage() {
  const c = healthcareDigitalMarketingContent;

  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(c.faqs.items),
          breadcrumbSchema(c.hero.breadcrumb, "/services/healthcare-digital-marketing"),
        ]}
      />
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
