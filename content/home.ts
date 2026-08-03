import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { OverviewCard } from "@/components/ServicesOverview";
import type { MemberCard } from "@/components/TeamMemberCard";
import type { TrustItem } from "@/components/TrustBar";
import type { IconName } from "@/components/icons";

/** Homepage copy from referenceUI Nocturne Light, with em-dash phrasing cleaned up. */
export const homeContent = {
  meta: {
    title: "Torix Solutions | Medical Billing & Healthcare Technology",
    description:
      "Torix Solutions runs medical billing, coding, credentialing and revenue cycle work for independent practices, with a named representative who knows your practice, and a healthcare software team that builds our platform in house.",
  },
  hero: {
    eyebrow: "US-based billing operations & healthcare technology",
    headline: "A billing partner you can reach.",
    highlightWord: "reach.",
    subheadline:
      "Torix Solutions runs medical billing, coding, credentialing and revenue cycle work for independent practices, with a named representative who knows your practice, and a healthcare software team that builds our platform in house.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See how billing works",
      href: "/services/medical-billing",
    },
    consultationNote:
      "A consultation is a conversation about your current denials and A/R. Not a sales call.",
    visualCaption:
      "Photo: a Torix representative sitting with a provider at the front desk.",
  },
  trust: [
    {
      icon: "users" as IconName,
      label: "1500+ Satisfied Providers",
      description: "Across the USA",
    },
    {
      icon: "shield" as IconName,
      label: "99% Clean Claims Rate",
      description: "Higher first-pass success",
    },
    {
      icon: "clock" as IconName,
      label: "75+ Specialties Supported",
      description: "Broad experience",
    },
    {
      icon: "headphones" as IconName,
      label: "US-Based Support Team",
      description: "Real people. Real support.",
    },
  ] satisfies TrustItem[],
  split: {
    heading: "Two things we do, kept separate on purpose.",
    subheading:
      "Operational services and technology products are different commitments with different buyers. We don't blur them.",
    servicesCard: {
      kicker: "Healthcare Services",
      title: "We run the billing operation",
      description:
        "Claims, coding, credentialing, audits and full revenue cycle management, performed by our team on your behalf.",
      cta: { label: "Explore Services", href: "/services/medical-billing" },
    },
    solutionsCard: {
      kicker: "Healthcare Technology",
      title: "We build the software",
      description:
        "Billing automation, EHR and EMR, practice management, patient portal and telehealth: one connected system rather than five vendors.",
      cta: { label: "Explore Solutions", href: "/solutions/healthcare-platform" },
    },
  },
  overview: {
    servicesHeading: "Healthcare services",
    servicesNote:
      "Services are work we do on your behalf. Every engagement is assigned a named representative before it starts.",
    solutionsHeading: "Software we wrote, not software we resell.",
    services: [
      {
        icon: "fileText",
        title: "Medical Billing",
        description:
          "Claim scrubbing, submission, payment posting and denial rework. Scoped to the claim itself, deliberately narrower than RCM.",
        href: "/services/medical-billing",
        ctaLabel: "Medical Billing",
      },
      {
        icon: "activity",
        title: "Revenue Cycle Management",
        description:
          "Eligibility at registration through patient collections, managed as one process with a single point of accountability.",
        href: "/services/revenue-cycle-management",
        ctaLabel: "Revenue Cycle Management",
      },
      {
        icon: "clipboard",
        title: "Medical Coding",
        description:
          "ICD-10 and CPT assignment at the point of entry, with documentation queries raised when the note doesn't support the code.",
        href: "/services/medical-coding",
        ctaLabel: "Medical Coding",
      },
      {
        icon: "check",
        title: "Medical Audit",
        description:
          "An independent review of documentation, coding and compliance. Written to be useful whether or not you hire us afterwards.",
        href: "/services/medical-audit",
        ctaLabel: "Medical Audit",
      },
      {
        icon: "layers",
        title: "Clearinghouse",
        description:
          "Claim routing, front-end rejection triage and payer connectivity, so a rejection is caught before it becomes a denial.",
        href: "/services/clearinghouse",
        ctaLabel: "Clearinghouse",
      },
      {
        icon: "building",
        title: "Credentialing",
        description:
          "Payer enrollment, CAQH maintenance and a recredentialing calendar, so enrollment lag stops sitting on top of your revenue.",
        href: "/services/credentialing",
        ctaLabel: "Credentialing",
      },
    ] satisfies OverviewCard[],
    solutions: [
      {
        icon: "monitor",
        title: "Medical Billing Software",
        description:
          "Bundled at no cost with the Medical Billing service. Less manual entry, shorter billing cycles, and reporting you can actually read. Includes a free EHR and free practice management.",
        href: "/solutions/medical-billing-software",
        tag: "Free",
        ctaLabel: "Request a Demo",
      },
      {
        icon: "layers",
        title: "Healthcare Platform",
        description:
          "EHR, EMR, practice management, specialty and mobile EHR, patient portal, telehealth, chronic care management and public sector deployments, connected under one login.",
        href: "/solutions/healthcare-platform",
        tag: "Flagship",
        ctaLabel: "Request a Platform Demo",
      },
      {
        icon: "lock",
        title: "HIPAA-Compliant Software",
        description:
          "Role-based access control, audit logging, encryption in transit and at rest, and a signed Business Associate Agreement. Documented in detail rather than asserted in a badge.",
        href: "/solutions/hipaa-compliant-software",
        tag: "Compliance",
        ctaLabel: "Read the detail",
      },
    ] satisfies OverviewCard[],
  },
  denials: {
    heading: "The denials we work, by name.",
    subheading:
      "Each of these has a different fix. Some are appeals, some are corrected claims, and some are a front-desk process change that stops the denial recurring. We tell you which one it is.",
    items: [
      {
        icon: "alert" as IconName,
        title: "CO-197",
        description: "Prior authorization absent",
      },
      {
        icon: "alert" as IconName,
        title: "CO-29",
        description: "Timely filing limit expired",
      },
      {
        icon: "alert" as IconName,
        title: "CO-16",
        description: "Claim lacks required information",
      },
      {
        icon: "alert" as IconName,
        title: "PR-204",
        description: "Not covered under the patient's plan",
      },
      {
        icon: "alert" as IconName,
        title: "CO-97",
        description: "Already included in another payment",
      },
      {
        icon: "alert" as IconName,
        title: "CO-11",
        description: "Diagnosis inconsistent with procedure",
      },
    ] satisfies FeatureItem[],
  },
  process: {
    heading: "How onboarding runs",
    steps: [
      {
        icon: "headphones",
        title: "Discovery call",
        description:
          "We look at your denial mix and A/R ageing with you, on a shared screen.",
      },
      {
        icon: "shield",
        title: "Scope and BAA",
        description:
          "A written scope, then a signed Business Associate Agreement before any PHI moves.",
      },
      {
        icon: "monitor",
        title: "Access and setup",
        description:
          "Clearinghouse, payer portals and system access, configured alongside your staff.",
      },
      {
        icon: "clipboard",
        title: "Parallel run",
        description:
          "We run beside your current process so the switch doesn't interrupt cash flow.",
      },
      {
        icon: "handshake",
        title: "Ongoing operations",
        description:
          "Weekly reporting and a standing check-in with your named representative.",
      },
    ] satisfies ProcessStep[],
  },
  account: {
    heading: "You will know who is working on your account.",
    subheading:
      "One named point of contact, reachable directly, who can meet you rather than route you through a ticket queue.",
    members: [
      { name: "Alex Rivera", role: "Founder" },
      { name: "Jordan Lee", role: "Practice Representative" },
      { name: "Sam Patel", role: "Billing Lead" },
    ] satisfies MemberCard[],
  },
  faqs: {
    heading: "Questions we get asked first",
    items: [
      {
        question:
          "What's the difference between Medical Billing and Revenue Cycle Management?",
        answer:
          "Medical Billing is the claim: coded, scrubbed, submitted, posted, and reworked when it's denied. Revenue Cycle Management starts earlier and ends later: eligibility at registration, charge capture, the claim, then patient statements and collections.",
      },
      {
        question: "Will switching billing partners interrupt our cash flow?",
        answer:
          "That's what the parallel run in step four is for. Your existing process keeps submitting while we take over queue by queue, and legacy A/R is worked rather than abandoned.",
      },
      {
        question: "Do you sign a Business Associate Agreement?",
        answer:
          "Yes, and before any protected health information is exchanged. The HIPAA Compliance page sets out how PHI is stored, logged and transmitted.",
      },
      {
        question: "Do we have to use your software?",
        answer:
          "No. The billing service works with the system you already run. The free Medical Billing Software is offered alongside it, and the Healthcare Platform is a separate decision you can make later or never.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Start with a conversation about your current billing.",
    subheading:
      "Bring a recent remittance and your A/R ageing. We'll tell you what we'd change, whether or not you engage us.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
