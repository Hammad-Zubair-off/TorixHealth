export type PartnerLogo = {
  name: string;
  /** Public path under /brand/partner-logos — omit for name-only tiles. */
  src?: string;
};

/** Shared EHR/EMR systems Torix bills with — used on home and Medical Billing. */
export const ehrSystemsContent = {
  heading: "EMR/EHR systems Torix Health Bills with?",
  subheading:
    "We work with healthcare practices using a range of EHR, EMR, and practice management systems to help streamline billing and revenue cycle operations.",
  systems: [
    { name: "athenahealth", src: "/brand/partner-logos/athenahealth.png" },
    { name: "Tebra", src: "/brand/partner-logos/tebra.png" },
    { name: "SimplePractice", src: "/brand/partner-logos/simplepractice.png" },
    { name: "eClinicalWorks", src: "/brand/partner-logos/eclinicalworks.png" },
    { name: "AdvancedMD", src: "/brand/partner-logos/advancedmd.png" },
    { name: "DrChrono", src: "/brand/partner-logos/drchrono.png" },
    { name: "Epic", src: "/brand/partner-logos/epic.jpg" },
    {
      name: "Oracle Health (Cerner)",
      src: "/brand/partner-logos/oracle-health.jpg",
    },
    { name: "NextGen Healthcare", src: "/brand/partner-logos/nextgen.png" },
    { name: "Practice Fusion", src: "/brand/partner-logos/practice-fusion.png" },
  ] satisfies PartnerLogo[],
};
