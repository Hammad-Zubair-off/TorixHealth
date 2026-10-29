import { LogoMarquee } from "@/components/LogoMarquee";
import type { PartnerLogo } from "@/content/ehr-systems";

type EhrSystemsProps = {
  heading: string;
  subheading: string;
  systems: PartnerLogo[];
  band?: "bg" | "paper" | "tint";
};

/** EMR/EHR partner logos in a continuous horizontal scroll. */
export function EhrSystems({
  heading,
  subheading,
  systems,
  band = "paper",
}: EhrSystemsProps) {
  return (
    <LogoMarquee
      heading={heading}
      subheading={subheading}
      items={systems}
      band={band}
      durationSec={42}
    />
  );
}
