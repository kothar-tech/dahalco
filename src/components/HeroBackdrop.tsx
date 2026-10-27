// Flat decorative backdrop for page headers, light or dark: a faint plus-mark
// grid and a few outlined rings. The parent needs `relative overflow-hidden`, and its
// content needs `relative` so it sits above this layer.
export default function HeroBackdrop({ dark = true }: { dark?: boolean }) {
  const ink = dark ? "text-white" : "text-ink";
  const ring = dark ? "border-white/10" : "border-ink/10";

  return (
    <>
      <svg
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 h-full w-full ${ink}`}
      >
        <defs>
          <pattern
            id="hero-plus"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M24 20v8M20 24h8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.14"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-plus)" />
      </svg>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-40 -top-40 hidden h-[34rem] w-[34rem] rounded-full border ${ring} sm:block`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-24 -top-24 hidden h-[28rem] w-[28rem] rounded-full border ${ring} sm:block`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full border border-accent-500/30"
      />
    </>
  );
}
