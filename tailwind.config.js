/** @type {import('tailwindcss').Config} */

// Colours are taken from the Dahal & Co logo (public/images/logo-original.png).
// Change a value here and the whole site follows.

// Primary scale centred on the logo blue (#0048a8).
const primary = {
  50: "#eef5fc",
  100: "#d9e9f8",
  200: "#b8d5f1",
  300: "#87b8e6",
  400: "#4f94d6",
  500: "#2b74c0",
  600: "#1c5aa8",
  700: "#0048a8",
  800: "#053a82",
  900: "#0a326b",
  950: "#071f45",
};

// Warm accent, used sparingly for the main action and small marks.
const accent = {
  50: "#fff8ed",
  100: "#ffefd4",
  200: "#ffdba8",
  300: "#ffc170",
  400: "#ff9f38",
  500: "#f98012",
  600: "#da5f08",
  700: "#b4400a",
  800: "#923310",
  900: "#782b10",
  950: "#411405",
};

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { ...primary, DEFAULT: primary[700] },
        accent: { ...accent, DEFAULT: accent[600] },
        // Text colours, tinted toward the logo blue instead of neutral grey.
        ink: { DEFAULT: "#0e1a36", soft: "#38435f", muted: "#5b6682" },
        // Warm paper tones for page backgrounds and rules.
        paper: { DEFAULT: "#f7f3ec", deep: "#eee8dc", line: "#d9d1c1" },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "Cambria", "serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.6rem, 5.8vw, 5rem)",
          { lineHeight: "1.03", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 4.4vw, 3.75rem)",
          { lineHeight: "1.06", letterSpacing: "-0.018em" },
        ],
        "display-md": [
          "clamp(1.75rem, 3vw, 2.6rem)",
          { lineHeight: "1.12", letterSpacing: "-0.012em" },
        ],
      },
      maxWidth: {
        page: "1240px",
      },
    },
  },
  plugins: [],
};
