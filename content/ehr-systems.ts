export type EhrSystem = {
  name: string;
  short: string;
};

/** Shared EHR/EMR systems Torix bills with — used on home and Medical Billing. */
export const ehrSystemsContent = {
  heading: "EMR/EHR systems Torix Health Bills with?",
  subheading:
    "We work with healthcare practices using a range of EHR, EMR, and practice management systems to help streamline billing and revenue cycle operations.",
  systems: [
    { name: "athenahealth", short: "AH" },
    { name: "Tebra", short: "TB" },
    { name: "SimplePractice", short: "SP" },
    { name: "eClinicalWorks", short: "eCW" },
    { name: "AdvancedMD", short: "AMD" },
    { name: "DrChrono", short: "DC" },
    { name: "Epic", short: "EP" },
    { name: "Oracle Health (Cerner)", short: "OH" },
    { name: "NextGen Healthcare", short: "NG" },
    { name: "Practice Fusion", short: "PF" },
  ] satisfies EhrSystem[],
};
