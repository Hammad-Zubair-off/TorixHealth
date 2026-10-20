import type { PartnerLogo } from "@/content/ehr-systems";

/** Insurance partners shown in a scrolling marquee. */
export const insurancePartnersContent = {
  heading: "Insurance Networks We Work With",
  subheading:
    "We support billing and enrollment across major commercial and government payers — so your practice can submit clean claims to the networks that matter.",
  partners: [
    { name: "Aetna", src: "/brand/partner-logos/insurance/aetna.jpg" },
    { name: "Cigna", src: "/brand/partner-logos/insurance/cigna.png" },
    { name: "Humana", src: "/brand/partner-logos/insurance/humana.png" },
    { name: "Tricare", src: "/brand/partner-logos/insurance/tricare.png" },
  ] satisfies PartnerLogo[],
};
