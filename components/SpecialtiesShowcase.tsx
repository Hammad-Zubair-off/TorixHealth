"use client";

import { useState } from "react";
import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type SpecialtyItem = {
  icon: IconName;
  title: string;
};

type SpecialtiesShowcaseProps = {
  heading: string;
  subheading?: string;
  items: SpecialtyItem[];
  initialCount?: number;
  band?: "bg" | "paper" | "tint";
};

/** Specialties grid that shows a preview set with a View More expand control. */
export function SpecialtiesShowcase({
  heading,
  subheading,
  items,
  initialCount = 6,
  band = "bg",
}: SpecialtiesShowcaseProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, initialCount);
  const canToggle = items.length > initialCount;

  return (
    <Section band={band}>
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 max-w-[28ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="mb-8 max-w-[64ch] text-[15px] text-neutral-600">
            {subheading}
          </p>
        ) : (
          <div className="mb-8" />
        )}

        <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <li key={item.title}>
              <div className="card-lift card-lift-light flex h-full items-start gap-3 rounded-md border border-divider bg-band-paper p-5">
                <Icon
                  name={item.icon}
                  size={22}
                  className="mt-0.5 shrink-0 text-accent-700"
                />
                <h3 className="text-[16px] font-semibold text-text">{item.title}</h3>
              </div>
            </li>
          ))}
        </ul>

        {canToggle ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-transparent bg-accent px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(10,80,208,0.28)] transition-[transform,box-shadow,background-color] duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-[0_14px_36px_rgba(10,80,208,0.34)] active:translate-y-0 active:scale-[0.98]"
            >
              {expanded ? "View Less" : "View More"}
              <Icon
                name={expanded ? "chevronDown" : "arrowRight"}
                size={14}
                className={expanded ? "rotate-180" : undefined}
              />
            </button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
