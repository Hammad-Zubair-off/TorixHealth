import type { BenefitItem } from "@/components/BenefitCards";
import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Clearinghouse service page — claim validation & electronic submission. */
export const clearinghouseContent = {
  meta: {
    title: "Clearinghouse | Torix Solutions",
    description:
      "Torix Solutions clearinghouse: claim scrubbing and validation, electronic submission, payer connectivity and accept/reject reporting so front-end rejections are caught before they become denials.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Clearinghouse" },
    ],
    eyebrow: "Healthcare Service",
    headline: "Validate claims before they reach the payer.",
    subheadline:
      "Torix Solutions runs claim scrubbing, electronic submission and payer connectivity for independent practices, so data errors and front-end rejections are caught and triaged before a claim becomes a denial.",
    distinction:
      "Claims validated and routed electronically, with clear accept and reject reporting along the way.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: "/services/medical-billing",
    },
    visualCaption:
      "Illustration: scrub, electronic submission and payer response tracking.",
  },
  included: {
    heading: "What's included",
    subheading:
      "Four functions focused on validation, transmission and visibility before the payer adjudicates.",
    footerNote:
      "Clearinghouse covers claim validation and electronic transmission. It is available as a standalone service or alongside Medical Billing.",
    items: [
      {
        icon: "check" as IconName,
        title: "Claims Scrubbing & Validation",
        description:
          "Claims checked against common edits and data requirements so fixable errors are caught before the file leaves your practice.",
      },
      {
        icon: "fileText" as IconName,
        title: "Electronic Claim Submission",
        description:
          "Validated claims submitted electronically to connected payers on a regular cycle, without manual portal re-keying for every claim.",
      },
      {
        icon: "layers" as IconName,
        title: "Payer Connectivity",
        description:
          "Routing to the payer connections your mix requires, so submission isn't blocked by a missing link in the chain.",
      },
      {
        icon: "activity" as IconName,
        title: "Accept / Reject Reporting",
        description:
          "Front-end accept and reject responses surfaced clearly so rejections are triaged the same day they return, not discovered weeks later.",
      },
    ] satisfies FeatureItem[],
  },
  problems: {
    heading: "Problems we solve",
    subheading:
      "The pre-payer failures that waste time and delay cash before adjudication even starts.",
    items: [
      {
        icon: "alert" as IconName,
        title: "Claim Rejections Due to Data Errors",
        description:
          "Missing fields, format errors and edit failures that bounce at the clearinghouse or payer front end instead of reaching adjudication.",
      },
      {
        icon: "clock" as IconName,
        title: "Manual Submission Delays",
        description:
          "Claims waiting on portal entry or batch uploads that sit for days before anyone presses send.",
      },
      {
        icon: "eyeOff" as IconName,
        title: "Limited Claim Status Visibility",
        description:
          "No clear view of what was accepted, rejected or still in transit after the claim left the practice management system.",
      },
    ] satisfies FeatureItem[],
  },
  process: {
    heading: "How it works",
    subheading:
      "Five steps from claim receipt through reporting and resubmission support.",
    steps: [
      {
        title: "Claim Receipt",
        description:
          "Claims received from your billing workflow or practice management system into the clearinghouse path.",
      },
      {
        title: "Automated Scrubbing & Validation",
        description:
          "Automated checks against common edits and data rules; fixable issues flagged before electronic submission.",
      },
      {
        title: "Electronic Submission to Payers",
        description:
          "Clean claims routed electronically to connected payers rather than held in a manual submission queue.",
      },
      {
        title: "Response Tracking",
        description:
          "Accept and reject responses tracked so you know what cleared the front end and what came back.",
      },
      {
        title: "Reporting & Resubmission Support",
        description:
          "Reporting on outcomes, with support to correct and resubmit rejected claims instead of leaving them stranded.",
      },
    ] satisfies ProcessStep[],
  },
  benefits: {
    heading: "Benefits",
    subheading:
      "What changes when validation and electronic submission sit in front of the payer.",
    items: [
      {
        icon: "check" as IconName,
        title: "Fewer Claim Rejections",
        description:
          "Data and edit errors caught in scrubbing so fewer claims bounce at the front end.",
      },
      {
        icon: "activity" as IconName,
        title: "Faster Claim Processing",
        description:
          "Electronic submission on a steady cycle shortens the gap between charge ready and payer receipt.",
      },
      {
        icon: "monitor" as IconName,
        title: "Real-Time Claim Visibility",
        description:
          "Accept/reject status visible so staff aren't guessing whether a claim is still sitting in a queue.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Reduced Manual Resubmission",
        description:
          "Clear rejection detail and resubmission support cut the rework of rebuilding claims by hand.",
      },
    ] satisfies BenefitItem[],
  },
  whyUs: {
    heading: "Why choose us",
    subheading:
      "Validation, security and integration standards for claim transmission.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Real-Time Claim Validation",
        description:
          "Scrubbing and response tracking built to surface issues when they happen, not in a month-end surprise.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Compliant Claim Processing",
        description:
          "A signed BAA before any PHI moves, with claim data handled under documented access controls.",
      },
      {
        icon: "monitor" as IconName,
        title: "Flexible EHR & Practice Management Integration",
        description:
          "Works with the system you already run. Adopting Torix software is optional and never required for clearinghouse connectivity.",
      },
      {
        icon: "mapPin" as IconName,
        title: "US-Based Healthcare Technology Support",
        description:
          "Support staffed in the United States, with people who understand claims workflows, not only generic IT tickets.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question:
          "Is the Clearinghouse service available separately from Medical Billing?",
        answer:
          "Yes. Clearinghouse can stand alone for practices that already bill in house, or it can run alongside Medical Billing when Torix owns both validation/transmission and claim operations.",
      },
      {
        question:
          "Does it integrate with my current EHR or Practice Management system?",
        answer:
          "Yes. We connect to the system you already use. Our own software is available where it helps, but it is not a condition of clearinghouse service.",
      },
      {
        question: "How are rejected claims handled?",
        answer:
          "Front-end rejections are surfaced in accept/reject reporting and triaged so the claim can be corrected and resubmitted rather than left unresolved in a batch file.",
      },
      {
        question: "How quickly are claims submitted after validation?",
        answer:
          "Clean claims move on a regular electronic submission cycle after scrubbing. Claims that fail validation are flagged for correction instead of being held silently.",
      },
      {
        question:
          "Can I track claim status throughout the submission process?",
        answer:
          "Yes. Accept and reject responses are tracked so you can see what cleared, what was rejected and what still needs attention after submission.",
      },
      {
        question:
          "How is Clearinghouse different from your Medical Billing service?",
        answer:
          "Clearinghouse validates and routes claims electronically and reports accept/reject outcomes. Medical Billing runs the claim operation itself: charge entry, submission ownership, payment posting and denial follow-up. Many practices use both; they are scoped separately on purpose.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Let's get cleaner claims out the door.",
    subheading:
      "Bring a recent rejection report or a sample of claims stuck before the payer. We'll show you what scrubbing and connectivity would change.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
