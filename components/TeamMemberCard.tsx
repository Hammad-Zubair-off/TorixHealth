import Link from "next/link";
import { cn } from "@/lib/utils";

export type MemberCard = {
  name: string;
  role: string;
  /** TODO: real photo pending */
  photoSrc?: string;
  href?: string;
};

export function TeamMemberCard({ name, role, photoSrc, href }: MemberCard) {
  const inner = (
    <>
      <div className="mb-4 aspect-[4/5] w-full overflow-hidden rounded-md border border-divider bg-neutral-200 transition-[border-color,box-shadow] duration-200 group-hover:border-accent-300 group-hover:shadow-md">
        {photoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoSrc}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[repeating-linear-gradient(45deg,rgba(107,92,219,0.07)_0_8px,transparent_8px_16px)] text-[12px] text-neutral-500">
            [PLACEHOLDER: Photo]
          </div>
        )}
      </div>
      <h3 className="mb-1 text-[16px] text-text transition-colors duration-200 group-hover:text-accent-700">
        {name}
      </h3>
      <p className="text-[13px] text-neutral-600">{role}</p>
    </>
  );

  const className = cn("card-lift group block");

  if (href) {
    return (
      <Link href={href} className={cn(className, "no-underline")}>
        {inner}
      </Link>
    );
  }
  return <article className={className}>{inner}</article>;
}
