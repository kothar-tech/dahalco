"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Landmark, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-slate-200 shadow-[0_4px_20px_-8px_rgba(15,32,55,0.15)]" : "border-transparent"
      }`}
    >
      <div
        className={`container-page flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-md shadow-primary-900/20 transition-transform group-hover:scale-105">
            <Landmark className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-bold text-slate-900">
              {siteConfig.name}
            </span>
            <span className="text-xs font-medium text-slate-500">
              {siteConfig.shortTagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? "text-primary-700" : "text-slate-600 hover:text-primary-700"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent-500 transition-transform duration-200 group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={siteConfig.headerCtas.secondary.href} className="btn-outline-dark">
            {siteConfig.headerCtas.secondary.label}
          </Link>
          <Link href={siteConfig.headerCtas.primary.href} className="btn-primary">
            {siteConfig.headerCtas.primary.label}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                    pathname === item.href
                      ? "bg-primary-50 text-primary-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 flex items-center gap-4 border-t border-slate-100 px-3 pt-4">
                <a href={siteConfig.contact.phoneHref} className="text-sm text-slate-600">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="mt-3 flex flex-col gap-2 px-3">
                <Link
                  href={siteConfig.headerCtas.secondary.href}
                  onClick={() => setOpen(false)}
                  className="btn-outline-dark w-full"
                >
                  {siteConfig.headerCtas.secondary.label}
                </Link>
                <Link
                  href={siteConfig.headerCtas.primary.href}
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  {siteConfig.headerCtas.primary.label}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
