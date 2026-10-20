import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { EhrSystems } from "@/components/EhrSystems";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HeroLeadForm } from "@/components/HeroLeadForm";
import { InsurancePartners } from "@/components/InsurancePartners";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ServicesOverview } from "@/components/ServicesOverview";
import { SpecialtiesShowcase } from "@/components/SpecialtiesShowcase";
import { SplitOfferings } from "@/components/SplitOfferings";
import { TrustBar } from "@/components/TrustBar";
import { credentialingContent } from "@/content/credentialing";
import { homeContent } from "@/content/home";
import { faqPageSchema } from "@/lib/seo-schema";
import { buildPageMetadata, siteName } from "@/lib/site";

const specialtyOptions = credentialingContent.specialties.items.map(
  (item) => item.title,
);

const homeAbsoluteTitle = `${siteName} | ${homeContent.meta.title}`;
const homeMeta = buildPageMetadata({
  title: homeContent.meta.title,
  description: homeContent.meta.description,
  path: "/",
});

export const metadata: Metadata = {
  ...homeMeta,
  title: { absolute: homeAbsoluteTitle },
  openGraph: {
    ...homeMeta.openGraph,
    title: homeAbsoluteTitle,
  },
  twitter: {
    ...homeMeta.twitter,
    title: homeAbsoluteTitle,
  },
};

export default function HomePage() {
  const c = homeContent;

  return (
    <>
      <JsonLd
        data={faqPageSchema([...c.faqs.items, ...c.virtualAssistantFaqs.items])}
      />
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
          visual={<HeroLeadForm specialtyOptions={specialtyOptions} />}
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
        <ProcessTimeline
          heading={c.billingProcess.heading}
          subheading={c.billingProcess.subheading}
          steps={c.billingProcess.steps}
          band="tint"
        />
        <SpecialtiesShowcase
          heading={c.specialties.heading}
          subheading={c.specialties.subheading}
          items={c.specialties.items}
          initialCount={6}
          band="paper"
        />
        <EhrSystems
          heading={c.ehrSystems.heading}
          subheading={c.ehrSystems.subheading}
          systems={c.ehrSystems.systems}
          band="bg"
        />
        <InsurancePartners
          heading={c.insurancePartners.heading}
          subheading={c.insurancePartners.subheading}
          partners={c.insurancePartners.partners}
          band="paper"
        />
        <FAQAccordion heading={c.faqs.heading} items={c.faqs.items} />
        <FAQAccordion
          heading={c.virtualAssistantFaqs.heading}
          items={c.virtualAssistantFaqs.items}
        />
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
