import Link from "next/link";
import { Button } from "@/components/Button";
import { Container, Kicker, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type OverviewCard = {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  tag?: string;
  ctaLabel?: string;
};

type ServicesOverviewProps = {
  servicesHeading: string;
  servicesNote?: string;
  solutionsHeading: string;
  services: OverviewCard[];
  solutions: OverviewCard[];
};

/** Keeps Services and Solutions visually distinct (light vs deep). */
export function ServicesOverview({
  servicesHeading,
  servicesNote,
  solutionsHeading,
  services,
  solutions,
}: ServicesOverviewProps) {
  return (
    <>
      <Section band="tint" className="border-y border-accent-300">
        <Container className="py-[clamp(56px,6.5vw,92px)]">
          <Kicker className="mb-4">Services</Kicker>
          <h2 className="mb-3 max-w-[20ch] text-[clamp(26px,2.7vw,34px)] text-text">
            {servicesHeading}
          </h2>
          {servicesNote ? (
            <p className="mb-8 max-w-[56ch] text-[15px] text-neutral-600">
              {servicesNote}
            </p>
          ) : (
            <div className="mb-8" />
          )}
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="card-lift card-lift-light group flex h-full flex-col rounded-md border border-divider bg-band-paper p-7 no-underline"
                >
                  <Icon
                    name={item.icon}
                    size={22}
                    className="mb-3 text-accent transition-colors duration-200 group-hover:text-accent-700"
                  />
                  <h3 className="mb-2 text-[16px] text-text">{item.title}</h3>
                  <p className="mb-3 flex-1 text-[13px] text-neutral-600">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-accent transition-all duration-200">
                    {item.ctaLabel ?? item.title}
                    <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section band="deep">
        <Container className="py-[clamp(56px,6.5vw,92px)]">
          <Kicker className="mb-4 text-accent-300">Solutions</Kicker>
          <h2 className="mb-8 max-w-[20ch] text-[clamp(26px,2.7vw,34px)] text-band-deep-text">
            {solutionsHeading}
          </h2>
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <li key={item.href}>
                <div className="card-lift card-lift-deep flex h-full flex-col rounded-md border border-white/10 bg-white/5 p-7">
                  {item.tag ? (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-accent/20 px-2.5 py-0.5 text-[11px] font-semibold text-accent-300">
                      {item.tag}
                    </span>
                  ) : null}
                  <Icon name={item.icon} size={22} className="mb-3 text-accent-300" />
                  <h3 className="mb-2 text-[21px] text-band-deep-text">{item.title}</h3>
                  <p className="mb-5 flex-1 text-[13px] text-band-deep-muted">
                    {item.description}
                  </p>
                  <Button
                    href={item.href}
                    variant="secondary"
                    className="self-start"
                  >
                    {item.ctaLabel ?? "Explore"}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
