import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Shared 9-step medical billing process — used on home and RCM. */
export const billingProcessContent = {
  heading: "Our 9-Step Medical Billing Process",
  subheading:
    "From the first eligibility check to the final report — each stage is owned, not just touched.",
  steps: [
    {
      icon: "check" as IconName,
      title: "Eligibility Verification",
      description:
        "Insurance surprises? Not on our watch. We verify patient coverage before they even step into your clinic, as your time is too valuable to waste on verification pitfalls.",
    },
    {
      icon: "clipboard" as IconName,
      title: "Prior Authorization",
      description:
        "We deal with the red tape, so no more hindered claims. From charge capturing to chasing approvals, we get your treatments paid fast — think of us as your front desk officer handling the \"please hold\" music.",
    },
    {
      icon: "fileText" as IconName,
      title: "Charge Capture",
      description:
        "Every service is counted, coded, and claimed beforehand. We make sure every visit, procedure, and modifier is captured correctly. We really don't like redoing stuff that can be corrected the first time.",
    },
    {
      icon: "layers" as IconName,
      title: "Claim Submission",
      description:
        "Clean claims aren't optional. They're our baseline. We scrub, file, and submit your claims with surgical precision, reducing rejections and speeding up your cash flow. Every code is checked by an experienced coder.",
    },
    {
      icon: "monitor" as IconName,
      title: "Payment Processing",
      description:
        "We make sure claim approval means you are getting paid. From EOBs to ERA tracking, we keep everything organized and flowing, so your income isn't stuck in a never-ending cycle.",
    },
    {
      icon: "clock" as IconName,
      title: "AR Follow-ups",
      description:
        "Old claims don't scare us — we know how to pull them back. We follow up with payers, sort out delays, and keep your revenue cycle moving even when payers stall.",
    },
    {
      icon: "alert" as IconName,
      title: "Denial Management",
      description:
        "Denials happen. But we don't just let it be. Our team investigates every denial, corrects the issue, and gets it resubmitted fast. We chase down every single penny for you tirelessly.",
    },
    {
      icon: "headphones" as IconName,
      title: "Patient Collection",
      description:
        "We make it easy for patients to pay, and painless for you to ask. From soft reminders to secure online portals, we keep collections friendly, transparent, and on spot.",
    },
    {
      icon: "activity" as IconName,
      title: "Reporting and Analysis",
      description:
        "What's working? What's leaking? Torix Solutions shows you a holistic picture. With real-time dashboards and actionable insights, you can make smarter decisions and hit revenue goals without delays.",
    },
  ] satisfies ProcessStep[],
};
