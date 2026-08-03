import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Healthcare SEO | Torix Solutions",
  description:
    "Healthcare SEO is under review and not yet approved for launch.",
  robots: { index: false, follow: false },
};

export default function HealthcareSeoPage() {
  return (
    <ComingSoon
      feature="Healthcare SEO"
      eyebrow="Under review"
      description="This offering is still under review and is not yet approved for launch. Check back later, or contact us about billing and technology services."
    />
  );
}
