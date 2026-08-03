"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/icons";
import { mainNav, type NavGroup, type NavLink } from "@/lib/nav";
import { cn } from "@/lib/utils";

function isGroup(item: NavLink | NavGroup): item is NavGroup {
  return "children" in item;
}

function DesktopDropdown({ item }: { item: NavGroup }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-md bg-transparent px-2 py-1.5 text-[14px] font-medium text-text transition-colors duration-150 hover:bg-accent-100 hover:text-accent-700"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <Icon name="chevronDown" size={14} className={cn(open && "rotate-180")} />
      </button>
      {open ? (
        <div
          id={id}
          role="menu"
          className="absolute left-0 top-full z-50 min-w-[240px] rounded-md border border-accent-300 bg-band-paper py-2 shadow-md"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              className="block px-4 py-2.5 text-[14px] text-text no-underline transition-colors duration-150 hover:bg-accent-100 hover:text-accent-700"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-divider bg-[color-mix(in_srgb,var(--band-paper)_90%,transparent)] backdrop-blur-[12px]">
      <Container
        as="nav"
        className="flex flex-wrap items-center gap-4 py-4"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="mr-auto font-[family-name:var(--font-heading)] text-[19px] font-semibold tracking-[-0.02em] text-text no-underline"
        >
          TORIX
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            isGroup(item) ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-1.5 text-[14px] font-medium text-text no-underline transition-colors duration-150 hover:bg-accent-100 hover:text-accent-700"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-divider bg-band-paper p-2 text-text lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Icon name={mobileOpen ? "close" : "menu"} size={20} />
        </button>
      </Container>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-divider bg-band-paper lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) =>
              isGroup(item) ? (
                <div key={item.label} className="border-b border-divider py-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between bg-transparent py-3 text-left text-[15px] font-medium text-text"
                    aria-expanded={openGroup === item.label}
                    onClick={() =>
                      setOpenGroup((g) => (g === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <Icon
                      name="chevronDown"
                      size={16}
                      className={cn(openGroup === item.label && "rotate-180")}
                    />
                  </button>
                  {openGroup === item.label ? (
                    <div className="flex flex-col gap-1 pb-3 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-[14px] text-neutral-700 no-underline"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-divider py-3 text-[15px] font-medium text-text no-underline"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="pt-3">
              <Button href="/contact" variant="primary" className="w-full">
                Book a Consultation
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
