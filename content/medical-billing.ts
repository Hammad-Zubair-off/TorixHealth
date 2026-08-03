import type { BenefitItem } from "@/components/BenefitCards";
import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Medical Billing page copy from Nocturne Light reference (em-dashes cleaned). */
export const medicalBillingContent = {
  meta: {
    title: "Medical Billing | Torix Solutions",
    description:
      "We handle charge entry, claim submission, payment posting and denial follow-up for independent practices, working inside the system you already use, with a named representative you can call.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Medical Billing" },
    ],
    eyebrow: "Healthcare Service",
    headline: "Claims submitted right the first time.",
    subheadline:
      "We handle charge entry, claim submission, payment posting and denial follow-up for independent practices, working inside the system you already use, with a named representative you can call.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "Compare with full RCM",
      href: "/services/revenue-cycle-management",
    },
    visualCaption:
      "Illustration: a claim moving through scrub, submission and posting.",
  },
  included: {
    heading: "What's included",
    subheading: "Four functions, run end to end on every claim you send us.",
    footerNote:
      "This page covers Medical Billing only: the claim itself. Registration, eligibility, patient collections and reporting across the whole cash path belong to Revenue Cycle Management.",
    items: [
      {
        icon: "clipboard" as IconName,
        title: "Charge Entry",
        description:
          "Charges captured from your documentation and entered against the correct provider, place of service and modifiers.",
      },
      {
        icon: "fileText" as IconName,
        title: "Claim Submission",
        description:
          "Scrubbed against payer edits, then submitted electronically. Front-end rejections are triaged the same day they return.",
      },
      {
        icon: "alert" as IconName,
        title: "Denial Follow-Up",
        description:
          "Every denial is read, categorised by reason code, and routed to the right fix: appeal, corrected claim, or a process change at the front desk.",
      },
      {
        icon: "check" as IconName,
        title: "Payment Posting",
        description:
          "ERAs and paper remittances posted line by line, with underpayments flagged rather than written off silently.",
      },
    ] satisfies FeatureItem[],
  },
  problems: {
    heading: "Problems we solve",
    subheading: "The four things practices tell us are costing them the most.",
    items: [
      {
        icon: "alert" as IconName,
        title: "Claim denials",
        description:
          "Denials that repeat month after month because nobody traced them back to the cause.",
      },
      {
        icon: "clock" as IconName,
        title: "Slow payments",
        description:
          "Claims sitting in a queue for days before submission, then ageing past the filing limit.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Administrative burden",
        description:
          "Clinical and front-desk staff spending their afternoons on payer phone calls.",
      },
      {
        icon: "eyeOff" as IconName,
        title: "No billing visibility",
        description:
          "No clear view of what was submitted, what was paid, and what is still outstanding.",
      },
    ] satisfies FeatureItem[],
  },
  process: {
    heading: "How it works",
    subheading: "Five steps from first call to steady-state billing.",
    steps: [
      {
        title: "Consultation",
        description:
          "A conversation about your current denial mix, A/R ageing and what your staff spends time on.",
      },
      {
        title: "Practice assessment",
        description:
          "We review your payer mix, fee schedule and system setup, then write the scope and sign the BAA.",
      },
      {
        title: "Onboarding",
        description:
          "Clearinghouse, payer portal and system access configured with your staff, not around them.",
      },
      {
        title: "Ongoing billing",
        description:
          "Charges entered, claims scrubbed and submitted, payments posted, denials worked on a daily cycle.",
      },
      {
        title: "Reporting",
        description:
          "A weekly summary of submissions, payments, denials by reason and outstanding A/R.",
      },
    ] satisfies ProcessStep[],
  },
  whyUs: {
    heading: "Why choose us",
    items: [
      {
        icon: "handshake" as IconName,
        title: "In-person support",
        description:
          "A representative who can sit with your front desk rather than send a ticket reply.",
      },
      {
        icon: "mapPin" as IconName,
        title: "US-based team",
        description:
          "Billing and support staffed in the United States, on your working hours.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA compliant",
        description:
          "A signed BAA before any PHI moves, with access control and audit logging documented.",
      },
    ] satisfies BenefitItem[],
    footerNote:
      "Most billing vendors are remote-only, and most software vendors don't do the billing. We do both: the operational work, and the software the work runs on, which means when something breaks in the workflow, the same company can fix it.",
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "What's the difference between Medical Billing and RCM?",
        answer:
          "Medical Billing is the claim: charge entry, submission, posting and denial follow-up. Revenue Cycle Management wraps around it: eligibility at registration, charge capture, patient statements, collections and reporting across the whole cash path.",
      },
      {
        question: "How fast are claims submitted?",
        answer:
          "Clean charges are scrubbed and submitted on a daily cycle. Where documentation is incomplete we raise a query rather than hold the claim silently. You'll see what's waiting and why.",
      },
      {
        question: "Do you work with my EHR or practice management system?",
        answer:
          "Yes. We work inside the system you already run. Our own Medical Billing Software is offered free alongside the service, but adopting it is optional and never a condition of the engagement.",
      },
      {
        question: "How are denials handled?",
        answer:
          "Each denial is categorised by its reason code (CO-197 prior authorisation, CO-16 missing information, CO-97 bundling, and so on) and routed to the matching fix. Recurring causes are reported back so the pattern stops.",
      },
      {
        question: "How is pricing structured?",
        answer:
          "Pricing is quoted per practice after the assessment, based on volume, payer mix and specialty. We put the number and the scope in writing before anything starts.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Let's look at your last month of claims.",
    subheading:
      "Bring a remittance and your A/R ageing. We'll tell you what we'd change, whether or not you engage us.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
