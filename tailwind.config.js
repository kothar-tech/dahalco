/** @type {import('tailwindcss').Config} */

// Primary scale centred on the Dahal & Co logo blue (#0048a8).
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

// Soft warm accent for CTAs against the logo blue.
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
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: [
          "var(--font-heading)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
