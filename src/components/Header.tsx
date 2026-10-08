"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const { primary } = siteConfig.headerCtas;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur transition-colors ${
        scrolled ? "border-ink/20" : "border-ink/10"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setOpen(false)}
          className="py-3"
        >
          <Logo
            priority
            className={`transition-[height] duration-200 ${
              scrolled ? "h-12 md:h-14" : "h-14 md:h-[4.5rem]"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[15px] font-medium underline decoration-2 underline-offset-[10px] transition-colors ${
                  active
                    ? "text-primary-700 decoration-accent-500"
                    : "text-ink decoration-transparent hover:text-primary-700 hover:decoration-ink/30"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="text-[15px] font-semibold tabular text-ink transition-colors hover:text-primary-700"
          >
            {siteConfig.contact.phoneDisplay}
          </a>
          <Link href={primary.href} className="btn-primary">
            {primary.label}
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={siteConfig.contact.phoneHref}
            aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
            className="flex h-11 w-11 items-center justify-center rounded-md text-primary-700"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] border-t border-ink/10" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="container-page py-3" aria-label="Mobile">
            <ul className="divide-y divide-ink/10">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block py-4 font-heading text-2xl ${
                      isActive(item.href) ? "text-primary-700" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pb-4 pt-3">
              <Link
                href={primary.href}
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                {primary.label}
              </Link>
              <a
                href={siteConfig.contact.phoneHref}
                className="btn-outline-dark w-full tabular"
              >
                Ring {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
