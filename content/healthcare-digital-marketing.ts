import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { IconName } from "@/components/icons";

/** Healthcare Digital Marketing — websites, SEO, and online visibility for medical practices. */
export const healthcareDigitalMarketingContent = {
  meta: {
    title: "Healthcare Digital Marketing",
    description:
      "Torix Solutions builds websites and online visibility for healthcare practices — SEO, local search, and content built so patients searching for care find you first.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Healthcare Digital Marketing" },
    ],
    eyebrow: "Healthcare Service",
    headline: "Be the practice patients find first.",
    subheadline:
      "A modern website and strong local search presence matter as much as the care you provide. We build and manage websites, SEO, and online visibility built specifically for healthcare practices — so patients searching for care in your area find you before your competitors.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See Virtual Medical Assistants",
      href: "/services/virtual-medical-assistants",
    },
    image: {
      src: "/brand/heroes/healthcare-platform.jpg",
      alt: "Healthcare practice website displayed across devices",
    },
  },
  howItWorks: {
    heading: "How it works",
    subheading:
      "Website through ongoing reporting — built around how patients actually search for care.",
    footerNote:
      "This service covers your practice's online presence. For the software behind your practice (EHR, patient portal, telehealth), see our Healthcare Platform solution.",
    items: [
      {
        icon: "monitor" as IconName,
        title: "Website Design & Development",
        description:
          "A fast, mobile-friendly website built around your specialty, services, and patient journey — not a generic template.",
      },
      {
        icon: "activity" as IconName,
        title: "Search Engine Optimization",
        description:
          "On-page SEO, technical fixes, and content structured around the terms patients actually search before booking an appointment.",
      },
      {
        icon: "mapPin" as IconName,
        title: "Local & Google Business Visibility",
        description:
          "Google Business Profile optimization and local listing management so your practice shows up in map and \"near me\" searches.",
      },
      {
        icon: "fileText" as IconName,
        title: "Content & Reputation Management",
        description:
          "Service pages, blog content, and review management that build trust with prospective patients before they ever call.",
      },
      {
        icon: "layers" as IconName,
        title: "Paid Advertising Campaigns",
        description:
          "Search and social ad campaigns targeted to your service area and specialty, scoped to a budget you set.",
      },
      {
        icon: "check" as IconName,
        title: "Performance Reporting & Analytics",
        description:
          "Clear reporting on traffic, rankings, and conversion — so marketing spend is tied to visits and new patients, not vanity metrics.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "Do you build a new website or work with our existing one?",
        answer:
          "Either. We can design and build a new website for your practice, or audit and improve an existing site's performance, SEO, and conversion before deciding whether a rebuild makes sense.",
      },
      {
        question: "How long does SEO take to show results?",
        answer:
          "Local SEO improvements can begin showing within a few months, while competitive specialty or market terms typically take longer. We'll set expectations specific to your market during onboarding.",
      },
      {
        question: "Is this the same as the Healthcare Platform solution?",
        answer:
          "No. Healthcare Digital Marketing covers your website, SEO, and online visibility. The Healthcare Platform is the operational software behind your practice — EHR, patient portal, and telehealth. The two are often used together but are separate engagements.",
      },
      {
        question: "Do you manage ad spend, or just the campaigns?",
        answer:
          "We manage campaign strategy, targeting, and optimization. Ad spend is set by you and billed directly by the ad platform, so you always retain visibility and control over your budget.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Let's get your practice found online.",
    subheading:
      "Tell us your specialty and service area, and we'll show you where you currently stand in local search — whether or not you engage us.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
