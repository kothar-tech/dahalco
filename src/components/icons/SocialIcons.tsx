import type { SVGProps } from "react";

// lucide-react dropped brand/logo icons, so these small social glyphs are
// hand-drawn here instead of pulling in a whole separate icon package.
type IconProps = SVGProps<SVGSVGElement>;

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5Z" />
      <path d="M5.25 7.02C6.35 7.02 7.25 6.12 7.25 5.01C7.25 3.9 6.35 3 5.25 3C4.14 3 3.25 3.9 3.25 5.01C3.25 6.12 4.14 7.02 5.25 7.02Z" />
      <path d="M13.5 8.5H10.27V20.5H13.5V14.35C13.5 12.6 13.83 10.9 16 10.9C18.13 10.9 18.16 12.9 18.16 14.46V20.5H21.39V13.8C21.39 11 20.8 8.24 17.14 8.24C15.4 8.24 14.22 9.2 13.74 10.11H13.5V8.5Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21V13.2H16.1L16.5 10.1H13.5V8.1C13.5 7.2 13.7 6.6 15 6.6H16.6V3.8C16.3 3.8 15.4 3.7 14.3 3.7C12 3.7 10.5 5.1 10.5 7.8V10.1H8V13.2H10.5V21H13.5Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
