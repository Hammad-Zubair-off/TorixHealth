import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ComparisonColumn } from "@/components/RcmComparison";
import type { IconName } from "@/components/icons";
import { billingProcessContent } from "@/content/billing-process";

/** Revenue Cycle Management — full-cycle oversight from intake to final payment. */
export const rcmContent = {
  meta: {
    title: "Revenue Cycle Management Services",
    description:
      "Revenue cycle management services connecting registration, coding, claims, payment posting, and collections for clearer practice operations.",
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
      "Revenue cycle management is everything working together — not just billing in isolation. We manage your entire cycle from patient scheduling to final payment, so nothing falls through the cracks between coding, claims, credentialing, and collections.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: "/services/medical-billing",
    },
    image: {
      src: "/brand/heroes/rcm.jpg",
      alt: "Operations teammates collaborating on revenue and workflow results in a bright office",
    },
  },
  howItWorks: {
    heading: "How it works",
    subheading:
      "End-to-end oversight, continuous monitoring, and coordination across billing, credentialing, and collections.",
    footerNote:
      "If you only need claims submitted and followed up on, see our Medical Billing service.",
    items: [
      {
        icon: "layers" as IconName,
        title: "End-to-End Cycle Oversight",
        description:
          "Every stage from patient intake to final payment is managed under one system, so nothing gets lost in handoffs between departments.",
      },
      {
        icon: "activity" as IconName,
        title: "Performance Monitoring",
        description:
          "Key metrics like days in AR, denial rate, and net collection rate are tracked continuously, not just reviewed once a year.",
      },
      {
        icon: "check" as IconName,
        title: "Process Optimization",
        description:
          "Recurring bottlenecks and inefficiencies in your billing workflow are identified and fixed before they cost you more revenue.",
      },
      {
        icon: "shield" as IconName,
        title: "Compliance Oversight",
        description:
          "Coding, billing, and payer requirements are kept current with evolving regulations, reducing audit and compliance risk.",
      },
      {
        icon: "users" as IconName,
        title: "Cross-Functional Coordination",
        description:
          "Billing, credentialing, and AR teams work off the same data, so a change in one area (like a payer contract) doesn't create problems in another.",
      },
      {
        icon: "monitor" as IconName,
        title: "Ongoing Reporting",
        description:
          "You get regular visibility into practice financial health — not just numbers, but what's driving them.",
      },
    ] satisfies FeatureItem[],
  },
  workflow: billingProcessContent,
  comparison: {
    heading: "In-House vs. Outsourced Revenue Cycle Management",
    columns: [
      {
        title: "In-House RCM",
        subtitle: "Managing billing internally",
        items: [
          {
            icon: "dollar" as IconName,
            text: "Salaries, benefits, training, and software add to operating costs.",
          },
          {
            icon: "alert" as IconName,
            text: "Limited staff capacity can delay claims and increase billing errors.",
          },
          {
            icon: "clock" as IconName,
            text: "Unpaid claims and patient balances require ongoing follow-up.",
          },
          {
            icon: "clipboard" as IconName,
            text: "Credentialing and payer enrollment create additional administrative work.",
          },
          {
            icon: "activity" as IconName,
            text: "Expanding the team as the practice grows can be costly and time-consuming.",
          },
        ],
      },
      {
        title: "Outsourced RCM with Torix Health",
        subtitle: "A dedicated billing partner",
        emphasized: true,
        items: [
          {
            icon: "wallet" as IconName,
            text: "Reduce the need for additional in-house billing staff and related overhead.",
          },
          {
            icon: "check" as IconName,
            text: "Structured claim review, coding support, and accurate charge entry.",
          },
          {
            icon: "refresh" as IconName,
            text: "Proactive follow-up on unpaid claims, denials, and outstanding balances.",
          },
          {
            icon: "users" as IconName,
            text: "Credentialing and payer enrollment support to help providers join insurance networks.",
          },
          {
            icon: "barChart" as IconName,
            text: "Flexible operational support as your practice adds providers or locations.",
          },
        ],
      },
    ] satisfies [ComparisonColumn, ComparisonColumn],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question:
          "What's the difference between Revenue Cycle Management and Medical Billing?",
        answer:
          "Medical Billing focuses on the claim path and performance insight around billing outcomes. Revenue Cycle Management is everything working together: from patient scheduling to final payment, coordinating coding, claims, credentialing, and collections so nothing falls between stages.",
      },
      {
        question: "What parts of the revenue cycle are included?",
        answer:
          "Intake through final payment under one system — including coordination across coding, claims, credentialing, AR, and collections. Exact scope is confirmed in writing before onboarding starts.",
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
