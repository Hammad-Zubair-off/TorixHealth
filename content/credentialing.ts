import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { IconName } from "@/components/icons";

/** Credentialing — payer enrollment, CAQH, recredentialing, and related support. */
export const credentialingContent = {
  meta: {
    title: "Credentialing | Torix Solutions",
    description:
      "Torix Solutions credentialing gets you enrolled with the insurances that matter and keeps you compliant — so enrollment lag and expired credentials don't quietly cut off your ability to bill.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Credentialing" },
    ],
    eyebrow: "Healthcare Service",
    headline: "Enrolled with the payers that matter — and kept that way.",
    subheadline:
      "Credentialing delays cost you real money — every day you're not enrolled with a payer is a day you can't bill them. Our credentialing service gets you set up and approved with the insurances that matter, and keeps you compliant so you don't lose network status without knowing it.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: "/services/medical-billing",
    },
    image: {
      src: "/brand/heroes/credentialing.jpg",
      alt: "Professional handshake representing provider enrollment and network partnership",
    },
  },
  howItWorks: {
    heading: "How it works",
    subheading:
      "Enrollment, CAQH, follow-up, contracts, recredentialing, NPI/PECOS, and privileging support — managed so nothing sits in limbo.",
    items: [
      {
        icon: "fileText" as IconName,
        title: "Provider Enrollment",
        description:
          "We prepare and submit applications to get you enrolled with commercial payers, Medicare, and Medicaid, so you can start billing as soon as possible.",
      },
      {
        icon: "clipboard" as IconName,
        title: "CAQH Profile Setup & Maintenance",
        description:
          "Your CAQH profile is created, kept current, and re-attested on schedule, since an outdated profile is one of the most common causes of enrollment delays.",
      },
      {
        icon: "clock" as IconName,
        title: "Application Tracking & Follow-Up",
        description:
          "We don't just submit and wait — applications are actively followed up on with payers until approval, so nothing sits in limbo.",
      },
      {
        icon: "handshake" as IconName,
        title: "Contract Negotiation Support",
        description:
          "We review payer contract terms and reimbursement rates so you're not signing into unfavorable agreements without knowing it.",
      },
      {
        icon: "check" as IconName,
        title: "Re-credentialing & Revalidation",
        description:
          "Credentials are tracked and renewed before expiration, so you never lose network status or get quietly dropped from a payer panel.",
      },
      {
        icon: "building" as IconName,
        title: "NPI & PECOS Management",
        description:
          "Individual and group NPI records and PECOS enrollments are kept accurate and up to date.",
      },
      {
        icon: "users" as IconName,
        title: "Privileging Support",
        description:
          "Where applicable, we assist with hospital or facility privileging alongside payer credentialing.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "How long does credentialing typically take?",
        answer:
          "Timelines vary by payer, specialty and how complete the initial packet is. During consultation we set expectations for your payer mix and track status so you know what is pending versus confirmed.",
      },
      {
        question: "Do you handle CAQH profile setup and maintenance?",
        answer:
          "Yes. CAQH setup, updates and scheduled attestation are part of the service, because incomplete profiles are one of the most common reasons applications stall.",
      },
      {
        question:
          "What happens if an enrollment application is denied or delayed?",
        answer:
          "We review the reason, correct what we can, resubmit or escalate follow-up with the payer, and keep you informed so the practice isn't left guessing why a panel isn't active.",
      },
      {
        question: "Do you automatically track recredentialing deadlines?",
        answer:
          "Yes. Recredentialing is managed on a calendar with proactive follow-up before deadlines, so renewals don't lapse unnoticed.",
      },
      {
        question: "Is Credentialing available separately from Medical Billing?",
        answer:
          "Yes. Credentialing can stand alone or run alongside Medical Billing or Revenue Cycle Management. Many practices use it when adding providers or cleaning up enrollment lag even if billing stays in house.",
      },
      {
        question: "Which insurance networks do you work with?",
        answer:
          "We work across commercial and government payers common to independent practices. Scope is confirmed per engagement based on your specialty, locations and the panels you need to bill.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Let's clear the enrollment lag before it hits revenue.",
    subheading:
      "Bring your provider list and the payers you need. We'll show you what's pending, what's at risk, and what we'd file first.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
