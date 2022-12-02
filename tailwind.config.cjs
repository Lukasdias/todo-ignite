/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Inter", "serif"],
      mono: ["Inter", "monospace"],
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      gray: {
        100: "#f2f2f2",
        200: "#d9d9d9",
        300: "#808080",
        400: "#333333",
        500: "#262626",
        600: "#1a1a1a",
        700: "#0d0d0d",
      },
      purple: {
        400: "#8284fa",
        700: "#5e60ce",
      },
      blue: {
        400: "#4ea8de",
        700: "#1e6f9f",
      },
      danger: "#e25858",
    },
    borderRadius: {
      none: "0",
      xs: "0.25rem",
      sm: "0.3125rem",
      default: "0.5rem",
      lg: "1.25rem",
      xl: "2.5rem",
      full: "9999px",
    },
    extend: {},
  },
  plugins: [],
};
