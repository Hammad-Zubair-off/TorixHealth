import { Container, Section } from "@/components/Container";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  practice?: string;
};

type TestimonialsProps = {
  heading: string;
  subheading?: string;
  items: Testimonial[];
  band?: "bg" | "paper" | "tint";
};

/** Client testimonials grid for the homepage. */
export function Testimonials({
  heading,
  subheading,
  items,
  band = "tint",
}: TestimonialsProps) {
  return (
    <Section band={band}>
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 max-w-[24ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="mb-10 max-w-[60ch] text-[15px] leading-[1.6] text-neutral-600">
            {subheading}
          </p>
        ) : (
          <div className="mb-10" />
        )}

        <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={`${item.name}-${item.role}`}>
              <figure className="card-lift card-lift-light flex h-full flex-col rounded-md border border-divider bg-band-paper p-6">
                <blockquote className="m-0 flex-1 text-[15px] leading-[1.65] text-neutral-700">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-divider pt-4">
                  <p className="m-0 text-[15px] font-semibold text-text">
                    {item.name}
                  </p>
                  <p className="m-0 mt-1 text-[13px] text-neutral-600">
                    {item.role}
                    {item.practice ? ` · ${item.practice}` : null}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
