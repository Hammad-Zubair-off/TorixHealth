import { LogoMarquee } from "@/components/LogoMarquee";
import type { PartnerLogo } from "@/content/ehr-systems";

type InsurancePartnersProps = {
  heading: string;
  subheading: string;
  partners: PartnerLogo[];
  band?: "bg" | "paper" | "tint";
};

/** Insurance partner logos/names in a continuous horizontal scroll. */
export function InsurancePartners({
  heading,
  subheading,
  partners,
  band = "tint",
}: InsurancePartnersProps) {
  return (
    <LogoMarquee
      heading={heading}
      subheading={subheading}
      items={partners}
      band={band}
      durationSec={38}
    />
  );
}
