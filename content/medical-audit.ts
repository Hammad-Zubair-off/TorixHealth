import type { BenefitItem } from "@/components/BenefitCards";
import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Medical Audit service page — independent review; same section stack as other services. */
export const medicalAuditContent = {
  meta: {
    title: "Medical Audit | Torix Solutions",
    description:
      "An independent Torix Solutions review of documentation, coding, compliance and revenue leakage. Written findings and a walkthrough, useful whether or not you hire us afterwards.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Medical Audit" },
    ],
    eyebrow: "Healthcare Service",
    headline: "An independent look at your billing and documentation.",
    subheadline:
      "Torix Solutions reviews documentation, coding accuracy, compliance and revenue cycle performance, then delivers written findings you can act on. The audit is built to be useful on its own, not a sales pitch for another service.",
    distinction:
      "Objective findings first. No pressure to become a billing client to receive the report.",
    primaryCta: { label: "Request an Audit", href: "/contact" },
    secondaryCta: {
      label: "See Medical Coding",
      href: "/services/medical-coding",
    },
    visualCaption:
      "Illustration: documentation, coding and compliance reviewed into a written findings report.",
  },
  overview: {
    heading: "What's included",
    subheading:
      "Four review areas that make up a complete Medical Audit engagement.",
    items: [
      {
        icon: "clipboard" as IconName,
        title: "Documentation Review",
        description:
          "Clinical notes assessed for whether they support the codes and services billed, and where gaps would fail a payer or auditor ask.",
      },
      {
        icon: "fileText" as IconName,
        title: "Coding Accuracy Review",
        description:
          "ICD-10 and CPT assignment checked against the documentation for mismatch, unsupported codes and recurring error patterns.",
      },
      {
        icon: "shield" as IconName,
        title: "Compliance Review",
        description:
          "Processes and claim patterns reviewed for compliance risk, not just whether a single claim paid.",
      },
      {
        icon: "alert" as IconName,
        title: "Revenue Leakage Identification",
        description:
          "Where money is lost across documentation, coding, denials or unworked balances, named specifically so you can fix the cause.",
      },
    ] satisfies FeatureItem[],
  },
  whyAudit: {
    heading: "Why get an audit",
    subheading:
      "Reasons practices ask for an independent review before problems get expensive.",
    items: [
      {
        icon: "alert" as IconName,
        title: "Hidden Revenue Leakage",
        description:
          "Leakage spread across coding, denials and A/R that never shows up as one obvious failure in the monthly numbers.",
      },
      {
        icon: "shield" as IconName,
        title: "Compliance & Audit Risk",
        description:
          "Unsupported documentation or coding patterns that become costly when a payer or external auditor asks for proof.",
      },
      {
        icon: "eyeOff" as IconName,
        title: "No Independent Performance Verification",
        description:
          "Nobody outside the current billing path has validated whether documentation, coding and cash performance actually hold up.",
      },
    ] satisfies FeatureItem[],
  },
  process: {
    heading: "How the audit works",
    subheading:
      "Five steps from request through a findings walkthrough and recommendations.",
    steps: [
      {
        title: "Request & Scope",
        description:
          "We agree what will be reviewed: specialty, sample size, payers and whether the focus is documentation, coding, compliance or the full set.",
      },
      {
        title: "Document & Data Collection",
        description:
          "After the BAA, we collect the notes, claims and reports needed for the scoped review, with clear access limits.",
      },
      {
        title: "Documentation, Coding & Compliance Review",
        description:
          "Independent review of the sample against documentation support, code accuracy, compliance risk and leakage patterns.",
      },
      {
        title: "Findings Report",
        description:
          "A written report covering documentation, coding, compliance and revenue leakage findings, without requiring you to buy ongoing services.",
      },
      {
        title: "Results Walkthrough & Recommendations",
        description:
          "A walkthrough of the findings and practical recommendations. You decide what to do next, including whether to engage Torix further.",
      },
    ] satisfies ProcessStep[],
  },
  deliverables: {
    heading: "What you receive",
    subheading:
      "Every audit ends with the same deliverable set, whether or not you become a client afterwards.",
    items: [
      {
        icon: "fileText" as IconName,
        title: "Findings Report",
        description:
          "A written report you keep, summarizing what was reviewed and what we found.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Documentation Review Summary",
        description:
          "Where notes support the billed services and where gaps would fail scrutiny.",
      },
      {
        icon: "check" as IconName,
        title: "Coding Accuracy Findings",
        description:
          "ICD-10 and CPT issues by pattern, not just a list of individual claim errors.",
      },
      {
        icon: "shield" as IconName,
        title: "Compliance Findings",
        description:
          "Compliance risks tied to documentation and coding practices in the sample.",
      },
      {
        icon: "alert" as IconName,
        title: "Revenue Leakage Findings",
        description:
          "Specific places cash is being lost and what would need to change to stop it.",
      },
      {
        icon: "handshake" as IconName,
        title: "Results Walkthrough",
        description:
          "A live review of the report and recommendations so the findings aren't left unread in an inbox.",
      },
    ] satisfies BenefitItem[],
  },
  whyUs: {
    heading: "Why choose us",
    subheading:
      "Independence and handling standards that make the audit worth requesting.",
    items: [
      {
        icon: "eyeOff" as IconName,
        title: "Independent & Objective Review",
        description:
          "Findings written to be useful on their own. The audit is not conditioned on hiring Torix for billing afterwards.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Compliant Documentation Handling",
        description:
          "A signed BAA before any PHI moves, with access limited to what the scoped review requires.",
      },
      {
        icon: "mapPin" as IconName,
        title: "US-Based & In-Person Support",
        description:
          "Staffed in the United States, with a walkthrough you can take with a real person, not only a PDF.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "Is the audit free or paid?",
        answer:
          "Pricing depends on scope, specialty and sample size. We confirm whether the engagement is complimentary or paid in writing before any PHI is exchanged, so there is no surprise after the request.",
      },
      {
        question:
          "Will I receive a report even if I don't become a client?",
        answer:
          "Yes. The findings report and walkthrough are deliverables of the audit itself. You do not need to hire Torix for billing, coding or RCM to receive them.",
      },
      {
        question: "How long does the audit process take?",
        answer:
          "Timelines depend on scope and how quickly documents are available after the BAA. During scoping we set a target for review completion and the walkthrough date.",
      },
      {
        question: "What exactly gets reviewed?",
        answer:
          "Within the agreed scope: documentation support for billed services, coding accuracy, compliance risk and revenue leakage patterns. Exact sample size and payers are confirmed before work starts.",
      },
      {
        question: "Is my data secure during the audit?",
        answer:
          "Yes. A signed Business Associate Agreement is executed before any PHI moves. Access is limited to the audit team and the documents required for the scoped review.",
      },
      {
        question:
          "Do I need to switch billing providers to request an audit?",
        answer:
          "No. The audit is independent of who currently does your billing. Many practices use it to verify performance while keeping their existing team or vendor.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Request an audit without the sales pitch.",
    subheading:
      "Tell us your specialty and what you want reviewed. We'll scope the work, sign the BAA when ready, and deliver findings you can use either way.",
    cta: { label: "Request an Audit", href: "/contact" },
  },
};
