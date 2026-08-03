import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ContactDetail } from "@/components/ContactPanel";
import type { ContactServiceOption } from "@/components/ContactForm";
import type { IconName } from "@/components/icons";

/** Contact Us page — form is front-end only until email/API is wired. */
export const contactContent = {
  meta: {
    title: "Contact Us | Torix Solutions",
    description:
      "Contact Torix Solutions for medical billing, healthcare software, revenue cycle management, and compliance questions. Book a consultation or send a message.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Contact Us" },
    ],
    eyebrow: "Contact",
    headline: "Let's start the conversation.",
    subheadline:
      "Whether you're looking for professional medical billing services, healthcare software, revenue cycle management, or simply have a question about our solutions, our team is here to help.",
    distinction:
      "We're committed to providing clear guidance, responsive support, and practical solutions tailored to your healthcare organization.",
    primaryCta: { label: "Get in Touch Today", href: "#get-in-touch" },
    secondaryCta: { label: "Book a Consultation", href: "#consultation" },
  },
  help: {
    heading: "How can we help?",
    subheading:
      "No matter where you are in your healthcare journey, we're happy to discuss your goals and recommend the right solution.",
    items: [
      {
        icon: "fileText" as IconName,
        title: "Medical Billing Services",
        href: "/services/medical-billing",
        ctaLabel: "Learn more →",
      },
      {
        icon: "clipboard" as IconName,
        title: "Medical Coding",
        href: "/services/medical-coding",
        ctaLabel: "Learn more →",
      },
      {
        icon: "activity" as IconName,
        title: "Revenue Cycle Management",
        href: "/services/revenue-cycle-management",
        ctaLabel: "Learn more →",
      },
      {
        icon: "building" as IconName,
        title: "Credentialing",
        href: "/services/credentialing",
        ctaLabel: "Learn more →",
      },
      {
        icon: "check" as IconName,
        title: "Medical Audits",
        href: "/services/medical-audit",
        ctaLabel: "Learn more →",
      },
      {
        icon: "layers" as IconName,
        title: "Clearinghouse Services",
        href: "/services/clearinghouse",
        ctaLabel: "Learn more →",
      },
      {
        icon: "monitor" as IconName,
        title: "Medical Billing Software",
        href: "/solutions/medical-billing-software",
        ctaLabel: "Learn more →",
      },
      {
        icon: "code" as IconName,
        title: "Healthcare Platform Solutions",
        href: "/solutions/healthcare-platform",
        ctaLabel: "Learn more →",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Focused Software & Compliance",
        href: "/solutions/hipaa-compliant-software",
        ctaLabel: "Learn more →",
      },
      {
        icon: "handshake" as IconName,
        title: "General Questions & Support",
        href: "#get-in-touch",
        ctaLabel: "Contact us →",
      },
    ] satisfies FeatureItem[],
  },
  panel: {
    heading: "Contact information",
    subheading: "Reach us directly, or send a message with the form.",
    // Sample details — replace with final office info before launch.
    details: [
      {
        icon: "mapPin" as IconName,
        label: "Office Address",
        value: "100 Healthcare Plaza, Suite 400, Austin, TX 78701",
      },
      {
        icon: "headphones" as IconName,
        label: "Phone",
        value: "(512) 555-0198",
        href: "tel:+15125550198",
      },
      {
        icon: "fileText" as IconName,
        label: "Email",
        value: "hello@torixsolutions.com",
        href: "mailto:hello@torixsolutions.com",
      },
    ] satisfies ContactDetail[],
    hours: [
      { label: "Monday – Friday", value: "9:00 AM – 6:00 PM" },
      { label: "Saturday & Sunday", value: "Closed" },
    ],
    formHeading: "Send us a message",
    formIntro:
      "Have a question or want to discuss your healthcare needs? Complete the form below, and a member of our team will get back to you as soon as possible.",
  },
  serviceOptions: [
    { value: "medical-billing", label: "Medical Billing Services" },
    { value: "medical-coding", label: "Medical Coding" },
    { value: "rcm", label: "Revenue Cycle Management (RCM)" },
    { value: "credentialing", label: "Credentialing" },
    { value: "medical-audit", label: "Medical Audits" },
    { value: "clearinghouse", label: "Clearinghouse Services" },
    { value: "billing-software", label: "Medical Billing Software" },
    { value: "healthcare-platform", label: "Healthcare Platform Solutions" },
    { value: "hipaa", label: "HIPAA-Focused Software & Compliance" },
    { value: "general", label: "General Questions & Support" },
  ] satisfies ContactServiceOption[],
  consultation: {
    heading: "Request a consultation",
    subheading:
      "Looking for a more in-depth discussion? Schedule a consultation with our team to explore how Torix Solutions can help improve your healthcare operations, billing performance, or technology infrastructure.",
    cta: { label: "Book a Consultation", href: "#get-in-touch" },
  },
  whyContact: {
    heading: "Why contact Torix Solutions?",
    subheading:
      "When you reach out to us, you'll connect with professionals who understand both healthcare operations and modern technology. We focus on delivering practical guidance, not sales pressure, so you can make informed decisions for your practice.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Improving revenue cycle performance",
        description: "Talk through denials, A/R and where cash gets stuck.",
      },
      {
        icon: "fileText" as IconName,
        title: "Reducing billing inefficiencies",
        description: "Clarify scope between billing, coding, clearinghouse and RCM.",
      },
      {
        icon: "monitor" as IconName,
        title: "Modernizing healthcare technology",
        description: "Discuss billing software, platform modules and integrations.",
      },
      {
        icon: "shield" as IconName,
        title: "Strengthening compliance practices",
        description: "Ask about HIPAA controls, BAAs and secure handling of PHI.",
      },
      {
        icon: "handshake" as IconName,
        title: "Technical and operational questions",
        description: "Get clear answers before you change vendors or systems.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "How quickly will I receive a response?",
        answer:
          "We aim to respond to all inquiries as quickly as possible during normal business hours.",
      },
      {
        question: "Do you offer consultations before getting started?",
        answer:
          "Yes. We offer consultations to better understand your needs and recommend the most appropriate solution.",
      },
      {
        question: "Can I request information about multiple services?",
        answer:
          "Absolutely. Whether you're interested in one service or a complete healthcare solution, we're happy to discuss your requirements.",
      },
      {
        question: "Do you work with practices of different sizes?",
        answer:
          "Yes. We support healthcare organizations ranging from independent practices to growing medical groups.",
      },
      {
        question: "Is my information kept confidential?",
        answer:
          "Yes. We treat all inquiries with professionalism and follow secure practices when handling information shared with us.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Ready to connect?",
    subheading:
      "Let's discuss how Torix Solutions can support your healthcare organization with trusted services and innovative technology solutions.",
    cta: { label: "Book a Consultation", href: "#get-in-touch" },
  },
};
