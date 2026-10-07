export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  children: NavLink[];
};

/** Exact nav structure — Healthcare SEO and Resources/Blog intentionally excluded for now */
export const mainNav: Array<NavLink | NavGroup> = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Medical Billing Consulting", href: "/services/medical-billing" },
      { label: "Medical Credentialing & Contracting", href: "/services/credentialing" },
      { label: "AR & Denial Management", href: "/services/ar-follow-up" },
      { label: "Medical Billing Audit", href: "/services/medical-audit" },
      { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
      { label: "Virtual Medical Assistants", href: "/services/virtual-medical-assistants" },
      { label: "Healthcare Digital Marketing", href: "/services/healthcare-digital-marketing" },
    ],
  },
  {
    label: "Solutions",
    children: [
      {
        label: "Medical Billing Software",
        href: "/solutions/medical-billing-software",
      },
      { label: "Healthcare Platform", href: "/solutions/healthcare-platform" },
      { label: "HIPAA Compliance", href: "/solutions/hipaa-compliant-software" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Medical Billing Consulting", href: "/services/medical-billing" },
    { label: "Medical Credentialing & Contracting", href: "/services/credentialing" },
    { label: "AR & Denial Management", href: "/services/ar-follow-up" },
    { label: "Medical Billing Audit", href: "/services/medical-audit" },
    { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
    { label: "Virtual Medical Assistants", href: "/services/virtual-medical-assistants" },
    { label: "Healthcare Digital Marketing", href: "/services/healthcare-digital-marketing" },
  ],
  solutions: [
    { label: "Medical Billing Software", href: "/solutions/medical-billing-software" },
    { label: "Healthcare Platform", href: "/solutions/healthcare-platform" },
    { label: "HIPAA-Compliant Software", href: "/solutions/hipaa-compliant-software" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
  ],
  contact: [{ label: "Contact Us", href: "/contact" }],
};
