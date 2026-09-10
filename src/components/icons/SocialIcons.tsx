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

export function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.6 12.23c0-.74-.07-1.45-.19-2.13H12v4.03h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.74 2.98-4.3 2.98-7.42Z" />
      <path d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.75-5.59-4.11H3.07v2.58A10 10 0 0 0 12 22Z" />
      <path d="M6.41 13.92A6 6 0 0 1 6.1 12c0-.67.12-1.32.31-1.92V7.5H3.07A10 10 0 0 0 2 12c0 1.61.39 3.14 1.07 4.5l3.34-2.58Z" />
      <path d="M12 5.98c1.47 0 2.79.5 3.83 1.5l2.87-2.87C16.95 2.99 14.7 2 12 2 7.96 2 4.47 4.3 3.07 7.5l3.34 2.58C7.2 7.73 9.4 5.98 12 5.98Z" />
    </svg>
  );
}
