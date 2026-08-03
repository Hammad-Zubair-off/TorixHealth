import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type TrustItem = {
  icon: IconName;
  label: string;
  description?: string;
};

type TrustBarProps = {
  items: TrustItem[];
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <Section band="paper" className="border-y border-divider">
      <Container className="py-7">
        <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
          {items.map((item) => (
            <li
              key={item.label}
              className="card-lift flex items-start gap-3 rounded-md border border-transparent px-3 py-3 hover:border-accent-200 hover:bg-accent-100/60 hover:shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-100 text-accent transition-colors duration-200">
                <Icon name={item.icon} size={18} />
              </span>
              <div>
                <span className="block text-[13px] font-semibold text-text sm:text-[14px]">
                  {item.label}
                </span>
                {item.description ? (
                  <span className="mt-0.5 block text-[12px] leading-snug text-neutral-600">
                    {item.description}
                  </span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
