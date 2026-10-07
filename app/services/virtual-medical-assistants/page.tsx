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
import { virtualMedicalAssistantsContent } from "@/content/virtual-medical-assistants";

export const metadata: Metadata = buildPageMetadata({
  title: virtualMedicalAssistantsContent.meta.title,
  description: virtualMedicalAssistantsContent.meta.description,
  path: "/services/virtual-medical-assistants",
});

export default function VirtualMedicalAssistantsPage() {
  const c = virtualMedicalAssistantsContent;

  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(c.faqs.items),
          breadcrumbSchema(c.hero.breadcrumb, "/services/virtual-medical-assistants"),
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
