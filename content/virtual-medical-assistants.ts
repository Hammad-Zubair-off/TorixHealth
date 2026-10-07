import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { IconName } from "@/components/icons";
import { homeContent } from "@/content/home";

/** Virtual Medical Assistants — trained administrative support for practice workflows. */
export const virtualMedicalAssistantsContent = {
  meta: {
    title: "Virtual Medical Assistants",
    description:
      "Torix Solutions provides trained virtual medical assistants for scheduling, patient communication, insurance verification, and administrative support — so your in-house team can focus on patients.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Virtual Medical Assistants" },
    ],
    eyebrow: "Healthcare Service",
    headline: "Administrative support that runs quietly in the background.",
    subheadline:
      "A dedicated virtual medical assistant handles scheduling, patient communication, data entry, and day-to-day administrative work — tailored to your practice's workflow, specialty, and daily workload — so your in-house staff can focus on patients and higher-priority responsibilities.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing Consulting",
      href: "/services/medical-billing",
    },
    image: {
      src: "/brand/heroes/ar-follow-up.jpg",
      alt: "Administrative team member supporting a medical practice remotely",
    },
  },
  howItWorks: {
    heading: "How it works",
    subheading:
      "Scheduling through reporting — handled by a dedicated assistant who learns your practice's workflow.",
    footerNote:
      "Virtual Medical Assistants support administrative workload. For claims and patient billing, see Medical Billing Consulting. For denial and AR recovery, see AR & Denial Management.",
    items: [
      {
        icon: "clock" as IconName,
        title: "Scheduling & Calendar Management",
        description:
          "Appointment scheduling, rescheduling, and calendar coordination handled so your front desk isn't stretched thin during peak hours.",
      },
      {
        icon: "headphones" as IconName,
        title: "Patient Communication & Follow-Up",
        description:
          "Appointment reminders, intake follow-up, and routine patient communication managed with a consistent, professional point of contact.",
      },
      {
        icon: "shield" as IconName,
        title: "Insurance Verification Support",
        description:
          "Coverage checks and benefit verification completed ahead of visits, reducing avoidable denials and day-of surprises.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Data Entry & Documentation",
        description:
          "Patient records, intake forms, and documentation kept accurate and current inside the system you already use.",
      },
      {
        icon: "fileText" as IconName,
        title: "Administrative & Inbox Management",
        description:
          "Faxes, emails, and routine correspondence triaged and handled so nothing sits unanswered in a shared inbox.",
      },
      {
        icon: "monitor" as IconName,
        title: "Reporting & Handoff",
        description:
          "Regular status updates and clean handoff of anything requiring in-house attention, so visibility never drops.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: homeContent.virtualAssistantFaqs.heading,
    items: homeContent.virtualAssistantFaqs.items,
  },
  finalCta: {
    heading: "Give your front office room to breathe.",
    subheading:
      "Tell us your specialty, your busiest administrative bottleneck, and the hours you need covered — we'll scope a virtual assistant to fit.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
