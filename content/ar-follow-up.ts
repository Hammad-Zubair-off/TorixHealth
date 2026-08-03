import type { BenefitItem } from "@/components/BenefitCards";
import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Accounts Receivable (A/R) Management — recover aging insurance and patient balances. */
export const arFollowUpContent = {
  meta: {
    title: "A/R Follow-Up | Torix Solutions",
    description:
      "Torix Solutions Accounts Receivable Management recovers aging insurance and patient balances through structured follow-up, claim resolution and detailed reporting.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "A/R Follow-Up" },
    ],
    eyebrow: "Healthcare Service",
    headline: "Recover revenue that's already yours.",
    subheadline:
      "Aging claims and unpaid balances shouldn't become write-offs simply because they're no longer the newest priority. Our dedicated Accounts Receivable (A/R) Management service focuses on recovering outstanding insurance and patient balances through structured follow-up, claim resolution, and detailed reporting.",
    distinction:
      "Whether your backlog comes from staffing shortages, a previous billing vendor, or years of accumulated unpaid claims, we help turn neglected receivables back into collected revenue.",
    primaryCta: { label: "Request an A/R Assessment", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: "/services/medical-billing",
    },
    visualCaption:
      "Illustration: aging balances organized into recovery work and collected revenue.",
  },
  included: {
    heading: "What's included",
    subheading:
      "Everything needed to recover aging accounts receivable. Designed for practices with outstanding claims and unpaid balances that require dedicated attention.",
    footerNote:
      "This service focuses on recovering existing outstanding balances. For ongoing claim submission and daily billing operations, explore Medical Billing. For complete revenue cycle management from patient registration to final payment, see Revenue Cycle Management.",
    items: [
      {
        icon: "clipboard" as IconName,
        title: "Aging A/R Analysis",
        description:
          "Review and organize outstanding accounts into 30, 60, 90, 120+ day aging categories to identify recovery opportunities.",
      },
      {
        icon: "fileText" as IconName,
        title: "Insurance Claim Follow-Up",
        description:
          "Communicate directly with insurance payers to determine claim status, resolve delays, and pursue outstanding reimbursements.",
      },
      {
        icon: "headphones" as IconName,
        title: "Patient Balance Follow-Up",
        description:
          "Professionally manage patient balances through compliant communication while maintaining a positive patient experience.",
      },
      {
        icon: "alert" as IconName,
        title: "Denial Resolution & Resubmission",
        description:
          "Investigate denied claims, correct issues where appropriate, and resubmit eligible claims for reimbursement.",
      },
      {
        icon: "activity" as IconName,
        title: "Aging Reports & Performance Tracking",
        description:
          "Receive organized reports showing outstanding balances, recovery progress, payer trends, and aging distribution.",
      },
    ] satisfies FeatureItem[],
  },
  problems: {
    heading: "Problems we solve",
    subheading:
      "Don't let aging claims become permanent losses. Many practices focus on today's claims while yesterday's revenue quietly slips away.",
    items: [
      {
        icon: "clock" as IconName,
        title: "Claims Aging Without Follow-Up",
        description:
          "Claims aging beyond 60, 90, or 120 days without active follow-up.",
      },
      {
        icon: "eyeOff" as IconName,
        title: "Unclear Insurance Status",
        description:
          "Outstanding insurance claims with unclear payment status.",
      },
      {
        icon: "layers" as IconName,
        title: "Growing A/R Backlogs",
        description:
          "Growing accounts receivable backlogs after staffing shortages or vendor transitions.",
      },
      {
        icon: "alert" as IconName,
        title: "Unnecessary Write-Offs",
        description:
          "Revenue being written off simply because no one is actively working older claims.",
      },
      {
        icon: "monitor" as IconName,
        title: "Limited Visibility",
        description:
          "Limited visibility into why outstanding balances remain unpaid.",
      },
      {
        icon: "activity" as IconName,
        title: "Delayed Collections",
        description:
          "Delayed collections reducing overall cash flow.",
      },
    ] satisfies FeatureItem[],
  },
  process: {
    heading: "How A/R recovery works",
    subheading: "A structured recovery process from assessment through reporting.",
    steps: [
      {
        icon: "clipboard" as IconName,
        title: "A/R Assessment",
        description:
          "We review your current accounts receivable to understand the size, age, and complexity of your outstanding balances.",
      },
      {
        icon: "layers" as IconName,
        title: "Aging Analysis",
        description:
          "Claims are categorized by aging period, payer, and patient responsibility to prioritize recovery efforts effectively.",
      },
      {
        icon: "headphones" as IconName,
        title: "Insurance & Patient Follow-Up",
        description:
          "Our team actively communicates with insurance carriers and patients to resolve outstanding balances while maintaining professionalism and compliance.",
      },
      {
        icon: "fileText" as IconName,
        title: "Resolution & Resubmission",
        description:
          "When recoverable issues are identified, we correct claim errors, submit appeals when appropriate, and resubmit eligible claims for payment.",
      },
      {
        icon: "activity" as IconName,
        title: "Reporting & Ongoing Visibility",
        description:
          "Receive clear reporting showing recovery progress, aging trends, outstanding balances, and actionable insights.",
      },
    ] satisfies ProcessStep[],
  },
  benefits: {
    heading: "Benefits of our A/R management",
    subheading: "Recover more than revenue.",
    items: [
      {
        icon: "check" as IconName,
        title: "Recover Outstanding Payments",
        description:
          "Maximize collections from aging claims that may otherwise be written off.",
      },
      {
        icon: "layers" as IconName,
        title: "Reduce Aging Backlogs",
        description:
          "Keep outstanding accounts under control with consistent follow-up and structured recovery efforts.",
      },
      {
        icon: "activity" as IconName,
        title: "Improve Cash Flow",
        description:
          "Recovered receivables contribute directly to healthier practice revenue.",
      },
      {
        icon: "monitor" as IconName,
        title: "Better Financial Visibility",
        description:
          "Understand where outstanding balances exist and why they remain unpaid.",
      },
      {
        icon: "users" as IconName,
        title: "Dedicated Recovery Focus",
        description:
          "Older claims receive specialized attention instead of competing with daily billing priorities.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Compliant Communication",
        description:
          "Patient financial information is handled securely throughout the recovery process.",
      },
    ] satisfies BenefitItem[],
  },
  whyUs: {
    heading: "Why choose Torix Solutions",
    subheading:
      "Unlike routine billing services, our Accounts Receivable Management focuses exclusively on recovering aging balances with a structured and transparent process.",
    items: [
      {
        icon: "users" as IconName,
        title: "Dedicated A/R Specialists",
        description:
          "Older claims receive focused attention instead of becoming secondary to daily claim submissions.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Compliant Processes",
        description:
          "Every interaction follows secure healthcare data handling practices.",
      },
      {
        icon: "handshake" as IconName,
        title: "Insurance & Patient Recovery",
        description:
          "We pursue both insurance reimbursements and patient balances where appropriate.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Detailed Aging Reports",
        description:
          "Stay informed with organized reporting and complete visibility into recovery progress.",
      },
      {
        icon: "building" as IconName,
        title: "Experienced Healthcare Billing Team",
        description:
          "We understand payer workflows, claim lifecycles, and the challenges practices face with aging receivables.",
      },
      {
        icon: "headphones" as IconName,
        title: "Transparent Communication",
        description:
          "You'll always know what actions are being taken and where your outstanding claims stand.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question:
          "Is A/R Management a one-time cleanup or an ongoing service?",
        answer:
          "It can be either. Some practices need a one-time recovery project, while others choose ongoing A/R management to keep aging balances under control.",
      },
      {
        question:
          "Do you follow up on patient balances as well as insurance claims?",
        answer:
          "Yes. We manage both insurance follow-up and patient balance recovery while maintaining professional communication and compliance.",
      },
      {
        question:
          "Can I use this service without switching my medical billing provider?",
        answer:
          "Yes. Accounts Receivable Management can often be provided as a standalone service depending on your practice's needs.",
      },
      {
        question: "How is pricing structured?",
        answer:
          "Pricing depends on the size of your backlog, claim complexity, and the scope of work required. We discuss available options during your consultation.",
      },
      {
        question:
          "What's the difference between A/R Management and Medical Billing?",
        answer:
          "Medical Billing focuses on submitting and managing current claims. A/R Management focuses specifically on recovering older unpaid claims and outstanding balances that require dedicated attention.",
      },
      {
        question: "How far back can outstanding claims be recovered?",
        answer:
          "Recovery opportunities vary depending on payer requirements, claim status, filing deadlines, and documentation. During your A/R assessment, we'll identify which balances remain recoverable.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Stop letting outstanding revenue slip away.",
    subheading:
      "Every aging claim represents revenue your practice has already earned. Let our A/R specialists help recover outstanding balances, improve visibility, and strengthen your financial performance. Discover how dedicated Accounts Receivable Management can help recover aging claims and reduce outstanding balances.",
    cta: { label: "Request an A/R Assessment", href: "/contact" },
  },
};
