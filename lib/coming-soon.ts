import type { Metadata } from "next";

/** Shared metadata helper for unfinished route stubs. */
export function comingSoonMetadata(feature: string): Metadata {
  return {
    title: `${feature} | Torix Solutions`,
    description: `${feature} is coming soon from Torix Solutions.`,
  };
}
