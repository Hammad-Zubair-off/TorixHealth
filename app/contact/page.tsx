import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { comingSoonMetadata } from "@/lib/coming-soon";

export const metadata: Metadata = comingSoonMetadata("Contact");

export default function Page() {
  return (
    <ComingSoon
      feature="Contact"
      description="Our contact form is coming soon. In the meantime, return home or explore Medical Billing to see how we work with practices."
      primaryCta={{ label: "Back to Home", href: "/" }}
      secondaryCta={{
        label: "See Medical Billing",
        href: "/services/medical-billing",
      }}
    />
  );
}
