type FinanceIllustrationProps = {
  className?: string;
};

// Hand-built scene (not a stock photo) so it always matches the live theme —
// every fill below is a `fill-primary-*` / `fill-accent-*` class, so editing
// the color scales in tailwind.config.js re-skins this automatically.
export default function FinanceIllustration({ className }: FinanceIllustrationProps) {
  return (
    <svg
      viewBox="0 0 520 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustration of a tax return document, a compliance chart and a growth badge"
    >
      <defs>
        <filter id="fi-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#0c1729" floodOpacity="0.18" />
        </filter>
      </defs>

      <ellipse cx="255" cy="392" rx="190" ry="22" className="fill-primary-900/10" />

      {/* dashed connector flow */}
      <path
        d="M180 120 C 230 90, 300 90, 350 130"
        className="stroke-primary-200"
        strokeWidth="2"
        strokeDasharray="2 8"
        strokeLinecap="round"
      />

      {/* Chart card (back, rotated right) */}
      <g transform="rotate(7 340 230)" filter="url(#fi-shadow)">
        <rect x="250" y="150" width="190" height="150" rx="20" className="fill-primary-800" />
        <circle cx="410" cy="172" r="6" className="fill-accent-400" />
        <rect x="278" y="180" width="80" height="9" rx="4.5" className="fill-white/25" />
        <g>
          <rect x="278" y="230" width="24" height="40" rx="6" className="fill-accent-300" />
          <rect x="312" y="215" width="24" height="55" rx="6" className="fill-accent-400" />
          <rect x="346" y="195" width="24" height="75" rx="6" className="fill-accent-500" />
          <rect x="380" y="205" width="24" height="65" rx="6" className="fill-accent-400" />
        </g>
        <path
          d="M278 214 L306 198 L332 210 L406 158"
          className="stroke-white/70"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Document card (front, rotated left) */}
      <g transform="rotate(-6 195 210)" filter="url(#fi-shadow)">
        <rect x="80" y="70" width="230" height="290" rx="20" className="fill-white" />
        <rect x="104" y="98" width="182" height="14" rx="7" className="fill-primary-700" />
        <rect x="104" y="136" width="160" height="9" rx="4.5" className="fill-slate-200" />
        <rect x="104" y="158" width="140" height="9" rx="4.5" className="fill-slate-200" />
        <rect x="104" y="180" width="170" height="9" rx="4.5" className="fill-slate-200" />
        <rect x="104" y="212" width="182" height="1" className="fill-slate-100" />
        <rect x="104" y="234" width="110" height="9" rx="4.5" className="fill-slate-200" />
        <rect x="104" y="256" width="150" height="9" rx="4.5" className="fill-slate-200" />
        <rect x="104" y="278" width="90" height="9" rx="4.5" className="fill-slate-200" />

        <circle cx="270" cy="330" r="34" className="fill-accent-500" />
        <path
          d="M255 330 L266 341 L286 317"
          className="stroke-white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Floating coin badge */}
      <g transform="translate(388 92)" filter="url(#fi-shadow)">
        <circle cx="0" cy="6" r="30" className="fill-accent-600" />
        <circle cx="0" cy="0" r="30" className="fill-accent-400" />
        <text
          x="0"
          y="9"
          textAnchor="middle"
          className="fill-white"
          style={{ font: "700 26px var(--font-heading), sans-serif" }}
        >
          $
        </text>
      </g>

      {/* sparkle accents */}
      <circle cx="120" cy="60" r="5" className="fill-accent-300" />
      <circle cx="440" cy="330" r="6" className="fill-primary-300" />
      <path
        d="M60 250 l6 -14 l6 14 l-6 -4 z"
        className="fill-accent-300"
        transform="rotate(20 66 236)"
      />
    </svg>
  );
}
