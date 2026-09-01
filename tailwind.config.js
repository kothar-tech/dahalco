/** @type {import('tailwindcss').Config} */

// ---------------------------------------------------------------------------
// Brand colors live here and nowhere else. Every component references
// `primary-*` / `accent-*` classes instead of raw hex values, so once the
// real logo arrives you only need to replace the hex codes in these two
// scales (and optionally swap the font names below) to re-skin the entire
// site. Current values are a placeholder "trust navy + warm gold" pairing
// chosen for an accounting/tax practice — swap them for real brand colors
// derived from the logo when it's available.
// ---------------------------------------------------------------------------
const primary = {
  50: "#eef4fc",
  100: "#dbe8f9",
  200: "#b3d0f0",
  300: "#80aee2",
  400: "#4c86cf",
  500: "#2c65ae",
  600: "#1f4e8c",
  700: "#1c3f70",
  800: "#1a3459",
  900: "#182a47",
  950: "#0c1729",
};

// Vivid, saturated amber-gold — the "spark" color. Used for accents, CTAs,
// and anything that needs to visually pop against the navy (never as a
// muted/desaturated tone, or it reads as camouflaged rather than a highlight).
const accent = {
  50: "#fffbeb",
  100: "#fef3c7",
  200: "#fde488",
  300: "#fbcd4c",
  400: "#f9b721",
  500: "#f0990a",
  600: "#d17706",
  700: "#a8590a",
  800: "#89460f",
  900: "#733b10",
  950: "#421d03",
};

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { ...primary, DEFAULT: primary[600] },
        accent: { ...accent, DEFAULT: accent[600] },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
