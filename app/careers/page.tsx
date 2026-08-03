import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { comingSoonMetadata } from "@/lib/coming-soon";

export const metadata: Metadata = comingSoonMetadata("Careers");

export default function Page() {
  return <ComingSoon feature="Careers" />;
}
