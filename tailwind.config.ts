import type { Config } from "tailwindcss";

// Design tokens from the plan doc's "Design system direction" section.
// Swap the accent / fonts here and every page follows — that's the point
// of locking this down before building individual pages.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10202E", // near-black navy, body text + headings
        paper: "#FFFFFF", // true white, no decorative tint
        accent: "#C1572B", // single confident accent — committed decisions, links, the widget
        muted: "#6B7280",
        hairline: "#DDDDDD",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"], // headings — confident, editorial
        sans: ["var(--font-sans)", "sans-serif"], // body + UI — clean grotesque
      },
      maxWidth: {
        content: "40rem",
      },
    },
  },
  plugins: [],
};
export default config;
