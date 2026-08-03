import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { ContactPanel } from "@/components/ContactPanel";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { Navbar } from "@/components/Navbar";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = {
  title: contactContent.meta.title,
  description: contactContent.meta.description,
};

export default function ContactPage() {
  const c = contactContent;

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
        />
        <IconFeatureGrid
          heading={c.help.heading}
          subheading={c.help.subheading}
          items={c.help.items}
          band="bg"
          minCardWidth={220}
        />
        <ContactPanel
          heading={c.panel.heading}
          subheading={c.panel.subheading}
          details={c.panel.details}
          hours={c.panel.hours}
          formHeading={c.panel.formHeading}
          formIntro={c.panel.formIntro}
          serviceOptions={c.serviceOptions}
        />
        <div id="consultation">
          <CTABanner
            heading={c.consultation.heading}
            subheading={c.consultation.subheading}
            cta={c.consultation.cta}
          />
        </div>
        <IconFeatureGrid
          heading={c.whyContact.heading}
          subheading={c.whyContact.subheading}
          items={c.whyContact.items}
          band="tint"
          minCardWidth={220}
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
