import Image from "next/image";
import type { SVGProps } from "react";
import { siteConfig } from "@/lib/site-config";

// Stand-in mark for the "CPA Practice" status. If the practice supplies the
// official logo from CPA Australia, set credentials.cpaLogo in site-config.ts
// and <CpaPracticeMark /> shows that file instead of this icon.
export function CpaPracticeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M32 5 9 13v17c0 14.6 9.7 25.3 23 29 13.3-3.7 23-14.4 23-29V13L32 5Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="m21.5 32.5 7.5 7.5 14-16"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type MarkProps = {
  /** Size classes for the icon or logo, e.g. "h-9 w-9". */
  className?: string;
};

export function CpaPracticeMark({ className = "h-16" }: MarkProps) {
  const logo = siteConfig.credentials.cpaLogo;

  if (logo) {
    return (
      <Image
        src={logo}
        alt="CPA Practice"
        width={160}
        height={160}
        className={`object-contain ${className}`}
      />
    );
  }

  return <CpaPracticeIcon className={className} />;
}
