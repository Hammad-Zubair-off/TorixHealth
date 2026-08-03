import { Container, Section } from "@/components/Container";
import { Icon } from "@/components/icons";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  heading: string;
  items: FAQItem[];
};

export function FAQAccordion({ heading, items }: FAQAccordionProps) {
  return (
    <Section band="tint" className="border-y border-accent-300">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-8 max-w-[20ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        <div className="mx-auto max-w-[70ch]">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-md border-b border-divider px-3 py-1 transition-[background-color,border-color] duration-200 hover:bg-band-paper/70 open:bg-band-paper open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-semibold text-text marker:content-none transition-colors duration-200 group-open:text-accent-700">
                <span>{item.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700 transition-transform duration-200 group-open:rotate-180 group-open:bg-accent group-open:text-white">
                  <Icon name="chevronDown" size={16} />
                </span>
              </summary>
              <p className="animate-[faqIn_220ms_ease-out] pb-4 pr-10 text-[14px] leading-[1.65] text-neutral-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
