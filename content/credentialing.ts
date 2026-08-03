import type { BenefitItem } from "@/components/BenefitCards";
import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Credentialing service page — same component pattern as Medical Billing / RCM / Coding. */
export const credentialingContent = {
  meta: {
    title: "Credentialing | Torix Solutions",
    description:
      "Torix Solutions handles provider enrollment, insurance network applications, CAQH setup and maintenance, and ongoing recredentialing so practices can bill without enrollment lag sitting on top of revenue.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Credentialing" },
    ],
    eyebrow: "Healthcare Service",
    headline: "Get enrolled. Stay enrolled. Start billing.",
    subheadline:
      "Torix Solutions manages provider enrollment and ongoing recredentialing for independent practices: insurance network applications, CAQH setup and maintenance, status tracking and a recredentialing calendar, so enrollment lag stops sitting on top of your revenue.",
    distinction:
      "Provider enrollment to get you in-network, and proactive recredentialing so you stay there.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: "/services/medical-billing",
    },
    visualCaption:
      "Illustration: enrollment applications, CAQH maintenance and a recredentialing calendar.",
  },
  overview: {
    heading: "What's included",
    subheading:
      "Four functions that cover getting providers enrolled and keeping credentialing current.",
    items: [
      {
        icon: "users" as IconName,
        title: "Provider Enrollment",
        description:
          "New and existing providers enrolled with the payers your practice bills, with documentation gathered once and reused across applications where allowed.",
      },
      {
        icon: "building" as IconName,
        title: "Insurance Network Applications",
        description:
          "Payer and network applications prepared and submitted to the panels that matter for your specialty and geography.",
      },
      {
        icon: "clipboard" as IconName,
        title: "CAQH Profile Setup & Maintenance",
        description:
          "CAQH profiles created or updated, attested on schedule, and kept consistent with the information payers actually request.",
      },
      {
        icon: "clock" as IconName,
        title: "Ongoing Recredentialing Management",
        description:
          "A recredentialing calendar with follow-up before deadlines, so renewals don't lapse and silently block claims.",
      },
    ] satisfies FeatureItem[],
  },
  problems: {
    heading: "Problems we solve",
    subheading:
      "The enrollment and recredentialing gaps that delay or interrupt your ability to bill.",
    items: [
      {
        icon: "alert" as IconName,
        title: "Delayed Revenue from Pending Enrollment",
        description:
          "Providers seeing patients while applications sit unanswered, so charges can't be billed to the network yet.",
      },
      {
        icon: "clipboard" as IconName,
        title: "CAQH Profile Complexity",
        description:
          "Incomplete, outdated or unattested CAQH profiles that stall every payer application that depends on them.",
      },
      {
        icon: "clock" as IconName,
        title: "Missed Recredentialing Deadlines",
        description:
          "Renewals that lapse because nobody owned the calendar, putting active enrollments and claim payment at risk.",
      },
    ] satisfies FeatureItem[],
  },
  process: {
    heading: "How it works",
    subheading:
      "Five steps from document collection through confirmed enrollment and ongoing recredentialing.",
    steps: [
      {
        title: "Document Collection & CAQH Setup",
        description:
          "We gather provider documents, set up or update CAQH, and confirm the profile is ready for payer use.",
      },
      {
        title: "Payer / Network Application Submission",
        description:
          "Applications prepared and submitted to the insurance networks in your scope, with a clear list of what was filed where.",
      },
      {
        title: "Active Follow-Up & Status Tracking",
        description:
          "We chase status with payers instead of waiting passively, and keep you informed when something is stuck.",
      },
      {
        title: "Enrollment Confirmation",
        description:
          "Effective dates and panel status confirmed so your billing team knows when claims can go out for that provider and payer.",
      },
      {
        title: "Ongoing Recredentialing Management",
        description:
          "Recredentialing deadlines tracked and worked before they lapse, so enrollment doesn't quietly expire.",
      },
    ] satisfies ProcessStep[],
  },
  benefits: {
    heading: "Benefits",
    subheading:
      "What proactive credentialing management changes for cash flow and staff time.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Faster Time Until Providers Can Bill",
        description:
          "Applications filed completely and followed up so providers reach billable, in-network status without avoidable stall.",
      },
      {
        icon: "check" as IconName,
        title: "No Missed Recredentialing Deadlines",
        description:
          "A managed calendar and follow-up so renewals are handled before they put claims and enrollment at risk.",
      },
      {
        icon: "handshake" as IconName,
        title: "Reduced Administrative Burden",
        description:
          "Document chase, CAQH upkeep and payer follow-up handled by Torix instead of your front desk between patients.",
      },
    ] satisfies BenefitItem[],
  },
  whyUs: {
    heading: "Why choose us",
    subheading:
      "Credentialing expertise and handling standards that keep enrollment moving.",
    items: [
      {
        icon: "building" as IconName,
        title: "Payer-Specific Enrollment Expertise",
        description:
          "Applications shaped for how individual payers and networks actually process enrollment, not a generic packet sent everywhere the same way.",
      },
      {
        icon: "clock" as IconName,
        title: "Proactive Recredentialing Tracking",
        description:
          "Deadlines owned on a calendar with outreach before they hit, not discovered after claims start bouncing.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Compliant Provider Data Handling",
        description:
          "A signed BAA before provider data moves, with access control for the documents and profiles we maintain.",
      },
      {
        icon: "mapPin" as IconName,
        title: "US-Based & In-Person Support",
        description:
          "Staffed in the United States, with a representative who can work through enrollment issues with your practice in person when needed.",
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
