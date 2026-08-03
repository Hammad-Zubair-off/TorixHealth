import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { comingSoonMetadata } from "@/lib/coming-soon";

export const metadata: Metadata = comingSoonMetadata("About Us");

export default function Page() {
  return <ComingSoon feature="About Us" />;
}
