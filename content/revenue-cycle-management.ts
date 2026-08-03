import type { BenefitItem } from "@/components/BenefitCards";
import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Revenue Cycle Management service page — same component pattern as Medical Billing. */
export const rcmContent = {
  meta: {
    title: "Revenue Cycle Management | Torix Solutions",
    description:
      "Torix Solutions manages the complete revenue cycle for independent practices: eligibility, charge capture, claims, posting, denials, A/R, patient billing and reporting, with one named point of accountability.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Revenue Cycle Management" },
    ],
    eyebrow: "Healthcare Service",
    headline: "The full revenue cycle, managed as one process.",
    subheadline:
      "From patient registration through collections and reporting, Torix Solutions runs the complete cash path for independent practices. One accountable partner, one clear scope, and a named representative who knows how your practice actually works.",
    distinction:
      "Medical Billing covers the claim. Revenue Cycle Management covers the entire financial lifecycle around it.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: "/services/medical-billing",
    },
    visualCaption:
      "Illustration: registration through collections on a single managed cash path.",
  },
  included: {
    heading: "What's included",
    subheading:
      "Eight stages, run end to end so registration, billing and collections stay connected.",
    footerNote:
      "If you only need claims submitted and followed up on, please see our Medical Billing service.",
    items: [
      {
        icon: "users" as IconName,
        title: "Patient Registration & Eligibility Verification",
        description:
          "Demographics, coverage and benefits checked at the front desk so claims don't fail for preventable eligibility issues.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Charge Capture & Coding",
        description:
          "Charges captured from documentation and coded to support medical necessity, modifiers and place of service.",
      },
      {
        icon: "fileText" as IconName,
        title: "Claim Submission",
        description:
          "Claims scrubbed against payer edits, submitted electronically, and front-end rejections triaged the same day they return.",
      },
      {
        icon: "check" as IconName,
        title: "Payment Posting",
        description:
          "ERAs and remittances posted line by line, with underpayments flagged rather than written off silently.",
      },
      {
        icon: "alert" as IconName,
        title: "Denial Management",
        description:
          "Denials categorised by reason code and routed to the right fix: appeal, corrected claim, or a process change upstream.",
      },
      {
        icon: "clock" as IconName,
        title: "Accounts Receivable Follow-Up",
        description:
          "Ageing balances worked systematically so open A/R doesn't sit past timely filing or fall through the cracks.",
      },
      {
        icon: "building" as IconName,
        title: "Patient Billing & Collections",
        description:
          "Patient responsibility statements, follow-up and collections handled as part of the same cycle, not a separate vendor.",
      },
      {
        icon: "activity" as IconName,
        title: "Reporting",
        description:
          "Clear reporting across submissions, payments, denials, A/R ageing and patient balances so you can see the full cash path.",
      },
    ] satisfies FeatureItem[],
  },
  problems: {
    heading: "Problems we solve",
    subheading:
      "The gaps that appear when registration, billing and collections aren't owned as one process.",
    items: [
      {
        icon: "layers" as IconName,
        title: "Fragmented Registration, Billing & Collections",
        description:
          "Different people, vendors or tools own each stage, so handoffs fail and nobody sees the full picture.",
      },
      {
        icon: "users" as IconName,
        title: "No Single Point of Accountability",
        description:
          "When revenue drops, responsibility bounces between front desk, billers and collections with no one owning the outcome.",
      },
      {
        icon: "alert" as IconName,
        title: "Revenue Leakage Across Multiple Processes",
        description:
          "Missed eligibility, incomplete charges, unworked denials and stalled patient balances each take a cut of what you earned.",
      },
      {
        icon: "eyeOff" as IconName,
        title: "Disconnected Financial Workflow",
        description:
          "No shared view of where cash is stuck: registration, claim, payer A/R or patient responsibility.",
      },
    ] satisfies FeatureItem[],
  },
  process: {
    heading: "How it works",
    subheading:
      "A phased transition so full-cycle management starts without interrupting cash flow.",
    steps: [
      {
        title: "Consultation & Scope Assessment",
        description:
          "We review your denial mix, A/R ageing, registration process and where staff time is spent today.",
      },
      {
        title: "Current-State Process Review",
        description:
          "A written look at how registration, coding, claims, posting and collections connect, including the gaps between them.",
      },
      {
        title: "Phased Onboarding",
        description:
          "Access, payer setup and handoffs configured in stages so your current process keeps running while we take ownership.",
      },
      {
        title: "Full-Cycle Management",
        description:
          "Eligibility through collections managed as one cycle, with a named representative accountable for the account.",
      },
      {
        title: "Ongoing Reporting & Optimization",
        description:
          "Standing reporting plus process fixes where the same denials or leakage patterns keep recurring.",
      },
    ] satisfies ProcessStep[],
  },
  benefits: {
    heading: "Benefits",
    subheading:
      "What changes when one partner owns the complete revenue cycle.",
    items: [
      {
        icon: "handshake" as IconName,
        title: "One Accountable Partner",
        description:
          "A single team and named contact responsible for outcomes across registration, claims, A/R and patient billing.",
      },
      {
        icon: "check" as IconName,
        title: "Reduced Revenue Leakage",
        description:
          "Fewer dollars lost between stages because eligibility, charge capture, denials and collections are managed together.",
      },
      {
        icon: "layers" as IconName,
        title: "Scalable Revenue Operations",
        description:
          "Volume and specialty growth without bolting on another vendor for each part of the cash path.",
      },
      {
        icon: "monitor" as IconName,
        title: "Full-Cycle Visibility",
        description:
          "Reporting that shows where money is in the cycle: submitted, paid, denied, ageing or sitting with the patient.",
      },
    ] satisfies BenefitItem[],
  },
  whyUs: {
    heading: "Why choose us",
    subheading:
      "Capability and access that matter when the whole revenue cycle is on the line.",
    items: [
      {
        icon: "shield" as IconName,
        title: "HIPAA-Compliant Processes",
        description:
          "A signed BAA before any PHI moves, with access control and audit logging documented for every stage we touch.",
      },
      {
        icon: "mapPin" as IconName,
        title: "US-Based & In-Person Support",
        description:
          "Staffed in the United States, with a representative who can work with your team in person when the process needs it.",
      },
      {
        icon: "activity" as IconName,
        title: "Stage-by-Stage Process Transparency",
        description:
          "You see what happens at registration, claim, A/R and collections, not a black box labelled 'billing'.",
      },
      {
        icon: "code" as IconName,
        title: "Healthcare Software Experience",
        description:
          "We build healthcare software in house, so operational work and the systems it runs on stay aligned when something breaks.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question:
          "What's the difference between Revenue Cycle Management and Medical Billing?",
        answer:
          "Medical Billing is the claim: charge entry, submission, payment posting and denial follow-up. Revenue Cycle Management starts earlier and ends later: eligibility at registration, charge capture and coding, the claim, A/R follow-up, patient statements and collections, plus reporting across the full cash path.",
      },
      {
        question: "What parts of the revenue cycle are included?",
        answer:
          "Patient registration and eligibility, charge capture and coding, claim submission, payment posting, denial management, accounts receivable follow-up, patient billing and collections, and reporting. Scope is confirmed in writing before onboarding starts.",
      },
      {
        question:
          "Do I need to replace my current EHR or Practice Management system?",
        answer:
          "No. We work inside the system you already run. Our own software is available where it helps, but adopting it is optional and never a condition of the engagement.",
      },
      {
        question: "How is onboarding handled without disrupting operations?",
        answer:
          "Onboarding is phased. We review your current process, configure access alongside your staff, and run in parallel where needed so cash flow continues while ownership transfers stage by stage.",
      },
      {
        question: "How is pricing structured?",
        answer:
          "Pricing is quoted per practice after the assessment, based on volume, payer mix, specialty and which stages are in scope. The number and the scope go in writing before anything starts.",
      },
      {
        question:
          "Can I start with Medical Billing and later move to full RCM?",
        answer:
          "Yes. Many practices begin with Medical Billing and expand into full Revenue Cycle Management once claims are stable. The same named representative stays with the account as the scope grows.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Let's map your complete revenue cycle.",
    subheading:
      "Bring your A/R ageing and a recent month of denials. We'll show you where the cash path breaks, whether or not you engage us.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
